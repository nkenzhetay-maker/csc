// Ürün sayfaları için çok dilli içerik (EN, TR, RU, KZ, AZ).
// NOT: İlaç veritabanındaki ürün adı / etkin madde / ruhsat sahibi resmi kayıt
// verisidir ve çevrilmez; burada yalnızca arayüz ve pazarlama içeriği çevrilir.
export type Lang = 'en' | 'tr' | 'ru' | 'kz' | 'az';

/** Geçerli dil için değer döndürür, yoksa İngilizce'ye düşer. */
export function pick<T>(rec: Record<Lang, T>, lang: string): T {
  return (rec as Record<string, T>)[lang] ?? rec.en;
}

/* ---------- Ortak: sol menü (kategori) ---------- */
export const categoryMenu: Record<Lang, { slug: string; title: string }[]> = {
  en: [
    { slug: 'ilac', title: 'Pharmaceutical Products' },
    { slug: 'gida-takviyeleri', title: 'Dietary Supplements' },
    { slug: 'tibbi-sarf-malzemeleri', title: 'Medical Consumables' },
    { slug: 'hasta-bebek-bezleri', title: 'Adult & Baby Diapers' },
    { slug: 'tibbi-cihazlar', title: 'Medical Devices' },
    { slug: 'tibbi-testler', title: 'Medical Tests' },
  ],
  tr: [
    { slug: 'ilac', title: 'İlaç Ürünleri' },
    { slug: 'gida-takviyeleri', title: 'Gıda Takviyeleri' },
    { slug: 'tibbi-sarf-malzemeleri', title: 'Tıbbi Sarf Malzemeleri' },
    { slug: 'hasta-bebek-bezleri', title: 'Hasta ve Bebek Bezleri' },
    { slug: 'tibbi-cihazlar', title: 'Tıbbi Cihazlar' },
    { slug: 'tibbi-testler', title: 'Tıbbi Testler' },
  ],
  ru: [
    { slug: 'ilac', title: 'Лекарственные препараты' },
    { slug: 'gida-takviyeleri', title: 'Пищевые добавки' },
    { slug: 'tibbi-sarf-malzemeleri', title: 'Медицинские расходные материалы' },
    { slug: 'hasta-bebek-bezleri', title: 'Подгузники для взрослых и детей' },
    { slug: 'tibbi-cihazlar', title: 'Медицинское оборудование' },
    { slug: 'tibbi-testler', title: 'Медицинские тесты' },
  ],
  kz: [
    { slug: 'ilac', title: 'Дәрілік өнімдер' },
    { slug: 'gida-takviyeleri', title: 'Тағамдық қоспалар' },
    { slug: 'tibbi-sarf-malzemeleri', title: 'Медициналық шығын материалдары' },
    { slug: 'hasta-bebek-bezleri', title: 'Ересектер мен балаларға арналған жаялықтар' },
    { slug: 'tibbi-cihazlar', title: 'Медициналық құрылғылар' },
    { slug: 'tibbi-testler', title: 'Медициналық тесттер' },
  ],
  az: [
    { slug: 'ilac', title: 'Dərman məhsulları' },
    { slug: 'gida-takviyeleri', title: 'Qida əlavələri' },
    { slug: 'tibbi-sarf-malzemeleri', title: 'Tibbi sərf materialları' },
    { slug: 'hasta-bebek-bezleri', title: 'Böyük və uşaq bezləri' },
    { slug: 'tibbi-cihazlar', title: 'Tibbi cihazlar' },
    { slug: 'tibbi-testler', title: 'Tibbi testlər' },
  ],
};

/* ---------- Ürünler ana sayfası: kategori kartı açıklamaları (slug bazlı) ---------- */
export const categoryCardDesc: Record<Lang, Record<string, string>> = {
  en: {
    'ilac': 'A comprehensive portfolio from antibiotics to oncology, with GDP-compliant cold chain.',
    'gida-takviyeleri': 'Vitamins, minerals, probiotics and more; Ministry of Health approved supplements.',
    'tibbi-sarf-malzemeleri': 'Comprehensive medical consumables for hospitals, clinics and pharmacies.',
    'hasta-bebek-bezleri': 'A portfolio of adult diapers, absorbent pads, baby diapers and stoma products.',
    'tibbi-cihazlar': 'CE-marked, Ministry of Health approved medical devices, with installation and support.',
    'tibbi-testler': 'Rapid diagnostic tests and laboratory kits; CE-marked and ISO-certified.',
  },
  tr: {
    'ilac': 'Antibiyotiklerden onkolojiye kadar geniş ürün portföyü; GDP uyumlu soğuk zincir.',
    'gida-takviyeleri': 'Vitaminler, mineraller, probiyotikler ve daha fazlası; Sağlık Bakanlığı onaylı takviyeler.',
    'tibbi-sarf-malzemeleri': 'Hastane, klinik ve eczaneler için geniş kapsamlı tıbbi sarf malzemeleri.',
    'hasta-bebek-bezleri': 'Hasta bezleri, emici pedler, bebek bezleri ve stoma ürünleri portföyü.',
    'tibbi-cihazlar': 'CE işaretli, Sağlık Bakanlığı onaylı tıbbi cihazlar; kurulum ve teknik destekle.',
    'tibbi-testler': 'Hızlı tanı testleri ve laboratuvar kitleri; CE işaretli ve ISO sertifikalı.',
  },
  ru: {
    'ilac': 'Широкий ассортимент от антибиотиков до онкологии, с GDP-совместимой холодовой цепью.',
    'gida-takviyeleri': 'Витамины, минералы, пробиотики и другое; добавки, одобренные Минздравом.',
    'tibbi-sarf-malzemeleri': 'Обширные медицинские расходные материалы для больниц, клиник и аптек.',
    'hasta-bebek-bezleri': 'Ассортимент подгузников для взрослых, впитывающих пелёнок, детских подгузников и стома-продукции.',
    'tibbi-cihazlar': 'Медицинские устройства с маркировкой CE, одобренные Минздравом, с установкой и поддержкой.',
    'tibbi-testler': 'Экспресс-тесты и лабораторные наборы; с маркировкой CE и сертификатом ISO.',
  },
  kz: {
    'ilac': 'Антибиотиктерден онкологияға дейінгі кең портфель; GDP үйлесімді суық тізбек.',
    'gida-takviyeleri': 'Витаминдер, минералдар, пробиотиктер және т.б.; Денсаулық сақтау министрлігі мақұлдаған қоспалар.',
    'tibbi-sarf-malzemeleri': 'Аурухана, клиника және дәріханаларға арналған кең медициналық шығын материалдары.',
    'hasta-bebek-bezleri': 'Ересек жаялықтары, сіңіргіш төсеніштер, балалар жаялықтары және стома өнімдері портфелі.',
    'tibbi-cihazlar': 'CE белгісі бар, Денсаулық сақтау министрлігі мақұлдаған медициналық құрылғылар; орнату және қолдаумен.',
    'tibbi-testler': 'Жедел диагностикалық тесттер мен зертханалық жиынтықтар; CE белгісі бар және ISO сертификатты.',
  },
  az: {
    'ilac': 'Antibiotiklərdən onkologiyaya qədər geniş portfel; GDP uyğun soyuq zəncir.',
    'gida-takviyeleri': 'Vitaminlər, minerallar, probiotiklər və daha çoxu; Səhiyyə Nazirliyi təsdiqli əlavələr.',
    'tibbi-sarf-malzemeleri': 'Xəstəxana, klinika və apteklər üçün geniş tibbi sərf materialları.',
    'hasta-bebek-bezleri': 'Böyük bezləri, sorucu altlıqlar, uşaq bezləri və stoma məhsulları portfeli.',
    'tibbi-cihazlar': 'CE işarəli, Səhiyyə Nazirliyi təsdiqli tibbi cihazlar; quraşdırma və dəstəklə.',
    'tibbi-testler': 'Sürətli diaqnostik testlər və laboratoriya dəstləri; CE işarəli və ISO sertifikatlı.',
  },
};

/* ---------- Ortak: breadcrumb ---------- */
export const crumb: Record<Lang, { home: string; products: string }> = {
  en: { home: 'Home', products: 'Products' },
  tr: { home: 'Anasayfa', products: 'Ürünler' },
  ru: { home: 'Главная', products: 'Продукция' },
  kz: { home: 'Басты бет', products: 'Өнімдер' },
  az: { home: 'Ana səhifə', products: 'Məhsullar' },
};

/* ---------- İlaç sayfası arayüzü ---------- */
export interface IlacUI {
  unitProduct: string; unitManufacturer: string; unitArea: string;
  fTedavi: string; fEtkin: string; fForm: string; fRuhsat: string; search: string;
  searchPlaceholder: string; resultsFound: (n: number) => string;
  clear: string; clearFilters: string;
  thName: string; thIngredient: string; thForm: string; thArea: string; thManufacturer: string; thBarcode: string; thStock: string;
  noResults: string;
}
export const ilacUI: Record<Lang, IlacUI> = {
  en: {
    unitProduct: 'Products', unitManufacturer: 'Manufacturers', unitArea: 'Therapeutic Areas',
    fTedavi: 'Therapeutic Area', fEtkin: 'Active Ingredient', fForm: 'Form', fRuhsat: 'License Holder', search: 'Search',
    searchPlaceholder: 'Search by product name, active ingredient or barcode...',
    resultsFound: (n) => `${n} results found`,
    clear: 'Clear', clearFilters: 'Clear filters',
    thName: 'Product Name', thIngredient: 'Active Ingredient', thForm: 'Form', thArea: 'Therapeutic Area', thManufacturer: 'Manufacturer', thBarcode: 'Barcode', thStock: 'Stock',
    noResults: 'No products match the selected filters.',
  },
  tr: {
    unitProduct: 'Ürün', unitManufacturer: 'Üretici', unitArea: 'Tedavi Alanı',
    fTedavi: 'Tedavi Alanı', fEtkin: 'Etkin Madde', fForm: 'Form', fRuhsat: 'Ruhsat Sahibi', search: 'Ara',
    searchPlaceholder: 'Ürün adı, etkin madde veya barkod ile ara...',
    resultsFound: (n) => `${n} sonuç bulundu`,
    clear: 'Temizle', clearFilters: 'Filtreleri temizle',
    thName: 'Ürün Adı', thIngredient: 'Etkin Madde', thForm: 'Form', thArea: 'Tedavi Alanı', thManufacturer: 'Üretici', thBarcode: 'Barkod', thStock: 'Stok',
    noResults: 'Seçtiğiniz filtrelere uygun ürün bulunamadı.',
  },
  ru: {
    unitProduct: 'Товаров', unitManufacturer: 'Производителей', unitArea: 'Областей лечения',
    fTedavi: 'Область лечения', fEtkin: 'Действующее вещество', fForm: 'Форма', fRuhsat: 'Владелец лицензии', search: 'Поиск',
    searchPlaceholder: 'Поиск по названию, действующему веществу или штрихкоду...',
    resultsFound: (n) => `Найдено результатов: ${n}`,
    clear: 'Очистить', clearFilters: 'Очистить фильтры',
    thName: 'Название', thIngredient: 'Действующее вещество', thForm: 'Форма', thArea: 'Область лечения', thManufacturer: 'Производитель', thBarcode: 'Штрихкод', thStock: 'Наличие',
    noResults: 'Нет товаров, соответствующих выбранным фильтрам.',
  },
  kz: {
    unitProduct: 'Өнім', unitManufacturer: 'Өндіруші', unitArea: 'Емдеу саласы',
    fTedavi: 'Емдеу саласы', fEtkin: 'Әсерлі зат', fForm: 'Түрі', fRuhsat: 'Лицензия иесі', search: 'Іздеу',
    searchPlaceholder: 'Атауы, әсерлі заты немесе штрихкоды бойынша іздеу...',
    resultsFound: (n) => `${n} нәтиже табылды`,
    clear: 'Тазалау', clearFilters: 'Сүзгілерді тазалау',
    thName: 'Атауы', thIngredient: 'Әсерлі зат', thForm: 'Түрі', thArea: 'Емдеу саласы', thManufacturer: 'Өндіруші', thBarcode: 'Штрихкод', thStock: 'Қоймада',
    noResults: 'Таңдалған сүзгілерге сәйкес өнім табылмады.',
  },
  az: {
    unitProduct: 'Məhsul', unitManufacturer: 'İstehsalçı', unitArea: 'Müalicə sahəsi',
    fTedavi: 'Müalicə sahəsi', fEtkin: 'Təsiredici maddə', fForm: 'Forma', fRuhsat: 'Lisenziya sahibi', search: 'Axtar',
    searchPlaceholder: 'Ad, təsiredici maddə və ya barkod üzrə axtar...',
    resultsFound: (n) => `${n} nəticə tapıldı`,
    clear: 'Təmizlə', clearFilters: 'Filtrləri təmizlə',
    thName: 'Ad', thIngredient: 'Təsiredici maddə', thForm: 'Forma', thArea: 'Müalicə sahəsi', thManufacturer: 'İstehsalçı', thBarcode: 'Barkod', thStock: 'Anbar',
    noResults: 'Seçilmiş filtrlərə uyğun məhsul tapılmadı.',
  },
};

/* ---------- İlaç filtre değerleri: görünen etiket çevirisi ----------
   Alttaki değer (filtre için) Türkçe kalır; yalnızca gösterim çevrilir.
   İlaç adları, etkin maddeler ve ruhsat sahipleri (firma adları) çevrilmez. */
const ALL: Record<Lang, string> = { en: 'All', tr: 'Tümü', ru: 'Все', kz: 'Барлығы', az: 'Hamısı' };

export const areaLabels: Record<string, Record<Lang, string>> = {
  'Tümü': ALL,
  'Alerji ve Astım': { en: 'Allergy & Asthma', tr: 'Alerji ve Astım', ru: 'Аллергия и астма', kz: 'Аллергия және демікпе', az: 'Allergiya və astma' },
  'Antibiyotikler ve Anti-infektifler': { en: 'Antibiotics & Anti-infectives', tr: 'Antibiyotikler ve Anti-infektifler', ru: 'Антибиотики и противоинфекционные', kz: 'Антибиотиктер және инфекцияға қарсы', az: 'Antibiotiklər və antiinfektivlər' },
  'Ağrı ve Anti-inflamatuar': { en: 'Pain & Anti-inflammatory', tr: 'Ağrı ve Anti-inflamatuar', ru: 'Обезболивающие и противовоспалительные', kz: 'Ауырсыну және қабынуға қарсы', az: 'Ağrı və iltihabəleyhinə' },
  'Dermatolojik İlaçlar': { en: 'Dermatological', tr: 'Dermatolojik İlaçlar', ru: 'Дерматологические', kz: 'Дерматологиялық', az: 'Dermatoloji' },
  'Diyabet İlaçları': { en: 'Diabetes', tr: 'Diyabet İlaçları', ru: 'Противодиабетические', kz: 'Диабетке қарсы', az: 'Diabet' },
  'Diğer': { en: 'Other', tr: 'Diğer', ru: 'Прочие', kz: 'Басқа', az: 'Digər' },
  'Diğer Tablet Formları': { en: 'Other Tablet Forms', tr: 'Diğer Tablet Formları', ru: 'Прочие таблетированные формы', kz: 'Басқа таблетка түрлері', az: 'Digər tablet formaları' },
  'Göz İlaçları': { en: 'Ophthalmic', tr: 'Göz İlaçları', ru: 'Офтальмологические', kz: 'Көз дәрілері', az: 'Göz dərmanları' },
  'Kardiyovasküler Sistem': { en: 'Cardiovascular', tr: 'Kardiyovasküler Sistem', ru: 'Сердечно-сосудистые', kz: 'Жүрек-қантамыр', az: 'Ürək-damar' },
  'Kortikosteroidler': { en: 'Corticosteroids', tr: 'Kortikosteroidler', ru: 'Кортикостероиды', kz: 'Кортикостероидтер', az: 'Kortikosteroidlər' },
  'Kulak İlaçları': { en: 'Otic (Ear)', tr: 'Kulak İlaçları', ru: 'Ушные', kz: 'Құлақ дәрілері', az: 'Qulaq dərmanları' },
  'Sindirim Sistemi': { en: 'Digestive System', tr: 'Sindirim Sistemi', ru: 'Пищеварительная система', kz: 'Ас қорыту жүйесі', az: 'Həzm sistemi' },
  'Sinir Sistemi': { en: 'Nervous System', tr: 'Sinir Sistemi', ru: 'Нервная система', kz: 'Жүйке жүйесі', az: 'Sinir sistemi' },
  'Solunum Sistemi': { en: 'Respiratory System', tr: 'Solunum Sistemi', ru: 'Дыхательная система', kz: 'Тыныс алу жүйесі', az: 'Tənəffüs sistemi' },
  'Vitaminler ve Mineraller': { en: 'Vitamins & Minerals', tr: 'Vitaminler ve Mineraller', ru: 'Витамины и минералы', kz: 'Витаминдер мен минералдар', az: 'Vitamin və minerallar' },
  'Ürolojik ve Genitoüriner': { en: 'Urological & Genitourinary', tr: 'Ürolojik ve Genitoüriner', ru: 'Урологические и мочеполовые', kz: 'Урологиялық және несеп-жыныс', az: 'Uroloji və sidik-cinsiyyət' },
};

export const formLabels: Record<string, Record<Lang, string>> = {
  'Tümü': ALL,
  'Damla': { en: 'Drops', tr: 'Damla', ru: 'Капли', kz: 'Тамшы', az: 'Damcı' },
  'Diğer': { en: 'Other', tr: 'Diğer', ru: 'Прочее', kz: 'Басқа', az: 'Digər' },
  'Enjeksiyon': { en: 'Injection', tr: 'Enjeksiyon', ru: 'Инъекция', kz: 'Инъекция', az: 'İnyeksiya' },
  'Film Tablet': { en: 'Film-coated Tablet', tr: 'Film Tablet', ru: 'Таблетка, покрытая оболочкой', kz: 'Қабықты таблетка', az: 'Örtüklü tablet' },
  'Granül': { en: 'Granules', tr: 'Granül', ru: 'Гранулы', kz: 'Түйіршік', az: 'Qranul' },
  'Göz Damlası': { en: 'Eye Drops', tr: 'Göz Damlası', ru: 'Глазные капли', kz: 'Көз тамшысы', az: 'Göz damcısı' },
  'Jel': { en: 'Gel', tr: 'Jel', ru: 'Гель', kz: 'Гель', az: 'Gel' },
  'Kapsül': { en: 'Capsule', tr: 'Kapsül', ru: 'Капсула', kz: 'Капсула', az: 'Kapsul' },
  'Krem': { en: 'Cream', tr: 'Krem', ru: 'Крем', kz: 'Крем', az: 'Krem' },
  'Kulak Damlası': { en: 'Ear Drops', tr: 'Kulak Damlası', ru: 'Ушные капли', kz: 'Құлақ тамшысы', az: 'Qulaq damcısı' },
  'Losyon': { en: 'Lotion', tr: 'Losyon', ru: 'Лосьон', kz: 'Лосьон', az: 'Losyon' },
  'Pomad': { en: 'Ointment', tr: 'Pomad', ru: 'Мазь', kz: 'Май жақпа', az: 'Məlhəm' },
  'Saşe': { en: 'Sachet', tr: 'Saşe', ru: 'Саше', kz: 'Сашет', az: 'Saşe' },
  'Şurup': { en: 'Syrup', tr: 'Şurup', ru: 'Сироп', kz: 'Сироп', az: 'Şərbət' },
};

/** Bir filtre değerinin geçerli dildeki gösterim etiketini döndürür. */
export function labelFor(map: Record<string, Record<Lang, string>>, value: string, lang: string): string {
  const rec = map[value];
  if (!rec) return value; // haritada yoksa (ör. firma adı / etkin madde) olduğu gibi
  return (rec as Record<string, string>)[lang] ?? rec.en;
}

/** 'Tümü' değerini çevirir, diğer değerleri (etkin madde vb.) olduğu gibi bırakır. */
export function allOrSelf(value: string, lang: string): string {
  return value === 'Tümü' ? ((ALL as Record<string, string>)[lang] ?? ALL.en) : value;
}
