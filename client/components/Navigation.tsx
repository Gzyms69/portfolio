import { Home, Github, Eye, Boxes, Terminal, Activity, Worm } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useBackground } from "@/hooks/use-background";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
import { portfolioConfig } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalDialog } from "@/components/ui/TerminalDialog";
import { SnakeGame } from "@/components/SnakeGame"; // Import the new SnakeGame component

export const Navigation = () => {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { type: bgType, toggleBackground } = useBackground();
  const [isSnakeConfirmOpen, setIsSnakeConfirmOpen] = useState(false);
  const [isSnakeGameOpen, setIsSnakeGameOpen] = useState(false); // State for SnakeGame modal

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  const handleSnakeClick = () => {
    setIsSnakeConfirmOpen(true);
  };

  const confirmSnakeNavigation = () => {
    setIsSnakeConfirmOpen(false);
    setIsSnakeGameOpen(true); // Open the Snake game modal
  };

  const exitSnakeGame = () => {
    setIsSnakeGameOpen(false); // Close the Snake game modal
  };

  const getBackgroundIcon = () => {
    if (bgType === 'ascii') return <Terminal className="h-6 w-6 text-primary" strokeWidth={1.5} />;
    return <Boxes className="h-6 w-6 text-primary" strokeWidth={1.5} />;
  };

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

  return (
    <>
      {/* Desktop Sidebar - Terminal Style */}
      <nav 
        className={`fixed left-8 top-1/2 -translate-y-1/2 hidden flex-col gap-4 z-[100] sm:flex`}
      >
        <div className="relative bg-[#0a0f0a] border-2 border-primary/30 p-2 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] flex flex-col gap-4 group hover:border-primary/60 transition-all duration-500">
          
          {/* CRT Overlay for Nav - Now absolute to allow overflow content */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 px-2"> {/* Added items-center and px-2 */}
            {/* Home Link */}
            <NavButton 
              onClick={handleHomeScroll} 
              icon={<Home className="h-6 w-6" />} 
              label="HOME" 
              active={isActive('/')}
            />

            {/* Projects Link */}
            <NavButton 
              onClick={handleProjectsScroll} 
              icon={<Eye className="h-6 w-6" />} 
              label="DATA" 
            />

            <div className="h-px bg-primary/20 mx-2" />

            {/* Background Toggle */}
            <NavButton 
              onClick={toggleBackground} 
              icon={getBackgroundIcon()} 
              label={t('mode')} 
            />

            {/* Language Toggle */}
            <NavButton 
              onClick={toggleLanguage} 
              icon={<div className="font-['Major_Mono_Display'] text-xs font-bold">{language.toUpperCase()}</div>} 
              label={t('lang')} 
            />

            <div className="h-px bg-primary/20 mx-2" />

            {/* GitHub */}
            {/* GitHub */}
            <NavButton 
              onClick={() => handleExternalLink(portfolioConfig.socials.github)} 
              label={t('repo')} 
              icon={<Github className="h-6 w-6" />} 
            />

            <div className="h-px bg-primary/20 mx-2" />

                        {/* Snake Game */}

                        <NavButton 

                          onClick={handleSnakeClick} 

                          label={t('snake')} 

                          icon={<Worm className="h-6 w-6" />} 

                          active={isSnakeGameOpen} // Check if modal is open

                        />

                      </div>

                    </div>

                    

                    {/* Terminal Status Tag */}

                    <div className="bg-primary/10 border border-primary/20 rounded-md px-2 py-1 flex items-center gap-2 self-center">

                      <Activity className="h-3 w-3 text-primary animate-pulse" />

                      <span className="text-[8px] font-mono text-primary/60 tracking-widest">NAV_READY</span>

                    </div>

                  </nav>

            

                  {/* Mobile Terminal Header */}

                  <nav className="fixed inset-x-5 top-5 flex items-center justify-between gap-3 rounded-xl border-2 border-primary/30 bg-[#0a0f0a] p-2 sm:hidden z-[100] overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.1)]">

                     <div className="absolute inset-0 opacity-30 pointer-events-none">

                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />

                     </div>

                     

                     <div className="relative z-10 flex gap-2">

                       <button onClick={handleHomeScroll} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10">

                         <Home className="h-5 w-5" />

                       </button>

                       <button onClick={handleProjectsScroll} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10">

                         <Eye className="h-5 w-5" />

                       </button>

                     </div>

            

                     <div className="relative z-10 font-['VT323'] text-primary text-lg tracking-widest">

                       MENU_SYSTEM

                     </div>

            

                     <div className="relative z-10 flex gap-2">

                        <button onClick={toggleLanguage} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10 font-['Major_Mono_Display'] text-xs">

                          {language.toUpperCase()}

                        </button>

                        <button onClick={() => handleExternalLink(portfolioConfig.socials.github)} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10">

                          <Github className="h-5 w-5" />

                        </button>

                     </div>

                  </nav>

            

                  <TerminalDialog

                    isOpen={isSnakeConfirmOpen}

                    onClose={() => setIsSnakeConfirmOpen(false)}

                    onConfirm={confirmSnakeNavigation}

                    title={t('snake')}

                    message={t('confirm_snake')}

                    confirmText={language === 'pl' ? 'POTWIERDZAM' : 'CONFIRM'}

                    cancelText={language === 'pl' ? 'ANULUJ' : 'CANCEL'}

                  />

                  

                  {/* Snake Game Modal */}

                  <AnimatePresence>

                    {isSnakeGameOpen && (

                                          <motion.div

                                            initial={{ opacity: 0 }}

                                            animate={{ opacity: 1 }}

                                            exit={{ opacity: 0, pointerEvents: 'none' }} // Ensure clicks are not blocked during exit

                                            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 pointer-events-auto"

                                          >

                                            <SnakeGame isOpen={isSnakeGameOpen} onExit={exitSnakeGame} />

                                          </motion.div>

                                        )}

                                      </AnimatePresence>

                                

                          </>

                        );

                      };

                      

            

interface NavButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavButton = ({ onClick, icon, label, active }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`group relative flex h-12 w-12 flex-col items-center justify-center rounded-lg border transition-all duration-300 ${
      active 
      ? 'bg-primary/20 border-primary shadow-[0_0_10px_rgba(0,255,65,0.3)]' 
      : 'bg-primary/5 border-primary/20 hover:bg-primary/15 hover:border-primary/40'
    }`}
  >
    <div className={`transition-colors ${active ? 'text-primary shadow-[0_0_5px_rgba(0,255,65,0.5)]' : 'text-primary/60 group-hover:text-primary'}`}>
      {icon}
    </div>
    <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 font-['VT323'] text-2xl text-primary bg-[#0a0f0a] border border-primary/30 px-3 py-1 rounded-sm pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.2)] z-[100] translate-x-[-10px] group-hover:translate-x-0 uppercase">
      [ {label} ]
    </span>
  </button>
);
