import { BookOpen, Zap } from "lucide-react";
import { Project, CVData, GlobalConfig } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Inżynier oprogramowania. Tworzę zaawansowane aplikacje internetowe i narzędzia automatyzujące pracę.",
    description: "Zbiór wybranych realizacji – od systemów zarządzania po niskopoziomowe narzędzia systemowe. Stawiam na wydajność i czystość architektury, wykorzystując technologie takie jak Python, React oraz TypeScript.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Software Engineer. Developing advanced web applications and automation tools.",
    description: "A collection of selected projects – from management systems to low-level system utilities. I focus on performance and clean architecture, utilizing technologies such as Python, React, and TypeScript.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "#",
  },
  contact: {
    formspreeId: "mnnjpjez", // Your Formspree ID (example)
  }
};

export const projects: Project[] = [
  {
    title: "BookShop Library",
    pl: {
      description: "Zaawansowany system klasy Enterprise do kompleksowego zarządzania zasobami bibliotecznymi.",
      fullDescription: "Skalowalna platforma integrująca funkcje e-commerce oraz system zarządzania stanami magazynowymi. Projekt demonstruje nowoczesne podejście do architektury mikroserwisowej, oferując analitykę danych w czasie rzeczywistym. Kluczowe funkcjonalności obejmują autorski panel administracyjny, pełną dokumentację OpenAPI oraz ścisłe typowanie danych zapewniające stabilność operacyjną.",
    },
    en: {
      description: "Advanced Enterprise-grade system for comprehensive library resource management.",
      fullDescription: "A scalable platform integrating e-commerce functionalities with a robust inventory management system. The project demonstrates a modern approach to software architecture, offering real-time data analytics. Key features include a custom admin dashboard, full OpenAPI documentation, and end-to-end type safety for operational stability.",
    },
    githubUrl: "https://github.com/Gzyms69/bookshop-library",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "MS SQL Server", "Docker", "Tailwind CSS"],
    variant: "design",
    icon: <BookOpen className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Rust Polyglot Creator",
    pl: {
      description: "Niskopoziomowe narzędzie systemowe do manipulacji strukturami plików binarnych i generowania plików poliglota.",
      fullDescription: "Wydajne narzędzie CLI opracowane w języku Rust, umożliwiające tworzenie plików poprawnie interpretowanych przez wiele formatów jednocześnie (PNG+ZIP, PNG+WAV). Projekt wymagał precyzyjnej manipulacji bajtami i dogłębnej analizy specyfikacji binarnych. Architektura zapewnia bezpieczeństwo pamięci oraz wysoką wydajność przetwarzania.",
    },
    en: {
      description: "Low-level system utility for binary file manipulation and polyglot file generation.",
      fullDescription: "A high-performance CLI tool developed in Rust, enabling the creation of files simultaneously valid in multiple formats (PNG+ZIP, PNG+WAV). The project involved precise byte manipulation and in-depth analysis of binary specifications. The architecture ensures memory safety and superior processing efficiency.",
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

export const cvData: CVData = {
  experiences: [
    {
      title: "Przerwa w karierze (Career Break)",
      company: "Randstad i okolice, Holandia",
      location: "Netherlands",
      period: "2025.02 - 2025.10",
      responsibilities: [
        "Przeprowadzka do Holandii i praca za pośrednictwem agencji w sektorach produkcji oraz logistyki",
        "Relocation to the Netherlands and working via job agencies in production and logistics",
      ],
    },
    {
      title: "Instruktor Programowania",
      company: "Giganci Programowania",
      location: "Kielce / Mińsk Mazowiecki",
      period: "2024.01 - 2025.02",
      responsibilities: [
        "Przygotowywanie uczniów szkół średnich do egzaminu maturalnego z informatyki",
        "Prowadzenie zajęć z programowania gier (Unity) oraz języków C++, C# i Python (poziom podstawowy i zaawansowany)",
        "Mentoring i wsparcie merytoryczne dla uczniów poprzez platformę Discord",
      ],
    },
    {
      title: "Specjalista ds. Odpraw Celnych (Clearance Broker)",
      company: "FedEx Express Europe",
      location: "Kraków",
      period: "2022.03 - 2023.07",
      responsibilities: [
        "Gromadzenie i weryfikacja dokumentacji do celów odprawy celnej (Collecting paperwork for clearance purposes)",
        "Profesjonalna obsługa klienta w zakresie procedur celnych",
        "Zarządzanie dokumentacją celną, fakturami i listami przewozowymi",
        "Monitorowanie statusu przesyłek i raportowanie postępów",
      ],
    },
  ],
  education: [
    {
      school: "Akademia Górniczo-Hutnicza (AGH) w Krakowie",
      degree: "Inżynier",
      field: "Elektronika i Telekomunikacja",
      years: "2019-2020",
    },
    {
      school: "Politechnika Krakowska",
      degree: "Inżynier",
      field: "Matematyka Stosowana",
      years: "2020-2022",
    },
  ],
  skills: {
    general: ["Marketing", "Analiza danych", "Web Design"],
    tools: ["Pakiet Microsoft Office", "Narzędzia Adobe", "Język angielski (poziom C1/C2)"],
    programming: ["C++", "Python", "C", "JavaScript"],
  }
};
