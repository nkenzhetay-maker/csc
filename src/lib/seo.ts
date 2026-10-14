// Sayfa başına SEO etiketleri: title, description, canonical, hreflang, Open Graph, Twitter, JSON-LD, robots.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LANGS, SITE, HREFLANG, OG_LOCALE, splitLang, withLang } from './i18nRouter';

export type SeoInput = {
  title: string;
  description: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: object | object[];
  noindex?: boolean;
  /** Sayfanın önek eklenmemiş kanonik yolu (varsayılan: mevcut yol) */
  path?: string;
};

const BRAND = 'CSC Global';
const DEFAULT_IMAGE = `${SITE}/logo-csc-blue.png`;

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
}
function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]:not([hreflang])`);
  if (!el) { el = document.createElement('link'); el.rel = rel; document.head.appendChild(el); }
  el.href = href;
}

export const absUrl = (path: string) => SITE + (path === '/' ? '/' : path);

export function useSEO(input: SeoInput | null) {
  const { pathname } = useLocation();
  const { lang, rest } = splitLang(pathname);
  const key = input ? JSON.stringify(input) : '';

  useEffect(() => {
    if (!input) return;
    const path = input.path ?? rest;
    const title = input.title.includes(BRAND) ? input.title : `${input.title} | ${BRAND}`;
    const url = absUrl(withLang(path, lang));
    document.title = title;
    document.documentElement.lang = HREFLANG[lang];
    upsertMeta('name', 'description', input.description);
    upsertMeta('name', 'robots', input.noindex ? 'noindex, follow' : 'index, follow');
    upsertLink('canonical', url);

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach(e => e.remove());
    if (!input.noindex) {
      for (const l of LANGS) {
        const a = document.createElement('link');
        a.rel = 'alternate'; a.hreflang = HREFLANG[l]; a.href = absUrl(withLang(path, l));
        document.head.appendChild(a);
      }
      const xd = document.createElement('link');
      xd.rel = 'alternate'; xd.hreflang = 'x-default'; xd.href = absUrl(path);
      document.head.appendChild(xd);
    }

    const image = input.image ? (input.image.startsWith('http') ? input.image : SITE + input.image) : DEFAULT_IMAGE;
    upsertMeta('property', 'og:type', input.type ?? 'website');
    upsertMeta('property', 'og:site_name', BRAND);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', input.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:locale', OG_LOCALE[lang]);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', input.description);
    upsertMeta('name', 'twitter:image', image);

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach(e => e.remove());
    if (input.jsonLd) {
      const s = document.createElement('script');
      s.type = 'application/ld+json'; s.setAttribute('data-seo-jsonld', '1');
      s.textContent = JSON.stringify(input.jsonLd);
      document.head.appendChild(s);
    }
    // Ön işleme (prerender) betiğine sayfanın hazır olduğunu bildir
    (window as unknown as { __SEO_READY__?: string }).__SEO_READY__ = url;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, lang, rest]);
}

/** Basit, kararlı URL parçası: aksanları kaldırır, Türkçe karakterleri çevirir. */
export function slugify(s: string, max = 70) {
  const map: Record<string, string> = { ı: 'i', İ: 'i', ş: 's', Ş: 's', ğ: 'g', Ğ: 'g', ç: 'c', Ç: 'c', ö: 'o', Ö: 'o', ü: 'u', Ü: 'u', ə: 'e', Ə: 'e' };
  const out = s.replace(/[ıİşŞğĞçÇöÖüÜəƏ]/g, c => map[c]).normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return out.length > max ? out.slice(0, max).replace(/-[^-]*$/, '') : out;
}
