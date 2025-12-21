import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GlitchImageProps {
  src: string;
  alt: string;
  isExpanded: boolean;
}

export const GlitchImage = ({ src, alt, isExpanded }: GlitchImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const rows = 10;
  const cols = 12;
  const totalCells = rows * cols;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  if (!isExpanded) return null;

  const GLITCH_CHARS = "01!@#$%^&*()_+-=[]{}|;:,.<>?/";

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden group/img">
      {/* 1. Background "Data Stream" layer - replaces the black hole */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md flex flex-wrap gap-1 p-2 overflow-hidden opacity-40">
        {Array.from({ length: 400 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              color: ["#00ff41", "#ffffff", "#00ff41"] 
            }}
            transition={{ 
              duration: Math.random() * 2 + 1, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="text-[8px] font-mono select-none"
          >
            {GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]}
          </motion.span>
        ))}
      </div>

      {/* 2. Glitchy Border - Animates in with the reconstruction */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute inset-0 z-30 border border-primary/20 rounded-2xl pointer-events-none"
      />

      {isLoaded ? (
        <div 
          className="absolute inset-0 grid h-full w-full z-20"
          style={{ 
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {Array.from({ length: totalCells }).map((_, i) => {
            const r = Math.floor(i / cols);
            const c = i % cols;
            
            const randomX = (Math.random() - 0.5) * 600; 
            const randomY = (Math.random() - 0.5) * 600;
            const randomDelay = Math.random() * 0.5;
            const randomDuration = 0.3 + Math.random() * 0.5;

            return (
              <div key={i} className="relative h-full w-full overflow-hidden">
                {/* Main Fragment with Snap-in logic */}
                <motion.div
                  initial={{ 
                    opacity: 0, 
                    x: randomX, 
                    y: randomY, 
                    scale: 3,
                    filter: "brightness(5) contrast(5) blur(10px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0, 
                    y: 0, 
                    scale: 1,
                    filter: "brightness(1) contrast(1) blur(0px)"
                  }}
                  transition={{ 
                    duration: randomDuration, 
                    delay: randomDelay,
                    ease: [0.76, 0, 0.24, 1] // Snappy cubic-bezier
                  }}
                  className="relative h-full w-full"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${cols * 100}% ${rows * 100}%`,
                    backgroundPosition: `${(c / (cols - 1)) * 100}% ${(r / (rows - 1)) * 100}%`,
                  }}
                />
              </div>
            );
          })}
          
          {/* 3. Fast RGB chromatic aberration flicker on expansion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.2, times: [0, 0.5, 1], delay: 0.1 }}
            className="absolute inset-0 bg-white/20 z-40 mix-blend-overlay pointer-events-none"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
      
      {/* 4. Constant Digital Noise Overlay - Replaced Giphy with SVG Filter */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-40 mix-blend-overlay">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.85" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};
