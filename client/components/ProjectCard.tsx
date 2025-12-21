import { ReactNode, useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { GradientBackground, GradientVariant } from "./GradientBackground";
import { getTechColor } from "@/lib/utils";
import { TechTag } from "./ui/TechTag";
import { GlitchImage } from "./ui/GlitchImage";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  techStack: string[];
  icon: ReactNode;
  variant: GradientVariant;
  imageUrl?: string;
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
  imageUrl,
  className = "",
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      // Use a small timeout to ensure DOM has updated
      setTimeout(() => {
        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 50);
    }
  }, [isExpanded]);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className={isExpanded ? "z-50 relative" : "z-10"}>
      <motion.div
        ref={containerRef}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        whileHover={{ scale: isExpanded ? 1 : 1.01 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`glass-card flex flex-col gap-2 overflow-hidden p-2 cursor-pointer transition-shadow duration-500 ease-in-out hover:shadow-2xl ${className}`}
        onClick={handleCardClick}
      >
      {/* Gradient Background Section */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className={`relative transition-all duration-500 ease-in-out rounded-[2rem] overflow-hidden ${isExpanded ? 'h-[300px]' : 'flex-1'}`}
      >
        <motion.div style={{ y: translateY, height: "120%", position: "absolute", top: "-10%", left: 0, right: 0 }}>
          <GradientBackground variant={variant} className="flex-1 rounded-[2rem] h-full">
            <div className="flex h-full flex-col items-center justify-center px-4 py-8 text-center sm:px-6 sm:py-12">
              <h3 className="font-900 text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words hyphens-auto max-w-full">
                {title}
              </h3>
            </div>
          </GradientBackground>
        </motion.div>
        
        {/* Click to expand indicator - positioned at bottom of gradient */}
        {!isExpanded && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <p className="text-white/70 text-xs sm:text-sm font-medium">
              Click to expand
            </p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`flex flex-col gap-4 px-6 py-3 sm:gap-6 sm:px-8 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-70'}`}>
        {isExpanded ? (
          // Expanded Content
          <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            {/* Image Preview with Fragmented Glitch Reveal */}
            {imageUrl && <GlitchImage src={imageUrl} alt={title} isExpanded={isExpanded} />}

            {/* Header with Icon */}
            <div className="flex items-center gap-4">
              <div className="flex shrink-0 items-center justify-center">{icon}</div>
              <div className="flex flex-col gap-1 min-w-0">
                <h4 className="text-base font-semibold text-medium sm:text-lg">
                  {title}
                </h4>
                <div className="flex flex-wrap gap-1 mt-2">
                   {techStack.map((tech, index) => (
                     <TechTag key={index} tech={tech} size="sm" />
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
    </motion.div>
    </div>
  );
};
