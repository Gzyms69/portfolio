import { Share2, Wrench, Zap } from "lucide-react";
import { Project, CVData, GlobalConfig, Language } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "Specjalista IT łączący techniczne umiejętności (Python, Linux, SQL) z doświadczeniem w pracy z ludźmi. Jako Mentor IT i pracownik operacyjny (FedEx) nauczyłem się skutecznie diagnozować problemy i tłumaczyć skomplikowane zagadnienia językiem zrozumiałym dla użytkownika. Szukam roli w Technical Support, gdzie będę mógł wykorzystać moją wiedzę programistyczną do automatyzacji zadań i sprawnego rozwiązywania zgłoszeń.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "IT Specialist combining technical skills (Python, Linux, SQL) with people-oriented experience. As an IT Mentor and Operational Worker (FedEx), I learned to effectively diagnose problems and explain complex concepts in user-friendly language. Seeking a Technical Support role where I can utilize my programming knowledge to automate tasks and efficiently resolve tickets.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git"]
  },
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "https://www.linkedin.com/in/david-czerwinski-baa6b5149",
  },
  contact: {
    formspreeId: "mnnjpjez", 
  }
};

export const projects: Project[] = [
  {
    title: "DeepSeek Folder Organizer",
    pl: {
      description: "Skrypt (JavaScript/Tampermonkey) naprawiający brak funkcjonalności folderów. Reverse Engineering DOM i wstrzykiwanie UI.",
      fullDescription: "Stworzenie skryptu typu UserScript naprawiającego braki w interfejsie webowym popularnego narzędzia AI. Implementacja 'Reverse Engineering' struktury DOM strony w celu wstrzyknięcia własnych elementów UI (Folderów). Rozwiązanie realnego problemu braku organizacji pracy – narzędzie zwiększające produktywność.",
    },
    en: {
      description: "UserScript (JS/Tampermonkey) fixing missing folder functionality. Reverse-engineered DOM structure to inject UI elements.",
      fullDescription: "Created a UserScript to fix UX gaps in a daily driver AI tool. Implemented reverse engineering of the DOM structure to inject custom UI elements (Folders). Solved a real-world productivity issue through direct code intervention.",
    },
    githubUrl: "https://github.com/Gzyms69/DeepSeek-Folder-Organizer",
    techStack: ["JavaScript", "Tampermonkey", "DOM Manipulation", "Automation", "Reverse Engineering"],
    variant: "design",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "WikiGraph Lab",
    pl: {
      description: "Projektowanie pipeline'ów ETL (Python/Docker). Wykorzystanie AI do automatycznej analizy logów i optymalizacji zapytań bazodanowych (Neo4j).",
      fullDescription: "Zaprojektowanie i wdrożenie hybrydowej architektury bazy danych (Graph + SQL) do przetwarzania dużych zbiorów danych. Stworzenie zautomatyzowanego pipeline'u ETL w Pythonie, odpornego na błędy danych. Wykorzystanie metodyki AI-Augmented Development do akceleracji procesu debugowania i weryfikacji architektury (40% szybsze wdrożenie).",
    },
    en: {
      description: "ETL Pipeline Design (Python/Docker). Used AI for automated log analysis and database query optimization (Neo4j).",
      fullDescription: "Designed and deployed a hybrid database architecture (Graph + SQL) for large dataset processing. Created an automated Python ETL pipeline with robust error handling. Leveraged AI-Augmented Development methodology to accelerate debugging and architectural verification (40% faster deployment).",
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Docker", "Linux", "Neo4j", "ETL", "AI-Augmented Workflow"],
    variant: "design",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "ROMHub",
    pl: {
      description: "Emulator N64 w przeglądarce (Client-side). Przetwarzanie lokalne, brak przesyłania plików na serwer.",
      fullDescription: "Eksperymentalny emulator konsoli Nintendo 64 działający całkowicie po stronie klienta. Umożliwia ładowanie ROMów z dysku i grę w przeglądarce. Wykorzystuje LocalStorage do zapisu postępów.",
    },
    en: {
      description: "Browser-based N64 emulator (Client-side). Local processing, no server uploads, persistent saves.",
      fullDescription: "Experimental Nintendo 64 emulator running entirely in the browser. Supports local ROM loading and gameplay without server-side processing. Uses LocalStorage for save persistence.",
    },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["JavaScript", "Emulation", "Client-side", "Local Storage"],
    variant: "code",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    hideFromResume: true
  },
  {
    title: "Portfolio Website",
    pl: {
      description: "Interaktywne portfolio w estetyce terminala. Wykorzystuje React, Framer Motion i Three.js.",
      fullDescription: "Wysoko wydajna platforma portfolio wykorzystująca React 18 i Vite. Projekt skupia się na dostarczaniu unikalnych wrażeń wizualnych poprzez płynne przejścia, responsywny design i autorską estetykę terminala.",
    },
    en: {
      description: "Interactive terminal-style portfolio. Built with React, Framer Motion, and Three.js.",
      fullDescription: "High-performance portfolio platform utilizing React 18 and Vite. Focuses on delivering unique visual experiences through seamless transitions and custom terminal aesthetics.",
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "TypeScript", "Three.js", "Framer Motion", "TailwindCSS"],
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    hideFromResume: true
  }
];

export const cvData: Record<Language, CVData> = {
  pl: {
    experiences: [
      {
        title: "IT Mentor / Instruktor Techniczny",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie kursów programowania: Realizacja kompleksowych szkoleń z języków Python, C++ i C# (od podstaw po poziom maturalny). Odpowiedzialność za postępy uczniów i weryfikację kodu.",
          "Live Debugging i Wsparcie Techniczne: Bieżące diagnozowanie i naprawianie błędów w kodzie uczniów oraz rozwiązywanie problemów konfiguracyjnych środowisk (VS Code, Visual Studio, Unity) podczas zajęć online.",
          "Asynchroniczna obsługa zgłoszeń (Discord): Zdalne wsparcie techniczne dla kursantów poza godzinami zajęć – rozwiązywanie problemów z zadaniami i instalacją oprogramowania na prywatnych komputerach użytkowników."
        ],
      },
      {
        title: "Pracownik Projektowy",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Realizacja zadań w dynamicznym środowisku produkcyjnym pod presją czasu.",
          "Praca w międzynarodowym zespole (język angielski)."
        ],
      },
      {
        title: "Operations Specialist / Technical Resolution",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Zarządzanie incydentami operacyjnymi w wewnętrznym systemie zgłoszeniowym (Ticket-based workflow).",
          "Praca w reżimie ścisłych terminów (SLA) przy odprawach celnych – priorytetyzacja zadań krytycznych w celu zachowania ciągłości operacyjnej.",
          "Współpraca z działami technicznymi przy rozwiązywaniu problemów z dokumentacją elektroniczną."
        ],
      }
    ],
    education: [
      {
        school: "Politechnika Krakowska",
        degree: "Kierunek: Matematyka Stosowana (2 lata studiów)",
        field: "Matematyka Stosowana",
        years: "2020-2022",
      },
      {
        school: "Akademia Górniczo-Hutnicza (AGH)",
        degree: "Kierunek: Elektronika i Telekomunikacja (1 rok studiów)",
        field: "Elektronika i Telekomunikacja",
        years: "2019-2020",
      },
    ],
    skills: {
      general: ["Technical Support", "Incident Management", "SLA", "Problem Solving", "AI-Augmented Workflow"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"],
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany Professional)", "Niemiecki (Podstawowy)", "Rosyjski (Podstawowy)"]
  },
  en: {
    experiences: [
      {
        title: "IT Mentor / Technical Instructor",
        company: "Giganci Programowania",
        location: "Kielce / Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Course Instruction: Delivered comprehensive training in Python, C++, and C# (from basics to advanced level). Responsible for student progress and code verification.",
          "Live Debugging & Technical Support: Real-time diagnosis and fixing of code errors, plus resolving environment configuration issues (VS Code, Visual Studio, Unity) during online sessions.",
          "Async Ticket Support (Discord): Remote technical support for students outside class hours – troubleshooting assignment issues and software installation on personal user devices."
        ],
      },
      {
        title: "Project Worker",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Executed time-sensitive tasks in a fast-paced production environment.",
          "Collaborated in an international, English-speaking team."
        ],
      },
      {
        title: "Operations Specialist / Technical Resolution",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Managed operational incidents in internal ticketing system (Ticket-based workflow).",
          "Worked under strict deadline regime (SLA) on customs clearance – prioritizing critical tasks to maintain operational continuity.",
          "Collaborated with technical departments to resolve electronic documentation issues."
        ],
      }
    ],
    education: [
      {
        school: "Cracow University of Technology",
        degree: "Field: Applied Mathematics (2 years of study)",
        field: "Applied Mathematics",
        years: "2020-2022",
      },
      {
        school: "AGH University of Science and Technology",
        degree: "Field: Electronics and Telecommunications (1 year of study)",
        field: "Electronics and Telecommunications",
        years: "2019-2020",
      },
    ],
    skills: {
      general: ["Technical Support", "Incident Management", "SLA", "Problem Solving", "AI-Augmented Workflow"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"],
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)", "German (Elementary)", "Russian (Elementary)"]
  }
};