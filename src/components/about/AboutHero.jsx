import React from "react";
import { motion } from "framer-motion";
import { TbCircleFilled, TbCompass, TbTarget } from "react-icons/tb";

const AboutHero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] flex flex-col lg:flex-row items-center overflow-hidden">
      {/* BACKGROUND ACCENT: Technical Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* LEFT: Text Content */}
      <div className="w-full lg:w-1/2 p-10 md:p-24 relative z-20 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-[2px] bg-brand-blue" />
          <span className="text-brand-blue font-bold tracking-[0.3em] uppercase text-xs">
            Est. 2004
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
        >
          Built on <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-200 to-white">
            Precision.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <p className="text-blue-100/70 text-lg leading-relaxed max-w-lg mb-12 border-l-2 border-brand-blue/30 pl-8 italic">
            "From a humble machine shop to a global aerospace partner, our
            journey is defined by one metric:{" "}
            <strong>Creating Value with Precision.</strong>"
          </p>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md mb-12">
            Since 2004, <strong>Raghu Vamsi Group</strong> has evolved into a
            global leader in Aerospace & Defense, delivering high-precision
            engineering and sub-assemblies trusted by the world’s largest
            corporations.
          </p>
        </motion.div>
      </div>

      {/* RIGHT: Immersive Image with Technical Overlays */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative">
        {/* Color Tint Overlay */}
        <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay z-10" />

        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/logos/introHome.png"
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          alt="Aerospace Manufacturing"
        />

        {/* Corner HUD Bracket */}
        <div className="absolute bottom-10 right-10 w-24 h-24 border-r-2 border-b-2 border-white/20 z-30 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutHero;