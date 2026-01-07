import React from 'react';
import { motion } from 'framer-motion';
import { TbArrowRight, TbFileText, TbClock } from "react-icons/tb";

const monthlyBlogs = [
  {
    issue: "VOL. 012",
    month: "DECEMBER 2025",
    title: "The Physics of Stealth: Machining Radar-Absorbent Structures",
    description: "An in-depth analysis of how ultra-precise surface finishes contribute to low-observable technology in modern defense aviation.",
    readTime: "12 MIN READ"
  },
  {
    issue: "VOL. 011",
    month: "NOVEMBER 2025",
    title: "Autonomous Systems in 5-Axis Environments",
    description: "Exploring the integration of AI-driven toolpath optimization and its impact on material waste reduction in titanium alloys.",
    readTime: "8 MIN READ"
  },
  {
    issue: "VOL. 010",
    month: "OCTOBER 2025",
    title: "Global Supply Chain Resilience in Aerospace",
    description: "Strategic insights into maintaining precision standards across decentralized manufacturing nodes during global shifts.",
    readTime: "15 MIN READ"
  }
];

const EditorialSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
              Editorial Journal
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tighter leading-tight">
            Monthly <span className="text-brand-blue">Insights.</span>
          </h2>
        </div>

        {/* JOURNAL LIST */}
        <div className="flex flex-col">
          {monthlyBlogs.map((blog, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-brand-border py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 hover:bg-white transition-all duration-500 px-4 -mx-4 rounded-sm"
            >
              {/* VOL & DATE */}
              <div className="flex flex-col gap-1 min-w-[150px]">
                <span className="text-brand-blue font-mono text-[10px] font-bold tracking-widest uppercase">
                  {blog.issue}
                </span>
                <span className="text-slate-400 font-bold text-[10px] tracking-tighter italic">
                  {blog.month}
                </span>
              </div>

              {/* MAIN CONTENT */}
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {blog.description}
                </p>
              </div>

              {/* READ ACTION */}
              <div className="flex items-center gap-12 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex items-center gap-2 text-slate-400">
                  <TbClock size={14} />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest">
                    {blog.readTime}
                  </span>
                </div>
                
                <button className="flex items-center gap-3 text-brand-dark font-bold text-[10px] uppercase tracking-[0.3em] group/btn">
                  <span className="hidden sm:inline">View Journal</span>
                  <TbFileText className="group-hover/btn:scale-110 transition-transform text-brand-blue" size={20} />
                  <TbArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ARCHIVE LINK */}
        <div className="mt-16 text-center">
          <button className="text-[10px] font-bold text-slate-400 hover:text-brand-blue uppercase tracking-[0.5em] transition-colors border-b border-transparent hover:border-brand-blue pb-1">
            Browse Full Publication Archive
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;