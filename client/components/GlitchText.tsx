import { useState, useEffect, useCallback, ReactNode, useRef, memo } from "react";
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

const GLITCH_CHARS = "!<>-_/[]{}—=+*^?#________";

// Optimized Scramble Glitch
// Uses requestAnimationFrame for performance but keeps the original "Matrix" look
export const GlitchText = memo(({ text, className = "", triggerInView = false }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Animation ref to cancel on unmount
  const frameRef = useRef<number>();

  const scramble = useCallback(() => {
    let iteration = 0;
    
    const update = () => {
      setDisplayText(() =>
        text
          .split("")
          .map((_char, index) => {
            if (index < iteration) return text[index];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (iteration < text.length) {
        iteration += 1 / 2; // Increased speed for snappier feel
        frameRef.current = requestAnimationFrame(update);
      }
    };

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(update);
  }, [text]);

  useEffect(() => {
    if (triggerInView && isInView) {
      scramble();
    }
  }, [isInView, triggerInView, scramble]);

  useEffect(() => {
    if (!triggerInView) {
      scramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [scramble, triggerInView]);

  return (
    <span 
      ref={ref}
      className={`glitch-text-wrapper group cursor-default inline-block relative ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 block">
        {displayText}
      </span>
      
      {isHovered && (
        <>
          {/* Enhanced Color Split Layers for WOW factor */}
          <span className="glitch-layer animate-glitch-1 opacity-80" aria-hidden="true">
            {displayText}
          </span>
          <span className="glitch-layer animate-glitch-2 opacity-80" aria-hidden="true">
            {displayText}
          </span>
          {/* Third layer for extra chromatic aberration */}
          <span className="glitch-layer absolute inset-0 text-cyan-500/30 -z-30 translate-x-[2px] blur-[1px] animate-pulse pointer-events-none" aria-hidden="true">
            {displayText}
          </span>
        </>
      )}
    </span>
  );
});

GlitchText.displayName = 'GlitchText';

export const GlitchMenu = ({ isOpen, children, className = "" }: GlitchMenuProps) => {
  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="absolute inset-0 -z-10 text-primary/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
            <motion.div
              className="absolute inset-0 -z-20 text-[#ffaa00]/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="relative z-10">
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

  return (
    <div
      className={`relative group ${className} cursor-pointer`} 
      onClick={onClick}
      onMouseEnter={() => { setIsHovered(true); onMouseEnter?.(); }}
      onMouseLeave={() => { setIsHovered(false); onMouseLeave?.(); }}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>

      {isHovered && (
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute inset-0 -z-10 animate-glitch-1 flex items-center justify-center text-primary/40">
            {children}
          </div>
          <div className="absolute inset-0 -z-20 animate-glitch-2 flex items-center justify-center text-[#ffaa00]/40">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
