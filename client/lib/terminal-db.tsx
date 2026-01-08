import { Zap, Share2 } from "lucide-react";
import { Project, CVData, GlobalConfig } from "@shared/types";

export const portfolioConfig: GlobalConfig = {
  pl: {
    name: "Dawid Czerwiński",
    title: "Software Engineer & Instruktor Programowania. Łączę pasję do edukacji technicznej z nowoczesnym developmentem.",
    description: "Były instruktor programowania (C++, Python, Unity) z inżynierskim wykształceniem (AGH, PK). Wykorzystuję analityczne podejście zdobyte w logistyce i edukacji do budowy wydajnych systemów webowych. Moje portfolio to dowód przejścia od nauczania architektury kodu do praktycznego tworzenia skalowalnych rozwiązań w React, TypeScript i FastAPI.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "Software Engineer & Technical Educator. Bridging the gap between tech education and modern engineering.",
    description: "Former programming instructor (C++, Python, Unity) with a solid engineering foundation (AGH, PK). I leverage analytical skills honed in logistics and education to build robust, high-performance web systems. My portfolio reflects a strategic transition from teaching code to architecting scalable full-stack solutions using React, TypeScript, and FastAPI.",
    email: "dawidekczerwinski@gmail.com",
    heroTechStack: ["Python", "React", "TypeScript", "FastAPI", "Node.js", "Docker", "Tailwind CSS", "SQL"]
  },
  socials: {
    github: "https://github.com/Gzyms69",
    linkedin: "#",
  },
  contact: {
    formspreeId: "mnnjpjez", 
  }
};

export const projects: Project[] = [
  {
    title: "WikiGraph Lab",
    pl: {
      description: "Odkryj ukrytą strukturę Wikipedii. To narzędzie 3D wizualizuje powiązania między pojęciami, zamieniając surowe dane w interaktywny wszechświat wiedzy.",
      fullDescription: "A gdyby tak zobaczyć, jak 'Miłość' łączy się z 'Filozofią' w angielskiej, polskiej i japońskiej Wikipedii jednocześnie? WikiGraph Lab to wydajny silnik, który przetwarza zrzuty Wikipedii i buduje trójwymiarową bazę grafową. Wykorzystuje zaawansowane algorytmy, takie jak PageRank, by wyłonić najbardziej wpływowe pojęcia i pozwolić Ci nawigować po sieci ludzkiej wiedzy jak po galaktyce powiązanych węzłów.",
    },
    en: {
      description: "Uncover the hidden structure of Wikipedia. This 3D visualization tool reveals how concepts connect across languages, turning raw data into an interactive universe of knowledge.",
      fullDescription: "What if you could see how 'Love' connects to 'Philosophy' across English, Polish, and Japanese Wikipedia simultaneously? WikiGraph Lab is a high-performance engine that ingests massive Wikipedia dumps and builds a 3D graph database. It uses advanced algorithms like PageRank to surface the most influential concepts and allows you to navigate the web of human knowledge as a galaxy of interconnected nodes.",
    },
    githubUrl: "https://github.com/Gzyms69/WIKIGRAPH",
    techStack: ["Python", "FastAPI", "Neo4j", "Next.js", "TypeScript", "Docker", "Graph Data Science"],
    variant: "design",
    icon: <Share2 className="h-8 w-8 text-gray-600 flex-shrink-0" />,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=1200&auto=format&fit=crop"
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