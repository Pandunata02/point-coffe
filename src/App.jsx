import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import BranchesPage from './pages/BranchesPage';
import ReservationPage from './pages/ReservationPage';
import PartnershipPage from './pages/PartnershipPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <Router>
      <ParallaxProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-sand">
          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cerita-kami" element={<StoryPage />} />
              <Route path="/cabang-menu" element={<BranchesPage />} />
              <Route path="/reservasi" element={<ReservationPage />} />
              <Route path="/partnership" element={<PartnershipPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;

