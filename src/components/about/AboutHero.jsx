import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* 1. FULL-SCREEN BACKGROUND IMAGE - Higher Opacity/Brightness */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/logos/introHome.png"
          /* Kept natural colors (removed grayscale) and boosted brightness */
          className="w-full h-full object-cover brightness-[0.9] opacity-100"
          alt="Aerospace Manufacturing"
        />
        
        {/* 2. THE DYNAMIC MASK: Dark on the left for text, transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/50 to-transparent z-10" />
      </div>

      {/* 3. FLOATING CONTENT OVERLAY */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[2px] bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
              ESTABLISHED 2004
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            /* Reverted to text-white for high contrast against the dark left-side mask */
            className="text-6xl md:text-8xl lg:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter"
          >
            Built on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-200 to-white pr-2">
              Precision.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <p className="text-blue-100/80 text-xl md:text-2xl leading-relaxed max-w-2xl border-l-4 border-brand-blue/50 pl-8 italic">
              "From a humble machine shop to a global aerospace partner, our
              journey is defined by one metric:{" "}
              <strong className="text-white">Creating Value with Precision.</strong>"
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4. HUD ELEMENTS: Reverted to white/low-opacity for the dark mask area */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-12 right-12 w-32 h-32 border-t-2 border-r-2 border-white/10" />
        
        <div className="absolute bottom-12 right-12 w-48 h-24 border-b-2 border-r-2 border-white/20 flex flex-col items-end justify-end p-4">
           <span className="text-[8px] font-mono text-white/40 tracking-[0.5em] uppercase">Our Excellence Our Pride</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;