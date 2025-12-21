import React, { createContext, useContext, useState, useEffect } from "react";

export type BackgroundType = "ascii" | "sticks";

interface BackgroundContextType {
  type: BackgroundType;
  toggleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [type, setType] = useState<BackgroundType>(() => {
    const storedType = localStorage.getItem("portfolio-bg-type");
    return (storedType as BackgroundType) || "sticks"; 
  });

  useEffect(() => {
    localStorage.setItem("portfolio-bg-type", type);
  }, [type]);

  const toggleBackground = () => {
    setType((prev) => {
      const newType = (prev === "ascii" ? "sticks" : "ascii");
      return newType;
    });
  }

  return (
    <BackgroundContext.Provider value={{ type, toggleBackground }}>
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
