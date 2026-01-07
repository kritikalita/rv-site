import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom'; 
import { TbRocket, TbPlane, TbActivity, TbFlame, TbServer, TbCircleFilled } from "react-icons/tb";

const industries = [
  { id: "01", name: "Aerospace", icon: TbPlane, image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop", desc: "Critical structural components and engine parts.", stat: "10k+ Components", tag: "MARKET_AERO" },
  { id: "02", name: "Robotics", icon: TbRocket, image: "https://images.unsplash.com/photo-1596328325608-4171804f5802?q=80&w=2070&auto=format&fit=crop", desc: "Mission-critical sub-systems for land, sea, and air.", stat: "Strategic Partner", tag: "MARKET_PROP" },
  { id: "03", name: "Space", icon: TbServer, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", desc: "High-precision hardware for launch vehicles.", stat: "ISRO Certified", tag: "MARKET_ORBIT" },
  { id: "04", name: "Oil & Gas", icon: TbFlame, image: "https://images.unsplash.com/photo-1516937941348-c09645f31e51?q=80&w=2070&auto=format&fit=crop", desc: "Robust valves and flow control systems.", stat: "API Compliant", tag: "MARKET_ENERGY" },
  { id: "05", name: "Power", icon: TbActivity, image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop", desc: "Advanced components for sustainable energy grids.", stat: "Grid Scale Tech", tag: "MARKET_POWER" },
  { id: "06", name: "Medical", icon: TbActivity, image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", desc: "Implants and surgical instrumentation.", stat: "ISO 13485", tag: "MARKET_HEALTH" },
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* UNIFORM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Market Expertise</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Industries We <span className="text-brand-blue">Serve.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Domain_Registry // Global <br />
              <span className="text-brand-blue font-mono text-[9px]">Mission_Critical_Impact</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[480px] gap-8">
          
          {/* LEFT LIST: Midnight-Navy Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div className="space-y-2">
              {industries.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveTab(index)}
                  className={`group relative p-5 cursor-pointer transition-all duration-500 border border-white/5 rounded-sm overflow-hidden
                    ${activeTab === index 
                      ? 'bg-[#010816] shadow-2xl border-brand-blue/30' 
                      : 'bg-transparent hover:bg-slate-50 border-transparent'
                    }`}
                >
                  {/* Active Indicator Line */}
                  {activeTab === index && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue shadow-[0_0_10px_#0047AB]"
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-[10px] transition-colors ${activeTab === index ? 'text-brand-blue font-bold' : 'text-slate-400'}`}>
                        {item.id}
                      </span>
                      <h3 className={`text-base font-bold uppercase tracking-tight transition-colors ${activeTab === index ? 'text-white' : 'text-slate-500'}`}>
                        {item.name}
                      </h3>
                    </div>
                    
                    <motion.div 
                      initial={false}
                      animate={{ opacity: activeTab === index ? 1 : 0, x: activeTab === index ? 0 : -10 }}
                    >
                      <HiArrowRight className="text-brand-blue" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
               {/* 2. Change <button> to <Link> and add the "to" prop */}
               <Link 
                to="/capabilities#sector-intelligence" 
                className="group relative flex items-center gap-6 bg-[#020617] text-white px-8 py-4 font-black uppercase tracking-[0.4em] text-[9px] hover:bg-brand-blue transition-all shadow-2xl overflow-hidden inline-flex"
               >
                <span className="relative z-10 flex items-center gap-3">
                  Case Studies <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
              </Link>
            </div>
          </div>

          {/* RIGHT PREVIEW: Dossier Image & Intel */}
          <div className="w-full lg:w-2/3 relative rounded-sm overflow-hidden h-[350px] lg:h-auto border border-white/5 shadow-2xl group/preview">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle at center, #1e40af 0%, #020617 100%)' }}
              >
                <img 
                  src={industries[activeTab].image} 
                  alt={industries[activeTab].name}
                  className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
                />
                
                {/* Scanning Line Effect from ServicesPreview */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue/30 shadow-[0_0_15px_#0047AB] z-20 animate-scan" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-10 w-full text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 bg-brand-blue rounded-sm text-white shadow-[0_0_20px_rgba(0,71,171,0.4)]">
                        {React.createElement(industries[activeTab].icon, { size: 28 })}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                          {industries[activeTab].name}
                        </h3>
                        <div className="flex items-center gap-3 text-brand-blue font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                          <TbCircleFilled className="text-[6px] animate-pulse"/>
                          {industries[activeTab].stat}
                        </div>
                      </div>
                    </div>
                    <span className="hidden md:block font-mono text-[10px] text-white/20 tracking-[0.5em]">
                      //{industries[activeTab].tag}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-sm leading-relaxed max-w-lg border-l border-brand-blue/40 pl-6 italic">
                    "{industries[activeTab].desc}"
                  </p>
                </div>

                {/* HUD Corner Bracket */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-brand-blue/40" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;