// Yeni, doğrulanmış kaynaklı makaleler (2026-09). Her makale kaynağını belirtir.
import type { Lang } from './productI18n';
import type { BlogText, BlogEntry } from './blogContent';

// Yeni, doğrulanmış kaynaklı makaleler (Eylül 2026). Tüm rakam ve tarihler resmi/güvenilir kaynaklarla teyit edildi.

/* 7) KAZAKİSTAN — İlaçların zorunlu markalanması (Data Matrix) ve ithalat kuralları */
const newPost1: Record<Lang, BlogText> = {
  tr: {
    title: 'Kazakistan\'da İlaç Markalama Zorunluluğu: İthalatçılar İçin Kurallar',
    excerpt: 'Kazakistan\'da 1 Temmuz 2024\'ten bu yana tüm ilaçların Data Matrix koduyla markalanması zorunlu. İthalatta kodun nerede uygulanacağı ve EAEU sınır bildirimi kuralları.',
    content: [
      'Kazakistan\'da ilaçların zorunlu markalanması 1 Temmuz 2024\'te yürürlüğe girdi ve ilaçların yüzde 100\'ünü kapsıyor. Sistem aşamalı olarak kuruldu: pilot proje 1 Eylül 2019\'da başladı ve 31 Temmuz 2021\'de tamamlandı; ilk aşama 1 Temmuz 2022\'de 90 ürün adı için uygulandı. Markalama ve izlenebilirlik sisteminin tek operatörü Kazakhtelecom bünyesindeki Tañba\'dır. Zorunluluk başlamadan önce ithal edilen veya üretilen stokların markalanması gerekmiyor.',
      'Kurallar, Sağlık Bakanı\'nın 27 Ocak 2021 tarihli ve ҚР ДСМ-11 sayılı emriyle onaylanan İlaçların Markalanması ve İzlenebilirliği Kuralları\'nda yer alıyor; 19 Haziran 2024 tarihli ve 22 sayılı emirle önemli değişiklikler yapıldı. Buna göre üçüncü ülkelerden gelen ilaçlar Kazakistan\'a girişten önce üçüncü ülkede, ecza deposu niteliğindeki gümrük depolarında ya da gümrük işlemleri tamamlandıktan sonra ecza depolarında markalanabiliyor. EAEU ülkelerinden gelen ilaçlarda ithalatçı, devlet sınırını geçmeden önce elektronik imzalı ithalat bildirimini oluşturup izlenebilirlik sisteminde kayıt numarası almak zorunda.',
      'Markalama kodu GS1 Data Matrix formatında dört veri grubundan oluşuyor: 14 haneli GTIN, 13 karakterlik seri numarası, 4 karakterlik doğrulama anahtarı tanımlayıcısı ve 44 karakterlik doğrulama kodu. Sağlık Bakanlığı\'nın 18 Temmuz 2023 tarihli ve 134 sayılı emriyle bir markalama kodunun azami bedeli KDV hariç 2,40 tenge olarak belirlendi. Tüketiciler ambalajdaki kodu Naqty Onim uygulamasıyla tarayarak ilacın gerçekliğini kontrol edebiliyor. Kazakistan\'a ilaç tedarik eden firmalar için kodun hangi noktada uygulanacağının sevkiyat öncesinde planlanması kritik önem taşıyor.',
      'Kaynak: Tañba (Kazakhtelecom) resmi markalama portalı, tanba.telecom.kz; Kazakistan Sağlık Bakanı\'nın 19 Haziran 2024 tarihli ve 22 sayılı emri (Adalet Bakanlığı kayıt no. 34529); Kazakistan Sağlık Bakanlığı\'nın 18 Temmuz 2023 tarihli ve 134 sayılı emri.',
    ],
  },
  en: {
    title: 'Mandatory Medicine Marking in Kazakhstan: Rules for Importers',
    excerpt: 'Since 1 July 2024 every medicine in Kazakhstan must carry a Data Matrix marking code. Where the code may be applied on imports and the EAEU pre-border notification rule.',
    content: [
      'Mandatory marking of medicines in Kazakhstan took effect on 1 July 2024 and covers 100% of medicines. The system was built in stages: a pilot project started on 1 September 2019 and ended on 31 July 2021, and the first stage was applied to 90 product names on 1 July 2022. The single operator of the marking and traceability system is Tañba, part of Kazakhtelecom. Stocks imported or produced before mandatory marking began do not need to be marked.',
      'The requirements are set out in the Rules for Marking and Traceability of Medicines, approved by Order of the Minister of Health No. ҚР ДСМ-11 of 27 January 2021 and substantially amended by Order No. 22 of 19 June 2024. Under these rules, medicines from third countries may be marked in the third country before import into Kazakhstan, in customs warehouses that are pharmacy (distributor) warehouses, or in pharmacy (distributor) warehouses after customs clearance. For medicines from EAEU member states, the importer must create and electronically sign an import notification and obtain a registration number in the traceability system before crossing the state border.',
      'The marking code uses the GS1 Data Matrix format with four data groups: a 14-digit GTIN, a 13-character serial number, a 4-character verification key identifier and a 44-character verification code. Order of the Ministry of Health No. 134 of 18 July 2023 set the maximum price of one marking code at KZT 2.40 excluding VAT. Consumers can scan the code on the pack with the Naqty Onim app to check authenticity. For suppliers shipping medicines to Kazakhstan, deciding before shipment where the code will be applied is critical.',
      'Source: Tañba (Kazakhtelecom) official marking portal, tanba.telecom.kz; Order of the Minister of Health of the Republic of Kazakhstan No. 22 of 19 June 2024 (Ministry of Justice registration No. 34529); Order of the Ministry of Health of the Republic of Kazakhstan No. 134 of 18 July 2023.',
    ],
  },
  ru: {
    title: 'Обязательная маркировка лекарств в Казахстане: правила для импортёров',
    excerpt: 'С 1 июля 2024 года все лекарственные средства в Казахстане должны иметь код маркировки Data Matrix. Где наносить код при импорте и правило уведомления до пересечения границы для ЕАЭС.',
    content: [
      'Обязательная маркировка лекарственных средств в Казахстане введена с 1 июля 2024 года и охватывает 100% лекарств. Система внедрялась поэтапно: пилотный проект начался 1 сентября 2019 года и завершился 31 июля 2021 года, первый этап был запущен 1 июля 2022 года для 90 наименований. Единым оператором системы маркировки и прослеживаемости является Tañba (АО «Казахтелеком»). Остатки лекарств, ввезённые или произведённые до введения обязательной маркировки, маркировать не требуется.',
      'Требования установлены Правилами маркировки и прослеживаемости лекарственных средств, утверждёнными приказом Министра здравоохранения от 27 января 2021 года № ҚР ДСМ-11, в которые приказом от 19 июня 2024 года № 22 внесены существенные изменения. Согласно им, лекарства из третьих стран могут маркироваться на территории третьих стран до ввоза в Казахстан, на таможенных складах, являющихся аптечными (дистрибьюторскими) складами, либо на аптечных складах после завершения таможенных процедур. При ввозе из стран ЕАЭС импортёр обязан сформировать и подписать ЭЦП уведомление о ввозе и получить регистрационный номер в системе прослеживаемости до пересечения государственной границы.',
      'Код маркировки формируется в формате GS1 Data Matrix и содержит четыре группы данных: GTIN (14 цифр), серийный номер (13 символов), идентификатор ключа проверки (4 символа) и код проверки (44 символа). Приказом Министерства здравоохранения от 18 июля 2023 года № 134 предельная стоимость одного кода маркировки установлена в размере 2,40 тенге без НДС. Потребители могут проверить подлинность лекарства, отсканировав код приложением Naqty Onim. Для поставщиков лекарств в Казахстан критически важно заранее, до отгрузки, определить, на каком этапе будет наноситься код.',
      'Источник: официальный портал маркировки Tañba (АО «Казахтелеком»), tanba.telecom.kz; приказ Министра здравоохранения РК от 19 июня 2024 года № 22 (регистрационный № 34529 в Министерстве юстиции); приказ Министерства здравоохранения РК от 18 июля 2023 года № 134.',
    ],
  },
  kz: {
    title: 'Қазақстанда дәрілерді міндетті таңбалау: импорттаушыларға арналған ережелер',
    excerpt: '2024 жылғы 1 шілдеден бастап Қазақстандағы барлық дәрілік заттар Data Matrix таңбалау кодымен таңбалануы тиіс. Импорт кезінде кодты қай жерде салуға болатыны және ЕАЭО үшін шекарадан бұрын хабарлама беру ережесі.',
    content: [
      'Қазақстанда дәрілік заттарды міндетті таңбалау 2024 жылғы 1 шілдеден бастап енгізілді және дәрілердің 100%-ын қамтиды. Жүйе кезең-кезеңімен енгізілді: пилоттық жоба 2019 жылғы 1 қыркүйекте басталып, 2021 жылғы 31 шілдеде аяқталды, бірінші кезең 2022 жылғы 1 шілдеде 90 атау үшін іске қосылды. Таңбалау және қадағалау жүйесінің бірыңғай операторы — «Қазақтелеком» АҚ құрамындағы Tañba. Міндетті таңбалау енгізілгенге дейін әкелінген немесе өндірілген дәрі қалдықтарын таңбалау талап етілмейді.',
      'Талаптар Денсаулық сақтау министрінің 2021 жылғы 27 қаңтардағы № ҚР ДСМ-11 бұйрығымен бекітілген Дәрілік заттарды таңбалау және қадағалау қағидаларында белгіленген, оларға 2024 жылғы 19 маусымдағы № 22 бұйрықпен елеулі өзгерістер енгізілді. Соған сәйкес үшінші елдерден келетін дәрілер Қазақстанға әкелінгенге дейін үшінші елдің аумағында, дәріхана (дистрибьюторлық) қоймасы болып табылатын кедендік қоймаларда немесе кедендік рәсімдер аяқталғаннан кейін дәріхана қоймаларында таңбалануы мүмкін. ЕАЭО елдерінен әкелу кезінде импорттаушы мемлекеттік шекарадан өткенге дейін әкелу туралы хабарламаны қалыптастырып, ЭЦҚ-мен қол қойып, қадағалау жүйесінде тіркеу нөмірін алуға міндетті.',
      'Таңбалау коды GS1 Data Matrix форматында төрт деректер тобынан тұрады: GTIN (14 таңба), сериялық нөмір (13 таңба), тексеру кілтінің идентификаторы (4 таңба) және тексеру коды (44 таңба). Денсаулық сақтау министрлігінің 2023 жылғы 18 шілдедегі № 134 бұйрығымен бір таңбалау кодының шекті құны ҚҚС-сыз 2,40 теңге болып белгіленді. Тұтынушылар қаптамадағы кодты Naqty Onim қосымшасымен сканерлеп, дәрінің түпнұсқалығын тексере алады. Қазақстанға дәрі жеткізетін компаниялар үшін кодтың қай кезеңде салынатынын жөнелтуге дейін алдын ала жоспарлау аса маңызды.',
      'Дереккөз: Tañba («Қазақтелеком» АҚ) ресми таңбалау порталы, tanba.telecom.kz; ҚР Денсаулық сақтау министрінің 2024 жылғы 19 маусымдағы № 22 бұйрығы (Әділет министрлігіндегі тіркеу нөмірі 34529); ҚР Денсаулық сақтау министрлігінің 2023 жылғы 18 шілдедегі № 134 бұйрығы.',
    ],
  },
  az: {
    title: 'Qazaxıstanda dərmanların məcburi markalanması: idxalçılar üçün qaydalar',
    excerpt: '1 iyul 2024-cü ildən Qazaxıstanda bütün dərman vasitələri Data Matrix markalama kodu ilə markalanmalıdır. İdxal zamanı kodun harada tətbiq olunacağı və AİB üçün sərhəddən əvvəl bildiriş qaydası.',
    content: [
      'Qazaxıstanda dərman vasitələrinin məcburi markalanması 1 iyul 2024-cü ildə qüvvəyə minib və dərmanların 100%-ni əhatə edir. Sistem mərhələlərlə qurulub: pilot layihə 1 sentyabr 2019-cu ildə başlayıb və 31 iyul 2021-ci ildə başa çatıb, birinci mərhələ isə 1 iyul 2022-ci ildə 90 məhsul adı üçün tətbiq olunub. Markalama və izlənilmə sisteminin vahid operatoru Kazakhtelecom tərkibindəki Tañba-dır. Məcburi markalama başlamazdan əvvəl idxal edilmiş və ya istehsal olunmuş ehtiyatların markalanması tələb olunmur.',
      'Tələblər Səhiyyə nazirinin 27 yanvar 2021-ci il tarixli ҚР ДСМ-11 nömrəli əmri ilə təsdiqlənmiş Dərman vasitələrinin markalanması və izlənilməsi Qaydalarında əks olunub; 19 iyun 2024-cü il tarixli 22 nömrəli əmrlə bu qaydalara mühüm dəyişikliklər edilib. Buna əsasən üçüncü ölkələrdən gələn dərmanlar Qazaxıstana idxaldan əvvəl üçüncü ölkənin ərazisində, aptek (distribyutor) anbarı statusu olan gömrük anbarlarında və ya gömrük prosedurları başa çatdıqdan sonra aptek anbarlarında markalana bilər. AİB ölkələrindən idxal zamanı idxalçı dövlət sərhədini keçməzdən əvvəl elektron imza ilə idxal bildirişini hazırlamalı və izlənilmə sistemində qeydiyyat nömrəsi almalıdır.',
      'Markalama kodu GS1 Data Matrix formatında dörd məlumat qrupundan ibarətdir: 14 rəqəmli GTIN, 13 simvollu seriya nömrəsi, 4 simvollu yoxlama açarı identifikatoru və 44 simvollu yoxlama kodu. Səhiyyə Nazirliyinin 18 iyul 2023-cü il tarixli 134 nömrəli əmri ilə bir markalama kodunun maksimal dəyəri ƏDV-siz 2,40 tenge müəyyən edilib. İstehlakçılar qablaşdırmadakı kodu Naqty Onim tətbiqi ilə skan edərək dərmanın orijinallığını yoxlaya bilərlər. Qazaxıstana dərman tədarük edən şirkətlər üçün kodun hansı mərhələdə tətbiq olunacağını göndərişdən əvvəl planlaşdırmaq həlledici əhəmiyyət daşıyır.',
      'Mənbə: Tañba (Kazakhtelecom) rəsmi markalama portalı, tanba.telecom.kz; Qazaxıstan Respublikası Səhiyyə nazirinin 19 iyun 2024-cü il tarixli 22 nömrəli əmri (Ədliyyə Nazirliyində qeydiyyat nömrəsi 34529); Qazaxıstan Respublikası Səhiyyə Nazirliyinin 18 iyul 2023-cü il tarixli 134 nömrəli əmri.',
    ],
  },
};

/* 8) KAZAKİSTAN — Yeni Vergi Kanunu: ilaç ve tıbbi cihazlarda KDV */
const newPost2: Record<Lang, BlogText> = {
  tr: {
    title: 'Kazakistan\'da Yeni Vergi Kanunu: İlaçlarda KDV 2026\'da %5, 2027\'de %10',
    excerpt: '1 Ocak 2026\'da yürürlüğe giren yeni Vergi Kanunu ile standart KDV yüzde 16\'ya çıktı. İlaç ve tıbbi cihazlarda indirimli oran 2027\'de yüzde 10\'a yükseliyor.',
    content: [
      'Kazakistan Cumhuriyeti\'nin 18 Temmuz 2025 tarihli ve 214-VIII sayılı Vergi Kanunu 1 Ocak 2026\'da yürürlüğe girdi. Yeni kanunla standart KDV oranı 31 Aralık 2025\'e kadar uygulanan yüzde 12\'den yüzde 16\'ya yükseldi.',
      'İlaçlar, tıbbi cihazlar ve tıbbi cihaz bileşenleri için indirimli oran uygulanıyor: 2026\'da yüzde 5, 1 Ocak 2027\'den itibaren ise yüzde 10. Garanti edilen ücretsiz sağlık hizmeti kapsamı (GOBMP), zorunlu sosyal sağlık sigortası (OSMS) ile yetim ve sosyal açıdan önemli hastalıkların tedavisi kapsamında sağlanan ilaçlar KDV\'den muaf tutuluyor; Forbes Kazakhstan\'a göre bu kapsamda 3.000\'den fazla ilaç adı bulunuyor.',
      'Forbes Kazakhstan\'ın 11 Ağustos 2026 tarihli haberine göre, Başbakan Yardımcısı Serik Jumangarin başkanlığında toplanan Vergi Kanunu uygulama proje ofisinin 24. toplantısında "Atameken" Ulusal Girişimciler Odası tüm ilaç ve tıbbi cihazlar için tek tip yüzde 5 KDV ve tıbbi hizmetlerin tamamen muaf tutulmasını önerdi. Katılımcılar bütçe, sağlık sektörü ve ilaca erişim üzerindeki etkiler analiz edildikten sonra yeniden toplanma kararı aldı; öneri henüz yasalaşmış değil. Kazakistan pazarına tedarik yapan firmalar için 1 Ocak 2027\'deki oran değişikliği, sözleşme ve fiyat planlamasında dikkate alınması gereken bir tarih.',
      'Kaynak: Kazakistan Cumhuriyeti Vergi Kanunu, 18 Temmuz 2025, No. 214-VIII (Devlet Satın Alma Portalı goszakup.gov.kz duyurusu); PRG (Paragraf) hukuk bilgi sistemi, 27 Ocak 2026; Forbes Kazakhstan, 11 Ağustos 2026.',
    ],
  },
  en: {
    title: 'Kazakhstan\'s New Tax Code: VAT on Medicines 5% in 2026, 10% in 2027',
    excerpt: 'The new Tax Code in force since 1 January 2026 raised the standard VAT rate to 16%. The reduced rate for medicines and medical devices rises to 10% in 2027.',
    content: [
      'The Tax Code of the Republic of Kazakhstan No. 214-VIII of 18 July 2025 entered into force on 1 January 2026. It raised the standard VAT rate from 12%, applied until 31 December 2025, to 16%.',
      'A reduced rate applies to medicines, medical devices and medical device components: 5% in 2026 and 10% from 1 January 2027. Medicines supplied under the guaranteed volume of free medical care (GOBMP), compulsory social health insurance (OSMS) and for the treatment of orphan and socially significant diseases are exempt from VAT; according to Forbes Kazakhstan, more than 3,000 medicine names fall under this exemption.',
      'According to Forbes Kazakhstan on 11 August 2026, at the 24th meeting of the Project Office for implementing the Tax Code, chaired by Deputy Prime Minister Serik Zhumangarin, the National Chamber of Entrepreneurs "Atameken" proposed a single 5% VAT rate for all medicines and medical devices and a full exemption for medical services. Participants agreed to meet again after analysing the impact on the budget, the healthcare sector and access to medicines; the proposal has not been enacted. For suppliers to the Kazakh market, the rate change on 1 January 2027 is a date to build into contracts and price planning.',
      'Source: Tax Code of the Republic of Kazakhstan No. 214-VIII of 18 July 2025 (announcement on the public procurement portal goszakup.gov.kz); PRG (Paragraph) legal information system, 27 January 2026; Forbes Kazakhstan, 11 August 2026.',
    ],
  },
  ru: {
    title: 'Новый Налоговый кодекс Казахстана: НДС на лекарства 5% в 2026 году и 10% в 2027 году',
    excerpt: 'Новый Налоговый кодекс, действующий с 1 января 2026 года, повысил стандартную ставку НДС до 16%. Пониженная ставка для лекарств и медизделий в 2027 году вырастет до 10%.',
    content: [
      'Налоговый кодекс Республики Казахстан от 18 июля 2025 года № 214-VIII вступил в силу 1 января 2026 года. Стандартная ставка НДС выросла с 12%, действовавших до 31 декабря 2025 года, до 16%.',
      'Для лекарственных средств, медицинских изделий и их комплектующих применяется пониженная ставка: 5% в 2026 году и 10% с 1 января 2027 года. Лекарства, предоставляемые в рамках гарантированного объёма бесплатной медицинской помощи (ГОБМП), обязательного социального медицинского страхования (ОСМС), а также для лечения орфанных и социально значимых заболеваний, освобождены от НДС; по данным Forbes Kazakhstan, под освобождение подпадают более 3 000 наименований лекарств.',
      'Как сообщил Forbes Kazakhstan 11 августа 2026 года, на 24-м заседании Проектного офиса по реализации Налогового кодекса под председательством заместителя премьер-министра Серика Жумангарина НПП «Атамекен» предложила установить единую ставку НДС 5% на все лекарства и медизделия и полностью освободить от налога медицинские услуги. Участники договорились вернуться к вопросу после анализа влияния на бюджет, отрасль и доступность лекарств; предложение пока не принято. Для поставщиков на казахстанский рынок изменение ставки с 1 января 2027 года — дата, которую нужно учитывать в договорах и ценовом планировании.',
      'Источник: Налоговый кодекс Республики Казахстан от 18 июля 2025 года № 214-VIII (сообщение портала государственных закупок goszakup.gov.kz); информационная система PRG («Параграф»), 27 января 2026 года; Forbes Kazakhstan, 11 августа 2026 года.',
    ],
  },
  kz: {
    title: 'Қазақстанның жаңа Салық кодексі: дәрілерге ҚҚС 2026 жылы 5%, 2027 жылы 10%',
    excerpt: '2026 жылғы 1 қаңтардан бастап қолданылатын жаңа Салық кодексі стандартты ҚҚС мөлшерлемесін 16%-ға дейін көтерді. Дәрілер мен медициналық бұйымдарға төмендетілген мөлшерлеме 2027 жылы 10%-ға дейін өседі.',
    content: [
      'Қазақстан Республикасының 2025 жылғы 18 шілдедегі № 214-VIII Салық кодексі 2026 жылғы 1 қаңтарда күшіне енді. Стандартты ҚҚС мөлшерлемесі 2025 жылғы 31 желтоқсанға дейін қолданылған 12%-дан 16%-ға дейін өсті.',
      'Дәрілік заттарға, медициналық бұйымдарға және олардың жинақтауыштарына төмендетілген мөлшерлеме қолданылады: 2026 жылы 5%, 2027 жылғы 1 қаңтардан бастап 10%. Тегін медициналық көмектің кепілдік берілген көлемі (ТМККК), міндетті әлеуметтік медициналық сақтандыру (МӘМС) шеңберінде, сондай-ақ орфандық және әлеуметтік маңызы бар ауруларды емдеуге берілетін дәрілер ҚҚС-тан босатылған; Forbes Kazakhstan мәліметінше, бұл босатуға 3 000-нан астам дәрі атауы кіреді.',
      'Forbes Kazakhstan 2026 жылғы 11 тамызда хабарлағандай, Премьер-Министрдің орынбасары Серік Жұманғарин төрағалық еткен Салық кодексін іске асыру жөніндегі Жобалық кеңсенің 24-отырысында «Атамекен» ҰКП барлық дәрілер мен медициналық бұйымдарға бірыңғай 5% ҚҚС мөлшерлемесін белгілеуді және медициналық қызметтерді салықтан толық босатуды ұсынды. Қатысушылар бюджетке, салаға және дәрінің қолжетімділігіне әсерін талдағаннан кейін мәселеге қайта оралуға келісті; ұсыныс әзірге қабылданған жоқ. Қазақстан нарығына жеткізушілер үшін 2027 жылғы 1 қаңтардағы мөлшерлеме өзгерісі келісімшарттар мен баға жоспарлауында ескерілуі тиіс күн.',
      'Дереккөз: Қазақстан Республикасының 2025 жылғы 18 шілдедегі № 214-VIII Салық кодексі (goszakup.gov.kz мемлекеттік сатып алу порталының хабарламасы); PRG («Параграф») ақпараттық жүйесі, 2026 жылғы 27 қаңтар; Forbes Kazakhstan, 2026 жылғы 11 тамыз.',
    ],
  },
  az: {
    title: 'Qazaxıstanın yeni Vergi Məcəlləsi: dərmanlara ƏDV 2026-da 5%, 2027-də 10%',
    excerpt: '1 yanvar 2026-cı ildən qüvvədə olan yeni Vergi Məcəlləsi standart ƏDV dərəcəsini 16%-ə qaldırdı. Dərman və tibbi cihazlar üçün güzəştli dərəcə 2027-ci ildə 10%-ə yüksəlir.',
    content: [
      'Qazaxıstan Respublikasının 18 iyul 2025-ci il tarixli 214-VIII nömrəli Vergi Məcəlləsi 1 yanvar 2026-cı ildə qüvvəyə minib. Standart ƏDV dərəcəsi 31 dekabr 2025-ci ilədək tətbiq olunan 12%-dən 16%-ə qaldırılıb.',
      'Dərman vasitələri, tibbi cihazlar və onların komponentləri üçün güzəştli dərəcə tətbiq olunur: 2026-cı ildə 5%, 1 yanvar 2027-ci ildən isə 10%. Pulsuz tibbi yardımın zəmanətli həcmi (GOBMP), icbari sosial tibbi sığorta (OSMS) çərçivəsində, həmçinin orfan və sosial əhəmiyyətli xəstəliklərin müalicəsi üçün verilən dərmanlar ƏDV-dən azaddır; Forbes Kazakhstan-ın məlumatına görə, bu azadolmaya 3 000-dən çox dərman adı daxildir.',
      'Forbes Kazakhstan-ın 11 avqust 2026-cı il tarixli xəbərinə görə, Baş nazirin müavini Serik Jumanqarinin sədrliyi ilə keçirilən Vergi Məcəlləsinin icrası üzrə Layihə ofisinin 24-cü iclasında "Atameken" Milli Sahibkarlar Palatası bütün dərman və tibbi cihazlar üçün vahid 5% ƏDV dərəcəsi və tibbi xidmətlərin vergidən tam azad edilməsini təklif edib. İştirakçılar büdcəyə, sektora və dərmanlara əlçatanlığa təsir təhlil edildikdən sonra yenidən toplaşmağa razılaşıblar; təklif hələ qəbul olunmayıb. Qazaxıstan bazarına tədarükçülər üçün 1 yanvar 2027-ci il tarixli dərəcə dəyişikliyi müqavilə və qiymət planlamasında nəzərə alınmalı olan tarixdir.',
      'Mənbə: Qazaxıstan Respublikasının 18 iyul 2025-ci il tarixli 214-VIII nömrəli Vergi Məcəlləsi (dövlət satınalmaları portalı goszakup.gov.kz elanı); PRG ("Paraqraf") hüquqi informasiya sistemi, 27 yanvar 2026; Forbes Kazakhstan, 11 avqust 2026.',
    ],
  },
};

/* 9) TÜRKİYE — Beşeri Tıbbi Ürünler Ruhsatlandırma Yönetmeliği 2025 değişiklikleri */
const newPost3: Record<Lang, BlogText> = {
  tr: {
    title: 'Ruhsatlandırma Yönetmeliğinde 2025 Değişiklikleri: Yeni Kritik Tarih 1 Ocak 2027',
    excerpt: 'Beşeri Tıbbi Ürünler Ruhsatlandırma Yönetmeliği 2025\'te iki kez değişti. Radyofarmasötik, alerjen ürün ve klinik araştırma geçiş süreleri 1 Ocak 2027\'ye uzatıldı.',
    content: [
      'Türkiye\'de beşeri tıbbi ürünlerin ruhsatlandırılması, 11 Aralık 2021 tarihli ve 31686 sayılı Resmî Gazete\'de yayımlanan Beşeri Tıbbi Ürünler Ruhsatlandırma Yönetmeliği ile düzenleniyor. Yönetmeliği Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) Başkanı yürütüyor ve metin 2025 yılında iki kez değiştirildi.',
      '23 Mayıs 2025 tarihli ve 32908 sayılı Resmî Gazete\'de yayımlanan değişiklikle Yönetmeliğin 5. maddesinin beşinci fıkrasına, Kurumca onaylanan majistral radyofarmasötiklerin yanına "majistral radyofarmasötiklerin hazırlanmasında kullanılan bileşenler" ifadesi eklendi. Değişiklik yayımı tarihinde yürürlüğe girdi.',
      '30 Aralık 2025 tarihli ve 33123 sayılı Resmî Gazete\'de yayımlanan değişiklikle geçiş süreleri uzatıldı. Tescil belgesiyle piyasaya arz edilip ruhsat başvurusu yapılan radyonüklid jeneratörleri, kitler ve radyofarmasötiklere ilişkin süre (geçici madde 1) 31 Aralık 2025\'ten 1 Ocak 2027\'ye; alerjen ürünlere yönelik geçici izin düzenlemesi (geçici madde 6) ile klinik araştırmaların kabulüne ilişkin istisna süresi (geçici madde 10) ise 1 Ocak 2026\'dan 1 Ocak 2027\'ye uzatıldı. Bu ürün gruplarıyla çalışan ecza depoları ve tedarikçiler için 1 Ocak 2027 takip edilmesi gereken yeni kritik tarih.',
      'Kaynak: 23 Mayıs 2025 tarihli ve 32908 sayılı Resmî Gazete; 30 Aralık 2025 tarihli ve 33123 sayılı Resmî Gazete; Beşeri Tıbbi Ürünler Ruhsatlandırma Yönetmeliği (mevzuat.gov.tr); Tunca Avukatlık Ortaklığı bilgi notu.',
    ],
  },
  en: {
    title: '2025 Amendments to Turkey\'s Licensing Regulation: New Key Date 1 January 2027',
    excerpt: 'Turkey\'s Regulation on the Licensing of Human Medicinal Products was amended twice in 2025. Transition periods for radiopharmaceuticals, allergen products and clinical trials now run to 1 January 2027.',
    content: [
      'Marketing authorisation of human medicinal products in Turkey is governed by the Regulation on the Licensing of Human Medicinal Products, published in the Official Gazette of 11 December 2021, No. 31686. The regulation is implemented by the President of the Turkish Medicines and Medical Devices Agency (TİTCK) and was amended twice in 2025.',
      'The amendment published in the Official Gazette of 23 May 2025, No. 32908 added the phrase "components used in the preparation of magistral radiopharmaceuticals" next to magistral radiopharmaceuticals approved by the Agency in the fifth paragraph of Article 5. The amendment entered into force on the date of publication.',
      'The amendment published in the Official Gazette of 30 December 2025, No. 33123 extended transition periods. The deadline for radionuclide generators, kits and radiopharmaceuticals placed on the market with a registration certificate and awaiting licensing (Temporary Article 1) moved from 31 December 2025 to 1 January 2027; the temporary permission arrangement for allergen products (Temporary Article 6) and the exception period for accepting clinical trials (Temporary Article 10) moved from 1 January 2026 to 1 January 2027. For warehouses and suppliers handling these product groups, 1 January 2027 is the new key date to track.',
      'Source: Official Gazette of 23 May 2025, No. 32908; Official Gazette of 30 December 2025, No. 33123; Regulation on the Licensing of Human Medicinal Products (mevzuat.gov.tr); Tunca Law Firm briefing note.',
    ],
  },
  ru: {
    title: 'Изменения 2025 года в Регламенте о регистрации лекарств Турции: новая ключевая дата — 1 января 2027 года',
    excerpt: 'Регламент о лицензировании лекарственных препаратов для человека в Турции в 2025 году изменялся дважды. Переходные сроки для радиофармпрепаратов, аллергенов и клинических исследований продлены до 1 января 2027 года.',
    content: [
      'Регистрация (лицензирование) лекарственных препаратов для человека в Турции регулируется Регламентом о лицензировании лекарственных препаратов для человека, опубликованным в «Официальной газете» от 11 декабря 2021 года № 31686. Исполнение регламента возложено на Председателя Агентства по лекарственным средствам и медицинским изделиям Турции (TİTCK); в 2025 году в документ дважды вносились изменения.',
      'Изменением, опубликованным в «Официальной газете» от 23 мая 2025 года № 32908, в пятый абзац статьи 5 рядом с одобренными Агентством магистральными радиофармпрепаратами добавлены слова «компоненты, используемые при приготовлении магистральных радиофармпрепаратов». Изменение вступило в силу в день опубликования.',
      'Изменением, опубликованным в «Официальной газете» от 30 декабря 2025 года № 33123, продлены переходные сроки. Срок для радионуклидных генераторов, наборов и радиофармпрепаратов, выпущенных на рынок по свидетельству о регистрации и подавших заявление на лицензию (временная статья 1), перенесён с 31 декабря 2025 года на 1 января 2027 года; временное разрешение для аллергенных препаратов (временная статья 6) и срок исключения в отношении принятия клинических исследований (временная статья 10) — с 1 января 2026 года на 1 января 2027 года. Для фармскладов и поставщиков, работающих с этими группами продукции, 1 января 2027 года — новая ключевая дата.',
      'Источник: «Официальная газета» Турции от 23 мая 2025 года № 32908; «Официальная газета» от 30 декабря 2025 года № 33123; Регламент о лицензировании лекарственных препаратов для человека (mevzuat.gov.tr); информационная записка юридической фирмы Tunca.',
    ],
  },
  kz: {
    title: 'Түркияның дәрілерді тіркеу регламентіндегі 2025 жылғы өзгерістер: жаңа негізгі күн — 2027 жылғы 1 қаңтар',
    excerpt: 'Түркияда адамға арналған дәрілік өнімдерді лицензиялау регламенті 2025 жылы екі рет өзгерді. Радиофармпрепараттар, аллергендік өнімдер және клиникалық зерттеулер бойынша өтпелі мерзімдер 2027 жылғы 1 қаңтарға дейін ұзартылды.',
    content: [
      'Түркияда адамға арналған дәрілік өнімдерді тіркеу (лицензиялау) 2021 жылғы 11 желтоқсандағы № 31686 Ресми газетте жарияланған Адамға арналған дәрілік өнімдерді лицензиялау регламентімен реттеледі. Регламентті Түркия Дәрі және Медициналық Құрылғылар Агенттігінің (TİTCK) Төрағасы орындайды, 2025 жылы құжатқа екі рет өзгеріс енгізілді.',
      '2025 жылғы 23 мамырдағы № 32908 Ресми газетте жарияланған өзгеріспен регламенттің 5-бабының бесінші тармағына Агенттік мақұлдаған магистральдық радиофармпрепараттармен қатар «магистральдық радиофармпрепараттарды дайындауда қолданылатын компоненттер» деген сөздер қосылды. Өзгеріс жарияланған күні күшіне енді.',
      '2025 жылғы 30 желтоқсандағы № 33123 Ресми газетте жарияланған өзгеріспен өтпелі мерзімдер ұзартылды. Тіркеу куәлігімен нарыққа шығарылып, лицензияға өтінім берген радионуклидтік генераторлар, жинақтар және радиофармпрепараттар бойынша мерзім (1-уақытша бап) 2025 жылғы 31 желтоқсаннан 2027 жылғы 1 қаңтарға; аллергендік өнімдерге арналған уақытша рұқсат (6-уақытша бап) және клиникалық зерттеулерді қабылдауға қатысты ерекшелік мерзімі (10-уақытша бап) 2026 жылғы 1 қаңтардан 2027 жылғы 1 қаңтарға ауыстырылды. Осы өнім топтарымен жұмыс істейтін қоймалар мен жеткізушілер үшін 2027 жылғы 1 қаңтар — қадағалауға тиіс жаңа негізгі күн.',
      'Дереккөз: Түркияның 2025 жылғы 23 мамырдағы № 32908 Ресми газеті; 2025 жылғы 30 желтоқсандағы № 33123 Ресми газеті; Адамға арналған дәрілік өнімдерді лицензиялау регламенті (mevzuat.gov.tr); Tunca заң фирмасының ақпараттық жазбасы.',
    ],
  },
  az: {
    title: 'Türkiyənin lisenziyalaşdırma reqlamentində 2025 dəyişiklikləri: yeni əsas tarix 1 yanvar 2027',
    excerpt: 'Türkiyədə insan üçün dərman məhsullarının lisenziyalaşdırılması reqlamenti 2025-ci ildə iki dəfə dəyişdi. Radiofarmasevtiklər, allergen məhsullar və klinik tədqiqatlar üzrə keçid müddətləri 1 yanvar 2027-ci ilədək uzadıldı.',
    content: [
      'Türkiyədə insan üçün dərman məhsullarının qeydiyyatı (lisenziyalaşdırılması) 11 dekabr 2021-ci il tarixli, 31686 saylı Rəsmi Qəzetdə dərc olunmuş İnsan üçün Dərman Məhsullarının Lisenziyalaşdırılması Reqlamenti ilə tənzimlənir. Reqlamenti Türkiyə Dərman və Tibbi Cihazlar Agentliyinin (TİTCK) sədri icra edir və sənədə 2025-ci ildə iki dəfə dəyişiklik edilib.',
      '23 may 2025-ci il tarixli, 32908 saylı Rəsmi Qəzetdə dərc olunan dəyişikliklə Reqlamentin 5-ci maddəsinin beşinci bəndinə Agentlik tərəfindən təsdiqlənmiş majistral radiofarmasevtiklərin yanına "majistral radiofarmasevtiklərin hazırlanmasında istifadə olunan komponentlər" ifadəsi əlavə edilib. Dəyişiklik dərc olunduğu gün qüvvəyə minib.',
      '30 dekabr 2025-ci il tarixli, 33123 saylı Rəsmi Qəzetdə dərc olunan dəyişikliklə keçid müddətləri uzadılıb. Qeydiyyat sənədi ilə bazara çıxarılmış və lisenziya üçün müraciət etmiş radionuklid generatorları, dəstlər və radiofarmasevtiklər üzrə müddət (1-ci keçid maddəsi) 31 dekabr 2025-ci ildən 1 yanvar 2027-ci ilə; allergen məhsullar üçün müvəqqəti icazə (6-cı keçid maddəsi) və klinik tədqiqatların qəbuluna dair istisna müddəti (10-cu keçid maddəsi) isə 1 yanvar 2026-cı ildən 1 yanvar 2027-ci ilə keçirilib. Bu məhsul qrupları ilə işləyən anbarlar və tədarükçülər üçün 1 yanvar 2027 izlənilməli olan yeni əsas tarixdir.',
      'Mənbə: 23 may 2025-ci il tarixli, 32908 saylı Rəsmi Qəzet; 30 dekabr 2025-ci il tarixli, 33123 saylı Rəsmi Qəzet; İnsan üçün Dərman Məhsullarının Lisenziyalaşdırılması Reqlamenti (mevzuat.gov.tr); Tunca hüquq firmasının məlumat qeydi.',
    ],
  },
};

/* 10) AZERBAYCAN — Tarif (Fiyat) Konseyi azami ilaç fiyatları ve referans ülkeler */
const newPost4: Record<Lang, BlogText> = {
  tr: {
    title: 'Azerbaycan\'da İlaç Fiyatları: Tarif Konseyi Azami Fiyatları ve Referans Ülkeler',
    excerpt: 'Azerbaycan\'da devlet kaydındaki ilaçların toptan ve perakende azami fiyatlarını Tarif (Fiyat) Konseyi belirliyor. Türkiye, 10 referans ülkeden biri.',
    content: [
      'Azerbaycan\'da devlet kaydına alınmış ilaçların fiyatları, Bakanlar Kurulu\'nun 3 Haziran 2015 tarihli ve 209 sayılı kararıyla onaylanan usule ve Tarif (Fiyat) Konseyi\'nin 21 Temmuz 2015 tarihli talimatına göre düzenleniyor. Konsey, ilaçlar için toptan ve perakende azami fiyatları belirliyor. Fiyat tavanları; ticari ad, farmasötik form, etkin madde, doz, ambalaj, miktar ve üretim ülkesi dikkate alınarak ayrı ayrı onaylanıyor.',
      'Fiyatlandırmada referans fiyat yöntemi uygulanıyor. Konseyin resmi sitesinde yer alan referans ülkeler şunlar: Türkiye, Fransa, İtalya, İspanya, Yunanistan, Portekiz, Bulgaristan, Polonya, Slovenya ve Macaristan. Türkiye\'nin bu listede bulunması, Türkiye\'deki fiyatların Azerbaycan\'daki azami fiyat hesabında dikkate alınan ülke fiyatları arasında yer aldığı anlamına geliyor.',
      'Konsey fiyat listelerini düzenli olarak güncelliyor. Eczane kuruluşları için toptan ve perakende azami fiyatlara ilişkin bir karar 5 Nisan 2025\'te yürürlüğe girdi. Aralık 2025 sonundaki oturumda 237 yeni kayıtlı ilaç için azami fiyat belirlendi, 5 ilacın azami fiyatı düşürüldü ve 53 ilacın fiyat tavanı revize edildi. Konseyin sitesindeki güncel onaylı fiyat listeleri 22 Temmuz 2026 tarihini taşıyor.',
      'Kaynak: Azerbaycan Cumhuriyeti Tarif (Fiyat) Konseyi, tariff.gov.az; Trend haber ajansı, 30 Aralık 2025; APA haber ajansı, 2 Nisan 2025.',
    ],
  },
  en: {
    title: 'Medicine Prices in Azerbaijan: Tariff Council Price Caps and Reference Countries',
    excerpt: 'In Azerbaijan the Tariff (Price) Council sets maximum wholesale and retail prices for state-registered medicines. Türkiye is one of 10 reference countries.',
    content: [
      'Prices of state-registered medicines in Azerbaijan are regulated under the procedure approved by Cabinet of Ministers Decision No. 209 of 3 June 2015 and the Tariff (Price) Council\'s Instruction of 21 July 2015. The Council sets maximum wholesale and retail prices for medicines. Price caps are approved individually, taking into account the trade name, pharmaceutical form, active ingredient, dosage, packaging, quantity and country of manufacture.',
      'Pricing uses the reference price method. The reference countries listed on the Council\'s official website are Türkiye, France, Italy, Spain, Greece, Portugal, Bulgaria, Poland, Slovenia and Hungary. Türkiye\'s inclusion means that Turkish prices are among the country prices considered when maximum prices are calculated in Azerbaijan.',
      'The Council updates its price lists regularly. A decision on maximum wholesale and retail prices for pharmacy organisations took effect on 5 April 2025. At its session at the end of December 2025 the Council set price caps for 237 newly registered medicines, lowered the maximum prices of 5 medicines and revised the caps for 53 medicines. The current approved price lists on the Council\'s website are dated 22 July 2026.',
      'Source: Tariff (Price) Council of the Republic of Azerbaijan, tariff.gov.az; Trend News Agency, 30 December 2025; APA News Agency, 2 April 2025.',
    ],
  },
  ru: {
    title: 'Цены на лекарства в Азербайджане: предельные цены Тарифного совета и референтные страны',
    excerpt: 'В Азербайджане предельные оптовые и розничные цены на зарегистрированные лекарства устанавливает Тарифный (ценовой) совет. Турция входит в число 10 референтных стран.',
    content: [
      'Цены на лекарственные средства, прошедшие государственную регистрацию в Азербайджане, регулируются в порядке, утверждённом решением Кабинета министров № 209 от 3 июня 2015 года, и Инструкцией Тарифного (ценового) совета от 21 июля 2015 года. Совет устанавливает предельные оптовые и розничные цены на лекарства. Ценовые потолки утверждаются индивидуально с учётом торгового наименования, лекарственной формы, действующего вещества, дозировки, упаковки, количества и страны производства.',
      'При ценообразовании применяется метод референтных цен. На официальном сайте Совета указаны референтные страны: Турция, Франция, Италия, Испания, Греция, Португалия, Болгария, Польша, Словения и Венгрия. Включение Турции в этот список означает, что турецкие цены входят в число цен, учитываемых при расчёте предельных цен в Азербайджане.',
      'Совет регулярно обновляет ценовые списки. Решение о предельных оптовых и розничных ценах для аптечных организаций вступило в силу 5 апреля 2025 года. На заседании в конце декабря 2025 года Совет установил предельные цены на 237 впервые зарегистрированных лекарств, снизил предельные цены на 5 лекарств и пересмотрел потолки для 53 лекарств. Актуальные утверждённые ценовые списки на сайте Совета датированы 22 июля 2026 года.',
      'Источник: Тарифный (ценовой) совет Азербайджанской Республики, tariff.gov.az; информационное агентство Trend, 30 декабря 2025 года; информационное агентство APA, 2 апреля 2025 года.',
    ],
  },
  kz: {
    title: 'Әзірбайжандағы дәрі бағасы: Тарифтік кеңестің шекті бағалары және референттік елдер',
    excerpt: 'Әзірбайжанда тіркелген дәрілердің шекті көтерме және бөлшек бағаларын Тарифтік (баға) кеңес белгілейді. Түркия — 10 референттік елдің бірі.',
    content: [
      'Әзірбайжанда мемлекеттік тіркеуден өткен дәрілік заттардың бағасы Министрлер Кабинетінің 2015 жылғы 3 маусымдағы № 209 шешімімен бекітілген тәртіп және Тарифтік (баға) кеңестің 2015 жылғы 21 шілдедегі Нұсқаулығы бойынша реттеледі. Кеңес дәрілерге шекті көтерме және бөлшек бағаларды белгілейді. Баға шегі сауда атауы, дәрілік түрі, әсер етуші заты, дозасы, қаптамасы, саны және өндіруші елі ескеріле отырып, әрқайсысына жеке бекітіледі.',
      'Баға белгілеуде референттік баға әдісі қолданылады. Кеңестің ресми сайтында көрсетілген референттік елдер: Түркия, Франция, Италия, Испания, Грекия, Португалия, Болгария, Польша, Словения және Венгрия. Түркияның осы тізімге енуі түрік бағаларының Әзірбайжандағы шекті бағаны есептеу кезінде ескерілетін баға қатарында екенін білдіреді.',
      'Кеңес баға тізімдерін үнемі жаңартып отырады. Дәріхана ұйымдарына арналған шекті көтерме және бөлшек бағалар туралы шешім 2025 жылғы 5 сәуірде күшіне енді. 2025 жылғы желтоқсанның соңындағы отырысында Кеңес жаңадан тіркелген 237 дәріге шекті баға белгіледі, 5 дәрінің шекті бағасын төмендетті және 53 дәрінің баға шегін қайта қарады. Кеңес сайтындағы өзекті бекітілген баға тізімдері 2026 жылғы 22 шілдемен белгіленген.',
      'Дереккөз: Әзірбайжан Республикасының Тарифтік (баға) кеңесі, tariff.gov.az; Trend ақпарат агенттігі, 2025 жылғы 30 желтоқсан; APA ақпарат агенттігі, 2025 жылғы 2 сәуір.',
    ],
  },
  az: {
    title: 'Azərbaycanda dərman qiymətləri: Tarif Şurasının yuxarı hədləri və istinad ölkələri',
    excerpt: 'Azərbaycanda dövlət qeydiyyatına alınmış dərmanların topdansatış və pərakəndə satış qiymətlərinin yuxarı həddini Tarif (qiymət) Şurası müəyyən edir. Türkiyə 10 istinad ölkəsindən biridir.',
    content: [
      'Azərbaycanda dövlət qeydiyyatına alınmış dərman vasitələrinin qiymətləri Nazirlər Kabinetinin 3 iyun 2015-ci il tarixli 209 nömrəli qərarı ilə təsdiq edilmiş qayda və Tarif (qiymət) Şurasının 21 iyul 2015-ci il tarixli Təlimatı əsasında tənzimlənir. Şura dərmanlar üçün topdansatış və pərakəndə satış qiymətlərinin yuxarı həddini müəyyən edir. Qiymət hədləri ticarət adı, dərman forması, təsiredici maddə, doza, qablaşdırma, miqdar və istehsalçı ölkə nəzərə alınmaqla ayrılıqda təsdiqlənir.',
      'Qiymətləndirmədə istinad qiyməti metodu tətbiq olunur. Şuranın rəsmi saytında göstərilən istinad ölkələri bunlardır: Türkiyə, Fransa, İtaliya, İspaniya, Yunanıstan, Portuqaliya, Bolqarıstan, Polşa, Sloveniya və Macarıstan. Türkiyənin bu siyahıda olması o deməkdir ki, Türkiyədəki qiymətlər Azərbaycanda yuxarı qiymət həddi hesablanarkən nəzərə alınan ölkə qiymətləri sırasındadır.',
      'Şura qiymət siyahılarını mütəmadi olaraq yeniləyir. Aptek təşkilatları üçün topdansatış və pərakəndə qiymətlərin yuxarı həddinə dair qərar 5 aprel 2025-ci ildə qüvvəyə minib. 2025-ci ilin dekabr ayının sonunda keçirilən iclasda Şura yeni qeydiyyata alınmış 237 dərman üçün yuxarı qiymət həddi müəyyən edib, 5 dərmanın yuxarı qiymət həddini aşağı salıb və 53 dərmanın qiymət həddinə yenidən baxıb. Şuranın saytındakı qüvvədə olan təsdiqlənmiş qiymət siyahıları 22 iyul 2026-cı il tarixlidir.',
      'Mənbə: Azərbaycan Respublikasının Tarif (qiymət) Şurası, tariff.gov.az; Trend informasiya agentliyi, 30 dekabr 2025; APA informasiya agentliyi, 2 aprel 2025.',
    ],
  },
};

export const newBlogEntries: BlogEntry[] = [
  { id: 7, category: 'regulations', date: '2026-09-24', readTime: '5', image: '/img-cat-ilac.jpg', t: newPost1 },
  { id: 8, category: 'trends', date: '2026-09-18', readTime: '4', image: '/img-cat-cihaz.jpg', t: newPost2 },
  { id: 9, category: 'regulations', date: '2026-09-12', readTime: '4', image: '/img-cat-test.jpg', t: newPost3 },
  { id: 10, category: 'stats', date: '2026-09-06', readTime: '4', image: '/img-cat-sarf.jpg', t: newPost4 },
];
