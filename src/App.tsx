import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import IlacPage from './pages/products/IlacPage';
import GidaTakviyeleri from './pages/products/GidaTakviyeleri';
import TibbiSarfMalzemeleri from './pages/products/TibbiSarfMalzemeleri';
import HastaBebekBezleri from './pages/products/HastaBebekBezleri';
import TibbiCihazlar from './pages/products/TibbiCihazlar';
import TibbiTestler from './pages/products/TibbiTestler';
import ServicesPage from './pages/ServicesPage';
import BranchesPage from './pages/BranchesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CatalogPage from './pages/CatalogPage';
import CorporatePage from './pages/CorporatePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';
import KVKKPolicy from './pages/KVKKPolicy';

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/urunler/ilac" element={<IlacPage />} />
          <Route path="/urunler/gida-takviyeleri" element={<GidaTakviyeleri />} />
          <Route path="/urunler/tibbi-sarf-malzemeleri" element={<TibbiSarfMalzemeleri />} />
          <Route path="/urunler/hasta-bebek-bezleri" element={<HastaBebekBezleri />} />
          <Route path="/urunler/tibbi-cihazlar" element={<TibbiCihazlar />} />
          <Route path="/urunler/tibbi-testler" element={<TibbiTestler />} />
          <Route path="/hizmetler" element={<ServicesPage />} />
          <Route path="/subeler" element={<BranchesPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/katalog" element={<CatalogPage />} />
          <Route path="/kurumsal" element={<CorporatePage />} />
          <Route path="/gizlilik" element={<PrivacyPolicy />} />
          <Route path="/kullanim-sartlari" element={<TermsOfUse />} />
          <Route path="/cerez-politikasi" element={<CookiePolicy />} />
          <Route path="/kvkk" element={<KVKKPolicy />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
