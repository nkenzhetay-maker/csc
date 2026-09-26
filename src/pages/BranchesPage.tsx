import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Phone, Mail } from 'lucide-react';

interface Branch {
  code: string; labelKey: string; nameKey: string; locationKey: string;
  address: string; email: string; phone: string; color: string; active: boolean;
  markerPos: { cx: number; cy: number };
}

const branches: Branch[] = [
  {
    code: 'TR', labelKey: 'branches.tr.label', nameKey: 'branches.tr.name', locationKey: 'branches.tr.location',
    address: 'Kayabasi Mah. Sogutozu Sokak, Basaksehir, Istanbul, Türkiye',
    email: 'info@csc-tr.com', phone: '+90 543 610 90 08', color: '#0A5C8E', active: true, markerPos: { cx: 528, cy: 181 },
  },
  {
    code: 'AZ', labelKey: 'branches.az.label', nameKey: 'branches.az.name', locationKey: 'branches.az.location',
    address: 'BAKI SEHERI, BINEQEDI RAYONU, HEMZE BABASOV KUCESI, 9 MKR, EV 1, DONGƏ 1',
    email: 'info@csc-az.com', phone: '+994 12 XXX XXXX', color: '#2C9CD4', active: true, markerPos: { cx: 570, cy: 184 },
  },
  {
    code: 'KZ', labelKey: 'branches.kz.label', nameKey: 'branches.kz.name', locationKey: 'branches.kz.location',
    address: 'Kazakhstan (Planned)', email: 'info@csc-kz.com', phone: '', color: '#9CA3AF', active: false, markerPos: { cx: 640, cy: 158 },
  },
];

export default function BranchesPage() {
  const { t } = useTranslation();
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [activeBranch, setActiveBranch] = useState<Branch>(branches[0]);

  // Realistic world map SVG paths (simplified real geography)
  const worldPaths = {
    // North America
    northAmerica: 'M45,55 L95,45 L145,52 L185,72 L220,95 L250,115 L268,140 L275,175 L262,205 L230,232 L190,248 L140,242 L90,215 L52,172 L32,125 L28,88 Z',
    // Central America
    centralAmerica: 'M135,252 L155,248 L170,258 L178,275 L170,295 L155,305 L140,298 L130,280 Z',
    // South America
    southAmerica: 'M195,310 L220,302 L248,310 L268,338 L275,380 L260,425 L232,452 L198,442 L175,398 L172,350 Z',
    // Europe
    europe: 'M420,85 L445,72 L472,68 L495,75 L512,95 L518,120 L510,145 L488,158 L462,160 L435,148 L420,122 Z',
    // Turkey
    turkey: 'M500,165 L510,160 L522,163 L530,170 L535,180 L532,190 L525,196 L515,194 L505,188 L498,178 L498,170 Z',
    // Russia/Asia
    russia: 'M515,48 L570,38 L650,35 L750,42 L830,58 L890,78 L920,115 L918,155 L885,182 L825,192 L760,188 L695,178 L630,160 L568,138 L520,108 Z',
    // Middle East
    middleEast: 'M488,180 L510,175 L530,182 L545,198 L540,220 L520,232 L498,228 L485,210 L480,192 Z',
    // Central Asia
    centralAsia: 'M545,145 L585,138 L625,145 L655,162 L662,185 L645,200 L610,205 L570,195 L548,178 L545,158 Z',
    // South Asia (India)
    india: 'M600,215 L625,210 L648,225 L655,258 L642,285 L622,295 L605,278 L595,248 Z',
    // China/East Asia
    eastAsia: 'M665,145 L710,138 L758,148 L792,175 L808,212 L795,248 L758,262 L712,252 L680,228 L665,195 Z',
    // Southeast Asia
    seAsia: 'M695,270 L718,265 L740,280 L745,310 L732,332 L710,325 L695,302 Z',
    // Africa
    africa: 'M415,225 L452,215 L488,228 L510,258 L520,298 L512,345 L488,388 L455,412 L418,398 L398,352 L390,298 L398,252 Z',
    // Australia
    australia: 'M750,345 L810,338 L862,352 L878,385 L865,418 L818,428 L768,415 L745,385 Z',
    // Japan
    japan: 'M808,168 L818,165 L825,178 L818,198 L808,205 L800,192 L800,175 Z',
    // UK
    uk: 'M432,108 L445,102 L455,110 L458,122 L450,132 L438,130 L430,120 Z',
    // Greenland
    greenland: 'M225,32 L268,25 L305,35 L318,58 L305,80 L268,88 L235,78 L220,55 Z',
  };

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            {t('branches.title')}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[640px] mx-auto">{t('branches.subtitle')}</p>
        </div>

        {/* Realistic World Map */}
        <div className="relative bg-[#1E2A3E] border border-[#D0D8E4] rounded-2xl overflow-hidden mb-10">
          <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Ocean background */}
            <rect width="1000" height="500" fill="#1E2A3E" />
            
            {/* Grid lines */}
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map(x => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="#2C3E5E" strokeWidth="0.5" opacity="0.3" />
            ))}
            {[100, 200, 300, 400].map(y => (
              <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="#2C3E5E" strokeWidth="0.5" opacity="0.3" />
            ))}

            {/* Continents - white base */}
            <path d={worldPaths.northAmerica} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.centralAmerica} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.southAmerica} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.europe} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.uk} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.russia} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.middleEast} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.centralAsia} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.india} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.eastAsia} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.seAsia} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.africa} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.australia} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.japan} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />
            <path d={worldPaths.greenland} fill="#E8EDF5" stroke="#CBD5E1" strokeWidth="1" />

            {/* Türkiye - highlighted */}
            <path d={worldPaths.turkey} fill="#0A5C8E" stroke="#00A86B" strokeWidth="2"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0,168,107,0.5))' }} />

            {/* Azerbaijan - highlighted */}
            <path d="M565,180 L572,178 L578,182 L580,188 L575,192 L568,190 L562,188 L560,182 Z"
              fill="#2C9CD4" stroke="#00A86B" strokeWidth="2"
              style={{ filter: 'drop-shadow(0 0 8px rgba(44,156,212,0.5))' }} />

            {/* Kazakhstan - highlighted (lighter) */}
            <path d="M585,148 L615,142 L645,148 L660,165 L658,180 L640,190 L610,188 L585,178 L578,160 Z"
              fill="#5A6A7E" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="4 2"
              style={{ filter: 'drop-shadow(0 0 4px rgba(154,163,175,0.3))' }} />

            {/* Connection line TR -> AZ */}
            <path d="M 532 182 Q 548 181 562 184" stroke="#00A86B" strokeWidth="2.5" strokeDasharray="6 3" fill="none" opacity="0.8">
              <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2s" repeatCount="indefinite" />
            </path>
            {/* Connection line AZ -> KZ */}
            <path d="M 580 186 Q 605 170 638 162" stroke="#9CA3AF" strokeWidth="2" strokeDasharray="5 3" fill="none" opacity="0.5">
              <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
            </path>

            {/* Branch markers */}
            {/* Türkiye */}
            <circle cx="528" cy="180" r="7" fill="#00A86B" stroke="white" strokeWidth="2.5">
              <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Azerbaijan */}
            <circle cx="572" cy="185" r="7" fill="#2C9CD4" stroke="white" strokeWidth="2.5">
              <animate attributeName="r" values="7;11;7" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.7;1" dur="2.5s" repeatCount="indefinite" />
            </circle>
            {/* Kazakhstan */}
            <circle cx="640" cy="158" r="5" fill="#9CA3AF" stroke="white" strokeWidth="2">
              <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Tooltip on hover */}
            {hoveredBranch === 'TR' && (
              <g>
                <rect x="478" y="148" width="100" height="38" rx="8" fill="#0A5C8E" stroke="#00A86B" strokeWidth="1" />
                <polygon points="528,186 523,190 533,190" fill="#0A5C8E" />
                <text x="528" y="167" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Montserrat">CSC-TR</text>
                <text x="528" y="180" textAnchor="middle" fontSize="10" fill="#A3D9C9" fontFamily="Inter">Istanbul, Türkiye</text>
              </g>
            )}
            {hoveredBranch === 'AZ' && (
              <g>
                <rect x="522" y="152" width="100" height="38" rx="8" fill="#2C9CD4" stroke="#00A86B" strokeWidth="1" />
                <polygon points="572,190 567,194 577,194" fill="#2C9CD4" />
                <text x="572" y="171" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Montserrat">CSC-AZ</text>
                <text x="572" y="184" textAnchor="middle" fontSize="10" fill="#B8DFF5" fontFamily="Inter">Baku, Azerbaijan</text>
              </g>
            )}
            {hoveredBranch === 'KZ' && (
              <g>
                <rect x="590" y="125" width="100" height="38" rx="8" fill="#5A6A7E" stroke="#9CA3AF" strokeWidth="1" />
                <polygon points="640,163 635,167 645,167" fill="#5A6A7E" />
                <text x="640" y="144" textAnchor="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="Montserrat">CSC-KZ</text>
                <text x="640" y="157" textAnchor="middle" fontSize="10" fill="#CBD5E1" fontFamily="Inter">Coming Soon</text>
              </g>
            )}

            {/* Country labels */}
            <text x="528" y="210" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Inter">Türkiye</text>
            <text x="572" y="210" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Inter">Azerbaijan</text>
            <text x="640" y="180" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter">Kazakhstan</text>
          </svg>

          {/* Interactive overlay areas */}
          <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
            <svg viewBox="0 0 1000 500" className="w-full h-full" style={{ pointerEvents: 'auto' }}>
              {/* Türkiye hover area */}
              <path d={worldPaths.turkey} fill="transparent" stroke="none" cursor="pointer"
                onMouseEnter={() => setHoveredBranch('TR')} onMouseLeave={() => setHoveredBranch(null)} onClick={() => setActiveBranch(branches[0])} />
              {/* Azerbaijan hover area */}
              <path d="M565,180 L572,178 L578,182 L580,188 L575,192 L568,190 L562,188 L560,182 Z" fill="transparent" stroke="none" cursor="pointer"
                onMouseEnter={() => setHoveredBranch('AZ')} onMouseLeave={() => setHoveredBranch(null)} onClick={() => setActiveBranch(branches[1])} />
              {/* Kazakhstan hover area */}
              <path d="M585,148 L615,142 L645,148 L660,165 L658,180 L640,190 L610,188 L585,178 L578,160 Z" fill="transparent" stroke="none" cursor="pointer"
                onMouseEnter={() => setHoveredBranch('KZ')} onMouseLeave={() => setHoveredBranch(null)} onClick={() => setActiveBranch(branches[2])} />
            </svg>
          </div>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <div key={i}
              className={`bg-white border rounded-2xl p-6 card-hover animate-fade-in-up cursor-pointer ${branch.active ? 'border-[#D0D8E4]' : 'border-dashed border-[#D0D8E4]'}`}
              style={{ animationDelay: `${i * 0.15}s` }}
              onClick={() => setActiveBranch(branch)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg" style={{ backgroundColor: branch.color }}>
                  {branch.code}
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 rounded text-white" style={{ backgroundColor: branch.color }}>
                    {t(branch.labelKey)}
                  </span>
                  <h3 className="font-body font-semibold text-lg text-[#1E2A3E] mt-1">{t(branch.nameKey)}</h3>
                </div>
              </div>
              <p className="font-body text-sm font-medium mb-2" style={{ color: branch.color }}>{t(branch.locationKey)}</p>
              <p className="font-body text-[14px] text-[#5A6A7E] leading-relaxed mb-4">{branch.address}</p>
              {branch.active && (
                <div className="space-y-2 pt-4 border-t border-[#D0D8E4]/60">
                  <div className="flex items-center gap-2 text-[#5A6A7E]"><Phone size={14} style={{ color: branch.color }} /><span className="font-body text-sm">{branch.phone}</span></div>
                  <div className="flex items-center gap-2 text-[#5A6A7E]"><Mail size={14} style={{ color: branch.color }} /><span className="font-body text-sm">{branch.email}</span></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Branch Detail */}
        <div className="mt-10 bg-white border border-[#D0D8E4] rounded-2xl p-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-xl font-display font-bold" style={{ backgroundColor: activeBranch.color }}>
              {activeBranch.code}
            </div>
            <div className="flex-1">
              <span className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 rounded mb-2 inline-block text-white" style={{ backgroundColor: activeBranch.color }}>
                {t(activeBranch.labelKey)}
              </span>
              <h2 className="font-display font-bold text-xl text-[#1E2A3E] mt-1">{t(activeBranch.nameKey)}</h2>
              <p className="font-body text-[15px] text-[#5A6A7E] mt-1">{activeBranch.address}</p>
            </div>
            {activeBranch.active && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#5A6A7E]"><Phone size={14} className="text-[#0A5C8E]" /><span className="font-body text-sm">{activeBranch.phone}</span></div>
                <div className="flex items-center gap-2 text-[#5A6A7E]"><Mail size={14} className="text-[#0A5C8E]" /><span className="font-body text-sm">{activeBranch.email}</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
