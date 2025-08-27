"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

export interface Blog {
  title: string;
  description: string;
  questions: string[];
  tags: string[];
}

interface GeneralContextType {
  selectedBlog: Blog | null;
  setSelectedBlog: React.Dispatch<React.SetStateAction<Blog | null>>;
  sidebarTab: number;
  setSidebarTab: React.Dispatch<React.SetStateAction<number>>;
}

export const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [sidebarTab, setSidebarTab] = useState(0);

  return (
    <GeneralContext.Provider
      value={{
        selectedBlog,
        setSelectedBlog,
        sidebarTab,
        setSidebarTab,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = (): GeneralContextType => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within a ContextProvider");
  }
  return context;
};
