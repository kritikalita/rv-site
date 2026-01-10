import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Force dark visibility on routes with white hero sections
  const needsDarkBg = ['/stories', '/contact', '/about'].includes(location.pathname);

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || isOpen || needsDarkBg 
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-1' 
          : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* src/components/common/Navbar.jsx */}

<Link to="/" className="flex items-center gap-2 z-50 relative group/logo">
  <img 
    src="/logo.png" 
    alt="Raghu Vamsi" 
    /* CHANGE: Added 'scale-125' to increase size by 25%.
       Added 'origin-left' so it grows outward from the left.
       Added 'hover:scale-150' for a interactive effect.
    */
    className="h-14 md:h-20 w-auto object-contain brightness-0 invert transition-transform duration-500 scale-125 origin-left hover:scale-135" 
  />
</Link>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors relative group ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-white hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-blue transform origin-left transition-transform duration-300 ${
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-brand-dark border-b border-brand-blue/20 shadow-2xl lg:hidden pt-24 pb-10 px-6 flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-bold uppercase tracking-widest ${
                    location.pathname === link.path ? 'text-brand-blue' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
             
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;