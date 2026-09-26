// Blog içerikleri — 5 dilli (EN/TR/RU/KZ/AZ). Tümü doğrulanmış resmi kaynaklara dayanır.
import type { Lang } from './productI18n';

export interface BlogText { title: string; excerpt: string; content: string[]; }
export interface BlogEntry {
  id: number;
  category: 'regulations' | 'stats' | 'trends';
  date: string;
  readTime: string;
  image: string;
  t: Record<Lang, BlogText>;
}

/* 1) TÜRKİYE — İlaç Fiyatlandırması Avro Değeri (Karar 11031) */
const trPricing: Record<Lang, BlogText> = {
  tr: {
    title: 'Türkiye\'de İlaç Fiyatlandırmasında Avro Değeri Güncellendi (2026)',
    excerpt: '12 Mart 2026 tarihli ve 11031 sayılı Karar ile ilaç fiyatlandırmasında kullanılan avro değeri ve uyarlama katsayısı güncellendi. Ecza depoları ve ithalatçılar için doğrudan etkileri.',
    content: [
      'Beşeri Tıbbi Ürünlerin Fiyatlandırılmasına Dair Karar (Karar Sayısı: 11031), 12 Mart 2026 tarihli ve 33194 sayılı Resmî Gazete\'de yayımlanarak yürürlüğe girdi. Karar, ilaç fiyatlandırmasında kullanılan "avro değeri" ve hesaplama katsayısında değişiklik getiriyor.',
      'Karara göre 13 Mart – 1 Nisan 2026 arasındaki geçiş döneminde avro değeri 26,8767 TL olarak uygulanıyor; 1 Nisan 2026\'dan itibaren ise 29,1164 TL olarak belirlendi. En önemli yapısal değişiklik, uyarlama katsayısının 1 Nisan 2026\'dan itibaren yüzde 60\'tan yüzde 65\'e çıkarılması oldu.',
      'Bu güncelleme; ilaç firmaları, ecza depoları, eczaneler ve geri ödeme sistemi açısından doğrudan etkili. İthal ilaç tedarik zincirinde maliyet planlaması yapan kuruluşlar için avro değeri ve katsayı, fiyat hesaplarının temelini oluşturuyor.',
      'Kaynak: 12 Mart 2026 tarihli ve 33194 sayılı Resmî Gazete, Karar Sayısı 11031; T.C. Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK).',
    ],
  },
  en: {
    title: 'Turkey Updates the Euro Value in Drug Pricing (2026)',
    excerpt: 'Decree No. 11031 of 12 March 2026 updated the euro value and adaptation coefficient used in drug pricing. Direct effects for pharmaceutical warehouses and importers.',
    content: [
      'The Decree on the Pricing of Human Medicinal Products (No. 11031) was published in the Official Gazette dated 12 March 2026, No. 33194. It changes the "euro value" and the coefficient used in drug pricing.',
      'During the transition period of 13 March – 1 April 2026 the euro value is applied as TRY 26.8767; from 1 April 2026 it is set at TRY 29.1164. The key structural change is that the adaptation coefficient rises from 60% to 65% as of 1 April 2026.',
      'This update directly affects pharmaceutical companies, warehouses, pharmacies and the reimbursement system. For organizations planning costs in the imported-medicine supply chain, the euro value and coefficient form the basis of price calculations.',
      'Source: Official Gazette dated 12 March 2026, No. 33194, Decree No. 11031; Turkish Medicines and Medical Devices Agency (TİTCK).',
    ],
  },
  ru: {
    title: 'Турция обновила значение евро в ценообразовании на лекарства (2026)',
    excerpt: 'Постановление № 11031 от 12 марта 2026 года обновило значение евро и коэффициент адаптации, применяемые в ценообразовании. Прямые последствия для фармскладов и импортёров.',
    content: [
      'Постановление о ценообразовании на лекарственные препараты для человека (№ 11031) опубликовано в «Официальной газете» от 12 марта 2026 года, № 33194. Оно изменяет «значение евро» и коэффициент, применяемые в ценообразовании на лекарства.',
      'В переходный период с 13 марта по 1 апреля 2026 года значение евро применяется как 26,8767 TL; с 1 апреля 2026 года оно установлено на уровне 29,1164 TL. Ключевое структурное изменение — повышение коэффициента адаптации с 60% до 65% с 1 апреля 2026 года.',
      'Это обновление напрямую затрагивает фармкомпании, склады, аптеки и систему возмещения. Для организаций, планирующих затраты в цепочке поставок импортных лекарств, значение евро и коэффициент составляют основу расчёта цен.',
      'Источник: «Официальная газета» от 12 марта 2026 года, № 33194, Постановление № 11031; Агентство по лекарственным средствам и медицинским изделиям Турции (TİTCK).',
    ],
  },
  kz: {
    title: 'Түркия дәрі бағасындағы еуро мәнін жаңартты (2026)',
    excerpt: '2026 жылғы 12 наурыздағы № 11031 Қаулысымен дәрі бағасында қолданылатын еуро мәні мен бейімдеу коэффициенті жаңартылды. Дәріхана қоймалары мен импорттаушыларға тікелей әсері.',
    content: [
      'Адамға арналған дәрілік өнімдердің бағасы туралы Қаулы (№ 11031) 2026 жылғы 12 наурыздағы, № 33194 Ресми газетте жарияланды. Ол дәрі бағасында қолданылатын «еуро мәні» мен коэффициентті өзгертеді.',
      '2026 жылғы 13 наурыз – 1 сәуір аралығындағы өтпелі кезеңде еуро мәні 26,8767 TL ретінде қолданылады; 1 сәуірден бастап 29,1164 TL болып белгіленді. Негізгі құрылымдық өзгеріс — бейімдеу коэффициентінің 1 сәуірден бастап 60%-дан 65%-ға көтерілуі.',
      'Бұл жаңарту дәрі компанияларына, қоймаларға, дәріханаларға және өтемақы жүйесіне тікелей әсер етеді. Импортталатын дәрі жеткізу тізбегінде шығынды жоспарлайтын ұйымдар үшін еуро мәні мен коэффициент баға есебінің негізі болып табылады.',
      'Дереккөз: 2026 жылғы 12 наурыздағы, № 33194 Ресми газет, № 11031 Қаулы; Түркия Дәрі және Медициналық Құрылғылар Агенттігі (TİTCK).',
    ],
  },
  az: {
    title: 'Türkiyə dərman qiymətləndirməsində avro dəyərini yenilədi (2026)',
    excerpt: '12 mart 2026-cı il tarixli 11031 saylı Qərarla dərman qiymətləndirməsində istifadə olunan avro dəyəri və uyğunlaşma əmsalı yeniləndi. Dərman anbarları və idxalçılar üçün birbaşa təsirləri.',
    content: [
      'İnsan üçün dərman məhsullarının qiymətləndirilməsinə dair Qərar (№ 11031) 12 mart 2026-cı il tarixli, 33194 saylı Rəsmi Qəzetdə dərc olunaraq qüvvəyə mindi. O, dərman qiymətləndirməsində istifadə olunan "avro dəyəri" və əmsalı dəyişir.',
      '13 mart – 1 aprel 2026 keçid dövründə avro dəyəri 26,8767 TL kimi tətbiq olunur; 1 apreldən isə 29,1164 TL olaraq müəyyən edilib. Əsas struktur dəyişiklik — uyğunlaşma əmsalının 1 apreldən 60%-dən 65%-ə qaldırılmasıdır.',
      'Bu yeniləmə dərman şirkətlərinə, anbarlara, apteklərə və ödəniş sisteminə birbaşa təsir edir. İdxal dərman təchizat zəncirində xərcləri planlaşdıran təşkilatlar üçün avro dəyəri və əmsal qiymət hesablamalarının əsasını təşkil edir.',
      'Mənbə: 12 mart 2026-cı il tarixli, 33194 saylı Rəsmi Qəzet, № 11031 Qərar; Türkiyə Dərman və Tibbi Cihazlar Agentliyi (TİTCK).',
    ],
  },
};

/* 2) TÜRKİYE — İyi Dağıtım Uygulamaları (GDP) Kılavuzu */
const trGdp: Record<Lang, BlogText> = {
  tr: {
    title: 'İyi Dağıtım Uygulamaları (GDP): İlaç Tedarik Zincirinin Temeli',
    excerpt: 'TİTCK\'nın İyi Dağıtım ve Muhafaza Uygulamaları Kılavuzu, ecza depolarının satın alma, saklama, dağıtım ve sevkiyat süreçlerini düzenliyor. Soğuk zincir ve kalite güvencesi.',
    content: [
      'Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) tarafından yayımlanan İyi Dağıtım ve Muhafaza Uygulamaları Kılavuzu, beşeri tıbbi ürünlerin tedarik zincirinin tamamında satın alınması, satılması, ihracatı, saklanması, dağıtımı ve sevkiyatına ilişkin usul ve esasları düzenliyor.',
      'Kılavuz; ulusal mevzuata ve uluslararası kabul görmüş standartlara (özellikle AB GDP Kılavuzu) uyumu esas alıyor. Ecza depoları için sıcaklık kontrollü depolama, soğuk zincir bütünlüğü, kalifikasyon ve validasyon, dokümantasyon ve izlenebilirlik temel gereklilikler arasında.',
      'GDP uyumu, ürünlerin üreticiden son kullanıcıya kadar kalite ve güvenliğinin korunmasını sağlıyor. CSC olarak, 2-8°C soğuk zincir ve GDP uyumlu süreçlerimizle bu çerçeveye uygun tedarik hizmeti sunuyoruz.',
      'Kaynak: TİTCK — İlaçlar ve Ecza Deposunda Bulundurulan Ürünler ile İlgili İyi Dağıtım ve Muhafaza Uygulamaları Kılavuzu (titck.gov.tr).',
    ],
  },
  en: {
    title: 'Good Distribution Practices (GDP): The Backbone of the Supply Chain',
    excerpt: 'TİTCK\'s Good Distribution and Storage Practices Guide governs procurement, storage, distribution and shipment for pharmaceutical warehouses. Cold chain and quality assurance.',
    content: [
      'The Good Distribution and Storage Practices Guide, published by the Turkish Medicines and Medical Devices Agency (TİTCK), regulates the procedures and principles for purchasing, selling, exporting, storing, distributing and shipping human medicinal products across the entire supply chain.',
      'The guide is based on compliance with national legislation and internationally accepted standards, particularly the EU GDP Guide. For pharmaceutical warehouses, temperature-controlled storage, cold-chain integrity, qualification and validation, documentation and traceability are among the core requirements.',
      'GDP compliance ensures product quality and safety are preserved from manufacturer to end user. At CSC, we provide supply services aligned with this framework through our 2–8°C cold chain and GDP-compliant processes.',
      'Source: TİTCK — Good Distribution and Storage Practices Guide for Medicines and Products Held in Pharmaceutical Warehouses (titck.gov.tr).',
    ],
  },
  ru: {
    title: 'Надлежащая дистрибьюторская практика (GDP): основа цепочки поставок',
    excerpt: 'Руководство TİTCK по надлежащей дистрибьюторской практике и хранению регулирует закупку, хранение, распределение и отгрузку для фармскладов. Холодовая цепь и обеспечение качества.',
    content: [
      'Руководство по надлежащей практике дистрибуции и хранения, опубликованное Агентством по лекарственным средствам и медицинским изделиям Турции (TİTCK), регулирует порядок и принципы закупки, продажи, экспорта, хранения, распределения и отгрузки лекарственных препаратов на всей цепочке поставок.',
      'Руководство основано на соответствии национальному законодательству и международно признанным стандартам, в частности Руководству GDP ЕС. Для фармскладов ключевыми требованиями являются хранение с контролем температуры, целостность холодовой цепи, квалификация и валидация, документирование и прослеживаемость.',
      'Соответствие GDP обеспечивает сохранение качества и безопасности продукции от производителя до конечного потребителя. В CSC мы предоставляем услуги поставок в соответствии с этой системой благодаря холодовой цепи 2–8°C и процессам, соответствующим GDP.',
      'Источник: TİTCK — Руководство по надлежащей практике дистрибуции и хранения лекарств и продукции фармскладов (titck.gov.tr).',
    ],
  },
  kz: {
    title: 'Жақсы Дистрибуция Тәжірибесі (GDP): жеткізу тізбегінің негізі',
    excerpt: 'TİTCK-нің Жақсы Дистрибуция және Сақтау Тәжірибесі нұсқаулығы дәріхана қоймаларының сатып алу, сақтау, тарату және жөнелту процестерін реттейді. Суық тізбек және сапа кепілдігі.',
    content: [
      'Түркия Дәрі және Медициналық Құрылғылар Агенттігі (TİTCK) шығарған Жақсы Дистрибуция және Сақтау Тәжірибесі нұсқаулығы дәрілік өнімдерді бүкіл жеткізу тізбегінде сатып алу, сату, экспорттау, сақтау, тарату және жөнелту тәртібі мен қағидаларын реттейді.',
      'Нұсқаулық ұлттық заңнамаға және халықаралық танылған стандарттарға, әсіресе ЕО GDP нұсқаулығына сәйкестікке негізделген. Дәріхана қоймалары үшін температура бақыланатын сақтау, суық тізбек тұтастығы, біліктілік пен валидация, құжаттама және бақыланушылық негізгі талаптардың қатарында.',
      'GDP сәйкестігі өнімнің сапасы мен қауіпсіздігін өндірушіден соңғы тұтынушыға дейін сақтауды қамтамасыз етеді. CSC ретінде біз 2–8°C суық тізбек және GDP-ге сәйкес процестерімізбен осы шеңберге сай жеткізу қызметін ұсынамыз.',
      'Дереккөз: TİTCK — Дәрілер мен дәріхана қоймаларындағы өнімдер бойынша Жақсы Дистрибуция және Сақтау Тәжірибесі нұсқаулығы (titck.gov.tr).',
    ],
  },
  az: {
    title: 'Yaxşı Distribusiya Təcrübəsi (GDP): təchizat zəncirinin əsası',
    excerpt: 'TİTCK-nin Yaxşı Distribusiya və Saxlama Təcrübəsi Təlimatı dərman anbarlarının satınalma, saxlama, paylama və göndərmə proseslərini tənzimləyir. Soyuq zəncir və keyfiyyət təminatı.',
    content: [
      'Türkiyə Dərman və Tibbi Cihazlar Agentliyi (TİTCK) tərəfindən dərc olunan Yaxşı Distribusiya və Saxlama Təcrübəsi Təlimatı dərman məhsullarının bütün təchizat zənciri boyunca alınması, satılması, ixracı, saxlanması, paylanması və göndərilməsinə dair qayda və prinsipləri tənzimləyir.',
      'Təlimat milli qanunvericiliyə və beynəlxalq qəbul olunmuş standartlara, xüsusən Aİ GDP Təlimatına uyğunluğa əsaslanır. Dərman anbarları üçün temperatur nəzarətli saxlama, soyuq zəncir bütövlüyü, kvalifikasiya və validasiya, sənədləşdirmə və izlənəbilirlik əsas tələblər sırasındadır.',
      'GDP uyğunluğu məhsulun keyfiyyət və təhlükəsizliyinin istehsalçıdan son istehlakçıya qədər qorunmasını təmin edir. CSC olaraq, 2–8°C soyuq zəncir və GDP-yə uyğun proseslərimizlə bu çərçivəyə uyğun təchizat xidməti təqdim edirik.',
      'Mənbə: TİTCK — Dərmanlar və dərman anbarlarındakı məhsullar üzrə Yaxşı Distribusiya və Saxlama Təcrübəsi Təlimatı (titck.gov.tr).',
    ],
  },
};

/* 3) TÜRKİYE — İlaç Takip Sistemi (İTS) */
const trIts: Record<Lang, BlogText> = {
  tr: {
    title: 'İlaç Takip Sistemi (İTS): Karekod ile Uçtan Uca İzlenebilirlik',
    excerpt: 'Türkiye\'de her ilaç kutusu karekod ile takip ediliyor. Ecza depoları, eczaneler ve ihracatçılar İTS\'ye kayıtlı olmak ve bildirim yapmak zorunda.',
    content: [
      'İlaç Takip Sistemi (İTS), Türkiye\'de beşeri ilaçların tedarik ve dağıtım süreçlerini karekod (2D barkod) teknolojisiyle izleyen ulusal sistemdir. Her ilaç kutusu benzersiz bir karekod ile serileştirilir ve üretimden hastaya kadar her hareketi kayıt altına alınır.',
      'İlgili mevzuata göre tedarik zincirindeki tüm paydaşlar — ecza depoları, eczaneler, ruhsat sahibi firmalar, ihracat izinli firmalar ve geri ödeme kurumları — İTS\'ye kayıtlı olmak ve ürün hareketlerini sisteme bildirmekle yükümlü.',
      'Bu izlenebilirlik, sahte ilaçla mücadele, geri çağırma (recall) süreçleri ve miyad yönetimi açısından kritik. CSC olarak, tüm sevkiyatlarımızda İTS bildirimlerini ve lot bazlı takibi eksiksiz yürütüyoruz.',
      'Kaynak: İlaç Takip Sistemi (its.gov.tr); TİTCK — Beşeri Tıbbi Ürünler için Barkod ve Karekod Uygulama Kılavuzu.',
    ],
  },
  en: {
    title: 'Drug Tracking System (İTS): End-to-End Traceability with 2D Codes',
    excerpt: 'In Turkey every medicine pack is tracked via a data-matrix code. Warehouses, pharmacies and exporters must register with İTS and report movements.',
    content: [
      'The Drug Tracking System (İTS) is Turkey\'s national system that tracks the supply and distribution of human medicines using data-matrix (2D barcode) technology. Every medicine pack is serialized with a unique code and each of its movements is recorded from production to the patient.',
      'Under the relevant regulation, all stakeholders in the supply chain — pharmaceutical warehouses, pharmacies, licence-holder companies, export-authorized companies and reimbursement institutions — must register with İTS and report product movements to the system.',
      'This traceability is critical for fighting counterfeit medicines, managing recalls and controlling expiry dates. At CSC, we complete İTS notifications and lot-based tracking for all of our shipments.',
      'Source: Drug Tracking System (its.gov.tr); TİTCK — Barcode and Data-Matrix Application Guide for Human Medicinal Products.',
    ],
  },
  ru: {
    title: 'Система отслеживания лекарств (İTS): сквозная прослеживаемость по 2D-коду',
    excerpt: 'В Турции каждая упаковка лекарства отслеживается по коду Data Matrix. Склады, аптеки и экспортёры обязаны регистрироваться в İTS и отчитываться о движении.',
    content: [
      'Система отслеживания лекарств (İTS) — национальная система Турции, отслеживающая поставку и распределение лекарств для человека с помощью технологии Data Matrix (2D-штрихкод). Каждая упаковка сериализуется уникальным кодом, и каждое её движение фиксируется от производства до пациента.',
      'Согласно соответствующему регламенту, все участники цепочки поставок — фармсклады, аптеки, компании-держатели лицензий, компании с правом экспорта и учреждения возмещения — обязаны регистрироваться в İTS и сообщать в систему о движении продукции.',
      'Такая прослеживаемость критична для борьбы с фальсификатом, управления отзывами и контроля сроков годности. В CSC мы в полном объёме выполняем уведомления İTS и партионный учёт по всем отгрузкам.',
      'Источник: Система отслеживания лекарств (its.gov.tr); TİTCK — Руководство по применению штрихкодов и кодов Data Matrix для лекарственных препаратов.',
    ],
  },
  kz: {
    title: 'Дәріні қадағалау жүйесі (İTS): 2D код арқылы ұштан-ұшқа бақылау',
    excerpt: 'Түркияда әрбір дәрі қорабы Data Matrix коды арқылы қадағаланады. Қоймалар, дәріханалар және экспорттаушылар İTS-ке тіркеліп, қозғалысты хабарлауға міндетті.',
    content: [
      'Дәріні қадағалау жүйесі (İTS) — Түркияда адамға арналған дәрілердің жеткізу мен таратылуын Data Matrix (2D штрихкод) технологиясымен бақылайтын ұлттық жүйе. Әрбір дәрі қорабы бірегей кодпен серияланады және оның әрбір қозғалысы өндірістен пациентке дейін тіркеледі.',
      'Тиісті ережеге сәйкес жеткізу тізбегіндегі барлық қатысушылар — дәріхана қоймалары, дәріханалар, лицензия иелері, экспортқа рұқсаты бар фирмалар және өтемақы мекемелері — İTS-ке тіркеліп, өнім қозғалысын жүйеге хабарлауға міндетті.',
      'Бұл бақыланушылық жалған дәрімен күресте, кері шақыру (recall) процестерінде және жарамдылық мерзімін басқаруда маңызды. CSC ретінде біз барлық жөнелтулерімізде İTS хабарламалары мен лот бойынша бақылауды толық жүргіземіз.',
      'Дереккөз: Дәріні қадағалау жүйесі (its.gov.tr); TİTCK — Дәрілік өнімдерге арналған штрихкод және Data Matrix қолдану нұсқаулығы.',
    ],
  },
  az: {
    title: 'Dərman İzləmə Sistemi (İTS): 2D kod ilə uçdan-uca izlənəbilirlik',
    excerpt: 'Türkiyədə hər dərman qutusu Data Matrix kodu ilə izlənir. Anbarlar, apteklər və ixracatçılar İTS-də qeydiyyatdan keçib hərəkəti bildirməlidir.',
    content: [
      'Dərman İzləmə Sistemi (İTS) Türkiyədə insan dərmanlarının təchizat və paylanmasını Data Matrix (2D barkod) texnologiyası ilə izləyən milli sistemdir. Hər dərman qutusu unikal kodla serialaşdırılır və onun hər hərəkəti istehsaldan xəstəyə qədər qeydə alınır.',
      'Müvafiq qaydaya əsasən təchizat zəncirindəki bütün iştirakçılar — dərman anbarları, apteklər, lisenziya sahibi şirkətlər, ixrac icazəli şirkətlər və ödəniş qurumları — İTS-də qeydiyyatdan keçib məhsul hərəkətini sistemə bildirməlidir.',
      'Bu izlənəbilirlik saxta dərmanla mübarizə, geri çağırış (recall) prosesləri və yararlılıq müddətinin idarə edilməsi baxımından kritikdir. CSC olaraq bütün göndərişlərimizdə İTS bildirişlərini və lot əsaslı izləməni tam həyata keçiririk.',
      'Mənbə: Dərman İzləmə Sistemi (its.gov.tr); TİTCK — Dərman məhsulları üçün Barkod və Data Matrix Tətbiq Təlimatı.',
    ],
  },
};

/* 4) AZERBAYCAN — 345 Sayılı Karar (kayıt kuralları) */
const azReg: Record<Lang, BlogText> = {
  tr: {
    title: 'Azerbaycan\'da İlaç Kaydında Yeni Kurallar: 345 Sayılı Karar',
    excerpt: 'Azerbaycan Bakanlar Kurulu\'nun 18 Temmuz 2024 tarihli 345 sayılı Kararı ilaç kayıt kurallarını yeniledi ve 2007 tarihli 108 sayılı kararı yürürlükten kaldırdı.',
    content: [
      'Azerbaycan Bakanlar Kurulu (Nazirlər Kabineti), 18 Temmuz 2024 tarihli ve 345 sayılı Kararı ile ilaçların, tıbbi maddelerin ve tıbbi cihazların devlet kaydına ve devlet sicilinin tutulmasına dair yeni kuralları onayladı. Karar 20 Temmuz 2024\'te yürürlüğe girerek 2007 tarihli 108 sayılı önceki kuralları yürürlükten kaldırdı.',
      'Kayıt işlemleri, Azerbaycan Sağlık Bakanlığı bünyesindeki Analitik Ekspertiz Merkezi tarafından yürütülüyor. Öne çıkan hükümler: devlet kaydı 5 yıl geçerli; olumlu ekspertiz raporunun ardından belge 7 iş günü içinde düzenleniyor; eksiklik halinde başvurana 10 iş günü tanınıyor; yeniden kayıt başvurusu süre bitiminden en az 90 gün önce yapılıyor.',
      'Kapsama ilaçlar (jenerikler ve etkin maddeler dahil), tıbbi maddeler ve risk sınıflarına göre tıbbi cihazlar giriyor. CSC-AZ olarak, Türkiye menşeli ürünlerin Azerbaycan\'daki kayıt ve ithalat süreçlerinde belge hazırlığı ve takibinde destek veriyoruz.',
      'Kaynak: Azerbaycan Bakanlar Kurulu 345 sayılı Kararı (18 Temmuz 2024, yürürlük 20.07.2024); Sağlık Bakanlığı Analitik Ekspertiz Merkezi (pharma.az).',
    ],
  },
  en: {
    title: 'New Medicine Registration Rules in Azerbaijan: Resolution No. 345',
    excerpt: 'Azerbaijan Cabinet of Ministers Resolution No. 345 of 18 July 2024 renewed the medicine registration rules and repealed Resolution No. 108 of 2007.',
    content: [
      'Azerbaijan\'s Cabinet of Ministers approved new rules on the state registration of medications, medicinal substances and medical appliances through Resolution No. 345 of 18 July 2024. It entered into force on 20 July 2024, repealing the previous rules under Resolution No. 108 of 2007.',
      'Registration is handled by the Center for Analytical Expertise under the Ministry of Health. Key provisions: state registration is valid for 5 years; a certificate is issued within 7 business days of a positive expert report; applicants get 10 business days to correct deficiencies; re-registration must be filed at least 90 days before expiry.',
      'The scope covers medications (including generics and APIs), medicinal substances and risk-classified medical appliances. As CSC-AZ, we support document preparation and follow-up for the registration and import of Turkish-origin products in Azerbaijan.',
      'Source: Azerbaijan Cabinet of Ministers Resolution No. 345 (18 July 2024, effective 20.07.2024); Ministry of Health Center for Analytical Expertise (pharma.az).',
    ],
  },
  ru: {
    title: 'Новые правила регистрации лекарств в Азербайджане: Постановление № 345',
    excerpt: 'Постановление Кабинета Министров Азербайджана № 345 от 18 июля 2024 года обновило правила регистрации лекарств и отменило Постановление № 108 от 2007 года.',
    content: [
      'Кабинет Министров Азербайджана утвердил новые правила государственной регистрации лекарств, лекарственных субстанций и медицинских изделий Постановлением № 345 от 18 июля 2024 года. Оно вступило в силу 20 июля 2024 года, отменив прежние правила по Постановлению № 108 от 2007 года.',
      'Регистрацию осуществляет Центр аналитической экспертизы при Министерстве здравоохранения. Ключевые положения: государственная регистрация действует 5 лет; сертификат выдаётся в течение 7 рабочих дней после положительного экспертного заключения; на устранение недостатков даётся 10 рабочих дней; перерегистрацию нужно подать не позднее чем за 90 дней до окончания срока.',
      'В сферу входят лекарства (включая дженерики и субстанции), лекарственные субстанции и медицинские изделия, классифицированные по риску. Как CSC-AZ, мы поддерживаем подготовку документов и сопровождение регистрации и импорта продукции турецкого происхождения в Азербайджане.',
      'Источник: Постановление Кабинета Министров Азербайджана № 345 (18 июля 2024, вступление в силу 20.07.2024); Центр аналитической экспертизы Министерства здравоохранения (pharma.az).',
    ],
  },
  kz: {
    title: 'Әзербайжанда дәрі тіркеудің жаңа ережелері: № 345 Қаулы',
    excerpt: 'Әзербайжан Министрлер Кабинетінің 2024 жылғы 18 шілдедегі № 345 Қаулысы дәрі тіркеу ережелерін жаңартып, 2007 жылғы № 108 қаулыны күшін жойды.',
    content: [
      'Әзербайжан Министрлер Кабинеті 2024 жылғы 18 шілдедегі № 345 Қаулысымен дәрілердің, дәрілік субстанциялардың және медициналық бұйымдардың мемлекеттік тіркелуіне қатысты жаңа ережелерді бекітті. Ол 2024 жылғы 20 шілдеде күшіне еніп, 2007 жылғы № 108 қаулының күшін жойды.',
      'Тіркеуді Денсаулық сақтау министрлігі жанындағы Аналитикалық Сараптама Орталығы жүргізеді. Негізгі ережелер: мемлекеттік тіркеу 5 жыл жарамды; оң сараптама қорытындысынан кейін куәлік 7 жұмыс күні ішінде беріледі; кемшілік болса өтініш берушіге түзетуге 10 жұмыс күні беріледі; қайта тіркеу мерзім аяқталуынан кемінде 90 күн бұрын берілуі керек.',
      'Қамтуға дәрілер (дженериктер мен субстанциялар қоса), дәрілік субстанциялар және тәуекел бойынша жіктелген медициналық бұйымдар кіреді. CSC-AZ ретінде біз Түркия өнімдерінің Әзербайжандағы тіркеу және импорт процестерінде құжат дайындау мен қадағалауда қолдау көрсетеміз.',
      'Дереккөз: Әзербайжан Министрлер Кабинетінің № 345 Қаулысы (18 шілде 2024, күшіне енуі 20.07.2024); Денсаулық сақтау министрлігі Аналитикалық Сараптама Орталығы (pharma.az).',
    ],
  },
  az: {
    title: 'Azərbaycanda dərman qeydiyyatında yeni qaydalar: 345 saylı Qərar',
    excerpt: 'Azərbaycan Nazirlər Kabinetinin 18 iyul 2024-cü il tarixli 345 saylı Qərarı dərman qeydiyyatı qaydalarını yenilədi və 2007-ci il tarixli 108 saylı qərarı ləğv etdi.',
    content: [
      'Azərbaycan Nazirlər Kabineti 18 iyul 2024-cü il tarixli 345 saylı Qərarı ilə dərmanların, dərman maddələrinin və tibbi ləvazimatların dövlət qeydiyyatına dair yeni qaydaları təsdiq etdi. O, 20 iyul 2024-cü ildə qüvvəyə minərək 2007-ci il tarixli 108 saylı əvvəlki qaydaları ləğv etdi.',
      'Qeydiyyatı Səhiyyə Nazirliyi yanında Analitik Ekspertiza Mərkəzi həyata keçirir. Əsas müddəalar: dövlət qeydiyyatı 5 il etibarlıdır; müsbət ekspertiza rəyindən sonra şəhadətnamə 7 iş günü ərzində verilir; çatışmazlıq olduqda ərizəçiyə düzəliş üçün 10 iş günü verilir; təkrar qeydiyyat müddət bitməzdən ən azı 90 gün əvvəl verilməlidir.',
      'Əhatə dairəsinə dərmanlar (jeneriklər və maddələr daxil), dərman maddələri və risk üzrə təsnif olunan tibbi ləvazimatlar daxildir. CSC-AZ olaraq, Türkiyə mənşəli məhsulların Azərbaycanda qeydiyyat və idxal proseslərində sənəd hazırlığı və izlənməsində dəstək veririk.',
      'Mənbə: Azərbaycan Nazirlər Kabinetinin 345 saylı Qərarı (18 iyul 2024, qüvvəyə minmə 20.07.2024); Səhiyyə Nazirliyi Analitik Ekspertiza Mərkəzi (pharma.az).',
    ],
  },
};

/* 5) AZERBAYCAN — DVTIS izlenebilirlik / serileştirme */
const azDvtis: Record<Lang, BlogText> = {
  tr: {
    title: 'Azerbaycan\'da İlaç Serileştirme ve İzlenebilirlik: DVTIS',
    excerpt: 'Azerbaycan, 1 Ocak 2024\'ten itibaren ilaçlarda zorunlu serileştirmeye geçti. DVTIS sistemi, üretim/ithalattan hastaya kadar gerçek zamanlı izleme sağlıyor.',
    content: [
      'Azerbaycan, 1 Ocak 2024\'ten itibaren ilaçlarda zorunlu serileştirmeyi kademeli olarak devreye aldı. İlk aşamada psikotrop ve güçlü etkili ilaçların izlenmesiyle başlandı; 1 Haziran 2024\'ten itibaren yerli üreticiler, ecza depoları, sağlık kurumları ve eczanelerde diğer ilaçların gerçek zamanlı izlenmesine geçildi.',
      'Sistem, Dərman Vasitələrinin Təqib və İzləmə Sistemi (DVTIS) olarak adlandırılıyor ve ilaçların üretim veya ithalatından son tüketiciye ulaşmasına kadar tüm aşamalarını gerçek zamanlı izliyor. Amaç, ilaç dolaşımının güvenliğini sağlamak ve kaçakçılığı önlemek.',
      'Serileştirme, GS1 2D Data Matrix formatında karekod ile yapılıyor. Sistemi, Sağlık Bakanlığı bünyesindeki Analitik Ekspertiz Merkezi organize ediyor. CSC-AZ olarak, Azerbaycan\'a tedarikte serileştirme ve DVTIS bildirim gereksinimlerine uyum sağlıyoruz.',
      'Kaynak: Azerbaycan Sağlık Bakanlığı Analitik Ekspertiz Merkezi — DVTIS (Dərman Vasitələrinin Təqib və İzləmə Sistemi); serileştirme kamuoyu duyuruları.',
    ],
  },
  en: {
    title: 'Medicine Serialization and Traceability in Azerbaijan: DVTIS',
    excerpt: 'Azerbaijan introduced mandatory medicine serialization from 1 January 2024. The DVTIS system enables real-time tracking from production/import to the patient.',
    content: [
      'Azerbaijan phased in mandatory medicine serialization from 1 January 2024. The initial stage began with monitoring psychotropic and potent medicines; from 1 June 2024, real-time monitoring of other medicines started in the warehouses of domestic manufacturers and wholesalers, as well as in medical institutions and pharmacies.',
      'The system is named the Medicine Tracking and Tracing System (Dərman Vasitələrinin Təqib və İzləmə Sistemi, DVTIS) and monitors all stages in real time — from production or import of medicines to delivery to the final consumer — to ensure safe circulation and prevent smuggling.',
      'Serialization uses a data-matrix code in GS1 2D Data Matrix format. The system is organized by the Center for Analytical Expertise under the Ministry of Health. As CSC-AZ, we comply with serialization and DVTIS reporting requirements when supplying to Azerbaijan.',
      'Source: Azerbaijan Ministry of Health Center for Analytical Expertise — DVTIS (Medicine Tracking and Tracing System); serialization announcements.',
    ],
  },
  ru: {
    title: 'Сериализация и прослеживаемость лекарств в Азербайджане: DVTIS',
    excerpt: 'Азербайджан ввёл обязательную сериализацию лекарств с 1 января 2024 года. Система DVTIS обеспечивает отслеживание в реальном времени от производства/импорта до пациента.',
    content: [
      'Азербайджан поэтапно ввёл обязательную сериализацию лекарств с 1 января 2024 года. На начальном этапе начали с мониторинга психотропных и сильнодействующих препаратов; с 1 июня 2024 года стартовал мониторинг остальных лекарств в реальном времени на складах отечественных производителей и оптовиков, а также в медучреждениях и аптеках.',
      'Система называется Система отслеживания и прослеживания лекарств (Dərman Vasitələrinin Təqib və İzləmə Sistemi, DVTIS) и в реальном времени контролирует все этапы — от производства или импорта до доставки конечному потребителю — для обеспечения безопасного обращения и предотвращения контрабанды.',
      'Сериализация выполняется кодом Data Matrix в формате GS1 2D. Систему организует Центр аналитической экспертизы при Министерстве здравоохранения. Как CSC-AZ, мы соблюдаем требования сериализации и отчётности DVTIS при поставках в Азербайджан.',
      'Источник: Центр аналитической экспертизы Министерства здравоохранения Азербайджана — DVTIS (Система отслеживания и прослеживания лекарств); объявления о сериализации.',
    ],
  },
  kz: {
    title: 'Әзербайжанда дәрі серияларын және бақылауын: DVTIS',
    excerpt: 'Әзербайжан 2024 жылғы 1 қаңтардан бастап дәрілерде міндетті сериялауды енгізді. DVTIS жүйесі өндіру/импорттан пациентке дейін нақты уақытта бақылауды қамтамасыз етеді.',
    content: [
      'Әзербайжан 2024 жылғы 1 қаңтардан бастап дәрілердегі міндетті сериялауды кезең-кезеңімен енгізді. Бастапқы кезеңде психотроп және күшті әсерлі дәрілерді бақылаудан басталды; 2024 жылғы 1 маусымнан бастап отандық өндірушілердің, көтерме сатушылардың қоймаларында, сондай-ақ медициналық мекемелер мен дәріханаларда басқа дәрілерді нақты уақытта бақылауға көшті.',
      'Жүйе Дәрі Құралдарын Қадағалау және Бақылау Жүйесі (Dərman Vasitələrinin Təqib və İzləmə Sistemi, DVTIS) деп аталады және дәрілердің өндірілуінен немесе импортынан соңғы тұтынушыға жеткізілуіне дейінгі барлық кезеңдерін нақты уақытта бақылайды.',
      'Сериялау GS1 2D Data Matrix форматындағы кодпен жүргізіледі. Жүйені Денсаулық сақтау министрлігі жанындағы Аналитикалық Сараптама Орталығы ұйымдастырады. CSC-AZ ретінде біз Әзербайжанға жеткізуде сериялау және DVTIS есептілік талаптарына сай боламыз.',
      'Дереккөз: Әзербайжан Денсаулық сақтау министрлігі Аналитикалық Сараптама Орталығы — DVTIS (Дәрі Құралдарын Қадағалау және Бақылау Жүйесі); сериялау хабарламалары.',
    ],
  },
  az: {
    title: 'Azərbaycanda dərman serializasiyası və izlənəbilirlik: DVTIS',
    excerpt: 'Azərbaycan 1 yanvar 2024-cü ildən dərmanlarda məcburi serializasiyanı tətbiq etdi. DVTIS sistemi istehsaldan/idxaldan xəstəyə qədər real vaxtda izləmə təmin edir.',
    content: [
      'Azərbaycan 1 yanvar 2024-cü ildən dərmanlarda məcburi serializasiyanı mərhələli şəkildə tətbiq etdi. İlkin mərhələdə psixotrop və güclü təsirli dərmanların monitorinqi ilə başlandı; 1 iyun 2024-cü ildən yerli istehsalçıların, topdansatış müəssisələrinin anbarlarında, həmçinin tibb müəssisələri və apteklərdə digər dərmanların real vaxtda monitorinqinə keçildi.',
      'Sistem Dərman Vasitələrinin Təqib və İzləmə Sistemi (DVTIS) adlanır və dərmanların istehsalı və ya idxalından son istehlakçıya çatdırılmasına qədər bütün mərhələləri real vaxtda izləyir — təhlükəsiz dövriyyəni təmin etmək və qaçaqmalçılığın qarşısını almaq üçün.',
      'Serializasiya GS1 2D Data Matrix formatında kodla aparılır. Sistemi Səhiyyə Nazirliyi yanında Analitik Ekspertiza Mərkəzi təşkil edir. CSC-AZ olaraq, Azərbaycana təchizatda serializasiya və DVTIS hesabat tələblərinə uyğunluq təmin edirik.',
      'Mənbə: Azərbaycan Səhiyyə Nazirliyi Analitik Ekspertiza Mərkəzi — DVTIS (Dərman Vasitələrinin Təqib və İzləmə Sistemi); serializasiya elanları.',
    ],
  },
};

/* 6) KAZAKİSTAN / EAEU — Ortak İlaç Pazarı */
const kzEaeu: Record<Lang, BlogText> = {
  tr: {
    title: 'Avrasya Ekonomik Birliği Ortak İlaç Pazarı: 2025 Sonu Dönüm Noktası',
    excerpt: 'Kazakistan\'ın da üyesi olduğu EAEU\'de, ulusal kurallara göre kayıtlı ilaçların dosyalarını Birlik kurallarına uyumlu hale getirme süreci 31 Aralık 2025 ile kritik eşiğe ulaştı.',
    content: [
      'Avrasya Ekonomik Birliği (EAEU) — Rusya, Kazakistan, Belarus, Ermenistan ve Kırgızistan — üyeleri arasında ortak bir ilaç pazarı yürütüyor. Bu kapsamda, ulusal kurallara göre kayıtlı ilaçların kayıt dosyalarının (dossier) Birlik\'in ortak kurallarına uyumlu hale getirilmesi gerekiyor.',
      'Kritik eşik 31 Aralık 2025\'ti. Ulusal kurallara göre kayıtlı ilaçlar bu tarihe kadar piyasada kalabildi; pazarda kalmaya devam etmek isteyen üreticilerin ve temsilcilerinin uyumlaştırma başvurusunu bu tarihe kadar yapmaları gerekti. 31 Aralık 2025\'ten önce başvuru yapılan ürünlerin kayıtları, işlem süresince (başvurudan itibaren en fazla 3 yıl) uzatılıyor.',
      'Kamuya açık verilere göre Birlik sicilinde yaklaşık 6.900 ilaç kayıtlı olup, yaklaşık 4.700–5.000 kadarı dolaşımda; bunların yaklaşık yüzde 67\'sinin dosyaları EAEU kurallarına uyumlu. CSC olarak, Kazakistan ve EAEU pazarlarına tedarikte GDP uyumlu soğuk zincir ve dokümantasyon süreçlerini bu çerçeveye göre yönetiyoruz.',
      'Kaynak: Avrasya Ekonomik Komisyonu (eaeunion.org) ortak ilaç pazarı düzenlemeleri; EAEU ilaç kaydı geçiş dönemi kamuoyu duyuruları.',
    ],
  },
  en: {
    title: 'The EAEU Common Medicines Market: The End-2025 Turning Point',
    excerpt: 'In the EAEU, of which Kazakhstan is a member, bringing nationally registered medicines\' dossiers into line with Union rules reached a critical threshold on 31 December 2025.',
    content: [
      'The Eurasian Economic Union (EAEU) — Russia, Kazakhstan, Belarus, Armenia and Kyrgyzstan — operates a common market for medicines. Under it, the registration dossiers of medicines registered under national rules must be brought into compliance with the Union\'s common rules.',
      'The critical threshold was 31 December 2025. Medicines registered under national rules could remain on the market until then; manufacturers and representatives wishing to stay on the market had to file a compliance application by that date. For products filed before 31 December 2025, registrations are extended for the duration of the procedure (up to 3 years from filing).',
      'According to public data, about 6,900 medicines are on the Union register, of which roughly 4,700–5,000 are in circulation; about 67% of these dossiers comply with EAEU rules. At CSC, we manage GDP-compliant cold chain and documentation for supply to Kazakhstan and EAEU markets in line with this framework.',
      'Source: Eurasian Economic Commission (eaeunion.org) common medicines market regulations; EAEU medicine-registration transition announcements.',
    ],
  },
  ru: {
    title: 'Общий рынок лекарств ЕАЭС: переломный момент конца 2025 года',
    excerpt: 'В ЕАЭС, членом которого является Казахстан, приведение досье национально зарегистрированных лекарств в соответствие с правилами Союза достигло критического рубежа 31 декабря 2025 года.',
    content: [
      'Евразийский экономический союз (ЕАЭС) — Россия, Казахстан, Беларусь, Армения и Кыргызстан — ведёт общий рынок лекарств. В его рамках регистрационные досье лекарств, зарегистрированных по национальным правилам, необходимо привести в соответствие с общими правилами Союза.',
      'Критическим рубежом было 31 декабря 2025 года. Лекарства, зарегистрированные по национальным правилам, могли оставаться на рынке до этой даты; производители и представители, желающие остаться на рынке, должны были подать заявление о приведении в соответствие к этому сроку. Для продуктов, поданных до 31 декабря 2025 года, регистрации продлеваются на время процедуры (до 3 лет с момента подачи).',
      'По публичным данным, в реестре Союза около 6 900 лекарств, из которых примерно 4 700–5 000 в обращении; около 67% этих досье соответствуют правилам ЕАЭС. В CSC мы управляем GDP-совместимой холодовой цепью и документацией для поставок на рынки Казахстана и ЕАЭС в соответствии с этой системой.',
      'Источник: Евразийская экономическая комиссия (eaeunion.org), регулирование общего рынка лекарств; объявления о переходном периоде регистрации лекарств ЕАЭС.',
    ],
  },
  kz: {
    title: 'ЕАЭО ортақ дәрі нарығы: 2025 жыл соңындағы бетбұрыс',
    excerpt: 'Қазақстан мүше болып табылатын ЕАЭО-да ұлттық ережелермен тіркелген дәрілердің досьесін Одақ ережелеріне сәйкестендіру процесі 2025 жылғы 31 желтоқсанда сыни шекке жетті.',
    content: [
      'Еуразиялық экономикалық одақ (ЕАЭО) — Ресей, Қазақстан, Беларусь, Армения және Қырғызстан — ортақ дәрі нарығын жүргізеді. Оның аясында ұлттық ережелермен тіркелген дәрілердің тіркеу досьелерін Одақтың ортақ ережелеріне сәйкестендіру қажет.',
      'Сыни шек 2025 жылғы 31 желтоқсан болды. Ұлттық ережелермен тіркелген дәрілер осы күнге дейін нарықта қала алды; нарықта қалғысы келетін өндірушілер мен өкілдер сәйкестендіру өтінішін осы мерзімге дейін беруге тиіс болды. 31 желтоқсанға дейін берілген өнімдердің тіркеулері процесс уақытына (өтініштен бастап ең көбі 3 жыл) ұзартылады.',
      'Ашық деректерге сәйкес Одақ тізілімінде шамамен 6 900 дәрі тіркелген, оның шамамен 4 700–5 000-і айналымда; олардың шамамен 67%-ының досьесі ЕАЭО ережелеріне сәйкес. CSC ретінде біз Қазақстан мен ЕАЭО нарықтарына жеткізуде GDP-ге сәйкес суық тізбек пен құжаттаманы осы шеңберге сай басқарамыз.',
      'Дереккөз: Еуразиялық экономикалық комиссия (eaeunion.org) ортақ дәрі нарығы ережелері; ЕАЭО дәрі тіркеу өтпелі кезеңі хабарламалары.',
    ],
  },
  az: {
    title: 'AİİB ortaq dərman bazarı: 2025-ci ilin sonundakı dönüş nöqtəsi',
    excerpt: 'Qazaxıstanın üzv olduğu AİİB-də milli qaydalarla qeydiyyatdan keçmiş dərmanların dosyelərini İttifaq qaydalarına uyğunlaşdırma prosesi 31 dekabr 2025-ci ildə kritik həddə çatdı.',
    content: [
      'Avrasiya İqtisadi İttifaqı (AİİB) — Rusiya, Qazaxıstan, Belarus, Ermənistan və Qırğızıstan — ortaq dərman bazarı aparır. Onun çərçivəsində milli qaydalarla qeydiyyatdan keçmiş dərmanların qeydiyyat dosyeləri İttifaqın ortaq qaydalarına uyğunlaşdırılmalıdır.',
      'Kritik hədd 31 dekabr 2025-ci il idi. Milli qaydalarla qeydiyyatdan keçmiş dərmanlar bu tarixə qədər bazarda qala bildi; bazarda qalmaq istəyən istehsalçılar və nümayəndələr uyğunlaşdırma ərizəsini bu tarixə qədər verməli idilər. 31 dekabra qədər verilmiş məhsulların qeydiyyatları prosedur müddətinə (ərizədən sonra ən çox 3 il) uzadılır.',
      'İctimai məlumatlara görə İttifaq reyestrində təxminən 6 900 dərman qeydiyyatdadır, təxminən 4 700–5 000-i dövriyyədədir; bunların təxminən 67%-nin dosyeləri AİİB qaydalarına uyğundur. CSC olaraq, Qazaxıstan və AİİB bazarlarına təchizatda GDP-yə uyğun soyuq zəncir və sənədləşdirməni bu çərçivəyə uyğun idarə edirik.',
      'Mənbə: Avrasiya İqtisadi Komissiyası (eaeunion.org) ortaq dərman bazarı tənzimləmələri; AİİB dərman qeydiyyatı keçid dövrü elanları.',
    ],
  },
};

export const baseBlogEntries: BlogEntry[] = [
  { id: 1, category: 'regulations', date: '2026-06-15', readTime: '5', image: '/img-cat-ilac.jpg', t: trPricing },
  { id: 2, category: 'regulations', date: '2026-06-05', readTime: '5', image: '/img-cat-sarf.jpg', t: trGdp },
  { id: 3, category: 'regulations', date: '2026-05-28', readTime: '5', image: '/img-cat-cihaz.jpg', t: trIts },
  { id: 4, category: 'regulations', date: '2026-05-20', readTime: '6', image: '/img-cat-gida.jpg', t: azReg },
  { id: 5, category: 'trends', date: '2026-05-10', readTime: '5', image: '/img-cat-test.jpg', t: azDvtis },
  { id: 6, category: 'regulations', date: '2026-06-25', readTime: '7', image: '/img-cat-bebek.jpg', t: kzEaeu },
];

// Yeni makaleler ayrı dosyada tutulur (blogNew.ts); en yeni tarih en üstte görünür.
import { newBlogEntries } from './blogNew';
export const blogEntries: BlogEntry[] = [...newBlogEntries, ...baseBlogEntries]
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
