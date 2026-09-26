import { useTranslation } from '../contexts/LanguageContext';
import { FileText, Mail } from 'lucide-react';

export default function TermsOfUse() {
  const { t } = useTranslation();
  const date = '12 Mayıs 2026';

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <div className="mb-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-[#0A5C8E]/10 rounded-xl flex items-center justify-center text-[#0A5C8E]">
            <FileText size={24} />
          </div>
          <h1 className="font-display font-bold text-[#1E2A3E] text-3xl md:text-4xl">{t('terms.title')}</h1>
          <p className="font-body text-[#5A6A7E] mt-2">{t('legal.lastupdated')}: {date}</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#D0D8E4] p-8 md:p-10 space-y-8">
          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">1. Kabul</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Bu web sitesini kullanarak, aşağıdaki kullanım şartlarını ve koşullarını kabul etmiş sayılırsınız. 
              Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız. CSC-TR ve CSC-AZ (bundan sonra "CSC" olarak anılacaktır) 
              bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">2. Hizmet Kapsamı</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              CSC, Sağlık Bakanlığı onaylı ecza depoları aracılığıyla ilaç depolama, lojistik, soğuk zincir yönetimi 
              ve dijital tedarik platformu hizmetleri sunmaktadır. Tüm hizmetler Good Distribution Practice (GDP) 
              standartlarına uygun olarak yürütülmektedir. Hizmetler yalnızca yetkili sağlık kuruluşları ve 
              lisanslı eczaneler için sunulmaktadır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">3. Sağlık Çalışanı Onayı</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              İlaç ürünleri bölümü yalnızca doktor, eczacı, hemşire ve diğer yetkili sağlık çalışanlarına yöneliktir. 
              Bu bölüme erişim, sağlık çalışanı olduğunuzu beyan etmenizi gerektirir. CSC, bu beyanın doğruluğunu 
              doğrulama hakkını saklı tutar.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">4. Fikri Mülkiyet</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Bu web sitesindeki tüm içerik (metin, grafik, logo, simge, görüntü, ses klipleri, dijital indirmeler 
              ve yazılım dahil) CSC&apos;nin mülkiyetindedir ve Türkiye Cumhuriyeti ve uluslararası telif hakkı 
              yasaları ile korunmaktadır. İçeriğin izinsiz çoğaltılması, dağıtılması veya değiştirilmesi kesinlikle yasaktır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">5. Sorumluluk Sınırlaması</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              CSC, web sitesindeki bilgilerin doğruluğu ve güncelliği konusunda makul özen göstermektedir. 
              Ancak, bu bilgilerin eksiksiz veya hatasız olduğunu garanti etmez. Site kullanımından doğabilecek 
              doğrudan veya dolaylı zararlardan CSC sorumlu tutulamaz.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">6. Yasaklı Kullanımlar</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Sitemizi kullanırken yasa dışı faaliyetlerde bulunamaz, zararlı yazılım yayamaz, 
              hizmetlerimizi aksatacak davranışlarda bulunamaz veya başkalarının haklarını ihlal edemezsiniz. 
              Bu tür kullanımlar tespit edildiğinde, ilgili hesaplar derhal sonlandırılır ve yasal işlem başlatılır.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">7. Bağlantılar</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içeriği üzerinde 
              kontrolümüz yoktur ve içeriklerinden sorumlu değiliz. Bağlantı verilen sitelerin gizlilik 
              politikalarını ve kullanım şartlarını incelemenizi öneririz.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">8. Uygulanacak Hukuk</h2>
            <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed">
              Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanacaktır. 
              Doğabilecek herhangi bir anlaşmazlık, İstanbul mahkemelerinin yetkisine tabidir.
            </p>
          </section>

          <section>
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-3">9. İletişim</h2>
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
