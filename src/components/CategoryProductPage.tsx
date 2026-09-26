import { useNavigate } from 'react-router-dom';
import { Pill, HeartPulse, Syringe, Baby, Stethoscope, FlaskConical } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { pick, categoryMenu, crumb } from '../data/productI18n';
import { descStylePages } from '../data/categoryContent';
import { itemStylePages } from '../data/categoryContentItems';

const icons: Record<string, React.ReactNode> = {
  ilac: <Pill size={16} />,
  'gida-takviyeleri': <HeartPulse size={16} />,
  'tibbi-sarf-malzemeleri': <Syringe size={16} />,
  'hasta-bebek-bezleri': <Baby size={16} />,
  'tibbi-cihazlar': <Stethoscope size={16} />,
  'tibbi-testler': <FlaskConical size={16} />,
};

export default function CategoryProductPage({ slug }: { slug: string }) {
  const navigate = useNavigate();
  const { language } = useTranslation();

  const menu = pick(categoryMenu, language);
  const bc = pick(crumb, language);
  const title = menu.find(m => m.slug === slug)?.title ?? '';

  const data = descStylePages[slug]
    ? pick(descStylePages[slug], language)
    : pick(itemStylePages[slug], language);

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-body text-[#5A6A7E] mb-4">
          <span className="cursor-pointer hover:text-[#0A5C8E]" onClick={() => navigate('/')}>{bc.home}</span><span>/</span>
          <span className="cursor-pointer hover:text-[#0A5C8E]" onClick={() => navigate('/urunler')}>{bc.products}</span><span>/</span>
          <span className="text-[#0A5C8E] font-medium">{title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-[#D0D8E4] rounded-xl overflow-hidden">
              {menu.map(item => (
                <button key={item.slug}
                  onClick={() => item.slug === 'ilac' ? navigate('/urunler/ilac') : navigate(`/urunler/${item.slug}`)}
                  className={`w-full flex items-center gap-3 px-4 py-3 font-body text-sm transition-colors border-b border-[#EEF2F7] last:border-b-0 ${item.slug === slug ? 'bg-[#0A5C8E] text-white' : 'text-[#5A6A7E] hover:bg-[#F4F7FC] hover:text-[#0A5C8E]'}`}>
                  {icons[item.slug]}{item.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1">
            <h1 className="font-display font-bold text-[#1E2A3E] text-3xl mb-4">{title}</h1>
            {data.intro && (
              <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-6">{data.intro}</p>
            )}

            <div className="space-y-6">
              {data.descBlocks?.map((item, i) => (
                <div key={i} className="bg-white border border-[#D0D8E4] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <h3 className="font-body font-semibold text-lg text-[#0A5C8E] mb-2">{item.title}</h3>
                  <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">{item.desc}</p>
                </div>
              ))}

              {data.itemBlocks?.map((cat, i) => (
                <div key={i} className="bg-white border border-[#D0D8E4] rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <h3 className="font-body font-semibold text-lg text-[#0A5C8E] mb-3">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((it, j) => (
                      <span key={j} className="px-3 py-1.5 bg-[#F4F7FC] text-[#5A6A7E] font-body text-sm rounded-lg border border-[#D0D8E4]">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
