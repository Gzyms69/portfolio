import { motion } from "framer-motion";
import { ReactNode } from "react";

const anim = (variants: any) => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants
});

const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

const slide = {
  initial: { top: "100vh" },
  enter: { 
    top: "100vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  },
  exit: { 
    top: "0vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  }
};

const perspective = {
  initial: { y: 0, scale: 1, opacity: 1 },
  enter: { y: 0, scale: 1, opacity: 1 },
  exit: { 
    y: -100, 
    scale: 0.9, 
    opacity: 0.5,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  }
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black overflow-hidden">
      <motion.div {...anim(slide)} className="fixed top-0 left-0 w-full h-full bg-primary z-[100] pointer-events-none" />
      <motion.div {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
