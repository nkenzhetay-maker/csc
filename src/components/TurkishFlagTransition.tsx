import { useEffect, useRef, useState } from 'react';

export default function TurkishFlagTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full overflow-hidden transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Soft gradient top edge - smooth transition from Services */}
      <div className="h-8 bg-gradient-to-b from-[#F4F7FC] to-white" />

      {/* Main banner */}
      <div className="relative bg-white py-6 md:py-8">
        {/* Subtle top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0D8E4] to-transparent" />

        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Animated flag */}
          <div className="relative w-[90px] h-[60px] md:w-[120px] md:h-[80px] flex-shrink-0">
            {/* Flag background with wave */}
            <svg viewBox="0 0 120 80" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <clipPath id="flagClip">
                  <path d="M0,8 Q30,0 60,8 T120,8 L120,72 Q90,80 60,72 T0,72 Z" />
                </clipPath>
              </defs>
              {/* Red background */}
              <rect x="0" y="0" width="120" height="80" fill="#E63946" clipPath="url(#flagClip)" />
              {/* Crescent */}
              <circle cx="50" cy="40" r="18" fill="white" clipPath="url(#flagClip)" />
              <circle cx="55" cy="40" r="15" fill="#E63946" clipPath="url(#flagClip)" />
              {/* Star */}
              <polygon
                points="72,32 74,38 80,38 75,42 77,48 72,44 67,48 69,42 64,38 70,38"
                fill="white"
                clipPath="url(#flagClip)"
              />
            </svg>

            {/* Gentle float animation */}
            <style>{`
              @keyframes flagFloat {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-3px) rotate(0.5deg); }
              }
            `}</style>
            <div
              className="absolute inset-0"
              style={{ animation: 'flagFloat 4s ease-in-out infinite' }}
            >
              <svg viewBox="0 0 120 80" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <clipPath id="flagClip2">
                    <path d="M0,8 Q30,0 60,8 T120,8 L120,72 Q90,80 60,72 T0,72 Z" />
                  </clipPath>
                </defs>
                <rect x="0" y="0" width="120" height="80" fill="#E63946" clipPath="url(#flagClip2)" opacity="0.3" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <p className="font-body text-[13px] md:text-[15px] text-[#5A6A7E] tracking-wide">
              <span className="text-[#0A5C8E] font-semibold">MADE IN TÜRKİYE</span>
              <span className="mx-2 text-[#D0D8E4]">•</span>
              <span className="text-[#5A6A7E]">GDP Compliant Pharmaceutical Export</span>
            </p>
          </div>

          {/* Small icon */}
          <div className="hidden md:flex items-center gap-2 text-[#0A5C8E]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-mono text-[11px] text-[#5A6A7E]">2-8°C Cold Chain</span>
          </div>
        </div>

        {/* Subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D0D8E4] to-transparent" />
      </div>

      {/* Soft gradient bottom edge - smooth transition to Stats */}
      <div className="h-8 bg-gradient-to-b from-white to-[#F4F7FC]" />
    </div>
  );
}
