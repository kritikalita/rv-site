import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { TbCpu, TbWorld, TbPlaneDeparture, TbSettingsAutomation, TbCircleFilled } from "react-icons/tb";

const StatCard = ({ number, label, icon: Icon, delay, isGradient }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className={`relative p-6 flex flex-col justify-between overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 group
      ${isGradient 
        ? 'bg-gradient-to-br from-[#020617] via-[#010b1a] to-[#001a40]' 
        : 'bg-[#010816] hover:bg-[#020d1f]'
      }`}
  >
    <div className="absolute -right-2 -top-2 w-16 h-16 bg-brand-blue/5 blur-[30px] group-hover:bg-brand-blue/15 transition-all duration-700" />
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-sm ${isGradient ? "bg-white/10 text-white" : "bg-brand-blue/10 text-brand-blue border border-brand-blue/20"}`}>
          {Icon && <Icon size={18} strokeWidth={2} />}
        </div>
        <TbCircleFilled className={`text-[4px] animate-pulse ${isGradient ? "text-blue-300" : "text-brand-blue"}`} />
      </div>

      <h3 className="text-3xl font-bold text-white mb-1 flex items-baseline gap-1 tabular-nums tracking-tighter">
        {number}<span className="text-brand-blue text-xl">+</span>
      </h3>
      
      <p className={`text-[9px] font-black uppercase tracking-[0.2em] pt-3 border-t transition-colors
        ${isGradient ? "text-blue-100/50 border-white/10" : "text-slate-500 border-white/5"}`}>
        {label}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-700 w-0 group-hover:w-full bg-brand-blue" />
  </motion.div>
);

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -40]); 
  const yStats = useTransform(scrollYProgress, [0, 1], [20, -60]);

  return (
    /* REDUCED BOTTOM PADDING: py-24 -> pt-24 pb-12 */
    <section ref={ref} className="relative pt-24 pb-12 bg-white overflow-hidden border-b border-brand-border">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        <div className="relative z-20 flex flex-col justify-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
              Corporate Profile
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-8 tracking-tighter leading-tight"
          >
            Manufacturing the <br/> 
            <span className="text-brand-blue">Impossible.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base leading-relaxed max-w-lg border-l-2 border-slate-200 pl-8 mb-12"
          >
            Raghu Vamsi is a Tier-1 aerospace and defence manufacturer. 
            We maintain a <span className="font-bold text-brand-dark">99.8% precision rate</span> across critical engine components 
            and structural assemblies for global OEMs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-8 items-center" 
          >
            <Link to="/about" className="group relative flex items-center gap-6 bg-[#020617] text-white px-8 py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Our Legacy <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
            </Link>
            
            <div className="flex items-center gap-4 border-l border-slate-200 pl-8">
              <HiCheckCircle className="text-brand-blue text-3xl" />
              <div className="text-[9px] font-black text-brand-dark uppercase tracking-[0.2em] leading-tight">
                AS9100D <br/> Certified
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Visual Dossier & Ticker */}
        {/* REDUCED CONTAINER HEIGHT: h-[600px] -> h-[520px] */}
        <div className="relative h-[520px] hidden lg:block group/intro-right">
          
          <motion.div 
            style={{ y: yImage }} 
            className="absolute top-0 right-0 w-[85%] h-[400px] z-10 group/dossier"
          >
            <div 
              className="w-full h-full relative shadow-2xl border border-white/10 overflow-hidden rounded-sm transition-all duration-700 group-hover/dossier:border-brand-blue/50"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
            >
              <img 
                src="/logos/introHome.png" 
                alt="Aerospace Engineering" 
                className="w-full h-full object-cover grayscale-0 opacity-90 group-hover/dossier:grayscale group-hover/dossier:opacity-60 transition-all duration-1000 group-hover/dossier:scale-105"
              />
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue/40 shadow-[0_0_15px_#0047AB] z-20 translate-y-[-100%] group-hover/dossier:animate-scan" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-[#020617]/80 mix-blend-multiply transition-opacity duration-700 group-hover/dossier:opacity-40" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-blue/40 group-hover/dossier:border-brand-blue transition-all duration-500" />
            </div>
          </motion.div>

          {/* LOWERED STATS OFFSET: bottom-20 -> bottom-4 */}
          <motion.div style={{ y: yStats }} className="absolute bottom-4 left-0 w-full z-20 grid grid-cols-2 gap-4 pr-12">
            <div className="space-y-4 mt-12">
              <StatCard number="24" label="Years Experience" icon={TbSettingsAutomation} delay={0.2} isGradient={false} />
              <StatCard number="20" label="Global Partners" icon={TbWorld} delay={0.4} isGradient={true} />
            </div>
            <div className="space-y-4">
              <StatCard number="10k" label="Parts Delivered" icon={TbCpu} delay={0.3} isGradient={true} />
              <StatCard number="6" label="Units" icon={TbPlaneDeparture} delay={0.5} isGradient={false} />
            </div>
          </motion.div>
        </div>
        
        {/* REDUCED MARGIN FOR MOBILE: mt-12 -> mt-4 */}
        <div className="grid grid-cols-2 gap-4 lg:hidden mt-4">
            <StatCard number="24" label="Years Exp." icon={TbSettingsAutomation} delay={0.2} isGradient={false} />
            <StatCard number="50" label="Clients" icon={TbWorld} delay={0.3} isGradient={true} />
            <StatCard number="10k" label="Parts" icon={TbCpu} delay={0.4} isGradient={true} />
            <StatCard number="4" label="Units" icon={TbPlaneDeparture} delay={0.5} isGradient={false} />
        </div>
      </div>
    </section>
  );
};

export default Intro;