import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface EducationEntry {
  school: string;
  degree: string;
  field: string;
  years: string;
}

export default function CV() {
  const experiences: ExperienceEntry[] = [
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
  ];

  const education: EducationEntry[] = [
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
  ];

  const skills = {
    general: ["Marketing", "Analiza danych", "Projektowanie stron internetowych"],
    tools: ["Microsoft Office", "Adobe Tools", "Język angielski C1/C2"],
    programming: ["C++", "Python", "C", "JavaScript"],
  };

  const handleDownloadCV = () => {
    // Create a simple PDF or text file
    const cvContent = `
DAWID CZERWIŃSKI

DOŚWIADCZENIE

Instruktor Programowania
Giganci Programowania, Kielce (2024.02 - Obecnie)
- Nauczanie uczniów liceum do egzaminu maturalnego z informatyki
- Programowanie gier w Unity, C++, C#, Python dla uczniów w wieku 12-18 lat
- Wsparcie uczniów na Discord po zajęciach

Specjalista ds. Operacji w Dziale Akcji Korporacyjnych
Brown Brothers Harriman, Kraków (2023.09 - 2023.12)
- Przetwarzanie akcji korporacyjnych i płatności dywidend
- Komunikacja z klientami i eskalacja wewnętrzna
- Sporządzanie raportów dziennych

Specjalista ds. Odprawy Celnej
FedEx Express Europe, Kraków (2022.04 - 2023.07)
- Komunikacja e-mail i telefoniczna z klientami
- Dokumentacja celna, faktury, listy przewozowe
- Sporządzanie raportów statusu dziennego

WYKSZTAŁCENIE

AGH Kraków
Inżynier - Elektronika i Telekomunikacja (2019-2020)

Politechnika Krakowska
Inżynier - Matematyka Stosowana (2020-2022)

UMIEJĘTNOŚCI

Ogólne: Marketing, Analiza danych, Projektowanie stron internetowych
Narzędzia: Microsoft Office, Adobe Tools, Język angielski C1/C2
Programowanie: C++, Python, C, JavaScript
    `;

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(cvContent)
    );
    element.setAttribute("download", "Dawid_Czerwinski_CV.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />

        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-4xl py-8 sm:py-16 md:py-24 lg:py-32">
            {/* Header */}
            <section className="mb-12 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <AnimatedCharacters
                  text="Dawid Czerwiński"
                  className="text-4xl font-semibold text-strong sm:text-5xl md:text-6xl leading-tight"
                />
                <AnimatedText
                  text="Instruktor Programowania | Specjalista Operacji"
                  className="text-weak text-base sm:text-lg"
                />
              </div>
              <Reveal delay={0.3}>
                <Button
                  onClick={handleDownloadCV}
                  variant="glassPrimary"
                  className="gap-3 w-fit px-6"
                >
                  <Download className="h-5 w-5" />
                  <span className="font-medium">Pobierz CV</span>
                </Button>
              </Reveal>
            </section>

            {/* Experience Section */}
            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters
                text="Doświadczenie"
                className="text-2xl font-semibold text-strong sm:text-3xl"
              />
              <StaggerContainer className="space-y-6">
                {experiences.map((exp, idx) => (
                  <StaggerItem key={idx}>
                    <div className="glass-card flex flex-col gap-4 p-6 sm:p-8">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-strong sm:text-xl">
                          {exp.title}
                        </h3>
                        <p className="text-medium">
                          {exp.company} • {exp.location}
                        </p>
                        <p className="text-weak text-sm">{exp.period}</p>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIdx) => (
                          <li key={respIdx} className="text-weak text-sm flex gap-3">
                            <span className="text-strong mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* Education Section */}
            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters
                text="Wykształcenie"
                className="text-2xl font-semibold text-strong sm:text-3xl"
              />
              <StaggerContainer className="space-y-4">
                {education.map((edu, idx) => (
                  <StaggerItem key={idx}>
                    <div className="glass-card flex flex-col gap-2 p-6 sm:p-8">
                      <h3 className="text-lg font-semibold text-strong sm:text-xl">
                        {edu.school}
                      </h3>
                      <p className="text-medium">
                        {edu.degree} - {edu.field}
                      </p>
                      <p className="text-weak text-sm">{edu.years}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            {/* Skills Section */}
            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters
                text="Umiejętności"
                className="text-2xl font-semibold text-strong sm:text-3xl"
              />
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* General Skills */}
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">Ogólne</h3>
                    <ul className="space-y-2">
                      {skills.general.map((skill, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2">
                          <span className="text-strong">→</span> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>

                {/* Tools & Languages */}
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">Narzędzia</h3>
                    <ul className="space-y-2">
                      {skills.tools.map((tool, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2">
                          <span className="text-strong">→</span> {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>

                {/* Programming */}
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">Programowanie</h3>
                    <ul className="space-y-2">
                      {skills.programming.map((lang, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2">
                          <span className="text-strong">→</span> {lang}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
