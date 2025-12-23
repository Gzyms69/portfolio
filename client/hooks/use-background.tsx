import React, { createContext, useContext, useState } from "react";

export type BackgroundType = "ascii" | "sticks";

interface BackgroundContextType {
  type: BackgroundType;
  isTransitioning: boolean;
  toggleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [type, setType] = useState<BackgroundType>("ascii");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleBackground = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Switch background halfway through the TV zap
    setTimeout(() => {
      setType((prev) => (prev === "ascii" ? "sticks" : "ascii"));
    }, 300);

    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <BackgroundContext.Provider value={{ type, isTransitioning, toggleBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
