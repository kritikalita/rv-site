import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { TbRocket, TbPlane, TbActivity, TbFlame, TbServer, TbCircleFilled } from "react-icons/tb";

const industries = [
  { id: "01", name: "Aerospace", icon: TbPlane, image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070&auto=format&fit=crop", desc: "Critical structural components and engine parts.", stat: "10k+ Components"},
  { id: "02", name: "Oil & Gas", icon: TbFlame, image: "src/assets/images/oil.jpeg", desc: "Robust valves and flow control systems.", stat: "API Compliant"},
  { id: "03", name: "Power", icon: TbActivity, image: "src/assets/images/power.jpeg", desc: "Advanced components for sustainable energy grids.", stat: "Grid Scale Tech"},
  { id: "04", name: "Medical", icon: TbActivity, image: "src/assets/images/Medical.jpeg", desc: "Implants and surgical instrumentation.", stat: "ISO 13485"},
];

const Industries = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      
      {/* BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER: Responsive stacking and 2xl alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3 md:mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Market Expertise</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Industries We <span className="text-brand-blue">Serve.</span>
            </h2>
          </div>

         <div className="mt-4 md:mt-8 w-full md:w-auto">
               <Link 
                to="/capabilities#sector-intelligence" 
                className="group relative flex items-center justify-center md:justify-start gap-6 bg-[#020617] text-white px-8 py-4 2xl:px-12 2xl:py-6 font-black uppercase tracking-[0.4em] text-[9px] 2xl:text-xs hover:bg-brand-blue transition-all shadow-2xl overflow-hidden w-full md:w-auto"
               >
                <span className="relative z-10 flex items-center gap-3">
                  In details <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
              </Link>
            </div>
        </div>

        {/* MAIN INTERACTIVE CONTAINER */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[480px] 2xl:h-[650px] gap-6 md:gap-8">
          
          {/* NAVIGATION LIST 
              Mobile: Stacked 1 column
              Tablet: 2 Columns (sm:grid-cols-2)
              Laptop: 1 Column (lg:grid-cols-1) 
          */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 2xl:gap-4">
              {industries.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveTab(index)}
                  onClick={() => setActiveTab(index)}
                  className={`group relative p-4 md:p-5 2xl:p-8 cursor-pointer transition-all duration-500 border border-white/5 rounded-sm overflow-hidden
                    ${activeTab === index 
                      ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] shadow-2xl border-brand-blue/30' 
                      : 'bg-transparent hover:bg-slate-50 border-transparent'
                    }`}
                >
                  {activeTab === index && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue shadow-[0_0_10px_#0047AB]"
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-[9px] md:text-[10px] 2xl:text-sm transition-colors ${activeTab === index ? 'text-white font-bold' : 'text-slate-400'}`}>
                        {item.id}
                      </span>
                      <h3 className={`text-sm md:text-base 2xl:text-2xl font-bold uppercase tracking-tight transition-colors ${activeTab === index ? 'text-white' : 'text-slate-500'}`}>
                        {item.name}
                      </h3>
                    </div>
                    
                    <motion.div 
                      initial={false}
                      animate={{ opacity: activeTab === index ? 1 : 0, x: activeTab === index ? 0 : -10 }}
                      className="hidden md:block"
                    >
                      <HiArrowRight className={activeTab === index ? "text-white" : "text-brand-blue"} />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL PREVIEW AREA */}
          <div className="w-full lg:w-2/3 relative rounded-sm overflow-hidden h-[280px] sm:h-[400px] md:h-[450px] lg:h-auto border border-white/5 shadow-2xl group/preview bg-[#022049] order-1 lg:order-2">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={industries[activeTab].image} 
                  alt={industries[activeTab].name}
                  className="w-full h-full object-cover opacity-60" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#022049] via-transparent to-[#022049]/40" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-10 2xl:p-16 w-full text-white z-30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-5 2xl:gap-8">
                      {/* Responsive Icon Container */}
                      <div className="p-3 md:p-4 2xl:p-6 bg-brand-blue rounded-sm text-white shadow-[0_0_20px_rgba(0,71,171,0.4)] flex-shrink-0">
                        {React.createElement(industries[activeTab].icon, { className: "w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10" })}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl 2xl:text-6xl font-black text-white uppercase tracking-tight">
                          {industries[activeTab].name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Corner Bracket */}
                <div className="hidden sm:block absolute top-6 right-6 2xl:top-10 2xl:right-10 w-12 h-12 2xl:w-20 2xl:h-20 border-t border-r border-brand-blue/40" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;