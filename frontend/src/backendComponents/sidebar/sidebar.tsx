import { useGeneralContext } from "@/context/context";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  components: { name: string; element: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  const { selectedBlog } = useGeneralContext();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Sync selectedIndex with context so other components can change it
  useEffect(() => {
    if (selectedBlog !== null) {
      setSelectedIndex(1);
    }
  }, [selectedBlog]);

  // Toggle sidebar on mobile
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Mobile Burger Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
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
        } md:block w-64 bg-blue-400 shadow-lg border-r fixed md:static h-full transition-all duration-300 ease-in-out z-40`}
      >
        <h2 className="text-xl font-bold p-4 border-b">Dashboard</h2>
        <ul className="space-y-1 p-2">
          {components.map((comp, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setSelectedIndex(index);
                  if (isOpen) setIsOpen(false); // Close on mobile after selection
                }}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  selectedIndex === index
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {comp.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for mobile to close sidebar when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300 ease-in-out">
        {components[selectedIndex].element}
      </div>
    </div>
  );
};

export default Sidebar;