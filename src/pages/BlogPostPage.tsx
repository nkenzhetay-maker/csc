import { useEffect, useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link, useParams, useNavigate } from '../lib/i18nRouter';
import { useTranslation } from '../contexts/LanguageContext';
import { pick } from '../data/productI18n';
import { blogEntries as fallbackEntries, type BlogEntry } from '../data/blogContent';
import { fetchBlog } from '../lib/publicData';
import { blogImageCredits } from '../data/blogImageCredits';
import { useSEO, absUrl, slugify } from '../lib/seo';
import { SITE, HREFLANG, withLang } from '../lib/i18nRouter';
import NotFound from './NotFound';

export const blogSlug = (p: BlogEntry) => `${p.id}-${slugify(p.t.en?.title || p.t.tr.title)}`;

const UI = {
  en: { back: 'All articles', more: 'More articles', min: 'min read' },
  tr: { back: 'Tüm yazılar', more: 'Diğer yazılar', min: 'dk okuma' },
  ru: { back: 'Все статьи', more: 'Другие статьи', min: 'мин чтения' },
  kz: { back: 'Барлық мақалалар', more: 'Басқа мақалалар', min: 'мин оқу' },
  az: { back: 'Bütün yazılar', more: 'Digər yazılar', min: 'dəq oxu' },
} as const;

// "Özet — metin" biçimindeki paragrafı başlık + metin olarak ayır
const SECTION = /^(.{2,48}?)\s+[—–]\s+(.+)$/s;
const isSources = (p: string) => /^(Kaynak|Kaynaklar|Source|Sources|References|Источник|Источники|Дереккөз|Дереккөздер|Mənbə|Mənbələr)\s*:/i.test(p);

export default function BlogPostPage() {
  const { slug = '' } = useParams();
  const { language, t } = useTranslation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogEntry[]>(fallbackEntries);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchBlog().then(rows => { if (alive) { if (rows && rows.length) setPosts(rows); setLoaded(true); } });
    return () => { alive = false; };
  }, []);

  const id = Number(slug.match(/^(\d+)/)?.[1]);
  const post = posts.find(p => p.id === id);
  const canonicalSlug = post ? blogSlug(post) : '';

  // Eski/yanlış slug → doğru adrese
  useEffect(() => {
    if (post && slug !== canonicalSlug) navigate(`/blog/${canonicalSlug}`, { replace: true });
  }, [post, slug, canonicalSlug, navigate]);

  const text = post ? pick(post.t, language) : null;
  const credit = post?.image?.startsWith('/blog/') ? blogImageCredits[post.id] : undefined;
  const path = `/blog/${canonicalSlug}`;
  const url = absUrl(withLang(path, language));
  useSEO(post && text ? {
    title: text.title,
    description: text.excerpt,
    type: 'article',
    image: post.image,
    path,
    jsonLd: [
      {
        '@context': 'https://schema.org', '@type': 'Article', headline: text.title, description: text.excerpt,
        datePublished: post.date, dateModified: post.date, inLanguage: HREFLANG[language], image: SITE + post.image,
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'CSC Global', url: SITE },
        publisher: { '@type': 'Organization', name: 'CSC Global', logo: { '@type': 'ImageObject', url: `${SITE}/logo-csc-blue.png` } },
      },
      {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: absUrl(withLang('/', language)) },
          { '@type': 'ListItem', position: 2, name: t('nav.blog'), item: absUrl(withLang('/blog', language)) },
          { '@type': 'ListItem', position: 3, name: text.title, item: url },
        ],
      },
    ],
  } : null);

  if (!post || !text) return loaded || !Number.isFinite(id) ? <NotFound /> : <div className="pt-32 min-h-[60dvh] bg-[#F4F7FC]" />;
  const ui = UI[language];
  const others = posts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <article className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[820px] mx-auto px-5 md:px-10">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-body text-[#5A6A7E] mb-5" aria-label="breadcrumb">
          <Link to="/" className="hover:text-[#0A5C8E]">{t('nav.home')}</Link><span>/</span>
          <Link to="/blog" className="hover:text-[#0A5C8E]">{t('nav.blog')}</Link>
        </nav>
        <span className="inline-block bg-[#00A86B] text-white font-mono text-[10px] uppercase px-2 py-1 rounded">{t(`blog.category.${post.category}`)}</span>
        <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(26px, 3.4vw, 40px)' }}>{text.title}</h1>
        <div className="flex items-center gap-2 text-[#5A6A7E] mt-3 font-body text-sm">
          <Calendar size={14} /><time dateTime={post.date}>{post.date}</time><span>•</span><span>{post.readTime} {ui.min}</span>
        </div>
        <p className="font-body text-[17px] text-[#1E2A3E]/80 leading-relaxed mt-5">{text.excerpt}</p>
        <figure className="mt-6">
          <img src={post.image} alt={text.title} className="w-full h-[240px] md:h-[320px] object-cover rounded-2xl" />
          {credit && (
            <figcaption className="font-body text-[11px] text-[#5A6A7E] mt-2 text-right">
              © <a href={credit.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00A86B]">{credit.author}</a> · {credit.license} · Wikimedia Commons
            </figcaption>
          )}
        </figure>

        <div className="mt-8 space-y-5">
          {text.content.map((para, i) => {
            if (isSources(para)) {
              return <p key={i} className="font-body text-[13px] text-[#5A6A7E] leading-relaxed border-t border-[#D0D8E4] pt-5 break-words">{para}</p>;
            }
            const m = para.match(SECTION);
            if (m) {
              return (
                <section key={i}>
                  <h2 className="font-display font-bold text-[19px] text-[#0A5C8E] mb-2">{m[1]}</h2>
                  <p className="font-body text-[16px] text-[#3B4A5E] leading-relaxed">{m[2]}</p>
                </section>
              );
            }
            return <p key={i} className="font-body text-[16px] text-[#3B4A5E] leading-relaxed">{para}</p>;
          })}
        </div>

        <Link to="/blog" className="inline-flex items-center gap-2 mt-10 font-body font-medium text-[#0A5C8E] hover:text-[#00A86B]"><ArrowLeft size={16} />{ui.back}</Link>

        {others.length > 0 && (
          <aside className="mt-12">
            <h2 className="font-display font-bold text-xl text-[#1E2A3E] mb-4">{ui.more}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map(o => (
                <Link key={o.id} to={`/blog/${blogSlug(o)}`} className="bg-white border border-[#D0D8E4] rounded-xl p-4 hover:border-[#0A5C8E] transition-colors">
                  <p className="font-body text-xs text-[#5A6A7E]">{o.date}</p>
                  <p className="font-body font-semibold text-[14px] text-[#1E2A3E] leading-snug mt-1 line-clamp-3">{pick(o.t, language).title}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
