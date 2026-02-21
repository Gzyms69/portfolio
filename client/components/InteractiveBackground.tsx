import { motion, useScroll, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { useEffect, useRef, memo, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useBackground } from '@/hooks/use-background';
import { COG_LOGO_POINTS } from '@/lib/logo-data';

// --- Sticks Scene logic ---
const SticksScene = memo(({ scrollY, isIdle }: { scrollY: MotionValue<number>, isIdle: boolean }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120; 
  
  const [data] = useState(() => {
    const colors = [0x00ff41, 0xffaa00, 0xffff00];
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 4000, (Math.random() - 0.5) * 1500),
      rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
      rotationSpeed: new THREE.Euler(Math.random() * 0.005, Math.random() * 0.005, Math.random() * 0.005),
      speed: 0.8 + Math.random() * 1.5,
      color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
    }));
  });

  useEffect(() => {
    if (meshRef.current) {
      data.forEach((item, i) => {
        meshRef.current!.setColorAt(i, item.color);
      });
      if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [data]);

  const matrix = useMemo(() => new THREE.Matrix4(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    const scrollValue = scrollY.get();
    
    data.forEach((item, i) => {
      item.position.y -= item.speed;
      item.rotation.x += item.rotationSpeed.x;
      item.rotation.y += item.rotationSpeed.y;

      let targetX = item.position.x;
      let targetY = ((item.position.y + (scrollValue * 0.5) + 2000) % 4000 + 4000) % 4000 - 2000;
      let targetZ = item.position.z;

      if (isIdle && i < COG_LOGO_POINTS.length) {
        const logoPoint = COG_LOGO_POINTS[i];
        const lx = (logoPoint.x - 0.5) * 800;
        const ly = (0.5 - logoPoint.y) * 800;
        const lz = 500;

        targetX = THREE.MathUtils.lerp(targetX, lx, 0.03);
        targetY = THREE.MathUtils.lerp(targetY, ly, 0.03);
        targetZ = THREE.MathUtils.lerp(targetZ, lz, 0.03);
      }

      matrix.makeRotationFromEuler(item.rotation);
      matrix.setPosition(targetX, targetY, targetZ);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null as unknown as THREE.BufferGeometry, null as unknown as THREE.MeshBasicMaterial, count]}>
      <boxGeometry args={[2, 30, 2]} />
      <meshBasicMaterial transparent opacity={0.4} />
    </instancedMesh>
  );
});

SticksScene.displayName = 'SticksScene';

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { type } = useBackground();
  const { scrollY } = useScroll();
  const [isIdle, setIsIdle] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout>();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Snappier springs for the background glow to feel more responsive
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const resetIdle = () => {
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), 5000);
    };

    // Use requestAnimationFrame for smooth, non-blocking mouse tracking
    let frameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        resetIdle();
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    resetIdle();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (type !== 'ascii') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    const GLITCH_CHARS = "!<>-_/[]{}—=+*^?#________";
    const characters = GLITCH_CHARS.split("");
    const layers = [
      { count: 100, size: 12, speed: 0.15, parallax: 0.03, color: 'rgba(0, 255, 65, 0.12)' }, 
      { count: 30, size: 20, speed: 0.3, parallax: 0.06, color: 'rgba(255, 170, 0, 0.12)' }
    ];

    const items = layers.flatMap((layer, layerIdx) => 
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        baseX: Math.random() * window.innerWidth,
        baseY: Math.random() * window.innerHeight,
        char: characters[Math.floor(Math.random() * characters.length)],
        layerIdx,
        morphTimer: Math.random() * 100
      }))
    );

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize, { passive: true });
    resize();

    const render = () => {
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const scrollOffset = scrollY.get();

      items.forEach((item, i) => {
        const layer = layers[item.layerIdx];
        item.baseY += layer.speed;
        if (item.baseY > canvas.height) item.baseY = -layer.size;
        
        let targetX = item.baseX;
        let targetY = (item.baseY + (scrollOffset * layer.parallax)) % canvas.height;

        if (isIdle && i < COG_LOGO_POINTS.length) {
          const lp = COG_LOGO_POINTS[i];
          const lx = lp.x * canvas.width;
          const ly = lp.y * canvas.height;
          targetX += (lx - targetX) * 0.03;
          targetY += (ly - targetY) * 0.03;
        }

        item.morphTimer++;
        if (item.morphTimer > 150) {
          item.char = characters[Math.floor(Math.random() * characters.length)];
          item.morphTimer = 0;
        }

        ctx.font = `${layer.size}px monospace`;
        ctx.fillStyle = layer.color;
        ctx.fillText(item.char, targetX, targetY);
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [type, scrollY, isIdle]);

  return (
    <div key={type} className="fixed inset-0 -z-10 overflow-hidden bg-[#030712] pointer-events-none">
      <div className={`absolute inset-0 transition-opacity duration-500 ${type === 'ascii' ? 'opacity-100' : 'opacity-0'}`}>
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-500 ${type === 'sticks' ? 'opacity-100' : 'opacity-0'}`}>
        {type === 'sticks' && (
          <Canvas 
            camera={{ position: [0, 0, 1500], fov: 45, far: 5000 }}
            gl={{ 
              antialias: false, 
              alpha: false, 
              stencil: false, 
              depth: false,
              powerPreference: "high-performance"
            }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
          >
            <SticksScene scrollY={scrollY} isIdle={isIdle} />
          </Canvas>
        )}
      </div>
      
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[200px] w-[200px] rounded-full bg-primary/10 blur-2xl pointer-events-none"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
};
