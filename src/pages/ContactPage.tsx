import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { MessageCircle, Mail, MapPin, Globe, Send } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', surname: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-24 pb-16 min-h-[100dvh] bg-[#F4F7FC]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display font-bold text-[#1E2A3E] leading-tight mt-3"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            {t('contact.title')}
          </h1>
          <p className="font-body text-[17px] text-[#5A6A7E] mt-3 max-w-[560px] mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white border border-[#D0D8E4] rounded-2xl p-8">
            <h2 className="font-body font-semibold text-lg text-[#1E2A3E] mb-6">
              {t('contact.form.submit')}
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[#00A86B]/10 rounded-full flex items-center justify-center mb-4">
                  <Send size={28} className="text-[#00A86B]" />
                </div>
                <h3 className="font-body font-semibold text-lg text-[#1E2A3E] mb-2">
                  {t('contact.form.success')}
                </h3>
                <p className="font-body text-sm text-[#5A6A7E]">
                  We will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm text-[#5A6A7E] mb-1.5">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full font-body text-[15px] text-[#1E2A3E] bg-[#F4F7FC] border border-[#D0D8E4] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A5C8E] focus:ring-1 focus:ring-[#0A5C8E]/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-[#5A6A7E] mb-1.5">
                      {t('contact.form.surname')} *
                    </label>
                    <input
                      type="text"
                      name="surname"
                      required
                      value={formData.surname}
                      onChange={handleChange}
                      className="w-full font-body text-[15px] text-[#1E2A3E] bg-[#F4F7FC] border border-[#D0D8E4] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A5C8E] focus:ring-1 focus:ring-[#0A5C8E]/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-[#5A6A7E] mb-1.5">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full font-body text-[15px] text-[#1E2A3E] bg-[#F4F7FC] border border-[#D0D8E4] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A5C8E] focus:ring-1 focus:ring-[#0A5C8E]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-[#5A6A7E] mb-1.5">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full font-body text-[15px] text-[#1E2A3E] bg-[#F4F7FC] border border-[#D0D8E4] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A5C8E] focus:ring-1 focus:ring-[#0A5C8E]/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A5C8E] text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#084a73] hover:scale-[1.01] transition-all duration-200"
                >
                  <Send size={18} />
                  {t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* CSC-TR Card */}
            <div className="bg-white border border-[#D0D8E4] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0A5C8E] rounded-full flex items-center justify-center">
                  <span className="text-white font-body font-bold text-sm">TR</span>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[#1E2A3E]">{t('contact.tr.title')}</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-[#5A6A7E]">
                  <MapPin size={16} className="text-[#0A5C8E] mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">{t('contact.tr.address')}</span>
                </div>
                <div className="flex items-center gap-3 text-[#5A6A7E]">
                  <Mail size={16} className="text-[#0A5C8E] flex-shrink-0" />
                  <span className="font-body text-sm">{t('contact.email')}</span>
                </div>
                <div className="flex items-center gap-3 text-[#5A6A7E]">
                  <Globe size={16} className="text-[#0A5C8E] flex-shrink-0" />
                  <span className="font-body text-sm">{t('contact.web')}</span>
                </div>
              </div>
            </div>

            {/* CSC-AZ Card */}
            <div className="bg-white border border-[#D0D8E4] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#2C9CD4] rounded-full flex items-center justify-center">
                  <span className="text-white font-body font-bold text-sm">AZ</span>
                </div>
                <div>
                  <h3 className="font-body font-semibold text-[#1E2A3E]">{t('contact.az.title')}</h3>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-[#5A6A7E]">
                  <MapPin size={16} className="text-[#2C9CD4] mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">{t('contact.az.address')}</span>
                </div>
                <div className="flex items-center gap-3 text-[#5A6A7E]">
                  <Mail size={16} className="text-[#2C9CD4] flex-shrink-0" />
                  <span className="font-body text-sm">info@csc-az.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#5A6A7E]">
                  <Globe size={16} className="text-[#2C9CD4] flex-shrink-0" />
                  <span className="font-body text-sm">csc-az.com</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905436109008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#00A86B] text-white font-body font-semibold text-[15px] px-6 py-4 rounded-2xl hover:bg-[#008F5B] hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-[#00A86B]/20"
            >
              <MessageCircle size={22} />
              <div className="text-left">
                <div className="text-xs font-normal opacity-80">WhatsApp</div>
                <div>+90 543 610 90 08</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
