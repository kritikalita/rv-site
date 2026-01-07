import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay } from 'react-icons/hi';
import { TbVideo, TbActivity, TbCircleFilled } from "react-icons/tb";

const CultureVideo = () => {
  return (
    /* Height increased to min-h-[110vh] and overflow-hidden removed to prevent clipping */
    <section className="relative min-h-[110vh] bg-white flex flex-col border-b border-brand-border">
      
      {/* Background Architectural Grid (Same as Stories) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 w-full h-full flex flex-col py-12 lg:py-16 relative z-10">
        
        {/* 1. UNIFORM HEADER SECTION - Standardized to Stories Page scale */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 shrink-0 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Behind the Precision
              </span>
            </motion.div>
            {/* Header size adjusted to 4xl/5xl to match "Latest Transmissions" exactly */}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Witness the <span className="text-brand-blue">Human Element.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:border-l-2 lg:border-brand-blue lg:pl-8">
            <p className="text-slate-500 text-sm italic leading-relaxed tracking-tight font-medium">
              "Join our mission to define the future of flight through uncompromised precision."
            </p>
          </div>
        </div>

        {/* 2. UNIFORM VIDEO CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex-grow w-full max-h-[55vh] min-h-[350px] mx-auto group cursor-pointer rounded-sm overflow-hidden border border-white/10 shadow-2xl"
          style={{
            background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)'
          }}
        >
          {/* HUD Metadata Overlay */}
          <div className="absolute top-6 left-6 z-30 flex items-center gap-2 pointer-events-none">
             <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
             </div>
             <span className="text-[10px] font-mono text-white/90 font-bold tracking-[0.3em] uppercase">Uplink // Ready_For_Broadcast</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1581092121497-90cd2a551e32?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105"
            alt="Raghu Vamsi Shop Floor"
          />

          {/* Central Play Interaction */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="w-20 h-20 bg-brand-blue/90 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,71,171,0.4)] transition-all duration-500 group-hover:bg-brand-blue group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(0,71,171,0.6)]">
              <HiPlay size={40} className="ml-1" />
            </div>
            <div className="mt-8 px-6 py-2 border border-white/20 bg-[#020617]/80 backdrop-blur-md shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] font-black text-white tracking-[0.5em] uppercase">Execute_Film</span>
            </div>
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-blue/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-brand-blue/40" />
        </motion.div>

          <div className="mt-4 shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-6 pb-10 justify-items-center">
  {[
    { label: "Production_Footprint", value: "100,000", unit: "Sq.Ft" },
    { label: "Engineering_Intelligence", value: "450", unit: "Experts" },
    { label: "Operational_Units", value: "04", unit: "Global" },
    { label: "Quality_Benchmark", value: "99.8", unit: "%" },
  ].map((metric, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, // Staggered effect: metrics appear one by one
        ease: "easeOut" 
      }}
    >
      <VideoMetric 
        label={metric.label} 
        value={metric.value} 
        unit={metric.unit} 
      />
    </motion.div>
  ))}
</div>
        

      </div>
    </section>
  );
};

const VideoMetric = ({ label, value, unit }) => (
  <div className="flex flex-col group">
    <div className="flex items-center gap-2 mb-2">
      <TbActivity className="text-brand-blue text-xs group-hover:animate-pulse" />
      <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">{label}</span>
    </div>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tighter tabular-nums leading-none">{value}</span>
      <span className="text-[10px] font-black text-brand-blue uppercase tracking-tighter opacity-80">{unit}</span>
    </div>
  </div>
);

export default CultureVideo;