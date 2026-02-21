import { Share2, Wrench, Zap } from "lucide-react";
import { Project, CVData, PortfolioConfig } from "@shared/types";
import { commonSocials, commonContact } from "./common";

export const supportProjects: Project[] = [
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
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&q=80&fm=webp",
    variant: "code",
    // icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" /> // Icons causing issues in data files? We'll see.
  },
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Kompleksowy system automatyzacji sprzedaży i marketplace szablonów. Łączy scraping leadów (Python) z generowaniem stron demo (Next.js).", 
      fullDescription: `Ekosystem dwóch systemów zaprojektowany do automatyzacji cyklu sprzedaży.

1. Pipeline (Python): Autorski silnik scrapujący, który identyfikuje firmy z brakami cyfrowymi, waliduje domeny i synchronizuje leady bezpośrednio z Google Sheets. Zawiera niestandardowo spatchowany scraper Google Maps używający Playwright do naprawy logiki zliczania opinii.

2. Marketplace (Next.js 15): Wydajne Monorepo (Turborepo) z 'Dynamiczną Architekturą Sprzedaży'. Pozwala to na natychmiastowe generowanie spersonalizowanych stron demo ('Magic Links') za pomocą parametrów URL, redukując czas ręcznego przygotowania oferty o 99%.` 
    },
    en: { 
      description: "End-to-end sales automation pipeline and template marketplace. Features automated lead scraping and dynamic 'Magic Link' demo generation.", 
      fullDescription: `A dual-system ecosystem designed to automate the sales lifecycle.

1. Pipeline (Python): A custom scraping engine that identifies businesses with digital gaps, validates domains, and syncs leads directly to Google Sheets. Includes a custom-patched Google Maps scraper using Playwright to fix review counting logic.

2. Marketplace (Next.js 15): A high-performance Monorepo (Turborepo) featuring a 'Dynamic Sales Architecture'. This allows for the instant generation of personalized demo websites ('Magic Links') via URL parameters, reducing manual sales preparation time by 99%.` 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "MS Office"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&q=80&fm=webp",
    variant: "design",
    // icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />
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
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&q=80&fm=webp",
    variant: "code",
    // icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
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
    // icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  }
];

export const supportConfig: Record<string, PortfolioConfig> = {
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

export const supportData: Record<string, CVData> = {
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
