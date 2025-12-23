import { portfolioConfig } from "@/lib/terminal-db";
import { Terminal, Shield } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

import { useBackground } from "@/hooks/use-background";

export const Footer = () => {
  const { language } = useLanguage();
  const { type } = useBackground();

  if (type === 'sticks') return null;

  return (
    <footer className="relative mt-40 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto border-t-2 border-primary/20 pt-10 flex flex-col items-center gap-8 group">
        
        {/* Decorative Technical Row */}
        <div className="flex w-full justify-between items-center text-[10px] font-mono text-primary/30 uppercase tracking-[0.3em] overflow-hidden">
          <div className="flex items-center gap-4 shrink-0">
            <div className="h-px w-20 bg-primary/20" />
            <span>Connection_Secure</span>
          </div>
          <div className="px-4 flex items-center gap-2 text-primary/50 group-hover:text-primary transition-colors duration-500">
             <Terminal className="h-3 w-3" />
             <span className="font-['Major_Mono_Display'] text-sm tracking-normal capitalize">portfolio_access_granted</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span>Kernel_v1.0.4</span>
            <div className="h-px w-20 bg-primary/20" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-['Major_Mono_Display'] text-xl text-primary/60 hover:text-primary transition-colors duration-300 lowercase">
            © {new Date().getFullYear()} // {portfolioConfig[language].name.toLowerCase()}
          </p>
          <div className="flex items-center gap-4 text-primary/30 text-[9px] font-mono tracking-widest">
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>VAULT-TEC_ENCRYPTION_ACTIVE</span>
            </div>
            <span className="hidden sm:block">|</span>
            <span className="hidden sm:block">LOCAL_TIME: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>

        {/* CRT Scanline effect footer bar */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0a0f0a] border-t border-primary/20 overflow-hidden opacity-50">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px]" />
        </div>
      </div>
    </footer>
  );
};