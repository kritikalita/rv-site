import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbSearch, TbMapPin, TbArrowRight } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const jobCategories = [
  { name: "Engineering", count: 124 },
  { name: "Manufacturing", count: 87 },
  { name: "Quality Assurance", count: 32 },
  { name: "Operations", count: 45 },
  { name: "Digital Technology", count: 18 },
  { name: "Supply Chain", count: 26 },
];

const locations = [
  { name: "Hyderabad, IN", count: 214 },
  { name: "PMC - United Kingdom", count: 42 },
  { name: "WMT - Syracuse, USA", count: 15 },
  { name: "Hardware Park, TS", count: 68 },
];

const CareersHero = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  
  // 1. ADD STATE FOR INPUT VALUES
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const navigate = useNavigate();

const handleSearch = () => {
  // Construct parameters: q for search query, l for location
  const params = new URLSearchParams();
  if (searchQuery) params.append('q', searchQuery);
  if (locationQuery) params.append('l', locationQuery);

  navigate(`/careers/search?${params.toString()}`);
};
  return (
    <section className="relative min-h-screen w-full flex flex-col bg-white overflow-hidden">
      
      {/* 1. BACKGROUND SECTION (Unchanged) */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden bg-brand-dark">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="src/assets/images/car4.png" 
          className="w-full h-full object-cover object-center brightness-110 saturate-[0.9]"
          alt="Raghu Vamsi Team Collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022049]/95 via-[#022049]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="backdrop-blur-[2px] bg-white/5 p-4 -ml-4 rounded-sm border-l-4 border-brand-blue/30">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  <span className="text-[#3b82f6] brightness-125">Make a difference</span> with <br />
                  a career at Raghu Vamsi
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE SEARCH HUD */}
      <div className="relative z-30 -mt-16 md:-mt-20 w-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white shadow-2xl shadow-slate-200/60 p-2 md:p-3 rounded-sm flex flex-col md:flex-row items-stretch gap-2 border border-slate-100"
        >
          {/* Job Title Input */}
          <div className="flex-1 relative group">
            <div className="h-full flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-slate-100">
              <TbSearch className="text-slate-400 group-focus-within:text-brand-blue transition-colors mr-4" size={22} />
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setActiveMenu('jobs')}
                onBlur={() => setTimeout(() => setActiveMenu(null), 200)}
                type="text" 
                placeholder="Search for Job Title" 
                className="w-full outline-none text-slate-800 font-medium placeholder:text-slate-400 text-sm md:text-base"
              />
            </div>
            <AnimatePresence>
              {activeMenu === 'jobs' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-full bg-white border border-slate-100 shadow-2xl z-50 p-6 rounded-b-sm"
                >
                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">Job Categories</p>
                  <div className="space-y-3">
                    {jobCategories.map((cat, i) => (
                      <div 
                        key={i} 
                        // 2. CLICK HANDLER TO SET THE VALUE
                        onClick={() => setSearchQuery(cat.name)}
                        className="flex justify-between items-center group/item cursor-pointer hover:text-brand-blue transition-colors"
                      >
                        <span className="text-sm font-bold text-slate-700 group-hover/item:text-brand-blue">{cat.name}</span>
                        <span className="text-xs font-mono text-slate-400">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Location Input */}
          <div className="flex-1 relative group">
            <div className="h-full flex items-center px-6 py-4">
              <TbMapPin className="text-slate-400 group-focus-within:text-brand-blue transition-colors mr-4" size={22} />
              <input 
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                onFocus={() => setActiveMenu('location')}
                onBlur={() => setTimeout(() => setActiveMenu(null), 200)}
                type="text" 
                placeholder="Enter location" 
                className="w-full outline-none text-slate-800 font-medium placeholder:text-slate-400 text-sm md:text-base"
              />
            </div>
            <AnimatePresence>
              {activeMenu === 'location' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-full bg-white border border-slate-100 shadow-2xl z-50 p-6 rounded-b-sm"
                >
                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">Operating Locations</p>
                  <div className="space-y-3">
                    {locations.map((loc, i) => (
                      <div 
                        key={i} 
                        // 3. CLICK HANDLER TO SET THE VALUE
                        onClick={() => setLocationQuery(loc.name)}
                        className="flex justify-between items-center group/item cursor-pointer hover:text-brand-blue transition-colors"
                      >
                        <span className="text-sm font-bold text-slate-700 group-hover/item:text-brand-blue">{loc.name}</span>
                        <span className="text-xs font-mono text-slate-400">{loc.count}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            onClick={handleSearch}
            className="bg-brand-blue text-white px-10 py-5 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-slate-900 transition-all flex items-center justify-center gap-3"
          >
            Search <TbArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* 3. SUB-HEADER (Unchanged) */}
      <div className="py-16 md:py-24 max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12 text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Specialized divisions, one pioneering spirit
          </h2>
          <p className="text-slate-600 text-base md:text-lg lg:text-xl font-light leading-relaxed">
            Raghu Vamsi is defying expectations and developing groundbreaking innovations for 
            generations to come. How will you make your mark on history? Discover a career 
            that will change your world. And ours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHero;