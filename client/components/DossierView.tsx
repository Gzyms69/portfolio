import React, { useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { useBackground } from '@/hooks/use-background';
import { GlitchText } from './GlitchText';
import { FileText, User, Briefcase, Mail, Power, Languages } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

interface DossierViewProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

export const DossierView: React.FC<DossierViewProps> = ({ activeTab, onTabChange, children }) => {
  const { t, language, setLanguage } = useLanguage();
  const { toggleViewMode } = useBackground();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // 3D rotation applied ONLY to the outer frame
  const rotateX = useTransform(springY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const tabs = [
    { id: 'home', label: t('dossier_personnel'), icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: t('dossier_assignments'), icon: <Briefcase className="w-4 h-4" /> },
    { id: 'cv', label: t('dossier_service'), icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: t('dossier_comms'), icon: <Mail className="w-4 h-4" /> },
  ];

  const toggleLanguage = () => setLanguage(language === 'pl' ? 'en' : 'pl');

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-1 sm:p-4 md:p-8 pointer-events-none perspective-2000">
      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[90rem] h-[98%] sm:h-full max-h-[98vh] sm:max-h-[90vh] bg-[#1a1a1a] border-2 sm:border-4 border-[#2a2a2a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm pointer-events-auto flex flex-col"
      >
        {/* Banner */}
        <div className="h-6 w-full bg-red-600 flex items-center justify-center relative overflow-hidden shrink-0">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply" />
          <span className="font-mono text-[10px] text-white font-bold tracking-[0.5em] animate-pulse z-10">
            [ CLASSIFIED // OVERSEER_ONLY ]
          </span>
        </div>

        {/* Header */}
        <div className="bg-[#2a2a2a] p-2 sm:p-4 flex justify-between items-center border-b-2 border-primary/20 shrink-0">
          <div className="flex items-center gap-2 sm:gap-4">
            <Magnetic strength={0.3}>
              <button onClick={toggleViewMode} className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/20 transition-colors text-primary"><Power className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button onClick={toggleLanguage} className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/20 transition-colors text-primary font-mono text-xs"><Languages className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </Magnetic>
            <div className="flex flex-col">
              <h1 className="font-mono text-xs sm:text-2xl text-primary leading-none uppercase">Vault-Tec_OS</h1>
              <span className="text-[7px] sm:text-[10px] font-mono text-red-500 uppercase font-bold tracking-tighter">Access: {language.toUpperCase()}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-primary/60 text-sm">
            <div className="flex flex-col items-end">
              <span>LOC: SECTOR_7G</span>
              <span>REF: CZERWINSKI_D</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden bg-[#0d0d0d]">
          {/* Tabs */}
          <div className="w-10 sm:w-20 bg-[#141414] border-r-2 border-[#2a2a2a] flex flex-col gap-1 sm:gap-2 pt-4 sm:pt-8 items-center shrink-0 z-20">
            {tabs.map((tab) => (
              <Magnetic key={tab.id} strength={0.2} className="w-8 h-8 sm:w-12 sm:h-12">
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`w-full h-full flex items-center justify-center rounded-sm transition-all ${activeTab === tab.id ? 'bg-primary text-black' : 'text-primary/40 hover:text-primary'}`}
                >
                  {tab.icon}
                </button>
              </Magnetic>
            ))}
          </div>

          {/* Content - Purely 2D to avoid rendering artifacts */}
          <div className="flex-1 relative bg-[#0d0d0d] overflow-hidden flex flex-col p-3 sm:p-6 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1 overflow-y-auto overflow-x-hidden touch-pan-y scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent pr-2"
              >
                <div className="mb-8 border-b border-primary/10 pb-4 sticky top-0 bg-[#0d0d0d] z-30">
                  <span className="text-[10px] font-mono text-primary/30 uppercase tracking-[0.4em]">{t('dossier_id')}</span>
                  <h2 className="text-primary text-2xl sm:text-5xl font-mono uppercase tracking-tight">
                    <GlitchText text={tabs.find(t => t.id === activeTab)?.label || ''} />
                  </h2>
                </div>
                <div className="pb-20 relative z-10">
                  {children}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#141414] border-t-2 border-[#2a2a2a] px-3 sm:px-6 py-1 sm:py-2 flex justify-between items-center shrink-0">
          <div className="flex gap-3 sm:gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[7px] sm:text-xs text-primary/40 uppercase tracking-widest">Uplink_Active</span>
            </div>
            <div className="hidden md:block font-mono text-xs text-primary/20 uppercase tracking-widest">
              Memory: 640KB_REMAINING
            </div>
          </div>
          <div className="flex gap-4 items-center">
             <span className="font-mono text-[7px] sm:text-xs text-primary/40 uppercase tracking-widest">VAULT-101</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
