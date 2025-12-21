import { BookOpen, Zap } from "lucide-react";

export type Language = 'pl' | 'en';

export const portfolioConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Full-stack developer specjalizujący się w tworzeniu zaawansowanych aplikacji internetowych oraz narzędzi do automatyzacji.",
    description: "Niniejsze portfolio to zestawienie moich projektów – od kompleksowych systemów zarządzania po specjalistyczne narzędzia niskopoziomowe. W swojej pracy stawiam na wydajność i jakość kodu, wykorzystując technologie takie jak Python, React oraz TypeScript.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Full-stack developer specializing in building robust web applications and advanced automation tools.",
    description: "This portfolio showcases my work across the stack, ranging from comprehensive management systems to specialized low-level utilities. I focus on writing high-quality, performant code using Python, React, and TypeScript.",
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
      description: "Kompleksowy system zarządzania biblioteką (Full-stack) wykorzystujący Python FastAPI, React i MS SQL Server.",
      fullDescription: "Zaawansowany projekt demonstrujący nowoczesne podejście do tworzenia aplikacji webowych. System integruje funkcje księgarni oraz biblioteki, oferując analitykę w czasie rzeczywistym oraz pełne zarządzanie asortymentem. Główne atuty to: autorski panel administracyjny CRUD, dokumentacja OpenAPI oraz pełne typowanie danych dla maksymalnej stabilności.",
    },
    en: {
      description: "A comprehensive full-stack library management system built with Python FastAPI, React, and MS SQL Server.",
      fullDescription: "A sophisticated full-stack project demonstrating a modern approach to web development. The system bridges bookstore and library functionalities, featuring real-time inventory analytics and comprehensive stock management. Key highlights include: a custom CRUD admin dashboard, full OpenAPI documentation, and end-to-end type safety for maximum stability.",
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
      description: "Wydajne narzędzie CLI do generowania plików poliglota (PNG+ZIP, PNG+WAV) z bezpiecznym zarządzaniem pamięcią.",
      fullDescription: "Niskoziomowe narzędzie wiersza poleceń opracowane w języku Rust, służące do tworzenia plików poliglota – pojedynczych plików poprawnie interpretowanych przez wiele formatów jednocześnie. Projekt wymagał zaawansowanej manipulacji strukturami binarnymi i głębokiego zrozumienia specyfikacji plików. Zawiera silniki walidacji oraz modułową architekturę gwarantującą bezpieczeństwo pamięci.",
    },
    en: {
      description: "High-performance CLI tool for generating polyglot files (PNG+ZIP, PNG+WAV) with memory-safe architecture.",
      fullDescription: "A low-level command-line tool developed in Rust for generating 'polyglot files'—single files that are simultaneously valid in multiple file formats. This project involved advanced binary manipulation and a deep understanding of file format specifications. It features robust validation engines and a highly modular, memory-safe architecture.",
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
      description: "Profesjonalna wizytówka online z nowoczesnym designem glassmorphism i płynnymi animacjami.",
      fullDescription: "Wysoko wydajna strona portfolio zbudowana przy użyciu React 18 i Vite. Projekt kładzie nacisk na doskonałe doświadczenie użytkownika (UX) poprzez płynne przejścia, responsywny design i unikalną estetykę terminala. Wykorzystuje Tailwind CSS 3 oraz Framer Motion do tworzenia interaktywnych elementów wizualnych.",
    },
    en: {
      description: "Professional online presence featuring a modern glassmorphism aesthetic and seamless animations.",
      fullDescription: "A high-performance portfolio website built with React 18 and Vite. The project focuses on delivering a superior user experience (UX) through smooth transitions, responsive design, and a unique terminal aesthetic. It leverages Tailwind CSS 3 and Framer Motion to create engaging, interactive visual elements.",
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
            "Przygotowywanie uczniów szkół średnich do egzaminu maturalnego z informatyki",
            "Prowadzenie zajęć z programowania gier (Unity) oraz języków C++, C# i Python (poziom podstawowy i zaawansowany)",
            "Mentoring i wsparcie merytoryczne dla uczniów poprzez platformę Discord",
          ],
        },
        {
          title: "Specjalista ds. Operacji (Corporate Actions)",
          company: "Brown Brothers Harriman",
          location: "Kraków",
          period: "2023.09 - 2023.12",
          responsibilities: [
            "Przetwarzanie operacji na papierach wartościowych oraz płatności dywidend",
            "Zarządzanie komunikacją z klientami i obsługa eskalacji wewnętrznych",
            "Przygotowywanie precyzyjnych raportów dziennych dla działu operacyjnego",
          ],
        },
        {
          title: "Specjalista ds. Odpraw Celnych",
          company: "FedEx Express Europe",
          location: "Kraków",
          period: "2022.04 - 2023.07",
          responsibilities: [
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
    