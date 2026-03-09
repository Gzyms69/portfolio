import { Project, CVData, PortfolioConfig } from "@shared/types";
import { supportData } from "./support";

export const itSpecialistProjects: Project[] = [
  {
    title: "Prywatne Środowisko IT & Portfolio",
    period: "11.2025 – Obecnie",
    pl: {
      description: "**Administracja Sieciowa:** Samodzielne zarządzanie domeną `czerwinskidawid.pl`. Podstawowa konfiguracja i zabezpieczenie ruchu sieciowego (rekordy DNS, przekierowania, ochrona formularzy) w panelu Cloudflare. **Wsparcie Techniczne:** Diagnozowanie problemów ze stronami, testowanie wydajności wizytówek oraz wdrażanie drobnych poprawek w celu zapewnienia ciągłości działania usług. **Monitoring:** Bieżące sprawdzanie dostępności i stabilności środowiska domowego oraz weryfikacja statystyk w oparciu o narzędzia analityczne.",
      fullDescription: "Aby uczyć się działania sieci w praktyce, hobbystycznie utrzymuję własną domenę internetową i serwer.\n\nSamodzielnie podpiąłem pocztę we własnej domenie, skonfigurowałem rekordy DNS, reguły Cloudflare i certyfikaty SSL.\n\nDbam o poprawne działanie strony (Troubleshooting) oraz o zgodność z wymogami bezpieczeństwa prywatności (RODO)."
    },
    en: {
      description: "**Network Administration:** Independent management of the `czerwinskidawid.pl` domain. Basic configuration and security of network traffic (DNS records, redirects, form protection) in the Cloudflare panel. **Technical Support:** Diagnosing website issues, testing business card performance, and implementing minor fixes to ensure service continuity. **Monitoring:** Ongoing monitoring of the availability and stability of the home environment and verification of statistics based on analytical tools.",
      fullDescription: "To learn how networks work in practice, I maintain my own internet domain and server as a hobby.\n\nIndependently connected email in my own domain, configured DNS records, Cloudflare rules, and SSL certificates.\n\nI ensure the correct operation of the website (Troubleshooting) and compliance with privacy security requirements (GDPR)."
    },
    githubUrl: "https://katalog.czerwinskidawid.pl",
    liveUrl: "https://katalog.czerwinskidawid.pl",
    techStack: ["Administracja Web", "DNS", "Analytics"],
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
        location: "(Zdalnie / Część etatu)",
        period: "01.2024 - 06.2025",
        responsibilities: [
          "Edukacja i Komunikacja: Prowadzenie szkoleń technicznych (Python, C#). Tłumaczenie złożonych konceptów informatycznych osobom o zerowej wiedzy technicznej w sposób jasny i cierpliwy.",
          "Troubleshooting Środowisk (Wsparcie L1): Rozwiązywanie problemów 'na żywo' ze sprzętem i oprogramowaniem kursantów (instalacja paczek, konfiguracja zmiennych środowiskowych, rozwiązywanie konfliktów w systemach Windows i konfiguracja VS Code).",
          "Wsparcie Asynchroniczne: Zdalna obsługa zapytań i problemów technicznych od kursantów (via Discord), funkcjonująca na zasadach pierwszej linii wsparcia.",
          "Zarządzanie Zgłoszeniami: Współpraca z klientem (rodzicami kursantów) oraz raportowanie postępów i problemów organizacyjnych w wewnętrznym systemie CRM."
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
          "Obsługa incydentów w systemie biletowym (średnio ponad 100 ticketów dziennie) z zachowaniem skuteczności SLA na poziomie 98%.",
          "Obsługa Klienta: Diagnozowanie błędów w dokumentacji oraz bezpośredni kontakt telefoniczny z klientami w sytuacjach nagłych i krytycznych."
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
        location: "(Remote / Part-time)",
        period: "Jan 2024 - Jun 2025",
        responsibilities: [
          "Educational Instruction: Conducting technical training (Python, C#). Explaining complex computer science concepts to people with zero technical knowledge in a clear and patient manner.",
          "Environment Troubleshooting (L1 Support): Live hardware and software troubleshooting for students (package installation, environment variable configuration, resolving Windows system conflicts, and VS Code configuration).",
          "Async Support: Remote handling of technical queries and issues from students (via Discord), functioning on first-line support principles.",
          "Ticket Management: Collaboration with the client (students' parents) and reporting progress and organizational issues in an internal CRM system."
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
          "Handling incidents in a ticketing system (average over 100 tickets per day) while maintaining SLA efficiency at 98%.",
          "Customer Service: Diagnosing documentation errors and direct telephone contact with customers in sudden and critical situations."
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
