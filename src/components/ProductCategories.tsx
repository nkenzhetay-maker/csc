import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { Pill, HeartPulse, Syringe, Baby, Stethoscope, FlaskConical, ArrowRight } from 'lucide-react';

/* Each category now has its OWN unique, relevant image */
const categories = [
  {
    slug: 'ilac',
    titleKey: 'prodcat.ilac.title',
    descKey: 'prodcat.ilac.desc',
    btnKey: 'prodcat.ilac.btn',
    icon: <Pill size={28} />,
    image: '/img-cat-ilac.jpg',
    alt: 'Pharmaceutical products - medicine boxes, tablets, and vials',
  },
  {
    slug: 'gida-takviyeleri',
    titleKey: 'prodcat.gida.title',
    descKey: 'prodcat.gida.desc',
    btnKey: 'prodcat.gida.btn',
    icon: <HeartPulse size={28} />,
    image: '/img-cat-gida.jpg',
    alt: 'Food supplements - vitamins, minerals, omega-3, probiotics',
  },
  {
    slug: 'tibbi-sarf-malzemeleri',
    titleKey: 'prodcat.sarf.title',
    descKey: 'prodcat.sarf.desc',
    btnKey: 'prodcat.sarf.btn',
    icon: <Syringe size={28} />,
    image: '/img-cat-sarf.jpg',
    alt: 'Medical supplies - bandages, surgical gloves, syringes, masks',
  },
  {
    slug: 'hasta-bebek-bezleri',
    titleKey: 'prodcat.bebek.title',
    descKey: 'prodcat.bebek.desc',
    btnKey: 'prodcat.bebek.btn',
    icon: <Baby size={28} />,
    image: '/img-cat-bebek.jpg',
    alt: 'Adult diapers, baby diapers, absorbent pads, nursing care',
  },
  {
    slug: 'tibbi-cihazlar',
    titleKey: 'prodcat.cihaz.title',
    descKey: 'prodcat.cihaz.desc',
    btnKey: 'prodcat.cihaz.btn',
    icon: <Stethoscope size={28} />,
    image: '/img-cat-cihaz.jpg',
    alt: 'Medical devices - blood pressure monitor, nebulizer, glucometer',
  },
  {
    slug: 'tibbi-testler',
    titleKey: 'prodcat.test.title',
    descKey: 'prodcat.test.desc',
    btnKey: 'prodcat.test.btn',
    icon: <FlaskConical size={28} />,
    image: '/img-cat-test.jpg',
    alt: 'Medical diagnostic tests - rapid test kits, pregnancy tests',
  },
];

export default function ProductCategories() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs tracking-[2px] text-[#0A5C8E] uppercase">CSC Pharma</span>
          <h2 className="font-display font-bold text-[#1E2A3E] text-2xl md:text-3xl mt-3">
            {t('prodcat.title')}
          </h2>
          <p className="font-body text-[#5A6A7E] mt-3 max-w-[520px] mx-auto leading-relaxed">
            {t('prodcat.subtitle')}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.slug}
              className="group bg-[#F4F7FC] border border-[#D0D8E4] rounded-2xl overflow-hidden card-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => navigate(`/urunler/${cat.slug}`)}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* CSC Logo Watermark */}
                <div className="absolute bottom-3 right-3">
                  <img
                    src="/logo-csc-white.png"
                    alt="CSC"
                    className="h-5 w-auto opacity-60"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#0A5C8E]">{cat.icon}</span>
                  <h3 className="font-body font-semibold text-[#1E2A3E] text-[15px]">
                    {t(cat.titleKey)}
                  </h3>
                </div>
                <p className="font-body text-[14px] text-[#5A6A7E] leading-relaxed line-clamp-2">
                  {t(cat.descKey)}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[#0A5C8E] font-body font-medium text-sm group-hover:gap-2.5 transition-all">
                  {t(cat.btnKey)} <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
