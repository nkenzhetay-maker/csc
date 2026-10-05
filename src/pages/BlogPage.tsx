import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { TrendingUp, FileText, Globe, ArrowRight, Calendar, X } from 'lucide-react';
import { pick } from '../data/productI18n';
import { blogEntries as fallbackEntries, type BlogEntry } from '../data/blogContent';
import { fetchBlog } from '../lib/publicData';

const categories = [
  { key: 'blog.category.all', value: 'all', icon: <Globe size={16} /> },
  { key: 'blog.category.stats', value: 'stats', icon: <TrendingUp size={16} /> },
  { key: 'blog.category.regulations', value: 'regulations', icon: <FileText size={16} /> },
  { key: 'blog.category.trends', value: 'trends', icon: <TrendingUp size={16} /> },
];

export default function BlogPage() {
  const { t, language } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [blogEntries, setBlogEntries] = useState<BlogEntry[]>(fallbackEntries);

  useEffect(() => {
    let alive = true;
    fetchBlog().then(rows => { if (alive && rows && rows.length) setBlogEntries(rows); });
    return () => { alive = false; };
  }, []);

  const filtered = activeCategory === 'all' ? blogEntries : blogEntries.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            {t('blog.title')}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[640px] mx-auto">{t('blog.subtitle')}</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
              className={`inline-flex items-center gap-2 font-body font-medium text-sm px-4 py-2.5 rounded-lg transition-all ${activeCategory === cat.value ? 'bg-[#0A5C8E] text-white' : 'bg-white text-[#5A6A7E] border border-[#D0D8E4] hover:border-[#0A5C8E]'}`}>
              {cat.icon} {t(cat.key)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const isExpanded = expandedPost === post.id;
            const text = pick(post.t, language);
            return (
              <div key={post.id} className="bg-white border border-[#D0D8E4] rounded-2xl overflow-hidden card-hover animate-fade-in-up flex flex-col">
                <div className="h-[160px] relative overflow-hidden">
                  <img src={post.image} alt={text.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 bg-[#00A86B] text-white font-mono text-[10px] uppercase px-2 py-1 rounded">
                    {t(`blog.category.${post.category}`)}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[#5A6A7E] mb-2">
                    <Calendar size={12} />
                    <span className="font-body text-xs">{post.date} &bull; {post.readTime} {t('blog.readtime') || 'dk'}</span>
                  </div>
                  <h3 className="font-body font-semibold text-[15px] text-[#1E2A3E] leading-snug mb-2 line-clamp-2">{text.title}</h3>
                  <p className="font-body text-[13px] text-[#5A6A7E] leading-relaxed line-clamp-3 mb-3 flex-1">{text.excerpt}</p>
                  <button
                    onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                    className="inline-flex items-center gap-1 font-body font-medium text-sm text-[#0A5C8E] hover:text-[#00A86B] transition-colors mt-auto"
                  >
                    {isExpanded ? (
                      <><X size={14} /> {t('blog.close') || 'Kapat'}</>
                    ) : (
                      <>{t('blog.read')} <ArrowRight size={14} /></>
                    )}
                  </button>
                </div>

                {/* Expanded Full Content */}
                {isExpanded && (
                  <div className="border-t border-[#D0D8E4]/50 bg-[#F4F7FC]/30 px-5 py-5 animate-fade-in-up">
                    <div className="space-y-3">
                      {text.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-body text-[14px] text-[#5A6A7E] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
