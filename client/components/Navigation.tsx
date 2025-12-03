import { Home, Palette, Github, Eye, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/use-theme";
import { useState, useRef, useEffect } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHoverOpened, setIsHoverOpened] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout>();
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const hoverZoneRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleProjectsScroll = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHomeScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHoverEnter = () => {
   // Clear any pending close timeout to prevent closing
   if (closeTimeoutRef.current) {
     clearTimeout(closeTimeoutRef.current);
     closeTimeoutRef.current = undefined;
   }

   // Clear any pending open timeout
   if (hoverTimeoutRef.current) {
     clearTimeout(hoverTimeoutRef.current);
   }

   // Only trigger hover opening if sidebar is closed and not manually toggled
   if (!isSidebarOpen && !isHoverOpened) {
     hoverTimeoutRef.current = setTimeout(() => {
       setIsSidebarOpen(true);
       setIsHoverOpened(true);
     }, 700);
   }
  };

  const handleHoverLeave = (e: React.MouseEvent) => {
   // Clear any pending open timeout
   if (hoverTimeoutRef.current) {
     clearTimeout(hoverTimeoutRef.current);
     hoverTimeoutRef.current = undefined;
   }
   
   // Only close if sidebar was opened via hover (not manual click)
   if (isHoverOpened) {
     // Check if mouse is still in the left region (within 150px)
     const isStillInLeftRegion = e.clientX < 150;
     
     if (!isStillInLeftRegion) {
       // Add delay before closing to prevent flickering
       closeTimeoutRef.current = setTimeout(() => {
         setIsSidebarOpen(false);
         setIsHoverOpened(false);
       }, 300);
     }
   }
  };

  const handleToggleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsHoverOpened(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hover Zone for Left Side - covers entire left region including open sidebar */}
      <div
        ref={hoverZoneRef}
        className="fixed left-0 top-0 hidden h-screen w-40 sm:block z-30"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      />

      {/* Toggle Button */}
      <button
        onClick={handleToggleClick}
        className="fixed left-5 top-5 hidden z-50 h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[20px] transition-all duration-200 hover:bg-white/10 light:border-gray-300 light:bg-white light:shadow-md sm:flex"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-medium" strokeWidth={1} />
        ) : (
          <Menu className="h-6 w-6 text-medium" strokeWidth={1} />
        )}
      </button>

      {/* Desktop Sidebar */}
      <nav 
        className={`fixed top-1/2 hidden -translate-y-1/2 flex-col gap-3 rounded-[5rem] border border-white/10 bg-gradient-to-b from-white/5 via-white/2 to-white/0 p-1 backdrop-blur-[20px] transition-all duration-300 sm:flex light:border-gray-200 light:bg-gradient-to-b light:from-white light:via-gray-50 light:to-gray-100 light:shadow-lg z-50 ${
        isSidebarOpen ? 'left-5' : 'left-0 -translate-x-24'
      }`}
      >
        {/* Home */}
        <div className="relative flex h-14 w-12 items-center justify-center">
           {isActive('/') && <div className="absolute inset-0 rounded-3xl bg-white/10 light:bg-gray-300/40"></div>}
           <button
             onClick={handleHomeScroll}
             className="relative z-10 flex h-14 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/20 light:hover:bg-gray-300/50 light:border light:border-gray-400/40 hover:scale-110 active:scale-95"
           >
             <Home className={`h-8 w-8 transition-colors ${isActive('/') ? 'text-white light:text-gray-900' : 'text-medium'}`} strokeWidth={1} />
           </button>
           {isActive('/') && <div className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white light:bg-gray-900"></div>}
         </div>

        {/* Projects */}
        <button
          onClick={handleProjectsScroll}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/40 hover:scale-110 active:scale-95 transform"
        >
          <Eye className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/40 hover:scale-110 active:scale-95 transform"
        >
          <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
        </button>

        {/* Separator */}
        <div className="mx-auto my-2 h-px w-8 bg-medium light:bg-gray-400 opacity-60"></div>

        {/* GitHub */}
        <button
          onClick={() => handleExternalLink('https://github.com/Gzyms69')}
          className="flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/40 hover:scale-110 active:scale-95 transform group"
        >
          <Github className="h-6 w-6 text-medium transition-transform group-hover:rotate-12" strokeWidth={1} />
        </button>
      </nav>

      {/* Mobile Top Navigation Bar */}
      <nav className="fixed inset-x-5 top-5 flex items-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-2 backdrop-blur-[20px] sm:hidden light:border-gray-200 light:bg-gradient-to-r light:from-white light:to-gray-50 light:shadow-lg">
         <button
           onClick={handleHomeScroll}
           className={`flex items-center justify-center rounded-2xl p-2 transition-all duration-200 ${
             isActive('/') ? 'bg-white/20 light:bg-gray-300/50 light:border light:border-gray-400/40' : 'bg-white/10 light:bg-gray-300/30 light:border light:border-gray-400/30'
           } hover:bg-white/20 light:hover:bg-gray-300/50 light:hover:border-gray-400/40 hover:scale-110 active:scale-95`}
         >
           <Home className={`h-6 w-6 transition-colors ${isActive('/') ? 'text-white light:text-gray-900' : 'text-medium'}`} strokeWidth={1} />
         </button>
         <button
           onClick={handleProjectsScroll}
           className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/30 hover:scale-110 active:scale-95"
         >
           <Eye className="h-6 w-6 text-medium" strokeWidth={1} />
         </button>
         <button
           onClick={toggleTheme}
           className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/30 hover:scale-110 active:scale-95"
         >
           <Palette className="h-6 w-6 text-medium" strokeWidth={1} />
         </button>
         <div className="flex-1"></div>
         <button
           onClick={() => handleExternalLink('https://github.com/Gzyms69')}
           className="flex items-center justify-center rounded-2xl p-2 transition-all duration-200 hover:bg-white/10 light:hover:bg-gray-300/40 light:border light:border-gray-400/30 hover:scale-110 active:scale-95"
         >
           <Github className="h-6 w-6 text-medium" strokeWidth={1} />
         </button>
       </nav>
    </>
  );
};
