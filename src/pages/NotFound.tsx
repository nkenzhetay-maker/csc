import { Link } from '../lib/i18nRouter';
import { useTranslation } from '../contexts/LanguageContext';
import { useSEO } from '../lib/seo';
import { seoText } from '../data/seoText';

export default function NotFound() {
  const { language, t } = useTranslation();
  const s = seoText.notfound[language];
  useSEO({ ...s, noindex: true });
  return (
    <div className="pt-32 pb-24 min-h-[70dvh] bg-[#F4F7FC] flex flex-col items-center justify-center text-center px-5">
      <p className="font-mono text-sm text-[#5A6A7E]">404</p>
      <h1 className="font-display font-bold text-3xl text-[#1E2A3E] mt-2">{s.title}</h1>
      <p className="font-body text-[#5A6A7E] mt-2">{s.description}</p>
      <Link to="/" className="mt-6 inline-flex px-5 py-2.5 rounded-lg bg-[#0A5C8E] text-white font-body font-semibold text-sm hover:bg-[#084a73]">{t('nav.home')}</Link>
    </div>
  );
}
