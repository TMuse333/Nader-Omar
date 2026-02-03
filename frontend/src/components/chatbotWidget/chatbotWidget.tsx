"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";

const ChatbotWidget = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    // Hide button when chatbot section is in view
    const chatbotSection = document.getElementById("chatbot-section");
    if (!chatbotSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(chatbotSection);

    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToChatbot = () => {
    setShowTooltip(false);
    const chatbotSection = document.getElementById("chatbot-section");
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      {/* Tooltip / Call to action */}
      {showTooltip && isVisible && (
        <div className="absolute bottom-full right-0 mb-2 animate-fade-in">
          <div className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap">
            <span>💬</span>
            <span>Chat with Nader!</span>
            <ChevronDown size={14} className="text-cyan-500" />
          </div>
          {/* Arrow pointing down */}
          <div className="absolute bottom-0 right-6 translate-y-1 w-3 h-3 bg-white rotate-45 shadow-lg" />
        </div>
      )}

      {/* Main button */}
      <button
        onClick={scrollToChatbot}
        className="relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 animate-subtle-bounce transition-colors"
        aria-label="Chat with Nader"
      >
        <MessageCircle size={24} className="text-white" />

        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </button>
    </div>
  );
};

export default ChatbotWidget;
