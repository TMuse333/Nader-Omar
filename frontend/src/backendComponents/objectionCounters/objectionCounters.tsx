"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface Objection {
  id: string;
  objection: string;
  response: string;
  createdAt: string;
}

// Pre-populated common objections for real estate
const SAMPLE_OBJECTIONS: Omit<Objection, "id" | "createdAt">[] = [
  {
    objection: "I'm just browsing, not ready to share my info",
    response: "No pressure at all! When you're ready, I'd be happy to send you listings that match what you're looking for. What type of home are you interested in?",
  },
  {
    objection: "I already have an agent",
    response: "That's great! Having professional guidance is important. If you ever need a second opinion or want to explore the Fall River market specifically, I'm here to help.",
  },
  {
    objection: "I don't want to be contacted by salespeople",
    response: "I completely understand. My approach is simply to provide helpful information when you need it. Would you prefer to receive listings via email only, with no calls?",
  },
  {
    objection: "I'm not sure if I can afford to buy right now",
    response: "Many people feel that way! A quick chat with a mortgage broker can clarify your options - you might be surprised. Would you like me to connect you with a trusted broker for a free, no-obligation consultation?",
  },
];

const ObjectionCounters: React.FC = () => {
  const [objections, setObjections] = useState<Objection[]>([]);
  const [newObjection, setNewObjection] = useState("");
  const [newResponse, setNewResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSamples, setShowSamples] = useState(false);

  // Load objections from localStorage (could be upgraded to API later)
  useEffect(() => {
    const stored = localStorage.getItem("nader_objections");
    if (stored) {
      setObjections(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  // Save to localStorage
  const saveObjections = (updated: Objection[]) => {
    localStorage.setItem("nader_objections", JSON.stringify(updated));
    setObjections(updated);
  };

  const handleAddObjection = async () => {
    if (!newObjection.trim() || !newResponse.trim()) return;

    setSaving(true);

    const newEntry: Objection = {
      id: Date.now().toString(),
      objection: newObjection.trim(),
      response: newResponse.trim(),
      createdAt: new Date().toISOString(),
    };

    // Also send to Qdrant for the chatbot to use
    try {
      await axios.post("/api/send-to-qdrant", {
        type: "objection_counter",
        text: `When someone says: "${newEntry.objection}" - Respond with: "${newEntry.response}"`,
        source: "admin_dashboard",
      });
    } catch (err) {
      console.error("Error saving to Qdrant:", err);
      // Continue anyway - still save locally
    }

    saveObjections([...objections, newEntry]);
    setNewObjection("");
    setNewResponse("");
    setSaving(false);
  };

  const handleDelete = (id: string) => {
    saveObjections(objections.filter((o) => o.id !== id));
  };

  const handleUseSample = (sample: Omit<Objection, "id" | "createdAt">) => {
    setNewObjection(sample.objection);
    setNewResponse(sample.response);
    setShowSamples(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">
          💬 Objection Counters
        </h1>
        <p className="text-gray-400">
          Add common objections you hear when asking for contact information, along with your best responses.
          The chatbot will learn from these to handle similar situations.
        </p>
      </div>

      {/* Add New Objection Form */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg text-white">Add New Counter</h2>
          <button
            onClick={() => setShowSamples(!showSamples)}
            className="text-sm text-cyan-400 hover:text-cyan-300 font-medium"
          >
            {showSamples ? "Hide samples" : "Show sample objections →"}
          </button>
        </div>

        {/* Sample Objections */}
        <AnimatePresence>
          {showSamples && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-4 overflow-hidden"
            >
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-sm text-cyan-300 font-medium mb-3">
                  Click to use these as templates:
                </p>
                <div className="space-y-2">
                  {SAMPLE_OBJECTIONS.map((sample, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleUseSample(sample)}
                      className="w-full text-left p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]"
                    >
                      <p className="font-medium text-white text-sm">
                        &quot;{sample.objection}&quot;
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              What they say (the objection):
            </label>
            <input
              type="text"
              value={newObjection}
              onChange={(e) => setNewObjection(e.target.value)}
              placeholder="e.g., I'm just browsing right now"
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Your response:
            </label>
            <textarea
              value={newResponse}
              onChange={(e) => setNewResponse(e.target.value)}
              placeholder="How you would naturally respond to this objection..."
              rows={3}
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            />
          </div>
          <button
            onClick={handleAddObjection}
            disabled={!newObjection.trim() || !newResponse.trim() || saving}
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
          >
            {saving ? "Saving..." : "Add Objection Counter"}
          </button>
        </div>
      </div>

      {/* Existing Objections */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
        <h2 className="font-bold text-lg text-white mb-4">
          Your Objection Counters ({objections.length})
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : objections.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-2">No objection counters yet.</p>
            <p className="text-sm text-gray-500">
              Add your first one above, or use the sample templates to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {objections.map((obj) => (
              <div
                key={obj.id}
                className="border border-[#2a2a2a] rounded-lg p-4 hover:bg-[#2a2a2a]/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-white mb-2">
                      <span className="text-red-400">Objection:</span> &quot;{obj.objection}&quot;
                    </p>
                    <p className="text-gray-400 text-sm">
                      <span className="text-green-400 font-medium">Response:</span> {obj.response}
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                      Added: {new Date(obj.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(obj.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
        <p className="text-sm text-amber-300">
          <strong>💡 Tip:</strong> The more objection counters you add, the better the chatbot
          will handle hesitant visitors. Think about the most common reasons people don&apos;t
          want to share their contact info, and how you&apos;d naturally respond.
        </p>
      </div>
    </div>
  );
};

export default ObjectionCounters;
