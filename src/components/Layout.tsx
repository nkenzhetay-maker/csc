import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ScrollToTop from './ScrollToTop';
import RouteSEO from './RouteSEO';

export default function Layout() {
  return (
    <div className="relative min-h-[100dvh]">
      <ScrollToTop />
      <RouteSEO />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
