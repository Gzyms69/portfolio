import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const devProjects: Project[] = [
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
    // icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />
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
    variant: "code",
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

export const devConfig: Record<string, PortfolioConfig> = {
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
