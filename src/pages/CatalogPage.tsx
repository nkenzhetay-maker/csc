import { useTranslation } from '../contexts/LanguageContext';
import { FileText, BookOpen, Mail, ArrowRight } from 'lucide-react';

export default function CatalogPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            {t('catalog.title')}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[560px] mx-auto">{t('catalog.subtitle')}</p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-[640px] mx-auto bg-white border border-[#D0D8E4] rounded-2xl p-10 text-center mb-10">
          <div className="w-20 h-20 bg-[#0A5C8E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen size={36} className="text-[#0A5C8E]" />
          </div>
          <h2 className="font-display font-bold text-xl text-[#1E2A3E] mb-3">
            {t('catalog.title')}
          </h2>
          <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-6">
            {t('catalog.coming')}
          </p>
          <a href="mailto:info@csc-tr.com"
            className="inline-flex items-center gap-2 bg-[#0A5C8E] text-white font-body font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#084a73] transition-all">
            <Mail size={16} /> info@csc-tr.com
          </a>
        </div>

        {/* Quick Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <FileText size={24} />, title: 'Pain Relievers', count: '45+ Products', color: '#0A5C8E' },
            { icon: <FileText size={24} />, title: 'Antibiotics', count: '30+ Products', color: '#2C9CD4' },
            { icon: <FileText size={24} />, title: 'Cold Chain', count: '15+ Products', color: '#00A86B' },
            { icon: <FileText size={24} />, title: 'Dialysis', count: '12+ Products', color: '#0A5C8E' },
          ].map((cat, i) => (
            <div key={i} className="bg-white border border-[#D0D8E4] rounded-xl p-6 card-hover">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                {cat.icon}
              </div>
              <h3 className="font-body font-semibold text-[#1E2A3E] mb-1">{cat.title}</h3>
              <p className="font-body text-sm text-[#5A6A7E] mb-3">{cat.count}</p>
              <span className="inline-flex items-center gap-1 font-body text-xs font-medium" style={{ color: cat.color }}>
                <ArrowRight size={12} /> View
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
