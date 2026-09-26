import { useTranslation } from '../contexts/LanguageContext';
import { Shield, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const date = '12 Mayıs 2026';

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#0A5C8E]/10 rounded-xl flex items-center justify-center text-[#0A5C8E]">
            <Shield size={24} />
          </div>
          <h1 className="font-display font-bold text-[#1E2A3E] text-3xl md:text-4xl">{t('privacy.title')}</h1>
          <p className="font-body text-[#5A6A7E] mt-2">{t('legal.lastupdated')}: {date}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl border border-[#D0D8E4] p-8 md:p-10 space-y-8">
          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">1. Veri Sorumlusu</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Bu gizlilik politikası, CSC-TR Ecza Deposu ve CSC-AZ Pharmaceutical Warehouse (bundan sonra "CSC" olarak anılacaktır) tarafından yönetilmektedir. 
              Kişisel verilerinizin korunması bizim için en üst düzey önceliktir. Bu politika, web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda 
              kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">2. Toplanan Veriler</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              Web sitemiz aracılığıyla aşağıdaki kişisel veriler toplanabilir:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>İletişim bilgileri (ad, soyad, e-posta adresi, telefon numarası)</li>
              <li>Şirket/kurum bilgileri</li>
              <li>IP adresi, tarayıcı türü, işletim sistemi</li>
              <li>Site kullanım istatistikleri ve tercihleri</li>
              <li>Çerezler aracılığıyla toplanan teknik veriler</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">3. Veri Kullanım Amaçları</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              Kişisel verileriniz aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>Hizmet taleplerinizin karşılanması</li>
              <li>Siparişlerinizin işlenmesi ve takibi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi (Sağlık Bakanlığı, GDP)</li>
              <li>Site performansının iyileştirilmesi</li>
              <li>Güvenlik ve dolandırıcılık önleme</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">4. Veri Saklama Süresi</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Kişisel verileriniz, yasal yükümlülüklerimiz gereği en az 10 yıl boyunca saklanır. 
      İletişim formu verileri 2 yıl, çerez verileri ise 1 yıl saklanmaktadır. 
      Yasal sürelerin dolmasının ardından verileriniz güvenli bir şekilde silinir veya anonimleştirilir.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">5. Veri Güvenliği</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Verilerinizin güvenliği için endüstri standardı SSL şifreleme, güvenlik duvarları ve 
              erişim kontrol mekanizmaları kullanmaktayız. Düzenli güvenlik denetimleri yapılmakta 
              ve personelimize veri koruma eğitimleri verilmektedir.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">6. Haklarınız</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              KVKK ve GDPR kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>Verilerinize erişim hakkı</li>
              <li>Düzeltme hakkı</li>
              <li>Silinme hakkı (&quot;unutulma hakkı&quot;)</li>
              <li>İşleme sınırlama hakkı</li>
              <li>Veri taşınabilirliği hakkı</li>
              <li>İtiraz hakkı</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">7. İletişim</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-3">
              Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#0A5C8E]" />
                <a href="mailto:info@csc-tr.com" className="font-body text-[15px] text-[#0A5C8E] hover:underline">info@csc-tr.com</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#0A5C8E] mt-1" />
                <span className="font-body text-[15px] text-[#5A6A7E]">Kayabaşı Mah. Söğütözü Sokak, Başakşehir, İstanbul</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
