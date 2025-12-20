import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { CursorProvider } from "@/hooks/use-cursor";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <TooltipProvider>
    <CursorProvider>
      <Toaster />
      <Sonner />
      <ScrollProgress />
      <InteractiveBackground />
      <CustomCursor />
      <SmoothScroll>
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </SmoothScroll>
    </CursorProvider>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
