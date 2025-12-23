import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/lib/terminal-db";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pl'); // Polish as default

  const t = (key: string) => {
    const uiStrings: Record<Language, Record<string, string>> = {
      pl: {
        projects: "PROJEKTY",
        home: "START",
        color: "KOLOR",
        mode: "ZMIANA TRYBU",
        repo: "KOD ŹRÓDŁOWY",
        lang: "Język",
        snake: "SNAKE",
        console: "KONSOLA",
        confirm_snake: "JESTEŚ PEWIEN?",
        view_github: "Zobacz GitHub",
        execute: "Otwórz repozytorium",
        cv_experience: "Doświadczenie zawodowe",
        cv_education: "Wykształcenie",
        cv_skills: "Umiejętności techniczne",
        cv_skills_general: "Ogólne",
        cv_skills_tools: "Narzędzia",
        cv_skills_programming: "Programowanie",
        cv_download: "Pobierz CV",
        contact_system: "system_kontaktowy",
        send_message: "wyślij_wiadomość",
        name_label: "Imię",
        name_placeholder: "Twoje imię",
        email_label: "Email",
        email_placeholder: "Twój adres email",
        subject_label: "Temat",
        subject_placeholder: "Temat wiadomości",
        message_label: "Wiadomość",
        message_placeholder: "Twoja wiadomość",
        send_button: "WYŚLIJ",
        // Dossier specific
        dossier_id: "Identyfikator:",
        dossier_personnel: "AKTA OSOBOWE",
        dossier_assignments: "REALIZACJE I PROJEKTY",
        dossier_service: "PRZEBIEG SŁUŻBY",
        dossier_comms: "TERMINAL ŁĄCZNOŚCI",
        dossier_status: "STATUS",
        dossier_decrypted: "ZDEKRYPTOWANO",
        service_status: "Status operacyjny:",
        availability: "DOSTĘPNOŚĆ:",
        immediate: "OD ZARAZ",
        location_remote: "PRACA ZDALNA",
        clearance_level: "POZIOM DOSTĘPU:",
        hardcopy: "POBIERZ KOPIĘ",
        tech_specs: "SPECJALIZACJE",
        edu_protocol: "EDUKACJA"
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
        cv_experience: "Professional Experience",
        cv_education: "Education",
        cv_skills: "Technical Competencies",
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
        send_button: "SEND",
        // Dossier specific
        dossier_id: "Dossier_ID:",
        dossier_personnel: "PERSONNEL FILE",
        dossier_assignments: "PROJECTS & ASSIGNMENTS",
        dossier_service: "SERVICE RECORD",
        dossier_comms: "COMMS UPLINK",
        dossier_status: "STATUS",
        dossier_decrypted: "DECRYPTED",
        service_status: "Service Status:",
        availability: "AVAILABILITY:",
        immediate: "IMMEDIATE",
        location_remote: "REMOTE_READY",
        clearance_level: "CLEARANCE LEVEL:",
        hardcopy: "GENERATE HARDCOPY",
        tech_specs: "SPECIALIZATIONS",
        edu_protocol: "EDUCATION"
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