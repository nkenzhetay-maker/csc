import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import { ClipboardList, CheckCircle, Truck, Home } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: <ClipboardList size={20} />, titleKey: 'process.step1.title', descKey: 'process.step1.desc', color: '#0A5C8E' },
  { icon: <CheckCircle size={20} />, titleKey: 'process.step2.title', descKey: 'process.step2.desc', color: '#00A86B' },
  { icon: <Truck size={20} />, titleKey: 'process.step3.title', descKey: 'process.step3.desc', color: '#0A5C8E' },
  { icon: <Home size={20} />, titleKey: 'process.step4.title', descKey: 'process.step4.desc', color: '#00A86B' },
];

export default function ProcessSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const nodes = section.querySelectorAll('.process-node');
    const texts = section.querySelectorAll('.process-text');

    // Timeline track draw
    gsap.fromTo(
      track,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.0,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Nodes pop
    gsap.fromTo(
      nodes,
      { scale: 0 },
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.25,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text fades
    gsap.fromTo(
      texts,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.25,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === section)
        .forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="w-full bg-white py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[2px] text-primary-blue">
</span>
          <h2
            className="font-display font-bold text-dark-text leading-tight mt-4"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            {t('process.title')}
          </h2>
          <p className="font-body text-[17px] text-muted-text mt-3">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline - Desktop Horizontal */}
        <div className="hidden md:block relative">
          {/* Track */}
          <div
            ref={trackRef}
            className="absolute top-6 left-0 right-0 h-0.5 bg-border-subtle origin-left"
          />

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                {/* Node */}
                <div
                  className="process-node w-12 h-12 rounded-full flex items-center justify-center mx-auto relative z-10"
                  style={{
                    backgroundColor: step.color,
                    boxShadow: `0 0 0 6px ${step.color}26`,
                  }}
                >
                  <span className="text-white">{step.icon}</span>
                </div>
                {/* Text */}
                <div className="process-text mt-5">
                  <h3 className="font-body font-semibold text-lg text-dark-text">
                    {t(step.titleKey)}
                  </h3>
                  <p className="font-body text-[15px] text-muted-text leading-relaxed mt-2 max-w-[240px] mx-auto">
                    {t(step.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile Vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-border-subtle" />
          {steps.map((step, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              <div
                className="process-node absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center -translate-x-1/2"
                style={{
                  backgroundColor: step.color,
                  boxShadow: `0 0 0 6px ${step.color}26`,
                }}
              >
                <span className="text-white">{step.icon}</span>
              </div>
              <div className="process-text ml-10">
                <h3 className="font-body font-semibold text-lg text-dark-text">
                  {t(step.titleKey)}
                </h3>
                <p className="font-body text-[15px] text-muted-text leading-relaxed mt-1">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
