import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowDown, HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* 1. Background Image with "Light-Tech" Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/logos/homeHero.png" 
          alt="Advanced Manufacturing" 
          className="w-full h-full object-cover"
        />
        {/* The Overlay: Dark at bottom for text contrast, but light/clean feel overall */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/40 to-transparent" />
      </div>

      {/* 2. Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Animated Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-blue" />
            
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Creating value<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
              with precision.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10 border-l-2 border-brand-blue pl-6"
          >
            Raghu Vamsi manufactures the critical components that power global aerospace and defence. We engineer trust into every micron.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-brand-blue text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center gap-2 group">
              Explore Capabilities
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm">
              Get a Quote
            </button>
          </motion.div>

        </div>
      </div>

      {/* 3. Tech Decor Elements */}
      <div className="absolute bottom-0 right-0 p-10 hidden md:block">
        <div className="grid grid-cols-3 gap-2 opacity-50">
           {[...Array(9)].map((_, i) => (
             <div key={i} className="w-2 h-2 bg-white rounded-full" />
           ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;