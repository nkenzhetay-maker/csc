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

// Yeni, doğrulanmış kaynaklı istatistik/trend makaleleri (Ekim 2026). Tüm rakamlar resmi veya güvenilir kaynaklarla teyit edildi.

/* 14) TÜRKİYE — İlaç pazarı 2025: değer, yerli üretim, ihracat (İEİS) */
const newPost14: Record<Lang, BlogText> = {
  tr: {
    title: 'Türkiye İlaç Pazarı 2025: 430,8 Milyar TL ve 2,51 Milyar Dolar İhracat',
    excerpt: 'İEİS verilerine göre Türkiye ilaç pazarı 2025\'te değerde %32,7 büyüyerek 430,8 milyar TL\'ye ulaştı; ilaç ihracatı %9,3 artışla 2,51 milyar dolar oldu. Yerli üretim, ithalat ve biyobenzer rakamları.',
    content: [
      'İlaç Endüstrisi İşverenler Sendikası (İEİS) verilerine göre Türkiye ilaç pazarı 2025\'te değer ölçeğinde 430,8 milyar TL\'ye, hacim ölçeğinde yaklaşık 2,7 milyar kutuya ulaştı; değer bazındaki büyüme %32,7 oldu. Pazarın 272,7 milyar TL\'sini (0,95 milyar kutu) referans ilaçlar, 158,1 milyar TL\'sini (1,71 milyar kutu) eşdeğer ilaçlar oluşturdu. Aynı kaynağa göre dünya ilaç pazarı 2025\'te 1,9 trilyon dolara ulaştı ve Türkiye dünya ilaç pazarında 19. sırada yer alıyor.',
      'Hacimde yerli üretimin ağırlığı belirgin: yurt içinde üretilen ilaçlar 2025\'te 238,6 milyar TL ve 2,46 milyar kutuya ulaşırken, ithal ilaçlar 192,1 milyar TL ve 0,19 milyar kutuda kaldı. Böylece satılan her 10 kutu ilaçtan 9\'undan fazlası yerli üretim olurken, değerde yerli payı yaklaşık %55 seviyesinde kaldı; yüksek fiyatlı ürünlerde ithalatın payı büyük. Biyoteknolojik ilaçların pazarı 90,9 milyar TL\'ye (33,3 milyon kutu) ulaştı; bunun 8,2 milyar TL\'si (11,7 milyon kutu) biyobenzer ilaçlardan geldi.',
      'Dış ticarette Türkiye ilaç ihracatı 2025\'i %9,3 artışla 2,51 milyar ABD doları seviyesinde tamamladı; ihracat 2015–2025 döneminde %128,7 arttı. İlaç ithalatı ise 2025\'te %17,4 artışla 7,3 milyar dolara yükseldi. IQVIA\'nın Türkiye İlaç Sektörü Raporu 2025\'ine göre 2024\'te ihracatta ilk sırada Macaristan yer aldı; onu Güney Kore, Gürcistan, Irak, İran, Kıbrıs, Polonya, Bulgaristan, Almanya ve Azerbaycan izledi ve ilk 10 ülke ilaç ihracatının %61\'ini oluşturdu. CSC olarak Türkiye\'den bölge pazarlarına uzanan bu ticaret akışını yakından takip ediyoruz.',
      'Kaynak: İlaç Endüstrisi İşverenler Sendikası (İEİS), "Dünya ve Türkiye İlaç Pazarı" sayfası ve Türkiye İlaç Sektörü 2025 raporu (ieis.org.tr); IQVIA, Türkiye İlaç Sektörü Raporu 2025 Özeti (AİFD yayını, aifd.org.tr).',
    ],
  },
  en: {
    title: 'Turkey\'s Pharma Market in 2025: TRY 430.8 Billion and USD 2.51 Billion in Exports',
    excerpt: 'According to İEİS, Turkey\'s pharmaceutical market grew 32.7% in value in 2025 to TRY 430.8 billion, while medicine exports rose 9.3% to USD 2.51 billion. Local production, import and biosimilar figures.',
    content: [
      'According to the Pharmaceutical Industry Employers\' Union (İEİS), Turkey\'s pharmaceutical market reached TRY 430.8 billion in value and about 2.7 billion boxes in volume in 2025, with value growth of 32.7%. Reference medicines accounted for TRY 272.7 billion (0.95 billion boxes) and generic medicines for TRY 158.1 billion (1.71 billion boxes). The same source puts the world pharmaceutical market at USD 1.9 trillion in 2025, with Turkey ranking 19th globally.',
      'Local production dominates in volume: domestically produced medicines reached TRY 238.6 billion and 2.46 billion boxes in 2025, while imported medicines stood at TRY 192.1 billion and 0.19 billion boxes. In other words, more than 9 out of every 10 boxes sold were made in Turkey, while the local share in value was around 55%, as imports weigh heavily in high-priced products. The biotechnological medicines market reached TRY 90.9 billion (33.3 million boxes), of which TRY 8.2 billion (11.7 million boxes) came from biosimilars.',
      'On the trade side, Turkey\'s medicine exports closed 2025 at USD 2.51 billion, up 9.3%, and grew 128.7% over 2015–2025. Medicine imports rose 17.4% to USD 7.3 billion in 2025. According to IQVIA\'s Turkey Pharmaceutical Sector Report 2025, Hungary was the top export destination in 2024, followed by South Korea, Georgia, Iraq, Iran, Cyprus, Poland, Bulgaria, Germany and Azerbaijan, with the top 10 countries accounting for 61% of medicine exports. At CSC we closely follow these trade flows from Turkey to the region\'s markets.',
      'Source: Pharmaceutical Industry Employers\' Union (İEİS), "World and Turkey Pharmaceutical Market" page and Turkey Pharmaceutical Sector 2025 report (ieis.org.tr); IQVIA, Turkey Pharmaceutical Sector Report 2025 Summary (published by AIFD, aifd.org.tr).',
    ],
  },
  ru: {
    title: 'Фармрынок Турции в 2025 году: 430,8 млрд лир и экспорт на 2,51 млрд долларов',
    excerpt: 'По данным İEİS, фармацевтический рынок Турции в 2025 году вырос в стоимостном выражении на 32,7% до 430,8 млрд лир, а экспорт лекарств увеличился на 9,3% до 2,51 млрд долларов. Данные о локальном производстве, импорте и биоаналогах.',
    content: [
      'По данным Союза работодателей фармацевтической промышленности Турции (İEİS), в 2025 году турецкий фармрынок достиг 430,8 млрд лир в стоимостном выражении и около 2,7 млрд упаковок в натуральном; рост в стоимостном выражении составил 32,7%. На оригинальные препараты пришлось 272,7 млрд лир (0,95 млрд упаковок), на дженерики — 158,1 млрд лир (1,71 млрд упаковок). По тому же источнику, мировой фармрынок в 2025 году достиг 1,9 трлн долларов, а Турция занимает 19-е место в мире.',
      'В натуральном выражении доминирует локальное производство: препараты, произведённые в Турции, в 2025 году составили 238,6 млрд лир и 2,46 млрд упаковок, а импортные — 192,1 млрд лир и 0,19 млрд упаковок. Таким образом, более 9 из каждых 10 проданных упаковок произведены в стране, тогда как в стоимостном выражении доля локальной продукции составила около 55%: импорт преобладает в сегменте дорогостоящих препаратов. Рынок биотехнологических препаратов достиг 90,9 млрд лир (33,3 млн упаковок), из них 8,2 млрд лир (11,7 млн упаковок) пришлось на биоаналоги.',
      'Экспорт лекарств из Турции по итогам 2025 года вырос на 9,3% до 2,51 млрд долларов США, а за 2015–2025 годы увеличился на 128,7%. Импорт лекарств в 2025 году вырос на 17,4% до 7,3 млрд долларов. Согласно отчёту IQVIA о фармацевтическом секторе Турции за 2025 год, в 2024 году первое место среди направлений экспорта заняла Венгрия, за ней следовали Южная Корея, Грузия, Ирак, Иран, Кипр, Польша, Болгария, Германия и Азербайджан; на первые 10 стран пришёлся 61% экспорта лекарств. В CSC мы внимательно следим за этими торговыми потоками из Турции на рынки региона.',
      'Источник: Союз работодателей фармацевтической промышленности Турции (İEİS), страница «Мировой и турецкий фармрынок» и отчёт «Фармацевтический сектор Турции 2025» (ieis.org.tr); IQVIA, краткая версия отчёта о фармацевтическом секторе Турции 2025 (публикация AIFD, aifd.org.tr).',
    ],
  },
  kz: {
    title: 'Түркияның фармнарығы 2025 жылы: 430,8 млрд лира және 2,51 млрд доллар экспорт',
    excerpt: 'İEİS деректері бойынша Түркияның фармацевтикалық нарығы 2025 жылы құндық мәнде 32,7%-ға өсіп, 430,8 млрд лираға жетті, ал дәрі экспорты 9,3%-ға артып, 2,51 млрд доллар болды. Отандық өндіріс, импорт және биоұқсас препараттар бойынша деректер.',
    content: [
      'Түркия фармацевтика өнеркәсібі жұмыс берушілер одағының (İEİS) деректері бойынша 2025 жылы Түркияның дәрі нарығы құндық мәнде 430,8 млрд лираға, заттай мәнде шамамен 2,7 млрд қаптамаға жетті; құндық өсім 32,7% болды. Нарықтың 272,7 млрд лирасы (0,95 млрд қаптама) түпнұсқа препараттарға, 158,1 млрд лирасы (1,71 млрд қаптама) генериктерге тиесілі. Сол дереккөз бойынша әлемдік фармнарық 2025 жылы 1,9 трлн долларға жетті, ал Түркия әлемде 19-орында тұр.',
      'Заттай мәнде отандық өндіріс басым: Түркияда өндірілген дәрілер 2025 жылы 238,6 млрд лира және 2,46 млрд қаптама болса, импорттық дәрілер 192,1 млрд лира және 0,19 млрд қаптама болды. Яғни сатылған әрбір 10 қаптаманың 9-ынан астамы елде өндірілген, ал құндық мәнде отандық үлес шамамен 55% болды: қымбат препараттар сегментінде импорт басым. Биотехнологиялық дәрілер нарығы 90,9 млрд лираға (33,3 млн қаптама) жетті, оның 8,2 млрд лирасы (11,7 млн қаптама) биоұқсас препараттарға тиесілі.',
      'Түркияның дәрі экспорты 2025 жылды 9,3%-дық өсіммен 2,51 млрд АҚШ долларымен аяқтады, ал 2015–2025 жылдары экспорт 128,7%-ға өсті. Дәрі импорты 2025 жылы 17,4%-ға артып, 7,3 млрд долларға жетті. IQVIA-ның Түркия фармацевтика секторы туралы 2025 жылғы есебіне сәйкес, 2024 жылы экспорт бағыттары арасында бірінші орынды Венгрия алды, одан кейін Оңтүстік Корея, Грузия, Ирак, Иран, Кипр, Польша, Болгария, Германия және Әзербайжан тұр; алғашқы 10 ел дәрі экспортының 61%-ын құрады. CSC ретінде біз Түркиядан аймақ нарықтарына бағытталған осы сауда ағындарын мұқият қадағалаймыз.',
      'Дереккөз: Түркия фармацевтика өнеркәсібі жұмыс берушілер одағы (İEİS), «Әлемдік және Түркия фармнарығы» беті және «Түркия фармацевтика секторы 2025» есебі (ieis.org.tr); IQVIA, Түркия фармацевтика секторы туралы 2025 жылғы есептің қысқаша нұсқасы (AIFD басылымы, aifd.org.tr).',
    ],
  },
  az: {
    title: 'Türkiyə Əczaçılıq Bazarı 2025: 430,8 Milyard Lirə və 2,51 Milyard Dollar İxrac',
    excerpt: 'İEİS məlumatına görə, Türkiyənin əczaçılıq bazarı 2025-ci ildə dəyər ifadəsində 32,7% artaraq 430,8 milyard lirəyə çatıb, dərman ixracı isə 9,3% artaraq 2,51 milyard dollar olub. Yerli istehsal, idxal və biooxşar dərman göstəriciləri.',
    content: [
      'Türkiyə Dərman Sənayesi İşəgötürənlər İttifaqının (İEİS) məlumatına görə, Türkiyənin dərman bazarı 2025-ci ildə dəyər ifadəsində 430,8 milyard lirəyə, həcm ifadəsində təxminən 2,7 milyard qutuya çatıb; dəyər üzrə artım 32,7% olub. Bazarın 272,7 milyard lirəsi (0,95 milyard qutu) referans dərmanların, 158,1 milyard lirəsi (1,71 milyard qutu) generik dərmanların payına düşüb. Eyni mənbəyə görə, dünya dərman bazarı 2025-ci ildə 1,9 trilyon dollara çatıb və Türkiyə dünya dərman bazarında 19-cu yerdədir.',
      'Həcmdə yerli istehsal üstünlük təşkil edir: ölkədə istehsal olunan dərmanlar 2025-ci ildə 238,6 milyard lirə və 2,46 milyard qutu, idxal dərmanlar isə 192,1 milyard lirə və 0,19 milyard qutu təşkil edib. Beləliklə, satılan hər 10 qutu dərmandan 9-dan çoxu yerli istehsaldır, dəyər ifadəsində isə yerli pay təxminən 55% olub: yüksək qiymətli məhsullarda idxalın payı böyükdür. Biotexnoloji dərmanlar bazarı 90,9 milyard lirəyə (33,3 milyon qutu) çatıb, bunun 8,2 milyard lirəsi (11,7 milyon qutu) biooxşar dərmanlardan gəlib.',
      'Türkiyənin dərman ixracı 2025-ci ili 9,3% artımla 2,51 milyard ABŞ dolları səviyyəsində başa vurub; 2015–2025-ci illərdə ixrac 128,7% artıb. Dərman idxalı isə 2025-ci ildə 17,4% artaraq 7,3 milyard dollara yüksəlib. IQVIA-nın Türkiyə Əczaçılıq Sektoru Hesabatı 2025-ə görə, 2024-cü ildə ixracda birinci yerdə Macarıstan olub, onu Cənubi Koreya, Gürcüstan, İraq, İran, Kipr, Polşa, Bolqarıstan, Almaniya və Azərbaycan izləyib; ilk 10 ölkə dərman ixracının 61%-ni təşkil edib. CSC olaraq Türkiyədən region bazarlarına uzanan bu ticarət axınını yaxından izləyirik.',
      'Mənbə: Türkiyə Dərman Sənayesi İşəgötürənlər İttifaqı (İEİS), "Dünya və Türkiyə Dərman Bazarı" səhifəsi və Türkiyə Əczaçılıq Sektoru 2025 hesabatı (ieis.org.tr); IQVIA, Türkiyə Əczaçılıq Sektoru Hesabatı 2025 xülasəsi (AİFD nəşri, aifd.org.tr).',
    ],
  },
};

/* 15) KAZAKİSTAN — Yerli ilaç üretimi ve yerli payı (Sağlık Bakanlığı verileri) */
const newPost15: Record<Lang, BlogText> = {
  tr: {
    title: 'Kazakistan\'da Yerli İlaç Üretimi 191,1 Milyar Tengeye Ulaştı',
    excerpt: 'Kazakistan\'da farmasötik üretim 2025\'te %8,7 artışla 191,1 milyar tenge oldu. Yerli ürünlerin payı kutu bazında %40\'a ulaştı, değer bazında ise %16\'da kaldı; hedef 2029\'a kadar %50.',
    content: [
      'Kazakistan Sağlık Bakanlığı verilerine göre ülkede farmasötik ürün üretimi 2025\'te bir önceki yıla göre %8,7 artarak 191,1 milyar tengeye ulaştı; üretim hacmi son üç yılda %37 büyüdü. Büyüme 2026\'da da sürüyor: yılın ilk yarısında ilaç ve tıbbi cihaz üretimi 126,6 milyar tenge oldu, bu da geçen yılın aynı dönemine göre yaklaşık %30 artış anlamına geliyor.',
      'İlaç markalama ve izlenebilirlik sistemi verilerine göre yerli ürünlerin iç pazardaki payı fiziksel (kutu) bazda Mayıs 2026\'da %39,8\'e, Ağustos 2026\'da %40,3\'e ulaştı. Değer bazında ise tablo farklı: yerli ilaçların payı 2025 sonunda %16 oldu ve %25 olan planın altında kaldı. Bakanlık bu farkı, onkoloji ve yetim hastalıklar gibi alanlardaki patentli, yüksek fiyatlı yenilikçi ilaçların pazar değerindeki ağırlığıyla açıklıyor. Devlet Başkanı\'nın talimatı doğrultusunda hedef, yerli ilaçların payını 2029\'a kadar %50\'ye çıkarmak.',
      'Sektörün ölçeği de büyüyor: Kazakistan\'da 43\'ü ilaç, 166\'sı tıbbi cihaz üreticisi olmak üzere 209 yerli üretici kayıtlı. İlaç sektörüne yatırımlar 2025\'te %56 artarak 142,8 milyon dolara, farmasötik ihracat ise 84 milyon dolara ulaştı. AstraZeneca, Pfizer ve Roche gibi uluslararası şirketler teknoloji transferi ve üretim yerelleştirme projelerinde yer alıyor. Bu veriler, Kazakistan pazarında hacim olarak yerli üretimin güçlendiğini, değer olarak ise ithal yenilikçi ilaçların ağırlığını koruduğunu gösteriyor; CSC olarak bu gelişmeleri yakından takip ediyoruz.',
      'Kaynak: Kazakistan Sağlık Bakanlığı ve Tıbbi ve Farmasötik Kontrol Komitesi açıklamaları — Kapital.kz (19.05.2026 ve 28.08.2026), 365info.kz (19.05.2026), bizmedia.kz (06.09.2026); Senato görüşmesi ve Sağlık Bakanlığı açıklaması, baq.kz (18.06.2026).',
    ],
  },
  en: {
    title: 'Kazakhstan\'s Domestic Pharma Output Reaches KZT 191.1 Billion',
    excerpt: 'Pharmaceutical production in Kazakhstan rose 8.7% in 2025 to KZT 191.1 billion. The domestic share has reached about 40% in volume but only 16% in value; the target is 50% by 2029.',
    content: [
      'According to Kazakhstan\'s Ministry of Health, pharmaceutical production in the country rose 8.7% year on year to KZT 191.1 billion in 2025, and output has grown 37% over the past three years. Growth continued in 2026: production of medicines and medical devices reached KZT 126.6 billion in the first half of the year, almost 30% more than in the same period a year earlier.',
      'Data from the medicine marking and traceability system show that the domestic share of the local market in physical (unit) terms reached 39.8% in May 2026 and 40.3% in August 2026. In value terms the picture is different: domestic medicines held 16% at the end of 2025, below the planned 25%. The ministry attributes the gap to the weight of patented, high-priced innovative medicines, for example in oncology and orphan diseases, in total market value. In line with the President\'s instruction, the target is to raise the share of domestic medicines to 50% by 2029.',
      'The industry is also growing in scale: 209 domestic manufacturers are registered in Kazakhstan, 43 of them producing medicines and 166 producing medical devices. Investment in the pharmaceutical industry rose 56% in 2025 to USD 142.8 million, and pharmaceutical exports reached USD 84 million. International companies such as AstraZeneca, Pfizer and Roche take part in technology transfer and production localisation projects. These figures show domestic production strengthening in volume while imported innovative medicines keep their weight in value; at CSC we follow these developments closely.',
      'Source: statements of Kazakhstan\'s Ministry of Health and the Committee of Medical and Pharmaceutical Control — Kapital.kz (19.05.2026 and 28.08.2026), 365info.kz (19.05.2026), bizmedia.kz (06.09.2026); Senate discussion and Ministry of Health statement, baq.kz (18.06.2026).',
    ],
  },
  ru: {
    title: 'Отечественное фармпроизводство Казахстана достигло 191,1 млрд тенге',
    excerpt: 'Объём фармацевтического производства в Казахстане в 2025 году вырос на 8,7% до 191,1 млрд тенге. Доля отечественной продукции в натуральном выражении достигла около 40%, в стоимостном — лишь 16%; цель — 50% к 2029 году.',
    content: [
      'По данным Министерства здравоохранения Казахстана, объём производства фармацевтической продукции в стране в 2025 году вырос на 8,7% по сравнению с предыдущим годом и составил 191,1 млрд тенге; за последние три года объём производства увеличился на 37%. Рост продолжился и в 2026 году: в первом полугодии выпуск лекарств и медицинских изделий составил 126,6 млрд тенге, что почти на 30% больше, чем за тот же период прошлого года.',
      'По данным системы маркировки и прослеживаемости лекарственных средств, доля отечественной продукции на внутреннем рынке в натуральном выражении достигла 39,8% в мае 2026 года и 40,3% в августе 2026 года. В стоимостном выражении картина иная: по итогам 2025 года доля отечественных лекарств составила 16% при плановых 25%. Минздрав объясняет разрыв весом запатентованных дорогостоящих инновационных препаратов, например в онкологии и при орфанных заболеваниях, в общей стоимости рынка. В соответствии с поручением Главы государства цель — довести долю отечественных лекарств до 50% к 2029 году.',
      'Растёт и масштаб отрасли: в Казахстане зарегистрировано 209 отечественных производителей, из них 43 производят лекарственные средства и 166 — медицинские изделия. Инвестиции в фармацевтическую отрасль в 2025 году выросли на 56% до 142,8 млн долларов, экспорт фармацевтической продукции составил 84 млн долларов. Международные компании, такие как AstraZeneca, Pfizer и Roche, участвуют в проектах по трансферу технологий и локализации производства. Эти данные показывают, что в натуральном выражении отечественное производство укрепляется, а в стоимостном весомую долю сохраняют импортные инновационные препараты; в CSC мы внимательно следим за этими изменениями.',
      'Источник: заявления Министерства здравоохранения РК и Комитета медицинского и фармацевтического контроля — Kapital.kz (19.05.2026 и 28.08.2026), 365info.kz (19.05.2026), bizmedia.kz (06.09.2026); обсуждение в Сенате и разъяснение Минздрава, baq.kz (18.06.2026).',
    ],
  },
  kz: {
    title: 'Қазақстанның отандық фармөндірісі 191,1 млрд теңгеге жетті',
    excerpt: 'Қазақстанда фармацевтикалық өндіріс 2025 жылы 8,7%-ға өсіп, 191,1 млрд теңге болды. Отандық өнімнің үлесі заттай мәнде шамамен 40%-ға жетті, ал құндық мәнде небәрі 16% болды; мақсат — 2029 жылға қарай 50%.',
    content: [
      'Қазақстан Денсаулық сақтау министрлігінің деректері бойынша елдегі фармацевтикалық өнім өндірісі 2025 жылы алдыңғы жылмен салыстырғанда 8,7%-ға өсіп, 191,1 млрд теңгеге жетті; соңғы үш жылда өндіріс көлемі 37%-ға артты. Өсім 2026 жылы да жалғасуда: жылдың бірінші жартысында дәрі-дәрмек пен медициналық бұйымдар өндірісі 126,6 млрд теңге болды, бұл өткен жылдың сәйкес кезеңімен салыстырғанда шамамен 30%-ға көп.',
      'Дәрілік заттарды таңбалау және қадағалау жүйесінің деректері бойынша ішкі нарықтағы отандық өнімнің заттай мәндегі үлесі 2026 жылғы мамырда 39,8%-ға, 2026 жылғы тамызда 40,3%-ға жетті. Құндық мәнде жағдай басқаша: 2025 жылдың қорытындысы бойынша отандық дәрілердің үлесі жоспарлы 25%-дың орнына 16% болды. Министрлік бұл айырмашылықты онкология және орфандық аурулар сияқты салалардағы патентпен қорғалған, қымбат инновациялық препараттардың нарық құнындағы салмағымен түсіндіреді. Мемлекет басшысының тапсырмасына сәйкес мақсат — 2029 жылға қарай отандық дәрілердің үлесін 50%-ға жеткізу.',
      'Саланың ауқымы да өсуде: Қазақстанда 209 отандық өндіруші тіркелген, оның 43-і дәрілік заттар, 166-сы медициналық бұйымдар шығарады. Фармацевтика саласына салынған инвестициялар 2025 жылы 56%-ға өсіп, 142,8 млн долларға жетті, ал фармацевтикалық өнім экспорты 84 млн доллар болды. AstraZeneca, Pfizer және Roche сияқты халықаралық компаниялар технология трансфері мен өндірісті локализациялау жобаларына қатысуда. Бұл деректер заттай мәнде отандық өндірістің нығайып келе жатқанын, ал құндық мәнде импорттық инновациялық препараттардың салмағын сақтап отырғанын көрсетеді; CSC ретінде біз бұл өзгерістерді мұқият қадағалаймыз.',
      'Дереккөз: ҚР Денсаулық сақтау министрлігі мен Медициналық және фармацевтикалық бақылау комитетінің мәлімдемелері — Kapital.kz (19.05.2026 және 28.08.2026), 365info.kz (19.05.2026), bizmedia.kz (06.09.2026); Сенаттағы талқылау және Денсаулық сақтау министрлігінің түсіндірмесі, baq.kz (18.06.2026).',
    ],
  },
  az: {
    title: 'Qazaxıstanda Yerli Dərman İstehsalı 191,1 Milyard Tengeyə Çatıb',
    excerpt: 'Qazaxıstanda əczaçılıq istehsalı 2025-ci ildə 8,7% artaraq 191,1 milyard tenge olub. Yerli məhsulların payı natural ifadədə təxminən 40%-ə çatıb, dəyər ifadəsində isə cəmi 16% olub; hədəf 2029-cu ilədək 50%-dir.',
    content: [
      'Qazaxıstan Səhiyyə Nazirliyinin məlumatına görə, ölkədə əczaçılıq məhsulları istehsalı 2025-ci ildə əvvəlki illə müqayisədə 8,7% artaraq 191,1 milyard tengeyə çatıb; son üç ildə istehsal həcmi 37% artıb. Artım 2026-cı ildə də davam edir: ilin birinci yarısında dərman və tibbi cihaz istehsalı 126,6 milyard tenge olub ki, bu da ötən ilin eyni dövrü ilə müqayisədə təxminən 30% çoxdur.',
      'Dərmanların markalanması və izlənilməsi sisteminin məlumatına görə, yerli məhsulların daxili bazardakı payı natural (qutu) ifadədə 2026-cı ilin may ayında 39,8%-ə, avqust ayında isə 40,3%-ə çatıb. Dəyər ifadəsində isə vəziyyət fərqlidir: 2025-ci ilin sonunda yerli dərmanların payı planlaşdırılan 25% əvəzinə 16% olub. Nazirlik bu fərqi onkologiya və orfan xəstəliklər kimi sahələrdə patentlə qorunan, yüksək qiymətli innovativ dərmanların bazar dəyərindəki çəkisi ilə izah edir. Dövlət başçısının tapşırığına uyğun olaraq hədəf yerli dərmanların payını 2029-cu ilədək 50%-ə çatdırmaqdır.',
      'Sektorun miqyası da böyüyür: Qazaxıstanda 43-ü dərman, 166-sı tibbi cihaz istehsalçısı olmaqla 209 yerli istehsalçı qeydiyyatdadır. Əczaçılıq sənayesinə investisiyalar 2025-ci ildə 56% artaraq 142,8 milyon dollara, əczaçılıq ixracı isə 84 milyon dollara çatıb. AstraZeneca, Pfizer və Roche kimi beynəlxalq şirkətlər texnologiya transferi və istehsalın lokallaşdırılması layihələrində iştirak edir. Bu göstəricilər həcm baxımından yerli istehsalın gücləndiyini, dəyər baxımından isə idxal olunan innovativ dərmanların çəkisini qoruduğunu göstərir; CSC olaraq bu inkişafları yaxından izləyirik.',
      'Mənbə: Qazaxıstan Səhiyyə Nazirliyi və Tibbi və Əczaçılıq Nəzarəti Komitəsinin açıqlamaları — Kapital.kz (19.05.2026 və 28.08.2026), 365info.kz (19.05.2026), bizmedia.kz (06.09.2026); Senatdakı müzakirə və Səhiyyə Nazirliyinin açıqlaması, baq.kz (18.06.2026).',
    ],
  },
};

/* 16) KÜRESEL — FDA 2025 yeni ilaç onayları (CDER resmi raporu) */
const newPost16: Record<Lang, BlogText> = {
  tr: {
    title: 'FDA 2025\'te 46 Yeni İlaç Onayladı: Yarısı Nadir Hastalıklar İçin',
    excerpt: 'ABD FDA\'nın ilaç merkezi CDER, 2025\'te 46 yeni ilaç onayladı; bunların %43\'ü sınıfının ilki, %50\'si yetim ilaç statüsünde. Aynı yıl 18 biyobenzer de onaylandı.',
    content: [
      'ABD Gıda ve İlaç Dairesi\'nin (FDA) İlaç Değerlendirme ve Araştırma Merkezi (CDER), 2025\'te daha önce ABD\'de onaylanmamış veya pazarlanmamış 46 "yeni" (novel) ilaç onayladı: bunların 34\'ü yeni moleküler varlık, 12\'si biyolojik ürün. Bu sayı 2024\'te 50, 2023\'te 55 idi. CDER\'e göre 2025 sayısı son beş yılın ortalamasına yakın ve 2007\'den bu yana yıllık 38\'lik tarihsel ortalamanın üzerinde; biyolojik ürün merkezi CBER ile birlikte toplam yeni onay sayısı 58\'e ulaştı.',
      'Onayların niteliği dikkat çekici: 46 ilacın 20\'si (%43) sınıfının ilki (first-in-class), 23\'ü (%50) nadir hastalıklar için yetim ilaç statüsünde. 33 ilaç (%72) en az bir hızlandırılmış programdan yararlandı; hızlı yol (fast track) 18 (%39), çığır açan tedavi 15 (%33), öncelikli inceleme 21 (%46) ve hızlandırılmış onay 11 (%24) ilaçta kullanıldı. İlaçların 39\'u (%85) ilk inceleme döngüsünde onay aldı; 32\'si (%70) dünyada ilk kez ABD\'de onaylandı. Öne çıkan örnekler arasında opioid olmayan, sınıfının ilki ağrı ilacı Journavx (suzetrigine), kuru göz tedavisi Tryptyr (acoltremon) ve Barth sendromu için Forzinity (elamipretide) bulunuyor.',
      'Biyobenzer tarafında CDER 2025\'te 18 biyobenzer onayladı; bunların 4\'ü daha önce hiç biyobenzeri olmayan referans ürünlere ait: hızlı etkili insülin biyobenzerleri Merilog ve Kirsty, astım ve kronik ürtiker gibi endikasyonlarda kullanılan Omlyclo ve bazı meme kanserlerinde kullanılan Poherdy. CDER 2015\'ten bu yana 20 referans ürün için toplam 81 biyobenzer onayladı. Bu yeni ilaçların Türkiye, Azerbaycan ve Kazakistan pazarlarına girişi her ülkenin kendi ruhsatlandırma sürecine bağlı; CSC olarak bu gelişmeleri yakından takip ediyoruz.',
      'Kaynak: ABD FDA, CDER "Advancing Health Through Innovation: New Drug Therapy Approvals 2025" raporu (Ocak 2026) ve "Novel Drug Approvals for 2025" sayfası (fda.gov).',
    ],
  },
  en: {
    title: 'FDA Approved 46 Novel Drugs in 2025: Half for Rare Diseases',
    excerpt: 'The FDA\'s drug centre CDER approved 46 novel drugs in 2025; 43% were first-in-class and 50% had orphan drug designation. It also approved 18 biosimilars in the same year.',
    content: [
      'The U.S. Food and Drug Administration\'s Center for Drug Evaluation and Research (CDER) approved 46 novel drugs in 2025, i.e. drugs never before approved or marketed in the U.S.: 34 new molecular entities and 12 biologics. The number was 50 in 2024 and 55 in 2023. According to CDER, the 2025 count is similar to the five-year average and above the historical average of 38 novel drugs per year since 2007; together with CBER, the biologics centre, there were 58 novel approvals in 2025.',
      'The profile of the approvals stands out: 20 of the 46 drugs (43%) were first-in-class and 23 (50%) received orphan drug designation for rare diseases. 33 drugs (72%) used at least one expedited programme: fast track for 18 (39%), breakthrough therapy for 15 (33%), priority review for 21 (46%) and accelerated approval for 11 (24%). 39 drugs (85%) were approved on the first review cycle, and 32 (70%) were approved in the U.S. before any other country. Notable examples include the first-in-class non-opioid pain medicine Journavx (suzetrigine), the dry eye treatment Tryptyr (acoltremon) and Forzinity (elamipretide) for Barth syndrome.',
      'On biosimilars, CDER approved 18 in 2025, 4 of them for reference products that previously had no approved biosimilar: the rapid-acting insulin biosimilars Merilog and Kirsty, Omlyclo for indications such as asthma and chronic hives, and Poherdy for certain breast cancers. Since 2015 CDER has approved 81 biosimilars for 20 reference products. The entry of these new medicines into the Turkish, Azerbaijani and Kazakh markets depends on each country\'s own registration process; at CSC we follow these developments closely.',
      'Source: U.S. FDA, CDER report "Advancing Health Through Innovation: New Drug Therapy Approvals 2025" (January 2026) and the "Novel Drug Approvals for 2025" page (fda.gov).',
    ],
  },
  ru: {
    title: 'FDA одобрило 46 новых препаратов в 2025 году: половина — для редких заболеваний',
    excerpt: 'Центр оценки и исследований лекарств FDA (CDER) в 2025 году одобрил 46 новых препаратов: 43% из них — первые в своём классе, 50% имеют статус орфанных. В том же году одобрено 18 биоаналогов.',
    content: [
      'Центр оценки и исследований лекарственных средств (CDER) Управления по санитарному надзору за качеством пищевых продуктов и медикаментов США (FDA) в 2025 году одобрил 46 новых (novel) препаратов, ранее не одобренных и не продававшихся в США: 34 новых молекулярных соединения и 12 биологических препаратов. В 2024 году таких одобрений было 50, в 2023 году — 55. По оценке CDER, показатель 2025 года близок к среднему за пять лет и превышает историческое среднее значение в 38 новых препаратов в год с 2007 года; вместе с центром биологических препаратов CBER число новых одобрений достигло 58.',
      'Структура одобрений примечательна: 20 из 46 препаратов (43%) — первые в своём классе (first-in-class), 23 (50%) получили статус орфанного препарата для редких заболеваний. 33 препарата (72%) прошли хотя бы по одной ускоренной программе: fast track — 18 (39%), «прорывная терапия» — 15 (33%), приоритетное рассмотрение — 21 (46%), ускоренное одобрение — 11 (24%). 39 препаратов (85%) одобрены с первого цикла рассмотрения, 32 (70%) впервые в мире одобрены именно в США. Среди заметных примеров — первый в своём классе неопиоидный анальгетик Journavx (суцетриджин), препарат для лечения сухости глаз Tryptyr (аколтремон) и Forzinity (эламипретид) для лечения синдрома Барта.',
      'Что касается биоаналогов, в 2025 году CDER одобрил 18 таких препаратов, 4 из них — к референтным продуктам, у которых ранее не было одобренных биоаналогов: биоаналоги инсулина быстрого действия Merilog и Kirsty, Omlyclo для лечения, в частности, астмы и хронической крапивницы, и Poherdy для лечения некоторых видов рака молочной железы. С 2015 года CDER одобрил 81 биоаналог к 20 референтным продуктам. Выход этих новых препаратов на рынки Турции, Азербайджана и Казахстана зависит от национальных процедур регистрации каждой страны; в CSC мы внимательно следим за этими изменениями.',
      'Источник: FDA США, отчёт CDER «Advancing Health Through Innovation: New Drug Therapy Approvals 2025» (январь 2026 года) и страница «Novel Drug Approvals for 2025» (fda.gov).',
    ],
  },
  kz: {
    title: 'FDA 2025 жылы 46 жаңа дәріні мақұлдады: жартысы сирек аурулар үшін',
    excerpt: 'АҚШ FDA-ның дәрі-дәрмек орталығы CDER 2025 жылы 46 жаңа препаратты мақұлдады: олардың 43%-ы өз класындағы алғашқы препарат, 50%-ы орфандық мәртебеге ие. Сол жылы 18 биоұқсас препарат та мақұлданды.',
    content: [
      'АҚШ Азық-түлік және дәрі-дәрмек басқармасының (FDA) Дәрілерді бағалау және зерттеу орталығы (CDER) 2025 жылы бұрын АҚШ-та мақұлданбаған немесе сатылмаған 46 жаңа (novel) препаратты мақұлдады: оның 34-і жаңа молекулалық құрылым, 12-сі биологиялық препарат. Бұл көрсеткіш 2024 жылы 50, 2023 жылы 55 болған. CDER мәліметінше, 2025 жылғы көрсеткіш соңғы бес жылдың орташа деңгейіне жақын және 2007 жылдан бергі жылына 38 жаңа препараттан тұратын тарихи орташа мәннен жоғары; биологиялық препараттар орталығы CBER-мен бірге жаңа мақұлдаулар саны 58-ге жетті.',
      'Мақұлдаулардың құрылымы назар аударарлық: 46 препараттың 20-сы (43%) өз класындағы алғашқы препарат (first-in-class), 23-і (50%) сирек аурулар үшін орфандық препарат мәртебесін алды. 33 препарат (72%) кем дегенде бір жеделдетілген бағдарламаны пайдаланды: fast track — 18 (39%), «серпінді терапия» — 15 (33%), басым қарау — 21 (46%), жеделдетілген мақұлдау — 11 (24%). 39 препарат (85%) бірінші қарау циклінде мақұлданды, ал 32-сі (70%) әлемде алғаш рет АҚШ-та мақұлданды. Көрнекті мысалдар қатарында өз класындағы алғашқы опиоидты емес ауырсынуды басатын Journavx (суцетриджин), көздің құрғауын емдейтін Tryptyr (аколтремон) және Барт синдромына арналған Forzinity (эламипретид) бар.',
      'Биоұқсас препараттар бойынша CDER 2025 жылы 18 препаратты мақұлдады, оның 4-еуі бұрын мақұлданған биоұқсасы болмаған референттік өнімдерге тиесілі: жылдам әсер ететін инсулиннің биоұқсастары Merilog және Kirsty, демікпе және созылмалы есекжем сияқты көрсеткіштерде қолданылатын Omlyclo және сүт безі қатерлі ісігінің кейбір түрлерінде қолданылатын Poherdy. 2015 жылдан бері CDER 20 референттік өнім үшін барлығы 81 биоұқсас препаратты мақұлдады. Бұл жаңа дәрілердің Түркия, Әзербайжан және Қазақстан нарықтарына шығуы әр елдің өз тіркеу рәсіміне байланысты; CSC ретінде біз бұл өзгерістерді мұқият қадағалаймыз.',
      'Дереккөз: АҚШ FDA, CDER-дің «Advancing Health Through Innovation: New Drug Therapy Approvals 2025» есебі (2026 жылғы қаңтар) және «Novel Drug Approvals for 2025» беті (fda.gov).',
    ],
  },
  az: {
    title: 'FDA 2025-ci ildə 46 Yeni Dərmanı Təsdiqlədi: Yarısı Nadir Xəstəliklər Üçün',
    excerpt: 'ABŞ FDA-nın dərman mərkəzi CDER 2025-ci ildə 46 yeni dərman təsdiqləyib; bunların 43%-i öz sinfinin ilki, 50%-i isə orfan dərman statusundadır. Həmin il 18 biooxşar dərman da təsdiqlənib.',
    content: [
      'ABŞ Qida və Dərman İdarəsinin (FDA) Dərmanların Qiymətləndirilməsi və Tədqiqatı Mərkəzi (CDER) 2025-ci ildə əvvəllər ABŞ-da təsdiqlənməmiş və ya satılmamış 46 yeni (novel) dərman təsdiqləyib: bunlardan 34-ü yeni molekulyar birləşmə, 12-si bioloji məhsuldur. Bu göstərici 2024-cü ildə 50, 2023-cü ildə 55 olub. CDER-ə görə, 2025-ci ilin göstəricisi son beş ilin ortalamasına yaxındır və 2007-ci ildən bəri ildə 38 yeni dərmandan ibarət tarixi ortalamadan yüksəkdir; bioloji məhsullar mərkəzi CBER ilə birlikdə yeni təsdiqlərin sayı 58-ə çatıb.',
      'Təsdiqlərin strukturu diqqətçəkəndir: 46 dərmandan 20-si (43%) öz sinfinin ilki (first-in-class), 23-ü (50%) nadir xəstəliklər üçün orfan dərman statusu alıb. 33 dərman (72%) ən azı bir sürətləndirilmiş proqramdan yararlanıb: fast track — 18 (39%), "çığır açan terapiya" — 15 (33%), prioritet baxış — 21 (46%), sürətləndirilmiş təsdiq — 11 (24%). 39 dərman (85%) ilk baxış dövründə təsdiqlənib, 32-si (70%) isə dünyada ilk dəfə ABŞ-da təsdiqlənib. Diqqətçəkən nümunələr arasında öz sinfinin ilki olan qeyri-opioid ağrıkəsici Journavx (suzetrigine), quru göz müalicəsi üçün Tryptyr (acoltremon) və Bart sindromu üçün Forzinity (elamipretide) var.',
      'Biooxşar dərmanlar üzrə CDER 2025-ci ildə 18 biooxşar təsdiqləyib, bunların 4-ü əvvəllər heç bir biooxşarı olmayan referans məhsullara aiddir: sürətli təsirli insulin biooxşarları Merilog və Kirsty, astma və xroniki övrə kimi göstərişlərdə istifadə olunan Omlyclo və bəzi döş xərçəngi növlərində istifadə olunan Poherdy. CDER 2015-ci ildən bəri 20 referans məhsul üçün cəmi 81 biooxşar təsdiqləyib. Bu yeni dərmanların Türkiyə, Azərbaycan və Qazaxıstan bazarlarına daxil olması hər ölkənin öz qeydiyyat prosesindən asılıdır; CSC olaraq bu inkişafları yaxından izləyirik.',
      'Mənbə: ABŞ FDA, CDER-in "Advancing Health Through Innovation: New Drug Therapy Approvals 2025" hesabatı (yanvar 2026) və "Novel Drug Approvals for 2025" səhifəsi (fda.gov).',
    ],
  },
};

/* 17) KÜRESEL — IQVIA: 2030'a kadar küresel ilaç harcaması görünümü */
const newPost17: Record<Lang, BlogText> = {
  tr: {
    title: 'IQVIA: Küresel İlaç Harcaması 2030\'da 2,6 Trilyon Doları Aşacak',
    excerpt: 'IQVIA Institute\'un 2026 raporuna göre küresel ilaç harcaması yılda %5–8 artarak 2030\'da 2,6 trilyon doları aşacak. Büyümenin motorları onkoloji, immünoloji, diyabet ve obezite.',
    content: [
      'IQVIA Institute for Human Data Science\'ın Şubat 2026\'da yayımladığı "Global Medicine Use Trends 2026" raporuna göre küresel ilaç harcamasının yılda %5–8 artarak 2030\'da 2,6 trilyon doları aşması bekleniyor. Rapora göre on yılın sonunda dünyadaki toplam ilaç kullanımı 4 trilyon tanımlı günlük doza (DDD) yaklaşacak.',
      'IQVIA\'ya göre önümüzdeki beş yılda büyümeye en çok katkı yapacak alanlar onkoloji, immünoloji, diyabet ve obezite ilaçları olacak. IQVIA\'nın Mart 2026 tarihli değerlendirmesinde GLP-1 ilaçlarının yükselişinin henüz zirve işareti göstermediği vurgulanıyor. Öte yandan aynı değerlendirmeye göre bir patent bitimi dalgasının markalı ürünlerde yaklaşık 200 milyar dolarlık kayba yol açması bekleniyor; rapor, yeni ürünlerin katkısı ile patent bitimlerinin ve biyobenzerlerin artan etkisini büyümenin temel belirleyicileri arasında sayıyor.',
      'Coğrafi dağılımda ABD ve 14 ülke daha (satın alma gücü paritesine göre kişi başı GSYH\'si 50.000 doları aşan ve ilaç harcaması 2030\'a kadar 2 milyar dolardan fazla artacak ülkeler) 2030\'a kadarki küresel büyümenin %76\'sını oluşturacak. Kişi başı GSYH\'si 50.000 doların altında olup ilaç harcaması 2 milyar dolardan fazla büyüyecek "pharmerging" (gelişmekte olan ilaç) pazarlarında harcamanın 2030\'a kadar 120,8 milyar dolar artması bekleniyor; Batı Avrupa ve Japonya\'nın ise daha yavaş büyümesi öngörülüyor. Türkiye, Azerbaycan ve Kazakistan\'a ilaç tedarik eden firmalar için bu tablo, yenilikçi tedavilere yönelik talebi ve patent bitimleriyle açılan jenerik ve biyobenzer fırsatlarını birlikte izlemeyi gerektiriyor; CSC olarak bu eğilimleri yakından takip ediyoruz.',
      'Kaynak: IQVIA Institute for Human Data Science, "Global Medicine Use Trends 2026" (11 Şubat 2026, iqvia.com); IQVIA blog, "IQVIA Institute\'s 2026 Forecast: Global Medicine Use Stays Strong Despite Headwinds" (Mart 2026).',
    ],
  },
  en: {
    title: 'IQVIA: Global Medicine Spending to Exceed USD 2.6 Trillion by 2030',
    excerpt: 'According to the IQVIA Institute\'s 2026 report, global medicine spending will grow 5–8% a year and exceed USD 2.6 trillion by 2030. Oncology, immunology, diabetes and obesity drive the growth.',
    content: [
      'According to the "Global Medicine Use Trends 2026" report published by the IQVIA Institute for Human Data Science in February 2026, global medicine spending is expected to increase by 5–8% per year and exceed USD 2.6 trillion by 2030. The report expects total medicine usage worldwide to approach 4 trillion defined daily doses (DDD) by the end of the decade.',
      'According to IQVIA, the biggest contributors to growth over the next five years will be oncology, immunology, diabetes and obesity drugs. IQVIA\'s March 2026 commentary stresses that the GLP-1 story shows no signs of peaking. At the same time, the same commentary expects a patent expiry wave to result in nearly USD 200 billion of brand losses, and the report lists the contribution of new products and the impact of patent expiries, including the growing impact of biosimilars, among the key drivers of growth.',
      'Geographically, the U.S. and 14 other countries (those with GDP per capita on a purchasing power parity basis above USD 50,000 and pharmaceutical spending growing by more than USD 2 billion through 2030) will account for 76% of global growth through 2030. Spending in "pharmerging" markets, those with GDP per capita below USD 50,000 and pharmaceutical growth above USD 2 billion, is expected to grow by USD 120.8 billion through 2030, while Western Europe and Japan are expected to grow more slowly. For companies supplying medicines to Turkey, Azerbaijan and Kazakhstan, this picture calls for tracking both demand for innovative therapies and the generic and biosimilar opportunities opened by patent expiries; at CSC we follow these trends closely.',
      'Source: IQVIA Institute for Human Data Science, "Global Medicine Use Trends 2026" (11 February 2026, iqvia.com); IQVIA blog, "IQVIA Institute\'s 2026 Forecast: Global Medicine Use Stays Strong Despite Headwinds" (March 2026).',
    ],
  },
  ru: {
    title: 'IQVIA: мировые расходы на лекарства превысят 2,6 трлн долларов к 2030 году',
    excerpt: 'Согласно отчёту IQVIA Institute за 2026 год, мировые расходы на лекарства будут расти на 5–8% в год и к 2030 году превысят 2,6 трлн долларов. Драйверы роста — онкология, иммунология, диабет и ожирение.',
    content: [
      'Согласно отчёту «Global Medicine Use Trends 2026», опубликованному IQVIA Institute for Human Data Science в феврале 2026 года, мировые расходы на лекарства будут увеличиваться на 5–8% в год и к 2030 году превысят 2,6 трлн долларов. По прогнозу отчёта, к концу десятилетия общее потребление лекарств в мире приблизится к 4 трлн установленных суточных доз (DDD).',
      'По данным IQVIA, наибольший вклад в рост в ближайшие пять лет внесут препараты для онкологии, иммунологии, лечения диабета и ожирения. В комментарии IQVIA от марта 2026 года подчёркивается, что рост препаратов GLP-1 пока не показывает признаков выхода на пик. В то же время, согласно тому же комментарию, волна истечения патентов приведёт к потерям оригинальных брендов почти на 200 млрд долларов, а отчёт относит к ключевым факторам роста вклад новых продуктов и влияние истечения патентов, включая растущую роль биоаналогов.',
      'В географическом разрезе на США и ещё 14 стран (с ВВП на душу населения по ППС выше 50 000 долларов и ростом фармацевтических расходов более чем на 2 млрд долларов до 2030 года) придётся 76% мирового роста до 2030 года. Расходы на так называемых фармерджинговых рынках — с ВВП на душу населения ниже 50 000 долларов и ростом фармрасходов более 2 млрд долларов — вырастут к 2030 году на 120,8 млрд долларов, тогда как Западная Европа и Япония, по прогнозу, будут расти медленнее. Для компаний, поставляющих лекарства в Турцию, Азербайджан и Казахстан, эта картина означает необходимость одновременно отслеживать спрос на инновационную терапию и возможности для дженериков и биоаналогов после истечения патентов; в CSC мы внимательно следим за этими тенденциями.',
      'Источник: IQVIA Institute for Human Data Science, «Global Medicine Use Trends 2026» (11 февраля 2026 года, iqvia.com); блог IQVIA, «IQVIA Institute\'s 2026 Forecast: Global Medicine Use Stays Strong Despite Headwinds» (март 2026 года).',
    ],
  },
  kz: {
    title: 'IQVIA: 2030 жылға қарай әлемдік дәрі шығындары 2,6 трлн доллардан асады',
    excerpt: 'IQVIA Institute-тың 2026 жылғы есебіне сәйкес әлемдік дәрі шығындары жылына 5–8%-ға өсіп, 2030 жылы 2,6 трлн доллардан асады. Өсімнің қозғаушы күштері — онкология, иммунология, диабет және семіздік.',
    content: [
      'IQVIA Institute for Human Data Science 2026 жылғы ақпанда жариялаған «Global Medicine Use Trends 2026» есебіне сәйкес әлемдік дәрі-дәрмек шығындары жылына 5–8%-ға артып, 2030 жылы 2,6 трлн доллардан асады деп күтілуде. Есеп болжамы бойынша онжылдықтың соңына қарай әлемдегі дәрі-дәрмектің жалпы тұтынылуы 4 трлн белгіленген тәуліктік дозаға (DDD) жақындайды.',
      'IQVIA мәліметінше, алдағы бес жылда өсімге ең көп үлес қосатын салалар — онкология, иммунология, диабет және семіздікке қарсы препараттар. IQVIA-ның 2026 жылғы наурыздағы шолуында GLP-1 препараттарының өсуі әлі шыңына жету белгілерін көрсетпейтіні атап өтілген. Сонымен қатар сол шолу бойынша патенттердің мерзімі аяқталу толқыны брендтік өнімдерде шамамен 200 млрд долларлық шығынға әкеледі деп күтілуде, ал есеп өсімнің негізгі факторлары қатарында жаңа өнімдердің үлесін және патенттердің аяқталуы мен биоұқсас препараттардың артып келе жатқан ықпалын атайды.',
      'Географиялық тұрғыдан АҚШ және тағы 14 ел (сатып алу қабілетінің паритеті бойынша жан басына шаққандағы ЖІӨ 50 000 доллардан асатын және фармацевтикалық шығындары 2030 жылға дейін 2 млрд доллардан астам өсетін елдер) 2030 жылға дейінгі әлемдік өсімнің 76%-ын құрайды. Жан басына шаққандағы ЖІӨ 50 000 доллардан төмен және фармшығындары 2 млрд доллардан астам өсетін «фармерджинг» нарықтарда шығындар 2030 жылға қарай 120,8 млрд долларға артады деп күтілуде, ал Батыс Еуропа мен Жапония баяу өседі деп болжанады. Түркияға, Әзербайжанға және Қазақстанға дәрі жеткізетін компаниялар үшін бұл көрініс инновациялық емге сұранысты да, патенттердің аяқталуымен ашылатын генериктер мен биоұқсас препараттар мүмкіндіктерін де қатар қадағалауды талап етеді; CSC ретінде біз бұл үрдістерді мұқият қадағалаймыз.',
      'Дереккөз: IQVIA Institute for Human Data Science, «Global Medicine Use Trends 2026» (2026 жылғы 11 ақпан, iqvia.com); IQVIA блогы, «IQVIA Institute\'s 2026 Forecast: Global Medicine Use Stays Strong Despite Headwinds» (2026 жылғы наурыз).',
    ],
  },
  az: {
    title: 'IQVIA: Qlobal Dərman Xərcləri 2030-cu ildə 2,6 Trilyon Dolları Keçəcək',
    excerpt: 'IQVIA Institute-un 2026-cı il hesabatına görə, qlobal dərman xərcləri ildə 5–8% artaraq 2030-cu ildə 2,6 trilyon dolları keçəcək. Artımın hərəkətverici qüvvələri onkologiya, immunologiya, diabet və piylənmədir.',
    content: [
      'IQVIA Institute for Human Data Science-in 2026-cı ilin fevralında dərc etdiyi "Global Medicine Use Trends 2026" hesabatına görə, qlobal dərman xərclərinin ildə 5–8% artaraq 2030-cu ildə 2,6 trilyon dolları keçəcəyi gözlənilir. Hesabata görə, onilliyin sonunda dünyada ümumi dərman istifadəsi 4 trilyon müəyyən edilmiş gündəlik dozaya (DDD) yaxınlaşacaq.',
      'IQVIA-ya görə, növbəti beş ildə artıma ən çox töhfə verəcək sahələr onkologiya, immunologiya, diabet və piylənmə dərmanları olacaq. IQVIA-nın 2026-cı ilin mart ayına aid şərhində GLP-1 dərmanlarının yüksəlişinin hələ zirvə əlaməti göstərmədiyi vurğulanır. Eyni zamanda həmin şərhə görə, patent müddətlərinin bitməsi dalğasının brend məhsullarda təxminən 200 milyard dollarlıq itkiyə səbəb olacağı gözlənilir; hesabat isə yeni məhsulların töhfəsini və patentlərin bitməsinin, o cümlədən biooxşar dərmanların artan təsirini artımın əsas amilləri arasında sayır.',
      'Coğrafi baxımdan ABŞ və daha 14 ölkə (alıcılıq qabiliyyəti paritetinə görə adambaşına ÜDM-i 50 000 dolları keçən və əczaçılıq xərcləri 2030-cu ilədək 2 milyard dollardan çox artacaq ölkələr) 2030-cu ilədək qlobal artımın 76%-ni təşkil edəcək. Adambaşına ÜDM-i 50 000 dollardan aşağı olan və əczaçılıq xərcləri 2 milyard dollardan çox artacaq "pharmerging" bazarlarında xərclərin 2030-cu ilədək 120,8 milyard dollar artacağı gözlənilir, Qərbi Avropa və Yaponiyanın isə daha yavaş böyüyəcəyi proqnozlaşdırılır. Türkiyə, Azərbaycan və Qazaxıstana dərman tədarük edən şirkətlər üçün bu mənzərə həm innovativ müalicələrə tələbi, həm də patentlərin bitməsi ilə açılan generik və biooxşar imkanlarını birlikdə izləməyi tələb edir; CSC olaraq bu meylləri yaxından izləyirik.',
      'Mənbə: IQVIA Institute for Human Data Science, "Global Medicine Use Trends 2026" (11 fevral 2026, iqvia.com); IQVIA bloqu, "IQVIA Institute\'s 2026 Forecast: Global Medicine Use Stays Strong Despite Headwinds" (mart 2026).',
    ],
  },
};

const newBlogEntries3: BlogEntry[] = [
  { id: 14, category: 'stats', date: '2026-10-03', readTime: '5', image: '/img-cat-ilac.jpg', t: newPost14 },
  { id: 15, category: 'stats', date: '2026-10-02', readTime: '5', image: '/img-cat-sarf.jpg', t: newPost15 },
  { id: 16, category: 'trends', date: '2026-09-30', readTime: '5', image: '/img-cat-test.jpg', t: newPost16 },
  { id: 17, category: 'trends', date: '2026-09-29', readTime: '5', image: '/img-cat-cihaz.jpg', t: newPost17 },
];

export const newBlogEntries: BlogEntry[] = [
  ...newBlogEntries3,
  ...newBlogEntries2,
  { id: 7, category: 'regulations', date: '2026-09-24', readTime: '5', image: '/img-cat-ilac.jpg', t: newPost1 },
  { id: 8, category: 'trends', date: '2026-09-18', readTime: '4', image: '/img-cat-cihaz.jpg', t: newPost2 },
  { id: 9, category: 'regulations', date: '2026-09-12', readTime: '4', image: '/img-cat-test.jpg', t: newPost3 },
  { id: 10, category: 'stats', date: '2026-09-06', readTime: '4', image: '/img-cat-sarf.jpg', t: newPost4 },
];
