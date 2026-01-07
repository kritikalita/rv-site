import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] bg-brand-dark flex flex-col lg:flex-row items-center overflow-hidden">
      
      {/* LEFT: Text Content */}
      <div className="w-full lg:w-1/2 p-10 md:p-20 relative z-20 flex flex-col justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-[2px] bg-brand-blue" />
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            Our Legacy
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]"
        >
          Built on <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
            Precision.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed max-w-lg mb-12"
        >
          From a humble machine shop to a global aerospace partner, our journey is defined by one metric: <strong>Zero Error.</strong>
        </motion.p>
      </div>

      {/* RIGHT: Immersive Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative">
        <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-brand-dark z-10" />
        
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          src="/logos/introHome.png" 
          className="w-full h-full object-cover"
          alt="Aerospace Manufacturing"
        />
      </div>

    </section>
  );
};

export default AboutHero;