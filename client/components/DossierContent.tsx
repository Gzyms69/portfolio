import React from 'react';
import { motion } from 'framer-motion';

interface DossierContentProps {
  children: React.ReactNode;
}

export const DossierContent: React.FC<DossierContentProps> = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export const DossierItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0, x: 20, filter: 'brightness(2)' },
      visible: { 
        opacity: 1, 
        x: 0, 
        filter: 'brightness(1)',
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100
        }
      },
    }}
    className="mb-8"
  >
    {children}
  </motion.div>
);
