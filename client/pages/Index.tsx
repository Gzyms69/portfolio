import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import { AnimatedText, AnimatedCharacters } from "@/components/AnimatedText";
import { StaggerItem } from "@/components/Reveal";
import { PageTransition } from "@/components/PageTransition";
import { TechTag } from "@/components/ui/TechTag";
import { GlitchText } from "@/components/GlitchText";
import { projects, portfolioConfig } from "@/lib/data";

export default function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-7xl py-8 sm:py-16 md:py-24 lg:py-32">
            {/* Hero/About Section */}
            <section className="mb-20 sm:mb-32 md:mb-40 flex flex-col gap-8 sm:gap-10">
              <div className="glass-card flex max-w-2xl flex-col gap-8 sm:gap-10 p-8 sm:p-10 md:p-14 cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
                <GlitchText
                  text={portfolioConfig.name}
                  className="text-3xl font-semibold animated-title sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                />
                <AnimatedText
                  text={`${portfolioConfig.title} ${portfolioConfig.description}`}
                  className="text-weak text-base leading-relaxed sm:text-lg md:text-xl"
                />
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {portfolioConfig.heroTechStack.map((tech, index) => (
                    <TechTag key={index} tech={tech} />
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-10 sm:gap-12 relative">
              {/* Section Title */}
              <div className="px-8 sm:px-10 md:px-14 sticky top-24 z-20 backdrop-blur-sm py-4 rounded-2xl bg-background/50">
                <AnimatedCharacters
                  text="Projects"
                  className="text-3xl font-semibold text-strong sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                />
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
                        description={project.description}
                        fullDescription={project.fullDescription}
                        githubUrl={project.githubUrl}
                        techStack={project.techStack}
                        variant={project.variant}
                        icon={project.icon}
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
