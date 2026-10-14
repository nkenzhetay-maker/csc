// Dil önekli adresler: İngilizce kökte (/blog), diğer diller önekli (/ru/blog, /tr/blog, /kz/blog, /az/blog).
// Sayfalar mutlak yolları ('/urunler') önek olmadan yazar; bu modülün Link/useNavigate'i öneki kendisi ekler.
import { useCallback } from 'react';
import { Link as RRLink, useLocation, useNavigate as useRRNavigate, type LinkProps, type NavigateOptions } from 'react-router-dom';

export const LANGS = ['en', 'tr', 'ru', 'kz', 'az'] as const;
export type Lang = (typeof LANGS)[number];
const PREFIXED: readonly string[] = ['tr', 'ru', 'kz', 'az'];

export const SITE = 'https://csc-tr.com';
export const HREFLANG: Record<Lang, string> = { en: 'en', tr: 'tr', ru: 'ru', kz: 'kk', az: 'az' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', tr: 'tr_TR', ru: 'ru_RU', kz: 'kk_KZ', az: 'az_AZ' };

/** '/ru/blog' → { lang: 'ru', rest: '/blog' } ; '/blog' → { lang: 'en', rest: '/blog' } */
export function splitLang(pathname: string): { lang: Lang; rest: string } {
  const m = pathname.match(/^\/([a-z]{2})(?=\/|$)(.*)$/);
  if (m && PREFIXED.includes(m[1])) return { lang: m[1] as Lang, rest: m[2] || '/' };
  return { lang: 'en', rest: pathname || '/' };
}

/** Önek eklenmemiş mutlak yolu verilen dile çevirir. */
export function withLang(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

export function useLangPath() {
  const { pathname } = useLocation();
  const { lang } = splitLang(pathname);
  return useCallback((p: string) => withLang(p, lang), [lang]);
}

export function Link(props: LinkProps) {
  const lp = useLangPath();
  const to = typeof props.to === 'string' && props.to.startsWith('/') ? lp(props.to) : props.to;
  return <RRLink {...props} to={to} />;
}

export function useNavigate() {
  const nav = useRRNavigate();
  const lp = useLangPath();
  return useCallback((to: string, opts?: NavigateOptions) => nav(to.startsWith('/') ? lp(to) : to, opts), [nav, lp]);
}

export { useLocation, useParams, Outlet } from 'react-router-dom';
