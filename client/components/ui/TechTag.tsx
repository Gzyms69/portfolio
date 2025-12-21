import { getTechColor } from "@/lib/utils";

interface TechTagProps {
  tech: string;
  className?: string;
  size?: "sm" | "xs";
}

export const TechTag = ({ tech, className = "", size = "sm" }: TechTagProps) => {
  const colors = getTechColor(tech);
  const isSmall = size === "xs";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border transition-all duration-200 ${
        isSmall ? "px-2 py-0.5 text-[10px]" : "px-3 py-1.5 text-sm"
      } ${colors.bg} ${colors.text} ${colors.border} ${colors.hover} ${className}`}
    >
      {tech}
      {colors.icon && (
        <img
          src={`https://skillicons.dev/icons?i=${colors.icon}`}
          alt={`${tech} logo`}
          className={`${isSmall ? "h-3.5 w-3.5" : "h-4 w-4"} object-contain opacity-100 brightness-110 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]`}
          onError={(e) => {
            // Use Simple Icons as fallback if skillicons fails
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('simpleicons')) {
              target.src = `https://cdn.simpleicons.org/${colors.icon}/white`;
            }
          }}
        />
      )}
    </span>
  );
};
