import { useTranslation } from '../contexts/LanguageContext';
import { ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function KVKKPolicy() {
  const { t } = useTranslation();
  const date = '12 Mayıs 2026';

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <div className="mb-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#0A5C8E]/10 rounded-xl flex items-center justify-center text-[#0A5C8E]">
            <ShieldCheck size={24} />
          </div>
          <h1 className="font-display font-bold text-[#1E2A3E] text-3xl md:text-4xl">{t('kvkk.title')}</h1>
          <p className="font-body text-[#5A6A7E] mt-2">{t('legal.lastupdated')}: {date}</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#D0D8E4] p-8 md:p-10 space-y-8">
          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">1. Veri Sorumlusu ve Temsilcisi</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; 
              veri sorumlusu olarak CSC-TR Ecza Deposu tarafından aşağıda açıklanan kapsamda işlenmektedir.
            </p>
            <div className="mt-3 space-y-1">
              <p className="font-body text-[14px] text-[#5A6A7E]"><strong className="text-[#1E2A3E]">Ünvan:</strong> CSC-TR Ecza Deposu</p>
              <p className="font-body text-[14px] text-[#5A6A7E]"><strong className="text-[#1E2A3E]">Adres:</strong> Kayabaşı Mah. Söğütözü Sokak, Başakşehir, İstanbul</p>
              <p className="font-body text-[14px] text-[#5A6A7E]"><strong className="text-[#1E2A3E]">Telefon:</strong> +90 543 610 9008</p>
              <p className="font-body text-[14px] text-[#5A6A7E]"><strong className="text-[#1E2A3E]">E-posta:</strong> info@csc-tr.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">2. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              Kişisel verileriniz aşağıdaki amaçlarla ve hukuki sebeplerle işlenmektedir:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>Hizmet taleplerinizin alınması ve değerlendirilmesi (sözleşme ilişkisi)</li>
              <li>Sağlık Bakanlığı mevzuatına uygun kayıt tutma (hukuki yükümlülük)</li>
              <li>GDP (İyi Dağıtım Uygulamaları) kapsamında izlenebilirlik</li>
              <li>Sipariş ve lojistik süreçlerinin yürütülmesi</li>
              <li>Bilgi güvenliği ve yetkisiz erişim önleme</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">3. İşlenen Kişisel Veriler</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              Tarafınıza ait aşağıdaki kişisel veriler işlenebilmektedir:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>Kimlik bilgileri (ad, soyad)</li>
              <li>İletişim bilgileri (e-posta, telefon)</li>
              <li>Meslek bilgileri (sağlık çalışanı beyanı)</li>
              <li>İşlem bilgileri (sipariş geçmişi)</li>
              <li>Çevrimiçi tanımlayıcılar (IP adresi, çerez verileri)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">4. Veri Aktarımı</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Kişisel verileriniz, yasal yükümlülüklerimiz çerçevesinde Sağlık Bakanlığı, gümrük 
              yetkilileri ve yasal mercilere aktarılabilir. Ayrıca, lojistik hizmet sağlayıcılarımıza 
              ve iş ortaklarımıza, hizmet sunumu amacıyla sınırlı olarak aktarılabilir. 
              Verileriniz yurt dışına aktarılmamaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">5. Veri Güvenliği</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              KVKK&apos;nın 12. maddesi uyarınca, kişisel verilerinizin güvenliğini sağlamak amacıyla 
              uygun teknik ve idari tedbirler alınmaktadır. Verileriniz şifreleme, erişim kontrolü, 
              güvenlik duvarı ve düzenli denetim mekanizmaları ile korunmaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">6. Haklarınız (KVKK Md. 11)</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-2">
              KVKK kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside font-body text-[15px] text-[#5A6A7E] leading-relaxed space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde / yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini / yok edilmesini isteme</li>
              <li>Düzeltme, silme yok etme işlemlerinin aktarım yapılan üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi nedeniyle aleyhinize bir sonuç doğmasına itiraz etme</li>
              <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">7. Başvuru Yöntemi</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Yukarıda belirtilen haklarınızı kullanmak için, aşağıdaki iletişim kanallarından bize 
              ulaşabilirsiniz. Başvurunuz en geç 30 gün içinde yanıtlanacaktır.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#0A5C8E]" />
                <a href="mailto:info@csc-tr.com" className="font-body text-[15px] text-[#0A5C8E] hover:underline">info@csc-tr.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#0A5C8E]" />
                <a href="tel:+905436109008" className="font-body text-[15px] text-[#0A5C8E] hover:underline">+90 543 610 9008</a>
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
