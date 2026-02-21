import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { TechTag } from "@/components/ui/TechTag";
import { GlitchText } from "@/components/GlitchText";
import { SectionPowerUp } from "@/components/SectionPowerUp";
import { projects, portfolioConfig } from "@/lib/terminal-db";
import { Terminal as TerminalIcon } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ContactForm } from "@/components/ContactForm";
import { TypewriterText } from "@/components/TypewriterText";

import { DossierContent, DossierItem } from "@/components/DossierContent";

export default function Index({ isDossier = false }: { isDossier?: boolean }) {
  const { language, t } = useLanguage();
  const content = portfolioConfig[language];
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isDossier && pathname === '/projects') {
      const el = document.getElementById('projects');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 500);
      }
    }
  }, [pathname, isDossier]);

  if (isDossier) {
    return (
      <DossierContent>
        <DossierItem>
          <div className="flex flex-col gap-2 border-b border-primary/10 pb-6">
            <div className="flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest mb-2">
              <TerminalIcon className="h-3 w-3" />
              <span>{t('dossier_id')} DA-2137</span>
            </div>
            <div className="min-h-[60px] sm:min-h-[72px]">
              <TypewriterText
                text={content.name}
                className="text-5xl sm:text-6xl font-bold font-mono text-primary uppercase tracking-tight"
                speed={50}
              />
            </div>
          </div>
        </DossierItem>

        <DossierItem>
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="min-h-[32px]">
              <TypewriterText 
                text={content.title}
                className="font-mono text-2xl text-primary/90 leading-relaxed uppercase text-shadow-sm"
                speed={30}
                delay={1000}
              />
            </div>
            <div className="space-y-4 font-mono text-xl text-primary/60 leading-relaxed uppercase">
              {content.description.split('\n').map((para, i) => (
                <div key={i} className="min-h-[28px]">
                  <TypewriterText 
                    text={para} 
                    speed={20} 
                    delay={2500 + (i * 1000)}
                    cursor={i === content.description.split('\n').length - 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </DossierItem>
        
        <DossierItem>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
            <div>
              <span className="block text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] mb-4">{t('cv_skills')}:</span>
              <div className="flex flex-wrap gap-2">
                {content.heroTechStack.map((tech, index) => (
                  <TechTag key={index} tech={tech} />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <span className="block text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] mb-4">{t('service_status')}</span>
              <div className="font-mono text-primary/80">
                <div>{t('availability')} {t('immediate')}</div>
                <div>LOCATION: {t('location_remote')}</div>
                <div>{t('clearance_level')} LEVEL_4</div>
              </div>
            </div>
          </div>
        </DossierItem>
      </DossierContent>
    );
  }

  return (
    <PageTransition>
      <div className="w-full bg-transparent">
        <main className="flex w-full justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-0 bg-transparent">
          <div className="w-full max-w-[90rem] py-8 sm:py-16 md:py-24 lg:py-32 space-y-32">
            <SectionPowerUp>
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
                <section className="flex flex-col gap-8 sm:gap-10 lg:w-2/3"> 
                  <div className="relative group w-full"> 
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
                    </div>

                    <div className="relative z-10 bg-[#0a0f0a]/90 border-2 border-primary/30 p-8 sm:p-10 md:p-14 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden transition-all duration-500 hover:border-primary/60 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

                      <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2 border-b border-primary/10 pb-6">
                          <div className="flex items-center gap-2 text-[10px] font-mono text-primary/70 uppercase tracking-widest mb-2">
                            <TerminalIcon className="h-3 w-3" />
                            <span>{t('dossier_id')} DA-2137</span>
                          </div>
                          <GlitchText
                            text={content.name}
                            className="text-4xl font-bold font-mono text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase tracking-tight"
                          />
                        </div>

                        <div className="flex flex-col gap-6">
                          <p className="font-mono text-xl sm:text-2xl text-primary/80 leading-relaxed max-w-2xl lowercase tracking-wide">
                            {content.title}
                          </p>
                          <p className="font-mono text-lg text-primary/70 leading-relaxed max-w-2xl lowercase">
                            {content.description}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 pt-6 border-t border-primary/10">
                          <span className="w-full text-[10px] font-mono text-primary/70 uppercase tracking-[0.3em] mb-2">{t('cv_skills')}:</span>
                          {content.heroTechStack.map((tech, index) => (
                            <TechTag key={index} tech={tech} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section className="lg:w-1/3"> 
                  <ContactForm />
                </section>
              </div>
            </SectionPowerUp>

            <section id="projects" className="flex flex-col gap-10 sm:gap-12 relative bg-transparent">
              <div className="px-4 sm:px-6 md:px-8 sticky top-24 z-20 py-4 flex items-center gap-4 bg-transparent backdrop-blur-sm">
                <div className="h-px w-8 bg-primary/40 hidden sm:block" />
                <GlitchText
                  text={t('projects')}
                  triggerInView
                  className="text-3xl font-bold text-strong sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-mono"
                />
                <span className="text-[10px] font-mono text-primary/40 mt-auto mb-2 hidden sm:block">
                  [DATA_STREAM_v4.0]
                </span>
              </div>

              <div className="flex flex-col gap-20 sm:gap-32">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="sticky top-40 sm:top-48 md:top-56"
                    style={{paddingTop: `${index * 20}px`}}
                  >
                    <SectionPowerUp>
                      <StaggerItem>
                        <ProjectCard
                          title={project.title}
                          description={project[language].description}
                          fullDescription={project[language].fullDescription}
                          githubUrl={project.githubUrl}
                          techStack={project.techStack}
                          variant={project.variant}
                          icon={project.icon}
                          imageUrl={project.imageUrl}
                        />
                      </StaggerItem>
                    </SectionPowerUp>
                  </div>
                ))}
              </div>
            </section>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
