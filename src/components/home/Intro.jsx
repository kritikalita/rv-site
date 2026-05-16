import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  TbUsers,
  TbMapPin,
  TbChartBar,
  TbTrophy,
  TbCircleFilled,
} from "react-icons/tb";

const StatCard = ({
  number,
  label,
  icon: Icon,
  delay,
  isGradient,
  suffix = "+",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    /* Adjusted padding for mobile (p-4) to save vertical space */
    className={`relative p-4 sm:p-5 md:p-6 2xl:p-8 flex flex-col justify-between overflow-hidden border border-white/5 shadow-xl transition-all duration-500 group
      ${
        isGradient
          ? "bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]"
          : "bg-[#010816]"
      }`}
  >
    <div className="absolute -right-2 -top-2 w-16 h-16 bg-brand-blue/5 blur-[20px] group-hover:bg-brand-blue/15 transition-all duration-700" />

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div
          className={`p-1.5 rounded-sm ${isGradient ? "bg-white/10 text-white" : "bg-brand-blue/10 text-brand-blue"}`}
        >
          {Icon && (
            <Icon
              size={16}
              className="md:w-[18px] 2xl:w-[24px]"
              strokeWidth={2}
            />
          )}
        </div>
        <TbCircleFilled
          className={`text-[4px] animate-pulse ${isGradient ? "text-blue-300" : "text-brand-blue"}`}
        />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-black text-white tabular-nums tracking-tighter">
        {number}
        <span className="text-brand-blue text-lg md:text-xl">{suffix}</span>
      </h3>

      <p
        className={`text-[7px] sm:text-[8px] md:text-[9px] 2xl:text-[11px] font-black uppercase tracking-[0.2em] pt-2 md:pt-3 border-t transition-colors
        ${isGradient ? "text-blue-100/50 border-white/10" : "text-slate-500 border-white/5"}`}
      >
        {label}
      </p>
    </div>
    <div className="absolute bottom-0 left-0 h-[2px] transition-all duration-700 w-0 group-hover:w-full bg-brand-blue" />
  </motion.div>
);

const Intro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yStats = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section
      ref={ref}
      className="relative py-12 md:py-24 2xl:py-32 bg-white overflow-hidden border-b border-brand-border"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* TEXT CONTENT: Now triggers 2-column layout on md (tablets) */}
        <div className="relative z-20 flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="h-[2px] w-8 md:w-12 bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-sm">
              Corporate Profile
            </span>
          </motion.div>

       

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark mb-6 md:mb-8 tracking-tighter leading-tight"
          >
            Engineering Trust <br />
            <span className="text-brand-blue">Across Decades.</span>
          </motion.h2>

          {/* Optimized Paragraph Scaling */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 
    text-base              /* Mobile: 16px */
    sm:text-lg             /* Small Tablets: 18px */
    md:text-xl             /* iPads/Tablets: 20px */
    lg:text-xl             /* Laptops: 20px */
    2xl:text-4xl           /* Ultrawide: 36px - Big & Bold */
    leading-relaxed 
    max-w-xl md:max-w-2xl 2xl:max-w-5xl 
    border-l-4 border-brand-blue/30 
    pl-6 md:pl-10 
    mb-10 md:mb-16 
    text-left"
          >
            The early foundations of the business started by{" "}
            <span className="font-bold text-brand-dark">
              Mr. G. Thrimurthulu in 1992
            </span>
            , in the area of Power Transmission and initiated cast iron castings
            and machining in 1998 led the group into gaining expertise and
            developing the capabilities in precision engineering.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center md:items-start w-full sm:w-auto">
            <Link
              to="/about"
              className="group relative flex items-center justify-center gap-4 bg-[#010816] text-white px-8 py-4 2xl:px-16 2xl:py-8 font-black uppercase tracking-[0.3em] text-[10px] 2xl:text-base hover:bg-brand-blue transition-all shadow-xl w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our History{" "}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="flex items-center gap-3 md:gap-4 border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-8">
              <HiCheckCircle className="text-brand-blue text-2xl md:text-3xl 2xl:text-5xl" />
              <div className="text-left">
                <p className="text-[8px] md:text-[9px] 2xl:text-xs font-black text-brand-dark uppercase tracking-widest leading-tight">
                  AS9100D <br /> Certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS & IMAGE SECTION */}
        <div className="relative mt-8 md:mt-0">
          {/* MOBILE & TABLET: 2x2 Grid (Compact) 
              DESKTOP (lg): Stats move back to original overlay positions */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:hidden mb-8">
            <StatCard
              number="30"
              label="Years Exp."
              icon={TbTrophy}
              delay={0.1}
              isGradient={true}
            />
            <StatCard
              number="60"
              label="Revenue"
              icon={TbChartBar}
              delay={0.2}
              isGradient={true}
              suffix="M$"
            />
            <StatCard
              number="1000"
              label="Employees"
              icon={TbUsers}
              delay={0.3}
              isGradient={true}
            />
            <StatCard
              number="10"
              label="Global Units"
              icon={TbMapPin}
              delay={0.4}
              isGradient={true}
              suffix=""
            />
          </div>

          {/* IMAGE BLOCK */}
          <motion.div
            style={{
              y:
                typeof window !== "undefined" && window.innerWidth > 1024
                  ? yImage
                  : 0,
            }}
            className="relative w-full aspect-[4/3] lg:aspect-square lg:h-[550px] 2xl:h-[750px] z-10"
          >
            <div
              className="w-full h-full relative shadow-2xl border border-white/10 overflow-hidden rounded-sm group/dossier"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)",
              }}
            >
              <img
                src="/logos/introHome.webp"
                alt="Raghu Vamsi Manufacturing"
                className="w-full h-full object-cover grayscale-0 opacity-95 group-hover/dossier:scale-105 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>

          {/* DESKTOP STATS OVERLAY (Visible only on LG+) */}
          <motion.div
            style={{ y: yStats }}
            className="absolute bottom-4 left-0 w-full z-20 hidden lg:grid grid-cols-2 gap-6 pr-12 pointer-events-none"
          >
            <div className="space-y-6 mt-16 pointer-events-auto">
              <StatCard
                number="30"
                label="Years Excellence"
                icon={TbTrophy}
                delay={0.1}
                isGradient={true}
              />
              <StatCard
                number="60"
                label="Revenue"
                icon={TbChartBar}
                delay={0.2}
                isGradient={true}
                suffix="M$"
              />
            </div>
            <div className="space-y-6 pointer-events-auto">
              <StatCard
                number="1000"
                label="Workforce Strength"
                icon={TbUsers}
                delay={0.3}
                isGradient={true}
              />
              <StatCard
                number="10"
                label="Global Locations"
                icon={TbMapPin}
                delay={0.4}
                isGradient={true}
                suffix=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
