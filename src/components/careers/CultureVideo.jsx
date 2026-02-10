import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlay, HiX } from "react-icons/hi";
import { TbCalendarEvent, TbChartBar, TbUsers, TbBuildingFactory2 } from "react-icons/tb";

const CultureVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const videoId = "urYJ_MvpTmA";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    /* Changed min-h to h-auto to ensure the section doesn't force extra vertical space */
    <section className="relative h-auto bg-white flex flex-col border-b border-brand-border overflow-hidden">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Adjusted padding: Reduced bottom padding (pb) to minimize space beneath metrics */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 w-full flex flex-col pt-12 lg:pt-16 2xl:pt-24 pb-8 md:pb-12 relative z-10">
        
        {/* 1. HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 shrink-0 gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px] 2xl:text-xs">
                Behind the Precision
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Explore our{" "}
              <span className="text-brand-blue">Culture.</span>
            </h2>
          </div>
        </div>

        {/* 2. DYNAMIC VIDEO PREVIEW CONTAINER */}
        <motion.div
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-[55vh] 2xl:max-h-[65vh] min-h-[300px] sm:min-h-[400px] mx-auto group cursor-pointer rounded-sm overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: "#010816" }}
        >
          {/* HUD Metadata Overlay */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 flex items-center gap-2 pointer-events-none">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </div>
            <span className="text-[9px] md:text-[10px] 2xl:text-sm font-mono text-white/90 font-bold tracking-[0.3em] uppercase">
              Streaming
            </span>
          </div>

          <div className="absolute inset-0 w-full h-full">
            <img
                src={thumbnailUrl}
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                alt="Raghu Vamsi Video Preview"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092121497-90cd2a551e32?q=80&w=2070"; }}
            />
            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-color group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 md:w-20 md:h-20 2xl:w-32 2xl:h-32 bg-brand-blue/90 text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,71,171,0.4)] transition-all duration-500 group-hover:bg-brand-blue group-hover:shadow-[0_0_70px_rgba(0,71,171,0.6)]"
            >
              <HiPlay className="ml-1 w-8 h-8 md:w-10 md:h-10 2xl:w-16 2xl:h-16" />
            </motion.div>
            <div className="mt-6 md:mt-8 px-4 md:px-6 py-2 border border-white/20 bg-[#022049]/80 backdrop-blur-md shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[8px] md:text-[10px] 2xl:text-sm font-black text-white tracking-[0.5em] uppercase">
                Click to Play
              </span>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-brand-blue/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-brand-blue/40" />
        </motion.div>

        {/* METRICS GRID 
            Removed the large pb-10 and pb-4 classes to cut off space beneath metrics
        */}
        <div className="mt-8 md:mt-12 shrink-0 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12 border-t border-slate-100 pt-8 md:pt-10 2xl:pt-16 items-center justify-items-center">
          {[
            { label: "Founding Year", value: "2002", unit: "EST.", icon: TbCalendarEvent },
            { label: "Group Revenue", value: "50", unit: "M$+", icon: TbChartBar },
            { label: "Workforce Strength", value: "800", unit: "Staff+", icon: TbUsers },
            { label: "Strategic Locations", value: "10", unit: "Units", icon: TbBuildingFactory2 },
          ].map((metric, index) => (
            <VideoMetric key={index} {...metric} index={index} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 2xl:p-24 bg-brand-dark/95 backdrop-blur-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[210]"
            >
              <HiX size={32} className="2xl:w-12 2xl:h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-6xl 2xl:max-w-[1600px] aspect-video bg-black shadow-2xl border border-white/10"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                title="Raghu Vamsi Culture Film"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const VideoMetric = ({ label, value, unit, index, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex flex-col items-center md:items-start group w-full max-w-[160px] md:max-w-none text-center md:text-left"
  >
    <div className="flex items-center gap-2 mb-2">
      <Icon className="text-brand-blue text-xs 2xl:text-lg group-hover:animate-pulse" />
      <span className="text-[8px] md:text-[9px] 2xl:text-xs font-mono text-slate-400 font-bold tracking-widest uppercase">
        {label}
      </span>
    </div>
    <div className="flex items-baseline gap-1 md:gap-2">
      <span className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold text-brand-dark tracking-tighter tabular-nums leading-none">
        {value}
      </span>
      <span className="text-[8px] md:text-[10px] 2xl:text-sm font-black text-brand-blue uppercase tracking-tighter opacity-80">
        {unit}
      </span>
    </div>
  </motion.div>
);

export default CultureVideo;