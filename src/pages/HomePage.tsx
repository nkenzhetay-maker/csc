import HeroSection from '../components/sections/HeroSection';
import TurkishFlagTransition from '../components/TurkishFlagTransition';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import ColdChainSection from '../components/sections/ColdChainSection';
import ProductCategories from '../components/ProductCategories';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import LogoMarquee from '../components/LogoMarquee';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TurkishFlagTransition />
      <StatsSection />
      <ColdChainSection />
      <ProductCategories />
      <LogoMarquee />
      <TrustSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
