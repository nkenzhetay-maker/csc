import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HealthWorkerModal from '../../components/HealthWorkerModal';
import { Search, ChevronDown, X, Package, Box } from 'lucide-react';
import { realIlacProducts, tedaviAlanlari, formlar, type IlacProduct } from '../../data/ilacDatabase';
import { fetchIlaclar } from '../../lib/publicData';
import { useTranslation } from '../../contexts/LanguageContext';
import { pick, ilacUI, categoryMenu, crumb, areaLabels, formLabels, labelFor, allOrSelf } from '../../data/productI18n';

/* Filtre seçenekleri ürün listesinden türetilir (panelden eklenen yeni değerler de görünsün) */
const uniq = (base: string[], values: string[]) => {
  const set = new Set(base.filter(v => v !== 'Tümü'));
  values.forEach(v => { if (v && v !== '-' && v !== 'N/A') set.add(v); });
  return ['Tümü', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'tr'))];
};

function Dropdown({ label, placeholder, options, value, onChange, optionLabel }: { label: string; placeholder?: string; options: string[]; value: string; onChange: (v: string) => void; optionLabel?: (v: string) => string }) {
  const [open, setOpen] = useState(false);
  const show = (v: string) => (optionLabel ? optionLabel(v) : v);
  const shown = value === label ? (placeholder ?? label) : show(value);
  return (
    <div className="relative flex-1 min-w-[180px]">
      <button onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border font-body text-sm transition-all ${value !== label && value !== 'Tümü' ? 'border-[#0A5C8E] bg-[#0A5C8E]/5 text-[#0A5C8E]' : 'border-[#D0D8E4] bg-white text-[#5A6A7E]'}`}>
        <span className="truncate">{shown}</span>
        <ChevronDown size={14} className={`flex-shrink-0 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 right-0 mt-1 max-h-[260px] overflow-y-auto bg-white border border-[#D0D8E4] rounded-lg shadow-xl z-50 py-1">
            {options.map(opt => (
              <button key={opt} onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-3 py-2 font-body text-sm transition-colors ${value === opt ? 'bg-[#0A5C8E] text-white' : 'text-[#1E2A3E] hover:bg-[#F4F7FC]'}`}>{show(opt)}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function IlacPage() {
  const navigate = useNavigate();
  const { language } = useTranslation();
  const ui = pick(ilacUI, language);
  const menu = pick(categoryMenu, language);
  const bc = pick(crumb, language);
  const ilacTitle = menu.find(m => m.slug === 'ilac')!.title;
  const [showModal, setShowModal] = useState(false);
  const [, setApproved] = useState(false);
  const [tedaviAlani, setTedaviAlani] = useState('Tedavi Alanı');
  const [etkinMadde, setEtkinMadde] = useState('Etkin Madde');
  const [form, setForm] = useState('Form');
  const [searchQuery, setSearchQuery] = useState('');
  const [ruhsatSahibi, setRuhsatSahibi] = useState('Ruhsat Sahibi');
  const [products, setProducts] = useState<IlacProduct[]>(realIlacProducts);

  useEffect(() => {
    let alive = true;
    fetchIlaclar().then(rows => { if (alive && rows && rows.length) setProducts(rows); });
    return () => { alive = false; };
  }, []);

  const etkinMaddelerList = useMemo(() => uniq([], products.map(p => p.etkinMadde)), [products]);
  const allTedaviAlanlari = useMemo(() => uniq(tedaviAlanlari, products.map(p => p.tedaviAlani)), [products]);
  const allFormlar = useMemo(() => uniq(formlar, products.map(p => p.form)), [products]);
  const allRuhsatSahipleri = useMemo(() => uniq([], products.map(p => p.ruhsatSahibi)), [products]);

  useState(() => { if (sessionStorage.getItem('csc-health-approved') === 'true') setApproved(true); else setShowModal(true); });
  const handleConfirm = () => { setApproved(true); sessionStorage.setItem('csc-health-approved', 'true'); };

  const handleClear = () => {
    setTedaviAlani('Tedavi Alanı'); setEtkinMadde('Etkin Madde'); setForm('Form');
    setSearchQuery(''); setRuhsatSahibi('Ruhsat Sahibi');
  };

  const filtered = useMemo(() => {
    let r = [...products];
    if (tedaviAlani !== 'Tedavi Alanı' && tedaviAlani !== 'Tümü') r = r.filter(p => p.tedaviAlani === tedaviAlani);
    if (etkinMadde !== 'Etkin Madde' && etkinMadde !== 'Tümü') r = r.filter(p => p.etkinMadde.toLowerCase().includes(etkinMadde.toLowerCase()));
    if (form !== 'Form' && form !== 'Tümü') r = r.filter(p => p.form === form);
    if (searchQuery) r = r.filter(p =>
      p.ad.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.etkinMadde.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.barkod.includes(searchQuery)
    );
    if (ruhsatSahibi !== 'Ruhsat Sahibi' && ruhsatSahibi !== 'Tümü') r = r.filter(p => p.ruhsatSahibi === ruhsatSahibi);
    return r;
  }, [products, tedaviAlani, etkinMadde, form, searchQuery, ruhsatSahibi]);

  const hasActive = (tedaviAlani !== 'Tedavi Alanı' && tedaviAlani !== 'Tümü') ||
    (etkinMadde !== 'Etkin Madde' && etkinMadde !== 'Tümü') ||
    (form !== 'Form' && form !== 'Tümü') || searchQuery ||
    (ruhsatSahibi !== 'Ruhsat Sahibi' && ruhsatSahibi !== 'Tümü');

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <HealthWorkerModal isOpen={showModal} onConfirm={handleConfirm} onClose={() => setShowModal(false)} />
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-body text-[#5A6A7E] mb-4">
          <span className="cursor-pointer hover:text-[#0A5C8E]" onClick={() => navigate('/')}>{bc.home}</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#0A5C8E]" onClick={() => navigate('/urunler')}>{bc.products}</span>
          <span>/</span>
          <span className="text-[#0A5C8E] font-medium">{ilacTitle}</span>
        </nav>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <h1 className="font-display font-bold text-[#1E2A3E] text-2xl md:text-3xl">{ilacTitle}</h1>
          <div className="flex items-center gap-3">
            <span className="bg-[#00A86B] text-white font-body text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
              <Package size={12} /> {products.length} {ui.unitProduct}
            </span>
            <span className="bg-[#0A5C8E] text-white font-body text-xs px-3 py-1.5 rounded-full">
              {new Set(products.map(p => p.ruhsatSahibi).filter(r => r && r !== '-')).size} {ui.unitManufacturer}
            </span>
            <span className="bg-[#2C9CD4] text-white font-body text-xs px-3 py-1.5 rounded-full">
              {allTedaviAlanlari.length - 1} {ui.unitArea}
            </span>
          </div>
        </div>

        {/* Top Filter Bar */}
        <div className="bg-white border border-[#D0D8E4] rounded-xl p-4 mb-2">
          <div className="flex flex-wrap gap-3">
            <Dropdown label="Tedavi Alanı" placeholder={ui.fTedavi} options={allTedaviAlanlari} value={tedaviAlani} onChange={setTedaviAlani} optionLabel={(v) => labelFor(areaLabels, v, language)} />
            <Dropdown label="Etkin Madde" placeholder={ui.fEtkin} options={etkinMaddelerList} value={etkinMadde} onChange={setEtkinMadde} optionLabel={(v) => allOrSelf(v, language)} />
            <Dropdown label="Form" placeholder={ui.fForm} options={allFormlar} value={form} onChange={setForm} optionLabel={(v) => labelFor(formLabels, v, language)} />
            <Dropdown label="Ruhsat Sahibi" placeholder={ui.fRuhsat} options={allRuhsatSahipleri} value={ruhsatSahibi} onChange={setRuhsatSahibi} optionLabel={(v) => allOrSelf(v, language)} />
            <button className="px-5 py-2.5 bg-[#0A5C8E] text-white font-body font-semibold text-sm rounded-lg hover:bg-[#084a73] transition-colors flex items-center gap-1.5">
              <Search size={14} />{ui.search}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border border-[#D0D8E4] rounded-xl p-4 mb-4 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[260px] relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5A6A7E]" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={ui.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 border border-[#D0D8E4] rounded-lg font-body text-sm text-[#1E2A3E] focus:outline-none focus:border-[#0A5C8E] focus:ring-2 focus:ring-[#0A5C8E]/10"
            />
          </div>
          <span className="font-body text-sm text-[#5A6A7E]">{ui.resultsFound(filtered.length)}</span>
          {hasActive && (
            <button onClick={handleClear} className="flex items-center gap-1 font-body text-sm text-[#E63946] hover:underline transition-all">
              <X size={14} />{ui.clear}
            </button>
          )}
        </div>

        {/* Product Table */}
        <div className="bg-white border border-[#D0D8E4] rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#F4F7FC] border-b border-[#D0D8E4]">
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thName}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thIngredient}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thForm}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thArea}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thManufacturer}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide">{ui.thBarcode}</th>
                  <th className="px-4 py-3 font-body font-semibold text-[13px] text-[#5A6A7E] uppercase tracking-wide text-right">{ui.thStock}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((product, i) => (
                  <tr key={product.id} className={`border-b border-[#D0D8E4]/50 hover:bg-[#F4F7FC]/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#F4F7FC]/30'}`}>
                    <td className="px-4 py-3 font-body text-sm text-[#1E2A3E] font-medium">{product.ad}</td>
                    <td className="px-4 py-3 font-body text-sm text-[#5A6A7E]">{product.etkinMadde}</td>
                    <td className="px-4 py-3"><span className="font-mono text-xs px-2 py-1 rounded bg-[#F4F7FC] text-[#5A6A7E] border border-[#D0D8E4]/50">{labelFor(formLabels, product.form, language)}</span></td>
                    <td className="px-4 py-3 font-body text-sm text-[#5A6A7E]">{labelFor(areaLabels, product.tedaviAlani, language)}</td>
                    <td className="px-4 py-3">{product.ruhsatSahibi && product.ruhsatSahibi !== '-' ? <span className="font-body text-xs font-medium text-[#0A5C8E] bg-[#0A5C8E]/10 px-2 py-1 rounded">{product.ruhsatSahibi}</span> : <span className="font-mono text-xs text-[#5A6A7E]">-</span>}</td>
                    <td className="px-4 py-3 font-mono text-xs text-[#5A6A7E]">{product.barkod !== '-' ? product.barkod : '-'}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-mono text-xs px-2 py-1 rounded ${product.stok > 100 ? 'bg-[#00A86B]/10 text-[#00A86B]' : product.stok > 0 ? 'bg-[#E8A010]/10 text-[#E8A010]' : 'bg-[#E63946]/10 text-[#E63946]'}`}>
                        {product.stok.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center">
                      <Box size={40} className="mx-auto text-[#D0D8E4] mb-3" />
                      <p className="font-body text-[#5A6A7E]">{ui.noResults}</p>
                      <button onClick={handleClear} className="mt-2 font-body text-sm text-[#0A5C8E] hover:underline">{ui.clearFilters}</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
