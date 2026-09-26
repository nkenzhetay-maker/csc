import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="relative min-h-[100dvh]">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
