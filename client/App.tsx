import "./global.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

// UI Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";

import { TVPowerTransition } from "@/components/TVPowerTransition";
import { CRTOverlay } from "@/components/ui/CRTOverlay";
import { DossierView } from "@/components/DossierView";
import { Navigation } from "@/components/Navigation";

// Pages
import Index from "./pages/Index";
import Contact from "./pages/CommsUplink";
import CV from "./pages/ServiceRecord";
import NotFound from "./pages/NotFound";
import { DossierProjects } from "./pages/DossierProjects";
import Resume from "./pages/Resume";

// Hooks
import { BackgroundProvider, useBackground } from "@/hooks/use-background";
import { LanguageProvider } from "@/hooks/use-language";

const Delayed3DBackground = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const handleInteraction = async () => {
      // Dynamic import ONLY on interaction
      const module = await import("@/components/InteractiveBackground");
      setComponent(() => module.InteractiveBackground);
    };

    // Add listeners for interaction
    window.addEventListener('mousemove', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  if (!Component) return <div className="fixed inset-0 bg-[#0a0f0a] -z-10" />;

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-[#0a0f0a] -z-10" />}>
      <Component />
    </Suspense>
  );
};

const GlobalEffects = () => {
  const { type } = useBackground();
  return <>{type === 'sticks' && <CRTOverlay />}</>;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Index />} /> {/* Projects scroll handled in Index */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const DossierApp = () => {
  const { viewMode } = useBackground();
  const [activeTab, setActiveTab] = useState('home');

  if (viewMode !== 'dossier') return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Index isDossier />;
      case 'projects': return <DossierProjects />;
      case 'contact': return <Contact isDossier />;
      case 'cv': return <CV isDossier />;
      default: return <Index isDossier />;
    }
  };

  return (
    <DossierView activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DossierView>
  );
};

const AppContent = () => {
  const { isTransitioning, viewMode, toggleBackground } = useBackground();
  const location = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on mount
    window.scrollTo(0, 0);

    const boot = document.getElementById('boot-sequence');
    if (boot) {
      // Logic:
      // 1. If we are here quickly (< 200ms), the CSS animation hasn't started showing the loader yet (opacity: 0).
      //    We can just remove it instantly.
      // 2. If we are here late (> 200ms), the loader is visible (opacity: 1).
      //    We need to fade it out smoothly.
      
      const isVisible = getComputedStyle(boot).opacity !== '0';

      if (!isVisible) {
        boot.style.display = 'none';
        if (boot.parentNode) boot.parentNode.removeChild(boot);
      } else {
        requestAnimationFrame(() => {
          boot.style.transition = 'opacity 0.6s ease-out'; // Override animation with transition
          boot.style.opacity = '0';
          boot.style.pointerEvents = 'none';
          
          setTimeout(() => {
             if (boot.parentNode) boot.parentNode.removeChild(boot);
          }, 650);
        });
      }
    }
  }, []);

  // Resume Route - Clean Render
  if (location.pathname === '/resume') {
    return <Resume />;
  }

  // Determine content based on view mode
  const content = viewMode === 'standard' ? (
    <SmoothScroll>
      <GlobalEffects />
      <AnimatedRoutes />
    </SmoothScroll>
  ) : (
    <>
      <GlobalEffects />
      <DossierApp />
    </>
  );

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-transparent"
      onDoubleClick={toggleBackground}
    >
      {/* 1. Global Background - Fixed to viewport */}
      <Delayed3DBackground />

      {/* 2. Global Navigation - Always accessible */}
      <div className='opacity-100'>
        <Navigation />
      </div>

      {/* 3. Main Content - Pure 2D Layout (No Global Tilt) */}
      <div className={`w-full min-h-screen opacity-100 pointer-events-auto`}>
        <TVPowerTransition isTransitioning={isTransitioning}>
          <Toaster />
          <Sonner />
          <ScrollProgress />
          {content}
        </TVPowerTransition>
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <BackgroundProvider>
          <HashRouter>
            <AppContent />
          </HashRouter>
        </BackgroundProvider>
      </TooltipProvider>
    </LanguageProvider>
  );
};

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error("[ROOT] Critical Failure: Element with ID 'root' not found.");
}
