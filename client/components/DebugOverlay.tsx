import React, { useState, useEffect } from 'react';
import { debuggerInstance } from '@/lib/debug-utils';

export const DebugOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Keyboard shortcut to toggle debug: Ctrl + Shift + D
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setIsVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return (
    <button 
      onClick={() => debuggerInstance.dumpToText()}
      className="fixed bottom-2 left-2 z-[99999] opacity-10 hover:opacity-100 bg-red-900 text-[8px] text-white p-1 font-mono uppercase"
    >
      [ LOG_DUMP ]
    </button>
  );

  return (
    <div className="fixed top-0 right-0 z-[99999] bg-black/90 border-l border-red-500 w-80 h-full p-4 font-mono text-[10px] text-red-400 overflow-hidden flex flex-col shadow-2xl">
      <div className="flex justify-between items-center mb-4 border-b border-red-900 pb-2">
        <span className="font-bold tracking-widest">SYSTEM_DIAGNOSTICS</span>
        <button onClick={() => setIsVisible(false)} className="text-white hover:text-red-500">[X]</button>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-1 opacity-80">
        <pre className="whitespace-pre-wrap">
          {debuggerInstance.getLogs().split('\n').slice(-20).join('\n')}
        </pre>
      </div>

      <div className="space-y-2">
        <button 
          onClick={() => debuggerInstance.dumpToText()}
          className="w-full bg-red-600 hover:bg-red-500 text-black font-bold py-2 uppercase"
        >
          GENERATE_FULL_DUMP.TXT
        </button>
        <p className="text-[8px] text-red-900">
          Capture state for AI analysis. Dump includes console logs, errors, and lifecycle events.
        </p>
      </div>
    </div>
  );
};
