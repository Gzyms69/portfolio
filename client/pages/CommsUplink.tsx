import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Terminal as TerminalIcon } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { ContactForm } from "@/components/ContactForm";
import { SectionPowerUp } from "@/components/SectionPowerUp";
import { GlitchText } from "@/components/GlitchText";
import { useLanguage } from "@/hooks/use-language";
import { portfolioConfig } from "@/lib/terminal-db";
import { TypewriterText } from "@/components/TypewriterText";

export default function Contact({ isDossier = false }: { isDossier?: boolean }) {
  const { language, t } = useLanguage();
  const content = portfolioConfig[language];

  if (isDossier) {
    return (
      <div className="h-full flex flex-col items-center justify-center max-w-2xl mx-auto py-10">
        <div className="w-full bg-[#0a0f0a] border-2 border-primary/20 p-8 rounded-lg shadow-[inset_0_0_30px_rgba(0,255,65,0.05)]">
          <ContactForm />
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#030712] text-primary font-mono">
        <Navigation />

        <main className="flex w-full justify-center px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="w-full max-w-[90rem] py-8 sm:py-16 md:py-24 lg:py-32">
            
            {/* Header Section */}
            <SectionPowerUp>
              <div className="relative group w-full mb-20 max-w-4xl mx-auto">
                <div className="relative z-10 bg-[#0a0f0a] border-2 border-primary/30 p-8 sm:p-10 md:p-14 rounded-xl shadow-[0_0_20px_rgba(0,255,65,0.1)] overflow-hidden">
                  <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary m-2" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary m-2" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary m-2" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary m-2" />

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 border-b border-primary/10 pb-6 text-center">
                      <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-primary/40 uppercase tracking-widest mb-2">
                        <TerminalIcon className="h-3 w-3" />
                        <span>{t('contact_system')} // v4.0.2</span>
                      </div>
                      <GlitchText
                        text={t('send_message')}
                        className="text-4xl font-bold font-mono text-primary sm:text-5xl md:text-6xl leading-none uppercase tracking-tight"
                      />
                    </div>

                    <div className="text-center max-w-2xl mx-auto min-h-[2em]">
                      <TypewriterText 
                        text={`Establishing encrypted uplink to terminal: ${content.name.split(' ')[0].toUpperCase()}`}
                        className="font-mono text-xl text-primary/60 leading-relaxed uppercase"
                        speed={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SectionPowerUp>

            <div className="max-w-2xl mx-auto">
              <SectionPowerUp>
                <div className="bg-[#0a0f0a] border border-primary/20 p-8 rounded-xl shadow-[inset_0_0_20px_rgba(0,255,65,0.05)] relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
                  
                  <div className="relative z-10">
                    <ContactForm />
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary/10 flex justify-between items-center opacity-40">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] uppercase tracking-[0.2em]">Ready_To_Send</span>
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.2em]">Encryption: AES-256</span>
                  </div>
                </div>
              </SectionPowerUp>
            </div>

            <Footer />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}