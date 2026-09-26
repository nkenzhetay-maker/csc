import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import { Activity, MapPin, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ColdChainSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const elements = section.querySelectorAll('.coldchain-animate');

    // Content entrance
    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Video parallax
    gsap.fromTo(
      video,
      { y: -40 },
      {
        y: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === section)
        .forEach((st) => st.kill());
    };
  }, []);

  const features = [
    { icon: <Activity size={24} />, label: t('coldchain.feat1') },
    { icon: <MapPin size={24} />, label: t('coldchain.feat2') },
    { icon: <CheckCircle size={24} />, label: t('coldchain.feat3') },
  ];

  return (
    <section
      ref={sectionRef}
      id="coldchain"
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/img-product-dialysis.jpg"
      >
        <source src="/video-coldchain.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-deep-sea/[0.72]" />

      {/* Content */}
      <div className="relative z-[2] max-w-[800px] mx-auto px-5 md:px-10 text-center py-40">
        <span className="coldchain-animate font-mono text-xs tracking-[2px] text-primary-blue block mb-5">
</span>
        <h2
          className="coldchain-animate font-display font-bold text-light-text leading-[1.1]"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          {t('coldchain.title')}
        </h2>
        <p className="coldchain-animate font-body text-lg text-white/75 leading-relaxed mt-6 max-w-[680px] mx-auto">
          {t('coldchain.body')}
        </p>

        {/* Feature List */}
        <div className="coldchain-animate flex flex-wrap gap-8 justify-center mt-12">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-pharma-green">{feat.icon}</span>
              <span className="font-body font-medium text-sm text-light-text">
                {feat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Live Temperature Indicator */}
        <div className="coldchain-animate mt-12">
          <span className="inline-flex items-center gap-3 bg-pharma-green/15 border border-pharma-green/30 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-pharma-green animate-live-pulse" />
            <span className="font-mono text-xs text-white/60">
              {t('coldchain.live')}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
