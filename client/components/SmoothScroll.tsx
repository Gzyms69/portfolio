import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // 10 Years Experience Principle: Native scroll is king on mobile.
    // Smooth scrolling libraries often fight momentum and accessibility on touch devices.
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
      return; // Do not initialize Lenis on touch/mobile devices
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
