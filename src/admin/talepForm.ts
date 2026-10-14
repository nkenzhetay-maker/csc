// Doldurulmuş "İlaç Talep Formu" (.docx) dosyasından alanları okur.
// Form CSC'nin kendi şablonudur (public/CSC-Ilac-Talep-Formu.docx): etiket hücresinin yanındaki hücre değerdir.

export type FormFirma = {
  unvan: string; adres: string; vergi_no: string; vergi_dairesi: string; ulke: string; ruhsat_no: string;
  faaliyet_alani: string; telefon: string; email: string; web: string;
  yetkili_ad: string; yetkili_unvan: string; yetkili_telefon: string; yetkili_email: string;
};
export type FormKalem = { urun_adi: string; etkin_madde: string; form_doz: string; miktar: string; ihrac_ulkesi: string; aciklama: string };
export type FormTalep = {
  form_no: string; talep_tarihi: string; teslim_sekli: string; odeme_sekli: string; termin: string;
  soguk_zincir: boolean | null; ek_notlar: string;
};
export type ParsedForm = { firma: FormFirma; talep: FormTalep; kalemler: FormKalem[] };

const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

// Şablonda örnek olarak duran metinler gerçek değer sayılmaz.
const PLACEHOLDERS = [
  'Ecza Deposu / Distribütör / Hastane / Eczane / Diğer',
  'EXW / FOB / CIF / DAP',
];
const clean = (s: string) => {
  const v = s.replace(/\s+/g, ' ').trim();
  return PLACEHOLDERS.some(p => v.startsWith(p)) ? '' : v;
};

// Etiket hücresinin ilk paragrafı (Türkçe kısım) → alan adı
const LABELS: [string, keyof FormFirma | keyof FormTalep][] = [
  ['Firma Ünvanı', 'unvan'], ['Resmi Kayıtlı Adres', 'adres'], ['Vergi Numarası', 'vergi_no'], ['Vergi Dairesi', 'vergi_dairesi'],
  ['Ülke', 'ulke'], ['Faaliyet Ruhsat No', 'ruhsat_no'], ['Faaliyet Alanı', 'faaliyet_alani'], ['Şirket Telefonu', 'telefon'],
  ['Şirket E-posta', 'email'], ['Web Sitesi', 'web'], ['Ad-Soyad', 'yetkili_ad'], ['Ünvan / Görev', 'yetkili_unvan'],
  ['Doğrudan Telefon', 'yetkili_telefon'], ['Doğrudan E-posta', 'yetkili_email'], ['Teslim Şekli', 'teslim_sekli'],
  ['Ödeme Şekli', 'odeme_sekli'], ['Talep Edilen Termin', 'termin'], ['Ek Notlar', 'ek_notlar'],
];
const FIRMA_KEYS = new Set<string>(['unvan', 'adres', 'vergi_no', 'vergi_dairesi', 'ulke', 'ruhsat_no', 'faaliyet_alani', 'telefon', 'email', 'web', 'yetkili_ad', 'yetkili_unvan', 'yetkili_telefon', 'yetkili_email']);

function paragraphs(el: Element): string[] {
  return Array.from(el.getElementsByTagNameNS(W, 'p')).map(p =>
    Array.from(p.getElementsByTagNameNS(W, 't')).map(t => t.textContent ?? '').join(''));
}

export async function parseTalepFormu(file: File): Promise<ParsedForm> {
  const JSZip = (await import('jszip')).default;
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  const xml = await zip.file('word/document.xml')?.async('string');
  if (!xml) throw new Error('Bu dosya bir Word (.docx) formu değil.');
  const doc = new DOMParser().parseFromString(xml, 'application/xml');

  const firma = { unvan: '', adres: '', vergi_no: '', vergi_dairesi: '', ulke: '', ruhsat_no: '', faaliyet_alani: '', telefon: '', email: '', web: '', yetkili_ad: '', yetkili_unvan: '', yetkili_telefon: '', yetkili_email: '' } as FormFirma;
  const talep: FormTalep = { form_no: '', talep_tarihi: '', teslim_sekli: '', odeme_sekli: '', termin: '', soguk_zincir: null, ek_notlar: '' };
  const kalemler: FormKalem[] = [];
  let found = 0;

  for (const tr of Array.from(doc.getElementsByTagNameNS(W, 'tr'))) {
    const cells = Array.from(tr.getElementsByTagNameNS(W, 'tc')).filter(tc => tc.parentNode === tr);
    const paras = cells.map(paragraphs);
    const texts = paras.map(p => p.join(' ').replace(/\s+/g, ' ').trim());

    // Ürün tablosu satırı: ilk hücre sıra numarası, 7 hücre
    if (cells.length >= 7 && /^\d+$/.test(texts[0])) {
      const [, urun_adi, etkin_madde, form_doz, miktar, ihrac_ulkesi, aciklama] = texts.map(clean);
      if (urun_adi) kalemler.push({ urun_adi, etkin_madde, form_doz, miktar, ihrac_ulkesi, aciklama });
      continue;
    }
    // Etiket–değer çiftleri (bir satırda 1 veya 2 çift)
    for (let i = 0; i + 1 < cells.length; i += 2) {
      const label = (paras[i][0] ?? '').trim();
      const hit = LABELS.find(([l]) => label.startsWith(l));
      if (hit) {
        const key = hit[1];
        const value = clean(texts[i + 1]);
        if (FIRMA_KEYS.has(key)) (firma as Record<string, string>)[key] = value;
        else (talep as Record<string, unknown>)[key] = value;
        if (value) found++;
      } else if (label.startsWith('Soğuk Zincir')) {
        // ☒ / ☑ / ■ / X işaretli seçenek
        const v = texts[i + 1];
        const yes = /[☒☑■✓✔xX]\s*Evet/.test(v), no = /[☒☑■✓✔xX]\s*Hayır/.test(v);
        talep.soguk_zincir = yes && !no ? true : no && !yes ? false : null;
      }
    }
  }

  // "Form No: ...   Tarih / Date: gg / aa / yyyy" paragrafı
  const all = paragraphs(doc.documentElement).join('\n');
  const fno = all.match(/Form No:\s*([^\s_][^\n]*?)\s{2,}Tarih/);
  if (fno) talep.form_no = fno[1].replace(/_+/g, '').trim();
  const dt = all.match(/Tarih \/ Date:\s*(\d{1,2})\s*[/.]\s*(\d{1,2})\s*[/.]\s*(?:20)?(\d{2})/);
  if (dt) talep.talep_tarihi = `20${dt[3]}-${dt[2].padStart(2, '0')}-${dt[1].padStart(2, '0')}`;

  if (!found && !kalemler.length) throw new Error('Formda doldurulmuş alan bulunamadı. Dosya boş şablon olabilir.');
  return { firma, talep, kalemler };
}
