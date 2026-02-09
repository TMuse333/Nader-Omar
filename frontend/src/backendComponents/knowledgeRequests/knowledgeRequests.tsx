"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

// Types
type KnowledgeRequest = {
  _id: string;
  question: string;
  description?: string;
  category: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "answered" | "skipped";
  createdAt: string;
  answer?: string;
  answeredAt?: string;
};

// Category configuration for styling
const CATEGORY_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  about: { label: "About You", color: "#60a5fa", bgColor: "bg-blue-500/10" },
  services: { label: "Services", color: "#a78bfa", bgColor: "bg-purple-500/10" },
  process: { label: "Process", color: "#fb923c", bgColor: "bg-orange-500/10" },
  "value-proposition": { label: "Value Props", color: "#34d399", bgColor: "bg-emerald-500/10" },
  areas: { label: "Service Areas", color: "#f472b6", bgColor: "bg-pink-500/10" },
  faq: { label: "FAQ", color: "#22d3ee", bgColor: "bg-cyan-500/10" },
  general: { label: "General", color: "#94a3b8", bgColor: "bg-slate-500/10" },
  testimonials: { label: "Testimonials", color: "#fbbf24", bgColor: "bg-amber-500/10" },
};

const PRIORITY_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  high: { label: "High Priority", color: "#f87171", bgColor: "bg-red-500/20" },
  medium: { label: "Medium", color: "#fbbf24", bgColor: "bg-amber-500/20" },
  low: { label: "Low", color: "#94a3b8", bgColor: "bg-slate-500/20" },
};

const KnowledgeRequests: React.FC = () => {
  const [requests, setRequests] = useState<KnowledgeRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeRequest, setActiveRequest] = useState<KnowledgeRequest | null>(null);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "answered">("pending");
  const [offlineMode, setOfflineMode] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Fetch requests from API
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/knowledge-requests?status=${filter === "all" ? "all" : filter}`);

      if (response.data.error && response.data.error.includes('offline')) {
        setOfflineMode(true);
        setRequests([]);
      } else {
        setOfflineMode(false);
        setRequests(response.data.requests || []);
      }
    } catch (err) {
      console.error("Failed to fetch requests:", err);
      setError("Failed to load requests. The backend may be offline.");
      setOfflineMode(true);
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  // Filter requests
  const filteredRequests = requests.filter(req => {
    if (filter === "all") return true;
    return req.status === filter;
  });

  // Pending count
  const pendingCount = requests.filter(r => r.status === "pending").length;

  // Submit answer
  const handleSubmitAnswer = async () => {
    if (!activeRequest || !answer.trim()) return;

    setSubmitting(true);
    try {
      await axios.post(`/api/knowledge-requests/${activeRequest._id}/answer`, {
        answer: answer.trim(),
      });

      // Refresh requests
      await fetchRequests();

      // Reset form
      setActiveRequest(null);
      setAnswer("");
    } catch (err) {
      console.error("Failed to submit answer:", err);
      alert("Failed to submit answer. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Skip request (just close modal for now)
  const handleSkip = () => {
    setActiveRequest(null);
    setAnswer("");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Knowledge Requests</h2>
              <p className="text-gray-400 text-sm">Questions from your developer to improve your AI</p>
            </div>
          </div>
          <button
            onClick={() => setShowInfoModal(true)}
            className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-400 hover:text-white hover:border-cyan-500/30 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">What is this?</span>
          </button>
        </div>

        {offlineMode && (
          <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-amber-400 font-medium">Offline Mode</p>
                <p className="text-gray-400 text-sm">Backend service is unavailable. Requests will appear when connected.</p>
              </div>
            </div>
          </div>
        )}

        {!offlineMode && pendingCount > 0 && (
          <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-purple-400">{pendingCount}</span>
              </div>
              <div>
                <p className="text-white font-medium">You have {pendingCount} pending request{pendingCount !== 1 ? "s" : ""}</p>
                <p className="text-gray-400 text-sm">Help improve your chatbot by answering these questions</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {(["pending", "answered", "all"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-cyan-500/20"
            }`}
          >
            {f === "pending" && `Pending (${pendingCount})`}
            {f === "answered" && `Answered (${requests.filter(r => r.status === "answered").length})`}
            {f === "all" && `All (${requests.length})`}
          </button>
        ))}
        <button
          onClick={fetchRequests}
          className="ml-auto px-4 py-2 bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] rounded-lg hover:border-cyan-500/20 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {error && !offlineMode && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
          {error}
        </div>
      )}

      {/* Request List */}
      {filteredRequests.length === 0 ? (
        <div className="text-center py-12 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-medium mb-1">
            {offlineMode ? "No Connection" : "All caught up!"}
          </p>
          <p className="text-gray-400 text-sm">
            {offlineMode
              ? "Connect to see your knowledge requests"
              : `No ${filter === "pending" ? "pending " : ""}requests at the moment.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredRequests.map(request => {
            const catConfig = CATEGORY_CONFIG[request.category] || CATEGORY_CONFIG.general;
            const priorityConfig = PRIORITY_CONFIG[request.priority];

            return (
              <div
                key={request._id}
                className={`bg-[#1a1a1a] border rounded-xl p-4 transition-colors ${
                  request.status === "pending"
                    ? "border-[#2a2a2a] hover:border-purple-500/30 cursor-pointer"
                    : "border-[#2a2a2a] opacity-75"
                }`}
                onClick={() => request.status === "pending" && setActiveRequest(request)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    {/* Tags */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="px-2 py-1 text-xs rounded-full"
                        style={{ backgroundColor: `${catConfig.color}20`, color: catConfig.color }}
                      >
                        {catConfig.label}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${priorityConfig.bgColor}`}
                        style={{ color: priorityConfig.color }}
                      >
                        {priorityConfig.label}
                      </span>
                      {request.status === "answered" && (
                        <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400">
                          Answered
                        </span>
                      )}
                    </div>

                    {/* Question */}
                    <h3 className="text-white font-medium mb-1">{request.question}</h3>
                    {request.description && (
                      <p className="text-gray-400 text-sm">{request.description}</p>
                    )}

                    {/* Answer preview */}
                    {request.answer && (
                      <div className="mt-3 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg">
                        <p className="text-emerald-400 text-xs font-medium mb-1">Your Answer:</p>
                        <p className="text-gray-300 text-sm line-clamp-2">{request.answer}</p>
                      </div>
                    )}
                  </div>

                  {request.status === "pending" && (
                    <button className="p-2 text-purple-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Answer Modal */}
      {activeRequest && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => {
            setActiveRequest(null);
            setAnswer("");
          }}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-2xl w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setActiveRequest(null);
                setAnswer("");
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: `${CATEGORY_CONFIG[activeRequest.category]?.color || "#94a3b8"}20`,
                    color: CATEGORY_CONFIG[activeRequest.category]?.color || "#94a3b8",
                  }}
                >
                  {CATEGORY_CONFIG[activeRequest.category]?.label || activeRequest.category}
                </span>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${PRIORITY_CONFIG[activeRequest.priority].bgColor}`}
                  style={{ color: PRIORITY_CONFIG[activeRequest.priority].color }}
                >
                  {PRIORITY_CONFIG[activeRequest.priority].label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{activeRequest.question}</h3>
              {activeRequest.description && (
                <p className="text-gray-400">{activeRequest.description}</p>
              )}
            </div>

            {/* Answer Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Answer
              </label>
              <textarea
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder="Type your answer here... Be specific and detailed to help your AI assistant give better responses."
                className="w-full h-40 px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                autoFocus
              />
              <p className="text-xs text-gray-500 mt-2">
                {answer.length} characters {answer.length > 50 && "- Looking good!"}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Skip for now
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={!answer.trim() || submitting}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Save Answer
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showInfoModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-lg w-full p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowInfoModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">What are Knowledge Requests?</h3>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Knowledge Requests are questions sent by your developer team to help improve your AI chatbot and content generation.
              </p>

              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#2a2a2a]">
                <h4 className="font-medium text-white mb-2">How it works:</h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>Your developer identifies gaps in your AI&apos;s knowledge based on user conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>They send you targeted questions about specific topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>You answer the questions with your expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span>Your answers are automatically added to the AI&apos;s knowledge base</span>
                  </li>
                </ol>
              </div>

              <p className="text-sm text-gray-400">
                The more questions you answer, the smarter your chatbot becomes at helping potential clients!
              </p>
            </div>

            <button
              onClick={() => setShowInfoModal(false)}
              className="mt-6 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeRequests;
