import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const REVEAL_EASE = [0.76, 0, 0.24, 1] as const; // Premium cubic-bezier

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: RevealProps) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay, ease: REVEAL_EASE }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const MaskReveal = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay, ease: REVEAL_EASE }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
