"use client";

import { useGeneralContext } from "@/context/context";
import React, { useState, useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface SidebarProps {
  components: { name: string; element: React.ReactNode; icon: LucideIcon }[];
}

const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  const { selectedBlog } = useGeneralContext();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Sync selectedIndex with context so other components can change it
  useEffect(() => {
    if (selectedBlog !== null) {
      setSelectedIndex(3); // Blog Ideas tab index
    }
  }, [selectedBlog]);

  // Toggle sidebar on mobile
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-[#0f0f0f]">
      {/* Mobile Burger Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none p-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block ${isCollapsed ? "w-16" : "w-64"} bg-[#1a1a1a] shadow-2xl border-r border-[#2a2a2a] fixed md:static h-full transition-all duration-300 ease-in-out z-40`}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#2a2a2a] flex items-center justify-between">
          {!isCollapsed && (
            <div>
              <h2 className="text-xl font-bold text-white">Dashboard</h2>
              <p className="text-xs text-gray-500 mt-1">Nader Omar</p>
            </div>
          )}
          {/* Collapse button - desktop only */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-400 hover:text-white transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <ul className="space-y-1 p-3">
          {components.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <li key={index}>
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                    if (isOpen) setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 ${
                    selectedIndex === index
                      ? "bg-gradient-to-r from-cyan-500/20 to-cyan-600/10 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-400 hover:text-white hover:bg-[#2a2a2a]"
                  }`}
                  title={isCollapsed ? comp.name : undefined}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${selectedIndex === index ? "text-cyan-400" : ""}`} />
                  {!isCollapsed && <span>{comp.name}</span>}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#2a2a2a]">
          {!isCollapsed ? (
            <p className="text-xs text-gray-600 text-center">
              Powered by FocusFlow
            </p>
          ) : (
            <p className="text-xs text-gray-600 text-center">FF</p>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 ml-0 md:ml-0 transition-all duration-300 ease-in-out bg-[#0f0f0f] min-h-screen overflow-auto">
        {components[selectedIndex].element}
      </div>
    </div>
  );
};

export default Sidebar;
