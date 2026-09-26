import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../contexts/LanguageContext';

interface Particle {
  x: number; y: number; vx: number; vy: number; radius: number; baseAlpha: number;
}

export default function HeroSection() {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);

  /* Particle Network Background */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;
    const connectionDist = 150;
    const mouseRadius = 100;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1, baseAlpha: Math.random() * 0.25 + 0.1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = dist < mouseRadius;
        ctx.beginPath();
        ctx.arc(p.x, p.y, isNearMouse ? 5 : p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? 'rgba(44,156,212,0.9)' : `rgba(44,156,212,${p.baseAlpha})`;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < connectionDist) {
            const alpha = (1 - d / connectionDist) * 0.2;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(44,156,212,${alpha})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] bg-[#0A5C8E] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover z-0 opacity-35" autoPlay muted loop playsInline preload="metadata">
        <source src="/video-hero.mp4" type="video/mp4" />
      </video>

      {/* CSC Logo Overlay on Video — covers any incorrect logo in the video */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-end justify-end p-[8%] pb-[18%]">
        <img
          src="/logo-csc-glow.png"
          alt="CSC"
          className="h-14 md:h-20 w-auto opacity-50 drop-shadow-[0_0_30px_rgba(44,156,212,0.5)] mix-blend-screen"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A5C8E]/55 via-[#0A5C8E]/35 to-[#0A5C8E]/65 z-[1]" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2]" />

      {/* GDP Badge */}
      <div className="absolute top-24 right-6 md:right-10 z-[4] animate-float">
        <span className="bg-[#00A86B] text-white font-mono text-xs px-4 py-2 rounded-md shadow-[0_4px_12px_rgba(0,168,107,0.3)]">GDP COMPLIANT</span>
      </div>

      {/* Temperature */}
      <div className="absolute bottom-8 left-6 md:left-10 z-[4] flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#64B5F6] animate-pulse-dot" />
        <span className="font-mono text-xs text-white/50">2-8°C | Cold Chain</span>
      </div>

      {/* Main Content — ALWAYS VISIBLE with CSS animation */}
      <div className="relative z-[3] text-center px-5 max-w-[900px] mx-auto">
        {/* CSC Logo */}
        <div 
          className="mb-8 flex justify-center"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
        >
          <img 
            src="/logo-csc-white.png" 
            alt="CSC" 
            className="h-20 md:h-28 w-auto drop-shadow-[0_0_40px_rgba(44,156,212,0.6)] animate-[float_4s_ease-in-out_infinite]"
          />
        </div>

        <h1 
          className="font-display font-bold text-white leading-[1.05] drop-shadow-lg"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)', animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          {t('hero.title')}
        </h1>
        <p 
          className="font-body text-lg text-white/80 leading-relaxed mt-6 max-w-[640px] mx-auto drop-shadow"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
        >
          {t('hero.subtitle')}
        </p>
        <div 
          className="flex flex-wrap gap-4 justify-center mt-10"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
        >
          <Link to="/hizmetler" className="bg-[#00A86B] text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#008F5B] hover:scale-[1.02] transition-all duration-200 shadow-lg">
            {t('hero.cta')}
          </Link>
          <Link to="/iletisim" className="border-2 border-white/40 text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-200">
            {t('hero.cta2')}
          </Link>
        </div>

        {/* Trust badge under CTA */}
        <div 
          className="flex items-center justify-center gap-6 mt-8 text-white/50 text-sm font-body"
          style={{ animation: 'fadeInUp 0.8s ease-out 1.0s both' }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" /> 5.000+ Eczane
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" /> GDP Uyumlu
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B]" /> 2-8°C Soğuk Zincir
          </span>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
        <div className="w-px h-8 bg-white/30 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/50 animate-scroll-cue" />
        </div>
        <span className="font-mono text-[11px] text-white/30 tracking-[2px]">{t('hero.scroll')}</span>
      </div>
    </section>
  );
}
