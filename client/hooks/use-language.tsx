import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@shared/types";

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
        mode: "ZMIEŃ TŁO SYSTEMU",
        view_toggle: "ZMIEŃ WIDOK SYSTEMU",
        repo: "MÓJ GITHUB",
        linkedin: "MÓJ LINKEDIN",
        lang: "Język",
        snake: "SNAKE",
        console: "KONSOLA",
        confirm_snake: "JESTEŚ PEWIEN?",
        view_github: "Zobacz GitHub",
        execute: "Otwórz repozytorium",
        cv_experience: "Doświadczenie zawodowe",
        cv_education: "Wykształcenie",
        cv_skills: "Kompetencje",
        cv_skills_general: "Obszary",
        cv_skills_tools: "Narzędzia",
        cv_skills_programming: "Technologie",
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
        open_menu: "OTWÓRZ MENU",
        close_menu: "ZAMKNIJ MENU",
        // Dossier specific
        dossier_id: "Identyfikator:",
        dossier_personnel: "AKTA OSOBOWE",
        dossier_assignments: "REJESTR PROJEKTÓW",
        dossier_service: "PRZEBIEG SŁUŻBY",
        dossier_comms: "TERMINAL ŁĄCZNOŚCI",
        dossier_status: "STATUS",
        dossier_decrypted: "ZDEKRYPTOWANO",
        service_status: "Status operacyjny:",
        availability: "DOSTĘPNOŚĆ:",
        immediate: "OD ZARAZ",
        location_remote: "PRACA ZDALNA",
        clearance_level: "POZIOM DOSTĘPU:",
        hardcopy: "GENERUJ KOPIĘ FIZYCZNĄ",
        tech_specs: "SPECJALIZACJE",
        edu_protocol: "EDUKACJA",
        // Resume labels
        resume_summary: "PODSUMOWANIE ZAWODOWE",
        resume_projects: "KLUCZOWE PROJEKTY",
        resume_experience: "DOŚWIADCZENIE",
        resume_skills: "UMIEJĘTNOŚCI TECHNICZNE",
        resume_education: "WYKSZTAŁCENIE",
        resume_languages: "JĘZYKI",
        resume_download: "POBIERZ PDF",
        resume_location: "Polska / Zdalnie",
        resume_skills_core: "Języki programowania:",
        resume_skills_tools: "Narzędzia i technologie:",
        resume_skills_general: "Kompetencje ogólne:",
        resume_gdpr: "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
      },
      en: {
        projects: "PROJECTS",
        home: "HOME",
        color: "COLOR",
        mode: "SWITCH SYSTEM BACKGROUND",
        view_toggle: "SWITCH SYSTEM VIEW",
        repo: "MY GITHUB",
        linkedin: "MY LINKEDIN",
        lang: "Language",
        snake: "SNAKE",
        console: "KONSOLA",
        confirm_snake: "ARE YOU SURE?",
        view_github: "View GitHub",
        execute: "Open Repository",
        cv_experience: "Professional Experience",
        cv_education: "Education",
        cv_skills: "Competencies",
        cv_skills_general: "Areas",
        cv_skills_tools: "Tools",
        cv_skills_programming: "Technologies",
        cv_download: "Download CV",
        contact_system: "contact_system",
        send_message: "send_message",
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "Your email address",
        subject_label: "Subject",
        subject_placeholder: "Message subject",
        message_label: "Message",
        message_placeholder: "Your message",
        send_button: "SEND",
        // Dossier specific
        dossier_id: "Dossier_ID:",
        dossier_personnel: "PERSONNEL FILE",
        dossier_assignments: "PROJECT REGISTER",
        dossier_service: "SERVICE RECORD",
        dossier_comms: "COMMS UPLINK",
        dossier_status: "STATUS",
        dossier_decrypted: "DECRYPTED",
        service_status: "Operational Status:",
        availability: "AVAILABILITY:",
        immediate: "IMMEDIATE",
        location_remote: "REMOTE_READY",
        clearance_level: "CLEARANCE LEVEL:",
        hardcopy: "GENERATE HARDCOPY",
        tech_specs: "SPECIALIZATIONS",
        edu_protocol: "EDUCATION",
        // Resume labels
        resume_summary: "PROFESSIONAL SUMMARY",
        resume_projects: "KEY PROJECTS",
        resume_experience: "EXPERIENCE",
        resume_skills: "TECHNICAL SKILLS",
        resume_education: "EDUCATION",
        resume_languages: "LANGUAGES",
        resume_download: "DOWNLOAD PDF",
        resume_location: "Poland / Remote",
        resume_skills_core: "Programming Languages & Core:",
        resume_skills_tools: "Tools & Technologies:",
        resume_skills_general: "General Competencies:",
        resume_gdpr: "I hereby give consent for my personal data to be processed for the purposes of recruitment under the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
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

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};