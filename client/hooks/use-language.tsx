import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/lib/data";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pl'); // Polish as default

  const t = (key: string) => {
    // This is a simple translation helper if needed for UI strings
    const uiStrings: Record<Language, Record<string, string>> = {
      pl: {
        projects: "PROJEKTY",
        home: "START",
        color: "KOLOR",
        mode: "MOTYW / TLO",
        repo: "KOD",
        lang: "JEZYK",
        view_github: "Zobacz na GitHub",
        execute: "Uruchom link repozytorium"
      },
      en: {
        projects: "PROJECTS",
        home: "HOME",
        color: "COLOR",
        mode: "THEME / BACKGROUND",
        repo: "REPO",
        lang: "LANG",
        view_github: "View on GitHub",
        execute: "Execute Repository Link"
      }
    };
    return uiStrings[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
