import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DocumentRevealProps {
  title: string;
  content: string | string[];
}

const RedactedText = ({ length }: { length: number }) => (
  <motion.span 
    animate={{ 
      opacity: [1, 0.8, 1, 0.5, 1],
      x: [0, 1, -1, 0]
    }}
    transition={{ repeat: Infinity, duration: 2, times: [0, 0.1, 0.2, 0.3, 1] }}
    className="inline-block bg-primary/20 text-transparent select-none mx-1 leading-none rounded-sm border-b-[0.5px] border-primary/40"
    style={{ width: `${length}ch` }}
  >
    XXXXX
  </motion.span>
);

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayed}</span>;
};

export const DocumentReveal: React.FC<DocumentRevealProps> = ({ title, content }) => {
  const [decryptionProgress, setDecryptionProgress] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  // Simulate decryption before opening
  useEffect(() => {
    const timer = setInterval(() => {
      setDecryptionProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsOpened(true), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto py-10" style={{ perspective: '1200px' }}>
      <AnimatePresence>
        {!isOpened ? (
          /* 1. Closed Folder / Loading State */
          <motion.div
            key="closed"
            exit={{ rotateY: -110, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
            className="w-full h-64 bg-[#1a1a1a] border border-primary/20 rounded-sm shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8 origin-left"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Grainy Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] contrast-200 invert" />
            
            <div className="text-red-600 font-bold text-2xl border-4 border-red-600 px-4 py-2 rotate-12 mb-8 opacity-60">
              TOP SECRET
            </div>
            
            <div className="w-full space-y-2">
              <div className="flex justify-between text-[10px] text-primary/40 font-mono">
                <span>DECRYPTING_{title.toUpperCase()}...</span>
                <span>{decryptionProgress}%</span>
              </div>
              <div className="w-full h-1 bg-primary/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary/40"
                  animate={{ width: `${decryptionProgress}%` }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          /* 2. Revealed Document */
          <motion.div
            key="revealed"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-[#0d0d0d] border border-primary/30 rounded-sm shadow-[0_0_40px_rgba(0,255,65,0.1)] p-8 font-['VT323'] origin-left"
          >
            <div className="flex justify-between items-start mb-6 border-b border-primary/10 pb-4">
              <div>
                <h2 className="text-primary text-3xl leading-none uppercase">{title}</h2>
                <span className="text-[10px] text-primary/30 font-mono tracking-[0.3em]">REF_ID: VAULT-TEC-2112</span>
              </div>
              <div className="text-red-600/40 font-bold text-sm border-2 border-red-600/40 px-2 py-1 rotate-12">
                DECODED
              </div>
            </div>

            <div className="text-primary/80 text-xl leading-relaxed space-y-4">
              {Array.isArray(content) ? (
                content.map((line, i) => (
                  <p key={i}>
                    <TypewriterText text={line} delay={i * 500 + 800} />
                    {i === 0 && <RedactedText length={8} />}
                  </p>
                ))
              ) : (
                <p>
                  <TypewriterText text={content} delay={800} />
                  <RedactedText length={12} />
                </p>
              )}
            </div>

            {/* Bottom mechanical details */}
            <div className="mt-10 pt-4 border-t border-primary/10 flex justify-between items-end opacity-20">
              <div className="text-[8px] font-mono uppercase space-y-1">
                <div>Source: encrypted_uplink</div>
                <div>Status: verified_access</div>
              </div>
              <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center font-bold text-xs">
                V
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
