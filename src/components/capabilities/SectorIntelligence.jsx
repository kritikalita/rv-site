import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectorData } from "../../data/capabilitiesData";
import {
  TbListSearch,
  TbCircleCheck,
  TbChevronDown,
  TbChevronUp,
} from "react-icons/tb";

const SectorIntelligence = () => {
  const [activeSector, setActiveSector] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const scrollContainerRef = useRef(null);
  const currentSector = sectorData?.[activeSector] || {};
  const products = currentSector?.products || [];

  const displayItem = products[activeProduct] || products[0] || {};

  useEffect(() => {
    const checkOverflow = () => {
      if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        setHasOverflow(scrollHeight > clientHeight + 5);
      }
    };

    const timer = setTimeout(checkOverflow, 100);
    window.addEventListener("resize", checkOverflow);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [activeSector, products]);

  const activeImage = isHovered
    ? displayItem?.image || currentSector?.mainImage
    : currentSector?.mainImage || currentSector?.image;

  const activeTitle = isHovered
    ? displayItem?.name || "Unit Specification"
    : currentSector?.title || "Overview";
  const activeDesc = isHovered
    ? displayItem?.details || displayItem?.desc
    : currentSector?.description || currentSector?.intel;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollTop, clientHeight } = scrollContainerRef.current;
      const scrollTo =
        direction === "up"
          ? scrollTop - clientHeight / 2
          : scrollTop + clientHeight / 2;
      scrollContainerRef.current.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="sector-intelligence"
      className="py-12 md:py-24 2xl:py-32 bg-white relative border-t border-brand-border overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8 mb-8 md:mb-16">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">
                Market Intelligence
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Sector <span className="text-brand-blue">Solutions.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 bg-blue-50 p-1.5 rounded-sm border border-blue-100 w-full lg:w-auto">
            {sectorData?.map((sector, i) => (
              <button
                key={sector.id || i}
                onClick={() => {
                  setActiveSector(i);
                  setActiveProduct(0);
                  setIsHovered(false);
                }}
                className={`flex-grow lg:flex-grow-0 px-3 md:px-6 py-2 font-mono text-[8px] md:text-[10px] 2xl:text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                  activeSector === i
                    ? "bg-brand-blue text-white shadow-lg"
                    : "text-brand-dark/50 hover:text-brand-blue hover:bg-white"
                }`}
              >
                {sector.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-brand-blue/10 rounded-sm shadow-2xl overflow-hidden min-h-[500px] lg:h-[550px] 2xl:h-[750px]">
          
          <div className="lg:col-span-7 relative h-[350px] sm:h-[450px] lg:h-full overflow-hidden group">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeImage} 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeImage}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  alt=""
                />

                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(2, 32, 73, 0.95) 0%, rgba(2, 32, 73, 0.4) 40%, transparent 70%)",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeSector}-${activeProduct}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2 md:mb-4">
                      <span className="bg-brand-blue text-white font-mono text-[8px] md:text-[9px] 2xl:text-xs px-2 py-1 tracking-widest uppercase">
                        {isHovered ? `0${activeProduct + 1}` : "Industry Overview"}
                      </span>
                      <div className="h-[1px] flex-grow bg-white/20" />
                    </div>
                    <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-white uppercase tracking-tighter mb-2 md:mb-4 leading-tight">
                      {activeTitle}
                    </h3>
                    <p className="text-blue-50 text-[11px] md:text-sm 2xl:text-2xl leading-relaxed max-w-xl italic border-l-2 border-brand-blue pl-4 md:pl-6 bg-[#022049]/60 backdrop-blur-sm py-2">
                      "{activeDesc}"
                    </p>
                  </motion.div>
               </AnimatePresence>
            </div>
          </div>

          <div
            className="lg:col-span-5 flex flex-col h-[400px] lg:h-full bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-brand-blue/10 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(true)}
          >
            <div
              className="p-4 md:p-6 border-b border-white/10 flex justify-between items-center z-20 shrink-0 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #022049 0%, #063677 100%)",
              }}
            >
              <div className="flex items-center gap-2">
                <TbListSearch className="text-blue-300" size={16} />
                <span className="text-[10px] md:text-[11px] 2xl:text-sm font-black uppercase tracking-[0.2em] text-white">
                  Our Products
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* ADDED: Navigation Help Text */}
                <span className="hidden sm:block text-[8px] md:text-[9px] font-mono font-bold text-blue-300/60 uppercase tracking-widest">
                  Navigate
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); scroll("up"); }}
                    className="text-white/40 hover:text-white transition-all p-1 hover:bg-white/10 rounded-sm"
                    title="Scroll Up"
                  >
                    <TbChevronUp size={20} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); scroll("down"); }}
                    className="text-white/40 hover:text-white transition-all p-1 hover:bg-white/10 rounded-sm"
                    title="Scroll Down"
                  >
                    <TbChevronDown size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex-grow overflow-y-auto custom-industrial-scroll scroll-smooth no-scrollbar md:block"
            >
              {products.map((item, idx) => {
                const isSelected = isHovered && activeProduct === idx;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveProduct(idx)}
                    onClick={() => setActiveProduct(idx)}
                    className={`w-full flex items-center gap-4 p-4 md:p-5 2xl:p-8 border-b border-brand-blue/5 transition-all duration-500 text-left ${
                      isSelected
                        ? "bg-gradient-to-r from-[#022049] to-[#063677] shadow-xl z-10"
                        : "hover:bg-white/50 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 md:h-14 md:w-14 2xl:h-20 2xl:w-20 shrink-0 rounded-sm overflow-hidden border transition-all duration-500 ${isSelected ? "border-white/20" : "border-brand-blue/10 bg-white"}`}
                    >
                      <img
                        src={item.image}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? "scale-110" : "scale-100 opacity-80"}`}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow">
                      <h4
                        className={`text-[10px] md:text-[11px] 2xl:text-lg font-bold uppercase tracking-tight leading-tight transition-colors ${isSelected ? "text-white" : "text-brand-dark/70"}`}
                      >
                        {item.name}
                      </h4>
                    </div>
                    {isSelected && (
                      <TbCircleCheck
                        className="text-white animate-pulse"
                        size={18}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorIntelligence;