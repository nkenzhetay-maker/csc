import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import {
  Building2, Truck, Snowflake, Monitor, Boxes,
  FileCheck, FlaskConical, ChevronDown, ChevronUp, Phone
} from 'lucide-react';

interface ServiceDetail {
  icon: React.ReactNode;
  titleTr: string;
  titleEn: string;
  shortTr: string;
  shortEn: string;
  fullTr: string[];
  fullEn: string[];
  featuresTr: string[];
  featuresEn: string[];
  color: string;
}

const services: ServiceDetail[] = [
  {
    icon: <Building2 size={24} />,
    titleTr: 'Depolama Hizmetleri',
    titleEn: 'Storage Services',
    shortTr: 'Sağlık Bakanlığı onaylı, GDP uyumlu ilaç depolama alanları. 2-8°C soğuk zincir, oda sıcaklığı ve karantina bölmeleri.',
    shortEn: 'Ministry of Health approved, GDP compliant pharmaceutical storage. 2-8°C cold chain, ambient temperature and quarantine zones.',
    fullTr: [
      'CSC Ecza Deposu, Türkiye Cumhuriyeti Sağlık Bakanlığı tarafından onaylanmış ve denetlenen A sınıfı depolama tesislerine sahiptir. Tüm depolama alanlarımız Good Distribution Practice (GDP) ilkelerine tam uygunluktadır.',
      '2-8°C soğuk zincir depolama alanlarımızda 7/24 dijital sıcaklık izleme sistemi aktif olarak çalışmaktadır. Sıcaklık sapmalarında anında SMS ve e-posta uyarı sistemi devreye girer. Oda sıcaklığında depolama alanlarımız 15-25°C aralığında sabit sıcaklık kontrolü sağlar.',
      'Karantina bölmemiz, beklenmeyen kalite kontrol sonuçları veya şüpheli ürünler için ayrılmış izole bir alandır. Karekod sistemi ile tüm ürünlerin giriş-çıkış hareketleri bilgisayar ortamında kayıt altındadır.',
    ],
    fullEn: [
      'CSC Pharmaceutical Warehouse operates Class A storage facilities approved and supervised by the Turkish Ministry of Health. All storage areas are fully compliant with Good Distribution Practice (GDP) principles.',
      'Our 2-8°C cold chain storage areas operate with 24/7 digital temperature monitoring. Instant SMS and email alert system activates upon temperature deviations. Our ambient temperature storage areas maintain constant temperature control in the 15-25°C range.',
      'Our quarantine zone is an isolated area reserved for unexpected quality control results or suspected products. All product entry and exit movements are recorded digitally via barcode system.',
    ],
    featuresTr: ['2-8°C Soğuk Zincir', 'Karantina Alanı', 'Oda Sıcaklığı', '7/24 İzleme', 'Karekod Takip'],
    featuresEn: ['2-8°C Cold Chain', 'Quarantine Zone', 'Ambient Temp', '24/7 Monitoring', 'Barcode Tracking'],
    color: '#0A5C8E',
  },
  {
    icon: <Truck size={24} />,
    titleTr: 'Lojistik ve Dağıtım',
    titleEn: 'Logistics & Distribution',
    shortTr: 'Türkiye-dünya arası GDP uyumlu ilaç taşımacılığı. Kapıya teslimat, GPS takip ve sıcaklık monitörü.',
    shortEn: 'Türkiye-to-world GDP compliant pharmaceutical transport. Door-to-door delivery, GPS tracking and temperature monitoring.',
    fullTr: [
      'CSC, Türkiye menşeli ilaçların ihracatında komple lojistik çözümler sunar. GDP uyumlu araç filomuz, her bir sevkiyat için sıcaklık kayıt cihazları (data logger) ile donatılmıştır.',
      'GPS araç takip sistemi sayesinde gönderilerinizin anlık konumunu izleyebilirsiniz. Kapıdan kapıya teslimat modelimiz, gümrükten nihai teslimat noktasına kadar tüm süreci kapsar. Özellikle Azerbaycan, Kazakistan, Özbekistan ve Kırgızistan gibi Orta Asya ülkelerine düzenli sevkiyat rotalarımız bulunmaktadır.',
      'Soğuk zincir taşımacılığında kullanılan özel izolasyonlu konteynerlerimiz, dış sıcaklık -20°C ile +45°C arasında değişse bile iç sıcaklığı 2-8°C aralığında sabit tutar. Tüm araçlarımızda jeneratör yedekleme sistemi mevcuttur.',
    ],
    fullEn: [
      'CSC offers comprehensive logistics solutions for the export of Turkish-origin pharmaceuticals. Our GDP compliant vehicle fleet is equipped with temperature recording devices (data loggers) for each shipment.',
      'With our GPS vehicle tracking system, you can monitor the real-time location of your shipments. Our door-to-door delivery model covers the entire process from customs to the final delivery point. We have regular shipping routes especially to Central Asian countries such as Azerbaijan, Kazakhstan, Uzbekistan and Kyrgyzstan.',
      'Our specially insulated containers used for cold chain transport maintain the internal temperature in the 2-8°C range even when the external temperature varies between -20°C and +45°C. All our vehicles have generator backup systems.',
    ],
    featuresTr: ['GPS Takip', 'Kapıya Teslimat', 'Data Logger', 'Soğuk Zincir Filo', 'Jeneratör Yedek'],
    featuresEn: ['GPS Tracking', 'Door-to-Door', 'Data Logger', 'Cold Chain Fleet', 'Gen Backup'],
    color: '#2C9CD4',
  },
  {
    icon: <Snowflake size={24} />,
    titleTr: 'Soğuk Zincir Yönetimi',
    titleEn: 'Cold Chain Management',
    shortTr: '2-8°C aralığında soğuk zinciri kırmadan taşıma. Özel konteynerler, 7/24 izleme ve sertifikalı ekip.',
    shortEn: 'Cold chain transport without breaking 2-8°C range. Special containers, 24/7 monitoring and certified team.',
    fullTr: [
      'Soğuk zincir yönetimi, ilaçların etkinliğini ve güvenliğini korumak için kritik öneme sahiptir. CSC, her aşamada soğuk zincir bütünlüğünü garanti eden end-to-end çözümler sunar.',
      'Kullandığımız özel faz-değiştiren malzeme (PCM) konteynerler, aktif soğuk sistemlere alternatif olarak 96 saate kadar stabil sıcaklık sağlar. Her konteynerde iki bağımsız sıcaklık sensörü ve bir data logger bulunur. Sevkiyat sonunda tüm sıcaklık verileri PDF raporu olarak paylaşılır.',
      'Soğuk zincir operasyonlarımız, IATA CEIV Pharma sertifikalı hava kargo ortaklarımızla entegre çalışır. Bu sayede hava yoluyla yapılan sevkiyatlarda da soğuk zincir kesintisiz devam eder.',
    ],
    fullEn: [
      'Cold chain management is of critical importance to maintain the efficacy and safety of medicines. CSC offers end-to-end solutions that guarantee cold chain integrity at every stage.',
      'Our special Phase Change Material (PCM) containers provide stable temperature for up to 96 hours as an alternative to active cooling systems. Each container has two independent temperature sensors and one data logger. All temperature data is shared as a PDF report after delivery.',
      'Our cold chain operations work in integration with our IATA CEIV Pharma certified air cargo partners. This ensures uninterrupted cold chain continuity for air shipments as well.',
    ],
    featuresTr: ['PCM Konteyner', '96 Saat Stabilite', 'Çift Sensör', 'PDF Sıcaklık Raporu', 'IATA CEIV Pharma'],
    featuresEn: ['PCM Container', '96h Stability', 'Dual Sensor', 'PDF Temp Report', 'IATA CEIV Pharma'],
    color: '#00A86B',
  },
  {
    icon: <Monitor size={24} />,
    titleTr: 'Dijital Tedarik Platformu',
    titleEn: 'Digital Supply Platform',
    shortTr: 'Web tabanlı sipariş yönetimi, stok takibi, online raporlama ve bilgi akışı.',
    shortEn: 'Web-based order management, inventory tracking, online reporting and information flow.',
    fullTr: [
      'CSC dijital platformu, müşterilerimizin 7/24 erişebileceği kapsamlı bir portal sunar. Platform üzerinden sipariş oluşturabilir, stok durumunuzu gerçek zamanlı izleyebilir ve sevkiyat takibi yapabilirsiniz.',
      'Sipariş yönetim modülümüzde, geçmiş siparişlerinizi görüntüleyebilir, tekrar sipariş verebilir ve özel kampanyalardan yararlanabilirsiniz. Stok takibi modülünde lot numaraları, son kullanma tarihleri ve miyad uyarıları anlık olarak görüntülenir.',
      'Online raporlama sistemi sayesinde satın alma trendlerinizi analiz edebilir, aylık/üç aylık dönemsel raporlar oluşturabilirsiniz. API entegrasyonu ile kendi ERP sisteminizle veri senkronizasyonu da mümkündür.',
    ],
    fullEn: [
      'The CSC digital platform offers a comprehensive portal that our customers can access 24/7. You can place orders, monitor your stock in real time, and track shipments through the platform.',
      'In our order management module, you can view your past orders, reorder, and benefit from special campaigns. Lot numbers, expiration dates, and expiry alerts are displayed instantly in the inventory tracking module.',
      'With the online reporting system, you can analyze your purchasing trends and generate monthly/quarterly reports. Data synchronization with your own ERP system is also possible through API integration.',
    ],
    featuresTr: ['7/24 Portal', 'Gerçek Zamanlı Stok', 'Miyad Uyarısı', 'API Entegrasyonu', 'Raporlama'],
    featuresEn: ['24/7 Portal', 'Real-time Stock', 'Expiry Alerts', 'API Integration', 'Reporting'],
    color: '#0A5C8E',
  },
  {
    icon: <Boxes size={24} />,
    titleTr: 'Toplu Tedarik Hizmetleri',
    titleEn: 'Bulk Supply Services',
    shortTr: 'Eczaneler ve hastaneler için toplu sipariş. Maliyet avantajı, tutarlı arz ve koordineli dağıtım.',
    shortEn: 'Bulk orders for pharmacies and hospitals. Cost advantages, consistent supply and coordinated distribution.',
    fullTr: [
      'CSC, eczane zincirleri, hastane grupları ve toptancılar için özel toplu tedarik programları sunar. Minimum sipariş miktarlarına göre kademeli fiyatlandırma sistemi uygulanır. Ne kadar çok sipariş verirseniz, birim başına maliyetiniz o kadar düşer.',
      'Toplu siparişlerde özel fiyatlandırma, ödeme vadesi ve lojistik çözümler sunuyoruz. Konteyner bazlı (FCL) sevkiyat imkanı ile deniz yoluyla daha ekonomik taşıma seçenekleri mevcuttur. Ayrıca konsolidasyon hizmetimizle birden fazla üreticiden gelen ürünleri tek sevkiyatta birleştirebiliriz.',
      'Tutarlı arz garantisi programımız kapsamında, anlaşmalı müşterilerimize yıl boyunca belirlenen ürünlerde stok garantisi veriyoruz. Bu program sayesinde stokouts riskini minimize ediyor, iş sürekliliğinizi koruyoruz.',
    ],
    fullEn: [
      'CSC offers special bulk supply programs for pharmacy chains, hospital groups, and wholesalers. A tiered pricing system is applied according to minimum order quantities. The more you order, the lower your per-unit cost.',
      'We offer special pricing, payment terms, and logistics solutions for bulk orders. Full Container Load (FCL) shipping options are available for more economical sea transport. Additionally, with our consolidation service, we can combine products from multiple manufacturers into a single shipment.',
      'Under our consistent supply guarantee program, we provide stock guarantees for agreed products to our contracted customers throughout the year. This program minimizes the risk of stockouts and ensures your business continuity.',
    ],
    featuresTr: ['Kademeli Fiyat', 'FCL Sevkiyat', 'Konsolidasyon', 'Stok Garantisi', 'Özel Vade'],
    featuresEn: ['Tiered Pricing', 'FCL Shipping', 'Consolidation', 'Stock Guarantee', 'Custom Terms'],
    color: '#2C9CD4',
  },
  {
    icon: <FlaskConical size={24} />,
    titleTr: 'Serbest Dolaşım ve İhale Hizmetleri',
    titleEn: 'Free Circulation & Tender Services',
    shortTr: 'Serbest dolaşım belgelendirme, devlet ve özel sektör ihalelerine katılım desteği.',
    shortEn: 'Free circulation certification, government and private sector tender participation support.',
    fullTr: [
      'Serbest dolaşım (Free Circulation) belgesi, ilaç ihracatında kritik bir dokümandır. CSC, Türkiye İlaç ve Tıbbi Cihaz Kurumu (TİTCK) koordinasyonunda serbest dolaşım belgelerinin teminini üstlenir. Belgelendirme süreci ortalama 5-10 iş günü sürmektedir.',
      'Devlet hastane ve sağlık ocakları ilaç ihalelerinde, tüm teknik ve idari şartname hazırlıklarını sizin adınıza gerçekleştiririz. Özellikle Kafkasya, Orta Asya ve Afrika ülkelerindeki kamu ihalelerine katılım konusunda danışmanlık hizmeti sunuyoruz.',
      'İhale süreçlerinde rekabetçi fiyatlandırma stratejileri geliştiriyor, yerel ortaklıklar kurmanıza yardımcı oluyoruz. Tüm ihale dokümantasyonu Türkçe, İngilizce ve Rusça dillerinde hazırlanmaktadır.',
    ],
    fullEn: [
      'The Free Circulation certificate is a critical document in pharmaceutical exports. CSC undertakes the procurement of free circulation certificates in coordination with the Turkish Medicines and Medical Devices Agency (TITCK). The certification process takes approximately 5-10 business days.',
      'For government hospital and health center drug tenders, we carry out all technical and administrative specification preparations on your behalf. We provide consultancy services especially for participating in public tenders in the Caucasus, Central Asia, and African countries.',
      'We develop competitive pricing strategies in tender processes and help you establish local partnerships. All tender documentation is prepared in Turkish, English, and Russian.',
    ],
    featuresTr: ['TİTCK Belgelendirme', 'İhale Danışmanlığı', 'Şartname Hazırlığı', 'Çok Dilli Destek', 'Yerel Ortaklık'],
    featuresEn: ['TITCK Certification', 'Tender Consulting', 'Specification Prep', 'Multi-language', 'Local Partnerships'],
    color: '#00A86B',
  },
];

export default function ServicesPage() {
  const { language } = useTranslation();
  const isTr = language === 'tr';
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="pt-20 md:pt-24 pb-10 md:pb-14 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            {isTr ? 'Kapsamlı Depo ve Lojistik Hizmetlerimiz' : 'Comprehensive Warehouse & Logistics Services'}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[680px] mx-auto">
            {isTr
              ? 'İlaç depolamadan soğuk zincir lojistiğine, dijital platformdan toplu tedarige kadar çözümler.'
              : 'Solutions from pharmaceutical storage to cold chain logistics, digital platform to bulk supply.'}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 items-start">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-[#D0D8E4] rounded-2xl overflow-hidden card-hover animate-fade-in-up h-fit"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Collapsed Row */}
                <div
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-5 cursor-pointer hover:bg-[#F4F7FC]/50 transition-colors"
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-body font-semibold text-lg text-[#1E2A3E] leading-snug">
                          {isTr ? service.titleTr : service.titleEn}
                        </h3>
                        <p className="font-body text-[13px] md:text-[14px] text-[#5A6A7E] leading-relaxed mt-1 line-clamp-2">
                          {isTr ? service.shortTr : service.shortEn}
                        </p>
                      </div>
                      <button
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all hover:scale-105 flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                        aria-label={isExpanded ? 'Kapat' : 'Detayları gör'}
                      >
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    {/* Feature chips — başlığın altında, sarmalı satır: asla taşmaz */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-3">
                      {(isTr ? service.featuresTr : service.featuresEn).slice(0, 3).map((f, j) => (
                        <span key={j} className="font-mono text-[10px] px-2 py-1 rounded bg-[#F4F7FC] text-[#5A6A7E] border border-[#D0D8E4]/50 whitespace-nowrap">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Detail */}
                {isExpanded && (
                  <div className="border-t border-[#D0D8E4]/50 bg-[#F4F7FC]/30 px-4 md:px-6 py-4 md:py-5 animate-fade-in-up">
                    {/* Full paragraphs */}
                    <div className="space-y-3 mb-6">
                      {(isTr ? service.fullTr : service.fullEn).map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* All features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {(isTr ? service.featuresTr : service.featuresEn).map((f, j) => (
                        <span key={j} className="inline-flex items-center gap-1.5 font-body text-[12px] px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: service.color }}>
                          <FileCheck size={12} /> {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://wa.me/905436109008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-body font-semibold text-sm px-5 py-2.5 rounded-lg text-white hover:opacity-90 transition-all"
                        style={{ backgroundColor: service.color }}
                      >
                        <Phone size={16} /> {isTr ? 'Bilgi Alın' : 'Contact Us'}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* GDP Trust Banner */}
        <div className="mt-6 md:mt-8 bg-white border border-[#D0D8E4] rounded-2xl p-5 md:p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              { labelTr: 'GDP Uyumlu', labelEn: 'GDP Compliant', subTr: 'İyi Dağıtım Uygulamaları', subEn: 'Good Distribution Practice' },
              { labelTr: 'Bakanlık Onaylı', labelEn: 'Ministry Approved', subTr: 'Sağlık Bakanlığı Ruhsatlı', subEn: 'Health Ministry Licensed' },
              { labelTr: '7/24 Operasyon', labelEn: '24/7 Operations', subTr: 'Soğuk Zincir İzleme', subEn: 'Cold Chain Monitoring' },
              { labelTr: '50+ Ülke', labelEn: '50+ Countries', subTr: 'Küresel Ulaşım Ağı', subEn: 'Global Distribution Network' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#0A5C8E]/10 flex items-center justify-center mx-auto mb-2">
                  <span className="font-display font-bold text-[#0A5C8E] text-sm">{isTr ? item.labelTr.charAt(0) : item.labelEn.charAt(0)}</span>
                </div>
                <span className="font-body font-semibold text-sm text-[#1E2A3E] block">{isTr ? item.labelTr : item.labelEn}</span>
                <span className="font-body text-xs text-[#5A6A7E]">{isTr ? item.subTr : item.subEn}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
