import { useEffect, useMemo, useState } from 'react';
import { Plus, Search, Pencil, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Button, Field, Input, Modal, Notice, Select } from './ui';

type Ilac = {
  id: number; ad: string; etkin_madde: string; atc_kodu: string; ruhsat_sahibi: string; barkod: string;
  tedavi_alani: string; form: string; stok: number; aktif: boolean; fiyat: number | null;
};
type Draft = Omit<Ilac, 'id' | 'fiyat' | 'stok'> & { id?: number; stok: string; fiyat: string };

const PAGE = 50;
const empty: Draft = {
  ad: '', etkin_madde: '-', atc_kodu: '-', ruhsat_sahibi: '-', barkod: '-', tedavi_alani: 'Diğer', form: 'Diğer',
  stok: '0', aktif: true, fiyat: '',
};

async function loadAll(): Promise<Ilac[]> {
  const rows: Omit<Ilac, 'fiyat'>[] = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase!.from('ilaclar').select('*').order('id').range(from, from + 999);
    if (error) throw error;
    rows.push(...data);
    if (data.length < 1000) break;
  }
  const prices = new Map<number, number | null>();
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase!.from('ilac_fiyatlari').select('ilac_id, fiyat').range(from, from + 999);
    if (error) throw error;
    data.forEach(p => prices.set(p.ilac_id, p.fiyat === null ? null : Number(p.fiyat)));
    if (data.length < 1000) break;
  }
  return rows.map(r => ({ ...r, fiyat: prices.get(r.id) ?? null }));
}

const norm = (s: string) => s.toLocaleLowerCase('tr');

export default function IlacAdmin() {
  const [items, setItems] = useState<Ilac[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [flash, setFlash] = useState('');
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | 'aktif' | 'pasif'>('all');
  const [page, setPage] = useState(0);
  const [editing, setEditing] = useState<Draft | null>(null);

  useEffect(() => {
    loadAll().then(setItems).catch(e => setError('Ürünler yüklenemedi: ' + e.message)).finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const n = norm(q.trim());
    return items.filter(i =>
      (status === 'all' || (status === 'aktif') === i.aktif) &&
      (!n || norm(i.ad).includes(n) || norm(i.etkin_madde).includes(n) || i.barkod.includes(n) || norm(i.ruhsat_sahibi).includes(n)));
  }, [items, q, status]);

  useEffect(() => setPage(0), [q, status]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const shown = filtered.slice(page * PAGE, page * PAGE + PAGE);

  const options = useMemo(() => {
    const set = (k: 'tedavi_alani' | 'form' | 'ruhsat_sahibi') =>
      Array.from(new Set(items.map(i => i[k]).filter(v => v && v !== '-'))).sort((a, b) => a.localeCompare(b, 'tr'));
    return { tedavi: set('tedavi_alani'), form: set('form'), ruhsat: set('ruhsat_sahibi') };
  }, [items]);

  const openEdit = (i: Ilac) => setEditing({ ...i, stok: String(i.stok), fiyat: i.fiyat === null ? '' : String(i.fiyat) });

  const onSaved = (saved: Ilac, isNew: boolean) => {
    setItems(prev => isNew ? [...prev, saved] : prev.map(p => p.id === saved.id ? saved : p));
    setEditing(null);
    setFlash(`“${saved.ad}” kaydedildi.`);
    setTimeout(() => setFlash(''), 3500);
  };
  const onDeleted = (id: number, ad: string) => {
    setItems(prev => prev.filter(p => p.id !== id));
    setEditing(null);
    setFlash(`“${ad}” silindi.`);
    setTimeout(() => setFlash(''), 3500);
  };

  const fmtPrice = (n: number | null) => n === null ? '—' : n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section>
      <div className="flex flex-wrap items-end gap-3 mb-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-[#1E2A3E]">İlaçlar</h1>
          <p className="font-body text-sm text-[#5A6A7E]">
            {items.length} ürün · {items.filter(i => i.aktif).length} sitede görünüyor · fiyatlar yalnızca bu panelde görünür
          </p>
        </div>
        <Button className="ml-auto" onClick={() => setEditing({ ...empty })}><Plus size={16} />Yeni ilaç</Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5A6A7E]" />
          <Input placeholder="Ad, etkin madde, barkod veya üretici ara…" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
        </div>
        <Select value={status} onChange={e => setStatus(e.target.value as typeof status)} className="w-auto">
          <option value="all">Tümü</option>
          <option value="aktif">Sitede görünenler</option>
          <option value="pasif">Gizlenenler</option>
        </Select>
      </div>

      {error && <div className="mb-3"><Notice kind="error">{error}</Notice></div>}
      {flash && <div className="mb-3"><Notice kind="ok">{flash}</Notice></div>}

      <div className="bg-white border border-[#D0D8E4] rounded-xl overflow-x-auto">
        <table className="w-full min-w-[860px] font-body text-sm">
          <thead>
            <tr className="bg-[#F4F7FC] text-left text-[#5A6A7E] text-xs uppercase tracking-wide">
              <th className="px-3 py-2.5 font-medium">Ürün adı</th>
              <th className="px-3 py-2.5 font-medium">Etkin madde</th>
              <th className="px-3 py-2.5 font-medium">Ruhsat sahibi</th>
              <th className="px-3 py-2.5 font-medium">Barkod</th>
              <th className="px-3 py-2.5 font-medium text-right">Stok</th>
              <th className="px-3 py-2.5 font-medium text-right">Fiyat</th>
              <th className="px-3 py-2.5 font-medium">Durum</th>
              <th className="px-3 py-2.5"></th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={8} className="px-3 py-8 text-center text-[#5A6A7E]">Yükleniyor…</td></tr>}
            {!loading && shown.length === 0 && <tr><td colSpan={8} className="px-3 py-8 text-center text-[#5A6A7E]">Sonuç yok.</td></tr>}
            {shown.map(i => (
              <tr key={i.id} className="border-t border-[#EEF2F7] hover:bg-[#F9FBFD] cursor-pointer" onClick={() => openEdit(i)}>
                <td className="px-3 py-2.5 font-medium text-[#1E2A3E]">{i.ad}</td>
                <td className="px-3 py-2.5 text-[#5A6A7E]">{i.etkin_madde}</td>
                <td className="px-3 py-2.5 text-[#5A6A7E]">{i.ruhsat_sahibi}</td>
                <td className="px-3 py-2.5 font-mono text-xs text-[#5A6A7E]">{i.barkod}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{i.stok.toLocaleString('tr-TR')}</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{fmtPrice(i.fiyat)}</td>
                <td className="px-3 py-2.5">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${i.aktif ? 'bg-[#E6F6EF] text-[#0B6B47]' : 'bg-[#EEF2F7] text-[#5A6A7E]'}`}>{i.aktif ? 'Sitede' : 'Gizli'}</span>
                </td>
                <td className="px-3 py-2.5 text-right"><Pencil size={15} className="inline text-[#0A5C8E]" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-3 font-body text-sm text-[#5A6A7E]">
          <span>{filtered.length} sonuç · sayfa {page + 1}/{pages}</span>
          <Button variant="ghost" disabled={page === 0} onClick={() => setPage(p => p - 1)} aria-label="Önceki"><ChevronLeft size={16} /></Button>
          <Button variant="ghost" disabled={page >= pages - 1} onClick={() => setPage(p => p + 1)} aria-label="Sonraki"><ChevronRight size={16} /></Button>
        </div>
      )}

      {editing && <IlacForm draft={editing} options={options} onClose={() => setEditing(null)} onSaved={onSaved} onDeleted={onDeleted} />}
    </section>
  );
}

function IlacForm({ draft, options, onClose, onSaved, onDeleted }: {
  draft: Draft; options: { tedavi: string[]; form: string[]; ruhsat: string[] };
  onClose: () => void; onSaved: (i: Ilac, isNew: boolean) => void; onDeleted: (id: number, ad: string) => void;
}) {
  const [d, setD] = useState<Draft>(draft);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const isNew = d.id === undefined;
  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setD(prev => ({ ...prev, [k]: v }));
  const dash = (s: string) => s.trim() || '-';

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const stok = Number(d.stok);
    const fiyat = d.fiyat.trim() === '' ? null : Number(d.fiyat.replace(',', '.'));
    if (!d.ad.trim()) { setError('Ürün adı zorunlu.'); return; }
    if (!Number.isInteger(stok) || stok < 0) { setError('Stok 0 veya pozitif tam sayı olmalı.'); return; }
    if (fiyat !== null && (!Number.isFinite(fiyat) || fiyat < 0)) { setError('Fiyat geçerli bir sayı olmalı.'); return; }
    setBusy(true); setError('');
    const row = {
      ad: d.ad.trim(), etkin_madde: dash(d.etkin_madde), atc_kodu: dash(d.atc_kodu), ruhsat_sahibi: dash(d.ruhsat_sahibi),
      barkod: dash(d.barkod), tedavi_alani: dash(d.tedavi_alani), form: dash(d.form), stok, aktif: d.aktif,
    };
    const res = isNew
      ? await supabase!.from('ilaclar').insert(row).select('*').single()
      : await supabase!.from('ilaclar').update(row).eq('id', d.id!).select('*').single();
    if (res.error) { setBusy(false); setError('Kaydedilemedi: ' + res.error.message); return; }
    const id = res.data.id as number;
    const pr = fiyat === null
      ? await supabase!.from('ilac_fiyatlari').delete().eq('ilac_id', id)
      : await supabase!.from('ilac_fiyatlari').upsert({ ilac_id: id, fiyat });
    setBusy(false);
    if (pr.error) { setError('Ürün kaydedildi ama fiyat kaydedilemedi: ' + pr.error.message); return; }
    onSaved({ ...res.data, fiyat }, isNew);
  };

  const remove = async () => {
    if (!confirm(`“${d.ad}” kalıcı olarak silinsin mi? Sadece sitede gizlemek için “Sitede göster” kutusunu kaldırmanız yeterli.`)) return;
    setBusy(true);
    const { error } = await supabase!.from('ilaclar').delete().eq('id', d.id!);
    setBusy(false);
    if (error) setError('Silinemedi: ' + error.message); else onDeleted(d.id!, d.ad);
  };

  return (
    <Modal title={isNew ? 'Yeni ilaç' : 'İlacı düzenle'} onClose={onClose}
      footer={<>
        {!isNew && <Button variant="danger" className="mr-auto" disabled={busy} onClick={remove}>Sil</Button>}
        <Button variant="ghost" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" form="ilac-form" disabled={busy}>{busy ? 'Kaydediliyor…' : 'Kaydet'}</Button>
      </>}>
      <form id="ilac-form" onSubmit={save} className="space-y-4">
        {error && <Notice kind="error">{error}</Notice>}
        <Field label="Ürün adı *"><Input value={d.ad} onChange={e => set('ad', e.target.value)} required maxLength={200} /></Field>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Etkin madde"><Input value={d.etkin_madde} onChange={e => set('etkin_madde', e.target.value)} maxLength={300} /></Field>
          <Field label="ATC kodu"><Input value={d.atc_kodu} onChange={e => set('atc_kodu', e.target.value)} maxLength={20} /></Field>
          <Field label="Ruhsat sahibi (üretici)">
            <Input list="dl-ruhsat" value={d.ruhsat_sahibi} onChange={e => set('ruhsat_sahibi', e.target.value)} maxLength={120} />
          </Field>
          <Field label="Barkod"><Input value={d.barkod} onChange={e => set('barkod', e.target.value)} maxLength={40} inputMode="numeric" /></Field>
          <Field label="Tedavi alanı"><Input list="dl-tedavi" value={d.tedavi_alani} onChange={e => set('tedavi_alani', e.target.value)} maxLength={80} /></Field>
          <Field label="Form"><Input list="dl-form" value={d.form} onChange={e => set('form', e.target.value)} maxLength={60} /></Field>
          <Field label="Stok"><Input type="number" min={0} step={1} value={d.stok} onChange={e => set('stok', e.target.value)} /></Field>
          <Field label="Fiyat (gizli)" hint="Sitede gösterilmez; yalnızca bu panelde görünür. Boş bırakılabilir.">
            <Input value={d.fiyat} onChange={e => set('fiyat', e.target.value)} inputMode="decimal" placeholder="örn. 12,50" />
          </Field>
        </div>
        <label className="flex items-center gap-2 font-body text-sm text-[#1E2A3E]">
          <input type="checkbox" checked={d.aktif} onChange={e => set('aktif', e.target.checked)} className="w-4 h-4 accent-[#0A5C8E]" />
          Sitede göster
        </label>
        <p className="font-body text-xs text-[#5A6A7E]">Bilinmeyen alanlara “-” yazın; tahmini bilgi girmeyin (barkod/üretici için TİTCK ruhsatlı ürünler listesi esas alınır).</p>
        <datalist id="dl-ruhsat">{options.ruhsat.map(o => <option key={o} value={o} />)}</datalist>
        <datalist id="dl-tedavi">{options.tedavi.map(o => <option key={o} value={o} />)}</datalist>
        <datalist id="dl-form">{options.form.map(o => <option key={o} value={o} />)}</datalist>
      </form>
    </Modal>
  );
}
