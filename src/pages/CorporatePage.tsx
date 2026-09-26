import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { ShieldCheck, Users, Globe, Award, Building2, MapPin, Phone, Mail, Clock, Handshake, Lightbulb, Heart } from 'lucide-react';

const tabs = [
  { key: 'about', icon: <Building2 size={20} /> },
  { key: 'mission', icon: <Award size={20} /> },
  { key: 'vision', icon: <Globe size={20} /> },
  { key: 'branches', icon: <MapPin size={20} /> },
  { key: 'certificates', icon: <ShieldCheck size={20} /> },
  { key: 'team', icon: <Users size={20} /> },
];

const certificateData = [
  { name: 'GDP Certificate', desc: 'Good Distribution Practice compliance certificate from Turkish Ministry of Health.', year: '2023' },
  { name: 'ISO 9001:2015', desc: 'Quality Management System certification for pharmaceutical warehousing.', year: '2022' },
  { name: 'ISO 15378', desc: 'Primary packaging materials for medicinal products - GMP compliance.', year: '2023' },
  { name: 'Cold Chain Cert', desc: 'Certified 2-8°C cold chain management and monitoring systems.', year: '2024' },
];

/* SVG World Map - simplified coordinates for key locations */
function WorldMap() {
  return (
    <div className="w-full bg-[#F4F7FC] rounded-2xl overflow-hidden relative border border-[#D0D8E4]">
      <img src="/img-world-map.png" alt="CSC Global Locations - Türkiye, Azerbaijan, Kazakhstan" className="w-full h-auto" />
    </div>
  );
}

export default function CorporatePage() {
  const { language, t } = useTranslation();
  const [activeTab, setActiveTab] = useState('about');

  const branches = [
    {
      cityTr: 'İstanbul', cityEn: 'Istanbul', country: 'Türkiye',
      address: 'Kayabaşı Mah. Söğütözü Sokak, Başakşehir, İstanbul, Türkiye',
      phone: '+90 543 610 9008', email: 'info@csc-tr.com',
      status: 'active', statusTr: 'MERKEZ', statusEn: 'HEADQUARTERS',
      descTr: 'Ana depo, lojistik merkez ve yönetim ofisi. 15.000 palet kapasiteli A sınıfı depolama tesisi.', 
      descEn: 'Main warehouse, logistics center and management office. 15,000 pallet capacity Class A storage facility.',
    },
    {
      cityTr: 'Bakü', cityEn: 'Baku', country: 'Azerbaycan',
      address: 'BAKI ŞƏHƏRİ, BİNƏQƏDİ RAYONU, HƏMZƏ BABAŞOV KÜÇƏSİ, 9 MKR, EV 1, DƏNGƏ 1',
      phone: '+994 12 000 00 00', email: 'baku@csc-tr.com',
      status: 'active', statusTr: 'ŞUBE', statusEn: 'BRANCH',
      descTr: 'Azerbaycan, Gürcistan ve Dağlık Karabağ bölgesine tedarik merkezi. Soğuk depo ve 7/24 operasyon.',
      descEn: 'Supply center for Azerbaijan, Georgia and Karabakh region. Cold storage and 24/7 operations.',
    },
    {
      cityTr: 'Astana', cityEn: 'Astana', country: 'Kazakistan',
      address: 'Kazakhstan, Astana (Planlanan)',
      phone: '-', email: 'astana@csc-tr.com',
      status: 'planned', statusTr: 'YAKINDA', statusEn: 'COMING SOON',
      descTr: '2027 yılında faaliyete geçmesi planlanan şube. Orta Asya bölge merkezi olacak.',
      descEn: 'Planned to be operational in 2027. Will serve as the Central Asia regional hub.',
    },
  ];

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-[#1E2A3E] leading-tight mt-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
            {t('corporate.title')}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[600px] mx-auto">
            {t('corporate.subtitle')}
          </p>
        </div>

        {/* World Map */}
        <div className="mb-10">
          <WorldMap />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 font-body font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-[#0A5C8E] text-white shadow-lg shadow-[#0A5C8E]/25'
                  : 'bg-white text-[#5A6A7E] border border-[#D0D8E4] hover:border-[#0A5C8E] hover:text-[#0A5C8E]'
              }`}
            >
              {tab.icon}
              {t(`corporate.tab.${tab.key}`)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white border border-[#D0D8E4] rounded-2xl p-8 md:p-12 animate-fade-in-up">
          
          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificateData.map((cert, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#F4F7FC] rounded-xl border border-[#D0D8E4]/50 hover:border-[#0A5C8E] transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-[#0A5C8E]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={22} className="text-[#0A5C8E]" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-[#1E2A3E] mb-1">{cert.name}</h3>
                    <p className="font-body text-sm text-[#5A6A7E] leading-relaxed mb-2">{cert.desc}</p>
                    <span className="font-mono text-xs text-[#00A86B] bg-[#00A86B]/10 px-2 py-0.5 rounded">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Branches Tab */}
          {activeTab === 'branches' && (
            <div className="space-y-6">
              {branches.map((branch, i) => (
                <div key={i} className={`p-6 rounded-xl border transition-colors ${
                  branch.status === 'active' 
                    ? 'bg-[#F4F7FC] border-[#D0D8E4]/50' 
                    : 'bg-white border-dashed border-[#D0D8E4] opacity-80'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      branch.status === 'active' ? 'bg-[#0A5C8E]' : 'bg-[#2C9CD4]/30'
                    }`}>
                      <MapPin size={24} className={branch.status === 'active' ? 'text-white' : 'text-[#2C9CD4]'} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-body font-semibold text-lg text-[#1E2A3E]">
                          {branch.status === 'planned' ? '📍 ' : ''}
                          {language === 'en' ? branch.cityEn : branch.cityTr}, {branch.country}
                        </h3>
                        <span className={`font-mono text-[10px] uppercase px-2.5 py-1 rounded ${
                          branch.status === 'active' 
                            ? 'bg-[#00A86B] text-white' 
                            : 'bg-[#2C9CD4]/20 text-[#2C9CD4]'
                        }`}>
                          {language === 'en' ? branch.statusEn : branch.statusTr}
                        </span>
                      </div>
                      <p className="font-body text-sm text-[#5A6A7E] mb-2">{language === 'en' ? branch.descEn : branch.descTr}</p>
                      <div className="flex flex-wrap gap-3 text-[#5A6A7E]">
                        <span className="flex items-center gap-1 font-body text-xs">
                          <MapPin size={12} /> {branch.address}
                        </span>
                        {branch.phone !== '-' && (
                          <span className="flex items-center gap-1 font-body text-xs">
                            <Phone size={12} /> {branch.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1 font-body text-xs">
                          <Mail size={12} /> {branch.email}
                        </span>
                      </div>
                    </div>
                    {branch.status === 'planned' && (
                      <div className="flex items-center gap-2 text-[#2C9CD4]">
                        <Clock size={16} />
                        <span className="font-body text-sm">2027</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* About tab - Our Values */}
          {activeTab === 'about' && (
            <div className="space-y-8">
              {/* Our Values */}
              <div>
                <h2 className="font-display font-bold text-2xl text-[#1E2A3E] mb-3">
                  {t('about.values.title')}
                </h2>
                <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-3">
                  {t('about.values.year')}
                </p>
                <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-3">
                  {t('about.values.intro')}
                </p>
                <p className="font-body text-[15px] text-[#5A6A7E] leading-relaxed mb-6">
                  {t('about.values.gear')}
                </p>

                {/* Three Pillars */}
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Clients */}
                  <div className="bg-[#F4F7FC] rounded-xl border border-[#D0D8E4]/50 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0A5C8E] to-[#0D7ABF] flex items-center justify-center">
                        <Handshake size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-body font-bold text-[#1E2A3E]">{t('corporate.clients.title')}</h3>
                        <p className="font-body text-xs font-semibold text-[#0A5C8E]">{t('corporate.clients.slogan')}</p>
                      </div>
                    </div>
                    <div className="space-y-2 font-body text-sm text-[#5A6A7E] leading-relaxed">
                      {t('corporate.clients.desc').split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="bg-[#F4F7FC] rounded-xl border border-[#D0D8E4]/50 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4A90C6] to-[#5BA3D9] flex items-center justify-center">
                        <Lightbulb size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-body font-bold text-[#1E2A3E]">{t('corporate.solutions.title')}</h3>
                        <p className="font-body text-xs font-semibold text-[#4A90C6]">{t('corporate.solutions.slogan')}</p>
                      </div>
                    </div>
                    <div className="space-y-2 font-body text-sm text-[#5A6A7E] leading-relaxed">
                      {t('corporate.solutions.desc').split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Care */}
                  <div className="bg-[#F4F7FC] rounded-xl border border-[#D0D8E4]/50 p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B7F9E] to-[#7D93B3] flex items-center justify-center">
                        <Heart size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-body font-bold text-[#1E2A3E]">{t('corporate.care.title')}</h3>
                        <p className="font-body text-xs font-semibold text-[#6B7F9E]">{t('corporate.care.slogan')}</p>
                      </div>
                    </div>
                    <div className="space-y-2 font-body text-sm text-[#5A6A7E] leading-relaxed">
                      {t('corporate.care.desc').split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other default content tabs */}
          {activeTab !== 'about' && activeTab !== 'certificates' && activeTab !== 'branches' && (
            <>
              <h2 className="font-display font-bold text-2xl text-[#1E2A3E] mb-4">
                {t(`corporate.${activeTab}.title`)}
              </h2>
              <p className="font-body text-[16px] text-[#5A6A7E] leading-relaxed max-w-[720px]">
                {t(`corporate.${activeTab}.body`)}
              </p>
              {activeTab === 'team' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  {[
                    { roleTr: 'Genel Müdür', roleEn: 'General Manager', name: 'TBD' },
                    { roleTr: 'Eczacı Mesul Müdür', roleEn: 'Responsible Pharmacist', name: 'TBD' },
                    { roleTr: 'Lojistik Direktörü', roleEn: 'Logistics Director', name: 'TBD' },
                  ].map((member, i) => (
                    <div key={i} className="text-center p-6 bg-[#F4F7FC] rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-[#0A5C8E]/10 flex items-center justify-center mx-auto mb-3">
                        <Users size={24} className="text-[#0A5C8E]" />
                      </div>
                      <h4 className="font-body font-semibold text-[#1E2A3E]">{member.name}</h4>
                      <p className="font-body text-sm text-[#5A6A7E]">{language === 'en' ? member.roleEn : member.roleTr}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
