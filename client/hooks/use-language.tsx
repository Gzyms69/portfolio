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
        snake: "WAZ",
        confirm_snake: "CZY NA PEWNO?",
        view_github: "Zobacz na GitHub",
        execute: "Uruchom link repozytorium",
        contact_system: "system_kontaktowy",
        send_message: "wyslij_wiadomosc",
        name_label: "imie",
        name_placeholder: "wpisz_swoje_imie",
        email_label: "email",
        email_placeholder: "wpisz_swoj_adres_email",
        subject_label: "temat",
        subject_placeholder: "wpisz_temat_wiadomosci",
        message_label: "wiadomosc",
        message_placeholder: "wpisz_swoja_wiadomosc",
        send_button: "wyslij"
      },
      en: {
        projects: "PROJECTS",
        home: "HOME",
        color: "COLOR",
        mode: "THEME / BACKGROUND",
        repo: "REPO",
        lang: "LANG",
        snake: "SNAKE",
        confirm_snake: "ARE YOU SURE?",
        view_github: "View on GitHub",
        execute: "Execute Repository Link",
        contact_system: "contact_system",
        send_message: "send_message",
        name_label: "name",
        name_placeholder: "enter_your_name",
        email_label: "email",
        email_placeholder: "enter_your_email_address",
        subject_label: "subject",
        subject_placeholder: "enter_message_subject",
        message_label: "message",
        message_placeholder: "enter_your_message",
        send_button: "send"
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
