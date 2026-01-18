import { Zap, Share2 } from "lucide-react";
import { Project, CVData, GlobalConfig, Language } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "",
    description: "Junior Full-Stack Developer z doświadczeniem w edukacji technicznej. Łączę praktyczną znajomość Pythona (FastAPI), React i TypeScript z analitycznym myśleniem oraz biegłością w systemach Linux (Ubuntu/Bash). Poszukuję roli, w której będę mógł rozwijać swoje umiejętności programistyczne i wspierać zespół techniczny.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "SQL", "Git", "Linux", "Bash"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "",
    description: "Junior Full-Stack Developer with a background in technical education. I combine practical expertise in Python (FastAPI), React, and TypeScript with strong analytical skills and Linux (Ubuntu/Bash) proficiency. Seeking a role to leverage my coding skills and technical aptitude in a professional environment.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "SQL", "Git", "Linux", "Bash"]
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
      description: "Platforma badawcza do analizy semantycznej Wikipedii (Index Jaccarda). Stack: FastAPI (Python), Next.js, Neo4j, Docker.",
      fullDescription: "WikiGraph Lab to zaawansowany system inżynierski zaprojektowany zarówno dla badaczy danych, jak i entuzjastów wiedzy. Projekt demonstruje profesjonalne podejście do architektury oprogramowania, integrując wysokowydajną bazę grafową Neo4j, skalowalne API oparte na FastAPI oraz nowoczesny frontend w Next.js. Silnik wykorzystuje algorytm Indeksu Jaccarda do precyzyjnego filtrowania szumu semantycznego i identyfikacji istotnych połączeń międzyjęzykowych, przekształcając surowe zrzuty Wikipedii w uporządkowany graf wiedzy.",
    },
    en: {
      description: "Research platform for semantic Wikipedia analysis (Jaccard Index). Stack: FastAPI (Python), Next.js, Neo4j, Docker.",
      fullDescription: "WikiGraph Lab is an advanced engineering system designed for both data researchers and knowledge enthusiasts. The project demonstrates a professional approach to software architecture, integrating a high-performance Neo4j graph database, a scalable FastAPI-based API, and a modern Next.js frontend. The engine employs the Jaccard Index algorithm to precisely filter semantic noise and identify meaningful cross-lingual connections, transforming raw Wikipedia dumps into a structured knowledge graph.",
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "FastAPI", "Neo4j", "Next.js", "TypeScript", "Docker", "Graph Data Science"],
    variant: "design",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Portfolio Website",
    pl: {
      description: "Interaktywny interfejs terminalowy w React 18 i Vite. Zaawansowane animacje (Framer Motion) i responsywny design.",
      fullDescription: "Wysoko wydajna platforma portfolio wykorzystująca React 18 i Vite. Projekt skupia się na dostarczaniu unikalnych wrażeń wizualnych poprzez płynne przejścia, responsywny design i autorską estetykę terminala. Zaimplementowano zaawansowane animacje oparte na fizyce sprężyn oraz zoptymalizowane renderowanie 3D.",
    },
    en: {
      description: "Interactive terminal interface built with React 18 and Vite. Advanced animations (Framer Motion) and responsive design.",
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
        title: "Pracownik Projektowy",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Obsługa oprogramowania logistycznego i realizacja zadań w dynamicznym środowisku produkcyjnym.",
          "Praca w międzynarodowym zespole (język angielski)."
        ],
      },
      {
        title: "Nauczyciel Programowania (C++, Python, C#, Unity)",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Realizacja pełnego programu nauki programowania od podstaw do poziomu matury: algorytmika, struktury danych, zmienne, SQL oraz Python/C++.",
          "Przeprowadzanie regularnych Code Review i sesji Live Debugging (VS Code, Unity), ucząc dobrych praktyk (SOLID, Clean Code) i optymalizacji kodu.",
          "Zarządzanie zdalnym nauczaniem via Discord i tworzenie środowiska projektowego z wykorzystaniem Git i GitHub.",
          "Tłumaczenie złożonych zagadnień (OOP, wzorce projektowe) na praktyczne zadania programistyczne."
        ],
      },
      {
        title: "Specjalista ds. Operacji",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "09.2023 - 12.2023",
        responsibilities: [
          "Obsługa płatności funduszy i analiza danych finansowych.",
          "Praca z systemami bankowymi i raportowanie błędów operacyjnych."
        ],
      },
      {
        title: "Specjalista ds. Odpraw Celnych",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Rozwiązywanie problemów z odprawami celnymi i optymalizacja przepływu pracy.",
          "Szkolenie pracowników i wsparcie techniczne dla klientów."
        ],
      }
    ],
    education: [
      {
        school: "Politechnika Krakowska",
        degree: "Studia Inżynierskie",
        field: "Matematyka Stosowana",
        years: "2020-2022",
      },
      {
        school: "Akademia Górniczo-Hutnicza (AGH)",
        degree: "Studia Inżynierskie",
        field: "Elektronika i Telekomunikacja",
        years: "2019-2020",
      },
    ],
    skills: {
      general: ["Rozwiązywanie problemów", "Analityczne myślenie", "Komunikacja techniczna", "Obsługa klienta"],
      tools: ["Git", "Docker", "VS Code", "Jira/Trello", "Linux (Ubuntu/Bash)", "Pakiet Office"],
      programming: ["Python (FastAPI)", "React", "TypeScript", "JavaScript", "SQL", "C++", "C#"],
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany)", "Niemiecki (Podstawowy)", "Rosyjski (Podstawowy)"]
  },
  en: {
    experiences: [
      {
        title: "Project Worker",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Operated logistics software and executed time-sensitive tasks in production environment.",
          "Collaborated in an international, English-speaking team."
        ],
      },
      {
        title: "Programming Teacher (C++, Python, C#, Unity)",
        company: "Giganci Programowania",
        location: "Kielce / Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Delivered comprehensive programming curriculum from basics to Matura level: algorithms, data structures, variables, SQL, and Python/C++.",
          "Conducted weekly Code Reviews and Live Debugging sessions (VS Code, Unity), mentoring students on SOLID principles, clean code, and performance optimization.",
          "Managed remote learning environment via Discord, introducing version control workflows with Git and GitHub."
        ],
      },
      {
        title: "Operations Specialist",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "Sep 2023 - Dec 2023",
        responsibilities: [
          "Managed fund payments and analyzed financial data for compliance.",
          "Operated banking systems and reported operational discrepancies."
        ],
      },
      {
        title: "Clearance Broker",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Troubleshooted clearance bottlenecks and optimized workflows.",
          "Trained team members and provided technical guidance to customers."
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
      general: ["Technical Problem Solving", "Analytical Thinking", "Technical Communication", "Client Support"],
      tools: ["Git", "Docker", "VS Code", "Jira/Trello", "Linux (Ubuntu/Bash)", "MS Office"],
      programming: ["Python (FastAPI)", "React", "TypeScript", "JavaScript", "SQL", "C++", "C#"],
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)", "German (Elementary)", "Russian (Elementary)"]
  }
};