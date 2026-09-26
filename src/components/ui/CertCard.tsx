import { type ReactNode } from 'react';

interface CertCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  hoverBorder?: string;
}

export default function CertCard({ icon, iconBg, title, description, hoverBorder = 'hover:border-pharma-green' }: CertCardProps) {
  return (
    <div
      className={`bg-white border border-border-subtle rounded-[16px] p-8 text-center transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(46,125,50,0.08)] ${hoverBorder}`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto`}
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <h3 className="font-body font-semibold text-base text-dark-text mt-4">{title}</h3>
      <p className="font-body text-sm text-muted-text leading-relaxed mt-2">{description}</p>
    </div>
  );
}
