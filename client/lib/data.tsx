import { BookOpen, Zap, Github, Linkedin, Terminal } from "lucide-react";

export type Language = 'pl' | 'en';

export const portfolioConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Full-stack developer budujący aplikacje internetowe i narzędzia automatyzacji.",
    description: "To portfolio prezentuje moje projekty, od systemu zarządzania biblioteką po rozszerzenia VS Code. Lubię pracować z Pythonem, Reactem i TypeScriptem, aby tworzyć funkcjonalne aplikacje.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Full-stack developer building web applications and automation tools.",
    description: "This portfolio showcases my projects, from a library management system to VS Code extensions. I enjoy working with Python, React, and TypeScript to create functional applications.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "#",
  }
};

export const projects = [
  {
    title: "BookShop Library",
    pl: {
      description: "System zarządzania biblioteką (Full-stack) z Python FastAPI, React TypeScript i MS SQL Server w Dockerze",
      fullDescription: "Kompleksowy projekt portfolio demonstrujący nowoczesne tworzenie stron internetowych. Implementuje hybrydowy system księgarni/biblioteki z zarządzaniem zapasami i analityką w czasie rzeczywistym. Funkcje obejmują: śledzenie zapasów, obsługę wielu typów przedmiotów, panel administratora CRUD, API REST z dokumentacją OpenAPI i type-safe development.",
    },
    en: {
      description: "Full-stack library management system with Python FastAPI, React TypeScript, and MS SQL Server in Docker",
      fullDescription: "A comprehensive full-stack portfolio project demonstrating modern web development with Python FastAPI, React TypeScript, and MS SQL Server in a Dockerized environment. Features include: real-time inventory tracking, multi-type item support (books, movies, board games, magazines), admin dashboard with full CRUD operations, and REST API with automatic OpenAPI documentation.",
    },
    githubUrl: "https://github.com/Gzyms69/bookshop-library",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "MS SQL Server", "Docker", "Tailwind CSS"],
    variant: "design" as const,
    icon: <BookOpen className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Rust Polyglot Creator",
    pl: {
      description: "Niezależne od pamięci narzędzie CLI do generowania plików poprawnych w wielu formatach (PNG+ZIP, PNG+WAV)",
      fullDescription: "Zaawansowane narzędzie wiersza poleceń opracowane w języku Rust do generowania 'plików poliglota'. Projekt demonstruje manipulację plikami na poziomie bitów i głębokie zrozumienie struktur binarnych. Funkcje: tworzenie poliglota PNG+ZIP i PNG+WAV, silniki walidacji, różne strategie osadzania danych oraz modułowa architektura bezpieczna pod kątem pamięci.",
    },
    en: {
      description: "Memory-safe CLI tool for generating files valid in multiple formats (PNG+ZIP, PNG+WAV)",
      fullDescription: "A sophisticated command-line tool developed in Rust for generating 'polyglot files'—single files that are simultaneously valid in multiple file formats. This project demonstrates advanced bit-level file manipulation and deep understanding of binary structures. Features include: seamless creation of PNG+ZIP and PNG+WAV polyglots, robust extraction and validation engines, and a highly modular architecture.",
    },
    githubUrl: "https://github.com/Gzyms69/rust-polyglot",
    techStack: ["Rust", "CLI", "Systems Programming", "Binary Manipulation"],
    variant: "design" as const,
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg"
  },
  {
    title: "Portfolio Website",
    pl: {
      description: "Nowoczesne portfolio prezentujące projekty z designem glassmorphism i płynnymi animacjami",
      fullDescription: "Profesjonalna strona portfolio zbudowana na React 18, TypeScript i Vite. Zawiera interaktywne karty projektów, tryb ciemny ze stylizacją glassmorphism, płynne animacje i responsywny design. Wykorzystuje Tailwind CSS 3, Radix UI i framer-motion dla zapewnienia najwyższej jakości doświadczeń użytkownika.",
    },
    en: {
      description: "Modern, professional portfolio showcasing projects with glassmorphism design, smooth animations, and theme switching",
      fullDescription: "A modern, professional portfolio website built on React 18, TypeScript, and Vite for optimal performance. Features include: interactive project showcase, smooth scroll navigation, type-safe full-stack development, Tailwind CSS 3 styling system, Radix UI component library, and seamless theme persistence.",
    },
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "Express", "Node.js", "Radix UI"],
    variant: "design" as const,
        icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />,
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
      }
    ];
    
    export const cvData = {
      experiences: [
        {
          title: "Instruktor Programowania",
          company: "Giganci Programowania",
          location: "Kielce",
          period: "2024.02 - Obecnie",
          responsibilities: [
            "Nauczanie uczniów liceum do egzaminu maturalnego z informatyki",
            "Programowanie gier w Unity, poziom podstawowy i zaawansowany C++, C# oraz Python dla uczniów w wieku 12-18 lat",
            "Wsparcie uczniów na Discord po zajęciach",
          ],
        },
        {
          title: "Specjalista ds. Operacji w Dziale Akcji Korporacyjnych",
          company: "Brown Brothers Harriman",
          location: "Kraków",
          period: "2023.09 - 2023.12",
          responsibilities: [
            "Przetwarzanie akcji korporacyjnych i płatności dywidend",
            "Komunikacja z klientami i eskalacja wewnętrzna",
            "Sporządzanie raportów dziennych",
          ],
        },
        {
          title: "Specjalista ds. Odprawy Celnej",
          company: "FedEx Express Europe",
          location: "Kraków",
          period: "2022.04 - 2023.07",
          responsibilities: [
            "Komunikacja e-mail i telefoniczna z klientami",
            "Dokumentacja celna, faktury, listy przewozowe",
            "Sporządzanie raportów statusu dziennego",
          ],
        },
      ],
      education: [
        {
          school: "AGH Kraków",
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
        general: ["Marketing", "Analiza danych", "Projektowanie stron internetowych"],
        tools: ["Microsoft Office", "Adobe Tools", "Język angielski C1/C2"],
        programming: ["C++", "Python", "C", "JavaScript"],
      }
    };
    