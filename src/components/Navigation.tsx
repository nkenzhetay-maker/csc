import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { Menu, X, MessageCircle, ChevronDown, Globe } from 'lucide-react';

const navLinks = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.corporate', path: '/kurumsal' },
  { labelKey: 'nav.services', path: '/hizmetler' },
  { labelKey: 'nav.products', path: '/urunler' },
  { labelKey: 'nav.blog', path: '/blog' },
  { labelKey: 'nav.catalog', path: '/katalog' },
  { labelKey: 'nav.contact', path: '/iletisim' },
];

const preloadMap: Record<string, () => void> = {
  '/kurumsal': () => import('../pages/CorporatePage'),
  '/hizmetler': () => import('../pages/ServicesPage'),
  '/subeler': () => import('../pages/BranchesPage'),
  '/iletisim': () => import('../pages/ContactPage'),
  '/blog': () => import('../pages/BlogPage'),
  '/katalog': () => import('../pages/CatalogPage'),
  '/urunler': () => import('../pages/ProductsPage'),
};

const languages: { code: 'en' | 'tr' | 'ru' | 'kz' | 'az'; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'tr', label: 'Türkçe', flag: 'TR' },
  { code: 'ru', label: 'Русский', flag: 'RU' },
  { code: 'kz', label: 'Қазақша', flag: 'KZ' },
  { code: 'az', label: 'Azərbaycanca', flag: 'AZ' },
];

export default function Navigation() {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const isActive = (path: string) => location.pathname === path;

  /* Close mobile menu & lang dropdown on route change */
  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  /* Scroll listener - only once on mount */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Close lang dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A5C8E] shadow-lg' : 'bg-[#0A5C8E]/95 backdrop-blur-sm'}`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src="/logo-csc-white.png" alt="CSC Global Ecza Deposu" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className={`relative font-body font-semibold text-[12px] uppercase tracking-[1.5px] transition-colors duration-200 py-1 ${isActive(link.path) ? 'text-white' : 'text-white/70 hover:text-white'}`}
              onMouseEnter={() => preloadMap[link.path]?.()}>
              {t(link.labelKey)}
              {isActive(link.path) && <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#00A86B] rounded-full" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/15 text-white hover:bg-white/25 transition-colors"
            >
              <Globe size={14} />
              {language.toUpperCase()}
              <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[140px] overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm font-body transition-colors flex items-center gap-2 ${
                      language === lang.code 
                        ? 'bg-[#0A5C8E]/10 text-[#0A5C8E] font-semibold' 
                        : 'text-[#1E2A3E] hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-mono text-xs">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="https://wa.me/905436109008" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#00A86B] text-white font-body font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#008F5B] transition-all duration-200">
            <MessageCircle size={16} />
            <span className="hidden lg:inline">{t('nav.whatsapp')}</span>
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-colors">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A5C8E]/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}
                className={`block font-body font-medium text-sm uppercase tracking-[1.5px] py-3 px-3 rounded-lg transition-colors ${isActive(link.path) ? 'text-white bg-white/15' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
                {t(link.labelKey)}
              </Link>
            ))}
            {/* Mobile Language Selector */}
            <div className="pt-3 border-t border-white/10 mt-3">
              <span className="text-white/40 text-xs font-mono uppercase tracking-wider px-3">{t('lang.en') === 'EN' ? 'Language' : 'Dil'}</span>
              <div className="flex gap-2 mt-2 px-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      language === lang.code ? 'bg-white text-[#0A5C8E] font-bold' : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>
            </div>
            <a href="https://wa.me/905436109008" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#00A86B] text-white font-body font-semibold text-sm px-5 py-3 rounded-lg mt-3">
              <MessageCircle size={16} /> {t('nav.whatsapp')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
