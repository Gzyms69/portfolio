import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const devProjects: Project[] = [
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Rozbudowany ekosystem (100/100 Lighthouse) zarządzany jako monorepo w Turborepo, łączący logikę backendową z nowoczesnym frontendem (React). Zgodność z RODO (Klaro). Backend & Marketing: Wdrożenie systemu dynamicznej personalizacji szablonów z wykorzystaniem routingu Node.js oraz optymalizacja SEO (eliminacja duplikacji w robots.txt). Rozdzielenie środowisk na 3 niezależne projekty Vercel z zaawansowaną konfiguracją przekierowań. DevOps & Testing: Zabezpieczenie domeny i formularzy przez Cloudflare. Inżynieryjna optymalizacja środowiska hostingowego poprzez autorski endpoint dla zadań Cron. Automatyzacja testów i debugowania za pomocą Puppeteera oraz serwerów MCP (Gemini).", 
      fullDescription: "Rozbudowany ekosystem (100/100 Lighthouse) zarządzany jako monorepo w Turborepo, łączący logikę backendową z nowoczesnym frontendem (React). Zgodność z RODO (Klaro).\n\nBackend & Marketing: Wdrożenie systemu dynamicznej personalizacji szablonów z wykorzystaniem routingu Node.js oraz optymalizacja SEO (eliminacja duplikacji w robots.txt). Rozdzielenie środowisk na 3 niezależne projekty Vercel z zaawansowaną konfiguracją przekierowań.\n\nDevOps & Testing: Zabezpieczenie domeny i formularzy przez Cloudflare. Inżynieryjna optymalizacja środowiska hostingowego poprzez autorski endpoint dla zadań Cron. Automatyzacja testów i debugowania za pomocą Puppeteera oraz serwerów MCP (Gemini)." 
    },
    en: { 
      description: "Extensive ecosystem (100/100 Lighthouse) managed as a Turborepo monorepo, combining backend logic with a modern frontend (React). GDPR compliance (Klaro). Backend & Marketing: Implementation of a dynamic template personalization system using Node.js routing and SEO optimization (robots.txt duplication removal). Environment separation into 3 independent Vercel projects with advanced redirect configuration. DevOps & Testing: Domain and form security via Cloudflare. Engineering optimization of the hosting environment through a custom endpoint for Cron jobs. Test and debug automation using Puppeteer and MCP servers (Gemini).", 
      fullDescription: "Extensive ecosystem (100/100 Lighthouse) managed as a Turborepo monorepo, combining backend logic with a modern frontend (React). GDPR compliance (Klaro).\n\nBackend & Marketing: Implementation of a dynamic template personalization system using Node.js routing and SEO optimization (robots.txt duplication removal). Environment separation into 3 independent Vercel projects with advanced redirect configuration.\n\nDevOps & Testing: Domain and form security via Cloudflare. Engineering optimization of the hosting environment through a custom endpoint for Cron jobs. Test and debug automation using Puppeteer and MCP servers (Gemini)." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Next.js 15", "React", "Node.js", "Turborepo", "Resend", "Cloudflare"],
    variant: "code",
    hideFromPortfolio: true
  },
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Projektowanie architektury backendowej dla autorskiego silnika grafu wiedzy z wykorzystaniem baz SQL i Neo4j. Programowanie i optymalizacja wydajności REST API w FastAPI. Skonteneryzowanie całego środowiska przy użyciu Dockera.", 
      fullDescription: "Projektowanie architektury backendowej dla autorskiego silnika grafu wiedzy z wykorzystaniem baz SQL i Neo4j. Programowanie i optymalizacja wydajności REST API w FastAPI. Skonteneryzowanie całego środowiska przy użyciu Dockera." 
    },
    en: { 
      description: "Designing backend architecture for a custom knowledge graph engine using SQL and Neo4j databases. Programming and performance optimization of REST API in FastAPI. Containerization of the entire environment using Docker.", 
      fullDescription: "Designing backend architecture for a custom knowledge graph engine using SQL and Neo4j databases. Programming and performance optimization of REST API in FastAPI. Containerization of the entire environment using Docker." 
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
    hideFromResume: true
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
          "Szybka adaptacja do międzynarodowego środowiska, przestrzeganie procedur operacyjnych i BHP, swobodna komunikacja w języku angielskim."
        ]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Obsługa systemów klasy Enterprise w rygorze ścisłych SLA. Procesowanie średnio ponad 100 zgłoszeń dziennie przy zachowaniu 98% skuteczności.",
          "Zarządzanie eskalacjami i codzienny kontakt (j. angielski C1/C2) z międzynarodowymi zespołami operacyjnymi."
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
          "Fast adaptation to international environments, compliance with operational and health and safety procedures, fluent communication in English."
        ]
      },
      {
        title: "Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Krakow",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Enterprise system operations under strict SLA rigor. Processing an average of over 100 requests per day with 98% efficiency.",
          "Escalation management and daily contact (English C1/C2) with international operational teams."
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
