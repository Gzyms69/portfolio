import { Home, Github, Briefcase, Boxes, Terminal, Activity, Worm, Command, Power, Languages, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBackground } from "@/hooks/use-background";
import { useLanguage } from "@/hooks/use-language";
import { useState, memo } from "react";
import { portfolioConfig } from "@/lib/terminal-db";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalDialog } from "@/components/ui/TerminalDialog";
import { SnakeGame } from "@/components/SnakeGame";
import { TerminalConsole } from "@/components/TerminalConsole";
import { GlitchText } from "./GlitchText";

interface NavButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isMenuOpen?: boolean;
}

const NavButton = memo(({ onClick, icon, label, active, isMenuOpen }: NavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex h-12 w-12 flex-col items-center justify-center rounded-lg border transition-all duration-300 ${
        active 
        ? 'bg-primary/20 border-primary shadow-[0_0_10px_rgba(0,255,65,0.3)]' 
        : 'bg-primary/5 border-primary/20 hover:bg-primary/15 hover:border-primary/40'
      }`}
    >
      <svg
        className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[
          { d: "M 0,15 L 0,0 L 15,0", delay: 0.5 },
          { d: "M 85,0 L 100,0 L 100,15", delay: 0.6 },
          { d: "M 0,85 L 0,100 L 15,100", delay: 0.7 },
          { d: "M 100,85 L 100,100 L 85,100", delay: 0.8 }
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isMenuOpen ? 1 : 0, 
              opacity: isMenuOpen ? 1 : 0,
              filter: isHovered ? "brightness(1.5)" : "brightness(1)"
            }}
            transition={{ 
              pathLength: { duration: 0.4, delay: path.delay },
              opacity: { duration: 0.2, delay: path.delay }
            }}
          />
        ))}
      </svg>

      <div className={`transition-colors relative z-10 ${active ? 'text-primary shadow-[0_0_5px_rgba(0,255,65,0.5)]' : 'text-primary/60 group-hover:text-primary'}`}>
        {icon}
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="absolute left-16 font-mono text-2xl text-primary bg-[#0a0f0a] border border-primary/30 px-3 py-1 rounded-sm pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(0,255,65,0.2)] z-[100] uppercase tracking-widest"
          >
            [ <GlitchText text={label} className="font-mono" /> ]
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
});

NavButton.displayName = 'NavButton';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const { type: bgType, toggleBackground } = useBackground();
  const [isSnakeConfirmOpen, setIsSnakeConfirmOpen] = useState(false);
  const [isSnakeGameOpen, setIsSnakeGameOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === 'pl' ? 'en' : 'pl');
  const handleSnakeClick = () => setIsSnakeConfirmOpen(true);
  const exitSnakeGame = () => setIsSnakeGameOpen(false);
  const handleExternalLink = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');
  
  const confirmSnakeNavigation = () => {
    setIsSnakeConfirmOpen(false);
    setIsSnakeGameOpen(true);
    setIsMobileMenuOpen(false);
  };

  const getBackgroundIcon = () => {
    if (bgType === 'ascii') return <Command className="h-6 w-6" strokeWidth={1.5} />;
    return <Boxes className="h-6 w-6" strokeWidth={1.5} />;
  };

  const isActive = (path: string) => location.pathname === path;

  const handleProjectsScroll = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeScroll = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  if (bgType === 'sticks') return null;

  return (
    <>
      {/* Desktop Menu Trigger */}
      <div className="fixed left-8 top-8 z-[110] hidden sm:block">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0f0a] border-2 border-primary/30 shadow-[0_0_15px_rgba(0,255,65,0.2)] text-primary hover:border-primary/60 hover:shadow-[0_0_25px_rgba(0,255,65,0.4)] transition-all duration-300 group"
        >
          <Power className={`h-6 w-6 transition-all duration-500 ${isMenuOpen ? 'rotate-180 text-primary' : 'animate-pulse text-primary/40'}`} />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-all duration-300 font-mono text-xl text-primary bg-[#0a0f0a] border border-primary/30 px-3 py-1 rounded-sm pointer-events-none whitespace-nowrap uppercase z-[120] translate-x-[-10px] group-hover:translate-x-0">
            [ <GlitchText text={isMenuOpen ? 'POWER OFF' : 'POWER ON'} className="font-mono" /> ]
          </span>
        </button>
      </div>

      {/* Desktop Sidebar Nav */}
      <nav className="fixed left-8 top-24 hidden flex-col gap-4 z-[100] sm:flex">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="desktop-sidebar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ 
                height: '2px', 
                opacity: [1, 1, 0],
                scaleX: [1, 1.2, 0],
                transition: { duration: 0.4, times: [0, 0.8, 1], ease: "easeInOut" }
              }}
              transition={{ duration: 0.4, ease: [0.45, 0.05, 0.55, 0.95] }}
              className="relative overflow-visible"
            >
              <div className="relative p-4 bg-[#0a0f0a]/95 rounded-lg border border-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4 px-2">
                  <NavButton onClick={handleHomeScroll} icon={<Home className="h-6 w-6" />} label="HOME" active={isActive('/')} isMenuOpen={isMenuOpen} />
                  <NavButton onClick={handleProjectsScroll} icon={<Briefcase className="h-6 w-6" />} label={t('projects')} isMenuOpen={isMenuOpen} />
                  <div className="h-px bg-primary/20 mx-2 w-full" />
                  <NavButton onClick={() => setIsTerminalOpen(true)} icon={<Terminal className="h-6 w-6" />} label="CONSOLE" active={isTerminalOpen} isMenuOpen={isMenuOpen} />
                  <NavButton onClick={toggleBackground} icon={
                    <motion.div key={bgType} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ type: "spring", damping: 12, stiffness: 200 }}>
                      {getBackgroundIcon()}
                    </motion.div>
                  } label={t('mode')} isMenuOpen={isMenuOpen} />
                  <NavButton onClick={toggleLanguage} icon={<span className="text-sm font-bold font-mono">{language === 'pl' ? 'PL' : 'EN'}</span>} label={t('lang')} isMenuOpen={isMenuOpen} />
                  <div className="h-px bg-primary/20 mx-2 w-full" />
                  <NavButton onClick={() => handleExternalLink(portfolioConfig.socials.github)} label={t('repo')} icon={<Github className="h-6 w-6" />} isMenuOpen={isMenuOpen} />
                  <div className="h-px bg-primary/20 mx-2 w-full" />
                  <NavButton onClick={handleSnakeClick} label={t('snake')} icon={<Worm className="h-6 w-6" />} active={isSnakeGameOpen} isMenuOpen={isMenuOpen} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="bg-primary/10 border border-primary/20 rounded-md px-2 py-1 flex items-center gap-2 self-center">
              <Activity className="h-3 w-3 text-primary animate-pulse" />
              <span className="text-[8px] font-mono text-primary/60 tracking-widest">NAV_READY</span>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Header */}
      <nav className="fixed inset-x-5 top-5 flex items-center justify-between gap-3 rounded-xl border-2 border-primary/30 bg-[#0a0f0a] p-2 sm:hidden z-[100] overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.1)]">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />
        </div>
        <div className="relative z-10 flex gap-2">
          <button onClick={handleHomeScroll} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10 transition-colors"><Home className="h-5 w-5" /></button>
          <button onClick={handleProjectsScroll} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10 transition-colors"><Briefcase className="h-5 w-5" /></button>
        </div>
        <div className="relative z-10 font-mono text-primary text-lg tracking-widest uppercase">VAULT_OS</div>
        <div className="relative z-10 flex gap-2">
          <button onClick={() => setIsTerminalOpen(true)} className="p-2 border border-primary/20 rounded text-primary hover:bg-primary/10 transition-colors"><Terminal className="h-5 w-5" /></button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 border-2 border-primary/40 rounded bg-primary/10 text-primary animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.2)]"
          >
            <Power className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[1000] bg-[#030712] flex flex-col p-8 sm:hidden overflow-hidden"
          >
            {/* CRT Screen Overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-center mb-12 border-b-2 border-primary/20 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-primary/40 uppercase tracking-widest">System_Access</span>
                <h2 className="font-mono text-2xl text-primary uppercase">Menu_Interface</h2>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary/10 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Menu Links */}
            <div className="relative z-10 flex-1 flex flex-col gap-6">
              <button 
                onClick={handleHomeScroll}
                className="flex items-center gap-6 p-4 border border-primary/10 bg-primary/5 rounded-lg text-primary text-xl font-mono uppercase transition-all active:bg-primary active:text-black"
              >
                <Home className="w-6 h-6" />
                <span>{t('home')}</span>
              </button>

              <button 
                onClick={handleProjectsScroll}
                className="flex items-center gap-6 p-4 border border-primary/10 bg-primary/5 rounded-lg text-primary text-xl font-mono uppercase transition-all active:bg-primary active:text-black"
              >
                <Briefcase className="w-6 h-6" />
                <span>{t('projects')}</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={toggleBackground}
                  className="flex flex-col items-center gap-3 p-6 border border-primary/10 bg-primary/5 rounded-lg text-primary font-mono uppercase transition-all active:bg-primary active:text-black"
                >
                  {getBackgroundIcon()}
                  <span className="text-xs">{t('mode')}</span>
                </button>

                <button 
                  onClick={toggleLanguage}
                  className="flex flex-col items-center gap-3 p-6 border border-primary/10 bg-primary/5 rounded-lg text-primary font-mono uppercase transition-all active:bg-primary active:text-black"
                >
                  <Languages className="w-6 h-6" />
                  <span className="text-xs">{language.toUpperCase()}</span>
                </button>
              </div>

              <button 
                onClick={handleSnakeClick}
                className="flex items-center justify-center gap-4 p-6 border-2 border-primary/20 bg-primary/10 rounded-lg text-primary text-xl font-mono uppercase transition-all animate-pulse"
              >
                <Worm className="w-6 h-6" />
                <span>{t('snake')}</span>
              </button>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-auto pt-8 border-t border-primary/10 flex flex-col gap-2 items-center opacity-40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Ref: CZERWINSKI_D // v4.0.2</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[8px] uppercase tracking-widest text-primary">Uplink_Active</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TerminalDialog isOpen={isSnakeConfirmOpen} onClose={() => setIsSnakeConfirmOpen(false)} onConfirm={confirmSnakeNavigation} title={t('snake')} message={t('confirm_snake')} confirmText="CONFIRM" cancelText="CANCEL" />
      <AnimatePresence>{isSnakeGameOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, pointerEvents: 'none' }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 pointer-events-auto"><SnakeGame isOpen={isSnakeGameOpen} onExit={exitSnakeGame} /></motion.div>}</AnimatePresence>
      <AnimatePresence>{isTerminalOpen && <TerminalConsole isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />}</AnimatePresence>
    </>
  );
};