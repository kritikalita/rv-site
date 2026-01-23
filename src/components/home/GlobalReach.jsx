import React from 'react';
import { motion } from 'framer-motion';
import { TbWorld, TbMapPin, TbCircleFilled } from "react-icons/tb";

const GlobalReach = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Mission Intel */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
              International Operations
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight mb-8"
          >
            Connecting India to <br/>
            <span className="text-brand-blue">Global Aerospace.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base leading-relaxed max-w-lg border-l-2 border-brand-blue/40 pl-8 mb-12 italic"
          >
            "Raghu Vamsi maintains dedicated export channels to the USA and UK, bridging the gap between Indian manufacturing excellence and the world's most demanding OEMs."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-8 md:gap-12 border-t border-slate-100 pt-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
                <h4 className="text-3xl md:text-4xl font-black text-brand-dark tabular-nums tracking-tighter">100%</h4>
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Export Compliance</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
                <h4 className="text-3xl md:text-4xl font-black text-brand-dark tabular-nums tracking-tighter">24h</h4>
              </div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Logistics Support</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Technical Map Dossier */}
        <div className="relative h-[400px] md:h-[500px] w-full group/map">
            
            <div className="w-full h-full relative bg-[#010816] rounded-sm border border-white/5 shadow-2xl overflow-hidden">
              
              {/* HUD Scanning Glow */}
              <div className="absolute -right-2 -top-2 w-32 h-32 bg-brand-blue/5 blur-[50px] group-hover/map:bg-brand-blue/15 transition-all duration-700" />

              {/* World Map Background (Technical Inversion) */}
              <div className="absolute inset-0 opacity-15 mix-blend-screen p-8">
                 <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
                  alt="World Map" 
                  className="w-full h-full object-contain filter brightness-200 invert"
                 />
              </div>

              {/* Interactive Layer */}
              <div className="absolute inset-0 w-full h-full z-10">
                
                {/* Connection Lines - Normalized to 1000x500 ViewBox */}
                <svg 
                  viewBox="0 0 1000 500" 
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Hyderabad to USA Generic Node - Mapped to (680, 230) */}
                  <motion.path 
                    d="M 680 230 Q 450 50 220 160" 
                    fill="none" 
                    stroke="#0047AB" 
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    filter="url(#glow)"
                    className="group-hover/map:stroke-white group-hover/map:stroke-[3] transition-all duration-700"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />

                  {/* Hyderabad to London - FIXED ALIGNMENT */}
                  <motion.path 
                    d="M 680 230 Q 580 120 510 145" 
                    fill="none" 
                    stroke="#1e40af" 
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    filter="url(#glow)"
                    className="group-hover/map:stroke-brand-blue group-hover/map:stroke-[3] transition-all duration-700"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
                  />
                </svg>

                {/* USA Generic Node */}
                <div className="absolute top-[32%] left-[22%]">
                   <div className="w-2 h-2 bg-brand-blue rounded-full shadow-[0_0_10px_#0047AB] relative z-10"></div>
                   <div className="absolute top-4 left-0 border-l border-brand-blue/40 pl-2 whitespace-nowrap">
                      <span className="text-[8px] font-mono font-bold text-white tracking-widest uppercase">USA</span>
                   </div>
                </div>

                {/* UK Node */}
                <div className="absolute top-[29%] left-[51%]">
                   <div className="w-2 h-2 bg-brand-blue rounded-full shadow-[0_0_10px_#0047AB] relative z-10"></div>
                   <div className="absolute top-4 left-0 border-l border-brand-blue/40 pl-2 whitespace-nowrap">
                      <span className="text-[8px] font-mono font-bold text-white tracking-widest uppercase">UK</span>
                   </div>
                </div>

                {/* Hyderabad HQ Node (Geographically Adjusted) */}
                <div className="absolute top-[46%] left-[68%]">
                   <div className="absolute -inset-4 bg-brand-blue/20 rounded-full animate-ping"></div>
                   <div className="w-3 h-3 bg-brand-blue rounded-full border border-white shadow-[0_0_15px_#0047AB] relative z-10"></div>
                   <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-brand-blue px-3 py-1.5 rounded-sm shadow-xl whitespace-nowrap z-20">
                      <span className="text-[9px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                        <TbMapPin size={10} /> INDIA
                      </span>
                   </div>
                </div>
              </div>

              {/* HUD Corner Bracket */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-brand-blue/40 group-hover/map:border-brand-blue transition-all duration-500" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;