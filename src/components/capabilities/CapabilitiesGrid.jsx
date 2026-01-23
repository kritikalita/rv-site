import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbCircleFilled,
  TbDatabase,
  TbBinaryTree,
  TbPlus,
  TbMinus,
} from "react-icons/tb";
import { capabilitiesData } from "../../data/capabilitiesData";

const CapabilitiesGrid = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const currentData = capabilitiesData[active];
  const hasInfra = currentData.infra && currentData.infra.length > 0;

  const handleTabChange = (i) => {
    setActive(i);
    setExpandedIndex(null);
  };

  const toggleInfra = (idx) => {
    setExpandedIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Manufacturing Audit
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Core <span className="text-brand-blue">Verticals.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {capabilitiesData.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(i)}
              className={`group relative p-5 border transition-all duration-500 rounded-sm text-left overflow-hidden h-24
                ${
                  active === i
                    ? "bg-gradient-to-br from-[#022049] to-[#063677] border-brand-blue"
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

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`relative bg-slate-100 border border-brand-border rounded-sm overflow-hidden min-h-[580px] shadow-2xl grid grid-cols-1 ${hasInfra ? "lg:grid-cols-12" : ""}`}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={currentData.image}
                  className="w-full h-full object-cover brightness-110 transition-all duration-700"
                  alt={currentData.title}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(1, 8, 22, 0.9) 0%, rgba(1, 8, 22, 0.4) 40%, transparent 70%)",
                  }}
                />
              </div>

              <div
                className={`${hasInfra ? "lg:col-span-7" : "w-full"} p-10 lg:p-14 flex flex-col justify-end relative z-10 overflow-hidden group/left`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "0%" : "-100%" }}
                  transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(to bottom right, #022049, #063677)",
                  }}
                  className="absolute inset-0 z-20 p-10 lg:p-14 text-white flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <currentData.icon
                      className="animate-pulse text-white"
                      size={32}
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
                      <p
                        className={`text-sm font-medium leading-relaxed border-l-2 border-white/30 pl-4 text-blue-50 ${!hasInfra ? "max-w-3xl" : ""}`}
                      >
                        {currentData.engineering?.para1}
                      </p>
                      <p
                        className={`text-[12px] text-white/70 leading-relaxed font-light ${!hasInfra ? "max-w-3xl" : ""}`}
                      >
                        {currentData.engineering?.para2}
                      </p>
                      <div
                        className={`bg-white/5 p-5 border border-white/10 rounded-sm ${!hasInfra ? "max-w-3xl" : ""}`}
                      >
                        <p className="text-[11px] leading-relaxed text-blue-200/80 italic font-mono uppercase tracking-wider">
                          {currentData.engineering?.para3}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div
                  className={`transition-all duration-500 relative z-10 ${isHovered ? "opacity-10 blur-sm scale-95" : "opacity-100"}`}
                >
                  <div className="bg-black/10 backdrop-blur-[2px] p-6 -ml-6 rounded-sm inline-block">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-[0.9]">
                      {currentData.title} <br />{" "}
                      <span className="text-brand-blue">Readiness.</span>
                    </h3>
                    <p
                      className={`text-slate-100 text-lg md:text-xl leading-relaxed border-l-4 border-brand-blue pl-8 italic ${hasInfra ? "max-w-xl" : "max-w-3xl"}`}
                    >
                      "{currentData.desc}"
                    </p>
                  </div>
                </div>
              </div>

              {hasInfra && (
                <div
                  /* UPDATED: Changed background color to Sky Blue gradient used in Ethos section */
                  className={`lg:col-span-5 bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-xl border-l border-brand-border p-10 lg:p-14 relative z-10 flex flex-col justify-center transition-all duration-500 
                    ${isHovered ? "opacity-20 blur-md scale-[0.98]" : "opacity-100 blur-0 scale-100"}`}
                >
                  <div className="flex items-center gap-2 mb-8">
                    <TbDatabase className="text-brand-blue" size={14} />
                    <span className="text-[10px] font-mono text-brand-dark/60 font-bold uppercase tracking-widest">
                      Our Infrastructure
                    </span>
                  </div>
                  <div className="space-y-4">
                    {currentData.infra.map((asset, idx) => {
                      const assetName =
                        typeof asset === "object" ? asset.name : asset;
                      const hasSpecs =
                        currentData.specs && currentData.specs.length > 0;
                      const canExpand =
                        !!asset.details || hasSpecs || !!asset.table;
                      const isExpanded = expandedIndex === idx;

                      return (
                        <div
                          key={idx}
                          className="border-b border-brand-blue/10 pb-4 group/item"
                        >
                          <div
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => canExpand && toggleInfra(idx)}
                          >
                            <div className="flex items-center gap-4">
                              <TbBinaryTree
                                className="text-brand-blue/30 group-hover/item:text-brand-blue transition-colors"
                                size={14}
                              />
                              <span className="text-xs md:text-sm font-bold text-brand-dark/80 uppercase tracking-tight group-hover/item:text-brand-dark transition-colors">
                                {assetName}
                              </span>
                            </div>
                            {canExpand && (
                              <div className="text-brand-blue transition-transform duration-300">
                                {isExpanded ? (
                                  <TbMinus size={16} />
                                ) : (
                                  <TbPlus size={16} />
                                )}
                              </div>
                            )}
                          </div>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 pl-8 pr-4">
                                  {asset.table ? (
                                    /* UPDATED: Table background to solid white for better contrast on Sky Blue */
                                    <div className="border border-brand-blue/10 rounded-sm overflow-hidden bg-white mb-4">
                                      <table className="w-full text-left border-collapse">
                                        <thead>
                                          <tr className="border-b border-brand-blue/10 bg-brand-blue/5">
                                            {asset.table.headers.map(
                                              (header, hIdx) => (
                                                <th
                                                  key={hIdx}
                                                  className="p-2 text-[8px] font-mono uppercase tracking-widest text-brand-blue border-r border-brand-blue/10 last:border-0"
                                                >
                                                  {header}
                                                </th>
                                              ),
                                            )}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            {asset.table.data.map(
                                              (cell, cIdx) => (
                                                <td
                                                  key={cIdx}
                                                  className="p-2 text-[10px] font-bold text-brand-dark border-r border-brand-blue/10 last:border-0"
                                                >
                                                  {cell}
                                                </td>
                                              ),
                                            )}
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  ) : null}

                                  {asset.details ? (
                                    <p className="text-[11px] leading-relaxed text-slate-600 border-l border-brand-blue/20 pl-4 mb-4">
                                      {asset.details}
                                    </p>
                                  ) : null}

                                  {asset.note && (
                                    <p className="text-[10px] italic text-slate-500 leading-relaxed border-l border-brand-blue/30 pl-3">
                                      {asset.note}
                                    </p>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;