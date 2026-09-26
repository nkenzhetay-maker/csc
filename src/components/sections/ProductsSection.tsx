import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from '../../contexts/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.product-animate');

    gsap.fromTo(
      elements,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
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

  const products = [
    {
      image: '/img-product-dialysis.jpg',
      title: t('product.dialysis.title'),
      description: t('product.dialysis.desc'),
      brands: t('product.dialysis.brands').split(','),
      badge: t('product.dialysis.badge'),
    },
    {
      image: '/img-product-supplies.jpg',
      title: t('product.supplies.title'),
      description: t('product.supplies.desc'),
      brands: t('product.supplies.brands').split(','),
    },
    {
      image: '/img-product-devices.jpg',
      title: t('product.devices.title'),
      description: t('product.devices.desc'),
      brands: t('product.devices.brands').split(','),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="w-full bg-white py-[100px]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="product-animate">
          <SectionHeader
titleKey="products.title"
            subtitleKey="products.subtitle"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {products.map((product, i) => (
            <div key={i} className="product-animate">
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                brands={product.brands}
                badge={product.badge}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
