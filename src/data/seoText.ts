// Sayfa başlıkları ve meta açıklamaları (5 dil). Açıklamalar ~150–160 karakter.
import type { Lang } from '../lib/i18nRouter';

type T = { title: string; description: string };
export type SeoKey =
  | 'home' | 'products' | 'ilac' | 'services' | 'branches' | 'contact' | 'blog' | 'catalog' | 'corporate'
  | 'privacy' | 'terms' | 'cookies' | 'kvkk' | 'notfound';

export const seoText: Record<SeoKey, Record<Lang, T>> = {
  home: {
    en: { title: 'CSC Global — Pharmaceutical Warehouse & Medicine Export from Türkiye', description: 'GDP-compliant pharmaceutical warehouse supplying Turkish-origin medicines to distributors, hospitals and pharmacies abroad with 2-8°C cold chain logistics.' },
    tr: { title: 'CSC Global — Ecza Deposu ve Türkiye\'den İlaç İhracatı', description: 'GDP uyumlu ecza deposu: Türk menşeli ilaçları yurt dışındaki distribütör, hastane ve eczanelere 2-8°C soğuk zincir lojistiğiyle tedarik ediyoruz.' },
    ru: { title: 'CSC Global — фармацевтический склад и экспорт лекарств из Турции', description: 'Фармацевтический склад, соответствующий GDP: поставки лекарств турецкого производства дистрибьюторам, больницам и аптекам с холодовой цепью 2-8°C.' },
    kz: { title: 'CSC Global — фармацевтикалық қойма және Түркиядан дәрі экспорты', description: 'GDP талаптарына сай фармацевтикалық қойма: түрік өндірісінің дәрілерін дистрибьюторларға, ауруханалар мен дәріханаларға 2-8°C суық тізбекпен жеткіземіз.' },
    az: { title: 'CSC Global — əczaçılıq anbarı və Türkiyədən dərman ixracı', description: 'GDP tələblərinə uyğun əczaçılıq anbarı: Türkiyə istehsalı dərmanları distribyutorlara, xəstəxana və apteklərə 2-8°C soyuq zəncir logistikası ilə tədarük edirik.' },
  },
  products: {
    en: { title: 'Products — Medicines, Supplements and Medical Supplies', description: 'Explore CSC Global product categories: medicines, food supplements, medical consumables, adult and baby diapers, medical devices and diagnostic tests.' },
    tr: { title: 'Ürünler — İlaç, Gıda Takviyesi ve Tıbbi Sarf', description: 'CSC Global ürün kategorileri: ilaçlar, gıda takviyeleri, tıbbi sarf malzemeleri, hasta ve bebek bezleri, tıbbi cihazlar ve tanı testleri.' },
    ru: { title: 'Продукция — лекарства, БАД и медицинские расходники', description: 'Категории продукции CSC Global: лекарства, биологически активные добавки, медицинские расходные материалы, подгузники, медицинские изделия и тесты.' },
    kz: { title: 'Өнімдер — дәрілер, тағамдық қоспалар және медициналық шығын материалдары', description: 'CSC Global өнім санаттары: дәрілер, биологиялық белсенді қоспалар, медициналық шығын материалдары, жаялықтар, медициналық бұйымдар және тесттер.' },
    az: { title: 'Məhsullar — dərmanlar, qida əlavələri və tibbi sərf materialları', description: 'CSC Global məhsul kateqoriyaları: dərmanlar, qida əlavələri, tibbi sərf materialları, uşaq və xəstə bezləri, tibbi cihazlar və diaqnostik testlər.' },
  },
  ilac: {
    en: { title: 'Medicine List — Licensed Turkish Medicines with Barcode and ATC', description: 'Search our list of Turkish-licensed medicines by name, active ingredient, form, therapeutic area or licence holder. Barcode and ATC data from TİTCK.' },
    tr: { title: 'İlaç Listesi — Barkod ve ATC Bilgili Ruhsatlı İlaçlar', description: 'Türkiye\'de ruhsatlı ilaç listemizde ad, etkin madde, form, tedavi alanı veya ruhsat sahibine göre arama yapın. Barkod ve ATC bilgileri TİTCK kaynaklıdır.' },
    ru: { title: 'Список лекарств — препараты, зарегистрированные в Турции', description: 'Поиск по списку зарегистрированных в Турции препаратов: название, действующее вещество, форма, терапевтическая область, держатель. Штрихкоды и АТХ — TİTCK.' },
    kz: { title: 'Дәрілер тізімі — Түркияда тіркелген дәрілер', description: 'Түркияда тіркелген дәрілер тізімінен атауы, әсер етуші заты, түрі, емдеу саласы немесе тіркеу иесі бойынша іздеңіз. Штрихкод пен АТХ деректері – TİTCK.' },
    az: { title: 'Dərman siyahısı — Türkiyədə qeydiyyatdan keçmiş dərmanlar', description: 'Türkiyədə qeydiyyatlı dərmanlar siyahımızda ad, təsiredici maddə, forma, müalicə sahəsi və ya qeydiyyat sahibinə görə axtarış edin. Barkod və ATC – TİTCK.' },
  },
  services: {
    en: { title: 'Services — Pharmaceutical Storage, Cold Chain and Export Logistics', description: 'Pharmaceutical warehousing, GDP-compliant distribution, 2-8°C cold chain management, bulk supply and export logistics from Türkiye to international markets.' },
    tr: { title: 'Hizmetler — İlaç Depolama, Soğuk Zincir ve İhracat Lojistiği', description: 'İlaç depolama, GDP uyumlu dağıtım, 2-8°C soğuk zincir yönetimi, toplu tedarik ve Türkiye\'den uluslararası pazarlara ihracat lojistiği hizmetleri.' },
    ru: { title: 'Услуги — хранение лекарств, холодовая цепь и экспортная логистика', description: 'Фармацевтическое хранение, дистрибуция по стандартам GDP, холодовая цепь 2-8°C, оптовые поставки и экспортная логистика из Турции на международные рынки.' },
    kz: { title: 'Қызметтер — дәрі сақтау, суық тізбек және экспорт логистикасы', description: 'Фармацевтикалық сақтау, GDP талаптарына сай таратылым, 2-8°C суық тізбек, көтерме жеткізілім және Түркиядан халықаралық нарықтарға экспорт логистикасы.' },
    az: { title: 'Xidmətlər — dərman saxlanması, soyuq zəncir və ixrac logistikası', description: 'Əczaçılıq anbarı, GDP tələblərinə uyğun paylama, 2-8°C soyuq zəncir idarəetməsi, topdan tədarük və Türkiyədən beynəlxalq bazarlara ixrac logistikası.' },
  },
  branches: {
    en: { title: 'Locations — CSC-TR Istanbul and CSC-AZ Baku', description: 'CSC Global locations: CSC-TR pharmaceutical warehouse in Istanbul, Türkiye and CSC-AZ in Baku, Azerbaijan. Contact details and service regions.' },
    tr: { title: 'Şubeler — CSC-TR İstanbul ve CSC-AZ Bakü', description: 'CSC Global şubeleri: İstanbul\'daki CSC-TR ecza deposu ve Bakü\'deki CSC-AZ. İletişim bilgileri ve hizmet verilen bölgeler.' },
    ru: { title: 'Филиалы — CSC-TR Стамбул и CSC-AZ Баку', description: 'Филиалы CSC Global: фармацевтический склад CSC-TR в Стамбуле (Турция) и CSC-AZ в Баку (Азербайджан). Контакты и регионы обслуживания.' },
    kz: { title: 'Филиалдар — CSC-TR Стамбұл және CSC-AZ Баку', description: 'CSC Global филиалдары: Стамбұлдағы (Түркия) CSC-TR фармацевтикалық қоймасы және Бакудегі (Әзірбайжан) CSC-AZ. Байланыс деректері және қызмет өңірлері.' },
    az: { title: 'Filiallar — CSC-TR İstanbul və CSC-AZ Bakı', description: 'CSC Global filialları: İstanbulda (Türkiyə) CSC-TR əczaçılıq anbarı və Bakıda (Azərbaycan) CSC-AZ. Əlaqə məlumatları və xidmət regionları.' },
  },
  contact: {
    en: { title: 'Contact — Request Medicines from CSC Global', description: 'Contact CSC Global by form, e-mail or WhatsApp. Download the Medicine Request Form, fill it in and send it to info@csc-tr.com for a price quotation.' },
    tr: { title: 'İletişim — CSC Global\'den İlaç Talebi', description: 'CSC Global ile form, e-posta veya WhatsApp üzerinden iletişime geçin. Fiyat teklifi için İlaç Talep Formu\'nu indirip doldurun ve info@csc-tr.com\'a gönderin.' },
    ru: { title: 'Контакты — запрос лекарств в CSC Global', description: 'Свяжитесь с CSC Global через форму, e-mail или WhatsApp. Для коммерческого предложения скачайте форму запроса, заполните и отправьте на info@csc-tr.com.' },
    kz: { title: 'Байланыс — CSC Global-ға дәрі сұрауы', description: 'CSC Global-мен форма, e-mail немесе WhatsApp арқылы байланысыңыз. Баға ұсынысы үшін сұрау формасын жүктеп, толтырып, info@csc-tr.com мекенжайына жіберіңіз.' },
    az: { title: 'Əlaqə — CSC Global-dan dərman sorğusu', description: 'CSC Global ilə forma, e-poçt və ya WhatsApp vasitəsilə əlaqə saxlayın. Qiymət təklifi üçün sorğu formunu yükləyin, doldurun və info@csc-tr.com-a göndərin.' },
  },
  blog: {
    en: { title: 'Blog — Pharmaceutical Regulations and Market Analysis', description: 'Source-based articles on pharmaceutical regulations, exports and market data for Türkiye, Kazakhstan, Azerbaijan, Uzbekistan and the Eurasian Economic Union.' },
    tr: { title: 'Blog — İlaç Mevzuatı ve Pazar Analizleri', description: 'Türkiye, Kazakistan, Azerbaycan, Özbekistan ve Avrasya Ekonomik Birliği için ilaç mevzuatı, ihracat ve pazar verileri üzerine kaynaklı makaleler.' },
    ru: { title: 'Блог — фармацевтическое регулирование и анализ рынков', description: 'Статьи с источниками о фармрегулировании, экспорте и рынках Турции, Казахстана, Азербайджана, Узбекистана и Евразийского экономического союза.' },
    kz: { title: 'Блог — фармацевтикалық реттеу және нарық талдауы', description: 'Түркия, Қазақстан, Әзірбайжан, Өзбекстан және Еуразиялық экономикалық одақ бойынша фармацевтикалық реттеу, экспорт және нарық туралы дереккөзді мақалалар.' },
    az: { title: 'Bloq — əczaçılıq tənzimlənməsi və bazar təhlilləri', description: 'Türkiyə, Qazaxıstan, Azərbaycan, Özbəkistan və Avrasiya İqtisadi İttifaqı üzrə əczaçılıq tənzimlənməsi, ixrac və bazar məlumatlarına dair mənbəli məqalələr.' },
  },
  catalog: {
    en: { title: 'Catalog — CSC Global Product Catalog', description: 'Browse the CSC Global catalog of medicines and healthcare products available for export from Türkiye. Contact us for availability and quotations.' },
    tr: { title: 'Katalog — CSC Global Ürün Kataloğu', description: 'Türkiye\'den ihracata sunulan ilaç ve sağlık ürünlerini CSC Global kataloğunda inceleyin. Stok durumu ve fiyat teklifi için bizimle iletişime geçin.' },
    ru: { title: 'Каталог — каталог продукции CSC Global', description: 'Каталог лекарств и товаров для здоровья CSC Global, доступных для экспорта из Турции. Свяжитесь с нами, чтобы уточнить наличие и получить предложение.' },
    kz: { title: 'Каталог — CSC Global өнім каталогы', description: 'Түркиядан экспортқа ұсынылатын дәрілер мен денсаулық өнімдерінің CSC Global каталогы. Қолда бар-жоғын және баға ұсынысын білу үшін хабарласыңыз.' },
    az: { title: 'Kataloq — CSC Global məhsul kataloqu', description: 'Türkiyədən ixrac üçün təklif olunan dərman və səhiyyə məhsullarını CSC Global kataloqunda nəzərdən keçirin. Mövcudluq və qiymət təklifi üçün əlaqə saxlayın.' },
  },
  corporate: {
    en: { title: 'About CSC Global — Pharmaceutical Warehouse', description: 'About CSC Global: a pharmaceutical warehouse operating in Türkiye and Azerbaijan, supplying Turkish-origin medicines with GDP-compliant storage and distribution.' },
    tr: { title: 'Kurumsal — CSC Global Ecza Deposu', description: 'CSC Global hakkında: Türkiye ve Azerbaycan\'da faaliyet gösteren, GDP uyumlu depolama ve dağıtımla Türk menşeli ilaç tedarik eden ecza deposu.' },
    ru: { title: 'О компании — фармацевтический склад CSC Global', description: 'О CSC Global: фармацевтический склад в Турции и Азербайджане, поставляющий лекарства турецкого производства с хранением и дистрибуцией по стандартам GDP.' },
    kz: { title: 'Компания туралы — CSC Global фармацевтикалық қоймасы', description: 'CSC Global туралы: Түркия мен Әзірбайжанда жұмыс істейтін, GDP талаптарына сай сақтау және таратумен түрік дәрілерін жеткізетін фармацевтикалық қойма.' },
    az: { title: 'Haqqımızda — CSC Global əczaçılıq anbarı', description: 'CSC Global haqqında: Türkiyə və Azərbaycanda fəaliyyət göstərən, GDP tələblərinə uyğun saxlama və paylama ilə Türkiyə dərmanlarını tədarük edən anbar.' },
  },
  privacy: {
    en: { title: 'Privacy Policy', description: 'How CSC Global collects, uses and protects personal data submitted through csc-tr.com.' },
    tr: { title: 'Gizlilik Politikası', description: 'CSC Global\'in csc-tr.com üzerinden iletilen kişisel verileri nasıl topladığı, kullandığı ve koruduğu.' },
    ru: { title: 'Политика конфиденциальности', description: 'Как CSC Global собирает, использует и защищает персональные данные, переданные через csc-tr.com.' },
    kz: { title: 'Құпиялылық саясаты', description: 'CSC Global csc-tr.com арқылы берілген дербес деректерді қалай жинайды, пайдаланады және қорғайды.' },
    az: { title: 'Məxfilik siyasəti', description: 'CSC Global-ın csc-tr.com vasitəsilə göndərilən şəxsi məlumatları necə topladığı, istifadə etdiyi və qoruduğu.' },
  },
  terms: {
    en: { title: 'Terms of Use', description: 'Terms governing the use of the csc-tr.com website.' },
    tr: { title: 'Kullanım Şartları', description: 'csc-tr.com web sitesinin kullanımına ilişkin şartlar.' },
    ru: { title: 'Условия использования', description: 'Условия использования сайта csc-tr.com.' },
    kz: { title: 'Пайдалану шарттары', description: 'csc-tr.com сайтын пайдалану шарттары.' },
    az: { title: 'İstifadə şərtləri', description: 'csc-tr.com saytından istifadə şərtləri.' },
  },
  cookies: {
    en: { title: 'Cookie Policy', description: 'Information about the cookies used on csc-tr.com and how to manage them.' },
    tr: { title: 'Çerez Politikası', description: 'csc-tr.com\'da kullanılan çerezler ve bunların nasıl yönetileceği hakkında bilgi.' },
    ru: { title: 'Политика использования файлов cookie', description: 'Информация о файлах cookie на csc-tr.com и о том, как ими управлять.' },
    kz: { title: 'Cookie саясаты', description: 'csc-tr.com сайтында қолданылатын cookie файлдары және оларды басқару туралы ақпарат.' },
    az: { title: 'Kuki siyasəti', description: 'csc-tr.com-da istifadə olunan kukilər və onların idarə edilməsi haqqında məlumat.' },
  },
  kvkk: {
    en: { title: 'Personal Data Protection Notice (KVKK)', description: 'Information notice under Turkish Personal Data Protection Law No. 6698 (KVKK) for csc-tr.com.' },
    tr: { title: 'KVKK Aydınlatma Metni', description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında csc-tr.com aydınlatma metni.' },
    ru: { title: 'Уведомление о защите персональных данных (KVKK)', description: 'Уведомление согласно турецкому Закону № 6698 о защите персональных данных (KVKK) для csc-tr.com.' },
    kz: { title: 'Дербес деректерді қорғау туралы хабарлама (KVKK)', description: 'Түркияның № 6698 Дербес деректерді қорғау туралы заңы (KVKK) бойынша csc-tr.com хабарламасы.' },
    az: { title: 'Şəxsi məlumatların qorunması bildirişi (KVKK)', description: 'Türkiyənin 6698 saylı Şəxsi Məlumatların Qorunması Qanunu (KVKK) üzrə csc-tr.com bildirişi.' },
  },
  notfound: {
    en: { title: 'Page not found', description: 'The page you are looking for does not exist.' },
    tr: { title: 'Sayfa bulunamadı', description: 'Aradığınız sayfa bulunamadı.' },
    ru: { title: 'Страница не найдена', description: 'Запрашиваемая страница не существует.' },
    kz: { title: 'Бет табылмады', description: 'Сіз іздеген бет жоқ.' },
    az: { title: 'Səhifə tapılmadı', description: 'Axtardığınız səhifə mövcud deyil.' },
  },
};

// Önek eklenmemiş yol → sayfa anahtarı
export const routeSeoKey: Record<string, SeoKey> = {
  '/': 'home', '/urunler': 'products', '/urunler/ilac': 'ilac', '/hizmetler': 'services', '/subeler': 'branches',
  '/iletisim': 'contact', '/blog': 'blog', '/katalog': 'catalog', '/kurumsal': 'corporate', '/gizlilik': 'privacy',
  '/kullanim-sartlari': 'terms', '/cerez-politikasi': 'cookies', '/kvkk': 'kvkk',
};
