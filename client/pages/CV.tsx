import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCharacters } from "@/components/AnimatedText";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { cvData, portfolioConfig } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import { DossierContent, DossierItem } from "@/components/DossierContent";

export default function CV({ isDossier = false }: { isDossier?: boolean }) {
  const { experiences, education, skills } = cvData;
  const { language, t } = useLanguage();
  const content = portfolioConfig[language];

  const handleDownloadCV = () => {
    const cvText = `
${content.name.toUpperCase()}
${content.title.toUpperCase()}

${t('cv_experience').toUpperCase()}
${experiences.map(exp => `
${exp.title}
${exp.company} | ${exp.location} | ${exp.period}
${exp.responsibilities.map(r => `- ${r}`).join('\n')}
`).join('\n')}

${t('cv_education').toUpperCase()}
${education.map(edu => `
${edu.school}
${edu.degree} - ${edu.field} (${edu.years})
`).join('\n')}

${t('cv_skills').toUpperCase()}
${t('cv_skills_general')}: ${skills.general.join(', ')}
${t('cv_skills_tools')}: ${skills.tools.join(', ')}
${t('cv_skills_programming')}: ${skills.programming.join(', ')}
    `;

    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(cvText));
    element.setAttribute("download", `Dawid_Czerwinski_CV_${language}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (isDossier) {
    return (
      <DossierContent>
        <div className="space-y-12 pb-20">
          <DossierItem>
            <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-8">
              <h3 className="text-3xl font-['VT323'] text-primary uppercase tracking-tight">Assignment_History</h3>
            </div>
            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group pl-6 border-l border-primary/20">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-2xl font-['VT323'] text-primary uppercase">{exp.title}</h4>
                    <div className="flex justify-between items-center text-primary/60 font-['VT323'] text-lg">
                      <span>{exp.company} // {exp.location}</span>
                      <span className="text-primary/40 text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-primary/50 font-['VT323'] text-lg leading-snug flex gap-3">
                        <span className="text-primary/30 mt-1">{'>'}</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DossierItem>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <DossierItem>
              <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-6">
                <h3 className="text-3xl font-['VT323'] text-primary uppercase tracking-tight">Education_Protocol</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="font-['VT323']">
                    <h4 className="text-xl text-primary uppercase">{edu.school}</h4>
                    <p className="text-primary/60 text-lg">{edu.degree} - {edu.field}</p>
                    <p className="text-primary/40 text-sm">{edu.years}</p>
                  </div>
                ))}
              </div>
            </DossierItem>

            <DossierItem>
              <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-6">
                <h3 className="text-3xl font-['VT323'] text-primary uppercase tracking-tight">Technical_Specs</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, list], idx) => (
                  <div key={idx} className="font-['VT323']">
                    <span className="text-primary/40 text-xs uppercase block mb-1">{category}_MODULES</span>
                    <div className="flex flex-wrap gap-2">
                      {list.map((skill, sIdx) => (
                        <span key={sIdx} className="bg-primary/10 border border-primary/20 px-2 py-0.5 text-primary text-sm rounded-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DossierItem>
          </div>

          <DossierItem>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary font-['VT323'] text-xl uppercase transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Generate_Hardcopy_File</span>
            </button>
          </DossierItem>
        </div>
      </DossierContent>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-4xl py-8 sm:py-16 md:py-24 lg:py-32">
            <section className="mb-12 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold font-['Major_Mono_Display'] text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase">{content.name}</h1>
                <p className="font-['Major_Mono_Display'] text-lg sm:text-xl text-primary/80 lowercase">{content.title}</p>
              </div>
              <Reveal delay={0.3}>
                <Button onClick={handleDownloadCV} variant="glassPrimary" className="gap-3 w-fit px-6">
                  <Download className="h-5 w-5" />
                  <span className="font-medium">{t('cv_download')}</span>
                </Button>
              </Reveal>
            </section>

            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters text={t('cv_experience')} className="text-2xl font-semibold text-strong sm:text-3xl" />
              <StaggerContainer className="space-y-6">
                {experiences.map((exp, idx) => (
                  <StaggerItem key={idx}>
                    <div className="glass-card flex flex-col gap-4 p-6 sm:p-8">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold text-strong sm:text-xl">{exp.title}</h3>
                        <p className="text-medium">{exp.company} • {exp.location}</p>
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

            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters text={t('cv_education')} className="text-2xl font-semibold text-strong sm:text-3xl" />
              <StaggerContainer className="space-y-4">
                {education.map((edu, idx) => (
                  <StaggerItem key={idx}>
                    <div className="glass-card flex flex-col gap-2 p-6 sm:p-8">
                      <h3 className="text-lg font-semibold text-strong sm:text-xl">{edu.school}</h3>
                      <p className="text-medium">{edu.degree} - {edu.field}</p>
                      <p className="text-weak text-sm">{edu.years}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>

            <section className="mb-12 flex flex-col gap-6">
              <AnimatedCharacters text={t('cv_skills')} className="text-2xl font-semibold text-strong sm:text-3xl" />
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">{language === 'pl' ? 'Ogólne' : 'General'}</h3>
                    <ul className="space-y-2">
                      {skills.general.map((skill, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2"><span className="text-strong">→</span> {skill}</li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">{language === 'pl' ? 'Narzędzia' : 'Tools'}</h3>
                    <ul className="space-y-2">
                      {skills.tools.map((tool, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2"><span className="text-strong">→</span> {tool}</li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="glass-card flex flex-col gap-4 p-6 h-full">
                    <h3 className="font-semibold text-strong">{language === 'pl' ? 'Programowanie' : 'Programming'}</h3>
                    <ul className="space-y-2">
                      {skills.programming.map((lang, idx) => (
                        <li key={idx} className="text-weak text-sm flex gap-2"><span className="text-strong">→</span> {lang}</li>
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