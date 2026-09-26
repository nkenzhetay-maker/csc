import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import HealthWorkerModal from '../components/HealthWorkerModal';
import { Pill, HeartPulse, Syringe, Baby, Stethoscope, FlaskConical, ArrowRight } from 'lucide-react';
import { pick, categoryMenu, categoryCardDesc } from '../data/productI18n';

const categoryKeys = [
  { slug: 'ilac', icon: <Pill size={32} />, image: '/img-cat-ilac.jpg' },
  { slug: 'gida-takviyeleri', icon: <HeartPulse size={32} />, image: '/img-cat-gida.jpg' },
  { slug: 'tibbi-sarf-malzemeleri', icon: <Syringe size={32} />, image: '/img-cat-sarf.jpg' },
  { slug: 'hasta-bebek-bezleri', icon: <Baby size={32} />, image: '/img-cat-bebek.jpg' },
  { slug: 'tibbi-cihazlar', icon: <Stethoscope size={32} />, image: '/img-cat-cihaz.jpg' },
  { slug: 'tibbi-testler', icon: <FlaskConical size={32} />, image: '/img-cat-test.jpg' },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const menu = pick(categoryMenu, language);
  const cardDesc = pick(categoryCardDesc, language);
  const titleOf = (slug: string) => menu.find(m => m.slug === slug)?.title ?? '';
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('csc-health-approved') !== 'true') setShowModal(true);
  }, []);

  const handleConfirm = () => { sessionStorage.setItem('csc-health-approved', 'true'); };

  const handleClick = (slug: string) => {
    if (slug === 'ilac') {
      navigate('/urunler/ilac');
    } else {
      navigate(`/urunler/${slug}`);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <HealthWorkerModal isOpen={showModal} onConfirm={handleConfirm} onClose={() => setShowModal(false)} />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-body text-[#5A6A7E] mb-4">
          <span className="cursor-pointer hover:text-[#0A5C8E]" onClick={() => navigate('/')}>{t('nav.home')}</span>
          <span>/</span>
          <span className="text-[#0A5C8E] font-medium">{t('nav.products')}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display font-bold text-[#1E2A3E] text-3xl md:text-4xl">{t('products.page.title')}</h1>
          <p className="font-body text-[#5A6A7E] mt-2">{t('products.page.subtitle')}</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((cat, i) => (
            <div
              key={cat.slug}
              className="group bg-white border border-[#D0D8E4] rounded-2xl overflow-hidden card-hover animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => handleClick(cat.slug)}
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={cat.image}
                  alt={titleOf(cat.slug)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 right-3">
                  <img src="/logo-csc-white.png" alt="CSC" className="h-6 w-auto opacity-80" />
                </div>
              </div>

              <div className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#0A5C8E]/10 rounded-xl flex items-center justify-center text-[#0A5C8E]">
                  {cat.icon}
                </div>
                <h3 className="font-body font-semibold text-lg text-[#1E2A3E] mb-2">{titleOf(cat.slug)}</h3>
                <p className="font-body text-sm text-[#5A6A7E] leading-relaxed mb-4 line-clamp-2">
                  {cardDesc[cat.slug]}
                </p>
                <button className="inline-flex items-center gap-2 bg-[#5A6A7E] text-white font-body font-medium text-sm px-5 py-2.5 rounded-lg group-hover:bg-[#0A5C8E] transition-colors">
                  {t('prodcat.ilac.btn')} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
