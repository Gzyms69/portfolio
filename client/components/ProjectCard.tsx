import { ReactNode, useState, useRef, useEffect } from "react";
import { ExternalLink, Terminal as TerminalIcon } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { GradientBackground, GradientVariant } from "./GradientBackground";
import { TechTag } from "./ui/TechTag";
import { GlitchImage } from "./ui/GlitchImage";
import { useLanguage } from "@/hooks/use-language";

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
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    if (isExpanded && containerRef.current) {
      // Smoother scroll-into-view logic
      const timer = setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center", // Center the expanded card in view
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const handleCardClick = () => setIsExpanded(!isExpanded);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className={isExpanded ? "z-50 relative" : "z-10"}>
      <motion.div
        ref={containerRef}
        layout // Enable layout animations for smoother resizing
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        transition={{ 
          layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Smooth expansion
          rotateX: { duration: 0.5 },
          rotateY: { duration: 0.5 }
        }}
        className={`relative group cursor-pointer font-mono ${className}`}
      >
        {/* CRT Screen Overlays - Minimal flicker, stable screen texture */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
          <motion.div 
            animate={{ opacity: [0, 0.015, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white" 
          />
        </div>

        {/* Terminal Frame */}
        <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-1 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary m-2" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary m-2" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary m-2" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary m-2" />

          {/* Top Status Bar */}
          <div className="flex justify-between px-6 py-2 border-b border-primary/10 text-[10px] uppercase tracking-widest text-primary/50">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span>System_Active</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block">Enc_Level: 256bit</span>
              <span>[ {isExpanded ? 'OPEN' : 'LOCKED'} ]</span>
            </div>
          </div>

          {/* Visual Header (The Gradient/Image part) */}
          <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'h-[250px]' : 'h-[160px]'}`}>
             <motion.div style={{ y: translateY, height: "120%", position: "absolute", top: "-10%", left: 0, right: 0 }}>
               <GradientBackground variant={variant} className="flex-1 h-full opacity-80 brightness-50 contrast-125 grayscale-[0.5]">
                 <div className="flex h-full flex-col items-center justify-center px-4 py-8 text-center">
                    {/* Abstract Terminal Text */}
                    {/* Readable Terminal Text */}
                    <h3 className="font-['VT323'] text-white leading-tight text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-tight uppercase">
                      {title}
                    </h3>
                 </div>
               </GradientBackground>
             </motion.div>
             <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
          </div>

          {/* Content Area */}
          <div className="px-6 py-6 sm:px-8 space-y-4">
            {isExpanded ? (
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                {imageUrl && <GlitchImage src={imageUrl} alt={title} isExpanded={isExpanded} />}
                
                <div className="flex items-center gap-4 border-l-2 border-primary/40 pl-4 py-2 bg-primary/5">
                  <div className="p-2 bg-primary/10 rounded">{icon}</div>
                  <div>
                    <h4 className="font-['VT323'] text-3xl text-primary leading-none uppercase tracking-tight">{title}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {techStack.map((tech, i) => <TechTag key={i} tech={tech} size="sm" />)}
                    </div>
                  </div>
                </div>

                <div className="font-['VT323'] text-xl sm:text-2xl text-primary/80 leading-relaxed whitespace-pre-wrap uppercase">
                  {`> initializing_data_summary...\n> [ok]\n\n${fullDescription}`}
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); window.open(githubUrl, '_blank'); }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary/10 border border-primary/40 hover:bg-primary/20 text-primary font-['VT323'] text-2xl uppercase transition-all tracking-wider"
                >
                  <TerminalIcon className="h-5 w-5" />
                  <span>{t('execute')}</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4 group-hover:translate-x-1 transition-transform">
                <div className="text-primary/60">{icon}</div>
                <div className="min-w-0">
                  <h4 className="font-['VT323'] text-3xl text-primary/90 leading-none truncate uppercase tracking-tight">{title}</h4>
                  <p className="font-['VT323'] text-xl text-primary/50 line-clamp-1 uppercase">{`file_desc: ${description}`}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Data Bar */}
          <div className="px-6 py-2 border-t border-primary/10 bg-primary/5 text-[8px] font-mono text-primary/30 flex justify-between">
            <span>MOD_DATE: {new Date().toLocaleDateString()}</span>
            <span>TYPE: SECURE_TERMINAL_V1.0.4</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};