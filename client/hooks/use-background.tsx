import React, { createContext, useContext, useState } from "react";

export type BackgroundType = "ascii" | "sticks";
export type ViewMode = "standard" | "dossier";

interface BackgroundContextType {
  type: BackgroundType;
  viewMode: ViewMode;
  isTransitioning: boolean;
  toggleBackground: () => void;
  toggleViewMode: () => void;
  setViewMode: (mode: ViewMode) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [type, setType] = useState<BackgroundType>("ascii");
  const [viewMode, setViewModeState] = useState<ViewMode>("standard");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const triggerTransition = (callback: () => void) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      callback();
    }, 300);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  const toggleBackground = () => {
    triggerTransition(() => {
      setType((prev) => (prev === "ascii" ? "sticks" : "ascii"));
    });
  };

  const toggleViewMode = () => {
    triggerTransition(() => {
      setViewModeState((prev) => (prev === "standard" ? "dossier" : "standard"));
    });
  };

  const setViewMode = (mode: ViewMode) => {
    if (mode === viewMode) return;
    triggerTransition(() => {
      setViewModeState(mode);
    });
  };

  return (
    <BackgroundContext.Provider value={{ type, viewMode, isTransitioning, toggleBackground, toggleViewMode, setViewMode }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};
