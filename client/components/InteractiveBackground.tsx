import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export const InteractiveBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers movement
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Mouse tracking for the glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // SVG patterns with refined variety and subtle tech-inspired colors
  // Layer 1: Small (React Cyan hints)
  const dot1 = `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='30' r='1' fill='white' fill-opacity='0.1'/%3E%3Ccircle cx='130' cy='20' r='2.5' fill='%2322d3ee' fill-opacity='0.15'/%3E%3Ccircle cx='40' cy='110' r='1.8' fill='white' fill-opacity='0.15'/%3E%3Ccircle cx='110' cy='130' r='1.2' fill='%2322d3ee' fill-opacity='0.1'/%3E%3Ccircle cx='80' cy='70' r='3' fill='white' fill-opacity='0.12'/%3E%3Ccircle cx='10' cy='140' r='1.5' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")`;
  
  // Layer 2: Medium (Node.js Green hints)
  const dot2 = `url("data:image/svg+xml,%3Csvg width='250' height='250' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='40' r='3' fill='white' fill-opacity='0.08'/%3E%3Ccircle cx='210' cy='60' r='6.5' fill='%234ade80' fill-opacity='0.12'/%3E%3Ccircle cx='40' cy='200' r='4.5' fill='white' fill-opacity='0.1'/%3E%3Ccircle cx='180' cy='180' r='2.5' fill='%234ade80' fill-opacity='0.1'/%3E%3Ccircle cx='125' cy='125' r='7' fill='white' fill-opacity='0.05'/%3E%3C/svg%3E")`;
  
  // Layer 3: Large (Python Yellow hints)
  const dot3 = `url("data:image/svg+xml,%3Csvg width='500' height='500' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='glow' px='50%25' py='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23fde047' stop-opacity='0.15'/%3E%3Cstop offset='100%25' stop-color='%23fde047' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='120' r='5' fill='white' fill-opacity='0.05'/%3E%3Ccircle cx='400' cy='100' r='14' fill='url(%23glow)'/%3E%3Ccircle cx='400' cy='100' r='8' fill='%23fde047' fill-opacity='0.08'/%3E%3Ccircle cx='80' cy='420' r='11' fill='white' fill-opacity='0.07'/%3E%3Ccircle cx='350' cy='350' r='6' fill='%23fde047' fill-opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712] pointer-events-none">
      {/* Interactive Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.03, 0.05, 0.04, 0.03],
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

      {/* Parallax Layers - Increased tiling size for loop */}
      <motion.div style={{ y: y1, backgroundImage: dot1 }} className="absolute inset-[-20%] animate-bg-fall-slow" />
      <motion.div style={{ y: y2, backgroundImage: dot2 }} className="absolute inset-[-20%] animate-bg-fall-medium" />
      <motion.div style={{ y: y3, backgroundImage: dot3 }} className="absolute inset-[-20%] animate-bg-fall-fast" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bgFall {
          from { background-position-y: 0; }
          to { background-position-y: 1500px; }
        }
        .animate-bg-fall-slow { animation: bgFall 100s linear infinite; }
        .animate-bg-fall-medium { animation: bgFall 70s linear infinite; }
        .animate-bg-fall-fast { animation: bgFall 45s linear infinite; }
      `}} />

      {/* Grainy Noise Filter */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};
