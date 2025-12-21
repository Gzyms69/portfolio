import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { useBackground } from '@/hooks/use-background';

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { type } = useBackground();

  // TEMPORARY DEBUG: Force sticks for 3 seconds
  const [debugType, setDebugType] = useState<BackgroundType | undefined>(undefined);
  useEffect(() => {
    setDebugType('sticks');
    const timer = setTimeout(() => setDebugType(undefined), 3000);
    return () => clearTimeout(timer);
  }, []);
  const currentType = debugType || type;
  // END TEMPORARY DEBUG

  const { scrollY } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // --- 1. Canvas ASCII Implementation ---
  useEffect(() => {
    if (type !== 'ascii') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
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
        if (item.morphTimer > (item.isGlitching ? 2 : 100)) {
          item.char = characters[Math.floor(Math.random() * characters.length)];
          item.morphTimer = 0;
        }

        ctx.font = `${layer.size}px monospace`;
        if (item.isGlitching) {
          ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
          ctx.fillText(item.char, item.x + 2, renderY);
          ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
          ctx.fillText(item.char, item.x - 2, renderY);
          ctx.fillStyle = layer.glitchColor; 
          ctx.fillText(item.char, item.x, renderY);
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
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [type, scrollY]);

  // --- 2. Three.js - 3D Sticks Environment ---
  useEffect(() => {
    if (type !== 'sticks' || !containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000);
    camera.position.z = 1500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Capped at 1.5 for performance
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // Disabled shadows for significant performance boost
    renderer.shadowMap.enabled = false; 
    containerRef.current.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.1));
    // High-intensity HemiLight provides "fake" depth without shadow calculations
    scene.add(new THREE.HemisphereLight(0xffffff, 0x000000, 1.0)); 
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(500, 1000, 1000);
    scene.add(dirLight);
    
    const mouseLight = new THREE.PointLight(0x00ffff, 4, 1000);
    scene.add(mouseLight);

    const stickGeometry = new THREE.BoxGeometry(2, 30, 2); 
    const colors = [0x00ff41, 0xffaa00, 0xffff00]; 
    const count = 600;
    const mesh = new THREE.InstancedMesh(stickGeometry, new THREE.MeshLambertMaterial({ color: 0xffffff }), count);
    
    const data = Array.from({ length: count }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 4000, (Math.random() - 0.5) * 1500),
      rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
      rotationSpeed: new THREE.Euler(Math.random() * 0.02, Math.random() * 0.02, Math.random() * 0.02),
      speed: 0.5 + Math.random() * 1.5,
      color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
    }));

    data.forEach((item, i) => mesh.setColorAt(i, item.color));
    scene.add(mesh);

    let animationFrameId: number;
    const animate = () => {
      const scrollValue = scrollY.get();
      mouseLight.position.x = mouseRef.current.x * 1500;
      mouseLight.position.y = mouseRef.current.y * 1000;
      mouseLight.position.z = 600;

      const matrix = new THREE.Matrix4();
      data.forEach((item, i) => {
        item.position.y -= item.speed;
        const visualY = ((item.position.y + (scrollValue * 0.7) + 2000) % 4000 + 4000) % 4000 - 2000;
        matrix.makeRotationFromEuler(item.rotation);
        matrix.setPosition(item.position.x, visualY, item.position.z);
        mesh.setMatrixAt(i, matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [type, scrollY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712] pointer-events-none">
      {currentType === 'ascii' && <canvas ref={canvasRef} className="absolute inset-0" />}
      {currentType === 'sticks' && <div ref={containerRef} className="absolute inset-0" />}
      
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