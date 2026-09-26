import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('csc-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('csc-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('csc-cookie-consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1E2A3E]/95 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie size={20} className="text-[#2C9CD4] mt-0.5 flex-shrink-0" />
          <p className="font-body text-sm text-white/80 leading-relaxed">
            {t('cookie.text')}
            <Link to="/gizlilik" className="text-[#2C9CD4] hover:text-[#00A86B] underline transition-colors">
              {t('cookie.privacy')}
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleReject}
            className="font-body text-sm text-white/60 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t('cookie.reject')}
          </button>
          <button
            onClick={handleAccept}
            className="font-body text-sm font-semibold bg-[#00A86B] text-white px-5 py-2 rounded-lg hover:bg-[#008F5B] transition-colors"
          >
            {t('cookie.accept')}
          </button>
          <button
            onClick={handleReject}
            className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/10 transition-colors md:hidden"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
