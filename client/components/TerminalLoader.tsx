import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface TerminalLoaderProps {
  onComplete: () => void;
}

export const TerminalLoader: React.FC<TerminalLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isFinishing, setIsFinishing] = useState(false);

  const systemMessages = useMemo(() => [
    "> INITIALIZING_VAULT_OS_v4.0.2...",
    "> PERFORMING_MEMORY_CHECK...",
    "> 640KB_RAM_DETECTED_-_OK",
    "> MOUNTING_LOCAL_DRIVES...",
    "> DRIVE_A:_BOOT_SECTOR_FOUND",
    "> LOAD_KERNEL_0x0021_SUCCESS",
    "> ESTABLISHING_ENCRYPTED_UPLINK...",
    "> SYNCING_GEOMETRIC_VECTORS...",
    "> LOADING_PHOSPHOR_SHADERS...",
    "> BRIGHTNESS_CHECK_NOMINAL",
    "> SYSTEM_INTEGRITY_VERIFIED",
    "> READY_FOR_OPERATOR_INPUT"
  ], []);

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < systemMessages.length) {
        setLogs(prev => [...prev, systemMessages[currentLog]]);
        currentLog++;
      } else {
        clearInterval(logInterval);
      }
    }, 140);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsFinishing(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 2; 
      });
    }, 70);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [systemMessages]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isFinishing ? {
        scaleY: [1, 0.005, 0.005, 0],
        scaleX: [1, 1, 0.01, 0],
        filter: ["brightness(1)", "brightness(2)", "brightness(20)", "brightness(0)"]
      } : { opacity: 1 }}
      transition={{ 
        duration: 0.25,
        times: [0, 0.3, 0.8, 1],
        ease: "circIn"
      }}
      onAnimationComplete={(definition) => {
        // Only trigger onComplete if the finishing animation just finished
        if (isFinishing) {
          onComplete();
        }
      }}
      className="fixed inset-0 bg-black z-[10000] flex flex-col p-8 font-['VT323'] text-primary overflow-hidden origin-center pointer-events-none"
    >
      <div className="flex-1 space-y-1 overflow-hidden opacity-80">
        {logs.map((log, i) => (
          <div key={i} className="text-xl md:text-2xl">
            {log}
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl mx-auto mb-12">
        <div className="flex justify-between mb-1 text-sm opacity-60 tracking-tighter">
          <span>SYSTEM_LOAD_SEQUENCE</span>
          <span>{progress}%</span>
        </div>
        <div className="relative w-full h-6 border-2 border-primary/40 p-1 flex items-center">
          <div className="flex w-full h-full gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 h-full transition-colors duration-100 ${
                  progress > (i * 5) ? 'bg-primary shadow-[0_0_10px_rgba(0,255,65,0.5)]' : 'bg-primary/5'
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
