import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { TbCircleFilled } from "react-icons/tb";

const history = [
  { 
    year: "1992", 
    title: "Inception", 
    desc: "Started as a small precision machine shop with just 3 CNC machines in Hyderabad.",
    image: "/logos/1992 .png" 
  },
  { 
    year: "2004", 
    title: "First Global Export", 
    desc: "Secured our first major export order for critical engine components to GE Aviation.",
    image: "/logos/2004.png"
  },
  { 
    year: "2006", 
    title: "AS9100D Certified", 
    desc: "Achieved the gold standard in aerospace quality management, opening doors to Tier-1 partnerships.",
    image: "/logos/2006.png"
  },
  { 
    year: "2015", 
    title: "New Facility", 
    desc: "Inaugurated a state-of-the-art 50,000 sq.ft manufacturing unit with dedicated assembly lines.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    year: "2019", 
    title: "Defence Partner", 
    desc: "Partnered with DRDO for critical missile sub-systems, cementing our role in national defence.",
    image: "https://images.unsplash.com/photo-1596328325608-4171804f5802?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    year: "2023", 
    title: "Robotics Division", 
    desc: "Launched the Robotics & Autonomous Systems division to pioneer unmanned technologies.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    year: "2025", 
    title: "Global Expansion", 
    desc: "Opening new strategic sales and engineering offices in the USA and Europe.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2033&auto=format&fit=crop"
  },
];

const Timeline = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 350; 
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-24 bg-white border-t border-b border-brand-border overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* Header stays inside the max-width container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Legacy Transmission</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Historical <span className="text-brand-blue">Milestones.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[180px] leading-relaxed">
              Temporal Archive<br />
              <span className="text-brand-blue font-mono">Precision Evolution</span>
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL TRACK: Moved outside the max-w-7xl container.
          Padding is calculated to align the first card with the header text.
      */}
      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto pb-4 gap-8 no-scrollbar relative z-10 w-full 
                   pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {history.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="shrink-0 w-[80vw] md:w-[340px] h-[420px] relative group rounded-sm overflow-hidden border border-white/10 shadow-xl transition-all duration-500"
            style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)' }}
          >
            {/* Year HUD Tag */}
            <div className="absolute top-4 left-4 z-20">
               <span className="bg-brand-blue text-white text-[9px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">
                  {item.year}
               </span>
            </div>

            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-40" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 text-xs leading-relaxed border-l-2 border-brand-blue/40 pl-4 group-hover:text-slate-200 transition-colors italic">
                "{item.desc}"
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
        {/* Adds clear space at the end to ensure the last card can be fully viewed */}
        <div className="min-w-[50px] md:min-w-[calc((100vw-80rem)/2+1.5rem)] shrink-0" />
      </div>
    </section>
  );
};

export default Timeline;