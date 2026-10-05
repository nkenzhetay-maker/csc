import { useEffect, useState } from 'react';
import { Plus, Pencil } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Lang } from '../data/productI18n';
import type { BlogText } from '../data/blogContent';
import { Button, Field, Input, Modal, Notice, Select, Textarea } from './ui';

type Kategori = 'regulations' | 'stats' | 'trends';
type Post = {
  id: number; kategori: Kategori; tarih: string; okuma_suresi: number; gorsel: string;
  icerik: Partial<Record<Lang, BlogText>>; yayinda: boolean;
};
type LangDraft = { title: string; excerpt: string; content: string };
type Draft = Omit<Post, 'id' | 'icerik' | 'okuma_suresi'> & { id?: number; okuma_suresi: string; icerik: Record<Lang, LangDraft> };

const LANGS: { id: Lang; label: string }[] = [
  { id: 'tr', label: 'Türkçe' }, { id: 'en', label: 'English' }, { id: 'ru', label: 'Русский' },
  { id: 'kz', label: 'Қазақша' }, { id: 'az', label: 'Azərbaycan' },
];
const KATEGORI: Record<Kategori, string> = { regulations: 'Mevzuat', stats: 'İstatistik', trends: 'Trendler' };
const GORSELLER = ['/img-cat-ilac.jpg', '/img-cat-gida.jpg', '/img-cat-sarf.jpg', '/img-cat-bebek.jpg', '/img-cat-cihaz.jpg', '/img-cat-test.jpg'];
const today = () => new Date().toLocaleDateString('sv-SE'); // yerel tarih, YYYY-AA-GG

const toDraft = (p?: Post): Draft => {
  const icerik = {} as Record<Lang, LangDraft>;
  for (const { id } of LANGS) {
    const t = p?.icerik[id];
    icerik[id] = { title: t?.title ?? '', excerpt: t?.excerpt ?? '', content: (t?.content ?? []).join('\n\n') };
  }
  return p
    ? { id: p.id, kategori: p.kategori, tarih: p.tarih, okuma_suresi: String(p.okuma_suresi), gorsel: p.gorsel, yayinda: p.yayinda, icerik }
    : { kategori: 'regulations', tarih: today(), okuma_suresi: '5', gorsel: GORSELLER[0], yayinda: true, icerik };
};

export default function BlogAdmin() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [flash, setFlash] = useState('');
  const [editing, setEditing] = useState<Draft | null>(null);

  useEffect(() => {
    supabase!.from('blog_yazilari').select('*').order('tarih', { ascending: false }).order('id', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError('Yazılar yüklenemedi: ' + error.message); else setPosts(data as Post[]);
        setLoading(false);
      });
  }, []);

  const done = (msg: string, next: Post[]) => {
    setPosts(next.sort((a, b) => b.tarih.localeCompare(a.tarih) || b.id - a.id));
    setEditing(null); setFlash(msg); setTimeout(() => setFlash(''), 3500);
  };

  return (
    <section>
      <div className="flex flex-wrap items-end gap-3 mb-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-[#1E2A3E]">Blog</h1>
          <p className="font-body text-sm text-[#5A6A7E]">{posts.length} yazı · {posts.filter(p => p.yayinda).length} yayında</p>
        </div>
        <Button className="ml-auto" onClick={() => setEditing(toDraft())}><Plus size={16} />Yeni yazı</Button>
      </div>
      {error && <div className="mb-3"><Notice kind="error">{error}</Notice></div>}
      {flash && <div className="mb-3"><Notice kind="ok">{flash}</Notice></div>}

      <div className="grid gap-3">
        {loading && <p className="font-body text-sm text-[#5A6A7E]">Yükleniyor…</p>}
        {posts.map(p => (
          <button key={p.id} onClick={() => setEditing(toDraft(p))}
            className="flex items-center gap-4 text-left bg-white border border-[#D0D8E4] rounded-xl p-3 hover:border-[#0A5C8E] transition-colors">
            <img src={p.gorsel} alt="" className="w-20 h-14 rounded-lg object-cover flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-body font-semibold text-[15px] text-[#1E2A3E] truncate">{p.icerik.tr?.title || p.icerik.en?.title}</p>
              <p className="font-body text-xs text-[#5A6A7E] mt-0.5">
                {p.tarih} · {KATEGORI[p.kategori]} · {LANGS.filter(l => p.icerik[l.id]?.title).map(l => l.id.toUpperCase()).join(' ')}
              </p>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-body ${p.yayinda ? 'bg-[#E6F6EF] text-[#0B6B47]' : 'bg-[#EEF2F7] text-[#5A6A7E]'}`}>{p.yayinda ? 'Yayında' : 'Taslak'}</span>
            <Pencil size={15} className="text-[#0A5C8E] flex-shrink-0" />
          </button>
        ))}
      </div>

      {editing && (
        <BlogForm draft={editing} onClose={() => setEditing(null)}
          onSaved={(p, isNew) => done('Yazı kaydedildi.', isNew ? [...posts, p] : posts.map(x => x.id === p.id ? p : x))}
          onDeleted={id => done('Yazı silindi.', posts.filter(x => x.id !== id))} />
      )}
    </section>
  );
}

function BlogForm({ draft, onClose, onSaved, onDeleted }: {
  draft: Draft; onClose: () => void; onSaved: (p: Post, isNew: boolean) => void; onDeleted: (id: number) => void;
}) {
  const [d, setD] = useState<Draft>(draft);
  const [lang, setLang] = useState<Lang>('tr');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const isNew = d.id === undefined;
  const cur = d.icerik[lang];
  const setText = (k: keyof LangDraft, v: string) => setD(prev => ({ ...prev, icerik: { ...prev.icerik, [lang]: { ...prev.icerik[lang], [k]: v } } }));

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const tr = d.icerik.tr;
    if (!tr.title.trim() || !tr.excerpt.trim() || !tr.content.trim()) { setLang('tr'); setError('Türkçe başlık, özet ve metin zorunlu.'); return; }
    const okuma = Number(d.okuma_suresi);
    if (!Number.isInteger(okuma) || okuma < 1 || okuma > 60) { setError('Okuma süresi 1–60 dakika olmalı.'); return; }
    const icerik: Partial<Record<Lang, BlogText>> = {};
    for (const { id, label } of LANGS) {
      const t = d.icerik[id];
      const filled = [t.title, t.excerpt, t.content].filter(v => v.trim()).length;
      if (filled === 0) continue; // boş dil kaydedilmez; sitede Türkçe metne düşer
      if (filled < 3) { setLang(id); setError(`${label}: başlık, özet ve metnin üçü birlikte doldurulmalı (ya da hepsi boş bırakılmalı).`); return; }
      icerik[id] = { title: t.title.trim(), excerpt: t.excerpt.trim(), content: t.content.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean) };
    }
    setBusy(true); setError('');
    const row = { kategori: d.kategori, tarih: d.tarih, okuma_suresi: okuma, gorsel: d.gorsel, yayinda: d.yayinda, icerik };
    const res = isNew
      ? await supabase!.from('blog_yazilari').insert(row).select('*').single()
      : await supabase!.from('blog_yazilari').update(row).eq('id', d.id!).select('*').single();
    setBusy(false);
    if (res.error) setError('Kaydedilemedi: ' + res.error.message); else onSaved(res.data as Post, isNew);
  };

  const remove = async () => {
    if (!confirm('Bu yazı kalıcı olarak silinsin mi? Sadece gizlemek için “Yayında” kutusunu kaldırmanız yeterli.')) return;
    setBusy(true);
    const { error } = await supabase!.from('blog_yazilari').delete().eq('id', d.id!);
    setBusy(false);
    if (error) setError('Silinemedi: ' + error.message); else onDeleted(d.id!);
  };

  return (
    <Modal wide title={isNew ? 'Yeni blog yazısı' : 'Blog yazısını düzenle'} onClose={onClose}
      footer={<>
        {!isNew && <Button variant="danger" className="mr-auto" disabled={busy} onClick={remove}>Sil</Button>}
        <Button variant="ghost" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" form="blog-form" disabled={busy}>{busy ? 'Kaydediliyor…' : 'Kaydet'}</Button>
      </>}>
      <form id="blog-form" onSubmit={save} className="space-y-4">
        {error && <Notice kind="error">{error}</Notice>}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Field label="Kategori">
            <Select value={d.kategori} onChange={e => setD({ ...d, kategori: e.target.value as Kategori })}>
              {Object.entries(KATEGORI).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </Select>
          </Field>
          <Field label="Tarih"><Input type="date" value={d.tarih} onChange={e => setD({ ...d, tarih: e.target.value })} required /></Field>
          <Field label="Okuma (dk)"><Input type="number" min={1} max={60} value={d.okuma_suresi} onChange={e => setD({ ...d, okuma_suresi: e.target.value })} /></Field>
          <Field label="Durum">
            <label className="flex items-center gap-2 h-[38px] font-body text-sm text-[#1E2A3E]">
              <input type="checkbox" checked={d.yayinda} onChange={e => setD({ ...d, yayinda: e.target.checked })} className="w-4 h-4 accent-[#0A5C8E]" />Yayında
            </label>
          </Field>
        </div>

        <Field label="Kapak görseli">
          <div className="flex flex-wrap gap-2">
            {GORSELLER.map(g => (
              <button type="button" key={g} onClick={() => setD({ ...d, gorsel: g })}
                className={`rounded-lg overflow-hidden border-2 ${d.gorsel === g ? 'border-[#0A5C8E]' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <img src={g} alt="" className="w-20 h-14 object-cover" />
              </button>
            ))}
          </div>
        </Field>

        <div>
          <div className="flex flex-wrap gap-1 border-b border-[#EEF2F7] mb-4">
            {LANGS.map(l => (
              <button type="button" key={l.id} onClick={() => setLang(l.id)}
                className={`px-3 py-2 font-body text-sm -mb-px border-b-2 ${lang === l.id ? 'border-[#0A5C8E] text-[#0A5C8E] font-semibold' : 'border-transparent text-[#5A6A7E] hover:text-[#1E2A3E]'}`}>
                {l.label}{d.icerik[l.id].title.trim() && d.icerik[l.id].content.trim() ? ' ✓' : ''}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            <Field label={`Başlık${lang === 'tr' ? ' *' : ''}`}><Input value={cur.title} onChange={e => setText('title', e.target.value)} maxLength={200} /></Field>
            <Field label={`Özet${lang === 'tr' ? ' *' : ''}`}><Textarea rows={2} value={cur.excerpt} onChange={e => setText('excerpt', e.target.value)} maxLength={400} /></Field>
            <Field label={`Metin${lang === 'tr' ? ' *' : ''}`} hint="Paragrafları boş bir satırla ayırın. Son paragrafa kaynağı yazın (örn. “Kaynak: Resmî Gazete, 12.03.2026, Sayı 33194”).">
              <Textarea rows={12} value={cur.content} onChange={e => setText('content', e.target.value)} />
            </Field>
            {lang !== 'tr' && <p className="font-body text-xs text-[#5A6A7E]">Bu dil boş bırakılırsa sitede Türkçe metin gösterilir.</p>}
          </div>
        </div>
      </form>
    </Modal>
  );
}
