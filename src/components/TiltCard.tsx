import { useRef, type ReactNode, type CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  tiltAmount?: number;
  glowColor?: string;
}

export default function TiltCard({ children, className = '', style, tiltAmount = 8, glowColor = '#0A5C8E' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Glow effect on the edge closest to mouse
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, ${glowColor}08 0%, transparent 60%), white`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.background = 'white';
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
