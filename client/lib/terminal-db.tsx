import { Share2, Wrench, Zap } from "lucide-react";
import { Project, CVData, PortfolioConfig, ResumeProfile, ResumeVariant, GlobalConfig } from "@shared/types";

const commonSocials = {
  github: "https://github.com/Gzyms69",
  linkedin: "https://www.linkedin.com/in/david-czerwinski-baa6b5149",
};

const commonContact = {
  formspreeId: "mnnjpjez",
};

// ============================================================================
// PROFILE: SUPPORT (Technical Support Engineer)
// ============================================================================
const supportProjects: Project[] = [
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Diagnostyka i utrzymanie złożonego pipeline'u ETL (Python/Docker). Zarządzanie bazą grafową Neo4j i relacyjną SQLite. Rozwiązywanie problemów z wydajnością zapytań i integracją API.", 
      fullDescription: "..." 
    },
    en: { 
      description: "Diagnosis and maintenance of a complex ETL pipeline (Python/Docker). Management of Neo4j graph and SQLite relational databases. Troubleshooting query performance and API integration issues.", 
      fullDescription: "..." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Neo4j", "Docker", "ETL Debugging", "Database Management"],
    variant: "code",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "LeadFinder & Katalog: Automated Sales Pipeline",
    pl: { 
      description: "Automatyzacja procesu (Process Automation): Narzędzie Python (End-to-End) do generowania leadów, ekstrakcji danych i walidacji domen do Google Sheets. Tooling: System 'Magic Link' generujący spersonalizowane strony demo (redukcja czasu pracy o 99%). Troubleshooting: Naprawa logiki zliczania recenzji w zewnętrznej bibliotece scrapującej.", 
      fullDescription: "..." 
    },
    en: { 
      description: "Process Automation: End-to-end Python tool for lead generation, data extraction, and validation into Google Sheets. Tooling & Integration: 'Magic Link' system for dynamic demo website generation, reducing manual prep time by 99%. Troubleshooting: Diagnosed and patched broken review-counting logic in scraping library.", 
      fullDescription: "..." 
    },
    githubUrl: "https://github.com/Gzyms69",
    techStack: ["Python Automation", "ETL", "Google Workspace Integration"],
    variant: "design",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "ROMHub",
    pl: { description: "Emulator N64 w przeglądarce. Diagnozowanie problemów z kompatybilnością WASM i wydajnością renderowania.", fullDescription: "..." },
    en: { description: "Browser-based N64 emulator. Diagnosing WASM compatibility and rendering performance issues.", fullDescription: "..." },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["Emulation", "WASM", "Client-side Debugging"],
    variant: "code",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  },
  {
    title: "Portfolio Website",
    pl: { description: "Interaktywne portfolio. Rozwiązywanie problemów z responsywnością i wydajnością animacji (Framer Motion/Three.js).", fullDescription: "..." },
    en: { description: "Interactive portfolio. Troubleshooting responsiveness and animation performance (Framer Motion/Three.js).", fullDescription: "..." },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "Performance Optimization", "Three.js"],
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  }
];

const supportConfig: Record<string, PortfolioConfig> = {
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
  }
};

const supportData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "IT Mentor / Instruktor Techniczny",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie kursów programowania: Realizacja kompleksowych szkoleń z języków Python, C++ i C#.",
          "Live Debugging i Wsparcie Techniczne: Bieżące diagnozowanie i naprawianie błędów w kodzie uczniów oraz rozwiązywanie problemów konfiguracyjnych środowisk (VS Code, Unity).",
          "Asynchroniczna obsługa zgłoszeń (Discord): Zdalne wsparcie techniczne dla kursantów poza godzinami zajęć."
        ]
      },
      {
        title: "Pracownik Projektowy",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Realizacja zadań w dynamicznym środowisku produkcyjnym pod presją czasu.",
          "Praca w międzynarodowym zespole (język angielski)."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Irlandia (Zdalnie, Kraków)",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Analiza dokumentacji i zapewnienie zgodności z procesem odpraw celnych (Customs Compliance).",
          "Zarządzanie incydentami operacyjnymi w wewnętrznym systemie zgłoszeniowym (Ticket-based workflow).",
          "Praca w reżimie ścisłych terminów (SLA) w międzynarodowym zespole."
        ]
      }
    ],
    education: [
      { school: "Politechnika Krakowska", degree: "Kierunek: Matematyka Stosowana (2 lata studiów)", field: "Matematyka Stosowana", years: "2020-2022" },
      { school: "Akademia Górniczo-Hutnicza (AGH)", degree: "Kierunek: Elektronika i Telekomunikacja (1 rok studiów)", field: "Elektronika i Telekomunikacja", years: "2019-2020" }
    ],
    skills: {
      general: ["Technical Support", "Incident Management", "SLA", "Problem Solving", "AI-Augmented Workflow"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"]
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
          "Course Instruction: Delivered comprehensive training in Python, C++, and C#. Responsible for student progress.",
          "Live Debugging & Technical Support: Real-time diagnosis/fixing of code errors and environment configuration (VS Code, Unity).",
          "Async Ticket Support (Discord): Remote technical support for students outside class hours."
        ]
      },
      {
        title: "Project Worker",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Executed time-sensitive tasks in a fast-paced production environment.",
          "Collaborated in an international, English-speaking team."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Ireland (Remote, Krakow)",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Documentation analysis and ensuring compliance with customs clearance processes (Customs Compliance).",
          "Operational incident management within an internal ticketing system (Ticket-based workflow).",
          "Worked under strict deadlines (SLA) in an international team."
        ]
      }
    ],
    education: [
      { school: "Cracow University of Technology", degree: "Field: Applied Mathematics (2 years of study)", field: "Applied Mathematics", years: "2020-2022" },
      { school: "AGH University of Science and Technology", degree: "Field: Electronics and Telecommunications (1 year of study)", field: "Electronics and Telecommunications", years: "2019-2020" }
    ],
    skills: {
      general: ["Technical Support", "Incident Management", "SLA", "Problem Solving", "AI-Augmented Workflow"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)", "German (Elementary)", "Russian (Elementary)"]
  }
};

// ============================================================================
// PROFILE: DEVELOPER (Junior Software Engineer)
// ============================================================================
const devProjects: Project[] = [
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Hybrydowa architektura (Offline Core + Online Modules). Implementacja znanych algorytmów grafowych (BFS, PageRank, Jaccard Index) w Pythonie, udostępnionych przez własne API. Konfiguracja JIT przez Wikipedia API oraz planowany moduł LLM API (Hybrid AI).", 
      fullDescription: "..." 
    },
    en: { 
      description: "Hybrid Architecture (Offline Core + Online Modules). Implementation of standard graph algorithms (BFS, PageRank, Jaccard Index) in Python via custom API. JIT configuration via Wikipedia API and planned LLM API module (Hybrid AI).", 
      fullDescription: "..." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Neo4j", "Docker", "Graph Algorithms", "Backend API"],
    variant: "code",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "LeadFinder & Katalog: Automated Sales Pipeline",
    pl: { 
      description: "Automated Lead Gen Pipeline: Silnik w Pythonie identyfikujący biznesy z lukami cyfrowymi (filtrowanie po dostępności WWW i recenzjach). Integracja z Google Sheets API. Modern Template Marketplace: Next.js 15 Monorepo (Turborepo) z 6+ szablonami. Dynamic Sales Architecture ('Magic Links'). Open Source: Poprawa błędów w Google Maps Scraper.", 
      fullDescription: "..." 
    },
    en: { 
      description: "Automated Lead Gen Pipeline: Python-based scraping engine identifying businesses with digital gaps (filtering by website availability & review count). Integrated with Google Sheets API. Modern Template Marketplace: Next.js 15 Monorepo (Turborepo) with 6+ templates & 'Magic Links'. Open Source Contribution: Patched Google Maps Scraper logic.", 
      fullDescription: "..." 
    },
    githubUrl: "https://github.com/Gzyms69",
    techStack: ["Python", "Next.js 15", "Turborepo", "Google Sheets API"],
    variant: "code",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
  }
];

const devConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer | Backend Enthusiast",
    description: "Ambitny programista z 10-letnią ekspozycją na C++ (background akademicki AGH/PK) i biegłością w Pythonie. Twórca architektury 'WikiGraph' (system RAG/Graph ETL). Specjalizuję się w backendzie, algorytmice i optymalizacji zapytań. Szukam roli Junior Developer, gdzie wykorzystam znajomość Linuxa, Dockera i struktur danych.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer | Backend Enthusiast",
    description: "Ambitious programmer with 10 years of exposure to C++ (AGH/PK academic background) and proficiency in Python. Creator of 'WikiGraph' architecture (RAG/Graph ETL). Specializing in backend, algorithms, and query optimization. Seeking a Junior Developer role to leverage Linux, Docker, and Data Structures knowledge.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  }
};

const devData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "C++ & Python Technical Mentor",
        company: "Giganci Programowania",
        location: "Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Analiza i debugowanie kodu 50+ uczniów tygodniowo (Code Review).",
          "Tłumaczenie zaawansowanych konceptów: wskaźniki, referencje, rekurencja, programowanie obiektowe.",
          "Weryfikacja projektów pod kątem optymalizacji pamięci i złożoności obliczeniowej."
        ]
      },
      {
        title: "Operational Staff",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: ["Doświadczenie operacyjne i wzmacnianie etyki pracy w środowisku międzynarodowym."]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: ["Świadomość domeny biznesowej i współpraca w zespole międzynarodowym (Angielski C1/C2)."]
      }
    ],
    education: supportData.pl.education,
    skills: {
      general: ["Algorithms & Data Structures", "Memory Management", "Graph Theory", "Backend Architecture"],
      tools: ["Docker", "Linux (Bash)", "Git (Flow)", "Neo4j (Cypher)", "Vector DB", "VS Code"],
      programming: ["Python (FastAPI)", "C++ (STL, Pointers)", "SQL (PostgreSQL)", "JavaScript"]
    },
    languages: supportData.pl.languages
  },
  en: {
    experiences: [
      {
        title: "C++ & Python Technical Mentor",
        company: "Giganci Programowania",
        location: "Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Analysis and debugging of code for 50+ students weekly (Code Review).",
          "Teaching advanced concepts: pointers, references, recursion, OOP.",
          "Verifying projects for memory optimization and computational complexity."
        ]
      },
      {
        title: "Operational Staff",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: ["Operational experience & work ethic reinforcement in international environment."]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Krakow",
        period: "Mar 2022 - Jul 2023",
        responsibilities: ["Business Domain Awareness & International Team Collaboration (English C1/C2)."]
      }
    ],
    education: supportData.en.education,
    skills: {
      general: ["Algorithms & Data Structures", "Memory Management", "Graph Theory", "Backend Architecture"],
      tools: ["Docker", "Linux (Bash)", "Git (Flow)", "Neo4j (Cypher)", "Vector DB", "VS Code"],
      programming: ["Python (FastAPI)", "C++ (STL, Pointers)", "SQL (PostgreSQL)", "JavaScript"]
    },
    languages: supportData.en.languages
  }
};

// ============================================================================
// PROFILE: OFFICE (Operations Specialist)
// ============================================================================
const officeProjects: Project[] = []; // Empty as requested

const officeConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Operations Specialist / Data Administration",
    description: "Skrupulatny specjalista ds. administracji z doświadczeniem w międzynarodowej korporacji (FedEx). Biegły w języku angielskim (C1/C2) i obsłudze pakietu MS Office (Excel). Posiadam doświadczenie w pracy z dokumentacją, procedurami oraz obsłudze klienta. Cechuje mnie dokładność, terminowość i wysoka kultura pracy.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["English C1/C2", "Excel", "MS Office", "Data Entry", "Administration"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Operations Specialist / Data Administration",
    description: "Meticulous administration specialist with experience in an international corporation (FedEx). Fluent in English (C1/C2) and proficient in MS Office (Excel). Experienced in documentation, procedures, and customer service. Characterized by accuracy, punctuality, and high work ethics.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["English C1/C2", "Excel", "MS Office", "Data Entry", "Administration"]
  }
};

const officeData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "Pracownik Projektowy (Logistyka)",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Realizacja planów operacyjnych w środowisku magazynowym/produkcyjnym.",
          "Praca fizyczna wymagająca dokładności i dyscypliny.",
          "Codzienna współpraca w języku angielskim."
        ]
      },
      {
        title: "Specjalista ds. Operacji / Administracja",
        company: "FedEx Express Ireland",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Weryfikacja dokumentacji celnej i zapewnienie zgodności z procedurami (Compliance).",
          "Raportowanie i praca z systemami wewnętrznymi pod presją czasu (SLA).",
          "Kontakt z klientem zagranicznym i współpraca w zespole międzynarodowym."
        ]
      },
      {
        title: "Instruktor Szkoleń / Mentor",
        company: "Giganci Programowania",
        location: "Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie szkoleń online i przygotowywanie materiałów dydaktycznych.",
          "Raportowanie postępów uczestników i komunikacja z klientami (rodzicami).",
          "Dbałość o wysoką jakość obsługi klienta i wizerunek firmy."
        ]
      }
    ],
    education: supportData.pl.education,
    skills: {
      general: ["Dokładność w analizie dokumentacji", "Compliance & Procedures", "Realizacja planów operacyjnych", "Współpraca w zespole", "Kultura osobista"],
      tools: ["Excel", "MS Office (Word, PowerPoint)", "Outlook", "Systemy wewnętrzne (ERP/CRM)", "Google Workspace"],
      programming: [] 
    },
    languages: supportData.pl.languages
  },
  en: {
    experiences: [
      {
        title: "Project Worker (Logistics)",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Execution of operational plans in a warehouse/production environment.",
          "Physical work requiring accuracy and discipline.",
          "Daily collaboration in English."
        ]
      },
      {
        title: "Operations Specialist / Administration",
        company: "FedEx Express Ireland",
        location: "Krakow",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Verification of customs documentation and ensuring compliance with procedures.",
          "Reporting and working with internal systems under time pressure (SLA).",
          "Contact with international clients and collaboration within a global team."
        ]
      },
      {
        title: "Training Instructor / Mentor",
        company: "Giganci Programowania",
        location: "Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Conducting online training and preparing educational materials.",
          "Reporting participant progress and communicating with clients.",
          "Ensuring high quality customer service and company image."
        ]
      }
    ],
    education: supportData.en.education,
    skills: {
      general: ["Documentation Accuracy", "Compliance & Procedures", "Operational Plan Execution", "Team Collaboration", "Work Ethics"],
      tools: ["Excel", "MS Office (Word, PowerPoint)", "Outlook", "Internal Systems (ERP/CRM)", "Google Workspace"],
      programming: []
    },
    languages: supportData.en.languages
  }
};

// ============================================================================
// EXPORTS
// ============================================================================

export const resumeProfiles: Record<ResumeVariant, ResumeProfile> = {
  support: { config: supportConfig, data: supportData, projects: supportProjects },
  developer: { config: devConfig, data: devData, projects: devProjects },
  office: { config: officeConfig, data: officeData, projects: officeProjects }
};

// Default exports for backward compatibility (defaults to Support profile)
export const portfolioConfig: GlobalConfig = {
  pl: supportConfig.pl,
  en: supportConfig.en,
  socials: commonSocials,
  contact: commonContact
};

export const projects = supportProjects;
export const cvData = supportData;