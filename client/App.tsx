import "./global.css";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
import { DebugOverlay } from "@/components/DebugOverlay";

// Pages
import Index from "./pages/Index";
import Contact from "./pages/CommsUplink";
import CV from "./pages/ServiceRecord";
import NotFound from "./pages/NotFound";
import { DossierProjects } from "./pages/DossierProjects";

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
  const { type } = useBackground();
  const location = useLocation();
  const navigate = useNavigate();
  
  const activeTab = location.pathname === '/' ? 'home' : location.pathname.substring(1).split('/')[0];

  const handleTabChange = (tabId: string) => {
    const path = tabId === 'home' ? '/' : `/${tabId}`;
    navigate(path);
  };

  if (type !== 'sticks') return null;

  return (
    <DossierView activeTab={activeTab} onTabChange={handleTabChange}>
      <Routes>
        <Route path="/" element={<Index isDossier />} />
        <Route path="/projects" element={<DossierProjects />} />
        <Route path="/contact" element={<Contact isDossier />} />
        <Route path="/cv" element={<CV isDossier />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DossierView>
  );
};

const AppContent = () => {

  const { isTransitioning, type, toggleBackground } = useBackground();

  const [isReady, setIsReady] = useState(false);



  return (

    <div 
      className="relative w-full min-h-screen"
      onDoubleClick={toggleBackground}
    >

      <DebugOverlay />

      

      {/* 1. Main Content - Always in DOM */}

      <div className={`w-full min-h-screen ${isReady ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        <GlobalEffects />

        <TVPowerTransition isTransitioning={isTransitioning}>

          <Toaster />

          <Sonner />

          <ScrollProgress />

          <InteractiveBackground />

          

          {/* Always render the standard view for now, effectively decoupling background from view mode */}
          <SmoothScroll>
            <AnimatedRoutes />
          </SmoothScroll>

          {/* 
          Legacy Mode Switch Logic:
          {type === 'ascii' ? (
            <SmoothScroll>
              <AnimatedRoutes />
            </SmoothScroll>
          ) : (
            <DossierApp />
          )} 
          */}

        </TVPowerTransition>

      </div>



      {/* 2. Loader Overlay - Unmounts when ready */}

      {!isReady && (

        <TerminalLoader onComplete={() => {

          setIsReady(true);

        }} />

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
