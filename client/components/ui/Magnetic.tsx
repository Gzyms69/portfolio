import { useRef, ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic = ({ children, strength = 0.5, className = "" }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use springs for smooth, physical motion
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Apply strength factor
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};
