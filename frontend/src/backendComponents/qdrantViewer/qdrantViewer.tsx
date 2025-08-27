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

  return (
    <div className="max-w-xl mx-auto p-4 text-black">
      <h2 className="text-2xl font-bold mb-4"> Recent Data</h2>
      <p className="mb-4">This is where you can see all of your data in the database
        for blog posts, this can perhaps be useful for content ideas as
        well.
      </p>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setSortNewest((prev) => !prev)}
          className="px-3 py-2 border rounded bg-gray-200 hover:bg-gray-300"
        >
          {sortNewest ? "Newest → Oldest" : "Oldest → Newest"}
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && filteredAndSortedPoints.length === 0 && (
        <p>No data available.</p>
      )}

      {!loading && filteredAndSortedPoints.length > 0 && (
        <ul className="space-y-4">
          {filteredAndSortedPoints.map((point) => (
            <li key={point.id} className="border p-3 rounded bg-gray-50">
              <p>
                <strong>Type:</strong> {point.payload?.type || "N/A"}
              </p>
              {point.payload?.text && (
                <p className="whitespace-pre-wrap line-clamp-3">
                  <strong>Text:</strong> {point.payload.text}
                </p>
              )}
              {point.payload?.source && (
                <p>
                  <strong>Source:</strong> {point.payload.source}
                </p>
              )}
              {point.payload?.createdAt && (
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong>{" "}
                  {new Date(point.payload.createdAt).toLocaleString()}
                </p>
              )}

              <button
                onClick={() => setSelectedPoint(point)}
                className="mt-2 text-blue-600 underline hover:text-blue-800"
              >
                View Full Entry
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {selectedPoint && (
        <div className="fixed inset-0  flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setSelectedPoint(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Full Entry</h3>
            <div className="space-y-2">
              <p>
                <strong>Type:</strong> {selectedPoint.payload?.type}
              </p>
              {selectedPoint.payload?.question && (
                <p>
                  <strong>Question:</strong> {selectedPoint.payload.question}
                </p>
              )}
              {selectedPoint.payload?.section && (
                <p>
                  <strong>Section:</strong> {selectedPoint.payload.section}
                </p>
              )}
              {selectedPoint.payload?.text && (
                <p className="whitespace-pre-wrap">
                  <strong>Text:</strong> {selectedPoint.payload.text}
                </p>
              )}
              {selectedPoint.payload?.source && (
                <p>
                  <strong>Source:</strong> {selectedPoint.payload.source}
                </p>
              )}
              {selectedPoint.payload?.createdAt && (
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong>{" "}
                  {new Date(selectedPoint.payload.createdAt).toLocaleString()}
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
