import { Project, CVData, PortfolioConfig } from "@shared/types";

export const supportProjects: Project[] = [
  {
    title: "LeadFinder & Katalog Ecosystem",
    period: "11.2025 – Obecnie",
    pl: { 
      description: "**Infrastruktura & Sieć:** Administracja domeną, przekierowaniami i regułami ochrony przed botami w **Cloudflare**. Zarządzanie środowiskami w architekturze **Turborepo**. **Utrzymanie & Troubleshooting:** Utrzymanie ciągłości działania serwisów poprzez endpointy telemetryczne (health checks). Wdrażanie poprawek do zewnętrznych skryptów Open Source. Symulacja testowych środowisk transakcyjnych oparta na sesjach użytkownika. **Monitoring & QA:** Zaawansowane śledzenie ruchu sieciowego (UTM tracking). Profilowanie wydajności i zautomatyzowane debugowanie logów przy użyciu przeglądarki headless (**Puppeteer**) i środowisk LLM.", 
      fullDescription: "Infrastruktura i Architektura: Stworzenie i utrzymanie zintegrowanego ekosystemu łączącego skrypt agregujący dane (Python) z platformą front-endową (Next.js). Administracja środowiskiem produkcyjnym (Vercel, reguły Cloudflare, DNS, SSL) oraz eliminacja opóźnień typu 'Cold Start' (Cron Jobs). Troubleshooting: Modyfikacja silnika google-maps-scraper. Diagnoza błędów asynchronicznych (race conditions) oraz omijanie blokad sieciowych poprzez logikę wait-and-retry i egzekucję zapytań z poziomu przeglądarki (Playwright). Analityka Wydajnościowa: Profilowanie procesu ładowania frontendu (LCP/TBT) przy użyciu serwerów MCP i Puppeteer. Wdrożenie śledzenia Google Analytics z inteligentnymi redirectami i dynamiczną personalizacją szablonów przy zachowaniu wydajności 100/100 Lighthouse." 
    },
    en: { 
      description: "**Infrastructure & Network:** Domain administration, redirects, and bot protection rules in **Cloudflare**. Managing environments in **Turborepo** architecture. **Maintenance & Troubleshooting:** Maintaining service continuity through telemetry endpoints (health checks). Implementing patches to external Open Source scripts. Simulation of user session-based test transactional environments. **Monitoring & QA:** Advanced network traffic tracking (UTM tracking). Performance profiling and automated log debugging using a headless browser (**Puppeteer**) and LLM environments.", 
      fullDescription: "Infrastructure & Architecture: Creation and maintenance of an integrated ecosystem connecting a data-aggregating script (Python) with a front-end platform (Next.js). Production environment administration (Vercel, Cloudflare rules, DNS, SSL) and elimination of 'Cold Start' delays (Cron Jobs). Troubleshooting: Modification of the google-maps-scraper engine. Diagnosis of asynchronous errors (race conditions) and bypassing network blocks through wait-and-retry logic and browser-level query execution (Playwright). Performance Analytics: Profiling frontend load process (LCP/TBT) using MCP servers and Puppeteer. Implementation of Google Analytics tracking with intelligent redirects and dynamic template personalization while maintaining 100/100 Lighthouse performance." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Cloudflare", "Next.js", "Puppeteer", "Turborepo", "Web Analytics"],
    variant: "code",
    hideFromPortfolio: true
  },
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Praktyczne zastosowanie konteneryzacji (**Docker**) i utrzymania stabilności środowisk dla relacyjnych (**SQL**) oraz grafowych baz danych (**Neo4j**).", 
      fullDescription: "Skonteneryzowanie (Docker) autorskiego środowiska dla relacyjnych (SQL) i grafowych (Neo4j) baz danych. Administracja i monitorowanie stabilności endpointów API (FastAPI)." 
    },
    en: { 
      description: "Practical application of containerization (**Docker**) and maintaining environment stability for relational (**SQL**) and graph databases (**Neo4j**).", 
      fullDescription: "Containerization (Docker) of a custom environment for relational (SQL) and graph (Neo4j) databases. Administration and stability monitoring of API endpoints (FastAPI)." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Docker", "SQL", "Python", "FastAPI"],
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
    variant: "design",
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

export const supportConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "Specjalista IT z 1,5-rocznym komercyjnym doświadczeniem w operacjach na dużych wolumenach zgłoszeń (FedEx, 100+ ticketów dziennie, SLA 98%) oraz ponad roczną praktyką jako nauczyciel programowania (Python, C++). Posiadam znajomość systemów Linux, zapytań SQL oraz skryptowania (Bash, Python), zdobytą podczas budowy i utrzymania własnego ekosystemu webowego (Vercel, Cloudflare). Szukam roli L2 Ops / App Support, gdzie wykorzystam rygor analityczny z operacji korporacyjnych oraz znajomość kodu do naprawy środowiska, analizy logów i weryfikacji błędów.",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "IT Specialist with 1.5 years of commercial experience in high-volume operations (FedEx, 100+ tickets daily, 98% SLA) and over a year of practice as a programming teacher (Python, C++). I have knowledge of Linux systems, SQL queries, and scripting (Bash, Python) gained during the construction and maintenance of my own web ecosystem (Vercel, Cloudflare). I am looking for an L2 Ops / App Support role where I can utilize my analytical rigor from corporate operations and my knowledge of code for environment repair, log analysis, and error verification.",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
  }
};

export const supportData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "IT Mentor / Instruktor Techniczny",
        company: "Giganci Programowania",
        location: "(Zdalnie / Część etatu)",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie kursów programowania: Realizacja kompleksowych szkoleń z języków Python, C++ i C#.",
          "Live Debugging i Wsparcie Techniczne: Bieżące diagnozowanie i naprawianie błędów w kodzie uczniów oraz rozwiązywanie problemów konfiguracyjnych środowisk (VS Code, Unity).",
          "Asynchroniczna obsługa zgłoszeń (Discord): Zdalne wsparcie techniczne dla kursantów poza godzinami zajęć."
        ]
      },
      {
        title: "Pracownik Operacyjny",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Szybka adaptacja do międzynarodowego środowiska, przestrzeganie przepisów BHP i procedur operacyjnych.",
          "Swobodna komunikacja w języku angielskim, nauka obsługi maszyn produkcyjnych."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Irlandia (Zdalnie, Kraków)",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Procesowanie i weryfikacja średnio ponad 100 zgłoszeń (ticketów) dziennie w rygorze ścisłych terminów (SLA), osiągając skuteczność operacyjną na poziomie 98%.",
          "Triage i Eskalacje: Samodzielne diagnozowanie problemów z dokumentacją, kontakt z klientem w sytuacjach krytycznych oraz przekazywanie nietypowych incydentów do zespołów L2/L3."
        ]
      }
    ],
    education: [
      { school: "Politechnika Krakowska", degree: "Kierunek: Matematyka Stosowana", years: "2020 – 2022 (Studia nieukończone)" },
      { school: "Akademia Górniczo-Hutnicza (AGH)", degree: "Kierunek: Elektronika i Telekomunikacja", years: "2019 – 2020 (Studia nieukończone)" }
    ],
    skills: {
      general: ["Linux (Ubuntu CLI)", "Enterprise Ticketing Systems (SLA)", "Incident Management", "Problem Solving"],
      tools: ["Python (Scripting)", "Google Workspace API", "MS Office", "Git (CI/CD GitHub Actions)", "VS Code", "Sieci (TCP/IP / DNS)"],
      programming: ["Python", "C++", "Bash Automation", "SQL"]
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany Professional)"]
  },
  en: {
    experiences: [
      {
        title: "IT Mentor / Technical Instructor",
        company: "Giganci Programowania",
        location: "(Remote / Part-time)",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Course Instruction: Delivered comprehensive training in Python, C++, and C#. Responsible for student progress.",
          "Live Debugging & Technical Support: Real-time diagnosis/fixing of code errors and environment configuration (VS Code, Unity).",
          "Async Ticket Support (Discord): Remote technical support for students outside class hours."
        ]
      },
      {
        title: "Operational Staff",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Fast adaptation to international environments, compliance with health and safety regulations and operational procedures.",
          "Fluent communication in English, learning to operate production machinery."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Ireland (Remote, Krakow)",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Processing and verifying an average of over 100 requests (tickets) per day under strict deadlines (SLA), achieving an operational efficiency of 98%.",
          "Triage & Escalations: Independent diagnosis of documentation issues, client contact in critical situations, and precise routing of non-standard incidents to L2/L3 teams."
        ]
      }
    ],
    education: [
      { school: "Cracow University of Technology", degree: "Field: Applied Mathematics", years: "2020 – 2022 (Incomplete)" },
      { school: "AGH University of Science and Technology", degree: "Field: Electronics and Telecommunications", years: "2019 – 2020 (Incomplete)" }
    ],
    skills: {
      general: ["Linux (Ubuntu CLI)", "Enterprise Ticketing Systems (SLA)", "Incident Management", "Problem Solving"],
      tools: ["Python (Scripting)", "Google Workspace API", "MS Office", "Git (CI/CD GitHub Actions)", "VS Code", "Networking (TCP/IP / DNS)"],
      programming: ["Python", "C++", "Bash Automation", "SQL"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)"]
  }
};
