import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCircleFilled, TbDatabase, TbArrowRight, TbX, TbSettings } from "react-icons/tb";
import { capabilitiesData } from '../../pages/capabilitiesData';

const CapabilitiesGrid = () => {
  const [active, setActive] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section 
      id="services-grid" 
      className="py-24 bg-white relative border-t border-brand-border overflow-visible"
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Manufacturing Audit</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Core <span className="text-brand-blue">Verticals.</span>
            </h2>
          </div>
        </div>

        {/* 1. SELECTOR GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {capabilitiesData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => { setActive(i); setIsSidebarOpen(false); }}
              className={`group relative p-4 border transition-all duration-500 rounded-sm text-left overflow-hidden
                ${active === i 
                  ? 'bg-brand-blue border-brand-blue shadow-[0_0_20px_rgba(0,71,171,0.3)]' 
                  : 'bg-white border-brand-border hover:border-brand-blue/50'}`}
            >
              <div className="flex flex-col justify-between h-full relative z-10">
                <item.icon size={20} className={`mb-4 ${active === i ? 'text-white' : 'text-brand-blue'}`} />
                <span className={`text-[10px] font-black uppercase tracking-tighter leading-tight
                  ${active === i ? 'text-white' : 'text-brand-dark'}`}>
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 2. INTELLIGENCE DOSSIER */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative bg-[#010816] border border-white/10 rounded-sm overflow-hidden min-h-[550px] grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
            >
              {/* IMAGE BACKGROUND */}
              <div className="absolute inset-0 z-0">
                 <img src={capabilitiesData[active].image} className="w-full h-full object-cover grayscale opacity-50 transition-opacity duration-700" alt={capabilitiesData[active].title} />
                 <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 20%, #010816 100%)', opacity: 0.7 }} />
                 <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
              </div>

              {/* CONTENT LEFT */}
              <div className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between relative z-10">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/30 shadow-[0_0_15px_#0047AB] animate-scan" />
                 <div>
                    <div className="flex items-center gap-3 mb-6">
                      <TbCircleFilled className="text-brand-blue text-[6px] animate-pulse" />
                      <span className="text-brand-blue font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Unit_Telemetry // {capabilitiesData[active].tag}</span>
                    </div>
                    <h3 className="text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                      {capabilitiesData[active].title} <br/> <span className="text-brand-blue/80">Readiness.</span>
                    </h3>
                    <p className="text-white text-xl leading-relaxed mb-10 border-l-4 border-brand-blue pl-8 italic max-w-xl drop-shadow-md">
                      "{capabilitiesData[active].desc}"
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {capabilitiesData[active].specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="bg-brand-dark/80 backdrop-blur-md border border-white/20 px-4 py-2">
                          <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest">{spec}</span>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* THE TRIGGER BUTTON */}
                 <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="mt-12 flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-[0.4em] group/btn hover:text-brand-blue transition-colors"
                 >
                    Read Technical Deep-Dive <TbArrowRight className="group-hover/btn:translate-x-2 transition-transform text-brand-blue" />
                 </button>
              </div>

              {/* CONTENT RIGHT */}
              <div className="lg:col-span-5 bg-brand-dark/40 backdrop-blur-xl border-l border-white/10 p-10 lg:p-14 relative z-10">
                 <div className="flex items-center gap-2 mb-10">
                    <TbDatabase className="text-brand-blue" size={14} />
                    <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest">Authorized_Infrastructure</span>
                 </div>
                 <div className="space-y-8">
                    {capabilitiesData[active].infra.map((asset, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                         <span className="text-sm font-bold text-white uppercase tracking-tight transition-colors hover:text-brand-blue">{asset}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 3. THE "READ MORE" SIDEBAR OVERLAY */}
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                {/* Backdrop Click-off */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm z-40 cursor-zoom-out"
                />
                {/* Sidebar Panel */}
                <motion.div 
                  initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-white z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.2)] p-12 overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                      <TbSettings className="text-brand-blue animate-spin-slow" size={24} />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Technical_Specification_V.25</span>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 transition-colors">
                      <TbX size={24} className="text-brand-dark" />
                    </button>
                  </div>

                  <h4 className="text-4xl font-black text-brand-dark uppercase tracking-tighter mb-6">
                    {capabilitiesData[active].title} <span className="text-brand-blue">Analysis</span>
                  </h4>
                  <div className="h-1 w-20 bg-brand-blue mb-10" />

                  <p className="text-slate-600 text-lg leading-relaxed mb-12">
                    {capabilitiesData[active].longDesc || "Full technical documentation available upon authorized request. This division maintains strict adherence to AS9100 quality standards and Nadcap processing protocols."}
                  </p>

                  <h5 className="text-xs font-black text-brand-dark uppercase tracking-widest mb-6">Extended Capability Matrix</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {capabilitiesData[active].specs.map((s, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100">
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                        <span className="text-xs font-bold text-slate-700 uppercase">{s}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-brand-dark text-white rounded-sm">
                    <p className="text-[10px] font-mono text-brand-blue mb-4 tracking-widest uppercase italic">// Security_Protocol_Active</p>
                    <p className="text-sm font-medium mb-6">Ready to discuss these specifications for your specific project requirements?</p>
                    <button className="w-full py-4 bg-brand-blue text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-brand-blue transition-all border border-brand-blue">
                      Request Technical Consultation
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;