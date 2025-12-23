import { useState, useEffect, useCallback, ReactNode, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  triggerInView?: boolean;
}

interface GlitchMenuProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

interface GlitchButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const GLITCH_CHARS = "!<>-_/[]{}—=+*^?#________";

export const GlitchText = ({ text, className = "", triggerInView = false }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((_char, index) => {
            if (index < iteration) return text[index];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 4; 
    }, 30); 
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (triggerInView && isInView) {
      scramble();
    }
  }, [isInView, triggerInView, scramble]);

  useEffect(() => {
    if (!triggerInView) scramble();
  }, [scramble, triggerInView]);

  return (
    <span 
      ref={ref}
      className={`relative inline-block cursor-default group ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Main Text */}
      <span className={`relative z-10 block ${className} ${isHovered ? 'opacity-90' : ''}`}>
        {displayText}
      </span>
      
      {isHovered && (
        <>
          {/* 3. Terminal Palette Split Layers (Green/Amber instead of RGB) */}
          <span className={`absolute left-0 top-0 -z-10 w-full text-primary/30 animate-glitch-1 ${className}`}>
            {displayText}
          </span>
          <span className={`absolute left-0 top-0 -z-20 w-full text-[#ffaa00]/30 animate-glitch-2 ${className}`}>
            {displayText}
          </span>

          {/* 4. Scanline Slices */}
          <span className={`absolute left-0 top-0 z-20 w-full animate-slice-1 ${className} opacity-30 clip-slice-1`}>
            {displayText}
          </span>
          <span className={`absolute left-0 top-0 z-20 w-full animate-slice-2 ${className} opacity-30 clip-slice-2`}>
            {displayText}
          </span>
        </>
      )}

      {/* SVG Definitions */}
      <svg className="fixed h-0 w-0 pointer-events-none">
        <defs>
          <filter id="simpleGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .clip-slice-1 { clip-path: inset(25% 0 45% 0); }
        .clip-slice-2 { clip-path: inset(60% 0 20% 0); }

        .animate-glitch-1 { animation: glitch-anim-1 0.4s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-anim-2 0.4s infinite linear alternate-reverse; }
        .animate-slice-1 { animation: slice-anim-1 0.6s infinite steps(2); }
        .animate-slice-2 { animation: slice-anim-2 0.6s infinite steps(2) reverse; }

        @keyframes glitch-anim-1 {
          0% { transform: translate(1px, -0.5px); }
          100% { transform: translate(-1px, 0.5px); }
        }
        @keyframes glitch-anim-2 {
          0% { transform: translate(-1px, 0.5px); }
          100% { transform: translate(1px, -0.5px); }
        }
        @keyframes slice-anim-1 {
          0% { transform: translateX(-2%); }
          100% { transform: translateX(2%); }
        }
        @keyframes slice-anim-2 {
          0% { transform: translateX(1.5%); }
          100% { transform: translateX(-1.5%); }
        }
      `}} />
    </span>
  );
};

export const GlitchMenu = ({ isOpen, children, className = "" }: GlitchMenuProps) => {
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsGlitchActive(true);
      const timer = setTimeout(() => setIsGlitchActive(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {isGlitchActive && (
          <>
            <motion.div
              className="absolute inset-0 -z-10 text-primary/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
            <motion.div
              className="absolute inset-0 -z-20 text-[#ffaa00]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div>
        {children}
      </div>
    </div>
  );
};

export const GlitchButton = ({ 
  children, 
  className = "", 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}: GlitchButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div
      className={`group ${className}`} 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative z-10 w-full h-full flex items-center justify-center`}>
        {children}
      </div>

      {isHovered && (
        <div className="absolute inset-0 pointer-events-none rounded-full">
          <div className="absolute inset-0 -z-10 text-primary/40 animate-glitch-1 flex items-center justify-center opacity-50">
            {children}
          </div>
          <div className="absolute inset-0 -z-20 text-[#ffaa00]/40 animate-glitch-2 flex items-center justify-center opacity-50">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};