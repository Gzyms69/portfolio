import React, { createContext, useContext, useState, useEffect } from "react";

interface CursorContextType {
  isEnabled: boolean;
  toggleCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem("custom-cursor-enabled");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("custom-cursor-enabled", JSON.stringify(isEnabled));
    
    if (isEnabled) {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
    
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isEnabled]);

  const toggleCursor = () => setIsEnabled((prev: boolean) => !prev);

  return (
    <CursorContext.Provider value={{ isEnabled, toggleCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
