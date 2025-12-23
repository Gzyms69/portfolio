import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number; 
  delay?: number; 
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
}

export const TypewriterText = ({ 
  text, 
  speed = 30, 
  delay = 0, 
  className = "", 
  onComplete,
  cursor = true 
}: TypewriterTextProps) => {
  const [count, setCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset state asynchronously to avoid cascading renders
    const resetTimeout = setTimeout(() => {
      setCount(0);
      setIsTyping(false);
    }, 0);
    
    // Initial delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < text.length) {
            return prev + 1;
          }
          clearInterval(interval);
          setIsTyping(false);
          if (onComplete) onComplete();
          return prev;
        });
      }, speed);

      timerRef.current = interval;
    }, delay);

    return () => {
      clearTimeout(resetTimeout);
      clearTimeout(startTimeout);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed, delay, onComplete]);

  return (
    <span className={`font-mono inline-block ${className}`}>
      {text.slice(0, count)}
      {cursor && (isTyping || count === 0) && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-[0.6em] h-[1em] bg-primary ml-1 align-text-bottom"
        />
      )}
    </span>
  );
};