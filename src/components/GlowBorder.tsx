import { type ReactNode } from 'react';

interface GlowBorderProps {
  children: ReactNode;
  color?: string;
  className?: string;
  pulse?: boolean;
}

export default function GlowBorder({ children, color = '#0A5C8E', className = '', pulse = true }: GlowBorderProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated border */}
      <div 
        className="absolute -inset-[1px] rounded-[17px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(90deg, ${color}00, ${color}60, ${color}00)`,
          backgroundSize: '200% 100%',
          animation: pulse ? 'border-glow 3s linear infinite' : 'none',
        }}
      />
      {/* Content */}
      <div className="relative bg-white border border-[#D0D8E4] group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-300">
        {children}
      </div>
    </div>
  );
}
