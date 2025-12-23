import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useMemo, memo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useBackground } from '@/hooks/use-background';
import { COG_LOGO_POINTS } from '@/lib/logo-data';

// --- Sticks Scene logic ---
const SticksScene = memo(({ scrollY, isIdle }: { scrollY: any, isIdle: boolean }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 200;
  const colors = [0x00ff41, 0xffaa00, 0xffff00];

  const data = useMemo(() => Array.from({ length: count }, () => ({
    position: new THREE.Vector3((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 4000, (Math.random() - 0.5) * 1500),
    rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
    rotationSpeed: new THREE.Euler(Math.random() * 0.01, Math.random() * 0.01, Math.random() * 0.01),
    speed: 1 + Math.random() * 2,
    color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
  })), []);

  useEffect(() => {
    if (meshRef.current) {
      data.forEach((item, i) => {
        meshRef.current!.setColorAt(i, item.color);
      });
      if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [data]);

  useFrame(() => {
    if (!meshRef.current) return;
    const scrollValue = scrollY.get();
    const matrix = new THREE.Matrix4();
    
    data.forEach((item, i) => {
      item.position.y -= item.speed;
      item.rotation.x += item.rotationSpeed.x;
      item.rotation.y += item.rotationSpeed.y;

      let targetX = item.position.x;
      let targetY = ((item.position.y + (scrollValue * 0.7) + 2000) % 4000 + 4000) % 4000 - 2000;
      let targetZ = item.position.z;

      if (isIdle && i < COG_LOGO_POINTS.length) {
        const logoPoint = COG_LOGO_POINTS[i];
        const lx = (logoPoint.x - 0.5) * 800;
        const ly = (0.5 - logoPoint.y) * 800;
        const lz = 500;

        targetX = THREE.MathUtils.lerp(targetX, lx, 0.05);
        targetY = THREE.MathUtils.lerp(targetY, ly, 0.05);
        targetZ = THREE.MathUtils.lerp(targetZ, lz, 0.05);
      }

      matrix.makeRotationFromEuler(item.rotation);
      matrix.setPosition(targetX, targetY, targetZ);
      meshRef.current!.setMatrixAt(i, matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null as any, null as any, count]}>
      <boxGeometry args={[2, 30, 2]} />
      <meshBasicMaterial transparent opacity={0.6} />
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
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const resetIdle = () => {
      setIsIdle(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIsIdle(true), 5000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      resetIdle();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    resetIdle();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [mouseX, mouseY]);

  // --- 2D ASCII implementation ---
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
      { count: 200, size: 12, speed: 0.2, parallax: 0.05, color: 'rgba(0, 255, 65, 0.15)' }, 
      { count: 50, size: 22, speed: 0.4, parallax: 0.1, color: 'rgba(255, 170, 0, 0.15)' }
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
          targetX += (lx - targetX) * 0.05;
          targetY += (ly - targetY) * 0.05;
        }

        item.morphTimer++;
        if (item.morphTimer > 100) {
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
            gl={{ antialias: false, alpha: false, stencil: false, depth: true }}
            dpr={1}
            performance={{ min: 0.5 }}
          >
            <SticksScene scrollY={scrollY} isIdle={isIdle} />
          </Canvas>
        )}
      </div>
      
      <motion.div
        animate={{ scale: [1, 1.1, 0.9, 1], opacity: [0.03, 0.05, 0.04, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[800px] w-[800px] rounded-full bg-primary/5 blur-[120px]"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
};
