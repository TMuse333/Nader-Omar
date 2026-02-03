"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, MessageCircle, Sparkles } from "lucide-react";

// Use localhost in development, production URL otherwise
const DEFAULT_BOT_URL = process.env.NODE_ENV === 'development'
  ? "http://localhost:3000/bot/nader-omar-limited?embed=true"
  : "https://chatbot.focusflowsoftware.com/bot/nader-omar-limited?embed=true";

interface InlineChatbotProps {
  botUrl?: string;
  title?: string;
  subtitle?: string;
  /** Height of the iframe when not expanded (default: 550px for better modal fit) */
  height?: number;
}

const InlineChatbot: React.FC<InlineChatbotProps> = ({
  botUrl = DEFAULT_BOT_URL,
  title = "Chat with Nader",
  subtitle = "Get personalized guidance for your real estate journey",
  height = 550,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandHint, setShowExpandHint] = useState(true);

  // Hide expand hint after 10 seconds or when user expands
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowExpandHint(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowExpandHint(false);
  };

  return (
    <>
      {/* Backdrop when expanded */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Inline Embedded Chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isExpanded ? "fixed inset-4 z-50" : "relative"
        }`}
      >
        {/* Header */}
        <div className="bg-cyan-500 text-white px-4 py-3 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-white/80 text-sm">{subtitle}</p>
            </div>
          </div>

          {/* Expand button with hint */}
          <div className="relative">
            <button
              onClick={handleExpand}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
            >
              {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            {/* Expand hint notification */}
            <AnimatePresence>
              {showExpandHint && !isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  className="absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap"
                >
                  <div className="bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                    <Sparkles size={12} className="text-cyan-500" />
                    <span>Expand for best experience</span>
                  </div>
                  {/* Arrow pointing to button */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Iframe Container - Dynamic height */}
        <div
          className="transition-all duration-300"
          style={{ height: isExpanded ? 'calc(100% - 60px)' : `${height}px` }}
        >
          <iframe
            src={botUrl}
            className="w-full h-full border-0"
            title="Chat with Nader Omar"
            allow="microphone"
          />
        </div>
      </motion.div>
    </>
  );
};

export default InlineChatbot;
