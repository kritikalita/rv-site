import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-dark">
      {/* 1. FULL-SCREEN BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/logos/introHome.png"
          /* Responsive brightness: Dimmer on mobile for text contrast */
          className="w-full h-full object-cover brightness-[0.7] md:brightness-[0.9]"
          alt="Aerospace Manufacturing"
        />
        
        {/* 2. DYNAMIC MASK: Vertical on mobile, Horizontal on desktop, Deepened for large screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/40 to-transparent md:bg-gradient-to-r md:from-brand-dark md:via-brand-dark/50 md:to-transparent 2xl:from-brand-dark 2xl:via-brand-dark/60 z-10" />
      </div>

      {/* 3. FLOATING CONTENT OVERLAY */}
      {/* max-w-[1440px] for laptops, 2xl:max-w-[1800px] for big screens */}
      <div className="relative z-20 h-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-full md:max-w-3xl lg:max-w-4xl 2xl:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8 2xl:mb-12"
          >
            <div className="w-8 md:w-12 h-[2px] bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[8px] md:text-[10px] 2xl:text-sm">
              ESTABLISHED 2004
            </span>
          </motion.div>

          {/* Tiered Typography:
              text-5xl: Mobile
              text-7xl: Tablet/iPad
              text-8xl: Laptop
              text-9xl/10rem: Big Screens
          */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] font-black text-white mb-6 md:mb-10 2xl:mb-16 leading-[0.9] tracking-tighter"
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
            <p className="text-blue-100/80 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl leading-relaxed max-w-2xl 2xl:max-w-4xl border-l-2 md:border-l-4 border-brand-blue/50 pl-5 md:pl-8 2xl:pl-12 italic mx-auto md:mx-0">
              "From a humble machine shop to a global aerospace partner, our
              journey is defined by one metric:{" "}
              <strong className="text-white">Creating Value with Precision.</strong>"
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4. HUD ELEMENTS: Hidden on mobile to avoid visual noise, scaled for big screens */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
        {/* Top Right Corner HUD */}
        <div className="absolute top-6 right-6 md:top-12 md:right-12 w-16 h-16 md:w-32 md:h-32 2xl:w-48 2xl:h-48 border-t-2 border-r-2 border-white/10 hidden sm:block" />
        
        {/* Bottom Right Label HUD */}
        <div className="absolute bottom-10 right-6 md:bottom-12 md:right-12 w-28 h-12 md:w-48 md:h-24 2xl:w-72 2xl:h-32 border-b-2 border-r-2 border-white/20 flex flex-col items-end justify-end p-2 md:p-4 hidden sm:flex">
           <span className="text-[5px] md:text-[8px] 2xl:text-[10px] font-mono text-white/40 tracking-[0.3em] md:tracking-[0.5em] 2xl:tracking-[0.6em] uppercase text-right">Our Excellence Our Pride</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;