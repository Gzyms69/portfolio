import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TVPowerTransition = ({ children, isTransitioning }: { children: React.ReactNode; isTransitioning: boolean }) => {
  const [showPoint, setShowPoint] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setShowPoint(true), 100);
      const timerHide = setTimeout(() => setShowPoint(false), 250);
      return () => {
        clearTimeout(timer);
        clearTimeout(timerHide);
      };
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      {/* 1. Content Layer - NO FILTERS HERE (Prevents global green bugs) */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={isTransitioning ? {
          scaleY: [1, 0.005, 0.005, 1],
          scaleX: [1, 1, 0, 1],
        } : {
          scaleY: 1,
          scaleX: 1,
        }}
        transition={{ 
          duration: 0.25, 
          times: [0, 0.2, 0.5, 1],
          ease: "circOut"
        }}
        className="w-full min-h-screen origin-center"
      >
        {children}
      </motion.div>

      {/* 2. Separate Brightness Spike Overlay - Much safer than whole-page filters */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, times: [0, 0.5, 1] }}
            className="fixed inset-0 bg-white z-[2000] pointer-events-none mix-blend-overlay"
          />
        )}
      </AnimatePresence>

      {/* 3. Instant Center Flash Point */}
      <AnimatePresence>
        {showPoint && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.5, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 0.15 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_30px_white] z-[3000]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};