import { useEffect } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useCursor } from "@/hooks/use-cursor";

export const CustomCursor = () => {
  const { isEnabled } = useCursor();

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {isEnabled && (
        <style dangerouslySetInnerHTML={{ __html: `
          * { cursor: none !important; }
          button, a, input, textarea, [role="button"] { cursor: none !important; }
        `}} />
      )}
      <AnimatePresence>
        {isEnabled && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden sm:block"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          >
            {/* Main Cursor Dot */}
            <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
            
            {/* Outer Glow Ring */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 bg-primary/5 blur-[2px]" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
