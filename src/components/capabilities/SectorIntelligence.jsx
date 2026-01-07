import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCircleFilled, TbDatabase, TbArrowRight } from "react-icons/tb";
import { sectorData } from '../../pages/capabilitiesData';

const SectorIntelligence = () => {
  const [active, setActive] = useState(0);

  return (
    <section 
      id="sector-intelligence" // This must perfectly match your Link "to" prop
      className="py-24 bg-white relative border-t border-brand-border overflow-hidden"
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Strategic Domains</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Market <span className="text-brand-blue">Intelligence.</span>
            </h2>
          </div>
        </div>

        {/* 1. SECTOR SELECTOR GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {sectorData.map((sectorItem, i) => (
            <button
              key={sectorItem.id}
              onClick={() => setActive(i)}
              className={`group relative p-4 border transition-all duration-500 rounded-sm text-left overflow-hidden
                ${active === i 
                  ? 'bg-brand-blue border-brand-blue shadow-[0_0_20px_rgba(0,71,171,0.3)]' 
                  : 'bg-white border-brand-border hover:border-brand-blue/50'}`}
            >
              <div className="flex flex-col justify-between h-full relative z-10">
                <sectorItem.icon size={20} className={`mb-4 ${active === i ? 'text-white' : 'text-brand-blue'}`} />
                <span className={`text-[10px] font-black uppercase tracking-tighter leading-tight
                  ${active === i ? 'text-white' : 'text-brand-dark'}`}>
                  {sectorItem.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 2. INTELLIGENCE DOSSIER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative bg-[#010816] border border-white/10 rounded-sm overflow-hidden min-h-[500px] grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
          >
            {/* BACKGROUND IMAGE LAYER - UPDATED FOR VISIBILITY */}
            <div className="absolute inset-0 z-0">
               <img 
                 src={sectorData[active].image} 
                 className="w-full h-full object-cover grayscale opacity-50 transition-opacity duration-700" 
                 alt={sectorData[active].title} 
               />
               {/* LIGHTER GRADIENT: Allows more image to bleed through center */}
               <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, #010816 100%)', opacity: 0.7 }} />
               
               {/* BLUEPRINT GRID: Kept over image for technical feel */}
               <div className="absolute inset-0 opacity-30" 
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* LEFT CONTENT AREA */}
            <div className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between relative z-10">
               <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/30 shadow-[0_0_15px_#0047AB] animate-scan" />
               
               <div>
                  <div className="flex items-center gap-3 mb-6">
                    <TbCircleFilled className="text-brand-blue text-[6px] animate-pulse" />
                    <span className="text-brand-blue font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                       Dossier // {sectorData[active].id}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                    {sectorData[active].title} <br/> <span className="text-brand-blue/80">Readiness.</span>
                  </h3>
                  
                  <p className="text-white text-xl leading-relaxed mb-10 border-l-4 border-brand-blue pl-8 italic max-w-xl drop-shadow-md">
                    "{sectorData[active].intel}"
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {sectorData[active].metrics.map((m, idx) => (
                      <div key={idx} className="bg-brand-dark/80 backdrop-blur-md border border-white/20 px-4 py-2">
                        <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* RIGHT CONTENT AREA (Glassmorphism) */}
            <div className="lg:col-span-5 bg-brand-dark/40 backdrop-blur-xl border-l border-white/10 p-10 lg:p-14 relative z-10">
               <div className="flex items-center gap-2 mb-10">
                  <TbDatabase className="text-brand-blue" size={14} />
                  <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest">Vertical_Protocols</span>
               </div>
               
               <div className="space-y-8">
                  {sectorData[active].capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                       <span className="text-sm font-bold text-white uppercase tracking-tight transition-colors hover:text-brand-blue">
                          {cap}
                       </span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectorIntelligence;