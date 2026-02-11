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
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "Excel"],
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
    imageUrl: "/portfolio/portfolio-website.png",
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
  }
];

const supportConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support | Full Stack Developer",
    description: "Programista i Specjalista Operacyjny łączący inżynierię oprogramowania z infrastrukturą IT. Łączę 10+ lat styczności z C++ (zaplecze akademickie) z praktycznym doświadczeniem operacyjnym w FedEx oraz rolą Mentora IT w Giganci Programowania. Koncentruję się na architekturze offline-first, automatyzacji procesów biznesowych i optymalizacji przetwarzania danych.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support | Full Stack Developer",
    description: "Developer and Operations Specialist bridging the gap between software engineering and IT infrastructure. Combining 10+ years of C++ exposure (academic background) with practical operational experience at FedEx and IT Mentorship experience at Giganci Programowania. Focused on building offline-first architectures, automating business workflows, and optimizing data pipelines.",
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
    techStack: ["Python", "Next.js", "React", "Node.js", "Playwright", "Excel"],
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
    imageUrl: "/portfolio/portfolio-website.png",
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    hideFromResume: true
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