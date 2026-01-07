import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { TbBriefcase, TbMapPin } from "react-icons/tb";

const jobs = [
  { id: "REQ-2025-01", title: "Senior CNC Programmer", dept: "Manufacturing", loc: "Hyderabad, IN" },
  { id: "REQ-2025-02", title: "Quality Control Engineer", dept: "Quality Assurance", loc: "Hyderabad, IN" },
  { id: "REQ-2025-03", title: "Mechanical Design Intern", dept: "R&D", loc: "Remote / Hybrid" },
  { id: "REQ-2025-04", title: "Supply Chain Manager", dept: "Operations", loc: "Hyderabad, IN" },
  { id: "REQ-2025-05", title: "Aerospace Analyst", dept: "Engineering", loc: "Hyderabad, IN" },
  { id: "REQ-2025-06", title: "Production Lead", dept: "Manufacturing", loc: "Hyderabad, IN" },
];

const JobBoard = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
      
      {/* 1. UNIFORM BACKGROUND: Blueprint Grid Pattern (Matches StoriesFeed) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. UNIFORM HEADER: Standardized with shadow-line and high-impact scale */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              {/* Added shadow glow to the accent line */}
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Talent Pipeline
              </span>
            </motion.div>
            {/* Standardized header scale: 4xl / 5xl */}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Current <span className="text-brand-blue">Opportunities.</span>
            </h2>
          </div>

          {/* Unified side-info/metadata style */}
          <div className="max-w-sm lg:border-l-2 lg:border-brand-blue lg:pl-8">
            <p className="text-slate-500 text-sm italic leading-relaxed tracking-tight font-medium">
              "Join our mission to define the future of flight through uncompromised precision."
            </p>
          </div>
        </div>

        {/* 3. COMPACT DUO-TONE GRID: Maintained exactly as provided */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, index) => {
            const isGradient = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative p-6 flex flex-col justify-between h-[200px] border border-white/10 transition-all duration-500 overflow-hidden
                  ${isGradient 
                    ? 'bg-gradient-to-br from-brand-blue via-[#003380] to-[#001a40]' 
                    : 'bg-[#000d1a] hover:bg-brand-dark'
                  }`}
              >
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

                <div>
                  <div className="flex justify-between items-start mb-3 relative z-10">
                    <TbBriefcase className={isGradient ? "text-blue-200" : "text-brand-blue"} size={18} />
                    <span className={`font-mono text-[8px] font-bold tracking-widest uppercase
                      ${isGradient ? "text-white/30" : "text-brand-blue/40"}`}>
                      // {job.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-tight tracking-tight mb-2 group-hover:text-blue-200 transition-colors relative z-10">
                    {job.title}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest font-mono relative z-10
                    ${isGradient ? "text-blue-100/60" : "text-gray-500"}`}>
                    <TbMapPin className="text-brand-blue" size={12} /> {job.loc}
                  </div>
                </div>

                <div className={`flex items-center justify-between border-t pt-4 relative z-10
                  ${isGradient ? "border-white/10" : "border-white/5"}`}>
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest
                    ${isGradient ? "text-blue-200/50" : "text-brand-blue/60"}`}>
                    {job.dept}
                  </span>
                  <div className="text-white group-hover:text-brand-blue flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest">
                    Apply <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-700 
                  ${isGradient ? "bg-white group-hover:w-full" : "bg-brand-blue group-hover:w-full"}`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobBoard;