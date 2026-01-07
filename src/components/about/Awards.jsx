import React from "react";
import { motion } from "framer-motion";
import { TbAward, TbCircleFilled } from "react-icons/tb";

// Import logos directly
import honeywellLogo from "../../assets/logos/honeywell.png";
import geLogo from "../../assets/logos/ge.png";
import tataLogo from "../../assets/logos/tata.png";
import halLogo from "../../assets/logos/hal.png";
import collinsLogo from "../../assets/logos/collins.webp";

const awardData = [
  {
    issuer: "Honeywell",
    logo: honeywellLogo,
    title: "Best Supplier",
    category: "Execution & Delivery",
    year: "2023",
  },
  {
    issuer: "Collins Aerospace",
    logo: collinsLogo,
    title: "Gold Category",
    category: "Quality Excellence",
    year: "2023",
  },
  {
    issuer: "TATA",
    logo: tataLogo,
    title: "Best Supplier",
    category: "Aero Engines",
    year: "2023",
  },
  {
    issuer: "HAL",
    logo: halLogo,
    title: "Top Performance",
    category: "Strategic Programs",
    year: "2023",
  },
  {
    issuer: "GE Aviation",
    logo: geLogo,
    title: "Global Supplier",
    category: "Delivery & Quality",
    year: "2023",
  },
  {
    issuer: "Collins Aerospace",
    logo: collinsLogo,
    title: "Supplier Award",
    category: "Quality & Compliance",
    year: "2025",
  },
];

const Awards = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* UNIFORM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
                Excellence Registry
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Validated by <br />
              <span className="text-brand-blue">Global Partners.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Performance Log<br />
              <span className="text-brand-blue font-mono text-[9px]">
                Aerospace Supply Excellence
              </span>
            </p>
          </div>
        </div>

        {/* REGISTRY GRID: Dark Blue / Deep Navy Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardData.map((award, index) => {
            const isGradient = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                /* UPDATED COLORS: Darker Blue / Deep Navy to match your core theme */
                className={`group relative p-8 flex flex-col min-h-[240px] border border-white/5 transition-all duration-500 overflow-hidden shadow-2xl
                  ${
                    isGradient
                      ? "bg-gradient-to-br from-[#020617] via-[#010b1a] to-[#001a40]"
                      : "bg-[#010816] hover:bg-[#020d1f]"
                  }`}
              >
                {/* HUD Scanning Glow */}
                <div className="absolute -right-2 -top-2 w-24 h-24 bg-white blur-[40px] group-hover:bg-brand-blue/15 transition-all duration-700" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-2.5 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm">
                    <TbAward size={20} />
                  </div>
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-brand-blue/50">
                    {award.year}
                  </span>
                </div>

                <div className="mb-6 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {award.title}
                    </h3>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-l border-brand-blue/40 pl-4">
                    {award.category}
                  </p>
                </div>

                {/* Partner Branding Footer */}
                <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between relative z-10">
                  <div className="h-5 w-20 relative flex items-center">
                    <img
                      src={award.logo}
                      alt={award.issuer}
                      className="max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                    {award.issuer}
                  </span>
                </div>

                {/* HUD Bracket Styling */}
                <div className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-700 w-0 group-hover:w-full bg-brand-blue/50" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
