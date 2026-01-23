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
        
        {/* UNIFORM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
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

        {/* REGISTRY GRID: Alternating Color Logic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accreditationGroups.map((group, idx) => {
            // Apply the alternating logic from Ethos: Odd indices use Signature Gradient, Even use Sky Blue
            const isSignatureGradient = idx % 2 !== 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col h-[480px] border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 cursor-default p-8
                  ${isSignatureGradient 
                    ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                  }`}
              >
                {/* Technical Glow Effect */}
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`p-3 w-fit rounded-sm shadow-[0_0_15px_rgba(0,71,171,0.5)] 
                    ${isSignatureGradient ? "bg-white/10 text-white" : "bg-brand-blue text-white"}`}>
                    <group.icon size={22} />
                  </div>
                  <span className={`font-mono text-[9px] font-bold tracking-[0.2em] 
                    ${isSignatureGradient ? "text-white/30" : "text-brand-blue/40"}`}>
                    {group.tag}
                  </span>
                </div>

                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TbCircleFilled className={`text-[6px] animate-pulse ${isSignatureGradient ? "text-brand-blue" : "text-brand-blue"}`} />
                    <h3 className={`text-2xl font-bold tracking-tight 
                      ${isSignatureGradient ? "text-white" : "text-brand-dark"}`}>
                      {group.title}
                    </h3>
                  </div>
                  <p className={`text-[13px] leading-relaxed font-medium border-l pl-4 
                    ${isSignatureGradient ? "text-slate-300 border-brand-blue/40" : "text-slate-600 border-brand-blue/40"}`}>
                    {group.description}
                  </p>
                </div>

                {/* LOGO GRID */}
                <div className={`mt-auto pt-8 border-t relative z-10 ${isSignatureGradient ? "border-white/10" : "border-brand-blue/10"}`}>
                  <div className="grid grid-cols-2 gap-3">
                    {group.logos.map((logo, lIdx) => (
                      <div 
                        key={lIdx} 
                        className={`p-2 h-16 flex items-center justify-center rounded-sm transition-all duration-500
                          ${isSignatureGradient ? "bg-white/5 border border-white/10 group-hover:bg-white/10" : "bg-white border border-brand-blue/5 shadow-sm"}`}
                      >
                        <img 
                          src={logo.image} 
                          alt={logo.name} 
                          className={`max-h-full max-w-full object-contain transition-opacity 
                            ${isSignatureGradient ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`} 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner HUD Bracket */}
                <div className={`absolute bottom-0 right-0 w-8 h-8 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  ${isSignatureGradient ? "border-brand-blue" : "border-brand-blue"}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;