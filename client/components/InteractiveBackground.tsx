import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Config: Finding the "Goldilocks Zone"
    const GLITCH_CHARS = "!<>-_/[]{}—=+*^?#________";
    const characters = GLITCH_CHARS.split("");
    const layers = [
      { count: 400, size: 12, speed: 0.2, parallax: 0.05, color: 'rgba(0, 255, 65, 0.12)', glowColor: 'rgba(0, 255, 65, 0.35)', glitchColor: 'rgba(0, 255, 65, 0.6)' }, 
      { count: 100, size: 22, speed: 0.4, parallax: 0.1, color: 'rgba(255, 170, 0, 0.12)', glowColor: 'rgba(255, 170, 0, 0.4)', glitchColor: 'rgba(255, 170, 0, 0.6)' }, 
      { count: 30, size: 42, speed: 0.7, parallax: 0.2, color: 'rgba(255, 255, 0, 0.1)', glowColor: 'rgba(255, 255, 0, 0.45)', glitchColor: 'rgba(255, 255, 0, 0.6)' }
    ];

    const items = layers.flatMap((layer, layerIdx) => 
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        char: characters[Math.floor(Math.random() * characters.length)],
        layerIdx,
        morphTimer: Math.random() * 100,
        glitchTimer: Math.random() * 1000,
        isGlitching: false,
        hasGlow: Math.random() > 0.4,
        glowIntensity: (Math.random() + Math.random() + Math.random()) / 3 * 20 
      }))
    );

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollOffset = scrollY.get();

      items.forEach(item => {
        const layer = layers[item.layerIdx];
        item.y += layer.speed;
        if (item.y > canvas.height) item.y = -layer.size;
        const renderY = (item.y + (scrollOffset * layer.parallax)) % canvas.height;

        item.glitchTimer++;
        if (item.glitchTimer > 800 + Math.random() * 2000) {
          item.isGlitching = true;
          if (item.glitchTimer > 820) {
            item.isGlitching = false;
            item.glitchTimer = 0;
          }
        }

        item.morphTimer++;
        const morphThreshold = item.isGlitching ? 2 : (60 + Math.random() * 400);
        if (item.morphTimer > morphThreshold) {
          item.char = characters[Math.floor(Math.random() * characters.length)];
          item.morphTimer = 0;
        }

        ctx.font = `${layer.size}px monospace`;
        
        if (item.isGlitching) {
          const jitterX = (Math.random() - 0.5) * 3;
          const jitterY = (Math.random() - 0.5) * 1.5;
          ctx.shadowBlur = 5;
          ctx.shadowColor = layer.glitchColor;
          ctx.fillStyle = 'rgba(255, 0, 0, 0.15)';
          ctx.fillText(item.char, item.x + jitterX + 1, renderY + jitterY);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
          ctx.fillText(item.char, item.x + jitterX - 1, renderY + jitterY);
          ctx.fillStyle = layer.glitchColor; 
          ctx.fillText(item.char, item.x + jitterX, renderY + jitterY);
        } else {
          if (item.hasGlow) {
            ctx.shadowBlur = item.glowIntensity;
            ctx.shadowColor = layer.glowColor;
          } else {
            ctx.shadowBlur = 0;
          }
          ctx.fillStyle = layer.color;
          ctx.fillText(item.char, item.x, renderY);
        }
      });

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [scrollY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712] pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <motion.div
        animate={{ scale: [1, 1.1, 0.9, 1], opacity: [0.03, 0.05, 0.04, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};
