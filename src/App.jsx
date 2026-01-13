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

// Wrapper component to handle Hash Scrolling and Page Transitions
const AppContent = () => {
  const location = useLocation();
  useSmoothScroll();

  useEffect(() => {
    // 1. If we are moving to a new page, immediately lock to top
    // This prevents the "falling to the bottom" during the exit animation
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      const executeCleanScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100; // Navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          // Perform the scroll
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      // We use a slightly longer timeout (800ms) to ensure the 
      // previous page is GONE and the new page is FIXED in height.
      const timer = setTimeout(executeCleanScroll, 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
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
  );
};

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-blue selection:text-brand-text">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;




