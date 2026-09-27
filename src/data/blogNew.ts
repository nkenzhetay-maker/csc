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

const newPost11: Record<Lang, BlogText> = {
  tr: {
    title: 'Kazakistan 1 MRP\'nin Altındaki İlaçları Devlet Fiyat Düzenlemesinden Çıkardı',
    excerpt: 'Kazakistan Sağlık Bakanlığı\'nın 4 Eylül 2026 tarihli ve 105 sayılı emriyle fiyatı 1 MRP\'ye (4.325 tenge) kadar olan ilaçlar serbest fiyatlamaya geçti; düzenlemeye tabi liste 3.039\'dan 1.827 kaleme indi.',
    content: [
      'Kazakistan Sağlık Bakanlığı, ilaç fiyatlarında aşamalı deregülasyon politikası kapsamında fiyatı 1 aylık hesaplama endeksine (MRP) kadar olan ilaçları devlet fiyat düzenlemesinden çıkardı. 2026 yılında 1 MRP 4.325 tengeye karşılık geliyor. Düzenleme, Sağlık Bakanı\'nın 4 Eylül 2026 tarihli ve 105 sayılı emriyle yapıldı ve 21 Eylül 2026\'da yürürlüğe girdi.',
      'Güncellenen listeye göre devlet fiyat düzenlemesine tabi ilaç sayısı 3.039 kalemden 1.827 kaleme düştü; böylece 1.200\'den fazla ilaç adı piyasa fiyatlamasına geçti. Bu ürünlerde fiyatlar artık arz ve talebe göre piyasa katılımcıları tarafından belirlenecek. Bakanlık, düzenlemenin daha hedefli hale geldiğini ve erişilebilirlik açısından ek koruma gerektiren ilaçlara odaklandığını açıkladı.',
      'Serbestleşmeyle birlikte piyasa izlemesi sıkılaştırılıyor: Sağlık Bakanlığı, Rekabetin Korunması ve Geliştirilmesi Ajansı ile birlikte ilaç markalama ve izlenebilirlik sistemine dayalı fiyat izleme mekanizmaları geliştiriyor. Bakanlığa göre Temmuz 2024\'ten bu yana sistemden yaklaşık 1,1 milyar ilaç kutusu geçti; vatandaşlar aşırı fiyatları DariKZ mobil uygulaması üzerinden bildirebiliyor.',
      'Kazakistan\'a ilaç tedarik eden ihracatçılar ve distribütörler için ürünlerinin güncel düzenleme listesinde yer alıp almadığını kontrol etmek artık fiyat stratejisinin ilk adımı. CSC olarak Kazakistan portföyümüzü bu değişikliklere göre izliyor, iş ortaklarımızla GDP uyumlu tedarik zinciri üzerinden çalışmaya devam ediyoruz.',
      'Kaynak: Kazakistan Cumhuriyeti Sağlık Bakanlığı basın açıklaması (gov.kz, 16.09.2026); zakon.kz, 16 Eylül 2026.',
    ],
  },
  en: {
    title: 'Kazakhstan Lifts State Price Regulation on Medicines Priced Below 1 MRP',
    excerpt: 'Under Kazakhstan Health Ministry Order No. 105 of 4 September 2026, medicines priced up to 1 MRP (4,325 tenge) moved to market pricing, cutting the regulated list from 3,039 to 1,827 positions.',
    content: [
      'As part of its phased deregulation of medicine prices, Kazakhstan\'s Ministry of Health has removed medicines priced up to one monthly calculation index (MRP) from state price regulation. In 2026, 1 MRP equals 4,325 tenge. The change was introduced by Order of the Minister of Health No. 105 dated 4 September 2026 and took effect on 21 September 2026.',
      'Under the updated list, the number of medicines subject to state price regulation fell from 3,039 to 1,827 positions, meaning more than 1,200 medicine names have moved to market-based pricing. For these products, prices will now be set by market participants according to supply and demand. The Ministry said regulation is becoming more targeted, concentrating on medicines that need additional protection to remain affordable.',
      'Deregulation comes with tighter market monitoring: the Ministry of Health and the Agency for Protection and Development of Competition are developing price monitoring mechanisms based on the medicine marking and traceability system. According to the Ministry, about 1.1 billion medicine packages have passed through the system since July 2024, and citizens can report excessive prices via the DariKZ mobile app.',
      'For exporters and distributors supplying Kazakhstan, checking whether a product remains on the updated regulated list is now the first step of any pricing strategy. At CSC we are tracking our Kazakhstan portfolio against these changes and continue to work with partners through a GDP-compliant supply chain.',
      'Source: Press release of the Ministry of Health of the Republic of Kazakhstan (gov.kz, 16.09.2026); zakon.kz, 16 September 2026.',
    ],
  },
  ru: {
    title: 'Казахстан вывел из-под госрегулирования цен лекарства стоимостью до 1 МРП',
    excerpt: 'Приказом Минздрава РК от 4 сентября 2026 года № 105 лекарства стоимостью до 1 МРП (4 325 тенге) перешли на рыночное ценообразование; регулируемый перечень сократился с 3 039 до 1 827 позиций.',
    content: [
      'В рамках поэтапного дерегулирования цен на лекарственные средства Министерство здравоохранения Казахстана вывело из-под государственного ценового регулирования препараты стоимостью до 1 месячного расчётного показателя (МРП). В 2026 году 1 МРП составляет 4 325 тенге. Изменения внесены приказом Министра здравоохранения от 4 сентября 2026 года № 105 и вступили в силу 21 сентября 2026 года.',
      'Согласно обновлённому перечню, количество лекарств, подлежащих государственному ценовому регулированию, сократилось с 3 039 до 1 827 позиций: более 1 200 наименований перешли на рыночное ценообразование. Цены на эти препараты теперь будут формировать участники рынка исходя из спроса и предложения. В министерстве отметили, что регулирование становится более адресным и концентрируется на лекарствах, требующих дополнительной защиты для обеспечения доступности.',
      'Дерегулирование сопровождается усилением мониторинга: Минздрав совместно с Агентством по защите и развитию конкуренции разрабатывает механизмы мониторинга цен на основе системы маркировки и прослеживаемости лекарств. По данным министерства, с июля 2024 года через систему прошло около 1,1 млрд упаковок лекарств, а граждане могут сообщать о завышенных ценах через мобильное приложение DariKZ.',
      'Для экспортёров и дистрибьюторов, поставляющих лекарства в Казахстан, проверка наличия продукта в обновлённом регулируемом перечне становится первым шагом ценовой стратегии. В CSC мы отслеживаем казахстанский портфель с учётом этих изменений и продолжаем работать с партнёрами через цепочку поставок, соответствующую GDP.',
      'Источник: пресс-релиз Министерства здравоохранения Республики Казахстан (gov.kz, 16.09.2026); zakon.kz, 16 сентября 2026 года.',
    ],
  },
  kz: {
    title: 'Қазақстан құны 1 АЕК-ке дейінгі дәрілерді мемлекеттік баға реттеуінен шығарды',
    excerpt: 'ҚР Денсаулық сақтау министрінің 2026 жылғы 4 қыркүйектегі № 105 бұйрығымен құны 1 АЕК-ке (4 325 теңге) дейінгі дәрілер нарықтық баға белгілеуге көшті; реттелетін тізім 3 039-дан 1 827 позицияға қысқарды.',
    content: [
      'Дәрілік заттардың бағасын кезең-кезеңімен реттеуден шығару аясында Қазақстан Денсаулық сақтау министрлігі құны 1 айлық есептік көрсеткішке (АЕК) дейінгі препараттарды мемлекеттік баға реттеуінен шығарды. 2026 жылы 1 АЕК 4 325 теңгені құрайды. Өзгерістер Денсаулық сақтау министрінің 2026 жылғы 4 қыркүйектегі № 105 бұйрығымен енгізіліп, 2026 жылғы 21 қыркүйекте күшіне енді.',
      'Жаңартылған тізімге сәйкес мемлекеттік баға реттеуіне жататын дәрілер саны 3 039 позициядан 1 827 позицияға дейін қысқарды: 1 200-ден астам атау нарықтық баға белгілеуге көшті. Бұл препараттардың бағасын енді нарық қатысушылары сұраныс пен ұсынысқа қарай белгілейді. Министрлік реттеу неғұрлым атаулы бола түсетінін және қолжетімділікті қамтамасыз ету үшін қосымша қорғауды қажет ететін дәрілерге шоғырланатынын атап өтті.',
      'Реттеуден шығару мониторингті күшейтумен қатар жүреді: Денсаулық сақтау министрлігі Бәсекелестікті қорғау және дамыту агенттігімен бірлесіп дәрілерді таңбалау және қадағалау жүйесіне негізделген баға мониторингі тетіктерін әзірлеуде. Министрлік деректері бойынша 2024 жылғы шілдеден бері жүйе арқылы шамамен 1,1 млрд дәрі қаптамасы өтті, ал азаматтар негізсіз жоғары баға туралы DariKZ мобильді қосымшасы арқылы хабарлай алады.',
      'Қазақстанға дәрі жеткізетін экспорттаушылар мен дистрибьюторлар үшін өнімнің жаңартылған реттелетін тізімде бар-жоғын тексеру баға стратегиясының алғашқы қадамына айналды. CSC ретінде біз қазақстандық портфелімізді осы өзгерістерге сай қадағалап, серіктестерімізбен GDP талаптарына сай жеткізу тізбегі арқылы жұмысты жалғастырамыз.',
      'Дереккөз: Қазақстан Республикасы Денсаулық сақтау министрлігінің баспасөз хабарламасы (gov.kz, 16.09.2026); zakon.kz, 2026 жылғы 16 қыркүйек.',
    ],
  },
  az: {
    title: 'Qazaxıstan 1 AHG-dək qiyməti olan dərmanları dövlət qiymət tənzimlənməsindən çıxardı',
    excerpt: 'Qazaxıstan Səhiyyə Nazirliyinin 4 sentyabr 2026-cı il tarixli 105 nömrəli əmri ilə qiyməti 1 AHG-yə (4 325 tenge) qədər olan dərmanlar bazar qiymətinə keçdi; tənzimlənən siyahı 3 039-dan 1 827 mövqeyə endi.',
    content: [
      'Dərman qiymətlərinin mərhələli şəkildə tənzimləmədən çıxarılması çərçivəsində Qazaxıstan Səhiyyə Nazirliyi qiyməti 1 aylıq hesablama göstəricisinə (AHG, rus. МРП) qədər olan preparatları dövlət qiymət tənzimlənməsindən çıxardı. 2026-cı ildə 1 AHG 4 325 tengeyə bərabərdir. Dəyişiklik Səhiyyə nazirinin 4 sentyabr 2026-cı il tarixli 105 nömrəli əmri ilə edilib və 21 sentyabr 2026-cı ildə qüvvəyə minib.',
      'Yenilənmiş siyahıya görə dövlət qiymət tənzimlənməsinə tabe olan dərmanların sayı 3 039 mövqedən 1 827 mövqeyə düşüb; beləliklə, 1 200-dən çox dərman adı bazar qiymətinə keçib. Bu məhsullarda qiymətləri artıq bazar iştirakçıları tələb və təklifə əsasən müəyyən edəcək. Nazirlik tənzimləmənin daha ünvanlı olduğunu və əlçatanlıq üçün əlavə qorunma tələb edən dərmanlara yönəldiyini bildirib.',
      'Tənzimləmədən çıxarılma bazar monitorinqinin gücləndirilməsi ilə müşayiət olunur: Səhiyyə Nazirliyi Rəqabətin Qorunması və İnkişafı Agentliyi ilə birgə dərmanların markalanması və izlənilməsi sisteminə əsaslanan qiymət monitorinqi mexanizmləri hazırlayır. Nazirliyin məlumatına görə, 2024-cü ilin iyulundan bəri sistemdən təxminən 1,1 milyard dərman qutusu keçib; vətəndaşlar həddən artıq qiymətlər barədə DariKZ mobil tətbiqi vasitəsilə məlumat verə bilirlər.',
      'Qazaxıstana dərman tədarük edən ixracatçılar və distribyutorlar üçün məhsulun yenilənmiş tənzimlənən siyahıda olub-olmadığını yoxlamaq artıq qiymət strategiyasının ilk addımıdır. CSC olaraq Qazaxıstan portfelimizi bu dəyişikliklərə uyğun izləyir, tərəfdaşlarımızla GDP tələblərinə uyğun tədarük zənciri vasitəsilə işləməyə davam edirik.',
      'Mənbə: Qazaxıstan Respublikası Səhiyyə Nazirliyinin mətbuat açıqlaması (gov.kz, 16.09.2026); zakon.kz, 16 sentyabr 2026.',
    ],
  },
};

const newPost12: Record<Lang, BlogText> = {
  tr: {
    title: 'AEB\'de Tıbbi Cihazların Ulusal Kurallarla Kaydı 2027 Sonuna Kadar Uzatıldı',
    excerpt: 'AEB ülkeleri 29 Aralık 2025\'te imzaladıkları protokolle tıbbi cihazların ulusal mevzuata göre kaydı için başvuru süresini 31 Aralık 2027\'ye, yeniden kayıt ve dosya değişiklikleri için süreyi 31 Aralık 2028\'e uzattı.',
    content: [
      'Avrasya Ekonomik Birliği (AEB) üye devletleri, 23 Aralık 2014 tarihli AEB çerçevesinde tıbbi cihazların dolaşımına ilişkin ortak ilke ve kurallar anlaşmasını değiştiren protokolü 29 Aralık 2025\'te Moskova\'da imzaladı. Protokol, tıbbi cihazların ekspertiz ve kaydı için başvuruların Birlik hukukuna veya üye devletin ulusal mevzuatına göre yapılabileceği geçiş dönemini 31 Aralık 2027\'ye kadar uzatıyor. Önceki son tarih 31 Aralık 2025 idi.',
      'Protokole göre ulusal kurallarla kayıtlı cihazların yeniden kaydı ve kayıt belgelerinde değişiklik başvuruları için süre 31 Aralık 2028\'e kadar uzatıldı. Avrasya Ekonomik Komisyonu, gelişmeyi "Tıbbi cihazların ulusal kurallarla kaydı 2028\'e kadar tamamlanacak" başlığıyla duyurdu. Protokol, imzadan 10 gün sonra geçici olarak uygulanmaya başladı ve üye devletlerin iç prosedürlerini tamamladığına dair son bildirimin Komisyona ulaşmasıyla yürürlüğe girecek.',
      'Bu, geçiş döneminin ikinci kez uzatılması: 13 Şubat 2023\'te imzalanan önceki protokol, 31 Aralık 2022 olan son tarihi 31 Aralık 2025\'e ertelemişti. Rusya Federasyonu yeni protokolü 4 Ağustos 2026 tarihli ve 288-FZ sayılı Federal Kanun ile onayladı. Uzatmanın amacı, üye devletlerin kayıt sistemlerini Birlik kurallarına göre tek kayda geçiş için optimize etmelerine zaman tanımak.',
      'Kazakistan ve diğer AEB pazarlarına tıbbi cihaz ve sarf malzemesi tedarik eden şirketler için bu, ulusal kayıt yolunun bir süre daha açık kaldığı, ancak uzun vadede tek AEB kaydına hazırlanmanın şart olduğu anlamına geliyor. CSC olarak ürün dosyalarının takvime uygun hazırlanmasını iş ortaklarımızla birlikte takip ediyoruz.',
      'Kaynak: Avrasya Ekonomik Komisyonu (eec.eaeunion.org), 30.12.2025 ve 14.02.2023 haberleri; Alta-Soft (alta.ru), 06.08.2026; ConsultantPlus (consultant.ru), 30.12.2025.',
    ],
  },
  en: {
    title: 'EAEU Extends Medical Device Registration Under National Rules to End-2027',
    excerpt: 'Under a protocol signed on 29 December 2025, EAEU states extended the deadline for registering medical devices under national legislation to 31 December 2027, and for re-registration and dossier changes to 31 December 2028.',
    content: [
      'On 29 December 2025 in Moscow, the member states of the Eurasian Economic Union (EAEU) signed a protocol amending the Agreement of 23 December 2014 on common principles and rules for the circulation of medical devices within the EAEU. The protocol extends the transitional period during which applications for the expertise and registration of medical devices may be filed under either Union law or the national legislation of a member state until 31 December 2027. The previous deadline was 31 December 2025.',
      'Under the protocol, the deadline for re-registration of devices registered under national rules and for applications to amend registration documents has been extended to 31 December 2028. The Eurasian Economic Commission announced the change under the headline "Registration of medical devices under national rules will be completed by 2028". The protocol has been provisionally applied since 10 days after signing and will enter into force once the Commission receives the last notification that member states have completed their domestic procedures.',
      'This is the second extension of the transitional period: an earlier protocol signed on 13 February 2023 had moved the deadline from 31 December 2022 to 31 December 2025. The Russian Federation ratified the new protocol by Federal Law No. 288-FZ of 4 August 2026. The aim of the extension is to give member states time to optimise their registration systems for the switch to unified registration under Union rules.',
      'For companies supplying medical devices and consumables to Kazakhstan and other EAEU markets, this means the national registration route stays open for a while longer, but preparing for single EAEU registration remains essential in the long run. At CSC we work with our partners to keep product dossiers on schedule.',
      'Source: Eurasian Economic Commission (eec.eaeunion.org), news of 30.12.2025 and 14.02.2023; Alta-Soft (alta.ru), 06.08.2026; ConsultantPlus (consultant.ru), 30.12.2025.',
    ],
  },
  ru: {
    title: 'В ЕАЭС продлили регистрацию медицинских изделий по национальным правилам до конца 2027 года',
    excerpt: 'Протоколом, подписанным 29 декабря 2025 года, государства ЕАЭС продлили срок подачи заявлений на регистрацию медизделий по национальному законодательству до 31 декабря 2027 года, а на перерегистрацию и внесение изменений — до 31 декабря 2028 года.',
    content: [
      '29 декабря 2025 года в Москве государства — члены Евразийского экономического союза подписали Протокол о внесении изменений в Соглашение о единых принципах и правилах обращения медицинских изделий в рамках ЕАЭС от 23 декабря 2014 года. Протокол продлевает до 31 декабря 2027 года переходный период, в течение которого заявления на экспертизу и регистрацию медицинских изделий можно подавать в порядке, предусмотренном правом Союза или законодательством государства-члена. Ранее крайним сроком было 31 декабря 2025 года.',
      'Согласно протоколу, срок для перерегистрации медизделий, зарегистрированных по национальным правилам, и для подачи заявлений о внесении изменений в регистрационные документы продлён до 31 декабря 2028 года. Евразийская экономическая комиссия сообщила об этом в новости «Регистрация медицинских изделий по национальным правилам завершится к 2028 году». Протокол временно применяется по истечении 10 дней с даты подписания и вступит в силу с даты получения Комиссией последнего уведомления о выполнении государствами внутригосударственных процедур.',
      'Это уже второе продление переходного периода: предыдущий протокол, подписанный 13 февраля 2023 года, перенёс срок с 31 декабря 2022 года на 31 декабря 2025 года. Российская Федерация ратифицировала новый протокол Федеральным законом от 4 августа 2026 года № 288-ФЗ. Цель продления — дать государствам время оптимизировать системы регистрации для перехода на единую регистрацию по правилам Союза.',
      'Для компаний, поставляющих медицинские изделия и расходные материалы в Казахстан и другие страны ЕАЭС, это означает, что национальный путь регистрации остаётся открытым ещё некоторое время, однако подготовка к единой регистрации ЕАЭС в долгосрочной перспективе обязательна. В CSC мы вместе с партнёрами следим за своевременной подготовкой регистрационных досье.',
      'Источник: Евразийская экономическая комиссия (eec.eaeunion.org), новости от 30.12.2025 и 14.02.2023; Альта-Софт (alta.ru), 06.08.2026; КонсультантПлюс (consultant.ru), 30.12.2025.',
    ],
  },
  kz: {
    title: 'ЕАЭО-да медициналық бұйымдарды ұлттық қағидалар бойынша тіркеу 2027 жылдың соңына дейін ұзартылды',
    excerpt: '2025 жылғы 29 желтоқсанда қол қойылған хаттамамен ЕАЭО мемлекеттері медициналық бұйымдарды ұлттық заңнама бойынша тіркеуге өтініш беру мерзімін 2027 жылғы 31 желтоқсанға, қайта тіркеу мен өзгерістер енгізу мерзімін 2028 жылғы 31 желтоқсанға дейін ұзартты.',
    content: [
      '2025 жылғы 29 желтоқсанда Мәскеуде Еуразиялық экономикалық одаққа мүше мемлекеттер ЕАЭО шеңберінде медициналық бұйымдардың айналысының бірыңғай қағидаттары мен қағидалары туралы 2014 жылғы 23 желтоқсандағы Келісімге өзгерістер енгізу туралы хаттамаға қол қойды. Хаттама медициналық бұйымдарды сараптауға және тіркеуге өтінішті Одақ құқығында немесе мүше мемлекеттің ұлттық заңнамасында көзделген тәртіппен беруге болатын өтпелі кезеңді 2027 жылғы 31 желтоқсанға дейін ұзартады. Бұған дейінгі соңғы мерзім 2025 жылғы 31 желтоқсан болатын.',
      'Хаттамаға сәйкес ұлттық қағидалар бойынша тіркелген бұйымдарды қайта тіркеу және тіркеу құжаттарына өзгерістер енгізу туралы өтініш беру мерзімі 2028 жылғы 31 желтоқсанға дейін ұзартылды. Еуразиялық экономикалық комиссия бұл туралы «Медициналық бұйымдарды ұлттық қағидалар бойынша тіркеу 2028 жылға қарай аяқталады» деген жаңалықта хабарлады. Хаттама қол қойылған күннен бастап 10 күн өткен соң уақытша қолданылады және мүше мемлекеттердің мемлекетішілік рәсімдерді орындағаны туралы соңғы хабарламаны Комиссия алған күннен бастап күшіне енеді.',
      'Бұл өтпелі кезеңнің екінші рет ұзартылуы: 2023 жылғы 13 ақпанда қол қойылған алдыңғы хаттама мерзімді 2022 жылғы 31 желтоқсаннан 2025 жылғы 31 желтоқсанға ауыстырған болатын. Ресей Федерациясы жаңа хаттаманы 2026 жылғы 4 тамыздағы № 288-ФЗ Федералдық заңмен ратификациялады. Ұзартудың мақсаты — мүше мемлекеттерге Одақ қағидалары бойынша бірыңғай тіркеуге көшу үшін тіркеу жүйелерін оңтайландыруға уақыт беру.',
      'Қазақстанға және ЕАЭО-ның басқа нарықтарына медициналық бұйымдар мен шығыс материалдарын жеткізетін компаниялар үшін бұл ұлттық тіркеу жолы тағы біраз уақыт ашық қалатынын, алайда ұзақ мерзімде бірыңғай ЕАЭО тіркеуіне дайындалу міндетті екенін білдіреді. CSC ретінде біз серіктестерімізбен бірге өнім құжаттамасының уақтылы дайындалуын қадағалаймыз.',
      'Дереккөз: Еуразиялық экономикалық комиссия (eec.eaeunion.org), 30.12.2025 және 14.02.2023 жаңалықтары; Альта-Софт (alta.ru), 06.08.2026; КонсультантПлюс (consultant.ru), 30.12.2025.',
    ],
  },
  az: {
    title: 'AİB-də tibbi cihazların milli qaydalarla qeydiyyatı 2027-ci ilin sonunadək uzadıldı',
    excerpt: 'AİB dövlətləri 29 dekabr 2025-ci ildə imzaladıqları protokolla tibbi cihazların milli qanunvericiliyə görə qeydiyyatı üçün müraciət müddətini 31 dekabr 2027-ci ilə, təkrar qeydiyyat və sənəd dəyişiklikləri üçün müddəti isə 31 dekabr 2028-ci ilə uzatdı.',
    content: [
      'Avrasiya İqtisadi Birliyinin (AİB) üzv dövlətləri 29 dekabr 2025-ci ildə Moskvada AİB çərçivəsində tibbi cihazların dövriyyəsinin vahid prinsip və qaydaları haqqında 23 dekabr 2014-cü il tarixli Sazişə dəyişikliklər edilməsi barədə protokolu imzaladılar. Protokol tibbi cihazların ekspertizası və qeydiyyatı üçün müraciətlərin Birlik hüququna və ya üzv dövlətin milli qanunvericiliyinə uyğun verilə biləcəyi keçid dövrünü 31 dekabr 2027-ci ilədək uzadır. Əvvəlki son tarix 31 dekabr 2025-ci il idi.',
      'Protokola əsasən milli qaydalarla qeydiyyatdan keçmiş cihazların təkrar qeydiyyatı və qeydiyyat sənədlərinə dəyişiklik edilməsi barədə müraciətlər üçün müddət 31 dekabr 2028-ci ilədək uzadılıb. Avrasiya İqtisadi Komissiyası bunu "Tibbi cihazların milli qaydalarla qeydiyyatı 2028-ci ilədək başa çatacaq" başlıqlı xəbərlə elan edib. Protokol imzalandıqdan 10 gün sonra müvəqqəti tətbiq olunur və üzv dövlətlərin daxili prosedurları tamamladığına dair sonuncu bildirişin Komissiyaya daxil olduğu tarixdən qüvvəyə minəcək.',
      'Bu, keçid dövrünün ikinci dəfə uzadılmasıdır: 13 fevral 2023-cü ildə imzalanmış əvvəlki protokol son tarixi 31 dekabr 2022-ci ildən 31 dekabr 2025-ci ilə keçirmişdi. Rusiya Federasiyası yeni protokolu 4 avqust 2026-cı il tarixli 288-FZ nömrəli Federal Qanunla ratifikasiya edib. Uzatmanın məqsədi üzv dövlətlərə Birlik qaydaları üzrə vahid qeydiyyata keçid üçün qeydiyyat sistemlərini optimallaşdırmağa vaxt verməkdir.',
      'Qazaxıstana və digər AİB bazarlarına tibbi cihaz və sərf materialları tədarük edən şirkətlər üçün bu, milli qeydiyyat yolunun bir müddət də açıq qalması, lakin uzunmüddətli perspektivdə vahid AİB qeydiyyatına hazırlığın vacib olması deməkdir. CSC olaraq tərəfdaşlarımızla birlikdə məhsul dosyelərinin vaxtında hazırlanmasını izləyirik.',
      'Mənbə: Avrasiya İqtisadi Komissiyası (eec.eaeunion.org), 30.12.2025 və 14.02.2023 tarixli xəbərlər; Alta-Soft (alta.ru), 06.08.2026; KonsultantPlyus (consultant.ru), 30.12.2025.',
    ],
  },
};

const newPost13: Record<Lang, BlogText> = {
  tr: {
    title: 'Türkiye\'de Tıbbi Bitki Çayları ve Aromaterapötik Ürünler Artık Yalnızca Eczanede',
    excerpt: '2 Temmuz 2026 tarihli ve 33298 sayılı Resmî Gazete\'de yayımlanan TİTCK yönetmelikleriyle tıbbi bitki çayları ve aromaterapötik ürünler ruhsat ve karekodlu takip kapsamına alındı; özel tıbbi amaçlı gıdalarda ruhsat geçiş süresi 1 Temmuz 2027\'ye uzatıldı.',
    content: [
      '2 Temmuz 2026 tarihli ve 33298 sayılı Resmî Gazete\'de Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) alanına giren dört düzenleme yayımlandı: Tıbbi Bitki Çayları Hakkında Yönetmelik, Aromaterapötik Ürünler Hakkında Yönetmelik ile Geleneksel Bitkisel Tıbbi Ürünler Ruhsatlandırma Yönetmeliği ve Özel Tıbbi Amaçlı Gıdalar Ruhsatlandırma Yönetmeliği\'nde değişiklik yapan yönetmelikler. Düzenlemelerin tamamı yayımı tarihinde yürürlüğe girdi.',
      'Yeni yönetmeliklere göre tıbbi bitki çayları ve aromaterapötik ürünler, reçeteli veya reçetesiz olmak üzere yalnızca eczanelerde satılabilecek. Ürünlerin ilk kez piyasaya sunulması için ruhsat ve satış izni gerekiyor; üretimden eczaneye kadar tüm hareketler karekod tabanlı elektronik takip sistemiyle kayıt altına alınacak. Takviye edici gıdalar ile gıda olarak piyasaya sunulan bitki ve meyve çayları, tıbbi bitki çayları yönetmeliğinin kapsamı dışında tutuldu.',
      'Geleneksel Bitkisel Tıbbi Ürünler Ruhsatlandırma Yönetmeliği\'nde tıbbi bitki çayları ve aromaterapide kullanılan ürünler kapsamdan çıkarıldı, etkin maddenin Avrupa Birliği ülkelerinde ve/veya Türkiye\'de on yıldan uzun süredir kullanılmasına dayanan "iyi bilinen kullanım" tanımı eklendi ve geçici maddedeki iki yıllık geçiş süresi beş yıla çıkarıldı. Özel Tıbbi Amaçlı Gıdalar Ruhsatlandırma Yönetmeliği\'nde ise pestisitler için toplam kalıntı yerine her bir pestisitin kalıntı limiti esas alındı ve ruhsat başvurusu için son tarih 1 Temmuz 2026\'dan 1 Temmuz 2027\'ye ertelendi; bu tarihe kadar başvurmayan ürünlerin mevcut izinleri geçersiz sayılacak.',
      'Özel tıbbi amaçlı gıda, bitkisel ürün ve eczane kanalında çalışan tedarikçiler için portföyün yeni sınıflandırmaya göre gözden geçirilmesi ve ruhsat takviminin planlanması önem kazanıyor. CSC olarak ürün gruplarımızı mevzuata uygun şekilde, GDP uyumlu tedarik zinciriyle yönetiyoruz.',
      'Kaynak: T.C. Resmî Gazete, 2 Temmuz 2026, Sayı 33298 (yönetmelik metinleri alomaliye.com üzerinden); Türkiye İlaç ve Tıbbi Cihaz Kurumu (titck.gov.tr).',
    ],
  },
  en: {
    title: 'Türkiye: Medicinal Herbal Teas and Aromatherapy Products Now Pharmacy-Only',
    excerpt: 'TİTCK regulations published in Official Gazette No. 33298 of 2 July 2026 bring medicinal herbal teas and aromatherapy products under licensing and QR-code tracking, and extend the licensing transition for foods for special medical purposes to 1 July 2027.',
    content: [
      'The Official Gazette of Türkiye No. 33298 of 2 July 2026 published four regulations within the remit of the Turkish Medicines and Medical Devices Agency (TİTCK): the Regulation on Medicinal Herbal Teas, the Regulation on Aromatherapeutic Products, and amending regulations to the Regulation on Licensing of Traditional Herbal Medicinal Products and the Regulation on Licensing of Foods for Special Medical Purposes. All of them entered into force on the date of publication.',
      'Under the new regulations, medicinal herbal teas and aromatherapeutic products, whether prescription or non-prescription, may be sold only in pharmacies. A licence and a sales permit are required before a product is first placed on the market, and all movements from production to the pharmacy will be recorded in a QR-code-based electronic tracking system. Food supplements and herbal and fruit teas marketed as food are excluded from the scope of the herbal tea regulation.',
      'The traditional herbal medicinal products regulation now excludes medicinal herbal teas and aromatherapy products from its scope, adds a definition of "well-established use" based on the active substance having been used for more than ten years in EU countries and/or Türkiye, and extends the two-year transitional period in its provisional article to five years. In the regulation on foods for special medical purposes, pesticide assessment is now based on the residue limit of each individual pesticide rather than total residues, and the licensing application deadline has been moved from 1 July 2026 to 1 July 2027; existing permits of products that do not apply by then will become invalid.',
      'For suppliers working with foods for special medical purposes, herbal products and the pharmacy channel, reviewing portfolios against the new classification and planning licensing timelines is now a priority. At CSC we manage our product groups in line with the legislation through a GDP-compliant supply chain.',
      'Source: Official Gazette of the Republic of Türkiye, 2 July 2026, No. 33298 (regulation texts via alomaliye.com); Turkish Medicines and Medical Devices Agency (titck.gov.tr).',
    ],
  },
  ru: {
    title: 'Турция: лекарственные травяные чаи и ароматерапевтические продукты — только в аптеках',
    excerpt: 'Регламенты TİTCK, опубликованные в Официальной газете № 33298 от 2 июля 2026 года, ввели лицензирование и отслеживание по QR-коду для лекарственных травяных чаёв и ароматерапевтических продуктов, а переходный срок лицензирования пищевой продукции для специальных медицинских целей продлён до 1 июля 2027 года.',
    content: [
      'В Официальной газете Турции № 33298 от 2 июля 2026 года опубликованы четыре регламента в сфере ведения Агентства по лекарственным средствам и медицинским изделиям Турции (TİTCK): Регламент о лекарственных травяных чаях, Регламент об ароматерапевтических продуктах, а также изменения в Регламент о лицензировании традиционных растительных лекарственных средств и Регламент о лицензировании пищевой продукции для специальных медицинских целей. Все документы вступили в силу в день опубликования.',
      'Согласно новым регламентам, лекарственные травяные чаи и ароматерапевтические продукты, как рецептурные, так и безрецептурные, могут продаваться только в аптеках. Для первого выпуска продукта на рынок требуются лицензия и разрешение на продажу, а все перемещения от производства до аптеки будут фиксироваться в электронной системе отслеживания на основе QR-кода. Биологически активные добавки, а также травяные и фруктовые чаи, реализуемые как пищевые продукты, выведены из сферы действия регламента о травяных чаях.',
      'Из регламента о традиционных растительных лекарственных средствах исключены лекарственные чаи и продукты для ароматерапии, добавлено определение «хорошо изученного применения», основанное на использовании действующего вещества более десяти лет в странах ЕС и/или в Турции, а двухлетний переходный период во временной статье увеличен до пяти лет. В регламенте о пищевой продукции для специальных медицинских целей оценка пестицидов теперь проводится по пределу остатка каждого пестицида, а не по суммарному остатку, а срок подачи заявлений на лицензирование перенесён с 1 июля 2026 года на 1 июля 2027 года; действующие разрешения продуктов, не подавших заявку к этой дате, утратят силу.',
      'Поставщикам, работающим с пищевой продукцией для специальных медицинских целей, растительными продуктами и аптечным каналом, важно пересмотреть портфель с учётом новой классификации и спланировать сроки лицензирования. В CSC мы управляем товарными группами в соответствии с законодательством через цепочку поставок, соответствующую GDP.',
      'Источник: Официальная газета Турецкой Республики (Resmî Gazete), 2 июля 2026 года, № 33298 (тексты регламентов — alomaliye.com); Агентство по лекарственным средствам и медицинским изделиям Турции (titck.gov.tr).',
    ],
  },
  kz: {
    title: 'Түркия: дәрілік шөп шайлары мен ароматерапиялық өнімдер енді тек дәріханада',
    excerpt: '2026 жылғы 2 шілдедегі № 33298 Ресми газетте жарияланған TİTCK регламенттері дәрілік шөп шайлары мен ароматерапиялық өнімдерді лицензиялау мен QR-кодпен қадағалауға енгізді, ал арнайы медициналық мақсаттағы тағамдарды лицензиялаудың өтпелі мерзімі 2027 жылғы 1 шілдеге дейін ұзартылды.',
    content: [
      'Түркияның 2026 жылғы 2 шілдедегі № 33298 Ресми газетінде Түркия дәрі-дәрмектер және медициналық бұйымдар агенттігінің (TİTCK) құзыретіне жататын төрт регламент жарияланды: Дәрілік шөп шайлары туралы регламент, Ароматерапиялық өнімдер туралы регламент, сондай-ақ Дәстүрлі өсімдік тектес дәрілік өнімдерді лицензиялау регламентіне және Арнайы медициналық мақсаттағы тағамдарды лицензиялау регламентіне өзгерістер енгізетін регламенттер. Барлық құжаттар жарияланған күні күшіне енді.',
      'Жаңа регламенттерге сәйкес дәрілік шөп шайлары мен ароматерапиялық өнімдер рецептпен де, рецептсіз де тек дәріханаларда сатылады. Өнімді нарыққа алғаш шығару үшін лицензия мен сатуға рұқсат қажет, ал өндірістен дәріханаға дейінгі барлық қозғалыс QR-кодқа негізделген электрондық қадағалау жүйесінде тіркеледі. Биологиялық белсенді қоспалар, сондай-ақ тағам ретінде сатылатын шөп және жеміс шайлары дәрілік шөп шайлары туралы регламенттің қолданылу аясынан шығарылды.',
      'Дәстүрлі өсімдік тектес дәрілік өнімдер регламентінің аясынан дәрілік шөп шайлары мен ароматерапия өнімдері алынып тасталды, әсер етуші заттың ЕО елдерінде және/немесе Түркияда он жылдан астам қолданылуына негізделген «жақсы белгілі қолдану» анықтамасы қосылды, ал уақытша баптағы екі жылдық өтпелі кезең бес жылға ұзартылды. Арнайы медициналық мақсаттағы тағамдар регламентінде пестицидтер жиынтық қалдық бойынша емес, әр пестицидтің қалдық шегі бойынша бағаланады, ал лицензиялауға өтініш беру мерзімі 2026 жылғы 1 шілдеден 2027 жылғы 1 шілдеге ауыстырылды; осы күнге дейін өтініш бермеген өнімдердің қолданыстағы рұқсаттары жарамсыз болады.',
      'Арнайы медициналық мақсаттағы тағамдармен, өсімдік тектес өнімдермен және дәріхана арнасымен жұмыс істейтін жеткізушілер үшін портфельді жаңа жіктеуге сай қайта қарау және лицензиялау мерзімдерін жоспарлау маңызды. CSC ретінде біз өнім топтарымызды заңнамаға сәйкес, GDP талаптарына сай жеткізу тізбегі арқылы басқарамыз.',
      'Дереккөз: Түркия Республикасының Ресми газеті (Resmî Gazete), 2026 жылғы 2 шілде, № 33298 (регламент мәтіндері — alomaliye.com); Түркия дәрі-дәрмектер және медициналық бұйымдар агенттігі (titck.gov.tr).',
    ],
  },
  az: {
    title: 'Türkiyə: tibbi bitki çayları və aromaterapevtik məhsullar artıq yalnız apteklərdə',
    excerpt: '2 iyul 2026-cı il tarixli 33298 nömrəli Rəsmi Qəzetdə dərc olunan TİTCK qaydaları tibbi bitki çaylarını və aromaterapevtik məhsulları lisenziya və QR-kodlu izləmə sisteminə daxil etdi; xüsusi tibbi təyinatlı qidaların lisenziyalaşdırılması üçün keçid müddəti 1 iyul 2027-ci ilədək uzadıldı.',
    content: [
      'Türkiyənin 2 iyul 2026-cı il tarixli 33298 nömrəli Rəsmi Qəzetində Türkiyə Dərman və Tibbi Cihaz Qurumunun (TİTCK) səlahiyyətinə aid dörd qayda dərc olunub: Tibbi Bitki Çayları haqqında Qayda, Aromaterapevtik Məhsullar haqqında Qayda, həmçinin Ənənəvi Bitki Mənşəli Tibbi Məhsulların Lisenziyalaşdırılması Qaydasına və Xüsusi Tibbi Təyinatlı Qidaların Lisenziyalaşdırılması Qaydasına dəyişikliklər edən qaydalar. Bütün sənədlər dərc olunduğu gün qüvvəyə minib.',
      'Yeni qaydalara görə tibbi bitki çayları və aromaterapevtik məhsullar reseptli və ya reseptsiz olmaqla yalnız apteklərdə satıla bilər. Məhsulun bazara ilk dəfə çıxarılması üçün lisenziya və satış icazəsi tələb olunur, istehsaldan aptekə qədər bütün hərəkətlər isə QR-kod əsaslı elektron izləmə sistemində qeydə alınacaq. Qida əlavələri, eləcə də qida kimi satılan bitki və meyvə çayları tibbi bitki çayları qaydasının əhatə dairəsindən çıxarılıb.',
      'Ənənəvi bitki mənşəli tibbi məhsullar qaydasının əhatə dairəsindən tibbi bitki çayları və aromaterapiya məhsulları çıxarılıb, təsiredici maddənin Avropa İttifaqı ölkələrində və/və ya Türkiyədə on ildən artıq istifadəsinə əsaslanan "yaxşı məlum istifadə" anlayışı əlavə edilib və keçid maddəsindəki iki illik keçid müddəti beş ilə uzadılıb. Xüsusi tibbi təyinatlı qidalar qaydasında isə pestisidlər ümumi qalıq əvəzinə hər bir pestisidin qalıq həddi üzrə qiymətləndiriləcək, lisenziya müraciəti üçün son tarix 1 iyul 2026-cı ildən 1 iyul 2027-ci ilə keçirilib; bu tarixədək müraciət etməyən məhsulların mövcud icazələri etibarsız sayılacaq.',
      'Xüsusi tibbi təyinatlı qidalar, bitki mənşəli məhsullar və aptek kanalı ilə işləyən təchizatçılar üçün portfelin yeni təsnifata uyğun nəzərdən keçirilməsi və lisenziya təqviminin planlaşdırılması vacibdir. CSC olaraq məhsul qruplarımızı qanunvericiliyə uyğun şəkildə, GDP tələblərinə uyğun tədarük zənciri ilə idarə edirik.',
      'Mənbə: Türkiyə Respublikasının Rəsmi Qəzeti (Resmî Gazete), 2 iyul 2026, № 33298 (qayda mətnləri alomaliye.com vasitəsilə); Türkiyə Dərman və Tibbi Cihaz Qurumu (titck.gov.tr).',
    ],
  },
};

const newBlogEntries2: BlogEntry[] = [
  { id: 11, category: 'regulations', date: '2026-09-26', readTime: '4', image: '/img-cat-ilac.jpg', t: newPost11 },
  { id: 12, category: 'regulations', date: '2026-09-25', readTime: '5', image: '/img-cat-cihaz.jpg', t: newPost12 },
  { id: 13, category: 'regulations', date: '2026-09-24', readTime: '5', image: '/img-cat-gida.jpg', t: newPost13 },
];

export const newBlogEntries: BlogEntry[] = [
  ...newBlogEntries2,
  { id: 7, category: 'regulations', date: '2026-09-24', readTime: '5', image: '/img-cat-ilac.jpg', t: newPost1 },
  { id: 8, category: 'trends', date: '2026-09-18', readTime: '4', image: '/img-cat-cihaz.jpg', t: newPost2 },
  { id: 9, category: 'regulations', date: '2026-09-12', readTime: '4', image: '/img-cat-test.jpg', t: newPost3 },
  { id: 10, category: 'stats', date: '2026-09-06', readTime: '4', image: '/img-cat-sarf.jpg', t: newPost4 },
];
