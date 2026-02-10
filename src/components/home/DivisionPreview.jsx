import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiArrowLeft } from "react-icons/hi"; 
import {
  TbRocket,
  TbSettingsAutomation,
  TbCpu,
  TbMapPin,
  TbMaximize,
  TbActivity,
  TbScan,
  TbUsers,
  TbBuildingFactory2,
} from "react-icons/tb";

// Subsidiary Logos (Imports kept as is)
import logoAdvanced from "../../assets/logos/advancedSys.png";
import logoEngines from "../../assets/logos/engines.png";
import logoComprotech from "../../assets/logos/comprotech.png";
import logoMachineTools from "../../assets/logos/RVMT.png";
import logoPMC from "../../assets/logos/PMC.png";
import logoWMT from "../../assets/logos/WMT.png";
import logoArrobot from "../../assets/logos/Arrobot.png";

const divisions = [
  /* Data remains exactly as provided */
  {
    id: 1,
    title: "Precision OEM Manufacturing",
    icon: TbSettingsAutomation,
    tag: "DIVISION_BETA",
    defaultImage: "src/assets/images/precision oem.jpg",
    description: "Delivering high-precision components and assemblies for aerospace and industrial applications with cutting-edge manufacturing technologies.",
    subsidiaries: [
      { name: "Raghu Vamsi Machine Tools", logo: logoMachineTools, website: "https://raghuvamsi.com", location: "Hardware Park, Hyderabad", employees: "> 800", area: "100,000 Sq. ft", capabilities: ["Machining", "Sheet Metal", "Special Processes", "Fasteners"], industries: ["Aerospace", "Oil & Gas", "Power", "Medical", "Defence"], image: "src/assets/images/machineTools.webp" },
      { name: "PMC Group (UK)", logo: logoPMC, website: "https://pmcgroup.co.uk", location: "United Kingdom", employees: "90", area: "60,000 Sq. ft", capabilities: ["Machining", "Oil & Gas Products", "Tungsten Carbide", "Fitting", "Grinding"], industries: ["Oil & Gas"], image: "src/assets/images/PMC.jpg" },
      { name: "WMT Precision LLC (USA)", logo: logoWMT, website: "https://wmtprecision.com/", location: "United States of America", employees: "20", area: "20,000 Sq. ft", capabilities: ["Special Processes", "Welding", "Vacuum Brazing", "Heat Treatment"], industries: ["Aerospace"], image: "src/assets/images/WMT.jpg" },
    ],
  },
  {
    id: 2,
    title: "Mission Systems & Propulsion",
    icon: TbRocket,
    tag: "DIVISION_ALPHA",
    defaultImage: "src/assets/images/mission systems .jpg",
    description: "Developing advanced micro turbojet engines and high-precision hydraulic pumps for aerospace and defense missions.",
    subsidiaries: [
      { name: "Raghu Vamsi Advanced Systems", logo: logoAdvanced, website: "https://raghuvamsi.com", location: "Hardware Park, Hyderabad", employees: "10", area: "5,000 Sq. ft", capabilities: ["Hydraulic Pump"], industries: ["Aerospace", "Defence"], image: "src/assets/images/advancedSystems.jpg" },
      { name: "Raghu Vamsi Engines", logo: logoEngines, website: "https://raghuvamsi.com", location: "Hardware Park, Hyderabad", employees: "> 800", area: "100,000 Sq. ft", capabilities: ["Micro Turbojet Engines"], industries: ["Aerospace", "Defence"], image: "src/assets/images/engines.jpg" },
      { name: "Comprotech", logo: logoComprotech, website: "https://comprotechengineering.com/", location: "Hardware Park, Hyderabad", employees: "> 150", area: "20,000 Sq. ft", capabilities: ["Machining", "Composite Moulding", "Welding", "Missile systems"], industries: ["Defence"], image: "src/assets/images/comprotech.jpg" },
    ],
  },
  {
    id: 3,
    title: "DeepTech & Autonomous Products",
    icon: TbCpu,
    tag: "DIVISION_GAMMA",
    defaultImage: "src/assets/images/impact2.png",
    description: "Engineering the future of autonomy with AI-driven robotics and unmanned systems for modern defense.",
    subsidiaries: [
      { name: "ARROBOT", logo: logoArrobot, website: "https://www.arrobot.co/", location: "Hardware Park, Hyderabad", employees: "> 25", area: "12,500 Sq. ft", capabilities: ["Unmanned Air & Ground Systems", "Robotics & Automation"], industries: ["Defence", "Industrial Automation"], image: "src/assets/images/Arrobot.jpg" },
    ],
  },
];

const DivisionsPreview = () => {
  const [activeId, setActiveId] = useState(1); 
  const [hoveredSub, setHoveredSub] = useState(null);

  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full mb-10 md:mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8 text-center lg:text-left">
          <div className="max-w-2xl 2xl:max-w-4xl w-full">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center justify-center lg:justify-start gap-3 mb-3 md:mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Group Ecosystem</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Industrial <span className="text-brand-blue">Divisions.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Responsive Layout Logic:
        - Mobile/Tablet: flex-col (Vertical stacking)
        - Laptop/Big Screen: flex-row (Horizontal expanding accordion)
      */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 md:px-6 h-auto flex flex-col lg:flex-row gap-4 relative z-10 min-h-[600px]">
        {divisions.map((div) => {
          const isActive = activeId === div.id;
          const isSkyBlueTheme = div.id === 2;

          return (
            <motion.div
              key={div.id}
              layout
              onClick={() => { if (!isActive) { setActiveId(div.id); setHoveredSub(null); } }}
              /* Dynamic Flex/Height for responsiveness:
                 - Mobile: Height changes based on active state (h-20 vs auto)
                 - Desktop: Width changes based on active state (flex-1 vs flex-12)
              */
              className={`relative rounded-sm overflow-hidden transition-all duration-700 border border-white/5 shadow-2xl
                ${isActive 
                  ? "flex-[12] w-full lg:w-auto h-auto min-h-[600px] md:min-h-[650px] 2xl:min-h-[800px] cursor-default" 
                  : "flex-[1] w-full lg:w-auto h-20 lg:h-auto min-h-[80px] lg:min-h-[650px] 2xl:min-h-[800px] cursor-pointer hover:brightness-105"
                }
                ${!isActive && isSkyBlueTheme ? "bg-[#E0F2FE]" : !isActive ? "bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]" : ""}
              `}
            >
              {/* COLLAPSED STATE OVERLAY */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-row lg:flex-col items-center justify-between py-4 lg:py-10 px-6 z-20">
                  <span className={`font-mono text-[10px] md:text-xs font-bold opacity-40 ${isSkyBlueTheme ? "text-brand-dark" : "text-brand-blue"}`}>
                    0{div.id}
                  </span>
                  <div className="lg:rotate-[-90deg] whitespace-nowrap ml-4 lg:ml-0">
                    <h3 className={`text-[10px] md:text-xs 2xl:text-base font-black uppercase tracking-[0.3em] ${isSkyBlueTheme ? "text-brand-dark/70" : "text-white/70"}`}>
                      {div.title}
                    </h3>
                  </div>
                  <div className={`hidden lg:block ${isSkyBlueTheme ? "text-brand-blue" : "text-brand-blue/50"}`}>
                    <div.icon size={20} />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={`content-${div.id}`}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                    className={`absolute inset-0 flex flex-col lg:flex-row ${isSkyBlueTheme ? "bg-[#E0F2FE]" : "bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]"}`}
                  >
                    {/* LEFT CONTENT AREA */}
                    <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12 2xl:p-20 flex flex-col h-full overflow-y-auto custom-industrial-scroll">
                      {/* Sub-Header HUD */}
                      <div className="flex justify-between items-start mb-6 md:mb-8 2xl:mb-12">
                        <div className="p-2 md:p-3 2xl:p-5 bg-brand-blue text-white rounded-sm shadow-lg">
                          <div.icon className="w-6 h-6 2xl:w-10 2xl:h-10" />
                        </div>
                        {hoveredSub && (
                          <button onClick={(e) => { e.stopPropagation(); setHoveredSub(null); }}
                            className={`flex items-center gap-2 text-[9px] 2xl:text-xs font-black uppercase tracking-widest px-3 py-1.5 border rounded-sm transition-colors ${isSkyBlueTheme ? "border-brand-blue/20 text-brand-blue hover:bg-brand-blue/10" : "border-white/20 text-white hover:bg-white/10"}`}>
                            <HiArrowLeft /> Back
                          </button>
                        )}
                        <span className={`font-black text-4xl md:text-6xl 2xl:text-8xl leading-none ${isSkyBlueTheme ? "text-brand-blue/15" : "text-white/15"}`}>
                          0{div.id}
                        </span>
                      </div>

                      {/* MAIN INFO / SUBSIDIARY DETAILS */}
                      <div className="flex-grow min-h-[300px] 2xl:min-h-[450px]">
                        <AnimatePresence mode="wait">
                          {hoveredSub ? (
                            <motion.div key={hoveredSub.name} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 10, opacity: 0 }} className="space-y-6 2xl:space-y-10">
                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="text-brand-blue font-mono text-[9px] 2xl:text-xs font-black uppercase tracking-[0.2em] mb-1 block">Our Subsidiary</span>
                                  <h3 className={`text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-black uppercase leading-tight ${isSkyBlueTheme ? "text-brand-dark" : "text-white"}`}>{hoveredSub.name}</h3>
                                </div>
                                <a href={hoveredSub.website} target="_blank" rel="noopener noreferrer" className={`p-2 md:p-3 2xl:p-5 transition-all rounded-sm ${isSkyBlueTheme ? "bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white" : "bg-white/10 text-white hover:bg-brand-blue"}`}>
                                  <HiExternalLink className="w-4 h-4 2xl:w-8 2xl:h-8" />
                                </a>
                              </div>

                              <div className={`grid grid-cols-2 gap-y-4 md:gap-y-6 2xl:gap-y-10 gap-x-4 pt-4 md:pt-6 border-t ${isSkyBlueTheme ? "border-brand-blue/10" : "border-white/10"}`}>
                                {[
                                  { label: "Location", value: hoveredSub.location, icon: TbMapPin },
                                  { label: "Workforce", value: hoveredSub.employees, icon: TbUsers },
                                  { label: "Area", value: hoveredSub.area, icon: TbMaximize },
                                  { label: "Industries", value: hoveredSub.industries.join(", "), icon: TbBuildingFactory2 }
                                ].map((item, idx) => (
                                  <div key={idx} className="space-y-1">
                                    <p className={`text-[8px] md:text-[9px] 2xl:text-xs font-mono uppercase tracking-widest flex items-center gap-1 ${isSkyBlueTheme ? "text-brand-blue/60" : "text-blue-200/50"}`}><item.icon size={10} /> {item.label}</p>
                                    <p className={`text-[10px] md:text-xs 2xl:text-lg font-bold uppercase ${isSkyBlueTheme ? "text-brand-dark" : "text-white"}`}>{item.value}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div key={`main-desc-${div.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 md:space-y-6 2xl:space-y-10">
                              <h3 className={`text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-black uppercase tracking-tight leading-tight ${isSkyBlueTheme ? "text-brand-dark" : "text-white"}`}>{div.title}</h3>
                              <p className={`text-sm md:text-base 2xl:text-2xl leading-relaxed italic border-l-2 pl-4 md:pl-6 ${isSkyBlueTheme ? "text-brand-dark/70 border-brand-blue/40" : "text-blue-100/70 border-brand-blue/40"}`}>"{div.description}"</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* OPERATIONAL UNITS LOGO GRID */}
                      <div className="mt-8 md:mt-12 2xl:mt-20 space-y-4 2xl:space-y-8">
                        <div className="flex items-center justify-between">
                          <p className="text-[8px] 2xl:text-xs font-black text-brand-blue uppercase tracking-[0.3em]">Operational Units</p>
                          <div className="flex items-center gap-2 opacity-40">
                            <TbScan size={12} className={`${isSkyBlueTheme ? "text-brand-dark" : "text-white"}`} />
                            <span className={`text-[8px] 2xl:text-xs font-mono uppercase tracking-widest ${isSkyBlueTheme ? "text-brand-dark" : "text-white"}`}>Inspect</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 2xl:gap-5">
                          {div.subsidiaries.map((sub, sIdx) => (
                            <motion.div key={sIdx} onMouseEnter={() => setHoveredSub(sub)} onClick={(e) => { e.stopPropagation(); setHoveredSub(sub); }}
                              className={`h-12 md:h-16 lg:h-20 2xl:h-32 border transition-all cursor-pointer relative flex items-center justify-center p-2 md:p-4 rounded-sm
                                ${hoveredSub?.name === sub.name ? "bg-white border-brand-blue shadow-lg scale-[1.05]" : "bg-white border-transparent hover:border-brand-blue/30"}`}>
                              <img src={sub.logo} alt={sub.name} className="max-h-full max-w-full object-contain" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* IMAGE PREVIEW - Stacks above on mobile, side-by-side on desktop */}
                    <div className="w-full lg:w-1/2 h-56 sm:h-72 md:h-80 lg:h-full relative overflow-hidden bg-brand-dark lg:border-l border-white/5 order-first lg:order-last">
                      <AnimatePresence mode="wait">
                        <motion.img key={hoveredSub ? hoveredSub.name : `default-${div.id}`} initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }} transition={{ duration: 0.6 }}
                          src={hoveredSub ? hoveredSub.image : div.defaultImage} className="w-full h-full object-cover" />
                      </AnimatePresence>
                      <div className={`absolute inset-0 opacity-40 ${isSkyBlueTheme ? "bg-gradient-to-t lg:bg-gradient-to-r from-[#E0F2FE] via-transparent to-transparent" : "bg-gradient-to-t lg:bg-gradient-to-r from-[#022049] via-transparent to-transparent"}`} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default DivisionsPreview;