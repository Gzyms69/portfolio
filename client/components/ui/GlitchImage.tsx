import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  isExpanded: boolean;
}

export const GlitchImage = ({ src, alt, isExpanded }: GlitchImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  if (!isExpanded) return null;

  return (
    <div 
      className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden bg-[#0a0a0c] border border-white/5 shadow-2xl group/glitch"
      style={{ contain: 'layout style paint' }}
    >
      {isLoaded ? (
        <div className="absolute inset-0 w-full h-full">
          {/* Elegant smooth reveal of the stock photo */}
          <motion.img 
            initial={{ opacity: 0, scale: 1.05, filter: "grayscale(1) brightness(0.5)" }}
            animate={{ opacity: 1, scale: 1, filter: "grayscale(0) brightness(1)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ willChange: 'opacity, transform, filter' }}
          />

          {/* Minimalist technical overlays */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ contain: 'strict' }}>
            {/* Soft scanlines */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
            
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/30" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/30" />
          </div>

          {/* Single fast-scanning data line */}
          <motion.div 
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px z-20 bg-primary/20 shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]"
            style={{ willChange: 'top' }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 animate-spin rounded-full border border-primary/20 border-t-primary" />
        </div>
      )}
    </div>
  );
};
