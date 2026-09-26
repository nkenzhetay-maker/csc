import { useTranslation } from '../../contexts/LanguageContext';

interface SectionHeaderProps {
  labelKey?: string;
  titleKey: string;
  subtitleKey?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeader({ labelKey, titleKey, subtitleKey, light = false, center = true }: SectionHeaderProps) {
  const { t } = useTranslation();

  return (
    <div className={center ? 'text-center' : ''}>
      {labelKey && (
        <span className="font-mono text-xs tracking-[2px] text-primary-blue">
          {t(labelKey)}
        </span>
      )}
      <h2
        className={`font-display font-bold mt-4 leading-tight ${
          light ? 'text-light-text' : 'text-dark-text'
        }`}
        style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
      >
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p
          className={`font-body text-[17px] leading-relaxed mt-3 max-w-[600px] ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-light-text/70' : 'text-muted-text'}`}
        >
          {t(subtitleKey)}
        </p>
      )}
    </div>
  );
}
