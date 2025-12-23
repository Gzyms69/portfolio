import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { useLanguage } from "@/hooks/use-language";
import { DossierContent, DossierItem } from "@/components/DossierContent";

export const DossierProjects = () => {
  const { language } = useLanguage();

  return (
    <DossierContent>
      <div className="flex flex-col gap-12 pb-20">
        {projects.map((project, index) => {
          const projectData = project[language as keyof typeof project] as any;
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
                  className="border-none shadow-none group-hover:shadow-none"
                />
              </div>
            </DossierItem>
          );
        })}
      </div>
    </DossierContent>
  );
};
