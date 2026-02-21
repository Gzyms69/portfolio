import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const officeProjects: Project[] = []; // Empty as requested

export const officeConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Operations Specialist / Data Administration",
    description: "Skrupulatny specjalista z doświadczeniem w operacjach międzynarodowych (FedEx) oraz edukacji IT (Giganci Programowania). Biegły w języku angielskim (C1/C2) i obsłudze pakietu MS Office (Excel - raportowanie, analiza danych). Łączę umiejętność weryfikacji dokumentacji (Compliance) i pracy w rygorze SLA z doświadczeniem w prowadzeniu prezentacji i szkoleniu użytkowników. Szukam stabilnej pracy w administracji, back-office lub operacjach.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["English C1/C2", "MS Office", "Data Entry", "Administration"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Operations Specialist / Data Administration",
    description: "Meticulous specialist with experience in international operations (FedEx) and IT education (Giganci Programowania). Fluent in English (C1/C2) and proficient in MS Office (Excel - reporting, data analysis). I combine the ability to verify documentation (Compliance) and work under SLA rigor with experience in delivering presentations and training users. Seeking stable work in administration, back-office, or operations.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["English C1/C2", "MS Office", "Data Entry", "Administration"]
  }
};

export const officeData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "Specjalista ds. Operacji / Administracja",
        company: "FedEx Express Ireland",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Weryfikacja i procesowanie dokumentacji: Analiza poprawności dokumentów celnych i przewozowych (dbałość o detale i zgodność z procedurami Compliance).",
          "Obsługa systemów klasy Enterprise: Praca na dużych zbiorach danych w wewnętrznych systemach operacyjnych oraz pakiecie MS Office.",
          "Praca pod presją czasu (SLA): Terminowa realizacja zgłoszeń i priorytetyzacja zadań w dynamicznym środowisku korporacyjnym.",
          "Komunikacja w języku angielskim (C1/C2): Codzienna współpraca z zagranicznymi oddziałami oraz rozwiązywanie problemów operacyjnych drogą mailową i telefoniczną."
        ]
      },
      {
        title: "Nauczyciel Programowania / Mentor IT",
        company: "Giganci Programowania",
        location: "Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie zajęć edukacyjnych: Samodzielne przygotowywanie i realizacja szkoleń z podstaw IT dla grup. Umiejętność jasnego przekazywania złożonych informacji.",
          "Administracja i raportowanie: Prowadzenie ewidencji obecności, zarządzanie harmonogramem zajęć i uzupełnianie danych w systemie CRM.",
          "Obsługa klienta: Bieżąca komunikacja z klientami (rodzicami kursantów), rozwiązywanie problemów organizacyjnych i technicznych."
        ]
      },
      {
        title: "Wsparcie Operacyjne / Logistyka",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Wsparcie procesów logistycznych: Realizacja zadań operacyjnych w międzynarodowym środowisku pracy.",
          "Współpraca w języku angielskim: Codzienna komunikacja w zespole wielokulturowym, wymagająca elastyczności i umiejętności adaptacji.",
          "Dbałość o normy jakościowe: Praca wymagająca wysokiej dyscypliny, punktualności i przestrzegania procedur BHP."
        ]
      }
    ],
    education: supportData.pl.education,
    skills: {
      general: ["Doskonała organizacja pracy własnej i zarządzanie czasem", "Wysoka kultura osobista i komunikatywność", "Umiejętność pracy z poufnymi danymi (RODO/Data Privacy)"],
      tools: ["MS Excel: Tabele przestawne, wyszukiwanie danych (VLOOKUP), filtrowanie, formatowanie warunkowe.", "Obsługa biura: Outlook (zarządzanie kalendarzem), Word (redagowanie pism), PowerPoint.", "Systemy: Doświadczenie w pracy z systemami CRM / ERP oraz Google Workspace."],
      programming: [] 
    },
    languages: supportData.pl.languages
  },
  en: {
    experiences: [
      {
        title: "Operations Specialist / Administration",
        company: "FedEx Express Ireland",
        location: "Krakow",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Documentation verification and processing: Analysis of customs and shipping documents correctness (attention to detail and compliance with procedures).",
          "Enterprise system operation: Working with large data sets in internal operating systems and MS Office suite.",
          "Working under time pressure (SLA): Timely ticket fulfillment and task prioritization in a dynamic corporate environment.",
          "Communication in English (C1/C2): Daily collaboration with international branches and solving operational problems via email and phone."
        ]
      },
      {
        title: "Programming Teacher / IT Mentor",
        company: "Giganci Programowania",
        location: "Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Educational Instruction: Independent preparation and delivery of basic IT training for groups. Ability to clearly convey complex information.",
          "Administration & Reporting: Maintaining attendance records, managing class schedules, and data entry in the CRM system.",
          "Customer Service: Ongoing communication with clients (students' parents), resolving organizational and technical issues."
        ]
      },
      {
        title: "Operational Support / Logistics",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Logistics process support: Execution of operational tasks in an international work environment.",
          "Collaboration in English: Daily communication in a multicultural team, requiring flexibility and adaptability.",
          "Attention to quality standards: Work requiring high discipline, punctuality, and compliance with health and safety procedures."
        ]
      }
    ],
    education: supportData.en.education,
    skills: {
      general: ["Excellent self-organization and time management", "High personal culture and communication skills", "Ability to work with confidential data (GDPR/Data Privacy)"],
      tools: ["MS Excel: Pivot tables, data lookup (VLOOKUP), filtering, conditional formatting.", "Office support: Outlook (calendar management), Word (letter drafting), PowerPoint.", "Systems: Experience working with CRM / ERP systems and Google Workspace."],
      programming: []
    },
    languages: supportData.en.languages
  }
};
