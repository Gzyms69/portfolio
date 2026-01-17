import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const tabs = [
    { id: 'home', label: t('dossier_personnel'), icon: <User className="w-4 h-4" /> },
    { id: 'projects', label: t('dossier_assignments'), icon: <Briefcase className="w-4 h-4" /> },
    { id: 'cv', label: t('dossier_service'), icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', label: t('dossier_comms'), icon: <Mail className="w-4 h-4" /> },
  ];

  const toggleLanguage = () => setLanguage(language === 'pl' ? 'en' : 'pl');

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8 pointer-events-none">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-[#1a1a1a] border-4 border-[#2a2a2a] shadow-2xl rounded-sm overflow-hidden pointer-events-auto flex flex-col"
      >
        {/* Top Secret Red Banner */}
        <div className="h-6 w-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-multiply" />
          <span className="font-mono text-[10px] text-white font-bold tracking-[0.5em] animate-pulse relative z-10">
            [ CLASSIFIED_DOCUMENT // DO_NOT_DISTRIBUTE ]
          </span>
        </div>

        {/* 1. Metal Case Header with Theme Toggle */}
        <div className="bg-[#2a2a2a] p-4 flex justify-between items-center border-b-2 border-primary/20">
          <div className="flex items-center gap-4">
            <Magnetic strength={0.3}>
              <button 
                onClick={toggleViewMode}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/20 transition-colors group"
                title="EXIT_DOSSIER"
              >
                <Power className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </button>
            </Magnetic>
            
            <Magnetic strength={0.3}>
              <button 
                onClick={toggleLanguage}
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/30 hover:bg-primary/20 transition-colors group font-mono text-xs text-primary"
                title="LANGUAGE_SWITCH"
              >
                <Languages className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
              </button>
            </Magnetic>

            <div>
              <h1 className="font-mono text-2xl text-primary leading-none">VAULT-TEC_OS_v4.0</h1>
              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest text-xs font-bold">Security_Level: OVERSEER // {language.toUpperCase()}</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-8 font-mono text-primary/60 text-sm">
            <div className="flex flex-col items-end">
              <span>LOC: SECTOR_7G</span>
              <span>REF: CZERWINSKI_D</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* 2. Physical File Tabs (Side) */}
          <div className="w-16 sm:w-20 bg-[#141414] border-r-2 border-[#2a2a2a] flex flex-col gap-2 pt-8 items-center">
            {tabs.map((tab) => (
              <Magnetic key={tab.id} strength={0.2} className="w-12 h-12">
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={`group relative flex items-center justify-center w-full h-full rounded-sm transition-all duration-300 ${
                    activeTab === tab.id 
                    ? 'bg-primary text-black shadow-[0_0_15px_rgba(0,255,65,0.5)]' 
                    : 'text-primary/40 hover:text-primary/80 hover:bg-primary/5'
                  }`}
                >
                  {tab.icon}
                  <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    <div className="bg-[#0a0f0a] border border-primary/30 px-3 py-1 text-primary font-mono text-lg shadow-xl">
                      {tab.label}
                    </div>
                  </div>
                </button>
              </Magnetic>
            ))}
          </div>

          {/* 3. Main Content Area */}
          <div className="flex-1 relative bg-[#0d0d0d] overflow-hidden p-6 sm:p-12">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] contrast-200 invert" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${language}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full overflow-y-auto pr-4 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              >
                <div className="mb-8 border-b border-primary/10 pb-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono text-primary/30 uppercase tracking-[0.4em]">{t('dossier_id')}</span>
                    <h2 className="text-primary text-4xl sm:text-5xl font-mono uppercase tracking-tight">
                      <GlitchText text={tabs.find(t => t.id === activeTab)?.label || ''} />
                    </h2>
                  </div>
                  <div className="text-primary/20 font-mono text-[10px]">
                    {t('dossier_status')}: [{t('dossier_decrypted')}]
                  </div>
                </div>

                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4. Footer Status Bar */}
        <div className="bg-[#141414] border-t-2 border-[#2a2a2a] px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary/40 uppercase tracking-widest text-xs">Uplink_Active</span>
            </div>
            <div className="hidden sm:block font-mono text-xs text-primary/20 uppercase tracking-widest text-xs">
              Memory: 640KB_REMAINING
            </div>
          </div>
          <div className="flex gap-4 items-center">
             <span className="font-mono text-xs text-primary/40 uppercase tracking-widest text-xs">Terminal_ID: VAULT-101</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
