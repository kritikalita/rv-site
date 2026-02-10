import React from 'react';
import { motion } from 'framer-motion';
import { TbShieldCheck, TbLeaf, TbBuildingArch, TbCircleFilled } from "react-icons/tb";

const accreditationGroups = [
  /* Data remains exactly as provided */
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
      { name: "ISO 14001", image: "src/assets/logos/iso140.jpeg" },
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
      { name: "SAE", image: "src/assets/logos/sae.jpg" },
      { name: "ANSI", image: "/logos/Picture 3.png" },
      { name: "BSI", image: "/logos/bsi.png" },
    ]
  }
];

const Accreditations = () => {
  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER: Responsive layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 2xl:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Quality Assurance</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Validated by <br />
              <span className="text-brand-blue">Global Standards.</span>
            </h2>
          </div>
        </div>

        {/* REGISTRY GRID: 
            Mobile: 1 Col
            Tablet/iPad: 2 Col (sm:grid-cols-2)
            Laptop/Big Screens: 3 Col (lg:grid-cols-3)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12">
          {accreditationGroups.map((group, idx) => {
            const isSignatureGradient = idx % 2 !== 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col h-auto min-h-[440px] md:h-[480px] 2xl:min-h-[580px] border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 cursor-default p-6 md:p-8 2xl:p-12
                  ${isSignatureGradient 
                    ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                  }`}
              >
                {/* Technical Glow Effect */}
                <div className="absolute -right-2 -top-2 w-16 h-16 2xl:w-32 2xl:h-32 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

                <div className="flex justify-between items-start mb-6 md:mb-8 2xl:mb-12 relative z-10">
                  <div className={`p-2.5 md:p-3 2xl:p-5 w-fit rounded-sm shadow-[0_0_15px_rgba(0,71,171,0.5)] 
                    ${isSignatureGradient ? "bg-white text-brand-blue" : "bg-brand-blue text-white"}`}>
                    <group.icon className="w-5 h-5 md:w-[22px] md:h-[22px] 2xl:w-8 2xl:h-8" />
                  </div>
                  <span className={`font-mono text-[8px] md:text-[9px] 2xl:text-xs font-bold tracking-[0.2em] 
                    ${isSignatureGradient ? "text-white/30" : "text-brand-blue/40"}`}>
                    {group.tag}
                  </span>
                </div>

                <div className="mb-6 md:mb-8 2xl:mb-12 relative z-10">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <TbCircleFilled className={`text-[5px] md:text-[6px] 2xl:text-[8px] animate-pulse ${isSignatureGradient ? "text-brand-blue" : "text-brand-blue"}`} />
                    <h3 className={`text-xl md:text-2xl 2xl:text-3xl font-bold tracking-tight 
                      ${isSignatureGradient ? "text-white" : "text-brand-dark"}`}>
                      {group.title}
                    </h3>
                  </div>
                  <p className={`text-[12px] md:text-[13px] 2xl:text-lg leading-relaxed font-medium border-l pl-4 
                    ${isSignatureGradient ? "text-slate-300 border-brand-blue/40" : "text-slate-600 border-brand-blue/40"}`}>
                    {group.description}
                  </p>
                </div>

                {/* LOGO GRID: Scaled for high-fidelity viewing */}
                <div className={`mt-auto pt-6 md:pt-8 2xl:pt-12 border-t relative z-10 ${isSignatureGradient ? "border-white/10" : "border-brand-blue/10"}`}>
                  <div className="grid grid-cols-2 gap-2 md:gap-3 2xl:gap-5">
                    {group.logos.map((logo, lIdx) => (
                      <div 
                        key={lIdx} 
                        className="p-1.5 md:p-2 2xl:p-4 h-14 md:h-16 2xl:h-24 flex items-center justify-center rounded-sm transition-all duration-500 bg-white border border-brand-blue/5 shadow-sm group-hover:shadow-md"
                      >
                        <img 
                          src={logo.image} 
                          alt={logo.name} 
                          className="max-h-full max-w-full object-contain" 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetic Corner Bracket */}
                <div className={`hidden md:block absolute bottom-0 right-0 w-8 h-8 2xl:w-16 2xl:h-16 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 
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