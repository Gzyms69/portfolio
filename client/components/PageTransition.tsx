import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

const anim = (variants: Variants) => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants
});

const opacity = {
  initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { opacity: 0 }
};

const slide = {
  initial: { top: "100vh" },
  enter: { 
    top: "100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    top: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

const perspective = {
  initial: { y: 50, opacity: 0 },
  enter: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    y: -50, 
    opacity: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
  }
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-transparent overflow-hidden">
      {typeof document !== 'undefined' && createPortal(
        <motion.div 
          {...anim(slide)} 
          className="fixed left-0 w-full h-full bg-primary z-[9999] pointer-events-none" 
        />,
        document.body
      )}
      <motion.div {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
