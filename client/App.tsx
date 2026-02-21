import "./global.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// UI Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
// Lazy load InteractiveBackground with artificial delay
import { Suspense, lazy, useEffect } from "react";
const InteractiveBackground = lazy(() => import("@/components/InteractiveBackground").then(module => ({ default: module.InteractiveBackground })));

const Delayed3DBackground = () => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true);
    };

    // Add listeners for interaction
    window.addEventListener('mousemove', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });

    // Fallback: If no interaction, load anyway after a delay to ensure it eventually appears
    // Using a longer delay to prioritize EVERYTHING else (fonts, main bundle, hydration)
    const fallbackTimer = setTimeout(() => {
      setShouldLoad(true);
    }, 3500);

    // Cleanup happens automatically for 'once: true' listeners when they fire, 
    // but we need to ensure we clean up the timer and remaining listeners if unmounting
    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!shouldLoad) return <div className="fixed inset-0 bg-[#0a0f0a] -z-10" />;

  return (
    <Suspense fallback={<div className="fixed inset-0 bg-[#0a0f0a] -z-10" />}>
      <InteractiveBackground />
    </Suspense>
  );
};

import { TVPowerTransition } from "@/components/TVPowerTransition";
import { CRTOverlay } from "@/components/ui/CRTOverlay";
import { TerminalLoader } from "@/components/TerminalLoader";
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
  const [isReady, setIsReady] = useState(false);

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
      <div className={isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
        <Navigation />
      </div>

      {/* 3. Main Content - Pure 2D Layout (No Global Tilt) */}
      <div className={`w-full min-h-screen ${isReady ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <TVPowerTransition isTransitioning={isTransitioning}>
          <Toaster />
          <Sonner />
          <ScrollProgress />
          {content}
        </TVPowerTransition>
      </div>

      {/* 4. Loader Overlay */}
      {!isReady && (
        <TerminalLoader onComplete={() => setIsReady(true)} />
      )}
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
