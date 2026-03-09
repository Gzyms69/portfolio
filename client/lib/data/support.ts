import { Project, CVData, PortfolioConfig } from "@shared/types";

export const supportProjects: Project[] = [
  {
    title: "LeadFinder & Katalog Ecosystem",
    pl: { 
      description: "Autorski ekosystem webowy zarządzany w architekturze monorepo (Turborepo). Zarządzanie Infrastrukturą: Administracja domeną i zabezpieczenie formularzy przez Cloudflare. Konfiguracja deploymentów i przekierowań dla 3 niezależnych projektów hostowanych na Vercel (m.in. katalog.czerwinskidawid.pl). Utrzymanie i Monitoring: Pełne śledzenie ruchu i interakcji (Google Analytics). Optymalizacja darmowego planu środowiska Vercel poprzez dedykowany endpoint do obsługi automatycznych zadań (Cron Jobs). Troubleshooting: Testowanie wydajności i zaawansowane debugowanie środowiska przy użyciu Puppeteera oraz serwerów MCP zintegrowanych z modelami LLM (Gemini).", 
      fullDescription: "Autorski ekosystem webowy zarządzany w architekturze monorepo (Turborepo).\n\nZarządzanie Infrastrukturą: Administracja domeną i zabezpieczenie formularzy przez Cloudflare. Konfiguracja deploymentów i przekierowań dla 3 niezależnych projektów hostowanych na Vercel (m.in. katalog.czerwinskidawid.pl).\n\nUtrzymanie i Monitoring: Pełne śledzenie ruchu i interakcji (Google Analytics). Optymalizacja darmowego planu środowiska Vercel poprzez dedykowany endpoint do obsługi automatycznych zadań (Cron Jobs).\n\nTroubleshooting: Testowanie wydajności i zaawansowane debugowanie środowiska przy użyciu Puppeteera oraz serwerów MCP zintegrowanych z modelami LLM (Gemini)." 
    },
    en: { 
      description: "Custom web ecosystem managed in a monorepo architecture (Turborepo). Infrastructure Management: Domain administration and form security via Cloudflare. Configuration of deployments and redirects for 3 independent projects hosted on Vercel (incl. katalog.czerwinskidawid.pl). Maintenance & Monitoring: Full traffic and interaction tracking (Google Analytics). Optimization of free Vercel tier via a dedicated endpoint for automated tasks (Cron Jobs). Troubleshooting: Performance testing and advanced environment debugging using Puppeteer and MCP servers integrated with LLMs (Gemini).", 
      fullDescription: "Custom web ecosystem managed in a monorepo architecture (Turborepo).\n\nInfrastructure Management: Domain administration and form security via Cloudflare. Configuration of deployments and redirects for 3 independent projects hosted on Vercel (incl. katalog.czerwinskidawid.pl).\n\nMaintenance & Monitoring: Full traffic and interaction tracking (Google Analytics). Optimization of free Vercel tier via a dedicated endpoint for automated tasks (Cron Jobs).\n\nTroubleshooting: Performance testing and advanced environment debugging using Puppeteer and MCP servers integrated with LLMs (Gemini)." 
    },
    githubUrl: "https://github.com/Gzyms69/LeadFinder",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Cloudflare", "Vercel", "Node.js", "Puppeteer", "Google Analytics"],
    variant: "code",
  },
  {
    title: "WikiGraph Lab",
    pl: { 
      description: "Skonteneryzowanie (Docker) autorskiego środowiska dla relacyjnych (SQL) i grafowych (Neo4j) baz danych. Administracja i monitorowanie stabilności endpointów API (FastAPI).", 
      fullDescription: "Skonteneryzowanie (Docker) autorskiego środowiska dla relacyjnych (SQL) i grafowych (Neo4j) baz danych. Administracja i monitorowanie stabilności endpointów API (FastAPI)." 
    },
    en: { 
      description: "Containerization (Docker) of a custom environment for relational (SQL) and graph (Neo4j) databases. Administration and stability monitoring of API endpoints (FastAPI).", 
      fullDescription: "Containerization (Docker) of a custom environment for relational (SQL) and graph (Neo4j) databases. Administration and stability monitoring of API endpoints (FastAPI)." 
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Docker", "Neo4j", "SQL", "Python", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&q=80&fm=webp",
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

export const supportConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "Inżynier łączący twarde kompetencje techniczne (Linux, SQL, Bash, Python) z rygorem operacyjnym środowisk korporacyjnych (FedEx). Posiadam praktyczne doświadczenie w zarządzaniu incydentami (Ticketing / SLA) oraz samodzielnym utrzymaniu i optymalizacji infrastruktury webowej (Vercel, Cloudflare, Cron Jobs). Biegły w automatyzacji procesów, parsowaniu logów oraz szybkiej diagnozie środowisk. Szukam roli, w której wykorzystam swój zmysł analityczny do skutecznego rozwiązywania złożonych problemów (Troubleshooting) i stabilizacji systemów. W wolnym czasie projektuję własne aplikacje Full-Stack (Next.js, Python), ponieważ głębokie zrozumienie kodu i architektury pozwala mi skuteczniej namierzać błędy i wspierać zespoły R&D na drugiej i trzeciej linii wsparcia.",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "C++"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | L2 Ops Specialist",
    description: "Engineer combining hard technical skills (Linux, SQL, Bash, Python) with the operational rigor of corporate environments (FedEx). I have practical experience in incident management (Ticketing / SLA) and independent maintenance and optimization of web infrastructure (Vercel, Cloudflare, Cron Jobs). Proficient in process automation, log parsing, and rapid environment diagnosis. Seeking a role where I can use my analytical mind for effective complex problem solving (Troubleshooting) and system stabilization. In my free time, I design my own Full-Stack applications (Next.js, Python), because a deep understanding of code and architecture allows me to more effectively track down bugs and support R&D teams on the second and third lines of support.",
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
        location: "Kielce / Zdalnie",
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
          "Triage i Eskalacje: Samodzielne diagnozowanie problemów z dokumentacją, kontakt z klientem w sytuacjach krytycznych oraz precyzyjny routing nietrywialnych incydentów do zespołów L2/L3."
        ]
      }
    ],
    education: [
      { school: "Politechnika Krakowska", degree: "Kierunek: Matematyka Stosowana", years: "2020-2022" },
      { school: "Akademia Górniczo-Hutnicza (AGH)", degree: "Kierunek: Elektronika i Telekomunikacja", years: "2019-2020" }
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
        location: "Kielce / Remote",
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
          "Triage & Escalations: Independent diagnosis of documentation issues, client contact in critical situations, and precise routing of non-trivial incidents to L2/L3 teams."
        ]
      }
    ],
    education: [
      { school: "Cracow University of Technology", degree: "Field: Applied Mathematics", years: "2020-2022" },
      { school: "AGH University of Science and Technology", degree: "Field: Electronics and Telecommunications", years: "2019-2020" }
    ],
    skills: {
      general: ["Linux (Ubuntu CLI)", "Enterprise Ticketing Systems (SLA)", "Incident Management", "Problem Solving"],
      tools: ["Python (Scripting)", "Google Workspace API", "MS Office", "Git (CI/CD GitHub Actions)", "VS Code", "Networking (TCP/IP / DNS)"],
      programming: ["Python", "C++", "Bash Automation", "SQL"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)"]
  }
};
