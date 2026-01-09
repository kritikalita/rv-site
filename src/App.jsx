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

// 1. IMPROVED Scroll Management Component
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (like #about-section), snap to top immediately
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  
  // NOTE: If scrolling is still locked after this fix, 
  // try commenting out useSmoothScroll() temporarily to test.
  useSmoothScroll();

  return (
    /* 2. THE FIX: min-h-screen here prevents the page from 
       collapsing to 0px during Framer Motion transitions */
    <main className="flex-grow relative min-h-screen">
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
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
      <ScrollManager />
      {/* 3. Layout Wrapper: Flex-col + min-h-screen keeps footer at bottom */}
      <div className="flex flex-col min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-blue selection:text-brand-text">
        <Navbar />
        <AppContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;