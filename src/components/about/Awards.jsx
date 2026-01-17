import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbAward, TbShieldCheck, TbTimeline, TbActivity } from "react-icons/tb";

// Import logos
import honeywellLogo from "../../assets/logos/honeywell.png";
import geLogo from "../../assets/logos/ge.png";
import tataLogo from "../../assets/logos/tata.png";
import halLogo from "../../assets/logos/hal.png";
import collinsLogo from "../../assets/logos/collins.webp";

const awardData = [
  { issuer: "Honeywell", logo: honeywellLogo, title: "Best Supplier", category: "Execution & Delivery", year: "2023", bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" },
  { issuer: "Collins", logo: collinsLogo, title: "Gold Category", category: "Quality Excellence", year: "2023", bgImage: "https://images.unsplash.com/photo-1565439380849-536e24f136f7?q=80&w=2070" },
  { issuer: "TATA", logo: tataLogo, title: "Best Supplier", category: "Aero Engines", year: "2023", bgImage: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=2070" },
  { issuer: "HAL", logo: halLogo, title: "Top Performance", category: "Strategic Programs", year: "2023", bgImage: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070" },
  { issuer: "GE Aviation", logo: geLogo, title: "Global Supplier", category: "Delivery & Quality", year: "2023", bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070" },
  { issuer: "Collins", logo: collinsLogo, title: "Supplier Award", category: "Quality & Compliance", year: "2025", bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072" },
];

const Awards = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 bg-[#010816] overflow-hidden border-t border-brand-border min-h-[800px] flex flex-col justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER */}
        <div className="mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Awards</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
            Validated by <span className="text-brand-blue">Global Partners.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Cinematic Image Viewer */}
          <div className="lg:col-span-7 relative h-[500px] border border-white/10 rounded-sm overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1, filter: "grayscale(100%)" }}
                animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={awardData[active].bgImage} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-transparent to-transparent opacity-80" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/40 animate-scan" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <motion.div
                key={active + "text"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
              >
                <span className="text-brand-blue font-mono text-[10px] font-bold tracking-widest uppercase">Certified Performance</span>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{awardData[active].title}</h3>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-widest border-l border-brand-blue pl-4">
                  {awardData[active].category} - {awardData[active].year}
                </p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SIDE: Compact Radial Hub Selector */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[550px]">
            
            {/* Visual Guides */}
            <div className="absolute border border-white/5 rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px]" />
            <div className="absolute border border-brand-blue/10 rounded-full w-[200px] h-[200px] md:w-[320px] md:h-[320px] border-dashed animate-spin-slow" />

            {/* HUB CORE - Colorful Logo Implementation */}
            <motion.div 
              className="relative z-20 w-48 h-48 md:w-64 md:h-64 bg-[#010816] rounded-full flex flex-col items-center justify-center p-8 text-center shadow-[0_0_50px_rgba(0,71,171,0.25)] border border-brand-blue/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,71,171,0.1)_0%,transparent_70%)]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="relative z-10 flex flex-col items-center justify-center w-full"
                >
                  <TbAward className="text-brand-blue mx-auto mb-3" size={32} />
                  
                  {/* Central Logo: Original Colors */}
                  <div className="h-10 md:h-14 w-full flex items-center justify-center mb-1">
                    <img 
                        src={awardData[active].logo} 
                        alt={awardData[active].issuer} 
                        className="max-h-full max-w-[80%] object-contain shadow-sm"
                    />
                  </div>
                  
                  <div className="h-[1px] w-8 bg-white/20 mx-auto my-3" />
              
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* ORBITING SELECTORS */}
            {awardData.map((award, i) => {
              const angle = (i * (360 / awardData.length)) * (Math.PI / 180);
              const radius = 180; 
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  animate={{ x, y }}
                  onMouseEnter={() => setActive(i)}
                  className={`absolute z-30 cursor-pointer p-3 rounded-sm border transition-all duration-500
                    ${active === i 
                      ? 'bg-white border-brand-blue ring-4 ring-brand-blue/10 scale-125' 
                      : 'bg-white/90 border-transparent grayscale opacity-30 hover:opacity-100 hover:grayscale-0'}`}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    <img src={award.logo} alt={award.issuer} className="max-h-full max-w-full object-contain" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 120s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Awards;