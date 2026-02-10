import React from 'react';
import { motion } from 'framer-motion';
import { TbTarget, TbSettingsAutomation, TbArrowRight, TbAccessPoint, TbMicroscope } from "react-icons/tb";

const CapabilitiesHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#010816] overflow-hidden pt-20 md:pt-0">
      
      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src="src/assets/logos/cap-hero.png" 
          alt="Advanced Manufacturing" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-transparent to-[#010816]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#010816]/80" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: TEXT CORE */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-mono font-bold tracking-[0.4em] uppercase text-[10px] 2xl:text-xs">
                Facility Intelligence
              </span>
            </motion.div>

            {/* Typography Scaling: 
                text-5xl (Mobile) -> 7xl (iPad) -> 8xl (Laptop) -> 10rem (2xl) 
            */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl md:text-8xl 2xl:text-[10rem] font-black text-white tracking-tighter leading-[0.85] uppercase mb-8"
            >
              Vertical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-400 to-white">
                Integration.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <button className="group relative flex items-center gap-4 bg-brand-blue text-white px-8 py-4 2xl:px-12 2xl:py-6 font-black uppercase text-[10px] 2xl:text-xs tracking-[0.3em] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Technical Portfolio <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 font-black uppercase text-[10px] 2xl:text-xs tracking-[0.3em]">
                  View Infrastructure
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT: INTERACTIVE TELEMETRY 
              h-[350px] (Mobile) -> h-[500px] (Laptop) -> h-[700px] (2xl)
          */}
          <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[500px] 2xl:h-[700px] flex items-center justify-center">
            
            {/* CENTRAL LOCK-ON UI - Responsive Scaling */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 2xl:w-96 2xl:h-96 border border-brand-blue/20 rounded-full flex items-center justify-center">
               <div className="absolute inset-0 border border-brand-blue/10 rounded-full animate-spin-slow" />
               <div className="absolute inset-4 2xl:inset-8 border-t-2 border-brand-blue/40 rounded-full animate-spin" />
               <TbTarget className="text-brand-blue animate-pulse w-10 h-10 sm:w-16 sm:h-16 2xl:w-24 2xl:h-24" />
            </div>

            {/* FLOATING DATA NODES - Adjusted Positions for Mobile/2xl */}
            <TelemetryNode 
              icon={<TbSettingsAutomation />} 
              label="5-Axis Precision" 
              value="± 0.001mm" 
              pos="top-0 -left-4 sm:-left-10 lg:-left-10" 
              delay={0.6}
            />
            <TelemetryNode 
              icon={<TbMicroscope />} 
              label="Quality Check" 
              value="CMM Monitored" 
              pos="bottom-4 -right-2 sm:-right-4 lg:-right-4" 
              delay={0.8}
            />
            <TelemetryNode 
              icon={<TbAccessPoint />} 
              label="Live Sync" 
              value="Industry 4.0" 
              pos="top-10 -right-4 sm:-right-10 lg:-right-20" 
              delay={1.0}
            />

          </div>
        </div>
      </div>

      {/* FOOTER TICKER */}
      <div className="absolute bottom-0 w-full bg-brand-blue/5 border-t border-white/5 py-3 2xl:py-5 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 md:gap-20 text-[8px] md:text-[9px] 2xl:text-xs font-mono font-bold text-blue-300/40 uppercase tracking-[0.4em] md:tracking-[0.5em]"
        >
          <span>System_Status: Optimal</span>
          <span>Location: Kurmalguda_Unit_I</span>
          <span>Cert_Registry: AS9100D_Verified</span>
          <span>Output: Flight_Critical_Assemblies</span>
          <span>Sync_Encryption: Enabled</span>
          {/* Duplicate for seamless loop */}
          <span>System_Status: Optimal</span>
          <span>Location: Kurmalguda_Unit_I</span>
          <span>Cert_Registry: AS9100D_Verified</span>
        </motion.div>
      </div>
    </section>
  );
};

const TelemetryNode = ({ icon, label, value, pos, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6 }}
    className={`absolute ${pos} group cursor-crosshair z-30`}
  >
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-3 sm:p-4 2xl:p-6 rounded-sm flex items-center gap-3 sm:gap-4 hover:border-brand-blue transition-all shadow-2xl">
      <div className="text-brand-blue text-lg sm:text-xl 2xl:text-3xl group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <div className="text-[7px] sm:text-[8px] 2xl:text-[10px] text-slate-500 font-bold uppercase tracking-widest">{label}</div>
        <div className="text-white text-[9px] sm:text-[10px] 2xl:text-sm font-black font-mono uppercase">{value}</div>
      </div>
    </div>
    {/* Connection Line - Hidden on very small mobile to save space */}
    <div className="hidden sm:block h-[1px] w-8 lg:w-12 bg-gradient-to-r from-brand-blue to-transparent absolute top-1/2 -right-8 lg:-right-12 opacity-40" />
  </motion.div>
);

export default CapabilitiesHero;