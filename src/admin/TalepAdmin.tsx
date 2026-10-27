import { useEffect, useMemo, useRef, useState } from 'react';
import { Plus, Upload, Search, AlertTriangle, Building2, FileText, Trash2, ExternalLink, Paperclip } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Button, Field, Input, Modal, Notice, Select, Textarea } from './ui';
import { parseTalepFormu, type ParsedForm } from './talepForm';

/* ---------- Tipler ---------- */
type Durum = 'yeni' | 'fiyat_calisiliyor' | 'teklif_verildi' | 'pazarlik' | 'siparis' | 'kaybedildi' | 'yanit_yok';
type Firma = {
  id: number; unvan: string; ulke: string; adres: string; vergi_no: string; vergi_dairesi: string; ruhsat_no: string;
  faaliyet_alani: string; telefon: string; email: string; web: string; yetkili_ad: string; yetkili_unvan: string;
  yetkili_telefon: string; yetkili_email: string; kara_liste: boolean; kara_liste_nedeni: string; notlar: string; created_at: string;
};
type Talep = {
  id: number; firma_id: number; form_no: string; talep_tarihi: string; kaynak: string; durum: Durum;
  teklif_tarihi: string | null; teklif_tutari: number | null; para_birimi: string; teslim_sekli: string; odeme_sekli: string;
  termin: string; soguk_zincir: boolean | null; ek_notlar: string; ic_notlar: string; dosya_yolu: string | null;
  updated_at: string; kalem_sayisi?: number;
};
type Kalem = {
  id?: number; ilac_id: number | null; urun_adi: string; etkin_madde: string; form_doz: string; miktar: string;
  ihrac_ulkesi: string; aciklama: string; birim_fiyat: string;
};
type IlacRef = { id: number; ad: string; fiyat: number | null; para?: string };

const DURUM: Record<Durum, { label: string; cls: string }> = {
  yeni: { label: 'Yeni', cls: 'bg-[#EAF3FA] text-[#0A5C8E]' },
  fiyat_calisiliyor: { label: 'Fiyat çalışılıyor', cls: 'bg-[#FFF4DB] text-[#8A5A00]' },
  teklif_verildi: { label: 'Teklif verildi', cls: 'bg-[#EFEAFB] text-[#5B3FA8]' },
  pazarlik: { label: 'Görüşülüyor', cls: 'bg-[#E6F4F7] text-[#16707F]' },
  siparis: { label: 'Sipariş', cls: 'bg-[#E6F6EF] text-[#0B6B47]' },
  kaybedildi: { label: 'Kaybedildi', cls: 'bg-[#EEF2F7] text-[#5A6A7E]' },
  yanit_yok: { label: 'Yanıt yok', cls: 'bg-[#FDECEA] text-[#9B2C20]' },
};
const KAYNAK = ['Form', 'E-posta', 'WhatsApp', 'Telefon', 'Diğer'];
const PARA = ['USD', 'EUR', 'TRY', 'RUB', 'KZT', 'AZN'];
const ULKELER = ['Azerbaycan', 'Kazakistan', 'Özbekistan', 'Kırgızistan', 'Türkmenistan', 'Tacikistan', 'Gürcistan', 'Rusya', 'Ukrayna', 'Moldova', 'Irak', 'Libya', 'Suriye', 'Lübnan', 'İran', 'Afganistan', 'Moğolistan', 'Türkiye'];
const FAALIYET = ['Ecza Deposu', 'Distribütör', 'Hastane', 'Eczane', 'Diğer'];
const TAKIP_GUN = 14;   // teklif verildikten sonra bu kadar gün ses yoksa "takip gerekli"
const today = () => new Date().toLocaleDateString('sv-SE');
const gunOnce = (d: string | null) => (d ? Math.floor((Date.now() - new Date(d + 'T00:00:00').getTime()) / 86400000) : 0);
const money = (n: number | null, c = 'USD') => (n === null ? '—' : `${n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${c}`);
const norm = (s: string) => s.toLocaleLowerCase('tr').replace(/\s+/g, ' ').trim();
const takipGerekli = (t: Talep) => t.durum === 'teklif_verildi' && gunOnce(t.teklif_tarihi) > TAKIP_GUN;

/* Firma güvenilirliği: geçmiş taleplerden hesaplanır */
function firmaDurumu(f: Firma | undefined, talepler: Talep[]) {
  const t = f ? talepler.filter(x => x.firma_id === f.id) : [];
  const siparis = t.filter(x => x.durum === 'siparis').length;
  const teklif = t.filter(x => ['teklif_verildi', 'pazarlik', 'yanit_yok', 'kaybedildi', 'siparis'].includes(x.durum)).length;
  const yanitsiz = t.filter(x => x.durum === 'yanit_yok' || takipGerekli(x)).length;
  const base = { talep: t.length, teklif, siparis, yanitsiz };
  if (f?.kara_liste) return { ...base, label: 'Kara liste', cls: 'bg-[#1E2A3E] text-white', uyari: true };
  if (siparis > 0) return { ...base, label: 'Müşteri', cls: 'bg-[#E6F6EF] text-[#0B6B47]', uyari: false };
  if (yanitsiz >= 2) return { ...base, label: 'Dönüş yapmıyor', cls: 'bg-[#FDECEA] text-[#9B2C20]', uyari: true };
  if (yanitsiz === 1) return { ...base, label: 'Dikkat', cls: 'bg-[#FFF4DB] text-[#8A5A00]', uyari: true };
  return { ...base, label: t.length > 1 ? 'Takipte' : 'Yeni firma', cls: 'bg-[#EEF2F7] text-[#5A6A7E]', uyari: false };
}

const emptyFirma = (): Omit<Firma, 'id' | 'created_at'> => ({
  unvan: '', ulke: '', adres: '', vergi_no: '', vergi_dairesi: '', ruhsat_no: '', faaliyet_alani: '', telefon: '', email: '', web: '',
  yetkili_ad: '', yetkili_unvan: '', yetkili_telefon: '', yetkili_email: '', kara_liste: false, kara_liste_nedeni: '', notlar: '',
});
const emptyKalem = (): Kalem => ({ ilac_id: null, urun_adi: '', etkin_madde: '', form_doz: '', miktar: '', ihrac_ulkesi: '', aciklama: '', birim_fiyat: '' });

/* Katalog eşleştirme: tam ad, yoksa aynı marka + ürün adındaki tüm sayılar (doz/adet) tek ürüne uyuyorsa */
const asciiUp = (s: string) => s.toLocaleUpperCase('tr').replace(/[İI]/g, 'I').replace(/Ş/g, 'S').replace(/Ç/g, 'C').replace(/Ö/g, 'O').replace(/Ü/g, 'U').replace(/Ğ/g, 'G');
function katalogEsle(ad: string, ilaclar: IlacRef[]): IlacRef | undefined {
  const a = asciiUp(ad).trim();
  if (!a) return undefined;
  const exact = ilaclar.find(i => asciiUp(i.ad) === a);
  if (exact) return exact;
  const marka = a.split(/[\s,]+/)[0];
  const sayilar = a.match(/\d+(?:[.,]\d+)?/g) ?? [];
  if (!sayilar.length) return undefined;
  const aday = ilaclar.filter(i => {
    const u = asciiUp(i.ad);
    if (u.split(/[\s,]+/)[0] !== marka) return false;
    const us = (u.match(/\d+(?:[.,]\d+)?/g) ?? []).map(x => x.replace(',', '.'));
    return sayilar.every(n => us.includes(n.replace(',', '.')));
  });
  return aday.length === 1 ? aday[0] : undefined;
}

/* Aynı firmayı bul: vergi no → e-posta → ünvan */
function firmaEsle(firmalar: Firma[], f: { unvan: string; vergi_no: string; email: string; yetkili_email: string }) {
  const vn = f.vergi_no.replace(/\D/g, '');
  return firmalar.find(x => vn && x.vergi_no.replace(/\D/g, '') === vn)
    ?? firmalar.find(x => f.email && norm(x.email) === norm(f.email))
    ?? firmalar.find(x => f.yetkili_email && norm(x.yetkili_email) === norm(f.yetkili_email))
    ?? firmalar.find(x => f.unvan && norm(x.unvan) === norm(f.unvan));
}

/* ======================================================================= */
export default function TalepAdmin() {
  const [view, setView] = useState<'talepler' | 'firmalar'>('talepler');
  const [firmalar, setFirmalar] = useState<Firma[]>([]);
  const [talepler, setTalepler] = useState<Talep[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [flash, setFlash] = useState('');
  const [q, setQ] = useState('');
  const [durumF, setDurumF] = useState<'' | Durum | 'takip'>('');
  const [ulkeF, setUlkeF] = useState('');
  const [editing, setEditing] = useState<{ talep?: Talep; parsed?: ParsedForm; file?: File } | null>(null);
  const [editFirma, setEditFirma] = useState<Firma | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    const [f, t, k] = await Promise.all([
      supabase!.from('firmalar').select('*').order('unvan'),
      supabase!.from('talepler').select('*').order('talep_tarihi', { ascending: false }).order('id', { ascending: false }),
      supabase!.from('talep_kalemleri').select('talep_id'),
    ]);
    const err = f.error || t.error || k.error;
    if (err) { setError('Veriler yüklenemedi: ' + err.message); return; }
    const say = new Map<number, number>();
    (k.data as { talep_id: number }[]).forEach(r => say.set(r.talep_id, (say.get(r.talep_id) ?? 0) + 1));
    setFirmalar(f.data as Firma[]);
    setTalepler((t.data as Talep[]).map(x => ({ ...x, kalem_sayisi: say.get(x.id) ?? 0 })));
  };
  useEffect(() => { load().finally(() => setLoading(false)); }, []);

  const firmaById = useMemo(() => new Map(firmalar.map(f => [f.id, f])), [firmalar]);
  const ulkeler = useMemo(() => Array.from(new Set(firmalar.map(f => f.ulke).filter(Boolean))).sort((a, b) => a.localeCompare(b, 'tr')), [firmalar]);

  const ozet = useMemo(() => {
    const acik = talepler.filter(t => ['yeni', 'fiyat_calisiliyor', 'pazarlik'].includes(t.durum)).length;
    const takip = talepler.filter(takipGerekli).length;
    const teklifli = talepler.filter(t => ['teklif_verildi', 'pazarlik', 'yanit_yok', 'kaybedildi', 'siparis'].includes(t.durum));
    const siparis = teklifli.filter(t => t.durum === 'siparis').length;
    return { acik, takip, teklif: teklifli.length, donusum: teklifli.length ? Math.round((siparis / teklifli.length) * 100) : 0, siparis };
  }, [talepler]);

  const filtered = useMemo(() => talepler.filter(t => {
    const f = firmaById.get(t.firma_id);
    if (durumF === 'takip' ? !takipGerekli(t) : durumF && t.durum !== durumF) return false;
    if (ulkeF && f?.ulke !== ulkeF) return false;
    if (q) { const n = norm(q); if (!norm(`${f?.unvan} ${f?.ulke} ${t.form_no} ${f?.yetkili_ad}`).includes(n)) return false; }
    return true;
  }), [talepler, firmaById, durumF, ulkeF, q]);

  const done = async (msg: string) => {
    setEditing(null); setEditFirma(null);
    await load();
    setFlash(msg); setTimeout(() => setFlash(''), 4000);
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setError('');
    if (/\.docx$/i.test(file.name)) {
      try { setEditing({ parsed: await parseTalepFormu(file), file }); }
      catch (e) { setError(`Form okunamadı: ${(e as Error).message} Bilgileri elle girebilirsiniz; dosya talebe eklenecek.`); setEditing({ file }); }
    } else {
      // PDF / fotoğraf (kaşeli-imzalı tarama): otomatik okunamaz, dosya eklenir, bilgiler elle girilir.
      setEditing({ file });
    }
    if (fileRef.current) fileRef.current.value = '';
  };

  const quickYanitYok = async (t: Talep) => {
    const { error } = await supabase!.from('talepler').update({ durum: 'yanit_yok' }).eq('id', t.id);
    if (error) setError(error.message); else done('Talep "Yanıt yok" olarak işaretlendi.');
  };

  return (
    <section>
      <div className="flex flex-wrap items-end gap-3 mb-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-[#1E2A3E]">İlaç talepleri</h1>
          <p className="font-body text-sm text-[#5A6A7E]">Talep formları, fiyat teklifleri ve firma geçmişi</p>
        </div>
        <div className="ml-auto flex flex-wrap gap-2">
          <input ref={fileRef} type="file" accept=".docx,.pdf,.jpg,.jpeg,.png,.webp,.heic" className="hidden" onChange={e => onFile(e.target.files?.[0])} />
          <Button variant="ghost" onClick={() => fileRef.current?.click()}><Upload size={16} />Formu yükle</Button>
          <Button onClick={() => setEditing({})}><Plus size={16} />Yeni talep</Button>
        </div>
      </div>

      {/* Özet kartları */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {[
          { k: 'Açık talep', v: ozet.acik, on: () => setDurumF('') },
          { k: `Takip gerekli (>${TAKIP_GUN} gün)`, v: ozet.takip, on: () => setDurumF('takip'), warn: ozet.takip > 0 },
          { k: 'Verilen teklif', v: ozet.teklif },
          { k: 'Siparişe dönüşüm', v: `%${ozet.donusum}`, sub: `${ozet.siparis} sipariş` },
        ].map(c => (
          <button key={c.k} onClick={c.on} disabled={!c.on}
            className={`text-left bg-white border rounded-xl p-4 ${c.warn ? 'border-[#F3C2BC]' : 'border-[#D0D8E4]'} ${c.on ? 'hover:border-[#0A5C8E]' : 'cursor-default'}`}>
            <p className="font-body text-xs text-[#5A6A7E]">{c.k}</p>
            <p className={`font-display font-bold text-2xl ${c.warn ? 'text-[#9B2C20]' : 'text-[#1E2A3E]'}`}>{c.v}</p>
            {c.sub && <p className="font-body text-xs text-[#5A6A7E]">{c.sub}</p>}
          </button>
        ))}
      </div>

      <div className="flex gap-1 mb-3 border-b border-[#D0D8E4]">
        {(['talepler', 'firmalar'] as const).map(v => (
          <button key={v} onClick={() => setView(v)}
            className={`px-3 py-2 font-body text-sm -mb-px border-b-2 ${view === v ? 'border-[#0A5C8E] text-[#0A5C8E] font-semibold' : 'border-transparent text-[#5A6A7E]'}`}>
            {v === 'talepler' ? `Talepler (${talepler.length})` : `Firmalar (${firmalar.length})`}
          </button>
        ))}
      </div>

      {error && <div className="mb-3"><Notice kind="error">{error}</Notice></div>}
      {flash && <div className="mb-3"><Notice kind="ok">{flash}</Notice></div>}

      <div className="flex flex-wrap gap-2 mb-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5A6A7E]" />
          <Input placeholder="Firma, ülke, yetkili veya form no ara…" value={q} onChange={e => setQ(e.target.value)} className="pl-9" />
        </div>
        {view === 'talepler' && (
          <Select value={durumF} onChange={e => setDurumF(e.target.value as typeof durumF)} className="w-auto">
            <option value="">Tüm durumlar</option>
            <option value="takip">⚠ Takip gerekli</option>
            {Object.entries(DURUM).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </Select>
        )}
        <Select value={ulkeF} onChange={e => setUlkeF(e.target.value)} className="w-auto">
          <option value="">Tüm ülkeler</option>
          {ulkeler.map(u => <option key={u}>{u}</option>)}
        </Select>
      </div>

      {view === 'talepler' ? (
        <div className="bg-white border border-[#D0D8E4] rounded-xl overflow-x-auto">
          <table className="w-full min-w-[880px] font-body text-sm">
            <thead>
              <tr className="bg-[#F4F7FC] text-left text-[#5A6A7E] text-xs uppercase tracking-wide">
                <th className="px-3 py-2.5 font-medium">Tarih</th>
                <th className="px-3 py-2.5 font-medium">Firma</th>
                <th className="px-3 py-2.5 font-medium">Ülke</th>
                <th className="px-3 py-2.5 font-medium text-right">Kalem</th>
                <th className="px-3 py-2.5 font-medium">Durum</th>
                <th className="px-3 py-2.5 font-medium text-right">Teklif</th>
                <th className="px-3 py-2.5 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan={7} className="px-3 py-8 text-center text-[#5A6A7E]">Yükleniyor…</td></tr>}
              {!loading && filtered.length === 0 && (
                <tr><td colSpan={7} className="px-3 py-10 text-center text-[#5A6A7E]">
                  {talepler.length ? 'Sonuç yok.' : 'Henüz talep yok. Gelen formu "Formu yükle" ile ekleyin.'}
                </td></tr>
              )}
              {filtered.map(t => {
                const f = firmaById.get(t.firma_id); const fd = firmaDurumu(f, talepler);
                return (
                  <tr key={t.id} className="border-t border-[#EEF2F7] hover:bg-[#F9FBFD] cursor-pointer" onClick={() => setEditing({ talep: t })}>
                    <td className="px-3 py-2.5 whitespace-nowrap">{t.talep_tarihi}</td>
                    <td className="px-3 py-2.5">
                      <div className="font-medium text-[#1E2A3E]">{f?.unvan ?? '—'}</div>
                      <span className={`inline-block mt-0.5 px-1.5 py-0.5 rounded text-[11px] ${fd.cls}`}>{fd.label}</span>
                    </td>
                    <td className="px-3 py-2.5 text-[#5A6A7E]">{f?.ulke}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{t.kalem_sayisi}</td>
                    <td className="px-3 py-2.5">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${DURUM[t.durum].cls}`}>{DURUM[t.durum].label}</span>
                      {takipGerekli(t) && <div className="text-[11px] text-[#9B2C20] mt-1">⚠ {gunOnce(t.teklif_tarihi)} gündür dönüş yok</div>}
                    </td>
                    <td className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap">{money(t.teklif_tutari === null ? null : Number(t.teklif_tutari), t.para_birimi)}</td>
                    <td className="px-3 py-2.5 text-right" onClick={e => e.stopPropagation()}>
                      {takipGerekli(t) && <Button variant="ghost" className="!px-2 !py-1 text-xs" onClick={() => quickYanitYok(t)}>Yanıt yok</Button>}
                      {t.dosya_yolu && <Paperclip size={14} className="inline ml-2 text-[#5A6A7E]" />}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white border border-[#D0D8E4] rounded-xl overflow-x-auto">
          <table className="w-full min-w-[820px] font-body text-sm">
            <thead>
              <tr className="bg-[#F4F7FC] text-left text-[#5A6A7E] text-xs uppercase tracking-wide">
                <th className="px-3 py-2.5 font-medium">Firma</th>
                <th className="px-3 py-2.5 font-medium">Ülke</th>
                <th className="px-3 py-2.5 font-medium">Yetkili</th>
                <th className="px-3 py-2.5 font-medium text-right">Talep</th>
                <th className="px-3 py-2.5 font-medium text-right">Teklif</th>
                <th className="px-3 py-2.5 font-medium text-right">Sipariş</th>
                <th className="px-3 py-2.5 font-medium">Değerlendirme</th>
              </tr>
            </thead>
            <tbody>
              {firmalar.filter(f => (!ulkeF || f.ulke === ulkeF) && (!q || norm(`${f.unvan} ${f.ulke} ${f.yetkili_ad} ${f.email}`).includes(norm(q)))).map(f => {
                const d = firmaDurumu(f, talepler);
                return (
                  <tr key={f.id} className="border-t border-[#EEF2F7] hover:bg-[#F9FBFD] cursor-pointer" onClick={() => setEditFirma(f)}>
                    <td className="px-3 py-2.5 font-medium text-[#1E2A3E]">{f.unvan}</td>
                    <td className="px-3 py-2.5 text-[#5A6A7E]">{f.ulke}</td>
                    <td className="px-3 py-2.5 text-[#5A6A7E]">{f.yetkili_ad}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{d.talep}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{d.teklif}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{d.siparis}</td>
                    <td className="px-3 py-2.5"><span className={`px-2 py-0.5 rounded-full text-xs ${d.cls}`}>{d.label}</span></td>
                  </tr>
                );
              })}
              {!loading && firmalar.length === 0 && <tr><td colSpan={7} className="px-3 py-10 text-center text-[#5A6A7E]">Henüz firma yok; ilk talep eklendiğinde oluşur.</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <TalepModal key={editing.talep?.id ?? 'yeni'} {...editing} firmalar={firmalar} talepler={talepler}
          onClose={() => setEditing(null)} onSaved={done} />
      )}
      {editFirma && (
        <FirmaModal firma={editFirma} talepler={talepler.filter(t => t.firma_id === editFirma.id)}
          onClose={() => setEditFirma(null)} onSaved={done}
          onOpenTalep={t => { setEditFirma(null); setEditing({ talep: t }); }} />
      )}
    </section>
  );
}

/* ======================================================================= */
type FirmaForm = Omit<Firma, 'id' | 'created_at'>;
function FirmaFields({ f, set }: { f: FirmaForm; set: (k: keyof FirmaForm, v: string | boolean) => void }) {
  const inp = (k: keyof FirmaForm, label: string, extra: Partial<React.InputHTMLAttributes<HTMLInputElement>> = {}) => (
    <Field label={label}><Input value={f[k] as string} onChange={e => set(k, e.target.value)} {...extra} /></Field>
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="sm:col-span-2">{inp('unvan', 'Firma ünvanı (resmi) *', { required: true, maxLength: 300 })}</div>
      <Field label="Ülke"><Input list="dl-ulke" value={f.ulke} onChange={e => set('ulke', e.target.value)} maxLength={100} /></Field>
      <Field label="Faaliyet alanı"><Input list="dl-faaliyet" value={f.faaliyet_alani} onChange={e => set('faaliyet_alani', e.target.value)} maxLength={120} /></Field>
      <div className="sm:col-span-2">{inp('adres', 'Resmi kayıtlı adres', { maxLength: 600 })}</div>
      {inp('vergi_no', 'Vergi numarası', { maxLength: 60 })}
      {inp('vergi_dairesi', 'Vergi dairesi', { maxLength: 120 })}
      {inp('ruhsat_no', 'Faaliyet ruhsat no', { maxLength: 120 })}
      {inp('web', 'Web sitesi', { maxLength: 300 })}
      {inp('telefon', 'Şirket telefonu', { maxLength: 60 })}
      {inp('email', 'Şirket e-posta', { type: 'email', maxLength: 200 })}
      {inp('yetkili_ad', 'Yetkili ad-soyad', { maxLength: 200 })}
      {inp('yetkili_unvan', 'Yetkili ünvan / görev', { maxLength: 200 })}
      {inp('yetkili_telefon', 'Yetkili telefon / GSM', { maxLength: 60 })}
      {inp('yetkili_email', 'Yetkili e-posta', { type: 'email', maxLength: 200 })}
      <datalist id="dl-ulke">{ULKELER.map(u => <option key={u} value={u} />)}</datalist>
      <datalist id="dl-faaliyet">{FAALIYET.map(u => <option key={u} value={u} />)}</datalist>
    </div>
  );
}

function GecmisUyari({ firma, talepler }: { firma: Firma; talepler: Talep[] }) {
  const d = firmaDurumu(firma, talepler);
  if (!d.talep) return null;
  return (
    <div className={`flex gap-2 items-start px-3 py-2 rounded-lg border font-body text-sm ${d.uyari ? 'bg-[#FDECEA] border-[#F3C2BC] text-[#9B2C20]' : 'bg-[#EAF3FA] border-[#C3DCEE] text-[#0A5C8E]'}`}>
      {d.uyari ? <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" /> : <Building2 size={16} className="mt-0.5 flex-shrink-0" />}
      <div>
        <strong>{firma.unvan}</strong> — {d.label}. Daha önce {d.talep} talep, {d.teklif} teklif, {d.siparis} sipariş
        {d.yanitsiz ? `; ${d.yanitsiz} teklife dönüş yapmadı` : ''}.
        {firma.kara_liste && firma.kara_liste_nedeni && <div className="mt-1">Kara liste nedeni: {firma.kara_liste_nedeni}</div>}
      </div>
    </div>
  );
}

/* ======================================================================= */
function TalepModal({ talep, parsed, file, firmalar, talepler, onClose, onSaved }: {
  talep?: Talep; parsed?: ParsedForm; file?: File; firmalar: Firma[]; talepler: Talep[];
  onClose: () => void; onSaved: (msg: string) => void;
}) {
  const isNew = !talep;
  const eslesen = parsed ? firmaEsle(firmalar, parsed.firma) : undefined;
  const [firmaId, setFirmaId] = useState<number | 'yeni'>(talep?.firma_id ?? eslesen?.id ?? (parsed ? 'yeni' : firmalar.length ? firmalar[0].id : 'yeni'));
  const [firmaAra, setFirmaAra] = useState('');
  const [yeniFirma, setYeniFirma] = useState(() => ({ ...emptyFirma(), ...(parsed?.firma ?? {}) }));
  const [t, setT] = useState(() => ({
    form_no: talep?.form_no ?? parsed?.talep.form_no ?? '',
    talep_tarihi: talep?.talep_tarihi ?? (parsed?.talep.talep_tarihi || today()),
    kaynak: talep?.kaynak ?? (file || parsed ? 'Form' : 'E-posta'),
    durum: talep?.durum ?? ('yeni' as Durum),
    teklif_tarihi: talep?.teklif_tarihi ?? '',
    para_birimi: talep?.para_birimi ?? 'USD',
    teklif_tutari: talep?.teklif_tutari != null ? String(talep.teklif_tutari) : '',
    teslim_sekli: talep?.teslim_sekli ?? parsed?.talep.teslim_sekli ?? '',
    odeme_sekli: talep?.odeme_sekli ?? parsed?.talep.odeme_sekli ?? '',
    termin: talep?.termin ?? parsed?.talep.termin ?? '',
    soguk_zincir: talep?.soguk_zincir ?? parsed?.talep.soguk_zincir ?? null,
    ek_notlar: talep?.ek_notlar ?? parsed?.talep.ek_notlar ?? '',
    ic_notlar: talep?.ic_notlar ?? '',
  }));
  const [kalemler, setKalemler] = useState<Kalem[]>(() => parsed?.kalemler.length
    ? parsed.kalemler.map(k => ({ ...emptyKalem(), ...k })) : [emptyKalem()]);
  const [ilaclar, setIlaclar] = useState<IlacRef[]>([]);
  const [newFile, setNewFile] = useState<File | undefined>(file);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  // Katalog (fiyat çalışması için gizli fiyatlar dahil) + mevcut talebin kalemleri
  useEffect(() => {
    (async () => {
      const rows: IlacRef[] = [];
      const prices = new Map<number, { fiyat: number; para: string }>();
      for (let from = 0; ; from += 1000) {
        const { data } = await supabase!.from('ilaclar').select('id, ad').order('ad').range(from, from + 999);
        rows.push(...((data ?? []) as IlacRef[]));
        if (!data || data.length < 1000) break;
      }
      const { data: fp } = await supabase!.from('ilac_fiyatlari').select('ilac_id, fiyat, para_birimi');
      (fp ?? []).forEach((p: { ilac_id: number; fiyat: number | null; para_birimi?: string }) => { if (p.fiyat != null) prices.set(p.ilac_id, { fiyat: Number(p.fiyat), para: p.para_birimi ?? 'USD' }); });
      const katalog = rows.map(r => ({ ...r, fiyat: prices.get(r.id)?.fiyat ?? null, para: prices.get(r.id)?.para }));
      setIlaclar(katalog);
      // Formdan gelen satırları kataloğa bağla
      if (!talep) setKalemler(prev => prev.map(k => k.ilac_id || !k.urun_adi ? k : { ...k, ilac_id: katalogEsle(k.urun_adi, katalog)?.id ?? null }));
      if (talep) {
        const { data } = await supabase!.from('talep_kalemleri').select('*').eq('talep_id', talep.id).order('sira');
        const ks = (data ?? []) as (Omit<Kalem, 'birim_fiyat'> & { birim_fiyat: number | null })[];
        setKalemler(ks.length ? ks.map(k => ({ ...k, birim_fiyat: k.birim_fiyat == null ? '' : String(k.birim_fiyat) })) : [emptyKalem()]);
      }
    })();
  }, [talep]);

  const ilacByAd = useMemo(() => new Map(ilaclar.map(i => [norm(i.ad), i])), [ilaclar]);
  const ilacById = useMemo(() => new Map(ilaclar.map(i => [i.id, i])), [ilaclar]);
  const seciliFirma = typeof firmaId === 'number' ? firmalar.find(f => f.id === firmaId) : undefined;
  const firmaListe = firmalar.filter(f => !firmaAra || norm(`${f.unvan} ${f.ulke}`).includes(norm(firmaAra)));

  const setK = (i: number, k: keyof Kalem, v: string) => setKalemler(prev => prev.map((row, j) => {
    if (j !== i) return row;
    const next = { ...row, [k]: v } as Kalem;
    if (k === 'urun_adi') next.ilac_id = (ilacByAd.get(norm(v)) ?? katalogEsle(v, ilaclar))?.id ?? null;
    return next;
  }));
  const hesapTutar = kalemler.reduce((s, k) => {
    const m = Number(k.miktar.replace(/[^\d.,]/g, '').replace(',', '.')); const f = Number(k.birim_fiyat.replace(',', '.'));
    return Number.isFinite(m) && Number.isFinite(f) && m > 0 && f > 0 ? s + m * f : s;
  }, 0);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (firmaId === 'yeni' && !yeniFirma.unvan.trim()) { setError('Firma ünvanı zorunlu.'); return; }
    const dolu = kalemler.filter(k => k.urun_adi.trim());
    if (!dolu.length) { setError('En az bir ürün satırı girin.'); return; }
    const tutar = t.teklif_tutari.trim() === '' ? null : Number(t.teklif_tutari.replace(',', '.'));
    if (tutar !== null && (!Number.isFinite(tutar) || tutar < 0)) { setError('Teklif tutarı geçerli bir sayı olmalı.'); return; }
    for (const k of dolu) {
      if (k.birim_fiyat.trim() && !(Number(k.birim_fiyat.replace(',', '.')) >= 0)) { setError(`"${k.urun_adi}" için birim fiyat geçersiz.`); return; }
    }
    setBusy(true);
    try {
      let fid = firmaId;
      if (fid === 'yeni') {
        const r = await supabase!.from('firmalar').insert({ ...yeniFirma, unvan: yeniFirma.unvan.trim() }).select('id').single();
        if (r.error) throw r.error;
        fid = r.data.id as number;
      }
      const teklifVerildi = ['teklif_verildi', 'pazarlik', 'siparis', 'yanit_yok', 'kaybedildi'].includes(t.durum);
      const row = {
        firma_id: fid, form_no: t.form_no.trim(), talep_tarihi: t.talep_tarihi, kaynak: t.kaynak, durum: t.durum,
        teklif_tarihi: t.teklif_tarihi || (teklifVerildi ? today() : null), teklif_tutari: tutar, para_birimi: t.para_birimi,
        teslim_sekli: t.teslim_sekli.trim(), odeme_sekli: t.odeme_sekli.trim(), termin: t.termin.trim(),
        soguk_zincir: t.soguk_zincir, ek_notlar: t.ek_notlar.trim(), ic_notlar: t.ic_notlar.trim(),
      };
      const res = isNew
        ? await supabase!.from('talepler').insert(row).select('id, dosya_yolu').single()
        : await supabase!.from('talepler').update(row).eq('id', talep!.id).select('id, dosya_yolu').single();
      if (res.error) throw res.error;
      const tid = res.data.id as number;

      // Kalemleri yeniden yaz
      const del = await supabase!.from('talep_kalemleri').delete().eq('talep_id', tid);
      if (del.error) throw del.error;
      const ins = await supabase!.from('talep_kalemleri').insert(dolu.map((k, i) => ({
        talep_id: tid, sira: i + 1, ilac_id: k.ilac_id, urun_adi: k.urun_adi.trim(), etkin_madde: k.etkin_madde.trim(),
        form_doz: k.form_doz.trim(), miktar: k.miktar.trim(), ihrac_ulkesi: k.ihrac_ulkesi.trim(), aciklama: k.aciklama.trim(),
        birim_fiyat: k.birim_fiyat.trim() === '' ? null : Number(k.birim_fiyat.replace(',', '.')),
      })));
      if (ins.error) throw ins.error;

      // Form dosyası (gizli depo)
      if (newFile) {
        const safe = newFile.name.normalize('NFKD').replace(/[^\w.-]+/g, '_').slice(-80);
        const path = `${tid}/${Date.now()}_${safe}`;
        const up = await supabase!.storage.from('talep-formlari').upload(path, newFile, { contentType: newFile.type || undefined });
        if (up.error) throw new Error('Talep kaydedildi ama dosya yüklenemedi: ' + up.error.message);
        if (res.data.dosya_yolu) await supabase!.storage.from('talep-formlari').remove([res.data.dosya_yolu]);
        const u = await supabase!.from('talepler').update({ dosya_yolu: path }).eq('id', tid);
        if (u.error) throw u.error;
      }
      onSaved(isNew ? 'Talep kaydedildi.' : 'Talep güncellendi.');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const openFile = async () => {
    if (!talep?.dosya_yolu) return;
    const { data, error } = await supabase!.storage.from('talep-formlari').createSignedUrl(talep.dosya_yolu, 120);
    if (error) setError(error.message); else window.open(data.signedUrl, '_blank', 'noopener');
  };

  const remove = async () => {
    if (!talep || !confirm('Bu talep ve ürün satırları kalıcı olarak silinsin mi?')) return;
    setBusy(true);
    if (talep.dosya_yolu) await supabase!.storage.from('talep-formlari').remove([talep.dosya_yolu]);
    const { error } = await supabase!.from('talepler').delete().eq('id', talep.id);
    setBusy(false);
    if (error) setError(error.message); else onSaved('Talep silindi.');
  };

  return (
    <Modal wide title={isNew ? (parsed ? 'Formdan yeni talep' : 'Yeni talep') : `Talep #${talep!.id}`} onClose={onClose}
      footer={<>
        {!isNew && <Button variant="danger" className="mr-auto" disabled={busy} onClick={remove}><Trash2 size={15} />Sil</Button>}
        <Button variant="ghost" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" form="talep-form" disabled={busy}>{busy ? 'Kaydediliyor…' : 'Kaydet'}</Button>
      </>}>
      <form id="talep-form" onSubmit={save} className="space-y-5">
        {error && <Notice kind="error">{error}</Notice>}
        {parsed && <Notice kind="info">Formdan {parsed.kalemler.length} ürün ve firma bilgileri okundu. Kaydetmeden önce kontrol edin.</Notice>}

        {/* Firma */}
        <div className="space-y-3">
          <h3 className="font-display font-bold text-[15px] text-[#1E2A3E]">Firma</h3>
          {isNew && (
            <div className="flex flex-wrap gap-2 items-end">
              <Field label="Kayıtlı firma seç veya yeni ekle">
                <Select value={String(firmaId)} onChange={e => setFirmaId(e.target.value === 'yeni' ? 'yeni' : Number(e.target.value))} className="min-w-[280px]">
                  <option value="yeni">+ Yeni firma</option>
                  {firmaListe.map(f => <option key={f.id} value={f.id}>{f.unvan}{f.ulke ? ` — ${f.ulke}` : ''}</option>)}
                </Select>
              </Field>
              {firmalar.length > 8 && <Input placeholder="Firma ara…" value={firmaAra} onChange={e => setFirmaAra(e.target.value)} className="!w-48" />}
            </div>
          )}
          {parsed && eslesen && firmaId === eslesen.id && (
            <Notice kind="info">Bu form kayıtlı bir firmayla eşleşti (vergi no / e-posta / ünvan). Gerekirse "Yeni firma" seçin.</Notice>
          )}
          {seciliFirma && <GecmisUyari firma={seciliFirma} talepler={talepler} />}
          {seciliFirma && !isNew && (
            <p className="font-body text-sm text-[#5A6A7E]">{seciliFirma.unvan} · {seciliFirma.ulke} · {seciliFirma.yetkili_ad} {seciliFirma.yetkili_email}</p>
          )}
          {firmaId === 'yeni' && <FirmaFields f={yeniFirma} set={(k, v) => setYeniFirma(p => ({ ...p, [k]: v }))} />}
        </div>

        {/* Ürünler */}
        <div className="space-y-2">
          <h3 className="font-display font-bold text-[15px] text-[#1E2A3E]">Talep edilen ürünler ve fiyat çalışması</h3>
          <div className="overflow-x-auto border border-[#D0D8E4] rounded-lg">
            <table className="w-full min-w-[820px] font-body text-sm">
              <thead><tr className="bg-[#F4F7FC] text-left text-[#5A6A7E] text-xs">
                <th className="px-2 py-2 w-[26%]">Ürün adı</th><th className="px-2 py-2">Etkin madde</th><th className="px-2 py-2">Form & doz</th>
                <th className="px-2 py-2 w-20">Miktar</th><th className="px-2 py-2">İhraç ülkesi</th>
                <th className="px-2 py-2 w-24">Katalog fiyatı</th><th className="px-2 py-2 w-24">Teklif birim</th><th className="w-8"></th>
              </tr></thead>
              <tbody>
                {kalemler.map((k, i) => {
                  const kat = k.ilac_id ? ilacById.get(k.ilac_id) : undefined;
                  return (
                    <tr key={i} className="border-t border-[#EEF2F7] align-top">
                      <td className="p-1.5">
                        <Input list="dl-katalog" value={k.urun_adi} onChange={e => setK(i, 'urun_adi', e.target.value)} maxLength={300} />
                        <div className="text-[11px] mt-0.5 text-[#5A6A7E] truncate" title={kat?.ad}>{kat ? `✓ ${kat.ad}` : k.urun_adi ? 'Katalogda eşleşme yok' : ''}</div>
                      </td>
                      <td className="p-1.5"><Input value={k.etkin_madde} onChange={e => setK(i, 'etkin_madde', e.target.value)} /></td>
                      <td className="p-1.5"><Input value={k.form_doz} onChange={e => setK(i, 'form_doz', e.target.value)} /></td>
                      <td className="p-1.5"><Input value={k.miktar} onChange={e => setK(i, 'miktar', e.target.value)} /></td>
                      <td className="p-1.5"><Input list="dl-ulke2" value={k.ihrac_ulkesi} onChange={e => setK(i, 'ihrac_ulkesi', e.target.value)} /></td>
                      <td className="p-1.5 pt-3.5 tabular-nums text-[#5A6A7E]">{kat?.fiyat != null ? `${kat.fiyat.toFixed(2)} ${kat.para ?? ''}` : '—'}</td>
                      <td className="p-1.5"><Input inputMode="decimal" value={k.birim_fiyat} onChange={e => setK(i, 'birim_fiyat', e.target.value)} placeholder={kat?.fiyat != null ? kat.fiyat.toFixed(2) : ''} /></td>
                      <td className="p-1.5 pt-2.5">
                        <button type="button" aria-label="Satırı sil" className="p-1 text-[#5A6A7E] hover:text-[#C0392B]"
                          onClick={() => setKalemler(p => p.length > 1 ? p.filter((_, j) => j !== i) : [emptyKalem()])}><Trash2 size={15} /></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ghost" type="button" onClick={() => setKalemler(p => [...p, emptyKalem()])}><Plus size={15} />Satır ekle</Button>
            {hesapTutar > 0 && (
              <span className="font-body text-sm text-[#5A6A7E]">Satırlardan hesaplanan toplam: <strong>{money(hesapTutar, t.para_birimi)}</strong>
                <button type="button" className="ml-2 text-[#0A5C8E] underline" onClick={() => setT({ ...t, teklif_tutari: hesapTutar.toFixed(2) })}>teklif tutarına aktar</button>
              </span>
            )}
          </div>
          <datalist id="dl-katalog">{ilaclar.map(i => <option key={i.id} value={i.ad} />)}</datalist>
          <datalist id="dl-ulke2">{ULKELER.map(u => <option key={u} value={u} />)}</datalist>
        </div>

        {/* Talep & teklif */}
        <div className="space-y-3">
          <h3 className="font-display font-bold text-[15px] text-[#1E2A3E]">Talep ve teklif</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Field label="Durum">
              <Select value={t.durum} onChange={e => setT({ ...t, durum: e.target.value as Durum })}>
                {Object.entries(DURUM).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </Select>
            </Field>
            <Field label="Talep tarihi"><Input type="date" value={t.talep_tarihi} onChange={e => setT({ ...t, talep_tarihi: e.target.value })} required /></Field>
            <Field label="Kaynak"><Select value={t.kaynak} onChange={e => setT({ ...t, kaynak: e.target.value })}>{KAYNAK.map(k => <option key={k}>{k}</option>)}</Select></Field>
            <Field label="Form no"><Input value={t.form_no} onChange={e => setT({ ...t, form_no: e.target.value })} maxLength={60} /></Field>
            <Field label="Teklif tarihi" hint="Durum 'Teklif verildi' olunca boşsa bugün yazılır.">
              <Input type="date" value={t.teklif_tarihi} onChange={e => setT({ ...t, teklif_tarihi: e.target.value })} />
            </Field>
            <Field label="Teklif tutarı"><Input inputMode="decimal" value={t.teklif_tutari} onChange={e => setT({ ...t, teklif_tutari: e.target.value })} /></Field>
            <Field label="Para birimi"><Select value={t.para_birimi} onChange={e => setT({ ...t, para_birimi: e.target.value })}>{PARA.map(p => <option key={p}>{p}</option>)}</Select></Field>
            <Field label="Soğuk zincir">
              <Select value={t.soguk_zincir === null ? '' : t.soguk_zincir ? 'evet' : 'hayir'}
                onChange={e => setT({ ...t, soguk_zincir: e.target.value === '' ? null : e.target.value === 'evet' })}>
                <option value="">Belirtilmedi</option><option value="evet">Evet (2-8°C)</option><option value="hayir">Hayır</option>
              </Select>
            </Field>
            <Field label="Teslim şekli (Incoterms)"><Input list="dl-inco" value={t.teslim_sekli} onChange={e => setT({ ...t, teslim_sekli: e.target.value })} /></Field>
            <Field label="Ödeme şekli"><Input value={t.odeme_sekli} onChange={e => setT({ ...t, odeme_sekli: e.target.value })} /></Field>
            <Field label="Talep edilen termin"><Input value={t.termin} onChange={e => setT({ ...t, termin: e.target.value })} /></Field>
          </div>
          <datalist id="dl-inco">{['EXW', 'FCA', 'FOB', 'CIF', 'CIP', 'DAP', 'DDP'].map(x => <option key={x} value={x} />)}</datalist>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Müşterinin ek notları"><Textarea rows={3} value={t.ek_notlar} onChange={e => setT({ ...t, ek_notlar: e.target.value })} /></Field>
            <Field label="İç notlar (yalnızca ekip)"><Textarea rows={3} value={t.ic_notlar} onChange={e => setT({ ...t, ic_notlar: e.target.value })} /></Field>
          </div>
        </div>

        {/* Dosya */}
        <div className="flex flex-wrap items-center gap-3">
          <input ref={fileRef} type="file" accept=".docx,.pdf,.jpg,.jpeg,.png,.webp,.heic" className="hidden" onChange={e => setNewFile(e.target.files?.[0])} />
          <FileText size={16} className="text-[#5A6A7E]" />
          {newFile ? <span className="font-body text-sm">{newFile.name} <span className="text-[#5A6A7E]">(kaydedince yüklenecek)</span></span>
            : talep?.dosya_yolu ? <button type="button" onClick={openFile} className="font-body text-sm text-[#0A5C8E] underline inline-flex items-center gap-1">Kaşeli/imzalı formu aç <ExternalLink size={13} /></button>
              : <span className="font-body text-sm text-[#5A6A7E]">Form dosyası eklenmedi</span>}
          <Button variant="ghost" type="button" onClick={() => fileRef.current?.click()}><Paperclip size={15} />{talep?.dosya_yolu || newFile ? 'Dosyayı değiştir' : 'Dosya ekle'}</Button>
        </div>
      </form>
    </Modal>
  );
}

/* ======================================================================= */
function FirmaModal({ firma, talepler, onClose, onSaved, onOpenTalep }: {
  firma: Firma; talepler: Talep[]; onClose: () => void; onSaved: (msg: string) => void; onOpenTalep: (t: Talep) => void;
}) {
  const [f, setF] = useState(firma);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.unvan.trim()) { setError('Firma ünvanı zorunlu.'); return; }
    setBusy(true);
    const { id, created_at, ...rest } = f;
    void created_at;
    const { error } = await supabase!.from('firmalar').update({ ...rest, unvan: rest.unvan.trim() }).eq('id', id);
    setBusy(false);
    if (error) setError(error.message); else onSaved('Firma güncellendi.');
  };
  const remove = async () => {
    if (!confirm(`"${firma.unvan}" ve tüm talepleri kalıcı olarak silinsin mi?`)) return;
    setBusy(true);
    const yollar = talepler.map(t => t.dosya_yolu).filter((x): x is string => !!x);
    if (yollar.length) await supabase!.storage.from('talep-formlari').remove(yollar);
    const { error } = await supabase!.from('firmalar').delete().eq('id', firma.id);
    setBusy(false);
    if (error) setError(error.message); else onSaved('Firma silindi.');
  };

  return (
    <Modal wide title={firma.unvan} onClose={onClose}
      footer={<>
        <Button variant="danger" className="mr-auto" disabled={busy} onClick={remove}><Trash2 size={15} />Firmayı sil</Button>
        <Button variant="ghost" onClick={onClose}>Vazgeç</Button>
        <Button type="submit" form="firma-form" disabled={busy}>{busy ? 'Kaydediliyor…' : 'Kaydet'}</Button>
      </>}>
      <form id="firma-form" onSubmit={save} className="space-y-4">
        {error && <Notice kind="error">{error}</Notice>}
        <GecmisUyari firma={f} talepler={talepler} />
        <FirmaFields f={f} set={(k, v) => setF(p => ({ ...p, [k]: v }))} />
        <div className="border border-[#D0D8E4] rounded-lg p-3 space-y-2">
          <label className="flex items-center gap-2 font-body text-sm font-medium text-[#1E2A3E]">
            <input type="checkbox" checked={f.kara_liste} onChange={e => setF({ ...f, kara_liste: e.target.checked })} className="w-4 h-4 accent-[#C0392B]" />
            Kara liste (bu firmaya fiyat çalışması yapılmaz)
          </label>
          {f.kara_liste && <Input placeholder="Neden? (örn. 3 teklife dönüş yapmadı)" value={f.kara_liste_nedeni} onChange={e => setF({ ...f, kara_liste_nedeni: e.target.value })} maxLength={1000} />}
        </div>
        <Field label="Notlar"><Textarea rows={3} value={f.notlar} onChange={e => setF({ ...f, notlar: e.target.value })} /></Field>
        <div>
          <h3 className="font-display font-bold text-[15px] text-[#1E2A3E] mb-2">Talep geçmişi</h3>
          {talepler.length === 0 ? <p className="font-body text-sm text-[#5A6A7E]">Talep yok.</p> : (
            <div className="space-y-1.5">
              {talepler.map(t => (
                <button type="button" key={t.id} onClick={() => onOpenTalep(t)}
                  className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg border border-[#EEF2F7] hover:border-[#0A5C8E] font-body text-sm">
                  <span className="text-[#5A6A7E] w-24">{t.talep_tarihi}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${DURUM[t.durum].cls}`}>{DURUM[t.durum].label}</span>
                  <span className="text-[#5A6A7E]">{t.kalem_sayisi} kalem</span>
                  <span className="ml-auto tabular-nums">{money(t.teklif_tutari === null ? null : Number(t.teklif_tutari), t.para_birimi)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </form>
    </Modal>
  );
}
