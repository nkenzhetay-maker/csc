import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { Globe, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0A5C8E] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <img src="/logo-csc-white.png" alt="CSC Global Ecza Deposu" className="h-8 w-auto mb-4" />
            <p className="font-body text-[14px] text-white/50 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://csc-tr.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="https://wa.me/905436109008" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:info@csc-tr.com" className="text-white/50 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white uppercase tracking-wider mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2.5">
              {[
                { key: 'service.storage.title', path: '/hizmetler' },
                { key: 'service.logistics.title', path: '/hizmetler' },
                { key: 'service.coldchain.title', path: '/hizmetler' },
                { key: 'service.digital.title', path: '/hizmetler' },
              ].map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="font-body text-[14px] text-white/60 hover:text-white transition-colors">{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Products */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white uppercase tracking-wider mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2.5">
              {[
                { key: 'prodcat.ilac.title', path: '/urunler' },
                { key: 'prodcat.gida.title', path: '/urunler' },
                { key: 'prodcat.sarf.title', path: '/urunler' },
                { key: 'prodcat.cihaz.title', path: '/urunler' },
              ].map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className="font-body text-[14px] text-white/60 hover:text-white transition-colors">{t(link.key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact + Legal */}
          <div>
            <h4 className="font-body font-semibold text-sm text-white uppercase tracking-wider mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-white/40 mt-0.5 flex-shrink-0" />
                <span className="font-body text-[13px] text-white/60">{t('contact.tr.address')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-white/40 flex-shrink-0" />
                <a href="mailto:info@csc-tr.com" className="font-body text-[13px] text-white/60 hover:text-white transition-colors">info@csc-tr.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-white/40 flex-shrink-0" />
                <a href="tel:+905436109008" className="font-body text-[13px] text-white/60 hover:text-white transition-colors">+90 543 610 9008</a>
              </li>
            </ul>

            {/* Legal Links */}
            <h4 className="font-body font-semibold text-sm text-white uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/gizlilik" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
              <li><Link to="/kullanim-sartlari" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">{t('footer.terms')}</Link></li>
              <li><Link to="/cerez-politikasi" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">{t('footer.cookie')}</Link></li>
              <li><Link to="/kvkk" className="font-body text-[13px] text-white/50 hover:text-white transition-colors">{t('footer.kvkk')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[12px] text-white/40">
            © {currentYear} CSC Pharmaceutical Warehouse. {t('footer.bottom').replace('© 2025 ', '').replace('© 2026 ', '')}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-[11px] text-white/30 bg-white/10 px-3 py-1 rounded-full">GDP Compliant</span>
            <span className="font-body text-[11px] text-white/30 bg-white/10 px-3 py-1 rounded-full">Ministry of Health Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
