import { Github, ExternalLink, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { TechTag } from "./ui/TechTag";
import { GlitchText } from "./GlitchText";
import { TypewriterText } from "./TypewriterText";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
  imageUrl?: string;
  variant?: "design" | "code" | "security";
  icon?: React.ReactNode;
  className?: string;
  isDossier?: boolean;
}

export const ProjectCard = ({
  title,
  description,
  fullDescription,
  githubUrl,
  liveUrl,
  techStack,
  imageUrl,
  className = "",
  isDossier = false,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout="position"
      className={`group relative w-full ${className}`}
    >
      <motion.div 
        layout
        className="relative z-10 bg-[#0a0f0a] border-2 border-primary/20 p-6 sm:p-8 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/50 shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]"
      >
        
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/40 m-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/40 m-1" />
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div layout className="lg:w-1/3 shrink-0">
            <div 
              className="relative aspect-video rounded border border-primary/10 overflow-hidden bg-black group-hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {imageUrl ? (
                <img 
                  src={imageUrl.startsWith('http') ? imageUrl : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${imageUrl.replace(/^\//, '')}`} 
                  alt={title} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-primary/20">
                  <Terminal className="w-16 h-16" />
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-4">
            <motion.div layout className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em]">Module_Data:</span>
                <h3 className="text-3xl font-bold font-mono text-primary uppercase tracking-tight">
                  <GlitchText text={title} />
                </h3>
              </div>
              
              <div className="flex gap-2">
                {githubUrl && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(githubUrl, "_blank")}
                    className="text-primary/40 hover:text-primary hover:bg-primary/10"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                )}
                {liveUrl && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(liveUrl, "_blank")}
                    className="text-primary/40 hover:text-primary hover:bg-primary/10"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </motion.div>

            <motion.div layout className="text-xl text-primary/60 font-mono leading-relaxed lowercase">
              <AnimatePresence mode="wait">
                {isExpanded ? (
                  <motion.div
                    key="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDossier ? (
                      <TypewriterText text={fullDescription || description} speed={10} cursor={false} />
                    ) : (
                      fullDescription || description
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="short"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDossier ? (
                      <TypewriterText text={description} speed={15} cursor={false} />
                    ) : (
                      description
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div layout className="mt-auto pt-6 border-t border-primary/5 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <TechTag key={index} tech={tech} />
                ))}
              </div>
              
              {fullDescription && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary/40 hover:text-primary hover:bg-primary/10 ml-auto"
                >
                  {isExpanded ? (
                    <div className="flex items-center gap-1">
                      <ChevronUp className="h-4 w-4" />
                      <span className="text-xs tracking-wider">COLLAPSE</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <span className="text-xs tracking-wider">EXPAND_DATA</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-primary/0 group-hover:bg-primary/[0.02] blur-3xl transition-all duration-700 pointer-events-none" />
    </motion.div>
  );
};