import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCircleFilled, TbDatabase, TbCpu } from "react-icons/tb";
import { capabilitiesData } from "../../pages/capabilitiesData";

const CapabilitiesGrid = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Helper to get current item data
  const currentData = capabilitiesData[active];

  return (
    <section
      id="services-grid"
      className="py-24 bg-white relative border-t border-brand-border overflow-visible"
    >
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Manufacturing Audit
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Core <span className="text-brand-blue">Verticals.</span>
            </h2>
          </div>
        </div>

        {/* 1. SELECTOR GRID - UPDATED WITH GRADIENT BLUE */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {capabilitiesData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`group relative p-4 border transition-all duration-500 rounded-sm text-left overflow-hidden
                ${
                  active === i
                    ? "bg-gradient-to-br from-[#0047AB] to-[#002D6B] border-brand-blue shadow-[0_0_20px_rgba(0,71,171,0.3)]"
                    : "bg-white border-brand-border hover:border-brand-blue/50"
                }`}
            >
              <div className="flex flex-col justify-between h-full relative z-10">
                <item.icon
                  size={20}
                  className={`mb-4 ${
                    active === i ? "text-white" : "text-brand-blue"
                  }`}
                />
                <span
                  className={`text-[10px] font-black uppercase tracking-tighter leading-tight
                  ${active === i ? "text-white" : "text-brand-dark"}`}
                >
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* 2. INTELLIGENCE DOSSIER */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative bg-[#010816] border border-white/10 rounded-sm overflow-hidden min-h-[550px] grid grid-cols-1 lg:grid-cols-12 shadow-2xl"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={currentData.image}
                  className="w-full h-full object-cover opacity-60 transition-opacity duration-700"
                  alt={currentData.title}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at center, transparent 20%, #010816 100%)",
                    opacity: 0.7,
                  }}
                />
              </div>

              {/* CONTENT LEFT (The Hover Trigger Side) */}
              <div
                className="lg:col-span-7 p-10 lg:p-14 flex flex-col justify-between relative z-10 overflow-hidden group/left"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/30 shadow-[0_0_15px_#0047AB] animate-scan" />

                {/* DYNAMIC HOVER OVERLAY */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
                  style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 70%)' }}
                  className="absolute inset-0 z-20 p-10 lg:p-14 text-white flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <currentData.icon
                      className="animate-pulse text-white"
                      size={36}
                    />

                    <h4 className="text-2xl font-black uppercase tracking-tighter">
                      {currentData.title}{" "}
                      <span className="text-white/40 text-lg block lg:inline">
                        Intelligence
                      </span>
                    </h4>
                  </div>

                  <div className="no-scrollbar overflow-y-auto pr-4">
                    <div className="space-y-6">
                      <p className="text-xs lg:text-sm font-medium leading-relaxed border-l-2 border-white/30 pl-4">
                        {currentData.engineering?.para1}
                      </p>

                      <p className="text-[11px] lg:text-[12px] text-white/80 leading-relaxed font-light">
                        {currentData.engineering?.para2}
                      </p>

                      <div className="bg-white/5 p-4 border border-white/10 rounded-sm">
                        <p className="text-[11px] leading-relaxed text-white/70">
                          {currentData.engineering?.para3}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* MAIN CONTENT (Fades when hovered) */}
                <div
                  className={`transition-opacity duration-300 ${
                    isHovered ? "opacity-10" : "opacity-100"
                  }`}
                >
                  <h3 className="text-5xl font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                    {currentData.title} <br />{" "}
                    <span className="text-brand-blue/80">Readiness.</span>
                  </h3>
                  <p className="text-white text-xl leading-relaxed mb-10 border-l-4 border-brand-blue pl-8 italic max-w-xl drop-shadow-md">
                    "{currentData.desc}"
                  </p>
                </div>
              </div>

              {/* CONTENT RIGHT */}
              <div className="lg:col-span-5 bg-brand-dark/40 backdrop-blur-xl border-l border-white/10 p-10 lg:p-14 relative z-10">
                <div className="flex items-center gap-2 mb-10">
                  <TbDatabase className="text-brand-blue" size={14} />
                  <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-widest">
                    Our Infrastructure
                  </span>
                </div>
                <div className="space-y-8">
                  {currentData.infra.map((asset, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >
                      <span className="text-sm font-bold text-white uppercase tracking-tight transition-colors hover:text-brand-blue">
                        {asset}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;