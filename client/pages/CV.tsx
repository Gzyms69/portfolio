import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Download, Terminal as TerminalIcon, Award, BookOpen, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { cvData, portfolioConfig } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import { DossierContent, DossierItem } from "@/components/DossierContent";
import { SectionPowerUp } from "@/components/SectionPowerUp";
import { GlitchText } from "@/components/GlitchText";

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
        <DossierItem>
          <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-3xl font-mono text-primary uppercase tracking-tight">
              <GlitchText text={t('cv_experience')} />
            </h3>
          </div>
          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group pl-6 border-l border-primary/20">
                <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-mono text-primary uppercase">{exp.title}</h4>
                  <div className="flex justify-between items-center text-primary/60 font-mono text-lg">
                    <span>{exp.company} // {exp.location}</span>
                    <span className="text-primary/40 text-sm">{exp.period}</span>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-primary/50 font-mono text-lg leading-snug flex gap-3">
                      <span className="text-primary/30 mt-1">{'>'}</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DossierItem>

        <DossierItem>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-3xl font-mono text-primary uppercase tracking-tight">{t('edu_protocol')}</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="font-mono">
                    <h4 className="text-xl text-primary uppercase">{edu.school}</h4>
                    <p className="text-primary/60 text-lg">{edu.degree} - {edu.field}</p>
                    <p className="text-primary/40 text-sm">{edu.years}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-1 bg-primary/5 mb-6">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="text-3xl font-mono text-primary uppercase tracking-tight">{t('tech_specs')}</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, list], idx) => (
                  <div key={idx} className="font-mono">
                    <span className="text-primary/40 text-xs uppercase block mb-1">
                      {category === 'general' ? t('cv_skills_general') : category === 'tools' ? t('cv_skills_tools') : t('cv_skills_programming')}
                    </span>
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
            </div>
          </div>
        </DossierItem>

        <DossierItem>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary font-mono text-xl uppercase transition-all"
          >
            <Download className="w-5 h-5" />
            <span>{t('hardcopy')}</span>
          </button>
        </DossierItem>
      </DossierContent>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#030712] text-primary">
        <Navigation />
        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-[90rem] py-8 sm:py-16 md:py-24 lg:py-32">
            
            {/* Header Section */}
            <SectionPowerUp>
              <div className="relative group w-full mb-20">
                <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-8 sm:p-10 md:p-14 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 border-b border-primary/10 pb-6">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest mb-2">
                        <TerminalIcon className="h-3 w-3" />
                        <span>{t('dossier_id')} DA-2112</span>
                      </div>
                      <GlitchText
                        text={content.name}
                        className="text-4xl font-bold font-mono text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase tracking-tight"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                      <p className="font-mono text-xl sm:text-2xl text-primary/80 leading-relaxed max-w-2xl uppercase tracking-wide">
                        {content.title}
                      </p>
                      <Reveal delay={0.3}>
                        <Button 
                          onClick={handleDownloadCV} 
                          variant="outline" 
                          className="gap-3 px-6 font-mono text-xl border-primary/30 text-primary hover:bg-primary/10 uppercase"
                        >
                          <Download className="h-5 w-5" />
                          <span>{t('cv_download')}</span>
                        </Button>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </SectionPowerUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Experience & Education */}
              <div className="lg:col-span-8 space-y-20">
                
                {/* Experience */}
                <section className="flex flex-col gap-10">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-primary/40" />
                    <h2 className="text-3xl font-bold text-primary font-mono uppercase tracking-widest">
                      {t('cv_experience')}
                    </h2>
                  </div>
                  
                  <StaggerContainer className="space-y-12">
                    {experiences.map((exp, idx) => (
                      <StaggerItem key={idx}>
                        <SectionPowerUp>
                          <div className="relative pl-8 border-l-2 border-primary/10 group hover:border-primary/30 transition-colors py-2">
                            <div className="absolute -left-[9px] top-4 w-4 h-4 bg-[#030712] border-2 border-primary/30 rounded-full group-hover:border-primary group-hover:scale-110 transition-all" />
                            
                            <div className="flex flex-col gap-4">
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <h3 className="text-2xl font-bold text-primary font-mono uppercase tracking-tight">
                                  {exp.title}
                                </h3>
                                <span className="font-mono text-xs text-primary/40 bg-primary/5 px-2 py-1 rounded border border-primary/10">
                                  {exp.period}
                                </span>
                              </div>
                              
                              <p className="text-xl text-primary/60 font-mono uppercase tracking-wide">
                                {exp.company} // {exp.location}
                              </p>
                              
                              <ul className="space-y-3 mt-2">
                                {exp.responsibilities.map((resp, respIdx) => (
                                  <li key={respIdx} className="text-lg text-primary/40 font-mono flex gap-3 leading-snug">
                                    <span className="text-primary/30 mt-1">{'>'}</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </SectionPowerUp>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </section>

                {/* Education */}
                <section className="flex flex-col gap-10">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-primary/40" />
                    <h2 className="text-3xl font-bold text-primary font-mono uppercase tracking-widest">
                      {t('cv_education')}
                    </h2>
                  </div>
                  
                  <StaggerContainer className="space-y-8">
                    {education.map((edu, idx) => (
                      <StaggerItem key={idx}>
                        <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg hover:border-primary/30 transition-all">
                          <h3 className="text-xl font-bold text-primary font-mono uppercase">
                            {edu.school}
                          </h3>
                          <div className="flex justify-between items-end mt-2">
                            <p className="text-lg text-primary/60 font-mono uppercase">
                              {edu.degree} - {edu.field}
                            </p>
                            <span className="font-mono text-[10px] text-primary/30 tracking-widest">
                              [{edu.years}]
                            </span>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </section>
              </div>

              {/* Right Column: Skills & Tech Specs */}
              <div className="lg:col-span-4 space-y-12">
                <section className="sticky top-32 flex flex-col gap-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-8 bg-primary/40" />
                    <h2 className="text-2xl font-bold text-primary font-mono uppercase tracking-widest">
                      {t('cv_skills')}
                    </h2>
                  </div>

                  <div className="space-y-10 bg-[#0a0f0a] border border-primary/20 p-8 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,65,0.05)]">
                    {/* General */}
                    <div className="space-y-4">
                      <span className="block text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] border-b border-primary/10 pb-2">
                        {t('cv_skills_general')}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {skills.general.map((skill, idx) => (
                          <span key={idx} className="font-mono text-lg text-primary/60 hover:text-primary transition-colors cursor-default">
                            {skill}{idx < skills.general.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="space-y-4">
                      <span className="block text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] border-b border-primary/10 pb-2">
                        {t('cv_skills_tools')}:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((tool, idx) => (
                          <span key={idx} className="font-mono text-lg text-primary/60 hover:text-primary transition-colors cursor-default">
                            {tool}{idx < skills.tools.length - 1 ? ',' : ''}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Programming */}
                    <div className="space-y-4">
                      <span className="block text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] border-b border-primary/10 pb-2">
                        {t('cv_skills_programming')}:
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {skills.programming.map((lang, idx) => (
                          <div key={idx} className="flex flex-col gap-1 group">
                            <span className="font-mono text-xl text-primary leading-none group-hover:glitch transition-all">
                              {lang}
                            </span>
                            <div className="h-1 w-full bg-primary/10 overflow-hidden">
                              <div className="h-full bg-primary/40 w-[85%] group-hover:w-full transition-all duration-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Terminal Status Decoration */}
                  <div className="p-4 border-2 border-dashed border-primary/10 rounded-lg opacity-40">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[8px] uppercase tracking-widest text-primary">Status: Record_Verified</span>
                    </div>
                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60 leading-tight">
                      Checksum: 0xFD21A...<br/>
                      Uplink: Synchronized<br/>
                      Encryption: Active
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
