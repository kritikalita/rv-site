import React from 'react';
import { motion } from 'framer-motion';
import { TbShieldCheck, TbLeaf, TbBuildingArch, TbCircleFilled } from "react-icons/tb";

const accreditationGroups = [
  {
    title: "Aerospace QMS",
    description: "The highest benchmarks for aerospace manufacturing and special processes.",
    icon: TbShieldCheck,
    tag: "QUALITY SYSTEM",
    logos: [
      { name: "AS9100D", image: "/logos/Picture 1.png" },
      { name: "Nadcap", image: "/logos/Picture 6.png" },
    ]
  },
  {
    title: "EHS Compliance",
    description: "Commitment to sustainable practices and material safety standards.",
    icon: TbLeaf,
    tag: "ENVIRONMENTAL",
    logos: [
      { name: "ISO 14001", image: "public/logos/iso.jpg" },
      { name: "RoHS", image: "/logos/Picture 5.png" },
      { name: "REACH", image: "/logos/reach.png" },
    ]
  },
  {
    title: "Industry Standards",
    description: "Adherence to globally recognized engineering and industrial standards.",
    icon: TbBuildingArch,
    tag: "GLOBAL STDS",
    logos: [
      { name: "ASTM", image: "/logos/Picture 2.png" },
      { name: "SAE", image: "/logos/sae.jpg" },
      { name: "ANSI", image: "/logos/Picture 3.png" },
      { name: "BSI", image: "/logos/bsi.png" },
    ]
  }
];

const Accreditations = () => {
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
        
        {/* UNIFORM HEADER: Standardized Scale and Metadata */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Quality Assurance</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Validated by <br />
              <span className="text-brand-blue">Global Standards.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Certifications<br />
              <span className="text-brand-blue font-mono">Aerospace Defence Compliance</span>
            </p>
          </div>
        </div>

        {/* REGISTRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accreditationGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col h-[480px] border border-white/10 rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(0,71,171,0.3)] transition-all duration-500 cursor-default p-8"
              style={{
                /* NEW GRADIENT BLUE: Updated to match signature palette */
                background: 'radial-gradient(circle at top right, #063677 0%, #022049 100%)'
              }}
            >
              {/* Technical Glow Effect */}
              <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-3 bg-brand-blue text-white w-fit rounded-sm shadow-[0_0_15px_rgba(0,71,171,0.5)]">
                  <group.icon size={22} />
                </div>
                <span className="font-mono text-[9px] font-bold text-white/30 tracking-[0.2em]">
                  {group.tag}
                </span>
              </div>

              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TbCircleFilled className="text-[6px] text-brand-blue animate-pulse" />
                  <h3 className="text-2xl font-bold text-white tracking-tight">{group.title}</h3>
                </div>
                <p className="text-[13px] leading-relaxed font-medium text-slate-300 border-l border-brand-blue/40 pl-4">
                  {group.description}
                </p>
              </div>

              {/* LOGO GRID */}
              <div className="mt-auto pt-8 border-t border-white/10 relative z-10">
                <div className="grid grid-cols-2 gap-3">
                  {group.logos.map((logo, lIdx) => (
                    <div 
                      key={lIdx} 
                      className="bg-white/5 border border-white/10 p-2 h-16 flex items-center justify-center rounded-sm group-hover:bg-white/10 transition-all duration-500"
                    >
                      <img 
                        src={logo.image} 
                        alt={logo.name} 
                        className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner HUD Bracket */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;