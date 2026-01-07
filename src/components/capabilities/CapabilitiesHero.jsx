import React from 'react';
import { motion } from 'framer-motion';
import { TbCircleFilled, TbCompass, TbActivity, TbShieldCheck } from "react-icons/tb";

const CapabilitiesHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center bg-[#010816] overflow-hidden pt-20">
      
      {/* 1. BACKGROUND Dossier Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/logos/cap-hero.png" 
          alt="Advanced Manufacturing Dossier" 
          className="w-full h-full object-cover"
        />
        {/* Technical Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010816] via-[#010816]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-transparent to-transparent" />
      </div>

      {/* 2. UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-1 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }} 
      />

      {/* 3. CONTENT CORE */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Metadata Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
            <span className="text-brand-blue font-mono font-bold tracking-[0.4em] uppercase text-[10px]">
              Infrastructure Archive
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8"
          >
            Precision <br />
            <span className="text-brand-blue">Engineering</span> <br />
            At Scale.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl border-l border-brand-blue/40 pl-8 mb-12 italic"
          >
            "Integrating vertical manufacturing protocols with NADCAP-certified special processes to deliver flight-critical components for the world’s leading aerospace OEMs."
          </motion.p>
        </div>
      </div>

      {/* 4. HUD DECOR: Technical Sidebar */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent" />
        <span className="rotate-90 font-mono text-[8px] text-slate-500 uppercase tracking-[1em] whitespace-nowrap">
          SYSTEM_VERSION_4.2.0_REV_B
        </span>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent" />
      </div>

      {/* Bottom Scanning Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-blue/20 shadow-[0_0_20px_#0047AB] animate-scan" />
    </section>
  );
};

export default CapabilitiesHero;