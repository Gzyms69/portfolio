import { ReactNode, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GradientBackground, GradientVariant } from "./GradientBackground";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  techStack: string[];
  icon: ReactNode;
  variant: GradientVariant;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  fullDescription,
  githubUrl,
  techStack,
  icon,
  variant,
  className = "",
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`glass-card flex flex-col gap-2 overflow-hidden p-2 cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl ${className}`}
      onClick={handleCardClick}
    >
      {/* Gradient Background Section */}
      <div className={`transition-all duration-500 ease-in-out rounded-[2rem] ${isExpanded ? 'h-[600px]' : 'flex-1'}`}>
        <GradientBackground variant={variant} className="flex-1 rounded-[2rem] h-full">
          <div className="flex h-full flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:px-6 sm:py-12">
            <h3 className="font-900 text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
              {title}
            </h3>
            <p className="text-weak text-sm sm:text-base md:text-lg lg:text-xl opacity-70">
              {isExpanded ? "Details" : "Click to expand"}
            </p>
          </div>
        </GradientBackground>
      </div>

      {/* Content Section */}
      <div className={`flex flex-col gap-4 px-6 py-3 sm:gap-6 sm:px-8 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-70'}`}>
        {isExpanded ? (
          // Expanded Content
          <div className="flex flex-col gap-4 animate-in fade-in duration-300">
            {/* Header with Icon */}
            <div className="flex items-center gap-4">
              <div className="flex shrink-0 items-center justify-center">{icon}</div>
              <div className="flex flex-col gap-1 min-w-0">
                <h4 className="text-base font-semibold text-medium sm:text-lg">
                  {title}
                </h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-white/10 rounded-full text-weak border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-weak leading-relaxed animate-in slide-in-from-bottom duration-300 delay-100">
              {fullDescription}
            </p>

            {/* GitHub Link */}
            <button
              onClick={(e) => handleExternalLink(e, githubUrl)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 self-start group"
            >
              <span className="text-sm font-medium">View on GitHub</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ) : (
          // Collapsed Content
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 items-center justify-center">{icon}</div>
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="text-base font-semibold text-medium sm:text-lg truncate">
                {title}
              </h4>
              <p className="text-xs text-weak sm:text-sm line-clamp-2">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
