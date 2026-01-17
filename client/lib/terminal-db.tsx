import { Zap, Share2 } from "lucide-react";
import { Project, CVData, GlobalConfig, Language } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer & pasjonat IT",
    description: "Programista i pasjonat IT łączący umiejętności techniczne z doświadczeniem w edukacji i logistyce. Jako były instruktor programowania (Python, C++, C#) posiadam solidne fundamenty w algorytmice i debugowaniu. Wyróżniam się analitycznym podejściem do rozwiązywania problemów, zdobytym m.in. w FedEx i BBH. Obecnie poszukuję roli Junior Developera lub Wsparcia Technicznego, gdzie mogę wykorzystać moją wiedzę z zakresu Reacta, Pythona i systemów IT.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "SQL", "Git", "Hardware Support"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Junior Software Engineer & IT Support Specialist",
    description: "Aspiring Full-Stack Developer and IT Support Specialist transitioning from a background in technical education. Former Programming Instructor (Python, C++, C#) with a knack for breaking down complex technical concepts. I bring strong troubleshooting skills honed at FedEx and BBH, and a passion for building scalable web tools. Seeking a role where I can apply my analytical mindset and expertise in React, Python, and system diagnostics.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "SQL", "Git", "Hardware Support"]
  },
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "https://www.linkedin.com/in/david-czerwinski-baa6b5149",
  },
  contact: {
    formspreeId: "mnnjpjez", 
  }
};

export const projects: Project[] = [
  {
    title: "WikiGraph Lab",
    pl: {
      description: "Profesjonalna platforma badawcza wykorzystująca Index Jaccarda do analizy semantycznej Wikipedii. Trójwarstwowa architektura (Neo4j, FastAPI, Next.js) łączy wydajność z immersyjną wizualizacją.",
      fullDescription: "WikiGraph Lab to zaawansowany system inżynierski zaprojektowany zarówno dla badaczy danych, jak i entuzjastów wiedzy. Projekt demonstruje profesjonalne podejście do architektury oprogramowania, integrując wysokowydajną bazę grafową Neo4j, skalowalne API oparte na FastAPI oraz nowoczesny frontend w Next.js. Zamiast prostych metryk, silnik wykorzystuje algorytm Indeksu Jaccarda do precyzyjnego filtrowania szumu semantycznego i identyfikacji istotnych połączeń międzyjęzykowych, przekształcając surowe zrzuty Wikipedii w uporządkowany graf wiedzy.",
    },
    en: {
      description: "Research-grade platform leveraging Jaccard Index for semantic analysis of Wikipedia. Three-tier architecture (Neo4j, FastAPI, Next.js) combines performance with immersive visualization.",
      fullDescription: "WikiGraph Lab is an advanced engineering system designed for both data researchers and knowledge enthusiasts. The project demonstrates a professional approach to software architecture, integrating a high-performance Neo4j graph database, a scalable FastAPI-based API, and a modern Next.js frontend. Moving beyond basic metrics, the engine employs the Jaccard Index algorithm to precisely filter semantic noise and identify meaningful cross-lingual connections, transforming raw Wikipedia dumps into a structured knowledge graph.",
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "FastAPI", "Neo4j", "Next.js", "TypeScript", "Docker", "Graph Data Science"],
    variant: "design",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Rust Polyglot Creator",
    pl: {
      description: "Cyfrowa alchemia. Twórz pliki-kameleony, które są jednocześnie poprawnymi obrazami PNG i działającymi archiwami ZIP.",
      fullDescription: "Eksploruj dziwne zakamarki formatów binarnych. To narzędzie CLI w języku Rust pozwala tworzyć pliki 'poligloci'—pojedyncze binaria, które są poprawne w wielu formatach jednocześnie. Ukryj archiwum ZIP w zdjęciu z wakacji lub zaszyj plik WAV w dokumencie. To głębokie zanurzenie w manipulację bajtami i specyfikacje struktur plików.",
    },
    en: {
      description: "File alchemy in practice. Create 'chameleon' files that are valid PNG images and functioning ZIP archives at the same time.",
      fullDescription: "Explore the weird edges of binary formats. This Rust-based CLI tool lets you craft 'polyglot' files—single binaries that are valid in multiple formats simultaneously. Hide a ZIP archive inside a vacation photo, or embed a WAV file in a document. It's a deep dive into byte manipulation and file structure specifications.",
    },
    githubUrl: "https://github.com/Gzyms69/rust-polyglot",
    techStack: ["Rust", "CLI", "Systems Programming", "Binary Manipulation"],
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
  },
  {
    title: "Portfolio Website",
    pl: {
      description: "Interaktywny interfejs terminalowy zbudowany w oparciu o React, Framer Motion i nowoczesne standardy UX.",
      fullDescription: "Wysoko wydajna platforma portfolio wykorzystująca React 18 i Vite. Projekt skupia się na dostarczaniu unikalnych wrażeń wizualnych poprzez płynne przejścia, responsywny design i autorską estetykę terminala. Zaimplementowano zaawansowane animacje oparte na fizyce sprężyn oraz zoptymalizowane renderowanie 3D.",
    },
    en: {
      description: "Interactive terminal interface built with React, Framer Motion, and modern UX standards.",
      fullDescription: "A high-performance portfolio platform utilizing React 18 and Vite. The project focuses on delivering unique visual experiences through seamless transitions, responsive design, and custom terminal aesthetics. Implemented advanced spring-physics animations and optimized 3D rendering.",
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "Express", "Node.js", "Radix UI"],
    variant: "design",
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  }
];

export const cvData: Record<Language, CVData> = {
  pl: {
    experiences: [
      {
        title: "Pracownik Projektowy (Sektor Logistyki i Produkcji)",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Praca z wykorzystaniem wewnętrznego oprogramowania do zarządzania logistyką",
          "Realizacja zadań pod presją czasu w dynamicznym środowisku produkcyjnym",
          "Efektywna komunikacja i współpraca w międzynarodowym zespole (język angielski)"
        ],
      },
      {
        title: "Nauczyciel Programowania (C++, Python, C#, Unity)",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Prowadzenie zaawansowanych kursów z programowania obiektowego i tworzenia gier",
          "Debugowanie i naprawa kodu w projektach uczniowskich (VS Code, Unity Editor)",
          "Zarządzanie społecznością uczniów i wsparcie techniczne poprzez Discord",
          "Tłumaczenie skomplikowanych zagadnień (algorytmy, struktury danych) na język zrozumiały dla początkujących"
        ],
      },
      {
        title: "Specjalista ds. Operacji (Operations Specialist)",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "09.2023 - 12.2023",
        responsibilities: [
          "Obsługa płatności funduszy inwestycyjnych i działań korporacyjnych",
          "Analiza danych finansowych i weryfikacja zgodności z procedurami",
          "Praca z systemami bankowymi i raportowanie błędów operacyjnych"
        ],
      },
      {
        title: "Specjalista ds. Odpraw Celnych (Clearance Broker)",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Rozwiązywanie problemów z dokumentacją celną i zatrzymanymi przesyłkami",
          "Optymalizacja przepływu pracy w systemach wewnętrznych FedEx",
          "Szkolenie nowych pracowników z obsługi oprogramowania celnego",
          "Bezpośredni kontakt z klientem w sprawach technicznych i proceduralnych"
        ],
      },
      {
        title: "Serwisant GSM / Sprzedawca",
        company: "Atelkom & Puls GSM",
        location: "Kielce / Kraków",
        period: "2018 - 2022 (Różne okresy)",
        responsibilities: [
          "Diagnoza i naprawa usterek sprzętowych (smartfony, laptopy)",
          "Instalacja i konfiguracja oprogramowania systemowego",
          "Doradztwo techniczne dla klientów indywidualnych"
        ],
      }
    ],
    education: [
      {
        school: "Politechnika Krakowska",
        degree: "Studia Inżynierskie (Absolutorium)",
        field: "Matematyka Stosowana",
        years: "2020-2022",
      },
      {
        school: "Akademia Górniczo-Hutnicza (AGH)",
        degree: "Studia Inżynierskie (Absolutorium)",
        field: "Elektronika i Telekomunikacja",
        years: "2019-2020",
      },
    ],
    skills: {
      general: ["Rozwiązywanie problemów", "Analityczne myślenie", "Obsługa klienta IT", "Szkolenia techniczne"],
      tools: ["Git", "Docker", "VS Code", "Jira/Trello", "Linux (Bash)", "Pakiet Office"],
      programming: ["Python (FastAPI)", "React", "TypeScript", "JavaScript", "SQL", "C++", "C#"],
    }
  },
  en: {
    experiences: [
      {
        title: "Project Worker (Logistics & Production)",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Operated internal logistics management software for production workflows",
          "Executed time-sensitive tasks in a fast-paced environment",
          "Collaborated effectively within a diverse, international team (English working language)"
        ],
      },
      {
        title: "Programming Teacher (C++, Python, C#, Unity)",
        company: "Giganci Programowania",
        location: "Kielce / Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Delivered advanced courses in OOP and Game Development to HS students",
          "Diagnosed and debugged code issues in real-time (VS Code, Unity)",
          "Provided technical support and mentorship via Discord community",
          "Translated complex technical concepts into accessible, actionable knowledge"
        ],
      },
      {
        title: "Operations Specialist",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "Sep 2023 - Dec 2023",
        responsibilities: [
          "Managed investment fund payments and corporate actions",
          "Analyzed financial data for compliance and accuracy",
          "Operated banking systems and reported operational discrepancies"
        ],
      },
      {
        title: "Clearance Broker",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Troubleshooted clearance bottlenecks and documentation errors",
          "Optimized internal workflows using digital tools",
          "Trained new team members on proprietary customs software",
          "Provided technical guidance to customers regarding customs procedures"
        ],
      },
      {
        title: "GSM Technician / Sales Assistant",
        company: "Atelkom & Puls GSM",
        location: "Kielce / Kraków",
        period: "2018 - 2022 (Various)",
        responsibilities: [
          "Diagnosed and repaired hardware/software issues (Mobile/PC)",
          "Installed and configured operating systems and applications",
          "Provided technical advice and solutions to retail customers"
        ],
      }
    ],
    education: [
      {
        school: "Cracow University of Technology",
        degree: "Engineering Coursework",
        field: "Applied Mathematics",
        years: "2020-2022",
      },
      {
        school: "AGH University of Science and Technology",
        degree: "Engineering Coursework",
        field: "Electronics and Telecommunications",
        years: "2019-2020",
      },
    ],
    skills: {
      general: ["Technical Problem Solving", "Analytical Thinking", "IT Customer Support", "Technical Training"],
      tools: ["Git", "Docker", "VS Code", "Jira/Trello", "Linux (Bash)", "MS Office"],
      programming: ["Python (FastAPI)", "React", "TypeScript", "JavaScript", "SQL", "C++", "C#"],
    }
  }
};