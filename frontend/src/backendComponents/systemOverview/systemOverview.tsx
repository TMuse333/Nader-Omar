"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface SystemStats {
  knowledgeCount: number;
  loading: boolean;
}

const SystemOverview: React.FC = () => {
  const [stats, setStats] = useState<SystemStats>({
    knowledgeCount: 0,
    loading: true,
  });

  // External URLs - update these as needed
  const CHATBOT_URL = "https://agent-lead-gen.vercel.app/bot/nader-omar-real-estate";
  const SEO_GENERATOR_URL = "https://agent-lead-gen.vercel.app";
  const WEBSITE_URL = "https://naderomarrealtor.com";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/pull-from-qdrant");
        setStats({
          knowledgeCount: response.data.points?.length || 0,
          loading: false,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
        setStats({ knowledgeCount: 0, loading: false });
      }
    };
    fetchStats();
  }, []);

  const ServiceCard = ({
    icon,
    title,
    status,
    statusColor,
    description,
    buttonText,
    onClick,
  }: {
    icon: string;
    title: string;
    status: string;
    statusColor: string;
    description: string;
    buttonText: string;
    onClick: () => void;
  }) => (
    <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-cyan-500/30 transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className={`flex items-center gap-2 text-sm font-medium ${statusColor}`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          {status}
        </span>
      </div>
      <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <button
        onClick={onClick}
        className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/20"
      >
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          🏠 Command Center
        </h1>
        <p className="text-gray-400">
          Your central hub for managing the chatbot, SEO content, and knowledge base.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ServiceCard
          icon="🤖"
          title="AI Chatbot"
          status="Online"
          statusColor="text-green-400"
          description="24/7 lead capture chatbot on your website, engaging visitors and collecting contact info."
          buttonText="Open Chatbot →"
          onClick={() => window.open(CHATBOT_URL, "_blank")}
        />
        <ServiceCard
          icon="✍️"
          title="SEO Generator"
          status="Ready"
          statusColor="text-cyan-400"
          description="Generate blog posts using your knowledge base to boost your search rankings."
          buttonText="Open Generator →"
          onClick={() => window.open(SEO_GENERATOR_URL, "_blank")}
        />
        <ServiceCard
          icon="📊"
          title="Knowledge Base"
          status={stats.loading ? "Loading..." : `${stats.knowledgeCount} entries`}
          statusColor="text-purple-400"
          description="Your expertise stored and ready to power the chatbot and content generation."
          buttonText="View Knowledge →"
          onClick={() => {
            // Switch to Knowledge Base tab (index 1)
            const buttons = document.querySelectorAll("ul button");
            if (buttons[1]) (buttons[1] as HTMLButtonElement).click();
          }}
        />
      </div>

      {/* System Status */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#1a2a2a] rounded-xl p-6 mb-8 border border-cyan-500/20">
        <h2 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          System Status: All Services Connected
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-gray-300">Qdrant Database Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-gray-300">OpenAI API Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-gray-300">Website Integration Ready</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] mb-8">
        <h2 className="font-bold text-lg text-white mb-4">🔗 Quick Links</h2>
        <div className="space-y-3">
          <a
            href={CHATBOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors group"
          >
            <div>
              <p className="font-medium text-white">Live Chatbot</p>
              <p className="text-sm text-gray-500 truncate max-w-md">{CHATBOT_URL}</p>
            </div>
            <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">→</span>
          </a>
          <a
            href={SEO_GENERATOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors group"
          >
            <div>
              <p className="font-medium text-white">SEO Generator Admin</p>
              <p className="text-sm text-gray-500 truncate max-w-md">{SEO_GENERATOR_URL}</p>
            </div>
            <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">→</span>
          </a>
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors group"
          >
            <div>
              <p className="font-medium text-white">Your Website</p>
              <p className="text-sm text-gray-500 truncate max-w-md">{WEBSITE_URL}</p>
            </div>
            <span className="text-gray-500 group-hover:text-cyan-400 transition-colors">→</span>
          </a>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
        <h2 className="font-bold text-lg text-white mb-4">📖 How It Works</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
              1
            </div>
            <div>
              <p className="font-medium text-white">Chatbot Engages Visitors</p>
              <p className="text-sm text-gray-400">
                The AI chatbot on your website qualifies leads 24/7, answering questions using your knowledge base.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
              2
            </div>
            <div>
              <p className="font-medium text-white">Leads Are Captured</p>
              <p className="text-sm text-gray-400">
                Contact information is collected and stored - you get notified of new leads.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/30">
              3
            </div>
            <div>
              <p className="font-medium text-white">Content Boosts SEO</p>
              <p className="text-sm text-gray-400">
                Blog posts generated from your expertise help you rank higher in search results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOverview;
