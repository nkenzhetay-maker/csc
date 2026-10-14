// Statik sayfaların SEO etiketlerini yoldan belirler. Blog yazıları ve 404 sayfası kendi etiketlerini kurar.
import { useLocation } from 'react-router-dom';
import { splitLang } from '../lib/i18nRouter';
import { useSEO, type SeoInput } from '../lib/seo';
import { seoText, routeSeoKey } from '../data/seoText';
import { pick, categoryMenu } from '../data/productI18n';
import { descStylePages, type CategoryData } from '../data/categoryContent';
import { itemStylePages } from '../data/categoryContentItems';

const clip = (s: string, n = 158) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

export default function RouteSEO() {
  const { pathname } = useLocation();
  const { lang, rest } = splitLang(pathname);
  let input: SeoInput | null = null;

  const key = routeSeoKey[rest];
  if (key) {
    input = { ...seoText[key][lang] };
    if (key === 'home') {
      input.jsonLd = {
        '@context': 'https://schema.org', '@type': 'WebSite', name: 'CSC Global', url: 'https://csc-tr.com/',
        inLanguage: ['en', 'tr', 'ru', 'kk', 'az'],
      };
    }
  } else {
    const m = rest.match(/^\/urunler\/([a-z-]+)$/);
    const slug = m?.[1];
    const menu = pick(categoryMenu, lang).find(c => c.slug === slug);
    const data = slug ? (descStylePages[slug] ?? itemStylePages[slug]) : undefined;
    if (menu && data) {
      const d = pick(data, lang) as CategoryData;
      const desc = d.intro || d.descBlocks?.[0]?.desc || seoText.products[lang].description;
      input = { title: menu.title, description: clip(desc) };
    }
  }
  // /blog/:slug ve bilinmeyen yollar kendi bileşenlerinde ele alınır
  useSEO(input);
  return null;
}
