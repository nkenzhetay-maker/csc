// Öğe-listeli kategori sayfaları (Tıbbi Cihazlar, Sarf Malzemeleri, Testler) — 5 dil.
import type { Lang } from './productI18n';
import type { CategoryData } from './categoryContent';

/* =================== TIBBİ CİHAZLAR =================== */
const cihaz: Record<Lang, CategoryData> = {
  tr: {
    intro: 'Sağlık kurumlarının ihtiyaç duyduğu tüm tıbbi cihazlar; CE işaretli, Sağlık Bakanlığı onaylı ve uluslararası kalite standartlarında. Kurulum, eğitim ve teknik destek hizmetleriyle birlikte sunulmaktadır.',
    itemBlocks: [
      { title: 'Solunum Cihazları', items: ['Nebülizatörler', 'Oksijen Konsantratörleri', 'CPAP/BiPAP Cihazları', 'Inhaler Spacer', 'Peak Flow Metreler'] },
      { title: 'Tansiyon ve Kalp Monitörleri', items: ['Otomatik Tansiyon Aletleri', 'Bilek Tipi Tansiyon', 'ECG Cihazları', 'Pulse Oksimetreler', 'Steteskoplar'] },
      { title: 'Glukometre ve Diyabet Ürünleri', items: ['Kan Şekeri Ölçüm Cihazları', 'Test Şeritleri', 'İnsülin Kalem İğneleri', 'Lansetler', 'Sürekli Glukoz Monitörleri'] },
      { title: 'Termometreler', items: ['Kulak Termometreleri', 'Alından Temassız', 'Dijital Ağız/Rektal', 'Termometre Kılıfları'] },
      { title: 'Fizik Tedavi ve Rehabilitasyon', items: ['TENS Cihazları', 'Ultrason Terapi', 'Elektroterapi', 'Masaj Cihazları', 'Egzersiz Bantları'] },
      { title: 'Cerrahi ve Endoskopi', items: ['Cerrahi Mikroskoplar', 'Endoskopik Aletler', 'Koter Cihazları', 'Laparoskopik Setler'] },
      { title: 'Acil Müdahale', items: ['Defibrilatörler', 'Acil Müdahale Setleri', 'Sedye ve Taşıma', 'Yanık Setleri'] },
    ],
  },
  en: {
    intro: 'All medical devices healthcare institutions need; CE-marked, Ministry of Health approved and built to international quality standards. Offered together with installation, training and technical support services.',
    itemBlocks: [
      { title: 'Respiratory Devices', items: ['Nebulizers', 'Oxygen Concentrators', 'CPAP/BiPAP Devices', 'Inhaler Spacers', 'Peak Flow Meters'] },
      { title: 'Blood Pressure & Heart Monitors', items: ['Automatic Blood Pressure Monitors', 'Wrist Blood Pressure Monitors', 'ECG Devices', 'Pulse Oximeters', 'Stethoscopes'] },
      { title: 'Glucometers & Diabetes Products', items: ['Blood Glucose Meters', 'Test Strips', 'Insulin Pen Needles', 'Lancets', 'Continuous Glucose Monitors'] },
      { title: 'Thermometers', items: ['Ear Thermometers', 'Non-contact Forehead', 'Digital Oral/Rectal', 'Thermometer Covers'] },
      { title: 'Physical Therapy & Rehabilitation', items: ['TENS Devices', 'Ultrasound Therapy', 'Electrotherapy', 'Massage Devices', 'Exercise Bands'] },
      { title: 'Surgery & Endoscopy', items: ['Surgical Microscopes', 'Endoscopic Instruments', 'Cautery Devices', 'Laparoscopic Sets'] },
      { title: 'Emergency Response', items: ['Defibrillators', 'Emergency Response Kits', 'Stretchers & Transport', 'Burn Kits'] },
    ],
  },
  ru: {
    intro: 'Все медицинские устройства, необходимые лечебным учреждениям; с маркировкой CE, одобренные Министерством здравоохранения и соответствующие международным стандартам качества. Предоставляются вместе с услугами установки, обучения и технической поддержки.',
    itemBlocks: [
      { title: 'Дыхательные устройства', items: ['Небулайзеры', 'Кислородные концентраторы', 'Аппараты CPAP/BiPAP', 'Спейсеры для ингаляторов', 'Пикфлоуметры'] },
      { title: 'Мониторы давления и сердца', items: ['Автоматические тонометры', 'Запястные тонометры', 'ЭКГ-аппараты', 'Пульсоксиметры', 'Стетоскопы'] },
      { title: 'Глюкометры и товары для диабета', items: ['Глюкометры', 'Тест-полоски', 'Иглы для инсулиновых ручек', 'Ланцеты', 'Системы непрерывного мониторинга глюкозы'] },
      { title: 'Термометры', items: ['Ушные термометры', 'Бесконтактные лобные', 'Цифровые оральные/ректальные', 'Чехлы для термометров'] },
      { title: 'Физиотерапия и реабилитация', items: ['Аппараты TENS', 'Ультразвуковая терапия', 'Электротерапия', 'Массажные аппараты', 'Эспандеры'] },
      { title: 'Хирургия и эндоскопия', items: ['Хирургические микроскопы', 'Эндоскопические инструменты', 'Электрокоагуляторы', 'Лапароскопические наборы'] },
      { title: 'Неотложная помощь', items: ['Дефибрилляторы', 'Наборы неотложной помощи', 'Носилки и транспортировка', 'Ожоговые наборы'] },
    ],
  },
  kz: {
    intro: 'Медициналық мекемелерге қажетті барлық медициналық құрылғылар; CE белгісі бар, Денсаулық сақтау министрлігі мақұлдаған және халықаралық сапа стандарттарына сай. Орнату, оқыту және техникалық қолдау қызметтерімен бірге ұсынылады.',
    itemBlocks: [
      { title: 'Тыныс алу құрылғылары', items: ['Небулайзерлер', 'Оттегі концентраторлары', 'CPAP/BiPAP құрылғылары', 'Ингалятор спейсерлері', 'Пикфлоуметрлер'] },
      { title: 'Қысым және жүрек мониторлары', items: ['Автоматты тонометрлер', 'Білезік тонометрлері', 'ЭКГ құрылғылары', 'Пульсоксиметрлер', 'Стетоскоптар'] },
      { title: 'Глюкометрлер және диабет өнімдері', items: ['Қандағы қант өлшегіштер', 'Тест жолақтары', 'Инсулин қалам инелері', 'Ланцеттер', 'Үздіксіз глюкоза мониторлары'] },
      { title: 'Термометрлер', items: ['Құлақ термометрлері', 'Маңдайдан жанаспайтын', 'Сандық ауыз/ректальді', 'Термометр қаптары'] },
      { title: 'Физиотерапия және оңалту', items: ['TENS құрылғылары', 'Ультрадыбыстық терапия', 'Электротерапия', 'Массаж құрылғылары', 'Жаттығу таспалары'] },
      { title: 'Хирургия және эндоскопия', items: ['Хирургиялық микроскоптар', 'Эндоскопиялық аспаптар', 'Коагуляция құрылғылары', 'Лапароскопиялық жиынтықтар'] },
      { title: 'Шұғыл көмек', items: ['Дефибрилляторлар', 'Шұғыл көмек жиынтықтары', 'Зембіл және тасымалдау', 'Күйік жиынтықтары'] },
    ],
  },
  az: {
    intro: 'Səhiyyə müəssisələrinin ehtiyac duyduğu bütün tibbi cihazlar; CE işarəli, Səhiyyə Nazirliyi tərəfindən təsdiqlənmiş və beynəlxalq keyfiyyət standartlarına uyğun. Quraşdırma, təlim və texniki dəstək xidmətləri ilə birlikdə təqdim olunur.',
    itemBlocks: [
      { title: 'Tənəffüs cihazları', items: ['Nebulayzerlər', 'Oksigen konsentratorları', 'CPAP/BiPAP cihazları', 'İnhalyator spacerləri', 'Peak Flow metrləri'] },
      { title: 'Təzyiq və ürək monitorları', items: ['Avtomatik təzyiq cihazları', 'Bilək tipli təzyiq cihazları', 'EKQ cihazları', 'Pulsoksimetrlər', 'Stetoskoplar'] },
      { title: 'Qlükometrlər və diabet məhsulları', items: ['Qan şəkəri ölçən cihazlar', 'Test zolaqları', 'İnsulin qələm iynələri', 'Lansetlər', 'Davamlı qlükoza monitorları'] },
      { title: 'Termometrlər', items: ['Qulaq termometrləri', 'Alından təmassız', 'Rəqəmsal ağız/rektal', 'Termometr örtükləri'] },
      { title: 'Fizioterapiya və reabilitasiya', items: ['TENS cihazları', 'Ultrasəs terapiyası', 'Elektroterapiya', 'Masaj cihazları', 'Məşq lentləri'] },
      { title: 'Cərrahiyyə və endoskopiya', items: ['Cərrahi mikroskoplar', 'Endoskopik alətlər', 'Koter cihazları', 'Laparoskopik dəstlər'] },
      { title: 'Təcili müdaxilə', items: ['Defibrilyatorlar', 'Təcili müdaxilə dəstləri', 'Xərək və daşıma', 'Yanıq dəstləri'] },
    ],
  },
};

/* =================== TIBBİ SARF MALZEMELERİ =================== */
const sarf: Record<Lang, CategoryData> = {
  tr: {
    intro: 'Hastane, klinik ve eczane operasyonları için geniş kapsamlı tıbbi sarf malzemeleri portföyümüz; yüksek kalite standartlarında ve rekabetçi fiyatlarla sunulmaktadır.',
    itemBlocks: [
      { title: 'Yara Bakım Ürünleri', items: ['Bandajlar', 'Yara Kapatıcılar', 'Yara Temizleme Solüsyonları', 'Yanık Bakım Ürünleri', 'Hidrojel ve Köpük Pansumanlar', 'Şeffaf Film Örtüler'] },
      { title: 'Cerrahi Sarf Malzemeleri', items: ['Cerrahi Eldivenler', 'Cerrahi Örtüler', 'Cerrahi Aletler', 'Ameliyat İplikleri', 'Aspirasyon Setleri', 'Drenaj Sistemleri'] },
      { title: 'IV ve İnfüzyon Ürünleri', items: ['İğneler ve Kanüller', 'İnfüzyon Setleri', 'IV Solüsyonları', 'İnfüzyon Pompaları', 'Üç Yollu Musluklar', 'Ekstansiyon Hatları'] },
      { title: 'Tanı Sarf Malzemeleri', items: ['Test Şeritleri', 'Numune Toplama Tüpleri', 'Lansetler', 'Pipetler', 'Mikroskop Lamları', 'Steril Swablar'] },
      { title: 'Solunum Ürünleri', items: ['Nebülizatör Maskeleri', 'Oksijen Maskeleri', 'Oksijen Nazal Kanülleri', 'Venturi Maskeleri', 'Aspirasyon Kateterleri'] },
      { title: 'Tıbbi Gaz ve Vakum Ürünleri', items: ['Oksijen Tüpleri', 'Vakum Sistemleri', 'Flowmetreler', 'Regülatörler', 'Hortum ve Bağlantı Parçaları'] },
      { title: 'Enjeksiyon Ürünleri', items: ['Enjektörler', 'İğneler', 'Ampul Kırıcılar', 'İlaç Hazırlama Setleri', 'Güvenlikli Enjektörler'] },
    ],
  },
  en: {
    intro: 'Our comprehensive portfolio of medical consumables for hospital, clinic and pharmacy operations, offered at high quality standards and competitive prices.',
    itemBlocks: [
      { title: 'Wound Care Products', items: ['Bandages', 'Wound Closures', 'Wound Cleansing Solutions', 'Burn Care Products', 'Hydrogel & Foam Dressings', 'Transparent Film Dressings'] },
      { title: 'Surgical Consumables', items: ['Surgical Gloves', 'Surgical Drapes', 'Surgical Instruments', 'Surgical Sutures', 'Suction Sets', 'Drainage Systems'] },
      { title: 'IV & Infusion Products', items: ['Needles & Cannulas', 'Infusion Sets', 'IV Solutions', 'Infusion Pumps', 'Three-way Stopcocks', 'Extension Lines'] },
      { title: 'Diagnostic Consumables', items: ['Test Strips', 'Sample Collection Tubes', 'Lancets', 'Pipettes', 'Microscope Slides', 'Sterile Swabs'] },
      { title: 'Respiratory Products', items: ['Nebulizer Masks', 'Oxygen Masks', 'Nasal Oxygen Cannulas', 'Venturi Masks', 'Suction Catheters'] },
      { title: 'Medical Gas & Vacuum Products', items: ['Oxygen Cylinders', 'Vacuum Systems', 'Flowmeters', 'Regulators', 'Tubing & Connectors'] },
      { title: 'Injection Products', items: ['Syringes', 'Needles', 'Ampoule Breakers', 'Drug Preparation Sets', 'Safety Syringes'] },
    ],
  },
  ru: {
    intro: 'Наш обширный ассортимент медицинских расходных материалов для больниц, клиник и аптек, предлагаемый по высоким стандартам качества и конкурентным ценам.',
    itemBlocks: [
      { title: 'Средства для ухода за ранами', items: ['Бинты', 'Средства закрытия ран', 'Растворы для очищения ран', 'Средства при ожогах', 'Гидрогелевые и пенные повязки', 'Прозрачные плёночные повязки'] },
      { title: 'Хирургические расходные материалы', items: ['Хирургические перчатки', 'Хирургические простыни', 'Хирургические инструменты', 'Хирургические нити', 'Аспирационные наборы', 'Дренажные системы'] },
      { title: 'Продукты для ИВ и инфузий', items: ['Иглы и канюли', 'Инфузионные наборы', 'Инфузионные растворы', 'Инфузионные насосы', 'Трёхходовые краны', 'Удлинительные линии'] },
      { title: 'Диагностические расходные материалы', items: ['Тест-полоски', 'Пробирки для сбора образцов', 'Ланцеты', 'Пипетки', 'Предметные стёкла', 'Стерильные тампоны'] },
      { title: 'Дыхательные продукты', items: ['Маски для небулайзеров', 'Кислородные маски', 'Носовые кислородные канюли', 'Маски Вентури', 'Аспирационные катетеры'] },
      { title: 'Медицинские газы и вакуум', items: ['Кислородные баллоны', 'Вакуумные системы', 'Флоуметры', 'Регуляторы', 'Трубки и соединители'] },
      { title: 'Инъекционные продукты', items: ['Шприцы', 'Иглы', 'Устройства для вскрытия ампул', 'Наборы для приготовления препаратов', 'Безопасные шприцы'] },
    ],
  },
  kz: {
    intro: 'Аурухана, клиника және дәріхана операцияларына арналған кең ауқымды медициналық шығын материалдары топтамамыз; жоғары сапа стандарттарында және бәсекеге қабілетті бағамен ұсынылады.',
    itemBlocks: [
      { title: 'Жара күтімі өнімдері', items: ['Бинттер', 'Жара жабқыштар', 'Жара тазалау ерітінділері', 'Күйік күтімі өнімдері', 'Гидрогель және көбік таңғыштар', 'Мөлдір пленка таңғыштар'] },
      { title: 'Хирургиялық шығын материалдары', items: ['Хирургиялық қолғаптар', 'Хирургиялық жапқыштар', 'Хирургиялық аспаптар', 'Хирургиялық жіптер', 'Аспирация жиынтықтары', 'Дренаж жүйелері'] },
      { title: 'IV және инфузия өнімдері', items: ['Инелер мен канюлялар', 'Инфузия жиынтықтары', 'IV ерітінділер', 'Инфузия сорғылары', 'Үш жақты крандар', 'Ұзартқыш желілер'] },
      { title: 'Диагностикалық шығын материалдары', items: ['Тест жолақтары', 'Үлгі жинау түтіктері', 'Ланцеттер', 'Пипеткалар', 'Микроскоп шынылары', 'Стерильді тампондар'] },
      { title: 'Тыныс алу өнімдері', items: ['Небулайзер маскалары', 'Оттегі маскалары', 'Мұрын оттегі канюлялары', 'Вентури маскалары', 'Аспирация катетерлері'] },
      { title: 'Медициналық газ және вакуум өнімдері', items: ['Оттегі баллондары', 'Вакуум жүйелері', 'Флоуметрлер', 'Реттегіштер', 'Түтіктер мен қосқыштар'] },
      { title: 'Инъекция өнімдері', items: ['Шприцтер', 'Инелер', 'Ампула сындырғыштар', 'Дәрі дайындау жиынтықтары', 'Қауіпсіз шприцтер'] },
    ],
  },
  az: {
    intro: 'Xəstəxana, klinika və aptek əməliyyatları üçün geniş tibbi sərf materialları portfelimiz; yüksək keyfiyyət standartlarında və rəqabətli qiymətlərlə təqdim olunur.',
    itemBlocks: [
      { title: 'Yara qayğısı məhsulları', items: ['Bintlər', 'Yara bağlayıcılar', 'Yara təmizləmə məhlulları', 'Yanıq qayğısı məhsulları', 'Hidrogel və köpük sarğılar', 'Şəffaf film örtüklər'] },
      { title: 'Cərrahi sərf materialları', items: ['Cərrahi əlcəklər', 'Cərrahi örtüklər', 'Cərrahi alətlər', 'Cərrahi tikiş sapları', 'Aspirasiya dəstləri', 'Drenaj sistemləri'] },
      { title: 'IV və infuziya məhsulları', items: ['İynələr və kanülalar', 'İnfuziya dəstləri', 'IV məhlullar', 'İnfuziya nasosları', 'Üçyollu kranlar', 'Uzadıcı xətlər'] },
      { title: 'Diaqnostik sərf materialları', items: ['Test zolaqları', 'Nümunə toplama borucuqları', 'Lansetlər', 'Pipetlər', 'Mikroskop lamları', 'Steril tamponlar'] },
      { title: 'Tənəffüs məhsulları', items: ['Nebulayzer maskaları', 'Oksigen maskaları', 'Burun oksigen kanülaları', 'Venturi maskaları', 'Aspirasiya kateterləri'] },
      { title: 'Tibbi qaz və vakuum məhsulları', items: ['Oksigen balonları', 'Vakuum sistemləri', 'Flowmetrlər', 'Requlyatorlar', 'Şlanq və birləşdiricilər'] },
      { title: 'İnyeksiya məhsulları', items: ['Şprislər', 'İynələr', 'Ampula sındıranlar', 'Dərman hazırlama dəstləri', 'Təhlükəsiz şprislər'] },
    ],
  },
};

/* =================== TIBBİ TESTLER =================== */
const test: Record<Lang, CategoryData> = {
  tr: {
    intro: 'Hızlı tanı testlerinden laboratuvar analizlerine; CE işaretli, ISO sertifikalı ve Sağlık Bakanlığı onaylı tıbbi test kitleri portföyümüzle tanı süreçlerinizi hızlandırın. COVID-19, grip, gebelik, kan şekeri ve çok daha fazlası.',
    itemBlocks: [
      { title: 'Hızlı Tanı Testleri', items: ['COVID-19 Antijen Testleri', 'İnfluenza A/B Testleri', 'Strep A Testleri', 'Tüberkülin Testleri', 'Helicobacter pylori Testleri'] },
      { title: 'İdrar ve Kan Testleri', items: ['İdrar Analiz Çubukları', 'Kan Şekeri Test Şeritleri', 'Keton Test Şeritleri', 'Ürik Asit Testleri', 'Hemoglobin Test Sistemleri'] },
      { title: 'Gebelik ve Fertilite Testleri', items: ['Gebelik Testleri (İdrar/Kan)', 'Ovulasyon Testleri', 'Sperm Sayım Testleri', 'Fertilite Panel Testleri'] },
      { title: 'İlaç ve Toksikoloji Testleri', items: ['Çoklu İlaç Tarama Panelleri', 'Alkol Testleri', 'Narkotik Tarama', 'İlaç Seviyesi Monitörleme'] },
      { title: 'Enfeksiyon Testleri', items: ['Hepatit Panel Testleri', 'HIV Hızlı Testleri', 'Cinsel Yolla Bulaşan Enfeksiyon Paneli', 'Mantar Kültür Testleri'] },
      { title: 'Kardiyovasküler Testler', items: ['Troponin Testleri', 'BNP Testleri', 'D-Dimer Testleri', 'Koagülasyon Testleri'] },
    ],
  },
  en: {
    intro: 'From rapid diagnostic tests to laboratory analyses; accelerate your diagnostic processes with our portfolio of CE-marked, ISO-certified and Ministry of Health approved medical test kits. COVID-19, flu, pregnancy, blood sugar and much more.',
    itemBlocks: [
      { title: 'Rapid Diagnostic Tests', items: ['COVID-19 Antigen Tests', 'Influenza A/B Tests', 'Strep A Tests', 'Tuberculin Tests', 'Helicobacter pylori Tests'] },
      { title: 'Urine & Blood Tests', items: ['Urine Analysis Strips', 'Blood Glucose Test Strips', 'Ketone Test Strips', 'Uric Acid Tests', 'Hemoglobin Test Systems'] },
      { title: 'Pregnancy & Fertility Tests', items: ['Pregnancy Tests (Urine/Blood)', 'Ovulation Tests', 'Sperm Count Tests', 'Fertility Panel Tests'] },
      { title: 'Drug & Toxicology Tests', items: ['Multi-drug Screening Panels', 'Alcohol Tests', 'Narcotics Screening', 'Drug Level Monitoring'] },
      { title: 'Infection Tests', items: ['Hepatitis Panel Tests', 'HIV Rapid Tests', 'STI Panel', 'Fungal Culture Tests'] },
      { title: 'Cardiovascular Tests', items: ['Troponin Tests', 'BNP Tests', 'D-Dimer Tests', 'Coagulation Tests'] },
    ],
  },
  ru: {
    intro: 'От экспресс-тестов до лабораторных анализов; ускорьте диагностику с нашим ассортиментом медицинских тест-систем с маркировкой CE, сертификатом ISO и одобрением Министерства здравоохранения. COVID-19, грипп, беременность, сахар в крови и многое другое.',
    itemBlocks: [
      { title: 'Экспресс-тесты', items: ['Тесты на антиген COVID-19', 'Тесты на грипп A/B', 'Тесты Strep A', 'Туберкулиновые тесты', 'Тесты на Helicobacter pylori'] },
      { title: 'Анализы мочи и крови', items: ['Полоски для анализа мочи', 'Тест-полоски на глюкозу', 'Тест-полоски на кетоны', 'Тесты на мочевую кислоту', 'Системы анализа гемоглобина'] },
      { title: 'Тесты на беременность и фертильность', items: ['Тесты на беременность (моча/кровь)', 'Тесты на овуляцию', 'Тесты подсчёта сперматозоидов', 'Панельные тесты фертильности'] },
      { title: 'Тесты на наркотики и токсикологию', items: ['Мультипанели скрининга наркотиков', 'Тесты на алкоголь', 'Скрининг на наркотики', 'Мониторинг уровня препаратов'] },
      { title: 'Тесты на инфекции', items: ['Панельные тесты на гепатит', 'Экспресс-тесты на ВИЧ', 'Панель ИППП', 'Тесты грибковых культур'] },
      { title: 'Сердечно-сосудистые тесты', items: ['Тесты на тропонин', 'Тесты BNP', 'Тесты на D-димер', 'Тесты на коагуляцию'] },
    ],
  },
  kz: {
    intro: 'Жедел диагностикалық тесттерден зертханалық талдауларға дейін; CE белгісі бар, ISO сертификатты және Денсаулық сақтау министрлігі мақұлдаған медициналық тест жиынтықтары топтамасымен диагностика үдерісін жеделдетіңіз. COVID-19, тұмау, жүктілік, қандағы қант және тағы басқалары.',
    itemBlocks: [
      { title: 'Жедел диагностикалық тесттер', items: ['COVID-19 антиген тесттері', 'Тұмау A/B тесттері', 'Strep A тесттері', 'Туберкулин тесттері', 'Helicobacter pylori тесттері'] },
      { title: 'Зәр және қан тесттері', items: ['Зәр талдау жолақтары', 'Қандағы қант тест жолақтары', 'Кетон тест жолақтары', 'Зәр қышқылы тесттері', 'Гемоглобин тест жүйелері'] },
      { title: 'Жүктілік және фертильділік тесттері', items: ['Жүктілік тесттері (зәр/қан)', 'Овуляция тесттері', 'Сперма санау тесттері', 'Фертильділік панель тесттері'] },
      { title: 'Дәрі және токсикология тесттері', items: ['Көп дәрілі скрининг панельдері', 'Алкоголь тесттері', 'Есірткіге скрининг', 'Дәрі деңгейін бақылау'] },
      { title: 'Инфекция тесттері', items: ['Гепатит панель тесттері', 'ЖИТС жедел тесттері', 'ЖЖБИ панелі', 'Саңырауқұлақ дақыл тесттері'] },
      { title: 'Жүрек-қантамыр тесттері', items: ['Тропонин тесттері', 'BNP тесттері', 'D-димер тесттері', 'Коагуляция тесттері'] },
    ],
  },
  az: {
    intro: 'Sürətli diaqnostik testlərdən laboratoriya analizlərinə qədər; CE işarəli, ISO sertifikatlı və Səhiyyə Nazirliyi tərəfindən təsdiqlənmiş tibbi test dəstləri portfelimizlə diaqnostika proseslərinizi sürətləndirin. COVID-19, qrip, hamiləlik, qan şəkəri və daha çoxu.',
    itemBlocks: [
      { title: 'Sürətli diaqnostik testlər', items: ['COVID-19 antigen testləri', 'İnfluenza A/B testləri', 'Strep A testləri', 'Tuberkulin testləri', 'Helicobacter pylori testləri'] },
      { title: 'Sidik və qan testləri', items: ['Sidik analiz zolaqları', 'Qan şəkəri test zolaqları', 'Keton test zolaqları', 'Sidik turşusu testləri', 'Hemoqlobin test sistemləri'] },
      { title: 'Hamiləlik və fertillik testləri', items: ['Hamiləlik testləri (sidik/qan)', 'Ovulyasiya testləri', 'Sperma sayımı testləri', 'Fertillik panel testləri'] },
      { title: 'Dərman və toksikologiya testləri', items: ['Çoxdərmanlı skrininq panelləri', 'Alkoqol testləri', 'Narkotik skrininq', 'Dərman səviyyəsi monitorinqi'] },
      { title: 'İnfeksiya testləri', items: ['Hepatit panel testləri', 'HİV sürətli testləri', 'CYYİ paneli', 'Göbələk kultura testləri'] },
      { title: 'Ürək-damar testləri', items: ['Troponin testləri', 'BNP testləri', 'D-Dimer testləri', 'Koaqulyasiya testləri'] },
    ],
  },
};

export const itemStylePages: Record<string, Record<Lang, CategoryData>> = {
  'tibbi-cihazlar': cihaz,
  'tibbi-sarf-malzemeleri': sarf,
  'tibbi-testler': test,
};
