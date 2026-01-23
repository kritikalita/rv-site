import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';

const CareersHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-brand-dark overflow-hidden">
      
      {/* 1. BACKGROUND: Original Color Image */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Dark Gradient: Only at the bottom to protect text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-brand-dark/20 z-10" />
        
        <motion.img 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }} // Increased opacity to show original colors clearly
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="src/assets/images/careersHero.webp" 
          className="w-full h-full object-cover object-center"
          alt="Raghu Vamsi Engineering"
        />
      </div>

      {/* 2. CONTENT: Centralized Layout */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
        <div className="max-w-4xl mx-auto">
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]"
          >
            Engineer the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
              Extraordinary.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-medium drop-shadow-md"
          >
            At Raghu Vamsi, we don't just fill roles. We empower innovators to manufacture the critical hardware that defines the future of flight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="px-10 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-brand-blue transition-all shadow-2xl shadow-brand-blue/20 rounded-sm">
              View Open Positions
            </button>
            <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] group">
              Our Culture <HiArrowDown className="text-brand-blue group-hover:translate-y-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR: Minimalist Replacement for the Bottom Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-blue to-transparent" />
        </motion.div>
      </div>

    </section>
  );
};

export default CareersHero;