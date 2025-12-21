import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { TechTag } from "@/components/ui/TechTag";
import { GlitchText } from "@/components/GlitchText";
import { projects, portfolioConfig } from "@/lib/data";
import { Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { ContactForm } from "@/components/ContactForm"; // Added ContactForm import

export default function Index() {
  const { language, t } = useLanguage();
  const content = portfolioConfig[language];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="flex w-full justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-[90rem] py-8 sm:py-16 md:py-24 lg:py-32">
            {/* Hero & Contact Form Wrapper */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 mb-20 sm:mb-32 md:mb-40">
              {/* Hero/About Section */}
              <section className="flex flex-col gap-8 sm:gap-10 lg:mb-0 lg:w-2/3"> {/* Added lg:w-2/3 */}
                <div className="relative group w-full"> {/* Changed max-w-3xl to w-full */}
                  {/* CRT Screen Overlays for Hero */}
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
                  <motion.div 
                    animate={{ opacity: [0, 0.015, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white" 
                  />
                </div>

                <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-8 sm:p-10 md:p-14 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden transition-all duration-500 hover:border-primary/60">
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 border-b border-primary/10 pb-6">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest mb-2">
                        <TerminalIcon className="h-3 w-3" />
                        <span>User_Profile // ID: DA-2112</span>
                      </div>
                      <GlitchText
                        text={content.name}
                        className="text-4xl font-bold font-['VT323'] text-primary sm:text-5xl md:text-6xl lg:text-7xl leading-none uppercase tracking-tight"
                      />
                    </div>

                    <div className="font-['VT323'] text-xl sm:text-2xl text-primary/80 leading-relaxed max-w-2xl uppercase">
                      {`> status: online\n> accessing bio...\n\n${content.title} ${content.description}`}
                    </div>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-primary/10">
                      <span className="w-full text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] mb-2">Capabilities:</span>
                      {content.heroTechStack.map((tech, index) => (
                        <TechTag key={index} tech={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Contact Form Section */}
            <section className="lg:w-1/3"> {/* Added lg:w-1/3 */}
              <ContactForm />
            </section>
            </div> {/* Closing tag for Hero & Contact Form Wrapper */}

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-10 sm:gap-12 relative">
              {/* Section Title */}
              <div className="px-4 sm:px-6 md:px-8 sticky top-24 z-20 py-4 flex items-center gap-4">
                <div className="h-px w-8 bg-primary/40 hidden sm:block" />
                <GlitchText
                  text={t('projects')}
                  className="text-3xl font-bold text-strong sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter font-['VT323']"
                />
                <span className="text-[10px] font-mono text-primary/40 mt-auto mb-2 hidden sm:block">
                  [DATA_STREAM_v4.0]
                </span>
              </div>

              {/* Project Cards Grid */}
              <div className="flex flex-col gap-20 sm:gap-32">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="sticky top-40 sm:top-48 md:top-56"
                    style={{ paddingTop: `${index * 20}px` }}
                  >
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
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
