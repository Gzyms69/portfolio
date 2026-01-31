import { Share2, Wrench } from "lucide-react";
import { Project, CVData, GlobalConfig, Language } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "Specjalista IT z technicznym zapleczem (Python, SQL, Linux) i doświadczeniem operacyjnym w międzynarodowych korporacjach (FedEx, BBH). Posiadam praktyczne umiejętności diagnozowania błędów (Live Debugging), pracy z systemami zgłoszeniowymi (SLA) oraz automatyzacji zadań. Szukam roli w Technical Support, gdzie wykorzystam umiejętności skryptowe do usprawniania procesów.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "Jira"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Technical Support Engineer | Application Support Specialist",
    description: "IT Specialist with technical background (Python, SQL, Linux) and operational experience in international corporations (FedEx, BBH). Skilled in diagnosing errors (Live Debugging), working with ticket systems (SLA), and task automation. Seeking a Technical Support role to utilize scripting skills for process improvement.",
    email: "dawidczerwinskibiznes@gmail.com",
    heroTechStack: ["Linux", "SQL", "Python", "Bash", "Docker", "Git", "Jira"]
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
    title: "DeepSeek Folder Organizer",
    pl: {
      description: "Skrypt (JavaScript/Tampermonkey) naprawiający brak funkcjonalności folderów w aplikacji DeepSeek. Implementacja poprzez bezpośrednią manipulację DOM.",
      fullDescription: "Rozwiązanie problemu UX/UI w narzędziu codziennej pracy. Skrypt wstrzykuje brakującą funkcjonalność zarządzania folderami do interfejsu webowego DeepSeek, wykorzystując UserScripts i API przeglądarki. Demonstruje umiejętność samodzielnego naprawiania narzędzi i poprawy produktywności.",
    },
    en: {
      description: "Script (JavaScript/Tampermonkey) fixing missing folder functionality in DeepSeek app. Implemented via direct DOM manipulation.",
      fullDescription: "UX/UI fix for a daily driver tool. The script injects missing folder management functionality into the DeepSeek web interface using UserScripts and Browser APIs. Demonstrates the ability to self-diagnose tool limitations and implement productivity fixes.",
    },
    githubUrl: "https://github.com/Gzyms69/DeepSeek-Folder-Organizer",
    techStack: ["JavaScript", "Tampermonkey", "DOM Manipulation", "Automation"],
    variant: "design",
    icon: <Wrench className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "WikiGraph Lab",
    pl: {
      description: "System przetwarzania danych (ETL) z wykorzystaniem Docker i Linux. Pobieranie i czyszczenie dużych zbiorów danych (Wikipedia Dumps), diagnozowanie błędów integracji (Python/Neo4j).",
      fullDescription: "WikiGraph Lab to zaawansowany system inżynierski. Projekt demonstruje profesjonalne podejście do architektury oprogramowania, integrując wysokowydajną bazę grafową Neo4j, skalowalne API oparte na FastAPI oraz konteneryzację Docker. Skupienie na backendzie i przepływie danych.",
    },
    en: {
      description: "Data processing system (ETL) using Docker and Linux. Ingesting and cleaning large datasets (Wikipedia Dumps), diagnosing integration errors (Python/Neo4j).",
      fullDescription: "WikiGraph Lab is an advanced engineering system. The project demonstrates a professional approach to software architecture, integrating a high-performance Neo4j graph database, a scalable FastAPI-based API, and Docker containerization. Focus on backend and data flow.",
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "Docker", "Linux", "Neo4j", "ETL", "FastAPI"],
    variant: "design",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
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
          "Realizacja zadań w dynamicznym środowisku produkcyjnym pod presją czasu.",
          "Praca w międzynarodowym zespole (język angielski)."
        ],
      },
      {
        title: "IT Mentor & Technical Support",
        company: "Giganci Programowania",
        location: "Kielce / Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Przeprowadzanie Live Debuggingu i analiza błędów w kodzie w czasie rzeczywistym (Python, C++, C#).",
          "Diagnozowanie problemów ze środowiskiem programistycznym (VS Code, Unity, Git) na stacjach roboczych użytkowników.",
          "Tłumaczenie złożonych zagadnień technicznych osobom nietechnicznym (Support Level 1/2)."
        ],
      },
      {
        title: "Operations Specialist",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "09.2023 - 12.2023",
        responsibilities: [
          "Eskalowanie incydentów i raportowanie błędów systemowych do działów IT w środowisku bankowym Enterprise.",
          "Analiza danych finansowych i weryfikacja zgodności z procedurami."
        ],
      },
      {
        title: "Operations Specialist / Technical Resolution",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Zarządzanie incydentami operacyjnymi w wewnętrznym systemie zgłoszeniowym (Ticket-based workflow).",
          "Praca pod presją czasu (Operational SLA) przy odprawach celnych – priorytetyzacja zadań krytycznych.",
          "Współpraca z działami technicznymi przy rozwiązywaniu problemów z dokumentacją elektroniczną."
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
      general: ["Technical Support", "Incident Management", "SLA", "English (C1/C2)", "Problem Solving"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "Jira (Ticketing)", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"],
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
          "Executed time-sensitive tasks in a fast-paced production environment.",
          "Collaborated in an international, English-speaking team."
        ],
      },
      {
        title: "IT Mentor & Technical Support",
        company: "Giganci Programowania",
        location: "Kielce / Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Conducted Live Debugging and real-time code error analysis (Python, C++, C#).",
          "Diagnosed development environment issues (VS Code, Unity, Git) on user workstations.",
          "Translated complex technical concepts to non-technical users (Support Level 1/2)."
        ],
      },
      {
        title: "Operations Specialist",
        company: "Brown Brothers Harriman",
        location: "Kraków",
        period: "Sep 2023 - Dec 2023",
        responsibilities: [
          "Escalated incidents and reported system errors to IT departments in an Enterprise banking environment.",
          "Analyzed financial data for compliance and accuracy."
        ],
      },
      {
        title: "Operations Specialist / Technical Resolution",
        company: "FedEx Express Europe",
        location: "Kraków",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Managed operational incidents in internal ticketing system (Ticket-based workflow).",
          "Worked under time pressure (Operational SLA) on customs clearance – prioritizing critical tasks.",
          "Collaborated with technical departments to resolve electronic documentation issues."
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
      general: ["Technical Support", "Incident Management", "SLA", "English (C1/C2)", "Problem Solving"],
      tools: ["Linux (Ubuntu/Bash)", "SQL", "Docker", "Git", "Jira (Ticketing)", "VS Code", "Excel"],
      programming: ["Python (Scripting)", "Bash", "JavaScript", "SQL", "C++"],
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)", "German (Elementary)", "Russian (Elementary)"]
  }
};