import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionPowerUpProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionPowerUp: React.FC<SectionPowerUpProps> = ({ children, className = "" }) => {

  const ref = useRef(null);

  // Trigger very early

  const isInView = useInView(ref, { once: true, amount: 0.05 });



  return (

    <div ref={ref} className={`relative ${className}`}>

      {/* 1. The Scanning Reveal Line - High brightness */}

      <motion.div

        initial={{ top: "-10%", opacity: 0 }}

        animate={isInView ? { 

          top: ["-10%", "110%"], 

          opacity: [0, 1, 1, 0] 

        } : {}}

        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.1 }}

        className="absolute left-0 right-0 h-[2px] bg-primary brightness-200 shadow-[0_0_20px_rgba(0,255,65,1)] z-30 pointer-events-none"

      />



      {/* 2. Content with Flickering Reveal */}

      <motion.div

        initial={{ opacity: 0, y: 20 }}

        animate={isInView ? { 

          opacity: 1, 

          y: 0,

          filter: ["brightness(0)", "brightness(2.5)", "brightness(1)"],

        } : { opacity: 0, y: 20 }}

        transition={{ 

          opacity: { duration: 0.4 },

          y: { duration: 0.4 },

          filter: { duration: 0.6, times: [0, 0.2, 1], delay: 0.2 }

        }}

      >

        {children}

      </motion.div>

    </div>

  );

};
