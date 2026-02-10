import React from "react";
import { motion } from "framer-motion";

// Import logos (Keep your existing imports)
import honeywellLogo from "../../assets/logos/honeywell.png";
import geLogo from "../../assets/logos/ge.png";
import tataLogo from "../../assets/logos/tata.png";
import halLogo from "../../assets/logos/hal.png";
import collinsLogo from "../../assets/logos/collins.webp";

const awardData = [
  { issuer: "Honeywell", logo: honeywellLogo, title: "Best Supplier", category: "Faster Execution & Delivery", year: "2023" },
  { issuer: "Collins", logo: collinsLogo, title: "Best Supplier", category: "Quality", year: "2023" },
  { issuer: "TATA", logo: tataLogo, title: "Best Supplier", category: "Overall-Aero Engine", year: "2023" },
  { issuer: "HAL", logo: halLogo, title: "Best Supplier", category: "Aero Engines", year: "" },
  { issuer: "GE Aviation", logo: geLogo, title: "Best Supplier", category: "Delivery & Quality", year: "" },
  { issuer: "Collins", logo: collinsLogo, title: "Best Supplier", category: "Overall-Performance", year: "2025" },
];

const Awards = () => {
  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-slate-100">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 2xl:gap-24 items-center">
          
          {/* Changed md:col-span-7 to md:col-span-12 to use full width */}
          <div className="md:col-span-12 order-2 md:order-1 flex flex-col items-center md:items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Awards Portfolio</span>
            </motion.div>

            <div className="mb-8 md:mb-10 w-full">
               <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight text-center md:text-left">
                Preferred Partner to <br className="hidden sm:block" />
                <span className="text-brand-blue">Global Leaders.</span>
              </h2>
            </div>

            {/* Grid for the boxes remains 3 columns, but now stretches across the 12-column parent */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 2xl:gap-6 w-full">
              {awardData.map((award, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-4 md:p-8 2xl:p-12 bg-white border border-slate-100 shadow-sm rounded-sm flex flex-col items-center text-center group transition-all hover:shadow-md hover:border-brand-blue/20 w-full"
                >
                  <img 
                    src={award.logo} 
                    alt={award.issuer} 
                    className="h-8 md:h-12 2xl:h-16 w-auto object-contain mb-3 md:mb-4 2xl:mb-6 grayscale-0 group-hover:grayscale transition-all duration-500" 
                  />
                  <p className="text-[8px] md:text-[10px] 2xl:text-xs font-black text-slate-400 uppercase tracking-widest">{award.year || "Awarded"}</p>
                  <h4 className="text-[9px] md:text-[12px] 2xl:text-base font-bold text-slate-800 uppercase mt-1 leading-tight">{award.title}</h4>
                  <p className="text-[7px] md:text-[10px] 2xl:text-sm text-brand-blue font-medium uppercase mt-1 tracking-wider opacity-80">{award.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;