// Kategori ürün sayfaları için 5 dilli içerik. UI dışı pazarlama içeriği.
import type { Lang } from './productI18n';

export interface DescBlock { title: string; desc: string; }
export interface ItemBlock { title: string; items: string[]; }
export interface CategoryData { intro?: string; descBlocks?: DescBlock[]; itemBlocks?: ItemBlock[]; }

/* =================== GIDA TAKVİYELERİ =================== */
const gida: Record<Lang, CategoryData> = {
  tr: {
    descBlocks: [
      { title: 'Vitaminler', desc: 'A, B, C, D, E ve K vitaminleri; bağışıklık sisteminden kemik sağlığına, enerji üretiminden cilt bakımına kadar birçok alanda destek sunar. Sağlık Bakanlığı onaylı ve uluslararası standartlarda üretilmiş vitamin portföyümüz mevcuttur.' },
      { title: 'Mineraller', desc: 'Kalsiyum, magnezyum, çinko, demir ve selenyum; vücut fonksiyonlarının düzenlenmesinde kritik rol oynar. Yüksek biyoyararlanımlı mineral formları ile optimal emilim sağlanır.' },
      { title: 'Probiyotikler', desc: 'Bağırsak mikrobiyom dengesini destekleyen, bağışıklık sistemini güçlendiren ve sindirim sağlığını iyileştiren probiyotik takviyeler. Çeşitli suş kombinasyonları ve CFU dozları mevcuttur.' },
      { title: 'Omega-3 Yağ Asitleri', desc: 'EPA ve DHA içeren balık yağı ve alg kaynaklı omega-3 takviyeleri; kardiyovasküler sağlık, beyin fonksiyonları ve göz sağlığı için destek sağlar. İleri rafinasyon teknolojisi ile ağır metal ve toksin içermeyen formlar.' },
      { title: 'Bitkisel Takviyeler', desc: 'Ginseng, ekinezya, zerdeçal, zeytin yaprağı ve diğer botanik özler; geleneksel bilgi ve modern bilimin birleşimiyle formüle edilmiştir.' },
      { title: 'Protein Takviyeleri', desc: 'Whey, kazein, vejetaryan protein kaynakları; sporcular ve aktif yaşam tarzı benimseyenler için yüksek kaliteli protein takviyeleri.' },
      { title: 'Amino Asitler', desc: 'BCAA, glutamin, arginin ve diğer esansiyel amino asitler; kas performansı, toparlanma ve metabolik sağlık için destek.' },
      { title: 'Antioksidanlar', desc: 'Koensim Q10, resveratrol, astaksantin ve E vitamini; oksidatif strese karşı koruma ve hücre yenilenmesi desteği.' },
      { title: 'Lif Takviyeleri', desc: 'Psyllium, inulin ve prebiyotik lifler; sindirim sağlığı, kilo yönetimi ve kan şekeri dengesi için destek.' },
    ],
  },
  en: {
    descBlocks: [
      { title: 'Vitamins', desc: 'Vitamins A, B, C, D, E and K support everything from immunity to bone health, energy production to skin care. Our vitamin portfolio is Ministry of Health approved and produced to international standards.' },
      { title: 'Minerals', desc: 'Calcium, magnesium, zinc, iron and selenium play a critical role in regulating body functions. Highly bioavailable mineral forms ensure optimal absorption.' },
      { title: 'Probiotics', desc: 'Probiotic supplements that support gut microbiome balance, strengthen the immune system and improve digestive health. Various strain combinations and CFU doses are available.' },
      { title: 'Omega-3 Fatty Acids', desc: 'Fish-oil and algae-based omega-3 supplements containing EPA and DHA support cardiovascular health, brain function and eye health. Advanced refining technology delivers heavy-metal and toxin-free forms.' },
      { title: 'Herbal Supplements', desc: 'Ginseng, echinacea, turmeric, olive leaf and other botanical extracts, formulated by combining traditional knowledge with modern science.' },
      { title: 'Protein Supplements', desc: 'Whey, casein and vegetarian protein sources; high-quality protein supplements for athletes and those with an active lifestyle.' },
      { title: 'Amino Acids', desc: 'BCAAs, glutamine, arginine and other essential amino acids that support muscle performance, recovery and metabolic health.' },
      { title: 'Antioxidants', desc: 'Coenzyme Q10, resveratrol, astaxanthin and vitamin E for protection against oxidative stress and support for cell renewal.' },
      { title: 'Fiber Supplements', desc: 'Psyllium, inulin and prebiotic fibers to support digestive health, weight management and blood sugar balance.' },
    ],
  },
  ru: {
    descBlocks: [
      { title: 'Витамины', desc: 'Витамины A, B, C, D, E и K поддерживают всё — от иммунитета до здоровья костей, от выработки энергии до ухода за кожей. Наш ассортимент витаминов одобрен Министерством здравоохранения и произведён по международным стандартам.' },
      { title: 'Минералы', desc: 'Кальций, магний, цинк, железо и селен играют ключевую роль в регуляции функций организма. Высокая биодоступность минеральных форм обеспечивает оптимальное усвоение.' },
      { title: 'Пробиотики', desc: 'Пробиотические добавки, поддерживающие баланс микробиома кишечника, укрепляющие иммунитет и улучшающие пищеварение. Доступны различные комбинации штаммов и дозировки КОЕ.' },
      { title: 'Омега-3 жирные кислоты', desc: 'Добавки омега-3 на основе рыбьего жира и водорослей с EPA и DHA поддерживают сердечно-сосудистую систему, работу мозга и здоровье глаз. Передовая технология очистки обеспечивает формы без тяжёлых металлов и токсинов.' },
      { title: 'Растительные добавки', desc: 'Женьшень, эхинацея, куркума, лист оливы и другие растительные экстракты, созданные на стыке традиционных знаний и современной науки.' },
      { title: 'Протеиновые добавки', desc: 'Сывороточный, казеиновый и растительные источники белка; высококачественные протеиновые добавки для спортсменов и людей с активным образом жизни.' },
      { title: 'Аминокислоты', desc: 'BCAA, глутамин, аргинин и другие незаменимые аминокислоты для поддержки мышечной работоспособности, восстановления и обмена веществ.' },
      { title: 'Антиоксиданты', desc: 'Коэнзим Q10, ресвератрол, астаксантин и витамин E для защиты от окислительного стресса и поддержки обновления клеток.' },
      { title: 'Пищевые волокна', desc: 'Псиллиум, инулин и пребиотические волокна для поддержки пищеварения, контроля веса и баланса сахара в крови.' },
    ],
  },
  kz: {
    descBlocks: [
      { title: 'Витаминдер', desc: 'A, B, C, D, E және K витаминдері иммунитеттен сүйек денсаулығына, энергия өндірісінен тері күтіміне дейін көптеген салада қолдау көрсетеді. Витамин топтамамыз Денсаулық сақтау министрлігі мақұлдаған және халықаралық стандарттарда өндірілген.' },
      { title: 'Минералдар', desc: 'Кальций, магний, мырыш, темір және селен дене қызметтерін реттеуде маңызды рөл атқарады. Биожетімділігі жоғары минерал формалары оңтайлы сіңуді қамтамасыз етеді.' },
      { title: 'Пробиотиктер', desc: 'Ішек микробиом балансын қолдайтын, иммунитетті нығайтатын және ас қорытуды жақсартатын пробиотик қоспалар. Әртүрлі штамм комбинациялары мен КОЕ дозалары бар.' },
      { title: 'Омега-3 май қышқылдары', desc: 'EPA және DHA бар балық майы мен балдырдан алынған омега-3 қоспалары жүрек-қантамыр денсаулығына, ми қызметіне және көз денсаулығына қолдау көрсетеді. Жетілдірілген тазарту технологиясы ауыр металдар мен уыттардан таза формаларды береді.' },
      { title: 'Өсімдік қоспалары', desc: 'Женьшень, эхинацея, куркума, зәйтүн жапырағы және басқа да өсімдік сығындылары дәстүрлі білім мен қазіргі ғылымды ұштастыра отырып жасалған.' },
      { title: 'Протеин қоспалары', desc: 'Сарысу, казеин және өсімдік ақуыз көздері; спортшылар мен белсенді өмір салтын ұстанатындарға арналған жоғары сапалы протеин қоспалары.' },
      { title: 'Амин қышқылдары', desc: 'BCAA, глутамин, аргинин және басқа да алмастырылмайтын амин қышқылдары бұлшықет өнімділігі, қалпына келу және метаболизмге қолдау көрсетеді.' },
      { title: 'Антиоксиданттар', desc: 'Коэнзим Q10, ресвератрол, астаксантин және E витамині тотығу стресінен қорғайды және жасуша жаңаруына қолдау көрсетеді.' },
      { title: 'Талшық қоспалары', desc: 'Псиллиум, инулин және пребиотик талшықтары ас қорыту, салмақты бақылау және қандағы қант балансына қолдау көрсетеді.' },
    ],
  },
  az: {
    descBlocks: [
      { title: 'Vitaminlər', desc: 'A, B, C, D, E və K vitaminləri immunitetdən sümük sağlamlığına, enerji istehsalından dəri qayğısına qədər bir çox sahədə dəstək verir. Vitamin portfelimiz Səhiyyə Nazirliyi tərəfindən təsdiqlənib və beynəlxalq standartlarda istehsal olunub.' },
      { title: 'Minerallar', desc: 'Kalsium, maqnezium, sink, dəmir və selen orqanizmin funksiyalarının tənzimlənməsində mühüm rol oynayır. Yüksək biomövcudluğa malik mineral formaları optimal sorulmanı təmin edir.' },
      { title: 'Probiotiklər', desc: 'Bağırsaq mikrobiom balansını dəstəkləyən, immuniteti gücləndirən və həzmi yaxşılaşdıran probiotik əlavələr. Müxtəlif ştamm kombinasiyaları və CFU dozaları mövcuddur.' },
      { title: 'Omeqa-3 yağ turşuları', desc: 'EPA və DHA tərkibli balıq yağı və yosun mənşəli omeqa-3 əlavələri ürək-damar sağlamlığına, beyin funksiyalarına və göz sağlamlığına dəstək verir. Qabaqcıl təmizləmə texnologiyası ağır metal və toksinsiz formalar təqdim edir.' },
      { title: 'Bitki əlavələri', desc: 'Cinseng, exinaseya, zerdəçal, zeytun yarpağı və digər bitki ekstraktları ənənəvi bilik ilə müasir elmin birləşməsi ilə hazırlanıb.' },
      { title: 'Protein əlavələri', desc: 'Zərdab, kazein və vegetarian protein mənbələri; idmançılar və aktiv həyat tərzi keçirənlər üçün yüksək keyfiyyətli protein əlavələri.' },
      { title: 'Amin turşuları', desc: 'BCAA, qlutamin, arginin və digər əvəzolunmaz amin turşuları əzələ performansına, bərpaya və metabolik sağlamlığa dəstək verir.' },
      { title: 'Antioksidantlar', desc: 'Koenzim Q10, resveratrol, astaksantin və E vitamini oksidləşmə stresindən qoruyur və hüceyrə yenilənməsinə dəstək verir.' },
      { title: 'Lif əlavələri', desc: 'Psyllium, inulin və prebiotik liflər həzm sağlamlığına, çəki nəzarətinə və qan şəkəri balansına dəstək verir.' },
    ],
  },
};

/* =================== HASTA VE BEBEK BEZLERİ =================== */
const bez: Record<Lang, CategoryData> = {
  tr: {
    intro: 'Hastane ve ev bakımında hijyen konforunu en üst düzeye çıkaran hasta bezleri, emici pedler, bebek bezleri ve stoma ürünleri portföyümüzle güvenilir tedarik sunuyoruz.',
    descBlocks: [
      { title: 'Yetişkin Hasta Bezleri', desc: 'Orta, büyük ve ekstra büyük boyutlarda; yüksek emicilik, nefes alabilirlik ve cilt dostu malzemeler ile tasarlanmış hasta bezleri. Gece ve gündüz kullanımına uygun çeşitler, anti-bakteriyel katman ile enfeksiyon riskini azaltır.' },
      { title: 'Emici Pedler ve Altlıklar', desc: 'Yatak koruyucu altlıklar, emici pedler ve sandalye minderleri; hastane ve ev bakımında yatak yaralarını önlemeye yardımcı, sıvıyı hapseden teknoloji ile üretilmiştir.' },
      { title: 'Bebek Bezleri', desc: 'Yenidoğan, mini, midi, maxi ve junior boyutlarında; klor içermeyen, paraben içermeyen, cilt dostu malzemelerden üretilmiş bebek bezleri. Hassas ciltler için dermatolojik olarak test edilmiştir.' },
      { title: 'Alt Değiştirme Örtüleri', desc: 'Tek kullanımlık ve yıkanabilir alt değiştirme örtüleri; bebek ve hasta bakımında hijyen standartlarını karşılar. Su geçirmez alt katman ile dökülmeleri engeller.' },
      { title: 'İdrar Torbaları', desc: 'Yatak altı ve bacak tipi idrar torbaları; biyobenzer malzemelerden üretilmiş, kaçak önleyici sistem, gizli drenaj valfi ve kolay okunabilir ölçeklendirme ile tasarlanmıştır.' },
      { title: 'Stoma Ürünleri', desc: 'Kolostomi ve ileostomi poşetleri, cilt bariyer plakaları ve stoma bakım aksesuarları; cilt dostu yapışkan teknoloji ile güvenli kapatma ve koku kontrolü sağlar.' },
    ],
  },
  en: {
    intro: 'With our portfolio of adult diapers, absorbent pads, baby diapers and stoma products, we offer reliable supply that maximizes hygiene and comfort in hospital and home care.',
    descBlocks: [
      { title: 'Adult Incontinence Diapers', desc: 'Diapers in medium, large and extra-large sizes, designed with high absorbency, breathability and skin-friendly materials. Day and night variants with an antibacterial layer reduce the risk of infection.' },
      { title: 'Absorbent Pads and Underpads', desc: 'Bed-protector underpads, absorbent pads and chair cushions, produced with fluid-locking technology that helps prevent bedsores in hospital and home care.' },
      { title: 'Baby Diapers', desc: 'Newborn, mini, midi, maxi and junior sizes; baby diapers made from chlorine-free, paraben-free, skin-friendly materials. Dermatologically tested for sensitive skin.' },
      { title: 'Changing Mats', desc: 'Disposable and washable changing mats that meet hygiene standards in baby and patient care. A waterproof bottom layer prevents leaks.' },
      { title: 'Urine Bags', desc: 'Bedside and leg-type urine bags made from biocompatible materials, designed with an anti-leak system, a concealed drainage valve and easy-to-read graduation.' },
      { title: 'Stoma Products', desc: 'Colostomy and ileostomy pouches, skin barrier plates and stoma care accessories; skin-friendly adhesive technology provides secure sealing and odor control.' },
    ],
  },
  ru: {
    intro: 'Благодаря нашему ассортименту подгузников для взрослых, впитывающих пелёнок, детских подгузников и стома-продукции мы обеспечиваем надёжные поставки, повышающие гигиену и комфорт в стационарном и домашнем уходе.',
    descBlocks: [
      { title: 'Подгузники для взрослых', desc: 'Подгузники размеров M, L и XL, разработанные с высокой впитываемостью, воздухопроницаемостью и материалами, щадящими кожу. Дневные и ночные варианты с антибактериальным слоем снижают риск инфекций.' },
      { title: 'Впитывающие пелёнки и подкладки', desc: 'Защитные подкладки для кровати, впитывающие пелёнки и подушки для сидений, произведённые по технологии удержания жидкости, помогающей предотвратить пролежни в стационарном и домашнем уходе.' },
      { title: 'Детские подгузники', desc: 'Размеры для новорождённых, mini, midi, maxi и junior; детские подгузники из материалов без хлора и парабенов, щадящих кожу. Дерматологически протестированы для чувствительной кожи.' },
      { title: 'Пелёнки для пеленания', desc: 'Одноразовые и многоразовые пелёнки, отвечающие гигиеническим стандартам ухода за детьми и пациентами. Водонепроницаемый нижний слой предотвращает протекание.' },
      { title: 'Мочеприёмники', desc: 'Прикроватные и ножные мочеприёмники из биосовместимых материалов, с системой защиты от протечек, скрытым сливным клапаном и удобной шкалой.' },
      { title: 'Стома-продукция', desc: 'Калостомические и илеостомические мешки, кожные барьерные пластины и аксессуары для ухода за стомой; щадящая кожу клеевая технология обеспечивает надёжную герметизацию и контроль запаха.' },
    ],
  },
  kz: {
    intro: 'Ересектерге арналған жаялықтар, сіңіргіш төсеніштер, балалар жаялықтары және стома өнімдері топтамамыз арқылы аурухана мен үй күтімінде гигиена мен жайлылықты арттыратын сенімді жабдықтауды ұсынамыз.',
    descBlocks: [
      { title: 'Ересектерге арналған жаялықтар', desc: 'Орта, үлкен және аса үлкен өлшемдерде; жоғары сіңіргіштік, ауа өткізгіштік және теріге қолайлы материалдармен жасалған жаялықтар. Күндіз-түнгі нұсқалар бактерияға қарсы қабатпен инфекция қаупін азайтады.' },
      { title: 'Сіңіргіш төсеніштер мен астарлар', desc: 'Төсекті қорғайтын астарлар, сіңіргіш төсеніштер және орындық жастықтары; аурухана мен үй күтімінде жараларды болдырмауға көмектесетін сұйықтықты ұстайтын технологиямен жасалған.' },
      { title: 'Балалар жаялықтары', desc: 'Жаңа туған, mini, midi, maxi және junior өлшемдерінде; хлорсыз, парабенсіз, теріге қолайлы материалдардан жасалған балалар жаялықтары. Сезімтал тері үшін дерматологиялық тексерілген.' },
      { title: 'Ауыстыру төсеніштері', desc: 'Бір реттік және жуылатын ауыстыру төсеніштері; бала мен науқас күтімінде гигиена стандарттарына сай. Су өткізбейтін төменгі қабат төгілуді болдырмайды.' },
      { title: 'Зәр қаптары', desc: 'Төсек жанындағы және аяқ түріндегі зәр қаптары; биоүйлесімді материалдардан жасалған, ағуға қарсы жүйесі, жасырын дренаж клапаны және оңай оқылатын шкаласы бар.' },
      { title: 'Стома өнімдері', desc: 'Колостома және илеостома қапшықтары, тері бөгет пластиналары және стома күтімі аксессуарлары; теріге қолайлы жабысқақ технология сенімді жабуды және иіс бақылауын қамтамасыз етеді.' },
    ],
  },
  az: {
    intro: 'Böyüklər üçün bezlər, sorucu altlıqlar, uşaq bezləri və stoma məhsulları portfelimizlə xəstəxana və ev qayğısında gigiyena və rahatlığı artıran etibarlı təchizat təqdim edirik.',
    descBlocks: [
      { title: 'Böyüklər üçün bezlər', desc: 'Orta, böyük və çox böyük ölçülərdə; yüksək soruculuq, nəfəs alma qabiliyyəti və dəriyə uyğun materiallarla hazırlanmış bezlər. Gecə və gündüz variantları antibakterial qatla infeksiya riskini azaldır.' },
      { title: 'Sorucu altlıqlar və döşəklər', desc: 'Yatağı qoruyan altlıqlar, sorucu döşəklər və oturacaq yastıqları; xəstəxana və ev qayğısında yataq yaralarının qarşısını almağa kömək edən maye tutan texnologiya ilə istehsal olunub.' },
      { title: 'Uşaq bezləri', desc: 'Yenidoğan, mini, midi, maxi və junior ölçülərində; xlorsuz, parabensiz, dəriyə uyğun materiallardan hazırlanmış uşaq bezləri. Həssas dəri üçün dermatoloji test edilib.' },
      { title: 'Altdəyişmə örtükləri', desc: 'Birdəfəlik və yuyula bilən altdəyişmə örtükləri; uşaq və xəstə qayğısında gigiyena standartlarına cavab verir. Sukeçirməz alt qat tökülmənin qarşısını alır.' },
      { title: 'Sidik torbaları', desc: 'Yataq yanı və ayaq tipli sidik torbaları; biouyğun materiallardan hazırlanmış, sızmaya qarşı sistem, gizli drenaj klapanı və asan oxunan şkala ilə dizayn edilib.' },
      { title: 'Stoma məhsulları', desc: 'Kolostomiya və ileostomiya torbaları, dəri bariyer lövhələri və stoma qayğı aksesuarları; dəriyə uyğun yapışqan texnologiya etibarlı bağlama və qoxu nəzarəti təmin edir.' },
    ],
  },
};

export const descStylePages: Record<string, Record<Lang, CategoryData>> = {
  'gida-takviyeleri': gida,
  'hasta-bebek-bezleri': bez,
};
