import React from 'react';
import { motion } from 'framer-motion';
import { TbTarget, TbSettingsAutomation, TbGizmo, TbArrowRight, TbAccessPoint, TbMicroscope } from "react-icons/tb";

const CapabilitiesHero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#010816] overflow-hidden pt-20">
      
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: TEXT CORE (Taking up 7/12 columns) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-mono font-bold tracking-[0.4em] uppercase text-[10px]">
                Facility Intelligence
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] uppercase mb-8"
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
              className="flex flex-wrap gap-4"
            >
              <button className="group relative flex items-center gap-4 bg-brand-blue text-white px-8 py-4 font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Dossier <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 font-black uppercase text-[10px] tracking-[0.3em]">
                  View Infrastructure
                </span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT: INTERACTIVE TELEMETRY (Taking up 5/12 columns) */}
          <div className="lg:col-span-5 relative h-[400px] flex items-center justify-center">
            
            {/* CENTRAL LOCK-ON UI */}
            <div className="relative w-64 h-64 border border-brand-blue/20 rounded-full flex items-center justify-center">
               <div className="absolute inset-0 border border-brand-blue/10 rounded-full animate-spin-slow" />
               <div className="absolute inset-4 border-t-2 border-brand-blue/40 rounded-full animate-spin" />
               <TbTarget className="text-brand-blue animate-pulse" size={60} />
            </div>

            {/* FLOATING DATA NODES */}
            <TelemetryNode 
              icon={<TbSettingsAutomation />} 
              label="5-Axis Precision" 
              value="± 0.001mm" 
              pos="top-0 -left-10" 
              delay={0.6}
            />
            <TelemetryNode 
              icon={<TbMicroscope />} 
              label="Quality Check" 
              value="CMM Monitored" 
              pos="bottom-10 -right-4" 
              delay={0.8}
            />
            <TelemetryNode 
              icon={<TbAccessPoint />} 
              label="Live Sync" 
              value="Industry 4.0" 
              pos="top-20 -right-20" 
              delay={1.0}
            />

          </div>
        </div>
      </div>

      {/* FOOTER TICKER: Dynamic System Status */}
      <div className="absolute bottom-0 w-full bg-brand-blue/5 border-t border-white/5 py-3 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 text-[9px] font-mono font-bold text-blue-300/40 uppercase tracking-[0.5em]"
        >
          <span>System_Status: Optimal</span>
          <span>Location: Kurmalguda_Unit_I</span>
          <span>Cert_Registry: AS9100D_Verified</span>
          <span>Output: Flight_Critical_Assemblies</span>
          <span>Sync_Encryption: Enabled</span>
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
    className={`absolute ${pos} group cursor-crosshair`}
  >
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-sm flex items-center gap-4 hover:border-brand-blue transition-all">
      <div className="text-brand-blue text-xl group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <div className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{label}</div>
        <div className="text-white text-[10px] font-black font-mono uppercase">{value}</div>
      </div>
    </div>
    {/* Connection Line */}
    <div className="h-[1px] w-12 bg-gradient-to-r from-brand-blue to-transparent absolute top-1/2 -right-12 opacity-40" />
  </motion.div>
);

export default CapabilitiesHero;