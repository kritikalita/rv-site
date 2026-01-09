import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Stories from './pages/Stories';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PageTransition from './components/layout/PageTransition';

// Hooks
import useSmoothScroll from './hooks/useSmoothScroll';

// Helper component to fix the scroll on reload/navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // This handles the hard refresh scroll reset
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  useSmoothScroll();

  useEffect(() => {
    // Handle Hash Scrolling with a delay for page animations
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const executeCleanScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; 
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      const timer = setTimeout(executeCleanScroll, 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    /* flex-grow is critical here! It tells the main content area 
       to take up all available vertical space, pushing the footer down.
    */
    <main className="flex-grow relative">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/capabilities" element={<PageTransition><Capabilities /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* min-h-screen + flex-col ensures the body is always at least 
          as tall as the window, preventing the scroll-lock bug.
      */}
      <div className="flex flex-col min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-blue selection:text-brand-text">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;