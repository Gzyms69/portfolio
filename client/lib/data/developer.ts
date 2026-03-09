import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const devProjects: Project[] = [
  {
    title: "LeadFinder & Katalog Ecosystem",
    period: "11.2025 – Obecnie",
    pl: { 
      description: "**Architektura & UI:** Ekosystem monorepo (**Turborepo**) z własną biblioteką komponentów (Framer Motion, Tailwind). Nowoczesny frontend (**Next.js App Router**, 98+/100 Lighthouse) i zautomatyzowane SEO (OpenGraph). **Backend & Sesja:** Wdrożenie bezstanowego środowiska demo e-commerce (panel admina, sklep, profil klienta) opartego całkowicie na zarządzaniu sesją i ciasteczkami (cookies), pozwalającego na bezpieczne testowanie platformy. **Open Source & DevOps:** Fork repozytorium `google-maps-scraper` (**Playwright**) – analiza i merge patchy społeczności (Pull Requests). Wdrożenie endpointów telemetrycznych zapobiegających 'cold start', ochrona domeny (**Cloudflare**) oraz zautomatyzowane debugowanie logów przy użyciu przeglądarki headless (**Puppeteer**) i środowisk LLM z serwerami MCP.", 
      fullDescription: "Autorski system automatyzacji sprzedaży. Zbudowałem od zera architekturę łączącą web scraping w Pythonie z frontendem w Next.js.\n\nRozwój forka google-maps-scraper: napisanie logiki wait-and-retry in Playwright, by ominąć błędy asynchronicznego ładowania DOM i zablokować restrykcje API.\n\nWdrożenie środowiska produkcyjnego na Vercel (eliminacja 'Cold Start'), integracja z Google Sheets API poprzez GCP IAM i optymalizacja frontendu pod 100/100 w audytach Lighthouse." 
    },
    en: { 
      description: "**Architecture & UI:** Monorepo ecosystem (**Turborepo**) with a custom component library (Framer Motion, Tailwind). Modern frontend (**Next.js App Router**, 98+/100 Lighthouse) and automated SEO (OpenGraph). **Backend & Session:** Implementation of a stateless e-commerce demo environment (admin panel, store, customer profile) based entirely on session and cookie management, allowing for safe platform testing. **Open Source & DevOps:** Fork of the `google-maps-scraper` repository (**Playwright**) – analysis and merging of community patches (Pull Requests). Implementation of telemetry endpoints preventing 'cold start', domain protection (**Cloudflare**), and automated log debugging using a headless browser (**Puppeteer**) and LLM environments with MCP servers.", 
      fullDescription: "Custom sales automation system. Built from scratch an architecture combining web scraping in Python with a Next.js frontend.\n\nDevelopment of a google-maps-scraper fork: wrote wait-and-retry logic in Playwright to bypass asynchronous DOM loading errors and API restrictions.\n\nDeployment of the production environment on Vercel (elimination of 'Cold Start'), integration with Google Sheets API via GCP IAM, and frontend optimization for 100/100 in Lighthouse audits." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Next.js 15", "Turborepo", "Playwright", "Tailwind", "Cloudflare", "Stateless Sessions"],
    variant: "code",
    hideFromPortfolio: true
  },
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Silnik grafu wiedzy. Samodzielnie zaprojektowana architektura backendowa dla baz relacyjnych i grafowych, konteneryzacja w Dockerze i obsługa zapytań przez REST API.", 
      fullDescription: "Silnik grafu wiedzy. Samodzielnie zaprojektowana architektura backendowa dla baz relacyjnych i grafowych, konteneryzacja w Dockerze i obsługa zapytań przez REST API." 
    },
    en: { 
      description: "Knowledge graph engine. Independently designed backend architecture for relational and graph databases, Docker containerization, and REST API query handling.", 
      fullDescription: "Knowledge graph engine. Independently designed backend architecture for relational and graph databases, Docker containerization, and REST API query handling." 
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
    description: "Ambitny inżynier oprogramowania (Junior Full-Stack) z solidnym zapleczem akademickim (AGH/PK), łączący tworzenie nowoczesnych interfejsów (Next.js, React) z wydajną architekturą backendową (Python, FastAPI). Twórca kompleksowych systemów webowych, w tym platformy Katalog.CzerwinskiDawid.pl (100/100 Lighthouse) oraz ekosystemu LeadFinder automatyzującego procesy sprzedażowe. Specjalizuję się w optymalizacji wydajności, integracji API oraz projektowaniu zapytań (SQL/Neo4j). Szukam wyzwań inżynierskich, w których wykorzystam swoje umiejętności od analizy wymagań po finalne wdrożenie (CI/CD).",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Python", "C++", "SQL", "Docker", "Linux", "Neo4j"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer | Python & C++ Developer",
    description: "Ambitious Software Engineer (Junior Full-Stack) with a solid academic background (AGH/PK), combining modern interface development (Next.js, React) with efficient backend architecture (Python, FastAPI). Creator of comprehensive web systems, including the Katalog.CzerwinskiDawid.pl platform (100/100 Lighthouse) and the LeadFinder ecosystem automating sales processes. Specialized in performance optimization, API integration, and query design (SQL/Neo4j). Seeking engineering challenges where I can leverage my skills from requirements analysis to final deployment (CI/CD).",
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
        location: "(Zdalnie / Część etatu)",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Analiza kodu i Code Review: Analiza i debugowanie rozwiązań 50+ uczniów tygodniowo.",
          "Algorytmika i Struktury Danych: Tłumaczenie kluczowych zagadnień wymaganych na maturze z informatyki: algorytmy, operacje na tablicach oraz przetwarzanie plików wejścia/wyjścia.",
          "Podstawy OOP i Logiki: Wprowadzanie początkujących w klasy i dziedziczenie oraz praktyczne zastosowanie fundamentów języków C++ i Python."
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
        location: "(Remote / Part-time)",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Code Analysis & Code Review: Analyzing and debugging solutions for 50+ students per week.",
          "Algorithms & Data Structures: Explaining key topics required for the Matura exam in computer science: algorithms, array operations, and I/O file processing.",
          "OOP & Logic Foundations: Introducing beginners to classes and inheritance, along with the practical application of C++ and Python fundamentals."
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
