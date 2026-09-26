import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import { MessageCircle, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.contact-animate');

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === section)
        .forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-ice-bg py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
        <span className="contact-animate font-mono text-xs tracking-[2px] text-primary-blue block">
</span>
        <h2
          className="contact-animate font-display font-bold text-dark-text leading-tight mt-4"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          {t('contact.title')}
        </h2>
        <p className="contact-animate font-body text-[17px] text-muted-text mt-3 max-w-[560px] mx-auto">
          {t('contact.subtitle')}
        </p>

        {/* Dual Location Cards */}
        <div className="contact-animate flex flex-col md:flex-row gap-6 justify-center mt-12">
          {/* CSC AZ - Baku */}
          <div className="bg-white border border-border-subtle rounded-[16px] p-9 max-w-[380px] text-left">
            <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-body font-bold text-sm">AZ</span>
            </div>
            <h3 className="font-body font-semibold text-lg text-dark-text mt-4">
              {t('contact.az.title')}
            </h3>
            <p className="font-body text-[15px] text-muted-text leading-relaxed mt-2">
              {t('contact.az.address')}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="font-medium text-sm text-primary-blue">
                {t('contact.email')}
              </span>
              <span className="font-medium text-sm text-primary-blue">
                {t('contact.web')}
              </span>
            </div>
          </div>

          {/* CSC TR - Istanbul */}
          <div className="bg-white border border-border-subtle rounded-[16px] p-9 max-w-[380px] text-left">
            <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
              <span className="text-white font-body font-bold text-sm">TR</span>
            </div>
            <h3 className="font-body font-semibold text-lg text-dark-text mt-4">
              {t('contact.tr.title')}
            </h3>
            <p className="font-body text-[15px] text-muted-text leading-relaxed mt-2">
              {t('contact.tr.address')}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="font-medium text-sm text-primary-blue">
                {t('contact.email')}
              </span>
              <span className="font-medium text-sm text-primary-blue">
                {t('contact.web')}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="contact-animate flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="https://wa.me/994000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pharma-green text-white font-body font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-[#1B5E1F] hover:scale-[1.02] transition-all duration-200"
          >
            <MessageCircle size={20} />
            {t('contact.whatsapp.btn')}
          </a>
          <a
            href="mailto:info@csc-tr.com"
            className="inline-flex items-center gap-2 border-[1.5px] border-border-subtle text-dark-text font-body font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-all duration-200"
          >
            <Mail size={20} />
            {t('contact.emailbtn')}
          </a>
        </div>

        {/* Note */}
        <p className="contact-animate font-body text-sm text-muted-text mt-7">
          {t('contact.note')}
        </p>
      </div>
    </section>
  );
}
