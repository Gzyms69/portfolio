import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers movement
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  // Mouse tracking for the glow/interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
      {/* Interactive Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.05, 0.08, 0.06, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Layer 1: Slow Dots (Base Grid) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-[0.15]"
      >
        <svg width="100%" height="110%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </motion.div>

      {/* Layer 2: Medium Crosses (Symmetrical Pattern) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <svg width="100%" height="120%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crosses" x="20" y="20" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 4 8 M 0 4 L 8 4" stroke="currentColor" strokeWidth="1" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosses)" />
        </svg>
      </motion.div>

      {/* Layer 3: Faster Circles (Sparse Accents) */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 opacity-[0.05]"
      >
        <svg width="100%" height="130%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="40" y="40" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </motion.div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Grainy Noise Filter */}
      <div className="absolute inset-0 opacity-[0.4] mix-blend-soft-light pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};
