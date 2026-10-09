// Sitenin herkese açık verileri: önce Supabase'den okunur, ulaşılamazsa gömülü yedek kullanılır.
import { supabase } from './supabase';
import type { IlacProduct } from '../data/ilacDatabase';
import type { BlogEntry, BlogText } from '../data/blogContent';
import type { Lang } from '../data/productI18n';

const ILAC_COLUMNS = 'id, ad, etkin_madde, atc_kodu, ruhsat_sahibi, barkod, tedavi_alani, form, stok';

type IlacRow = {
  id: number; ad: string; etkin_madde: string; atc_kodu: string; ruhsat_sahibi: string;
  barkod: string; tedavi_alani: string; form: string; stok: number | null;
};
type BlogRow = {
  id: number; kategori: BlogEntry['category']; tarih: string; okuma_suresi: number; gorsel: string;
  icerik: Partial<Record<Lang, BlogText>>;
};

let ilacPromise: Promise<IlacProduct[] | null> | null = null;
let blogPromise: Promise<BlogEntry[] | null> | null = null;

export function fetchIlaclar(): Promise<IlacProduct[] | null> {
  if (!supabase) return Promise.resolve(null);
  ilacPromise ??= (async () => {
    // PostgREST sayfa sınırına takılmamak için 1000'lik parçalarla oku.
    const rows: IlacRow[] = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await supabase!.from('ilaclar').select(ILAC_COLUMNS)
        .eq('aktif', true).order('id').range(from, from + 999);
      if (error) throw error;
      rows.push(...(data as IlacRow[]));
      if (!data || data.length < 1000) break;
    }
    return rows.map(r => ({
      id: r.id, ad: r.ad, etkinMadde: r.etkin_madde, atcKodu: r.atc_kodu, ruhsatSahibi: r.ruhsat_sahibi,
      barkod: r.barkod, tedaviAlani: r.tedavi_alani, form: r.form, stok: r.stok,
    }));
  })().catch(() => { ilacPromise = null; return null; });
  return ilacPromise;
}

export function fetchBlog(): Promise<BlogEntry[] | null> {
  if (!supabase) return Promise.resolve(null);
  blogPromise ??= (async () => {
    const { data, error } = await supabase!.from('blog_yazilari')
      .select('id, kategori, tarih, okuma_suresi, gorsel, icerik')
      .eq('yayinda', true).order('tarih', { ascending: false }).order('id', { ascending: false });
    if (error) throw error;
    return (data as BlogRow[]).map(r => {
      // Eksik dil varsa Türkçe (yoksa İngilizce) metne düş — sayfa boş kalmasın.
      const base = r.icerik.tr ?? r.icerik.en!;
      const t = {} as Record<Lang, BlogText>;
      for (const l of ['en', 'tr', 'ru', 'kz', 'az'] as Lang[]) t[l] = r.icerik[l]?.title ? r.icerik[l]! : base;
      return { id: r.id, category: r.kategori, date: r.tarih, readTime: String(r.okuma_suresi), image: r.gorsel, t };
    });
  })().catch(() => { blogPromise = null; return null; });
  return blogPromise;
}
