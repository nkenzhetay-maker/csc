import { useTranslation } from '../contexts/LanguageContext';
import { Cookie, Mail } from 'lucide-react';

export default function CookiePolicy() {
  const { t } = useTranslation();
  const date = '12 Mayıs 2026';

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <div className="mb-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#0A5C8E]/10 rounded-xl flex items-center justify-center text-[#0A5C8E]">
            <Cookie size={24} />
          </div>
          <h1 className="font-display font-bold text-[#1E2A3E] text-3xl md:text-4xl">{t('cookiepolicy.title')}</h1>
          <p className="font-body text-[#5A6A7E] mt-2">{t('legal.lastupdated')}: {date}</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#D0D8E4] p-8 md:p-10 space-y-8">
          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">1. Çerez Nedir?</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen 
              küçük metin dosyalarıdır. Bu dosyalar, sitemizin düzgün çalışmasını sağlamak, 
              kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için kullanılır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">2. Kullandığımız Çerez Türleri</h2>
            <div className="space-y-4">
              <div className="bg-[#F4F7FC] rounded-xl p-5">
                <h3 className="font-body font-semibold text-[#1E2A3E] mb-2">Zorunlu Çerezler</h3>
                <p className="font-body text-[14px] text-[#5A6A7E] leading-relaxed">
                  Bu çerezler, web sitemizin temel işlevleri için gereklidir ve devre dışı bırakılamaz. 
                  Oturum yönetimi, güvenlik ve dil tercihleri bu kapsamdadır.
                </p>
              </div>
              <div className="bg-[#F4F7FC] rounded-xl p-5">
                <h3 className="font-body font-semibold text-[#1E2A3E] mb-2">Analitik Çerezler</h3>
                <p className="font-body text-[14px] text-[#5A6A7E] leading-relaxed">
                  Sitemizin nasıl kullanıldığını anlamamıza yardımcı olan istatistiksel çerezlerdir. 
                  Bu çerezler, ziyaretçi sayısı, trafik kaynakları ve en çok ziyaret edilen sayfalar gibi 
                  bilgileri anonim olarak toplar.
                </p>
              </div>
              <div className="bg-[#F4F7FC] rounded-xl p-5">
                <h3 className="font-body font-semibold text-[#1E2A3E] mb-2">Tercih Çerezleri</h3>
                <p className="font-body text-[14px] text-[#5A6A7E] leading-relaxed">
                  Dil tercihlerinizi, tema ayarlarınızı ve diğer kişiselleştirilmiş seçimlerinizi 
                  hatırlamak için kullanılır.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">3. Çerez Yönetimi</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Tarayıcı ayarlarınızdan çerezleri kabul etmemeyi veya mevcut çerezleri silmeyi seçebilirsiniz. 
              Ancak, bazı çerezleri devre dışı bırakmak sitemizin bazı özelliklerinin düzgün çalışmamasına 
              neden olabilir. Tarayıcınızın ayarlar bölümünden çerez tercihlerinizi yönetebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">4. Üçüncü Taraf Çerezleri</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Web sitemiz, analitik hizmetleri için Google Analytics gibi güvenilir üçüncü taraf hizmetler 
              kullanabilir. Bu hizmetler, kendi çerez politikalarına tabidir.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">5. İletişim</h2>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#0A5C8E]" />
              <a href="mailto:info@csc-tr.com" className="font-body text-[15px] text-[#0A5C8E] hover:underline">info@csc-tr.com</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
