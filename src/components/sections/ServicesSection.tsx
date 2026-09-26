import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';
import { Warehouse, Truck, ThermometerSnowflake, Monitor, Link2, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Warehouse size={24} />,
    titleKey: 'service.storage.title',
    descKey: 'service.storage.desc',
    chipsKey: 'service.storage.chips',
    gradient: 'blue-green' as const,
    large: false,
  },
  {
    icon: <Truck size={24} />,
    titleKey: 'service.logistics.title',
    descKey: 'service.logistics.desc',
    chipsKey: 'service.logistics.chips',
    gradient: 'blue-green' as const,
    large: false,
  },
  {
    icon: <ThermometerSnowflake size={24} />,
    titleKey: 'service.coldchain.title',
    descKey: 'service.coldchain.desc',
    chipsKey: 'service.coldchain.chips',
    gradient: 'green-blue' as const,
    large: false,
  },
  {
    icon: <Monitor size={24} />,
    titleKey: 'service.digital.title',
    descKey: 'service.digital.desc',
    chipsKey: 'service.digital.chips',
    gradient: 'blue-green' as const,
    large: false,
  },
  {
    icon: <Link2 size={24} />,
    titleKey: 'service.supply.title',
    descKey: 'service.supply.desc',
    chipsKey: 'service.supply.chips',
    gradient: 'blue-green' as const,
    large: false,
  },
  {
    icon: <Users size={24} />,
    titleKey: 'service.bulk.title',
    descKey: 'service.bulk.desc',
    chipsKey: 'service.bulk.chips',
    gradient: 'blue-green' as const,
    large: false,
  },
];

export default function ServicesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.service-animate');

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
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
      id="services"
      className="w-full bg-white py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="service-animate">
          <SectionHeader
titleKey="services.title"
            subtitleKey="services.subtitle"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 items-stretch">
          {services.map((service, i) => (
            <div key={i} className={`service-animate ${service.large ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <ServiceCard
                icon={service.icon}
                title={t(service.titleKey)}
                description={t(service.descKey)}
                chips={t(service.chipsKey).split(',')}
                gradient={service.gradient}
                large={service.large}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
