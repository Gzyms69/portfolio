import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionPowerUpProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionPowerUp: React.FC<SectionPowerUpProps> = ({ children, className = "" }) => {
  const ref = useRef(null);
  // Trigger slightly later to ensure layout is stable
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* 1. The Scanning Reveal Line */}
      <motion.div
        initial={{ top: "100%", opacity: 0 }}
        animate={isInView ? { 
          top: ["100%", "0%"], // Scan from BOTTOM to TOP as requested
          opacity: [0, 1, 1, 0] 
        } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="absolute left-0 right-0 h-[2px] bg-primary brightness-150 shadow-[0_0_10px_rgba(0,255,65,0.8)] z-30 pointer-events-none"
      />

      {/* 2. Content with Flickering Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          // Reduced brightness range to avoid "solid block" effect
          filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
        } : { opacity: 0, y: 20 }}
        transition={{ 
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          filter: { duration: 0.4, times: [0, 0.5, 1], delay: 0.1 }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
