import React from 'react';

export const CRTOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
      {/* 1. Fine SVG Shadow Mask (Phosphor Pattern) */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <pattern id="crt-shadow-mask" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="rgba(0, 255, 65, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crt-shadow-mask)" />
      </svg>

      {/* 2. Professional Scanlines (Fixed 3px pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5) 0px,
            rgba(0, 0, 0, 0.5) 1px,
            transparent 1px,
            transparent 3px
          )`,
        }}
      />

      {/* 3. High-Fidelity Signal Flicker */}
      <div 
        className="absolute inset-0 bg-white/5 pointer-events-none"
        style={{
          animation: 'crt-flicker 0.1s infinite alternate',
        }}
      />

      {/* 4. Deep Hardware Vignette - Softened for visibility */}
      <div className="absolute inset-0 shadow-[inset_0_0_10vw_rgba(0,0,0,0.4)]" />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* 5. Ambient Refresh Line (Moving down the screen) */}
      <div 
        className="absolute left-0 right-0 h-[10vh] bg-primary/[0.02] z-10"
        style={{
          animation: 'scanline-roll 8s linear infinite',
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes crt-flicker {
          0%, 100% { opacity: 0.01; }
          50% { opacity: 0.02; }
          75% { opacity: 0.015; }
        }
        @keyframes scanline-roll {
          from { top: -10vh; }
          to { top: 110vh; }
        }
      `}} />
    </div>
  );
};
