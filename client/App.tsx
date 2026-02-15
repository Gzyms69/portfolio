import "./global.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// UI Components
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractiveBackground } from "@/components/InteractiveBackground";
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

const ViewTilt = ({ children }: { children: React.ReactNode }) => {
  const { viewMode } = useBackground();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Subtle tilt for the whole view
  const rotateX = useTransform(springY, [0, 1], [2, -2]);
  const rotateY = useTransform(springX, [0, 1], [-2, 2]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  // Disable global tilt in dossier mode to prevent double-perspective bugs
  if (viewMode === 'dossier') {
    return <div className="w-full min-h-screen">{children}</div>;
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="w-full min-h-screen perspective-1000 origin-center"
    >
      {children}
    </motion.div>
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
      {/* 1. Global Background - MOVED OUTSIDE ViewTilt to stay truly fixed */}
      <InteractiveBackground />

      {/* 2. Global Navigation - Fixed to screen, outside tilt */}
      <div className={isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
        <Navigation />
      </div>

      {/* 3. Main Content - Wrapped in Tilt */}
      <div className={`w-full min-h-screen ${isReady ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ViewTilt>
          <TVPowerTransition isTransitioning={isTransitioning}>
            <Toaster />
            <Sonner />
            <ScrollProgress />
            {/* Background removed from here */}
            {content}
          </TVPowerTransition>
        </ViewTilt>
      </div>

      {/* 4. Loader Overlay - Unmounts when ready */}
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
