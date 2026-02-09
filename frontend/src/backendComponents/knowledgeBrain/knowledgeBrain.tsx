"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { Plus, Trash2, X, Loader2 } from "lucide-react";

// Types
type KnowledgeItem = {
  id: string;
  title: string;
  text: string;
  category: string;
  kind?: string;
  tags?: string[];
  source?: string;
};

type CategoryData = {
  id: string;
  label: string;
  count: number;
  items: KnowledgeItem[];
  isCustom?: boolean;
  icon?: string;
  color?: string;
};

type ApiResponse = {
  success: boolean;
  businessName: string;
  totalCount: number;
  categories: Record<string, CategoryData>;
  customCategories: Array<{ id: string; label: string; icon?: string; color?: string }>;
  error?: string;
  source?: string;
};

// Category options for add modal
const CATEGORY_OPTIONS = [
  { id: 'about', label: 'About', description: 'Background, experience, personal info' },
  { id: 'services', label: 'Services', description: 'What you offer, specializations' },
  { id: 'process', label: 'Process', description: 'How you work, step-by-step guides' },
  { id: 'value-proposition', label: 'Value Props', description: 'Why choose you, unique benefits' },
  { id: 'testimonials', label: 'Testimonials', description: 'Client reviews and success stories' },
  { id: 'faq', label: 'FAQ', description: 'Common questions and answers' },
  { id: 'areas', label: 'Areas', description: 'Service areas and locations' },
  { id: 'general', label: 'General', description: 'Contact info, other' },
];

// Category styling configuration
const CATEGORY_STYLES: Record<string, { color: string; bgColor: string; borderColor: string }> = {
  about: { color: "#60a5fa", bgColor: "rgba(59, 130, 246, 0.2)", borderColor: "rgba(59, 130, 246, 0.6)" },
  services: { color: "#a78bfa", bgColor: "rgba(168, 85, 247, 0.2)", borderColor: "rgba(168, 85, 247, 0.6)" },
  process: { color: "#fb923c", bgColor: "rgba(249, 115, 22, 0.2)", borderColor: "rgba(249, 115, 22, 0.6)" },
  "value-proposition": { color: "#34d399", bgColor: "rgba(16, 185, 129, 0.2)", borderColor: "rgba(16, 185, 129, 0.6)" },
  areas: { color: "#f472b6", bgColor: "rgba(236, 72, 153, 0.2)", borderColor: "rgba(236, 72, 153, 0.6)" },
  tips: { color: "#facc15", bgColor: "rgba(234, 179, 8, 0.2)", borderColor: "rgba(234, 179, 8, 0.6)" },
  stories: { color: "#fbbf24", bgColor: "rgba(245, 158, 11, 0.2)", borderColor: "rgba(245, 158, 11, 0.6)" },
  testimonials: { color: "#f472b6", bgColor: "rgba(236, 72, 153, 0.2)", borderColor: "rgba(236, 72, 153, 0.6)" },
  faq: { color: "#22d3ee", bgColor: "rgba(6, 182, 212, 0.2)", borderColor: "rgba(6, 182, 212, 0.6)" },
  general: { color: "#94a3b8", bgColor: "rgba(148, 163, 184, 0.2)", borderColor: "rgba(148, 163, 184, 0.6)" },
  default: { color: "#64748b", bgColor: "rgba(100, 116, 139, 0.2)", borderColor: "rgba(100, 116, 139, 0.6)" },
};

const getStyleForCategory = (categoryId: string) => {
  return CATEGORY_STYLES[categoryId] || CATEGORY_STYLES.default;
};

const KnowledgeBrain: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<KnowledgeItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Add modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formText, setFormText] = useState("");
  const [formCategory, setFormCategory] = useState("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<ApiResponse>("/api/knowledge-brain");
      setData(response.data);
      if (response.data.error) {
        setError(response.data.error);
      }
    } catch (err) {
      console.error("Error fetching knowledge:", err);
      setError("Failed to load knowledge data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Get categories with items
  const categories = useMemo(() => {
    if (!data?.categories) return [];
    return Object.values(data.categories)
      .filter(cat => cat.count > 0)
      .map(cat => ({
        ...cat,
        ...getStyleForCategory(cat.id),
      }));
  }, [data]);

  const totalCount = data?.totalCount || 0;
  const businessName = data?.businessName || "Nader Omar";

  // Calculate circular positions
  const categoryPositions = useMemo(() => {
    const count = categories.length;
    if (count === 0) return [];
    const radius = 160;
    const startAngle = -90;

    return categories.map((cat, index) => {
      const angle = startAngle + (index * 360) / count;
      const radian = (angle * Math.PI) / 180;
      const x = Math.cos(radian) * radius;
      const y = Math.sin(radian) * radius;

      const maxCount = Math.max(...categories.map(c => c.count), 1);
      const size = 45 + (cat.count / maxCount) * 35;

      return { ...cat, x, y, size, angle };
    });
  }, [categories]);

  // Get current category data
  const currentCategoryData = selectedCategory
    ? categories.find(c => c.id === selectedCategory)
    : null;

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!currentCategoryData) return [];
    const items = currentCategoryData.items as KnowledgeItem[];
    if (!searchTerm) return items;
    const query = searchTerm.toLowerCase();
    return items.filter(
      item =>
        (item.text || "").toLowerCase().includes(query) ||
        (item.title || "").toLowerCase().includes(query)
    );
  }, [currentCategoryData, searchTerm]);

  // Handle category selection with animation
  const handleCategoryClick = useCallback((categoryId: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(categoryId);
      setIsZoomed(true);
      setIsAnimating(false);
      setSearchTerm("");
    }, 300);
  }, []);

  // Handle zoom out
  const handleZoomOut = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCategory(null);
      setIsZoomed(false);
      setIsAnimating(false);
    }, 300);
  }, []);

  // Handle add knowledge
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formText.trim()) return;

    setIsSubmitting(true);
    try {
      await axios.post("/api/agent-knowledge", {
        title: formTitle.trim(),
        text: formText.trim(),
        category: formCategory,
      });

      setFormTitle("");
      setFormText("");
      setFormCategory("general");
      setShowAddModal(false);
      await fetchData();
    } catch (err) {
      console.error("Add failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle delete knowledge
  const handleDelete = async (entryId: string) => {
    try {
      await axios.delete("/api/agent-knowledge", {
        data: { entryId },
      });
      setDeleteConfirm(null);
      setSelectedItem(null);
      await fetchData();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // Check if an item can be deleted (only agent_knowledge items)
  const canDelete = (item: KnowledgeItem) => {
    return item.source === "agent_knowledge" || (!item.kind && !item.tags);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (error && totalCount === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-amber-400 font-medium mb-2">Connection Issue</p>
        <p className="text-gray-400 text-sm mb-4">{error}</p>
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{businessName}&apos;s Knowledge Brain</h2>
        <p className="text-gray-400">Everything your AI assistant knows about your business</p>
        {data?.source === 'direct-qdrant' && (
          <p className="text-xs text-amber-400 mt-2">(Using direct Qdrant connection - API offline)</p>
        )}
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-cyan-500/30">
          <span className="text-2xl font-bold text-cyan-400">{totalCount}</span>
          <span className="text-gray-400 text-sm">total items</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
          <span className="text-lg font-semibold text-purple-400">{categories.length}</span>
          <span className="text-gray-400 text-sm">categories</span>
        </div>
        <button
          onClick={fetchData}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 hover:bg-cyan-500/20 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-colors font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Knowledge
        </button>
      </div>

      {/* Main Visualization Container */}
      <div className="relative h-[500px] bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] overflow-hidden">
        {/* Circular Brain View */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
            isAnimating ? "opacity-0 scale-75" : ""
          } ${isZoomed ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
        >
          {/* Background rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-500/10" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/15" />
          <div className="absolute w-[180px] h-[180px] rounded-full border border-cyan-500/20" />

          {/* Animated pulse */}
          <div
            className="absolute w-[250px] h-[250px] rounded-full border border-cyan-500/20 animate-ping"
            style={{ animationDuration: "4s" }}
          />

          {/* Connection lines */}
          <svg className="absolute w-full h-full pointer-events-none">
            {categoryPositions.map((cat) => {
              const centerX = 50;
              const centerY = 50;
              const endX = centerX + (cat.x / 450) * 100;
              const endY = centerY + (cat.y / 450) * 100;

              return (
                <line
                  key={`line-${cat.id}`}
                  x1={`${centerX}%`}
                  y1={`${centerY}%`}
                  x2={`${endX}%`}
                  y2={`${endY}%`}
                  stroke="rgba(6, 182, 212, 0.25)"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Center brain node */}
          <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/30">
            <svg className="w-8 h-8 text-cyan-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-lg font-bold text-white">{totalCount}</span>
          </div>

          {/* Category nodes */}
          {categoryPositions.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="absolute z-10 flex flex-col items-center justify-center rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-125 hover:z-20 hover:shadow-xl"
              style={{
                width: cat.size,
                height: cat.size,
                transform: `translate(${cat.x}px, ${cat.y}px)`,
                backgroundColor: cat.bgColor,
                borderColor: cat.borderColor,
              }}
            >
              <span className="text-lg font-bold" style={{ color: cat.color }}>
                {cat.count}
              </span>
              <span
                className="text-[10px] font-medium text-center leading-tight px-1 truncate max-w-full"
                style={{ color: cat.color }}
              >
                {cat.label}
              </span>
            </button>
          ))}

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-2 bg-[#1a1a1a]/90 rounded-xl border border-[#2a2a2a]">
            <span className="text-xs text-gray-400">Click a category to explore</span>
            <span className="text-[#2a2a2a]">|</span>
            <span className="text-xs text-cyan-400">{categories.length} categories</span>
          </div>
        </div>

        {/* Drilled-down Category View */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a] transition-all duration-500 ease-out flex flex-col ${
            isAnimating ? "opacity-0 scale-75" : ""
          } ${isZoomed ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        >
          {currentCategoryData && (
            <>
              {/* Header */}
              <div
                className="flex-shrink-0 p-4 border-b border-[#2a2a2a]"
                style={{ backgroundColor: currentCategoryData.bgColor }}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleZoomOut}
                    className="p-2 text-gray-400 hover:text-white bg-[#1a1a1a]/50 rounded-lg hover:bg-[#2a2a2a] transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>

                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border-2"
                      style={{ backgroundColor: currentCategoryData.bgColor, borderColor: currentCategoryData.borderColor }}
                    >
                      <span className="text-xl font-bold" style={{ color: currentCategoryData.color }}>
                        {currentCategoryData.count}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{currentCategoryData.label}</h2>
                      <p className="text-sm text-gray-400">
                        {currentCategoryData.count} knowledge items
                      </p>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <div className="mt-4 relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search items..."
                    className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a]/80 border border-[#2a2a2a] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {filteredItems.length === 0 ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: currentCategoryData.bgColor }}
                    >
                      <span className="text-2xl font-bold opacity-50" style={{ color: currentCategoryData.color }}>
                        0
                      </span>
                    </div>
                    <p className="text-gray-400">
                      {searchTerm ? "No items match your search" : "No items in this category yet"}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] p-4 hover:border-cyan-500/30 transition-colors cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            {item.title && (
                              <h4 className="font-medium text-white mb-1">{item.title}</h4>
                            )}
                            {item.text && (
                              <p className="text-sm text-gray-400 line-clamp-2">
                                {item.text}
                              </p>
                            )}
                            {item.tags && item.tags.length > 0 && (
                              <div className="flex gap-1 mt-2">
                                {item.tags.slice(0, 3).map((tag, i) => (
                                  <span key={i} className="px-2 py-0.5 bg-[#2a2a2a] text-gray-400 text-xs rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-gray-500 text-sm flex-shrink-0">View</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4 text-white">Knowledge Entry</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full capitalize">
                  {selectedItem.category}
                </span>
                {selectedItem.kind && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    {selectedItem.kind}
                  </span>
                )}
              </div>
              {selectedItem.title && (
                <div>
                  <p className="text-sm text-gray-500">Title:</p>
                  <p className="text-white font-medium">{selectedItem.title}</p>
                </div>
              )}
              {selectedItem.text && (
                <div>
                  <p className="text-sm text-gray-500">Content:</p>
                  <p className="text-gray-300 whitespace-pre-wrap">{selectedItem.text}</p>
                </div>
              )}
              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div>
                  <p className="text-sm text-gray-500">Tags:</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedItem.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-[#2a2a2a] text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Delete button */}
              {canDelete(selectedItem) && (
                <div className="pt-4 border-t border-[#2a2a2a] mt-4">
                  {deleteConfirm === selectedItem.id ? (
                    <div className="flex items-center gap-3">
                      <span className="text-red-400 text-sm">Delete this entry?</span>
                      <button
                        onClick={() => handleDelete(selectedItem.id)}
                        className="px-3 py-1.5 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-3 py-1.5 bg-[#2a2a2a] text-gray-400 text-sm rounded-lg hover:bg-[#333]"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(selectedItem.id)}
                      className="flex items-center gap-2 px-3 py-1.5 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Entry
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Knowledge Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-[#2a2a2a]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-semibold text-white mb-4">Add Knowledge</h3>

            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Title <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g., Home Buying Process Step 1"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  disabled={isSubmitting}
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Category
                </label>
                <select
                  value={formCategory}
                  onChange={(e) => setFormCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  disabled={isSubmitting}
                >
                  {CATEGORY_OPTIONS.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label} - {cat.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Content <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  placeholder="Enter the knowledge content..."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 resize-y"
                  disabled={isSubmitting}
                />
                <p className="text-xs text-gray-500 mt-1">{formText.length.toLocaleString()} characters</p>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-gray-200"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formTitle.trim() || !formText.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {isSubmitting ? "Adding..." : "Add Knowledge"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBrain;
