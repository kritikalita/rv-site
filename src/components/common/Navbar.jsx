import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // CHANGE: Removed '/about' from this array so the navbar is transparent on the About Hero
  const needsDarkBg = [''].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/capabilities' },
    { name: 'Stories', path: '/stories' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen || needsDarkBg 
          ? 'py-2 shadow-2xl' 
          : 'bg-transparent py-4'
      }`}
    >
      {/* NEW GRADIENT BACKGROUND: Applied only when scrolled or open */}
      {(scrolled || isOpen || needsDarkBg) && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#022049] to-[#063677] opacity-95 backdrop-blur-md z-[-1]" />
      )}
      
      {/* Subtle Bottom Border for Technical Look */}
      {(scrolled || isOpen || needsDarkBg) && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-[-1]" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50 relative group/logo">
          <img 
            src="/logo.png" 
            alt="Raghu Vamsi" 
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert transition-all duration-500 scale-125 origin-left hover:scale-135" 
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors relative group ${
                    location.pathname === link.path ? 'text-blue-300' : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-50 p-2">
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-0 right-0 h-screen w-full md:w-80 bg-gradient-to-b from-[#022049] to-[#063677] shadow-2xl lg:hidden pt-32 pb-10 px-10 flex flex-col gap-8 z-40"
            >
              {/* Mobile Menu Blueprint Pattern Accent */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    to={link.path}
                    className={`text-xl font-black uppercase tracking-[0.2em] ${
                      location.pathname === link.path ? 'text-blue-300' : 'text-white'
                    }`}
                  >
                    <span className="text-[10px] font-mono text-white/30 mr-4">0{idx + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;