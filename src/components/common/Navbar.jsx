import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Navbar Protocol: Scroll-to-Reveal Implementation
 * - Visible at top: Py-8, Transparent.
 * - Scrolling Down: Hidden (Translated Y -100%).
 * - Scrolling Up: Fixed, Opaque Gradient Background, Py-4.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const location = useLocation();

  const isLightPage = location.pathname === "/stories";

  // SCROLL DIRECTION LOGIC
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // At the very top
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling Down - Hide Protocol
        setIsVisible(false);
        setIsScrolled(true);
      } else {
        // Scrolling Up - Reveal Protocol
        setIsVisible(true);
        setIsScrolled(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/capabilities" },
    { name: "Stories", path: "/stories" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      /* Dynamic Visibility Classes */
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled || isOpen ? "py-4 shadow-2xl" : "py-8"}`}
    >
      {/* HUD Background: Changed to fully opaque when scrolled or menu open */}
      <AnimatePresence>
        {(isScrolled || isOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} /* Changed from 0.98 to 1 for full opacity */
            exit={{ opacity: 0 }}
            /* Removed backdrop-blur-xl for a solid technical look */
            className="absolute inset-0 bg-gradient-to-r from-[#022049] via-[#042b61] to-[#063677] z-[-1] border-b border-white/10"
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* BRAND IDENTITY */}
        <div className="flex items-center z-50 relative">
          <Link
            to="/"
            className="absolute top-1/2 -translate-y-1/2 left-0 group/logo"
          >
            <img
              src="/logo.png"
              alt="Raghu Vamsi"
              className={`h-16 md:h-28 w-auto object-contain transition-all duration-700 origin-left ${
                isLightPage && !isScrolled && !isOpen
                  ? "brightness-0"
                  : "brightness-0 invert"
              }`}
            />
          </Link>
          <div className="w-32 md:w-48 h-10" />
        </div>

        {/* DESKTOP COMMAND LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative group ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : isLightPage && !isScrolled
                        ? "text-brand-dark hover:text-blue-600"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-2 left-0 w-full h-[1px] bg-blue-400 transform origin-left transition-transform duration-500 ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE INTERFACE TRIGGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden z-50 p-2 transition-colors duration-300 ${
            isLightPage && !isScrolled && !isOpen
              ? "text-brand-dark"
              : "text-white"
          }`}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>

        {/* MOBILE SYSTEM PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-full md:w-80 bg-gradient-to-b from-[#022049] to-[#063677] shadow-2xl lg:hidden pt-32 pb-10 px-10 flex flex-col gap-8 z-40 border-l border-white/10"
            >
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className={`text-xl font-black uppercase tracking-[0.2em] flex items-center group ${
                      location.pathname === link.path
                        ? "text-blue-300"
                        : "text-white"
                    }`}
                  >
                    <span className="text-[9px] font-mono text-white/20 mr-4">
                      0{idx + 1}
                    </span>
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