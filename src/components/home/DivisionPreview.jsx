import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import {
  TbRocket,
  TbSettingsAutomation,
  TbCpu,
  TbMapPin,
  TbMaximize,
  TbActivity,
  TbScan
} from "react-icons/tb";

// Import Subsidiary Logos
import logoAdvanced from "../../assets/logos/logoAdvanced.png";
import logoEngines from "../../assets/logos/logoEngines.png";
import logoComprotech from "../../assets/logos/logoComprotech.png";
import logoMachineTools from "../../assets/logos/logoMachineTools.png";
import logoPMC from "../../assets/logos/logoPMC.png";
import logoWMT from "../../assets/logos/logoWMT.png";
import logoArrobot from "../../assets/logos/logoArrobot.png";

const divisions = [
  {
    id: 1,
    title: "Precision OEM Manufacturing",
    icon: TbSettingsAutomation,
    tag: "DIVISION_BETA",
    description:
      "Tier-1 global manufacturing partner delivering critical hardware for the world’s leading aerospace OEMs.",
    subsidiaries: [
      {
        name: "Raghu Vamsi Machine Tools",
        logo: logoMachineTools,
        website: "https://raghuvamsi.com",
        location: "Hardware Park, Hyderabad",
        area: "100,000 Sq. ft",
        capabilities: ["Machining", "Sheet Metal", "Special Processes"],
        image: "src/assets/images/machineTools.webp",
      },
      {
        name: "PMC Group (UK)",
        logo: logoPMC,
        website: "https://pmcgroup.co.uk",
        location: "United Kingdom",
        area: "60,000 Sq. ft",
        capabilities: ["Machining", "Oil & Gas Products", "Grinding"],
        image:
          "https://images.unsplash.com/photo-1516937941348-c09645f31e51?q=80&w=2070",
      },
      {
        name: "WMT Precision LLC (USA)",
        logo: logoWMT,
        website: "https://wmtprecision.com",
        location: "United States of America",
        area: "20,000 Sq. ft",
        capabilities: ["Special Processes", "Vacuum Brazing", "Heat Treatment"],
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
      },
    ],
  },
  {
    id: 2,
    title: "Mission Systems & Propulsion",
    icon: TbRocket,
    tag: "DIVISION_ALPHA",
    description:
      "Developing advanced micro turbojet engines and high-precision hydraulic pumps for aerospace and defense missions.",
    subsidiaries: [
      {
        name: "Raghu Vamsi Advanced Systems",
        logo: logoAdvanced,
        website: "https://raghuvamsi.com",
        location: "Hardware Park, Hyderabad",
        area: "5,000 Sq. ft",
        capabilities: ["Hydraulic Pump"],
        image:
          "https://images.unsplash.com/photo-1581092121497-90cd2a551e32?q=80&w=2070",
      },
      {
        name: "Raghu Vamsi Engines",
        logo: logoEngines,
        website: "https://raghuvamsi.com",
        location: "Hardware Park, Hyderabad",
        area: "100,000 Sq. ft",
        capabilities: ["Micro Turbojet Engines"],
        image:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070",
      },
      {
        name: "Comprotech",
        logo: logoComprotech,
        website: "https://comprotechengineering.com/",
        location: "Hardware Park, Hyderabad",
        area: "20,000 Sq. ft",
        capabilities: ["Machining", "Composite Moulding", "Welding"],
        image:
          "https://images.unsplash.com/photo-1565439380849-536e24f136f7?q=80&w=2070",
      },
    ],
  },
  {
    id: 3,
    title: "DeepTech & Autonomous Products",
    icon: TbCpu,
    tag: "DIVISION_GAMMA",
    description:
      "Engineering the future of autonomy with AI-driven robotics and unmanned systems for modern defense.",
    subsidiaries: [
      {
        name: "ARROBOT",
        logo: logoArrobot,
        website: "https://www.arrobot.co/",
        location: "Hardware Park, Hyderabad",
        area: "12,500 Sq. ft",
        capabilities: [
          "Unmanned Air & Ground Systems",
          "Robotics & Automation",
        ],
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070",
      },
    ],
  },
];

const DivisionsPreview = () => {
  const [activeId, setActiveId] = useState(2);
  const [hoveredSub, setHoveredSub] = useState(null);

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
      {/* Background Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Group Ecosystem
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Industrial <span className="text-brand-blue">Divisions.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Operational Units
              <br />
              <span className="text-brand-blue font-mono text-[9px]">
                Global Subsidiary Network
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-auto min-h-[650px] flex flex-col md:flex-row gap-4 relative z-10">
        {divisions.map((div) => {
          const isActive = activeId === div.id;
          // Theme logic for inactive state: Division 2 uses Sky Blue, others use Gradient
          const isSkyBlueTheme = div.id === 2;

          return (
            <motion.div
              key={div.id}
              layout
              onClick={() => {
                setActiveId(div.id);
                setHoveredSub(null);
              }}
              className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-700 border border-white/5 shadow-2xl
                ${isActive ? "flex-[5]" : 
                  isSkyBlueTheme 
                    ? "bg-gradient-to-br from-blue-50 to-blue-100 flex-[0.5] hover:brightness-105" 
                    : "bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] flex-[0.5] hover:brightness-110"}
              `}
            >
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
                  <span className={`font-mono text-xs font-bold opacity-40 ${isSkyBlueTheme ? "text-brand-dark" : "text-brand-blue"}`}>
                    0{div.id}
                  </span>
                  <div className="rotate-[-90deg] whitespace-nowrap">
                    <h3 className={`text-[10px] font-black uppercase tracking-[0.4em] ${isSkyBlueTheme ? "text-brand-dark/70" : "text-white/70"}`}>
                      {div.title.split(" ")[0]}
                    </h3>
                  </div>
                  <div className={isSkyBlueTheme ? "text-brand-blue" : "text-brand-blue opacity-50"}>
                    <div.icon size={20} />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={hoveredSub ? hoveredSub.name : "main"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] flex flex-col lg:flex-row"
                  >
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col">
                      <div className="flex justify-between items-start mb-8">
                        <div className="p-3 bg-brand-blue text-white rounded-sm shadow-lg">
                          <div.icon size={28} />
                        </div>
                        <span className="text-white/20 font-black text-6xl leading-none">
                          0{div.id}
                        </span>
                      </div>

                      <div className="flex-grow">
                        {hoveredSub ? (
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="space-y-6"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="text-brand-blue font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                                  Our Subsidary
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-black text-white uppercase leading-tight">
                                  {hoveredSub.name}
                                </h3>
                              </div>
                              <a
                                href={hoveredSub.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 hover:bg-brand-blue text-white transition-all rounded-sm group/web"
                              >
                                <HiExternalLink
                                  size={18}
                                  className="group-hover/web:scale-110 transition-transform"
                                />
                              </a>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                              <div className="space-y-1">
                                <p className="text-[9px] font-mono text-blue-200/50 uppercase tracking-widest flex items-center gap-1">
                                  <TbMapPin size={12} /> Location
                                </p>
                                <p className="text-xs text-white font-bold uppercase">
                                  {hoveredSub.location}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-[9px] font-mono text-blue-200/50 uppercase tracking-widest flex items-center gap-1">
                                  <TbMaximize size={12} /> Footprint
                                </p>
                                <p className="text-xs text-white font-bold uppercase">
                                  {hoveredSub.area}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <p className="text-[9px] font-mono text-blue-200/50 uppercase tracking-widest flex items-center gap-1">
                                <TbActivity size={12} /> Core Capabilities
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {hoveredSub.capabilities.map((cap, i) => (
                                  <span
                                    key={i}
                                    className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 text-white font-bold uppercase"
                                  >
                                    {cap}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                              {div.title}
                            </h3>
                            <p className="text-blue-100/70 text-base leading-relaxed italic border-l-2 border-brand-blue/40 pl-6">
                              "{div.description}"
                            </p>
                          </div>
                        )}
                      </div>

                     <div className="mt-12 space-y-4">
  <div className="flex items-center justify-between">
    <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">
      Operational Units
    </p>
    <div className="flex items-center gap-2 opacity-40 group/hint">
      <TbScan size={12} className="text-white group-hover/hint:rotate-90 transition-transform" />
      <span className="text-[8px] font-mono text-white uppercase tracking-widest">
        Hover to Inspect
      </span>
    </div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
    {div.subsidiaries.map((sub, sIdx) => (
      <div
        key={sIdx}
        onMouseEnter={() => setHoveredSub(sub)}
        className={`h-20 border transition-all cursor-crosshair relative flex items-center justify-center p-4 overflow-hidden rounded-sm
              ${
                hoveredSub?.name === sub.name
                  ? "bg-white border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-[1.02]"
                  : "bg-white border-transparent"
              }`}
      >
        <img
          src={sub.logo}
          alt={sub.name}
          className={`max-h-full max-w-full object-contain transition-all duration-500 scale-110
            ${hoveredSub?.name === sub.name ? "drop-shadow-[0_0_8px_rgba(0,71,171,0.4)]" : ""}`}
        />
      </div>
    ))}
  </div>
</div>
                    </div>

                    <div className="w-full lg:w-1/2 h-64 lg:h-full relative overflow-hidden bg-brand-dark border-l border-white/5">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={hoveredSub ? hoveredSub.name : div.tag}
                          initial={{ scale: 1.1, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.9 }}
                          exit={{ scale: 0.9, opacity: 0 }}
                          transition={{ duration: 0.8 }}
                          src={
                            hoveredSub
                              ? hoveredSub.image
                              : "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070"
                          }
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#022049] via-transparent to-transparent opacity-40" />
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