import { useGeneralContext } from "@/context/context";
import React, { useState, useEffect } from "react";

interface SidebarProps {
  components: { name: string; element: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ components }) => {
  const { selectedBlog } = useGeneralContext();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Sync selectedIndex with context so other components can change it


  useEffect(()=>{
if(selectedBlog !== null){
  setSelectedIndex(1)
}
  },[selectedBlog])

  return (
    <div className="flex min-h-screen bg-blue-100">
      <div className="w-64 bg-blue-400 shadow-lg border-r">
        <h2 className="text-xl font-bold p-4 border-b">Dashboard</h2>
        <ul className="space-y-1 p-2">
          {components.map((comp, index) => (
            <li key={index}>
              <button
                onClick={() => setSelectedIndex(index)}
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
      <div className="flex-1 p-6">{components[selectedIndex].element}</div>
    </div>
  );
};

export default Sidebar;
