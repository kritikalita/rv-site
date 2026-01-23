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
      className="py-24 bg-white relative border-t border-brand-border overflow-hidden"
    >
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Market Intelligence
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Sector <span className="text-brand-blue">Solutions.</span>
            </h2>
          </div>

          {/* UPDATED: Sky Blue Tab Container */}
          <div className="flex flex-wrap gap-2 bg-blue-50 p-1.5 rounded-sm border border-blue-100">
            {sectorData?.map((sector, i) => (
              <button
                key={sector.id || i}
                onClick={() => {
                  setActiveSector(i);
                  setActiveProduct(0);
                  setIsHovered(false);
                }}
                className={`px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
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

        {/* DASHBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-brand-blue/10 rounded-sm shadow-2xl overflow-hidden h-[550px]">
          {/* LEFT VIEWPORT: Scrim adjusted to bottom only */}
          <div className="lg:col-span-7 relative h-full overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSector}-${activeProduct}-${isHovered}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img
                  src={activeImage}
                  className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? "scale-110 brightness-110" : "scale-100 brightness-100"}`}
                  alt=""
                />

                {/* Scrim Overlay: ONLY at the bottom, removed top/corner radial tints */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(2, 32, 73, 0.9) 0%, rgba(2, 32, 73, 0.4) 30%, transparent 60%)",
                  }}
                />

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-blue text-white font-mono text-[9px] px-2 py-1 tracking-widest uppercase">
                      {isHovered
                        ? `0${activeProduct + 1}`
                        : "Industry Overview"}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/20" />
                  </div>
                  <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-4 leading-tight">
                    {activeTitle}
                  </h3>
                  <p className="text-blue-50 text-sm leading-relaxed max-w-xl italic border-l-2 border-brand-blue pl-6 bg-[#022049]/60 backdrop-blur-sm py-2">
                    "{activeDesc}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SCROLLABLE LIST: Updated to Sky Blue Theme */}
          <div
            className="lg:col-span-5 flex flex-col h-full bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-md border-l border-brand-blue/10 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="p-6 border-b border-white/10 flex justify-between items-center z-20 shrink-0 shadow-xl"
              style={{
                background: "linear-gradient(135deg, #022049 0%, #063677 100%)",
              }}
            >
              <div className="flex items-center gap-2">
                <TbListSearch className="text-blue-300" size={16} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                  Our Products
                </span>
              </div>

              <button
                onClick={() => scroll("up")}
                className="text-white/40 hover:text-white transition-all p-1 hover:bg-white/10 rounded-sm"
              >
                <TbChevronUp size={20} />
              </button>
            </div>

            {/* SCROLLABLE AREA */}
            <div
              ref={scrollContainerRef}
              className="flex-grow overflow-y-auto custom-industrial-scroll scroll-smooth"
            >
              {products.map((item, idx) => {
                const isSelected = isHovered && activeProduct === idx;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveProduct(idx)}
                    className={`w-full flex items-center gap-4 p-5 border-b border-brand-blue/5 transition-all duration-500 text-left ${
                      isSelected
                        ? "bg-gradient-to-r from-[#022049] to-[#063677] shadow-xl z-10"
                        : "hover:bg-white/50 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`h-14 w-14 shrink-0 rounded-sm overflow-hidden border transition-all duration-500 ${isSelected ? "border-white/20" : "border-brand-blue/10 bg-white"}`}
                    >
                      <img
                        src={item.image}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? "scale-110" : "scale-100 opacity-80"}`}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow">
                      <h4
                        className={`text-[11px] font-bold uppercase tracking-tight leading-tight transition-colors ${isSelected ? "text-white" : "text-brand-dark/70"}`}
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

            {/* FOOTER AREA */}
            <div className="p-4 bg-white/40 border-t border-brand-blue/10 flex justify-between items-center z-20 shrink-0 min-h-[60px]">
              <div className="flex-grow">
                {hasOverflow && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 px-2"
                  >
                    <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.15em]">
                      Scroll to explore products
                    </span>
                  </motion.div>
                )}
              </div>

              <button
                onClick={() => scroll("down")}
                className="text-brand-blue/40 hover:text-brand-blue transition-colors p-1"
              >
                <TbChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-industrial-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-industrial-scroll::-webkit-scrollbar-track {
          background: rgba(0, 71, 171, 0.05);
        }
        .custom-industrial-scroll::-webkit-scrollbar-thumb {
          background: rgba(0, 71, 171, 0.2);
          border-radius: 2px;
        }
        .custom-industrial-scroll::-webkit-scrollbar-thumb:hover {
          background: #0047ab;
        }
      `}</style>
    </section>
  );
};

export default SectorIntelligence;