import { useRef, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

/* Türkiye'de üretim yapan ilaç firmaları — CSC sadece Türk menşeli ilaçları ihrac eder */
const turkishPharmaProducers = [
  { name: 'Abdi İbrahim', initial: 'Aİ' },
  { name: 'Deva Holding', initial: 'DH' },
  { name: 'Atabay İlaç', initial: 'AI' },
  { name: 'Eczacıbaşı İlaç', initial: 'Eİ' },
  { name: 'Bilim İlaç', initial: 'Bİ' },
  { name: 'Gen İlaç', initial: 'Gİ' },
  { name: 'Nobel İlaç', initial: 'Nİ' },
  { name: 'Polifarma', initial: 'PF' },
  { name: 'Koçak Farma', initial: 'KF' },
  { name: 'Santa Farma', initial: 'SF' },
  { name: 'Vem İlaç', initial: 'Vİ' },
  { name: 'Drogsan', initial: 'DR' },
  { name: 'Hüsnü Arsan', initial: 'HA' },
  { name: 'Selvi İlaç', initial: 'Sİ' },
  { name: 'Astaşan', initial: 'AS' },
  { name: 'Bentaş İlaç', initial: 'BT' },
  { name: 'Kansuk İlaç', initial: 'Kİ' },
  { name: 'Sanovel', initial: 'SV' },
];

export default function LogoMarquee() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;
    
    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const brandList = [...turkishPharmaProducers, ...turkishPharmaProducers]; // Double for seamless loop

  return (
    <section className="w-full bg-white py-12 border-y border-[#D0D8E4]/50 overflow-hidden">
      <div className="text-center mb-8">
        <span className="font-mono text-xs tracking-[2px] text-[#0A5C8E] uppercase">
          {t('marquee.label')}
        </span>
        <h2 className="font-display font-bold text-[#1E2A3E] text-xl mt-2">
          {t('marquee.title')}
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div ref={scrollRef} className="flex gap-10 items-center whitespace-nowrap">
          {brandList.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 bg-[#F4F7FC] rounded-xl border border-[#D0D8E4]/50 hover:border-[#00A86B]/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="font-body font-semibold text-[#1E2A3E] text-sm whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#E30A17] text-white font-bold">
                  TR
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
