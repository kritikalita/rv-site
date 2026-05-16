import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { TbPlane, TbActivity, TbFlame, TbArrowUpRight } from "react-icons/tb";
import oilImg from '../../assets/images/oil.webp';
import powerImg from '../../assets/images/power.webp';

const industries = [
  { 
    id: "01", 
    name: "Aerospace", 
    icon: TbPlane, 
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop", 
    desc: "Critical structural components and propulsion systems for global aviation.", 
    stat: "10k+ Units"
  },
  { 
    id: "02", 
    name: "Oil & Gas", 
    icon: TbFlame, 
    image: oilImg, 
    desc: "Precision flow control and high-durability valves for extreme environments.", 
    stat: "API Certified"
  },
  { 
    id: "03", 
    name: "Power", 
    icon: TbActivity, 
    image: powerImg, 
    desc: "Advanced engineering solutions for sustainable energy and national grids.", 
    stat: "Grid Scale"
  },
];

const Industries = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="relative py-12 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER SECTION - Styled to match Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="flex items-center gap-3 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-8 md:w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-sm">
                Sector Intelligence
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight"
            >
              Industries We <br />
              <span className="text-brand-blue">Serve.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-auto"
          >
            <Link to="/capabilities" className="group relative flex items-center justify-center gap-4 bg-[#010816] text-white px-8 py-4 2xl:px-16 2xl:py-8 font-black uppercase tracking-[0.3em] text-[10px] 2xl:text-base hover:bg-brand-blue transition-all shadow-xl w-full sm:w-auto">
              <span className="relative z-10 flex items-center gap-2">
                View More Details <TbArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
        

        {/* EXPANDING GRID SYSTEM */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[500px] lg:h-[600px] 2xl:h-[850px] gap-4">
          {industries.map((item, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={index}
                onMouseEnter={() => setExpandedIndex(index)}
                onClick={() => setExpandedIndex(index)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out rounded-sm border border-white/5 shadow-2xl
                  ${isExpanded ? 'flex-[3] h-[350px] md:h-full' : 'flex-1 h-[80px] md:h-full'}
                `}
              >
                <motion.img 
                  src={item.image} 
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                    ${isExpanded ? 'scale-110 grayscale-0' : 'scale-100 grayscale opacity-40'}
                  `}
                />
                
                <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-[#022049] via-[#022049]/40 to-transparent ${isExpanded ? 'opacity-90' : 'opacity-60'}`} />
                
                <div className={`absolute top-6 left-6 z-20 flex items-center gap-4 transition-all duration-500 ${isExpanded ? 'opacity-100 scale-110' : 'opacity-40'}`}>
                  <span className="font-mono text-white text-xs font-black">{item.id}</span>
                  <div className={`w-2 h-2 rounded-full bg-brand-blue ${isExpanded ? 'animate-pulse' : ''}`} />
                </div>

                <div className="absolute inset-0 p-8 2xl:p-16 flex flex-col justify-end z-20">
                  <div className="flex items-center gap-6 mb-4">
                    <div className={`p-4 bg-brand-blue text-white rounded-sm shadow-xl transition-transform duration-700 ${isExpanded ? 'scale-110 rotate-0' : 'scale-90 -rotate-12 opacity-50'}`}>
                      {React.createElement(item.icon, { className: "w-6 h-6 2xl:w-12 2xl:h-12" })}
                    </div>
                    <h3 className="text-2xl 2xl:text-5xl font-bold text-white uppercase tracking-tighter whitespace-nowrap">
                      {item.name}
                    </h3>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-xl 2xl:max-w-4xl"
                      >
                        {/* Paragraph style matched to Intro Section */}
                        <p className="text-blue-100/90 text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-4xl leading-relaxed border-l-4 border-brand-blue/50 pl-6 md:pl-10 mb-8">
                          {item.desc}
                        </p>

                        <div className="flex items-center gap-8">
                           <div className="flex flex-col">
                              <span className="text-[8px] md:text-[9px] 2xl:text-xs font-black text-white/40 uppercase tracking-[0.2em]">Key Performance</span>
                              <span className="text-white font-bold 2xl:text-2xl uppercase tracking-wider">{item.stat}</span>
                           </div>
                           <div className="w-px h-8 bg-white/10" />
                           <div className="flex items-center gap-2 group/link">
                              <span className="text-[10px] 2xl:text-sm font-black text-white uppercase tracking-[0.3em]">Explore</span>
                              <HiArrowRight className="text-brand-blue group-hover:translate-x-2 transition-transform" />
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {!isExpanded && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
                    <span className="rotate-90 text-[10px] 2xl:text-sm font-black text-white/20 uppercase tracking-[0.8em] whitespace-nowrap">
                      // {item.name} Sector
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;