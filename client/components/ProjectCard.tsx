import { ReactNode } from "react";
import { GradientBackground, GradientVariant } from "./GradientBackground";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant: GradientVariant;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  icon,
  variant,
  className = "",
}: ProjectCardProps) => {
  return (
    <div
      className={`glass-card flex h-[480px] flex-col gap-2 overflow-hidden p-2 ${className}`}
    >
      {/* Gradient Background Section */}
      <GradientBackground variant={variant} className="flex-1 rounded-[2rem]">
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:px-6 sm:py-12">
          <h3 className="font-900 text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl">
            {title}
          </h3>
          <p className="text-weak text-sm sm:text-base md:text-lg lg:text-xl">
            Replace with cover
          </p>
        </div>
      </GradientBackground>

      {/* Content Section */}
      <div className="flex items-center gap-4 px-6 py-3 sm:gap-6 sm:px-8">
        <div className="flex shrink-0 items-center justify-center">{icon}</div>
        <div className="flex flex-col gap-1 min-w-0">
          <h4 className="text-base font-semibold text-medium sm:text-lg truncate">
            {title}
          </h4>
          <p className="text-xs text-weak sm:text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
