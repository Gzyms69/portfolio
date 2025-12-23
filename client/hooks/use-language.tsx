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
        mode: "MOTYW / TŁO",
        repo: "KOD",
        lang: "Język",
        snake: "SNAKE",
        console: "KONSOLA",
        confirm_snake: "CZY NA PEWNO?",
        view_github: "Zobacz na GitHub",
        execute: "Uruchom link repozytorium",
        cv_experience: "Doświadczenie",
        cv_education: "Wykształcenie",
        cv_skills: "Umiejętności",
        cv_skills_general: "Ogólne",
        cv_skills_tools: "Narzędzia",
        cv_skills_programming: "Programowanie",
        cv_download: "Pobierz CV",
        contact_system: "system_kontaktowy",
        send_message: "wyslij_wiadomosc",
        name_label: "Imię",
        name_placeholder: "Wpisz swoje imię",
        email_label: "Email",
        email_placeholder: "Wpisz swój adres email",
        subject_label: "Temat",
        subject_placeholder: "Wpisz temat wiadomości",
        message_label: "Wiadomość",
        message_placeholder: "Wpisz swoją wiadomość",
        send_button: "WYŚLIJ"
      },
      en: {
        projects: "PROJECTS",
        home: "HOME",
        color: "COLOR",
        mode: "THEME / BACKGROUND",
        repo: "REPO",
        lang: "Language",
        snake: "SNAKE",
        console: "CONSOLE",
        confirm_snake: "ARE YOU SURE?",
        view_github: "View on GitHub",
        execute: "Execute Repository Link",
        cv_experience: "Experience",
        cv_education: "Education",
        cv_skills: "Skills",
        cv_skills_general: "General",
        cv_skills_tools: "Tools",
        cv_skills_programming: "Programming",
        cv_download: "Download CV",
        contact_system: "contact_system",
        send_message: "send_message",
        name_label: "Name",
        name_placeholder: "Enter your name",
        email_label: "Email",
        email_placeholder: "Enter your email address",
        subject_label: "Subject",
        subject_placeholder: "Enter message subject",
        message_label: "Message",
        message_placeholder: "Enter your message",
        send_button: "SEND"
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
