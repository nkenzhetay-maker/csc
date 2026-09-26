import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../contexts/LanguageContext';
import { ShieldAlert, CheckCircle, XCircle } from 'lucide-react';

interface HealthWorkerModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function HealthWorkerModal({ isOpen, onConfirm, onClose }: HealthWorkerModalProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNo = () => {
    onClose();
    navigate('/');
  };

  const handleYes = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center modal-backdrop p-4">
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-[480px] w-full p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="w-16 h-16 bg-[#0A5C8E]/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <ShieldAlert size={32} className="text-[#0A5C8E]" />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl text-[#1E2A3E] text-center mb-3">
          {t('modal.title')}
        </h3>

        {/* Text */}
        <p className="font-body text-[15px] text-[#5A6A7E] text-center leading-relaxed mb-2">
          {t('modal.text')}
        </p>
        <p className="font-body text-xs text-[#5A6A7E]/70 text-center mb-6">
          {t('modal.warning')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleYes}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00A86B] text-white font-body font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-[#008F5B] transition-all duration-200"
          >
            <CheckCircle size={18} />
            {t('modal.yes')}
          </button>
          <button
            onClick={handleNo}
            className="flex-1 inline-flex items-center justify-center gap-2 border border-[#D0D8E4] text-[#5A6A7E] font-body font-semibold text-sm px-6 py-3.5 rounded-lg hover:border-[#0A5C8E] hover:text-[#0A5C8E] transition-all duration-200"
          >
            <XCircle size={18} />
            {t('modal.no')}
          </button>
        </div>
      </div>
    </div>
  );
}
