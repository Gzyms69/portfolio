import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/terminal-db";
import { useLanguage } from "@/hooks/use-language";
import { DossierContent, DossierItem } from "@/components/DossierContent";

export const DossierProjects = () => {
  const { language } = useLanguage();

  return (
    <DossierContent>
      {projects.map((project, index) => {
        const projectData = project[language as 'en' | 'pl'];
        return (
          <DossierItem key={index}>
            <div className="border border-primary/10 bg-[#0a0f0a]/40 p-1 rounded-sm">
              <ProjectCard
                title={project.title}
                description={projectData.description}
                fullDescription={projectData.fullDescription}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
                variant={project.variant}
                icon={project.icon}
                imageUrl={project.imageUrl}
                isDossier={true}
                className="border-none shadow-none group-hover:shadow-none"
              />
            </div>
          </DossierItem>
        );
      })}
    </DossierContent>
  );
};
