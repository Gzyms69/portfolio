import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const devProjects: Project[] = [
  {
    title: "LeadFinder & Katalog Ecosystem [11.2025 – Obecnie]",
    pl: { 
      description: "Full-Stack & Analityka: Stworzenie ekosystemu łączącego front-end z systemem generowania leadów. Wdrożenie systemu 'Magic Links' (renderowanie szablonów), inteligentnych redirectów URL i śledzenia Google Analytics. Backend & Scraping: Rozwój forka google-maps-scraper (Python). Eliminacja race conditions i blokad API (Google RPC) logiką wait-and-retry w Playwright. Parsowanie struktur APP_INITIALIZATION_STATE. Infrastruktura & Optymalizacja: Wdrożenie na Vercel (Cron Jobs). Integracja z Google Sheets API poprzez Google Cloud IAM. Profilowanie kodu serwerami MCP (wynik 100/100 Lighthouse).", 
      fullDescription: "Full-Stack & Analityka: Stworzenie ekosystemu łączącego front-end z systemem generowania leadów. Wdrożenie systemu 'Magic Links' (renderowanie szablonów), inteligentnych redirectów URL i śledzenia Google Analytics. Backend & Scraping: Rozwój forka google-maps-scraper (Python). Eliminacja race conditions i blokad API (Google RPC) logiką wait-and-retry w Playwright. Parsowanie struktur APP_INITIALIZATION_STATE. Infrastruktura & Optymalizacja: Wdrożenie na Vercel (Cron Jobs). Integracja z Google Sheets API poprzez Google Cloud IAM. Profilowanie kodu serwerami MCP (wynik 100/100 Lighthouse)." 
    },
    en: { 
      description: "Full-Stack & Analytics: Creating an ecosystem connecting front-end with a lead generation system. Implementation of 'Magic Links' (template rendering), intelligent URL redirects, and Google Analytics tracking. Backend & Scraping: Development of a google-maps-scraper fork (Python). Elimination of race conditions and API blocks (Google RPC) using wait-and-retry logic in Playwright. Parsing APP_INITIALIZATION_STATE structures. Infrastructure & Optimization: Deployment on Vercel (Cron Jobs). Integration with Google Sheets API via Google Cloud IAM. Code profiling using MCP servers (100/100 Lighthouse score).", 
      fullDescription: "Full-Stack & Analytics: Creating an ecosystem connecting front-end with a lead generation system. Implementation of 'Magic Links' (template rendering), intelligent URL redirects, and Google Analytics tracking. Backend & Scraping: Development of a google-maps-scraper fork (Python). Elimination of race conditions and API blocks (Google RPC) using wait-and-retry logic in Playwright. Parsing APP_INITIALIZATION_STATE structures. Infrastructure & Optimization: Deployment on Vercel (Cron Jobs). Integration with Google Sheets API via Google Cloud IAM. Code profiling using MCP servers (100/100 Lighthouse score)." 
    },
    githubUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Next.js 15", "React", "Python", "Playwright", "FastAPI", "Google Cloud"],
    variant: "code",
    hideFromPortfolio: true
  },
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Rozwój Backendu: Stworzenie od zera silnika grafu wiedzy. Projektowanie architektury dla relacyjnych (SQL) i grafowych (Neo4j) baz danych. Tworzenie i optymalizacja wydajności REST API (FastAPI) do obsługi zapytań topologicznych. Skonteneryzowanie całego środowiska (Docker).", 
      fullDescription: "Rozwój Backendu: Stworzenie od zera silnika grafu wiedzy. Projektowanie architektury dla relacyjnych (SQL) i grafowych (Neo4j) baz danych. Tworzenie i optymalizacja wydajności REST API (FastAPI) do obsługi zapytań topologicznych. Skonteneryzowanie całego środowiska (Docker)." 
    },
    en: { 
      description: "Backend Development: Creating a knowledge graph engine from scratch. Architectural design for relational (SQL) and graph (Neo4j) databases. Creation and performance optimization of REST API (FastAPI) for topological query handling. Full environment containerization (Docker).", 
      fullDescription: "Backend Development: Creating a knowledge graph engine from scratch. Architectural design for relational (SQL) and graph (Neo4j) databases. Creation and performance optimization of REST API (FastAPI) for topological query handling. Full environment containerization (Docker)." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Neo4j", "Docker", "SQL", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&q=80&fm=webp",
    variant: "code",
  },
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Kompleksowy system automatyzacji sprzedaży i marketplace szablonów. Łączy scraping leadów (Python) z generowaniem stron demo (Next.js).", 
      fullDescription: `Ekosystem dwóch systemów zaprojektowany do automatyzacji cyklu sprzedaży.

1. Pipeline (Python): Autorski silnik scrapujący, który identyfikuje firmy z brakami cyfrowymi, waliduje domeny i synchronizuje leady bezpośrednio z Google Sheets. Zawiera niestandardowo spatchowany scraper Google Maps używający Playwright do naprawy logiki zliczania opinii.

2. Marketplace (Next.js 15): Wydajne Monorepo (Turborepo) z 'Dynamiczną Architekturą Sprzedaży'. Pozwala to na natychmiastowe generowanie spersonalizowanych stron demo ('Magic Links') za pomocą parametrów URL, redukując czas ręcznego przygotowania oferty o 99%.` 
    },
    en: { 
      description: "End-to-end sales automation pipeline and template marketplace. Features automated lead scraping and dynamic 'Magic Link' demo generation.", 
      fullDescription: `A dual-system ecosystem designed to automate the sales lifecycle.

1. Pipeline (Python): A custom scraping engine that identifies businesses with digital gaps, validates domains, and syncs leads directly to Google Sheets. Includes a custom-patched Google Maps scraper using Playwright to fix review counting logic.

2. Marketplace (Next.js 15): A high-performance Monorepo (Turborepo) featuring a 'Dynamic Sales Architecture'. This allows for the instant generation of personalized demo websites ('Magic Links') via URL parameters, reducing manual sales preparation time by 99%.` 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "MS Office"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&q=80&fm=webp",
    variant: "code",
  },
  {
    title: "ROMHub",
    pl: { 
      description: "Emulator N64 działający w przeglądarce (Client-side) dzięki technologii WebAssembly.", 
      fullDescription: "Emulator skoncentrowany na prywatności, działający całkowicie po stronie klienta dzięki WebAssembly. ROM-y są przetwarzane lokalnie i nigdy nie są przesyłane na serwer. Posiada trwały zapis stanów gry w pamięci lokalnej (Local Storage), niestandardowe mapowanie kontrolera oraz modułową architekturę zaprojektowaną pod przyszłe rozszerzenia rdzenia." 
    },
    en: { 
      description: "Client-side N64 emulator running entirely in the browser via WebAssembly (WASM).", 
      fullDescription: "A privacy-focused emulator that runs entirely on the client side using WebAssembly. ROMs are processed locally and never uploaded to a server. Features persistent local storage for game saves, custom controller mapping, and a modular architecture designed for future core expansions." 
    },
    githubUrl: "https://github.com/Gzyms69/romhub",
    techStack: ["JavaScript", "Emulation", "Local Storage"],
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&q=80&fm=webp",
    variant: "code",
    hideFromResume: true
  },
  {
    title: "Portfolio Website",
    pl: { 
      description: "Interfejs terminala w stylu retro-futurystycznym, zbudowany w oparciu o React i Three.js.", 
      fullDescription: "Imersyjna symulacja 'systemu operacyjnego' eksplorująca glassmorphism i estetykę mechaniczną. Posiada w pełni interaktywny terminal CLI, środowisko 3D (Three.js) do przeglądania akt (dossier) oraz dedykowany generator CV zoptymalizowany do druku. Zbudowany z naciskiem na wysoką czytelność (kontrast), responsywność w trybie 'offline-first' oraz ścisłe oddzielenie danych od interfejsu użytkownika." 
    },
    en: { 
      description: "Retro-futuristic terminal interface built with React, Three.js, and Framer Motion.", 
      fullDescription: "An immersive 'OS' simulation exploring glassmorphism and mechanical aesthetics. Features a fully interactive CLI, a 3D environment (Three.js) for dossier viewing, and a dedicated print-optimized resume generator. Built with a focus on high-contrast readability, 'offline-first' responsiveness, and a strict separation of data and UI." 
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/portfolio-website.png",
    variant: "design",
    hideFromResume: true
  }
];

export const devConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer",
    description: "Full-Stack Developer z solidnym zapleczem akademickim (AGH/PK), łączący tworzenie nowoczesnych interfejsów (Next.js, React) z wydajną architekturą backendową (Python, FastAPI). Twórca kompleksowych systemów webowych, w tym platformy Katalog.CzerwinskiDawid.pl (100/100 Lighthouse) oraz ekosystemu LeadFinder automatyzującego procesy sprzedażowe. Specjalizuję się w optymalizacji wydajności, integracji API oraz projektowaniu zapytań (SQL/Neo4j). Szukam wyzwań inżynierskich, w których wykorzystam swoje umiejętności od analizy wymagań po finalne wdrożenie (CI/CD).",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer",
    description: "Full-Stack Developer with a solid academic background (AGH/PK), combining modern interface development (Next.js, React) with efficient backend architecture (Python, FastAPI). Creator of comprehensive web systems, including the Katalog.CzerwinskiDawid.pl platform (100/100 Lighthouse) and the LeadFinder ecosystem automating sales processes. Specialized in performance optimization, API integration, and query design (SQL/Neo4j). Seeking engineering challenges where I can leverage my skills from requirements analysis to final deployment (CI/CD).",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  }
};

export const devData: Record<string, CVData> = {
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
      tools: ["Git (CI/CD / GitHub Actions)", "Linux Environment", "VS Code"],
      programming: ["Python (FastAPI, Pandas)", "C++", "REST API Design", "SQL"]
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
      programming: ["Python (FastAPI, Pandas)", "C++", "REST API Design", "SQL"]
    },
    languages: supportData.en.languages
  }
};
