import { useState, useEffect, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = "!<>-_\/[]{}—=+*^?#________";

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return text[index];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 4; // Slower reveal
    }, 40); // Slightly slower interval
  }, [text]);

  useEffect(() => {
    scramble();
  }, [scramble]);

  return (
    <span 
      className={`relative inline-block cursor-default group ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Main Text + 2. Subtle Noise Filter */}
      <span className={`relative z-10 block ${className} ${isHovered ? 'animate-noise opacity-90' : ''}`}>
        {displayText}
      </span>
      
      {isHovered && (
        <>
          {/* 3. RGB Split Layers - More transparent and smaller offsets */}
          <span className={`absolute left-0 top-0 -z-10 w-full text-red-500/20 animate-glitch-1 ${className}`}>
            {displayText}
          </span>
          <span className={`absolute left-0 top-0 -z-20 w-full text-cyan-500/20 animate-glitch-2 ${className}`}>
            {displayText}
          </span>

          {/* 4. Scanline Slices - Much smaller horizontal displacement */}
          <span className={`absolute left-0 top-0 z-20 w-full animate-slice-1 ${className} opacity-30 clip-slice-1`}>
            {displayText}
          </span>
          <span className={`absolute left-0 top-0 z-20 w-full animate-slice-2 ${className} opacity-30 clip-slice-2`}>
            {displayText}
          </span>
        </>
      )}

      {/* SVG Noise Filter Definition - Finer grain */}
      <svg className="fixed h-0 w-0 pointer-events-none">
        <filter id="grainyNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feComposite operator="in" in="noise" in2="SourceGraphic" />
        </filter>
      </svg>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-noise {
          filter: url(#grainyNoise);
        }

        .clip-slice-1 { clip-path: inset(25% 0 45% 0); }
        .clip-slice-2 { clip-path: inset(60% 0 20% 0); }

        .animate-glitch-1 { animation: glitch-anim-1 0.4s infinite linear alternate-reverse; }
        .animate-glitch-2 { animation: glitch-anim-2 0.4s infinite linear alternate-reverse; }
        .animate-slice-1 { animation: slice-anim-1 0.6s infinite steps(2); }
        .animate-slice-2 { animation: slice-anim-2 0.6s infinite steps(2) reverse; }

        @keyframes glitch-anim-1 {
          0% { transform: translate(1px, -0.5px); }
          100% { transform: translate(-1px, 0.5px); }
        }
        @keyframes glitch-anim-2 {
          0% { transform: translate(-1px, 0.5px); }
          100% { transform: translate(1px, -0.5px); }
        }
        @keyframes slice-anim-1 {
          0% { transform: translateX(-2%); }
          100% { transform: translateX(2%); }
        }
        @keyframes slice-anim-2 {
          0% { transform: translateX(1.5%); }
          100% { transform: translateX(-1.5%); }
        }
      `}} />
    </span>
  );
};