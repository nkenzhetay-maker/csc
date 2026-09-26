import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import { ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  numericValue: number;
  prefix: string;
  suffix: string;
  labelKey: string;
  detailKey: string;
  color: string;
}

const stats: StatItem[] = [
  { value: '5000+', numericValue: 5000, prefix: '', suffix: '+', labelKey: 'stats.pharmacies', detailKey: 'stats.pharmacies.detail', color: '#00A86B' },
  { value: '20+', numericValue: 20, prefix: '', suffix: '+', labelKey: 'stats.brands', detailKey: 'stats.brands.detail', color: '#00A86B' },
  { value: '2-8°C', numericValue: 0, prefix: '', suffix: '', labelKey: 'stats.temp', detailKey: 'stats.temp.detail', color: '#0A5C8E' },
  { value: '10+', numericValue: 10, prefix: '', suffix: '+', labelKey: 'stats.experience', detailKey: 'stats.experience.detail', color: '#00A86B' },
];

export default function StatsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [displayValues, setDisplayValues] = useState(['0', '0', '2-8°C', '0']);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Scope all GSAP work (including the pinned ScrollTrigger) to this section
    // so ctx.revert() can fully undo it on unmount. Pinning wraps the section in
    // a `.pin-spacer` element; without a proper revert, React later tries to
    // removeChild a node whose parent it no longer owns and crashes the whole
    // app (blank page on client-side navigation).
    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll('.stat-animate');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => (progress < 0.5 ? 0 : 1),
            duration: { min: 0.15, max: 0.35 },
            delay: 0,
            ease: 'power2.inOut',
          },
          onUpdate: (self) => {
            const progress = self.progress;
            // Counter animations 0-30%
            if (progress <= 0.3) {
              const p = progress / 0.3;
              setDisplayValues([
                Math.floor(5000 * p).toString(),
                Math.floor(20 * p).toString(),
                '2-8°C',
                Math.floor(10 * p).toString(),
              ]);
            } else {
              setDisplayValues(['5000', '20', '2-8°C', '10']);
            }
          },
        },
      });

      // Entrance
      tl.fromTo(
        elements,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' },
        0
      );

      // Exit
      tl.to(elements, {
        opacity: 0,
        y: -30,
        stagger: 0.05,
        ease: 'power2.in',
      }, 0.6);
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative w-full min-h-[100dvh] bg-deep-sea flex items-center"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 w-full">
        <div className="stat-animate text-center mb-16">
          <span className="font-mono text-xs tracking-[2px] text-primary-blue">
</span>
          <h2
            className="font-display font-bold text-light-text leading-tight mt-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="stat-animate text-center">
              <span
                ref={(el) => { countersRef.current[i] = el; }}
                className="font-display font-bold block"
                style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: stat.color,
                  textShadow: '0 0 30px rgba(46,125,50,0.15)',
                }}
              >
                {i === 2 ? stat.value : `${displayValues[i]}${stat.suffix}`}
              </span>
              <span className="font-body text-[15px] text-white/60 mt-2 block">
                {t(stat.labelKey)}
              </span>
              <span className="font-body text-[13px] text-white/35 mt-1 block">
                {t(stat.detailKey)}
              </span>
            </div>
          ))}
        </div>

        {/* GDP Trust Badge */}
        <div className="stat-animate flex items-center justify-center gap-4 mt-12">
          <ShieldCheck size={24} className="text-pharma-green" />
          <div className="text-center">
            <span className="font-body font-medium text-sm text-white/70 block">
              {t('stats.badge')}
            </span>
            <span className="font-mono text-xs text-white/40">
              {t('stats.badge.sub')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
