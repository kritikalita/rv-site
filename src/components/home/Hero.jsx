import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#010816]">
      
      {/* 1. THE ATMOSPHERE LAYER (Premium Secret) 
          A subtle film grain/noise overlay that makes the background video feel high-end.
      */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.05]" // Subtle zoom for immersion
        >
          <source src="/homeHero.mp4" type="video/mp4" />
          <img src="/homeHero.png" alt="Aerospace Manufacturing" className="w-full h-full object-cover opacity-50" />
        </video>
        
        {/* THE MASK: Deep contrast for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#010816]/80 via-transparent to-[#010816] md:bg-gradient-to-r md:from-[#010816] md:via-[#010816]/20 md:to-transparent z-10" />
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="relative z-20 h-full max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        
        <div className="max-w-full md:max-w-4xl lg:max-w-5xl 2xl:max-w-full">
          
          {/* MAIN TYPOGRAPHY - SpaceX/RTX Grade 
              Using 'tracking-tighter' for that ultra-compressed professional look.
          */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl 2xl:text-[12rem] font-black text-white tracking-[-0.05em] leading-[0.85] uppercase"
          >
            Creating value <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-400 to-white pr-4"
            >
              with precision.
            </motion.span>
          </motion.h1>

          {/* SUBTLE SUBTEXT (Optional but adds 'scale') */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 text-white font-mono text-[9px] md:text-[11px] uppercase tracking-[0.6em] max-w-xl"
          >
            Manufacturing and Engineering Solutions
          </motion.p>
        </div>
      </div>

    </section>
  );
};

export default Hero;