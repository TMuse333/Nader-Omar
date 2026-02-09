"use client";

import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

type QdrantPayload = {
  type: string;
  text?: string;
  source?: string;
  createdAt?: string | number;
  question?: string;
  section?: string;
};

type QdrantPoint = {
  id: string | number;
  payload: QdrantPayload;
};

const QdrantViewer: React.FC = () => {
  const [points, setPoints] = useState<QdrantPoint[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortNewest, setSortNewest] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<QdrantPoint | null>(null);

  const fetchPoints = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/pull-from-qdrant");
      setPoints(response.data.points || []);
    } catch (err) {
      let message = "Unknown error";
      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === "string") {
        message = err;
      }
      console.error("Error fetching Qdrant points:", message);
      setError("Failed to load Qdrant data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const filteredAndSortedPoints = useMemo(() => {
    return points
      .filter((point) => {
        const payloadString = JSON.stringify(point.payload || {}).toLowerCase();
        return payloadString.includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        const dateA = new Date(a.payload?.createdAt || 0).getTime();
        const dateB = new Date(b.payload?.createdAt || 0).getTime();
        return sortNewest ? dateB - dateA : dateA - dateB;
      });
  }, [points, searchTerm, sortNewest]);

  // Group by type for stats
  const typeStats = useMemo(() => {
    const stats: Record<string, number> = {};
    points.forEach((p) => {
      const type = p.payload?.type || "unknown";
      stats[type] = (stats[type] || 0) + 1;
    });
    return stats;
  }, [points]);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-white">📚 Knowledge Base</h2>
      <p className="mb-6 text-gray-400">
        This is all the knowledge stored in your database. The chatbot and SEO generator use this to create personalized content.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {Object.entries(typeStats).map(([type, count]) => (
          <div key={type} className="bg-[#1a1a1a] rounded-lg p-3 border border-[#2a2a2a]">
            <p className="text-2xl font-bold text-cyan-400">{count}</p>
            <p className="text-xs text-gray-500 capitalize">{type.replace(/_/g, " ")}</p>
          </div>
        ))}
      </div>

      {/* Search and Sort */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search knowledge..."
          className="flex-grow px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setSortNewest((prev) => !prev)}
          className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-gray-300 hover:bg-[#2a2a2a] transition-colors"
        >
          {sortNewest ? "Newest ↓" : "Oldest ↑"}
        </button>
        <button
          onClick={fetchPoints}
          className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors"
        >
          Refresh
        </button>
      </div>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && !error && filteredAndSortedPoints.length === 0 && (
        <div className="text-center py-8 bg-[#1a1a1a] rounded-xl border border-[#2a2a2a]">
          <p className="text-gray-400">No knowledge entries found.</p>
        </div>
      )}

      {!loading && filteredAndSortedPoints.length > 0 && (
        <ul className="space-y-3">
          {filteredAndSortedPoints.map((point) => (
            <li
              key={point.id}
              className="bg-[#1a1a1a] border border-[#2a2a2a] p-4 rounded-xl hover:border-cyan-500/30 transition-colors cursor-pointer"
              onClick={() => setSelectedPoint(point)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full capitalize">
                      {point.payload?.type || "N/A"}
                    </span>
                    {point.payload?.source && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                        {point.payload.source}
                      </span>
                    )}
                  </div>
                  {point.payload?.text && (
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {point.payload.text}
                    </p>
                  )}
                  {point.payload?.createdAt && (
                    <p className="text-xs text-gray-600 mt-2">
                      {new Date(point.payload.createdAt).toLocaleString()}
                    </p>
                  )}
                </div>
                <span className="text-gray-500 text-sm">→</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {selectedPoint && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedPoint(null)}
        >
          <div
            className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPoint(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4 text-white">Full Entry</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full capitalize">
                  {selectedPoint.payload?.type}
                </span>
                {selectedPoint.payload?.source && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    {selectedPoint.payload.source}
                  </span>
                )}
              </div>
              {selectedPoint.payload?.question && (
                <div>
                  <p className="text-sm text-gray-500">Question:</p>
                  <p className="text-white">{selectedPoint.payload.question}</p>
                </div>
              )}
              {selectedPoint.payload?.section && (
                <div>
                  <p className="text-sm text-gray-500">Section:</p>
                  <p className="text-white">{selectedPoint.payload.section}</p>
                </div>
              )}
              {selectedPoint.payload?.text && (
                <div>
                  <p className="text-sm text-gray-500">Content:</p>
                  <p className="text-gray-300 whitespace-pre-wrap">{selectedPoint.payload.text}</p>
                </div>
              )}
              {selectedPoint.payload?.createdAt && (
                <p className="text-sm text-gray-600">
                  Created: {new Date(selectedPoint.payload.createdAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QdrantViewer;
