import { type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  chips: string[];
  gradient?: 'blue-green' | 'green-blue';
  large?: boolean;
}

export default function ServiceCard({ icon, title, description, chips, gradient = 'blue-green', large = false }: ServiceCardProps) {
  const gradientClass = gradient === 'blue-green'
    ? 'bg-gradient-to-r from-primary-blue to-pharma-green'
    : 'bg-gradient-to-r from-pharma-green to-primary-blue';

  const sideGradientClass = gradient === 'blue-green'
    ? 'bg-gradient-to-b from-primary-blue to-pharma-green'
    : 'bg-gradient-to-b from-pharma-green to-primary-blue';

  return (
    <div
      className={`relative bg-ice-bg border border-border-subtle rounded-[16px] p-6 card-hover overflow-hidden h-full flex flex-col ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top gradient bar */}
      <div className={`h-[3px] rounded-t-[16px] absolute top-0 left-0 right-0 ${gradientClass}`} />

      {/* Right side gradient bar */}
      <div className={`w-[3px] absolute top-0 bottom-0 right-0 ${sideGradientClass}`} />

      {/* Content - flex column with justify-between for even distribution */}
      <div className="flex-1 flex flex-col justify-between h-full">
        {/* Top part: icon + arrow + title + desc */}
        <div>
          {/* Icon row */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-primary-blue/8 rounded-xl flex items-center justify-center text-primary-blue shrink-0">
              {icon}
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary-blue/10 to-pharma-green/10 flex items-center justify-center text-primary-blue shrink-0">
              <ChevronRight size={14} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-body font-semibold text-[15px] text-dark-text leading-snug mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="font-body text-[13px] text-muted-text leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom part: chips */}
        <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-primary-blue/5">
          {chips.slice(0, 3).map((chip, i) => (
            <span
              key={i}
              className="bg-primary-blue/[0.06] text-primary-blue font-medium text-[10px] px-2 py-1 rounded-md"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
