import { BookOpen, Bot, Zap, Mail, Github, Linkedin, FileText } from "lucide-react";

export const portfolioConfig = {
  name: "Dawid Czerwiński",
  title: "Full-stack developer building web applications and automation tools.",
  description: "This portfolio showcases my projects, from a library management system to VS Code extensions. I enjoy working with Python, React, and TypeScript to create functional applications.",
  email: "dawidekczerwinski@gmail.com",
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "#", // Add your link here
  },
  heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
};

export const projects = [
  {
    title: "BookShop Library",
    description: "Full-stack library management system with Python FastAPI, React TypeScript, and MS SQL Server in Docker",
    fullDescription: "A comprehensive full-stack portfolio project demonstrating modern web development with Python FastAPI, React TypeScript, and MS SQL Server in a Dockerized environment. Implements a hybrid bookshop/library system with inventory management, e-commerce capabilities, and real-time analytics. Features include: real-time inventory tracking, multi-type item support (books, movies, board games, magazines), admin dashboard with full CRUD operations, REST API with automatic OpenAPI documentation, type-safe full-stack development, and session-based caching with request deduplication.",
    githubUrl: "https://github.com/Gzyms69/bookshop-library",
    techStack: ["Python", "FastAPI", "React", "TypeScript", "MS SQL Server", "Docker", "Tailwind CSS"],
    variant: "design" as const,
    icon: <BookOpen className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "Kimi K2 Agent",
    description: "AI-powered VS Code extension for automation - execute tasks through natural language and manage files",
    fullDescription: "AI-powered automation extension for VS Code using Kimi K2 model. Execute tasks through natural language, manage files and run terminal commands, getting AI-formatted results. Features include: natural language task execution, advanced file operations, terminal integration with intelligent output formatting, chat interface for code questions, error recovery with comprehensive debugging, and support for multiple AI models (Kimi K2, Claude, GPT-4o, Gemini) via OpenRouter API.",
    githubUrl: "https://github.com/Gzyms69/kimi-k2-agent",
    techStack: ["TypeScript", "VS Code API", "OpenRouter", "Kimi K2", "Node.js"],
    variant: "design" as const,
    icon: <Bot className="h-8 w-8 text-gray-600 flex-shrink-0" />
  },
  {
    title: "Portfolio Website",
    description: "Modern, professional portfolio showcasing projects with glassmorphism design, smooth animations, and theme switching",
    fullDescription: "A modern, professional portfolio website built on the Fusion starter template featuring interactive project cards with expandable details. Built with React 18, TypeScript, and Vite for optimal performance. Includes a fully-developed backend with Express for server-side logic, comprehensive dark mode with glassmorphism styling, smooth animations throughout, light/dark theme switching, and responsive design. Features include: interactive project showcase, smooth scroll navigation, type-safe full-stack development, Tailwind CSS 3 styling system with custom design tokens, Radix UI component library, and seamless theme persistence.",
    githubUrl: "https://github.com/Gzyms69/portfolio",
    techStack: ["React", "TypeScript", "Vite", "TailwindCSS", "Express", "Node.js", "Radix UI"],
    variant: "design" as const,
    icon: <Zap className="h-8 w-8 text-gray-600 flex-shrink-0" />
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
