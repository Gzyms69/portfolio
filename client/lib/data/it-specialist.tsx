import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const itSpecialistProjects: Project[] = [
  {
    title: "katalog.czerwinskidawid.pl – Moje prywatne środowisko IT (Homelab)",
    pl: {
      description: "Aby uczyć się działania sieci w praktyce, hobbystycznie utrzymuję własną domenę internetową i serwer. Samodzielnie podpiąłem pocztę we własnej domenie, skonfigurowałem rekordy DNS, reguły Cloudflare i certyfikaty SSL. Dbam o poprawne działanie strony (Troubleshooting) oraz o zgodność z wymogami bezpieczeństwa prywatności (RODO).",
      fullDescription: "Aby uczyć się działania sieci w praktyce, hobbystycznie utrzymuję własną domenę internetową i serwer.\n\nSamodzielnie podpiąłem pocztę we własnej domenie, skonfigurowałem rekordy DNS, reguły Cloudflare i certyfikaty SSL.\n\nDbam o poprawne działanie strony (Troubleshooting) oraz o zgodność z wymogami bezpieczeństwa prywatności (RODO)."
    },
    en: {
      description: "To learn how networks work in practice, I maintain my own internet domain and server as a hobby. Independently connected email in my own domain, configured DNS records, Cloudflare rules, and SSL certificates. I ensure the correct operation of the website (Troubleshooting) and compliance with privacy security requirements (GDPR).",
      fullDescription: "To learn how networks work in practice, I maintain my own internet domain and server as a hobby.\n\nIndependently connected email in my own domain, configured DNS records, Cloudflare rules, and SSL certificates.\n\nI ensure the correct operation of the website (Troubleshooting) and compliance with privacy security requirements (GDPR)."
    },
    githubUrl: "https://katalog.czerwinskidawid.pl",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Administracja", "DNS", "Cloudflare", "Domeny", "RODO"],
    variant: "code",
  },
  {
    title: "Automatyzacja zadań (Python)",
    pl: {
      description: "Dla ułatwienia własnej pracy tworzę proste skrypty automatyzujące (m.in. przenoszenie danych do arkuszy kalkulacyjnych), co uczy mnie analitycznego myślenia i szybkiego rozwiązywania problemów.",
      fullDescription: "Dla ułatwienia własnej pracy tworzę proste skrypty automatyzujące (m.in. przenoszenie danych do arkuszy kalkulacyjnych), co uczy mnie analitycznego myślenia i szybkiego rozwiązywania problemów."
    },
    en: {
      description: "To facilitate my own work, I create simple automation scripts (e.g., transferring data to spreadsheets), which teaches me analytical thinking and fast problem-solving.",
      fullDescription: "To facilitate my own work, I create simple automation scripts (e.g., transferring data to spreadsheets), which teaches me analytical thinking and fast problem-solving."
    },
    githubUrl: "https://github.com/Gzyms69",
    techStack: ["Skrypty", "Google Sheets API"],
    variant: "code",
  }
];

export const itSpecialistConfig: Record<string, PortfolioConfig> = {
  pl: {
    name: "Dawid Czerwiński",
    title: "IT Support Specialist / Helpdesk L1",
    description: "Specjalista IT łączący doświadczenie w operacjach międzynarodowych (FedEx) z praktyką w edukacji technicznej (Giganci Programowania). Jako Mentor IT wyrobiłem wysoką cierpliwość i umiejętność tłumaczenia technicznych zagadnień laikom, regularnie diagnozując i rozwiązując problemy konfiguracyjne na komputerach kursantów. Dodatkowo, dzięki pracy w środowisku korporacyjnym, doskonale rozumiem rygor pracy z dokumentacją, SLA i systemami biletowymi. Szukam możliwości rozwoju na pierwszej linii wsparcia (L1 Support / Helpdesk), gdzie wykorzystam swoje umiejętności komunikacyjne i zmysł techniczny.",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Windows 10/11", "Troubleshooting", "Active Directory", "Linux", "Python"]
  },
  en: {
    name: "Dawid Czerwiński",
    title: "IT Support Specialist / Helpdesk L1",
    description: "IT Specialist combining experience in international operations (FedEx) with technical education practice (Giganci Programowania). As an IT Mentor, I developed high patience and the ability to explain technical issues to laypeople, regularly diagnosing and resolving configuration problems on students' computers. Additionally, thanks to working in a corporate environment, I perfectly understand the rigor of working with documentation, SLA, and ticketing systems. I am looking for development opportunities on the first line of support (L1 Support / Helpdesk), where I will utilize my communication skills and technical acumen.",
    email: "kontakt@czerwinskidawid.pl",
    heroTechStack: ["Windows 10/11", "Troubleshooting", "Active Directory", "Linux", "Python"]
  }
};

export const itSpecialistData: Record<string, CVData> = {
  pl: {
    experiences: [
      {
        title: "Nauczyciel Programowania / Mentor IT",
        company: "Giganci Programowania",
        location: "Zdalnie",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Edukacja i Komunikacja: Prowadzenie szkoleń technicznych (Python, C#). Tłumaczenie złożonych konceptów informatycznych osobom o zerowej wiedzy technicznej w sposób jasny i cierpliwy.",
          "Troubleshooting Środowisk (Wsparcie L1): Rozwiązywanie problemów 'na żywo' ze sprzętem i oprogramowaniem kursantów (instalacja paczek, konfiguracja zmiennych środowiskowych, rozwiązywanie konfliktów w systemach Windows i konfiguracja VS Code).",
          "Wsparcie Asynchroniczne: Zdalna obsługa zapytań i problemów technicznych od kursantów (via Discord), funkcjonująca na zasadach pierwszej linii wsparcia.",
          "Zarządzanie Zgłoszeniami: Współpraca z klientem (rodzicami kursantów) oraz raportowanie postępów i problemów organizacyjnych w wewnętrznym systemie CRM."
        ]
      },
      {
        title: "Pracownik Projektowy",
        company: "AB Midden Nederland",
        location: "Holandia",
        period: "02.2025 - 10.2025",
        responsibilities: [
          "Realizacja zadań w dynamicznym środowisku produkcyjnym pod presją czasu.",
          "Praca w międzynarodowym zespole (język angielski)."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Irlandia (Zdalnie, Kraków)",
        period: "03.2022 - 07.2023",
        responsibilities: [
          "Analiza dokumentacji i zapewnienie zgodności z procesem odpraw celnych (Customs Compliance).",
          "Zarządzanie incydentami operacyjnymi w wewnętrznym systemie zgłoszeniowym (Ticket-based workflow).",
          "Praca w reżimie ścisłych terminów (SLA) w międzynarodowym zespole."
        ]
      }
    ],
    education: supportData.pl.education,
    skills: {
      general: ["Systemy biletowe (Enterprise Ticketing Systems)", "Incident Management", "Praca w rygorze SLA", "Obsługa klienta"],
      tools: ["Windows 10/11", "Linux (Ubuntu CLI)", "Google Workspace", "MS Office", "VS Code"],
      programming: ["Python", "Bash", "SQL"]
    },
    languages: ["Polski (Ojczysty)", "Angielski (C1/C2 - Zaawansowany Professional)"]
  },
  en: {
    experiences: [
      {
        title: "Programming Teacher / IT Mentor",
        company: "Giganci Programowania",
        location: "Remote",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Educational Instruction: Conducting technical training (Python, C#). Explaining complex computer science concepts to people with zero technical knowledge in a clear and patient manner.",
          "Environment Troubleshooting (L1 Support): Live hardware and software troubleshooting for students (package installation, environment variable configuration, resolving Windows system conflicts, and VS Code configuration).",
          "Async Support: Remote handling of technical queries and issues from students (via Discord), functioning on first-line support principles.",
          "Ticket Management: Collaboration with the client (students' parents) and reporting progress and organizational issues in an internal CRM system."
        ]
      },
      {
        title: "Project Worker",
        company: "AB Midden Nederland",
        location: "Netherlands",
        period: "Feb 2025 - Oct 2025",
        responsibilities: [
          "Executed time-sensitive tasks in a fast-paced production environment.",
          "Collaborated in an international, English-speaking team."
        ]
      },
      {
        title: "Clearance Broker / Operations Specialist",
        company: "FedEx Express Ireland",
        location: "Ireland (Remote, Krakow)",
        period: "Mar 2022 - Jul 2023",
        responsibilities: [
          "Documentation analysis and ensuring compliance with customs clearance processes (Customs Compliance).",
          "Operational incident management within an internal ticketing system (Ticket-based workflow).",
          "Worked under strict deadlines (SLA) in an international team."
        ]
      }
    ],
    education: supportData.en.education,
    skills: {
      general: ["Enterprise Ticketing Systems", "Incident Management", "SLA rigor", "Customer service"],
      tools: ["Windows 10/11", "Linux (Ubuntu CLI)", "Google Workspace", "MS Office", "VS Code"],
      programming: ["Python", "Bash", "SQL"]
    },
    languages: ["Polish (Native)", "English (C1/C2 - Advanced Professional)"]
  }
};
