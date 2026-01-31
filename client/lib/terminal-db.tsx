import { Share2, Wrench, Zap } from "lucide-react";
import { Project, CVData, GlobalConfig, Language } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "Specjalista IT z technicznym zapleczem (Python, SQL, Linux) i doświadczeniem operacyjnym w międzynarodowych korporacjach (FedEx). Posiadam praktyczne umiejętności diagnozowania błędów (Live Debugging), pracy z systemami zgłoszeniowymi (SLA) oraz automatyzacji zadań. Szukam roli w Technical Support, gdzie wykorzystam umiejętności skryptowe do usprawniania procesów.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "IT Specialist with technical background (Python, SQL, Linux) and operational experience in international corporations (FedEx). Skilled in diagnosing errors (Live Debugging), working with ticket systems (SLA), and task automation. Seeking a Technical Support role to utilize scripting skills for process improvement.",
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
      description: "System ETL (Python/Docker). AI Workflow: Wykorzystanie agentów AI do analizy logów i optymalizacji zapytań Neo4j.",
      fullDescription: "Zaprojektowanie i wdrożenie hybrydowej architektury bazy danych (Graph + SQL) do przetwarzania dużych zbiorów danych. Stworzenie zautomatyzowanego pipeline'u ETL w Pythonie, odpornego na błędy danych. Wykorzystanie metodyki AI-Augmented Development do akceleracji procesu debugowania i weryfikacji architektury (40% szybsze wdrożenie).",
    },
    en: {
      description: "ETL System (Python/Docker). AI Workflow: Used AI agents for log analysis and Neo4j query optimization.",
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
      description: "Platforma do zarządzania obrazami systemowymi (ROMów) dla urządzeń mobilnych. Integracja z zewnętrznymi API.",
      fullDescription: "Kompleksowa platforma ułatwiająca dostęp do oprogramowania systemowego dla smartfonów. System automatyzuje proces wyszukiwania i pobierania aktualizacji, agregując dane z wielu źródeł.",
    },
    en: {
      description: "Platform for managing system images (ROMs) for mobile devices. Integration with external APIs.",
      fullDescription: "A comprehensive platform for managing mobile system software. The system automates the search and download process for updates, aggregating data from multiple sources.",
    },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["React", "Node.js", "Express", "API Integration"],
    variant: "code",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
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
        title: "IT Mentor & Technical Support",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Przeprowadzanie Live Debuggingu i analiza błędów w kodzie w czasie rzeczywistym (Python, C++, C#).",
          "Diagnozowanie problemów ze środowiskiem programistycznym (VS Code, Unity, Git) na stacjach roboczych użytkowników.",
          "Tłumaczenie złożonych zagadnień technicznych osobom nietechnicznym (Support Level 1/2)."
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
          "Praca pod presją czasu (Operational SLA) przy odprawach celnych – priorytetyzacja zadań krytycznych.",
          "Współpraca z działami technicznymi przy rozwiązywaniu problemów z dokumentacją elektroniczną."
        ],
      }
    ],
    education: [
      {
        school: "Politechnika Krakowska",
        degree: "Studia Inżynierskie (3 lata)",
        field: "Matematyka Stosowana",
        years: "2020-2022",
      },
      {
        school: "Akademia Górniczo-Hutnicza (AGH)",
        degree: "Studia Inżynierskie (1 rok)",
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
        title: "IT Mentor & Technical Support",
        company: "Giganci Programowania",
        location: "Kielce / Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Conducted Live Debugging and real-time code error analysis (Python, C++, C#).",
          "Diagnosed development environment issues (VS Code, Unity, Git) on user workstations.",
          "Translated complex technical concepts to non-technical users (Support Level 1/2)."
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
          "Worked under time pressure (Operational SLA) on customs clearance – prioritizing critical tasks.",
          "Collaborated with technical departments to resolve electronic documentation issues."
        ],
      }
    ],
    education: [
      {
        school: "Cracow University of Technology",
        degree: "Engineering Coursework (3 years)",
        field: "Applied Mathematics",
        years: "2020-2022",
      },
      {
        school: "AGH University of Science and Technology",
        degree: "Engineering Coursework (1 year)",
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