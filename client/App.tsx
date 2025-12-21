import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { BackgroundProvider } from "@/hooks/use-background";
import { LanguageProvider } from "@/hooks/use-language";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Snake from "./pages/Snake";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <BackgroundProvider>
        <Toaster />
        <Sonner />
        <ScrollProgress />
        <InteractiveBackground />
        <SmoothScroll>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </SmoothScroll>
      </BackgroundProvider>
    </TooltipProvider>
  </LanguageProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
