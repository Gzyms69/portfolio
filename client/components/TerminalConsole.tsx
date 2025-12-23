import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { FalloutTerminalParser } from "@/lib/terminal-logic";
import { DocumentReveal } from "./DocumentReveal";

interface TerminalConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'system';
}

export const TerminalConsole = ({ isOpen, onClose }: TerminalConsoleProps) => {
  const { language } = useLanguage();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [selectedFile, setSelectedFile] = useState<{name: string, content: string | string[]} | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();
  
  const parser = useMemo(() => new FalloutTerminalParser(language as 'en' | 'pl'), [language]);

  const backToTerminal = () => {
    setSelectedFile(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const bootSequence = useCallback(() => {
    setIsBooting(true);
    setHistory([]);
    const lines = [
      "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
      "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
      "- SERVER 6 -",
      "",
      "BIOS Version 4.02.21",
      "Memory Check: 640KB OK",
      "Loading Kernel...",
      "System Ready.",
      ""
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < lines.length) {
        setHistory(prev => [...prev, { text: lines[i], type: 'system' }]);
        i++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      bootSequence();
    } else {
      setHistory([]);
      setSelectedFile(null);
    }
  }, [isOpen, bootSequence]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, selectedFile]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isBooting) return;

    const currentInput = input.trim();
    setHistory(prev => [...prev, { text: `> ${currentInput}`, type: 'input' }]);
    
    const response = parser.parse(currentInput);
    
    if (currentInput.toLowerCase() === 'clear' || currentInput.toLowerCase() === 'wyczysc') {
      setHistory([]);
    } else if (currentInput.toLowerCase() === 'exit' || currentInput.toLowerCase() === 'wyjdz') {
      onClose();
    } else if (typeof response === 'object' && !Array.isArray(response) && response.type === 'open_file') {
      setHistory(prev => [...prev, { text: `DECRYPTING ${response.file.name}...`, type: 'system' }]);
      setTimeout(() => {
        setSelectedFile({
          name: response.file.name,
          content: response.file.content || ''
        });
      }, 500);
    } else {
      if (Array.isArray(response)) {
        setHistory(prev => [...prev, ...response.map(text => ({ text, type: 'output' as const }))]);
      } else {
        setHistory(prev => [...prev, { text: response as string, type: 'output' }]);
      }
    }

    setInput("");
  };

  const handleKeyDown = () => {
    if (isBooting) return;
    
    // BETTER KEYSTROKE JOLT: Pure position shift, no filters
    const intensity = 3;
    const x = (Math.random() - 0.5) * intensity;
    const y = (Math.random() - 0.5) * intensity;
    
    controls.start({
      x: [0, x, 0],
      y: [0, y, 0],
      transition: { duration: 0.05, ease: "linear" }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[250] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        animate={controls}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-3xl h-[80vh] bg-[#030712] border-4 border-primary/30 rounded-xl shadow-[0_0_50px_rgba(0,255,65,0.2)] flex flex-col overflow-hidden"
      >
        {/* Local CRT Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b-2 border-primary/20 bg-[#0a0f0a] px-6 py-3">
          <div className="flex items-center gap-3">
            <TerminalIcon className="h-5 w-5 text-primary" />
            <span className="font-['VT323'] text-xl text-primary uppercase tracking-[0.2em]">ROBCO_TERMINAL_v4.0</span>
          </div>
          <button onClick={onClose} className="text-primary/50 hover:text-primary transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="relative z-10 flex-1 overflow-y-auto p-6 font-['VT323'] text-xl text-primary scrollbar-hide"
          onClick={() => !selectedFile && inputRef.current?.focus()}
        >
          <AnimatePresence mode="wait">
            {selectedFile ? (
              <motion.div
                key="file-viewer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full flex flex-col items-center"
              >
                <button 
                  onClick={backToTerminal}
                  className="self-start mb-4 px-3 py-1 bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary text-sm uppercase transition-all rounded"
                >
                  {language === 'en' ? '[ BACK_TO_CONSOLE ]' : '[ POWROT_DO_KONSOLI ]'}
                </button>
                <DocumentReveal title={selectedFile.name} content={selectedFile.content} />
              </motion.div>
            ) : (
              <div className="flex flex-col gap-1">
                {history.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className={`${
                      line.type === 'input' ? 'text-primary font-bold' : 
                      line.type === 'system' ? 'text-primary/40 text-lg' : 
                      'text-primary/80'
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
                
                {!isBooting && (
                  <form onSubmit={handleCommand} className="flex gap-2 items-center">
                    <span className="text-primary font-bold">{'>'}</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent border-none outline-none text-primary caret-primary"
                      autoFocus
                    />
                  </form>
                )}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-primary/10 bg-[#0a0f0a] px-6 py-2 flex justify-between items-center">
          <span className="font-['VT323'] text-sm text-primary/30 uppercase tracking-widest">
            {isBooting ? "INITIALIZING..." : "SYSTEM_IDLE"}
          </span>
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(0,255,65,1)]" />
        </div>
      </motion.div>
    </motion.div>
  );
};
