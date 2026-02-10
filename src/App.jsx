import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'; 
import { AnimatePresence } from 'framer-motion';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Stories from './pages/Stories';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import JobSearchResults from './pages/JobSearchResults'; 

// Common Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import PageTransition from './components/layout/PageTransition';

// Hooks
import useSmoothScroll from './hooks/useSmoothScroll';

const ProtectedAdmin = ({ children }) => {
  const isAuthenticated = localStorage.getItem('rv_admin_auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin-login" replace />;
};

const AppContent = () => {
  const location = useLocation();
  useSmoothScroll();

  // Condition to detect Admin pages
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

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
    <div className="relative min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-blue selection:text-brand-text">
      {/* 1. Navbar only appears on public pages */}
      {!isAdminPage && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/capabilities" element={<PageTransition><Capabilities /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Stories /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="/careers/search" element={<PageTransition><JobSearchResults /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route 
            path="/admin-control-hq" 
            element={
              <ProtectedAdmin>
                <PageTransition><AdminDashboard /></PageTransition>
              </ProtectedAdmin>
            } 
          />
        </Routes>
      </AnimatePresence>

      {/* 2. Footer only appears on public pages */}
      {!isAdminPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;