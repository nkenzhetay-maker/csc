import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import CertCard from '../ui/CertCard';
import { ShieldCheck, FileCheck, ThermometerSnowflake, Microscope, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.trust-card');
    const band = section.querySelector('.trust-band');

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    if (band) {
      gsap.fromTo(
        band,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === section)
        .forEach((st) => st.kill());
    };
  }, []);

  const certs = [
    {
      icon: <ShieldCheck size={28} className="text-pharma-green" />,
      iconBg: 'rgba(46,125,50,0.08)',
      title: t('cert.ministry.title'),
      description: t('cert.ministry.desc'),
    },
    {
      icon: <FileCheck size={28} className="text-primary-blue" />,
      iconBg: 'rgba(21,101,192,0.08)',
      title: t('cert.gdp.title'),
      description: t('cert.gdp.desc'),
    },
    {
      icon: <ThermometerSnowflake size={28} className="text-pharma-green" />,
      iconBg: 'rgba(46,125,50,0.08)',
      title: t('cert.coldchain.title'),
      description: t('cert.coldchain.desc'),
    },
    {
      icon: <Microscope size={28} className="text-primary-blue" />,
      iconBg: 'rgba(21,101,192,0.08)',
      title: t('cert.quality.title'),
      description: t('cert.quality.desc'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="w-full bg-ice-bg py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <SectionHeader
titleKey="trust.title"
          subtitleKey="trust.subtitle"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {certs.map((cert, i) => (
            <div key={i} className="trust-card">
              <CertCard
                icon={cert.icon}
                iconBg={cert.iconBg}
                title={cert.title}
                description={cert.description}
              />
            </div>
          ))}
        </div>

        {/* Compliance Statement Band */}
        <div className="trust-band mt-16 bg-white border border-border-subtle rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText size={20} className="text-primary-blue" />
          </div>
          <p className="font-body text-base text-dark-text leading-relaxed">
            {t('trust.compliance')}
          </p>
        </div>
      </div>
    </section>
  );
}
