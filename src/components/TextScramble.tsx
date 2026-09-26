import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  trigger?: 'hover' | 'mount';
}

export default function TextScramble({ text, className = '', duration = 1500, trigger = 'mount' }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const frameRef = useRef<number>(0);

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const result = text.split('').map((char, i) => {
        if (char === ' ') return ' ';
        const charProgress = i / text.length;
        if (progress > charProgress + 0.3) return char;
        if (progress > charProgress) return CHARS[Math.floor(Math.random() * CHARS.length)];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      
      setDisplay(result);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
        setIsAnimating(false);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (trigger === 'mount') {
      scramble();
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <span 
      className={`inline-block ${className}`}
      onMouseEnter={() => trigger === 'hover' && scramble()}
      style={{ fontFamily: 'inherit' }}
    >
      {display}
    </span>
  );
}
