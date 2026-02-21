import { Share2, Wrench, Zap } from "lucide-react";
import { Project, CVData, PortfolioConfig, ResumeProfile, ResumeVariant, GlobalConfig } from "@shared/types";

const commonSocials = {
  github: "https://github.com/Gzyms69",
  linkedin: "https://www.linkedin.com/in/dawid-czerwi%C5%84ski-baa6b5149",
  domain: "czerwinskidawid.pl",
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
      description: "Silnik Grafu Wiedzy (Knowledge Graph) przetwarzający Wikipedię w ujednoliconą strukturę topologiczną.", 
      fullDescription: "Hybrydowa architektura bazy danych zaprojektowana do analizy grafowej na dużą skalę. Wykorzystuje zunifikowany backend FastAPI, który federuje zapytania pomiędzy izolowanymi kontenerami językowymi. Używa Neo4j do analizy topologicznej (PageRank, Podobieństwo Jaccarda) oraz SQLite do wyszukiwania pełnotekstowego z czasem odpowiedzi poniżej milisekundy (FTS5). Zawiera system konfiguracji Just-In-Time (JIT) do parsowania dowolnego języka Wikipedii." 
    },
    en: { 
      description: "Language-agnostic Knowledge Graph engine processing Wikipedia into a unified Neo4j + SQLite structure.", 
      fullDescription: "A hybrid database architecture designed for large-scale graph analysis. Features a unified FastAPI backend federating queries across isolated language containers. Utilizes Neo4j for topological analysis (PageRank, Jaccard Similarity) and SQLite for sub-millisecond full-text search (FTS5). Includes a Just-In-Time (JIT) configuration system for parsing any Wikipedia language." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Neo4j", "Docker", "SQL", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    variant: "code",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Kompleksowy system automatyzacji sprzedaży i marketplace szablonów. Łączy scraping leadów (Python) z generowaniem stron demo (Next.js).", 
      fullDescription: "Ekosystem dwóch systemów zaprojektowany do automatyzacji cyklu sprzedaży.\n\n1. Pipeline (Python): Autorski silnik scrapujący, który identyfikuje firmy z brakami cyfrowymi, waliduje domeny i synchronizuje leady bezpośrednio z Google Sheets. Zawiera niestandardowo spatchowany scraper Google Maps używający Playwright do naprawy logiki zliczania opinii.\n\n2. Marketplace (Next.js 15): Wydajne Monorepo (Turborepo) z 'Dynamiczną Architekturą Sprzedaży'. Pozwala to na natychmiastowe generowanie spersonalizowanych stron demo ('Magic Links') za pomocą parametrów URL, redukując czas ręcznego przygotowania oferty o 99%." 
    },
    en: { 
      description: "End-to-end sales automation pipeline and template marketplace. Features automated lead scraping and dynamic 'Magic Link' demo generation.", 
      fullDescription: "A dual-system ecosystem designed to automate the sales lifecycle.\n\n1. Pipeline (Python): A custom scraping engine that identifies businesses with digital gaps, validates domains, and syncs leads directly to Google Sheets. Includes a custom-patched Google Maps scraper using Playwright to fix review counting logic.\n\n2. Marketplace (Next.js 15): A high-performance Monorepo (Turborepo) featuring a 'Dynamic Sales Architecture'. This allows for the instant generation of personalized demo websites ('Magic Links') via URL parameters, reducing manual sales preparation time by 99%." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "MS Office"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    variant: "design",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "ROMHub",
    pl: { 
      description: "Emulator N64 działający w przeglądarce (Client-side) dzięki technologii WebAssembly.", 
      fullDescription: "Emulator skoncentrowany na prywatności, działający całkowicie po stronie klienta dzięki WebAssembly. ROM-y są przetwarzane lokalnie i nigdy nie są przesyłane na serwer. Posiada trwały zapis stanów gry w pamięci lokalnej (Local Storage), niestandardowe mapowanie kontrolera oraz modułową architekturę zaprojektowaną pod przyszłe rozszerzenia rdzenia." 
    },
    en: { 
      description: "Client-side N64 emulator running entirely in the browser via WebAssembly (WASM).", 
      fullDescription: "A privacy-focused emulator that runs entirely on the client side using WebAssembly. ROMs are processed locally and never uploaded to a server. Features persistent local storage for game saves, custom controller mapping, and a modular architecture designed for future core expansions." 
    },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["JavaScript", "Emulation", "Local Storage"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    variant: "code",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  },
  {
    title: "Portfolio Website",
    pl: { 
      description: "Interfejs terminala w stylu retro-futurystycznym, zbudowany w oparciu o React i Three.js.", 
      fullDescription: "Imersyjna symulacja 'systemu operacyjnego' eksplorująca glassmorphism i estetykę mechaniczną. Posiada w pełni interaktywny terminal CLI, środowisko 3D (Three.js) do przeglądania akt (dossier) oraz dedykowany generator CV zoptymalizowany do druku. Zbudowany z naciskiem na wysoką czytelność (kontrast), responsywność w trybie 'offline-first' oraz ścisłe oddzielenie danych od interfejsu użytkownika." 
    },
    en: { 
      description: "Retro-futuristic terminal interface built with React, Three.js, and Framer Motion.", 
      fullDescription: "An immersive 'OS' simulation exploring glassmorphism and mechanical aesthetics. Features a fully interactive CLI, a 3D environment (Three.js) for dossier viewing, and a dedicated print-optimized resume generator. Built with a focus on high-contrast readability, 'offline-first' responsiveness, and a strict separation of data and UI." 
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio-website.png",
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  }
];

const supportConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "Specjalista IT łączący techniczne umiejętności (Python, Linux, SQL) z doświadczeniem operacyjnym (FedEx). Skutecznie diagnozuję problemy (Troubleshooting) i dbam o dotrzymywanie terminów (SLA). Wykorzystuję skrypty do automatyzacji powtarzalnych zadań.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "IT Specialist combining technical skills (Python, Linux, SQL) with operational experience (FedEx). I effectively diagnose problems (Troubleshooting) and ensure SLA compliance. I leverage scripting to automate repetitive tasks.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
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
      { school: "Politechnika Krakowska", degree: "Kierunek: Matematyka Stosowana", field: "Matematyka Stosowana", years: "2020-2022" },
      { school: "Akademia Górniczo-Hutnicza (AGH)", degree: "Kierunek: Elektronika i Telekomunikacja", field: "Elektronika i Telekomunikacja", years: "2019-2020" }
    ],
    skills: {
      general: ["Linux (Ubuntu CLI)", "Enterprise Ticketing Systems (SLA)", "Incident Management", "Problem Solving"],
      tools: ["Python (Scripting)", "Google Workspace API", "MS Office", "Git (CI/CD GitHub Actions)", "VS Code"],
      programming: ["Bash Automation", "SQL (Podstawy)", "Sieci (TCP/IP / DNS)"]
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany Professional)"]
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
      { school: "Cracow University of Technology", degree: "Field: Applied Mathematics", field: "Applied Mathematics", years: "2020-2022" },
      { school: "AGH University of Science and Technology", degree: "Field: Electronics and Telecommunications", field: "Electronics and Telecommunications", years: "2019-2020" }
    ],
    skills: {
      general: ["Linux (Ubuntu CLI)", "Enterprise Ticketing Systems (SLA)", "Incident Management", "Problem Solving"],
      tools: ["Python (Scripting)", "Google Workspace API", "MS Office", "Git (CI/CD GitHub Actions)", "VS Code"],
      programming: ["Bash Automation", "SQL (Basics)", "Networking (TCP/IP / DNS)"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)"]
  }
};

// ============================================================================
// PROFILE: DEVELOPER (Junior Software Engineer)
// ============================================================================
const devProjects: Project[] = [
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Silnik Grafu Wiedzy (Knowledge Graph) przetwarzający Wikipedię w ujednoliconą strukturę topologiczną.", 
      fullDescription: "Hybrydowa architektura bazy danych zaprojektowana do analizy grafowej na dużą skalę. Wykorzystuje zunifikowany backend FastAPI, który federuje zapytania pomiędzy izolowanymi kontenerami językowymi. Używa Neo4j do analizy topologicznej (PageRank, Podobieństwo Jaccarda) oraz SQLite do wyszukiwania pełnotekstowego z czasem odpowiedzi poniżej milisekundy (FTS5). Zawiera system konfiguracji Just-In-Time (JIT) do parsowania dowolnego języka Wikipedii." 
    },
    en: { 
      description: "Language-agnostic Knowledge Graph engine processing Wikipedia into a unified Neo4j + SQLite structure.", 
      fullDescription: "A hybrid database architecture designed for large-scale graph analysis. Features a unified FastAPI backend federating queries across isolated language containers. Utilizes Neo4j for topological analysis (PageRank, Jaccard Similarity) and SQLite for sub-millisecond full-text search (FTS5). Includes a Just-In-Time (JIT) configuration system for parsing any Wikipedia language." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Neo4j", "Docker", "SQL", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    variant: "code",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Kompleksowy system automatyzacji sprzedaży i marketplace szablonów. Łączy scraping leadów (Python) z generowaniem stron demo (Next.js).", 
      fullDescription: "Ekosystem dwóch systemów zaprojektowany do automatyzacji cyklu sprzedaży.\n\n1. Pipeline (Python): Autorski silnik scrapujący, który identyfikuje firmy z brakami cyfrowymi, waliduje domeny i synchronizuje leady bezpośrednio z Google Sheets. Zawiera niestandardowo spatchowany scraper Google Maps używający Playwright do naprawy logiki zliczania opinii.\n\n2. Marketplace (Next.js 15): Wydajne Monorepo (Turborepo) z 'Dynamiczną Architekturą Sprzedaży'. Pozwala to na natychmiastowe generowanie spersonalizowanych stron demo ('Magic Links') za pomocą parametrów URL, redukując czas ręcznego przygotowania oferty o 99%." 
    },
    en: { 
      description: "End-to-end sales automation pipeline and template marketplace. Features automated lead scraping and dynamic 'Magic Link' demo generation.", 
      fullDescription: "A dual-system ecosystem designed to automate the sales lifecycle.\n\n1. Pipeline (Python): A custom scraping engine that identifies businesses with digital gaps, validates domains, and syncs leads directly to Google Sheets. Includes a custom-patched Google Maps scraper using Playwright to fix review counting logic.\n\n2. Marketplace (Next.js 15): A high-performance Monorepo (Turborepo) featuring a 'Dynamic Sales Architecture'. This allows for the instant generation of personalized demo websites ('Magic Links') via URL parameters, reducing manual sales preparation time by 99%." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "MS Office"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    variant: "code",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "ROMHub",
    pl: { 
      description: "Emulator N64 działający w przeglądarce (Client-side) dzięki technologii WebAssembly.", 
      fullDescription: "Emulator skoncentrowany na prywatności, działający całkowicie po stronie klienta dzięki WebAssembly. ROM-y są przetwarzane lokalnie i nigdy nie są przesyłane na serwer. Posiada trwały zapis stanów gry w pamięci lokalnej (Local Storage), niestandardowe mapowanie kontrolera oraz modułową architekturę zaprojektowaną pod przyszłe rozszerzenia rdzenia." 
    },
    en: { 
      description: "Client-side N64 emulator running entirely in the browser via WebAssembly (WASM).", 
      fullDescription: "A privacy-focused emulator that runs entirely on the client side using WebAssembly. ROMs are processed locally and never uploaded to a server. Features persistent local storage for game saves, custom controller mapping, and a modular architecture designed for future core expansions." 
    },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["JavaScript", "Emulation", "Local Storage"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    variant: "code",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  },
  {
    title: "Portfolio Website",
    pl: { 
      description: "Interfejs terminala w stylu retro-futurystycznym, zbudowany w oparciu o React i Three.js.", 
      fullDescription: "Imersyjna symulacja 'systemu operacyjnego' eksplorująca glassmorphism i estetykę mechaniczną. Posiada w pełni interaktywny terminal CLI, środowisko 3D (Three.js) do przeglądania akt (dossier) oraz dedykowany generator CV zoptymalizowany do druku. Zbudowany z naciskiem na wysoką czytelność (kontrast), responsywność w trybie 'offline-first' oraz ścisłe oddzielenie danych od interfejsu użytkownika." 
    },
    en: { 
      description: "Retro-futuristic terminal interface built with React, Three.js, and Framer Motion.", 
      fullDescription: "An immersive 'OS' simulation exploring glassmorphism and mechanical aesthetics. Features a fully interactive CLI, a 3D environment (Three.js) for dossier viewing, and a dedicated print-optimized resume generator. Built with a focus on high-contrast readability, 'offline-first' responsiveness, and a strict separation of data and UI." 
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio-website.png",
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  }
];

const devConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer",
    description: "Ambitny programista z solidnym zapleczem akademickim (AGH/PK) i biegłością w Pythonie. Twórca architektury 'WikiGraph' (Graph ETL). Specjalizuję się w backendzie (FastAPI), algorytmice i optymalizacji zapytań. Szukam wyzwań inżynierskich.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer",
    description: "Ambitious programmer with a solid academic background (AGH/PK) and proficiency in Python. Creator of 'WikiGraph' architecture (Graph ETL). Specializing in backend (FastAPI), algorithms, and query optimization. Seeking engineering challenges.",
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
        responsibilities: [
          "Praca w dynamicznym środowisku międzynarodowym – szybka adaptacja i praca zespołowa.",
          "Realizacja zadań pod presją czasu z zachowaniem wysokiej dyscypliny i norm jakościowych."
        ]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Praca w rygorze SLA (Service Level Agreement) i Compliance – dbałość o procedury i terminowość.",
          "Codzienna komunikacja w języku angielskim (C1/C2) w zespole międzynarodowym.",
          "Obsługa zgłoszeń i analiza danych w systemach klasy Enterprise (Ticket-based workflow)."
        ]
      }
    ],
    education: supportData.pl.education,
    skills: {
      general: ["Grafowe Bazy Danych (Neo4j)", "Architektura Backend", "Algorytmy i Struktury Danych", "Docker"],
      tools: ["Git (CI/CD GitHub Actions)", "Linux Environment", "VS Code"],
      programming: ["Python (FastAPI, Pandas)", "C++ (STL/Pointers)", "REST API Design", "SQL (PostgreSQL)"]
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
        responsibilities: [
          "Working in a dynamic international environment – fast adaptation and teamwork.",
          "Execution of tasks under time pressure while maintaining high discipline and quality standards."
        ]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Krakow",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Working under SLA (Service Level Agreement) and Compliance rigor – attention to procedures and deadlines.",
          "Daily communication in English (C1/C2) within an international team.",
          "Ticket handling and data analysis in Enterprise-class systems (Ticket-based workflow)."
        ]
      }
    ],
    education: supportData.en.education,
    skills: {
      general: ["Graph Databases (Neo4j)", "Backend Architecture", "Algorithms & Data Structures", "Docker"],
      tools: ["Git (CI/CD GitHub Actions)", "Linux Environment", "VS Code"],
      programming: ["Python (FastAPI, Pandas)", "C++ (STL/Pointers)", "REST API Design", "SQL (PostgreSQL)"]
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

const officeData: Record<string, CVData> = {
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

// ============================================================================
// PROFILE: IT SPECIALIST (L1 Support / Helpdesk)
// ============================================================================
const itSpecialistProjects: Project[] = [
  {
    title: "Prywatne Projekty IT",
    pl: {
      description: "Tworzenie i wdrażanie własnych systemów (m.in. WikiGraph, LeadFinder).",
      fullDescription: "Projekty te obejmowały konfigurację środowisk Linux, wdrożenia w Dockerze, zarządzanie bazami SQL oraz pisanie skryptów w Pythonie. Samodzielna realizacja tych narzędzi dowodzi mojej umiejętności analitycznego myślenia, szybkiego wyszukiwania informacji oraz rozwiązywania złożonych problemów technicznych (Problem Solving)."
    },
    en: {
      description: "Creating and deploying custom systems (incl. WikiGraph, LeadFinder).",
      fullDescription: "These projects involved Linux environment configuration, Docker deployments, SQL database management, and Python scripting. The independent realization of these tools proves my analytical thinking skills, quick information retrieval, and complex problem-solving abilities."
    },
    githubUrl: "https://github.com/Gzyms69",
    techStack: ["Linux", "Docker", "Python", "SQL"],
    variant: "code",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
  }
];

const itSpecialistConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "IT Support Specialist / Helpdesk L1",
    description: "Specjalista IT łączący doświadczenie w operacjach międzynarodowych (FedEx) z praktyką w edukacji technicznej (Giganci Programowania). Jako Mentor IT wyrobiłem wysoką cierpliwość i umiejętność tłumaczenia technicznych zagadnień laikom, regularnie diagnozując i rozwiązując problemy konfiguracyjne na komputerach kursantów. Dodatkowo, dzięki pracy w środowisku korporacyjnym, doskonale rozumiem rygor pracy z dokumentacją, SLA i systemami biletowymi. Szukam możliwości rozwoju na pierwszej linii wsparcia (L1 Support / Helpdesk), gdzie wykorzystam swoje umiejętności komunikacyjne i zmysł techniczny.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Windows 10/11", "Troubleshooting", "Active Directory", "Linux", "Python"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "IT Support Specialist / Helpdesk L1",
    description: "IT Specialist combining experience in international operations (FedEx) with technical education practice (Giganci Programowania). As an IT Mentor, I developed high patience and the ability to explain technical issues to laypeople, regularly diagnosing and resolving configuration problems on students' computers. Additionally, thanks to working in a corporate environment, I perfectly understand the rigor of working with documentation, SLA, and ticketing systems. I am looking for development opportunities on the first line of support (L1 Support / Helpdesk), where I will utilize my communication skills and technical acumen.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Windows 10/11", "Troubleshooting", "Active Directory", "Linux", "Python"]
  }
};

const itSpecialistData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "Nauczyciel Programowania / Mentor IT",
        company: "Giganci Programowania",
        location: "Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Edukacja i Komunikacja: Prowadzenie szkoleń technicznych (Python, C++, C#). Tłumaczenie złożonych konceptów informatycznych osobom o zerowej wiedzy technicznej w sposób jasny i cierpliwy.",
          "Troubleshooting Środowisk (Wsparcie L1): Rozwiązywanie problemów 'na żywo' ze sprzętem i oprogramowaniem kursantów (instalacja paczek, konfiguracja zmiennych środowiskowych, rozwiązywanie konfliktów w systemach Windows i konfiguracja VS Code/Unity).",
          "Wsparcie Asynchroniczne: Zdalna obsługa zapytań i problemów technicznych od kursantów (via Discord), funkcjonująca na zasadach pierwszej linii wsparcia.",
          "Zarządzanie Zgłoszeniami: Współpraca z klientem (rodzicami kursantów) oraz raportowanie postępów i problemów organizacyjnych w wewnętrznym systemie CRM."
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
    education: supportData.pl.education,
    skills: {
      general: ["Systemy biletowe (Enterprise Ticketing Systems)", "Incident Management", "Praca w rygorze SLA", "Obsługa klienta"],
      tools: ["Windows 10/11", "Linux (Ubuntu CLI)", "Google Workspace", "MS Office", "VS Code / Unity"],
      programming: ["Python", "Bash", "Podstawy SQL", "Docker", "Git"]
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany Professional)"]
  },
  en: {
    experiences: [
      {
        title: "Programming Teacher / IT Mentor",
        company: "Giganci Programowania",
        location: "Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Educational Instruction: Conducting technical training (Python, C++, C#). Explaining complex computer science concepts to people with zero technical knowledge in a clear and patient manner.",
          "Environment Troubleshooting (L1 Support): Live hardware and software troubleshooting for students (package installation, environment variable configuration, resolving Windows system conflicts, and VS Code/Unity configuration).",
          "Async Support: Remote handling of technical queries and issues from students (via Discord), functioning on first-line support principles.",
          "Ticket Management: Collaboration with the client (students' parents) and reporting progress and organizational issues in an internal CRM system."
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
    education: supportData.en.education,
    skills: {
      general: ["Enterprise Ticketing Systems", "Incident Management", "SLA rigor", "Customer service"],
      tools: ["Windows 10/11", "Linux (Ubuntu CLI)", "Google Workspace", "MS Office", "VS Code / Unity"],
      programming: ["Python", "Bash", "SQL basics", "Docker", "Git"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)"]
  }
};

// ============================================================================
// EXPORTS
// ============================================================================

export const resumeProfiles: Record<ResumeVariant, ResumeProfile> = {
  support: { config: supportConfig, data: supportData, projects: supportProjects },
  developer: { config: devConfig, data: devData, projects: devProjects },
  office: { config: officeConfig, data: officeData, projects: officeProjects },
  "it-specialist": { config: itSpecialistConfig, data: itSpecialistData, projects: itSpecialistProjects }
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
