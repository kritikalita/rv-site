import React from "react";
import { motion } from "framer-motion";
import { TbAward } from "react-icons/tb";

// Import logos
import honeywellLogo from "../../assets/logos/honeywell.png";
import geLogo from "../../assets/logos/ge.png";
import tataLogo from "../../assets/logos/tata.png";
import halLogo from "../../assets/logos/hal.png";
import collinsLogo from "../../assets/logos/collins.webp";

const awardData = [
  { issuer: "Honeywell", logo: honeywellLogo, title: "Best Supplier", year: "2023" },
  { issuer: "Collins", logo: collinsLogo, title: "Gold Category", year: "2023" },
  { issuer: "TATA", logo: tataLogo, title: "Best Supplier", year: "2023" },
  { issuer: "HAL", logo: halLogo, title: "Top Performance", year: "2023" },
  { issuer: "GE Aviation", logo: geLogo, title: "Global Supplier", year: "2023" },
  { issuer: "Collins", logo: collinsLogo, title: "Supplier Award", year: "2025" },
];

// 3 Unified Gallery Images for the whole section
const galleryImages = [
  "https://mtimotion.com/wp-content/uploads/2022/12/Award.png",
  "https://images.unsplash.com/photo-1565439380849-536e24f136f7?q=80&w=2070",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
];

const Awards = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden border-t border-slate-100">
      
      {/* ADDED: Uniform Blueprint Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT & LOGO GRID */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Excellence Portfolio</span>
            </motion.div>

            {/* Container for Heading and Metadata to sit side-by-side */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
               <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
                Validated by <br />
                <span className="text-brand-blue">Global Standards.</span>
              </h2>

              {/* Added Metadata in the red marked space */}
              <div className="hidden md:block border-l border-slate-200 pl-8">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
                  Personnel<br />
                  <span className="text-brand-blue font-mono text-[9px]">Strategic Growth Steering</span>
                </p>
              </div>
            </div>

            {/* Logo grid - Logos are colorful normally, B&W on hover */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {awardData.map((award, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm flex flex-col items-center text-center group transition-all hover:shadow-md hover:border-brand-blue/20"
                >
                  <img 
                    src={award.logo} 
                    alt={award.issuer} 
                    className="h-8 w-auto object-contain mb-4 grayscale-0 group-hover:grayscale transition-all duration-500" 
                  />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{award.year}</p>
                  <h4 className="text-[11px] font-bold text-slate-800 uppercase mt-1 leading-tight">{award.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: AESTHETIC IMAGE GRID (All 3 blocks are now images) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 h-[450px]">
            {/* 1. Large Vertical Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="row-span-2 relative overflow-hidden rounded-sm border border-slate-200"
            >
              <img src={galleryImages[0]} className="w-full h-full object-cover" alt="Industrial Excellence" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#022049]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <TbAward className="text-white opacity-80" size={24} />
              </div>
            </motion.div>

            {/* 2. Top Right Square */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-sm border border-slate-200"
            >
              <img src={galleryImages[1]} className="w-full h-full object-cover" alt="Precision Manufacturing" />
              <div className="absolute inset-0 bg-[#063677]/20 mix-blend-multiply" />
            </motion.div>

            {/* 3. Bottom Right Square (Converted from text to image) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-sm border border-slate-200"
            >
              <img src={galleryImages[2]} className="w-full h-full object-cover" alt="Aerospace Systems" />
              {/* Technical scan line effect overlay */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/40 shadow-[0_0_15px_#0047AB] animate-scan" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#022049]/40 to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;