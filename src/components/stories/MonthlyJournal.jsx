import React from "react";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";

const MonthlyJournal = () => {
  const journals = [
    {
      id: "JRNL-12",
      vol: "VOL 01",
      date: "29 JAN 2026",
      category: "Technical Journal",
      title: "Beyond the Rules: Why Static Automation Fails in a Variable World",
      author: {
        name: "Ravi Achanta",
        role: "Co-Founder & CEO, Arrobot",
      },
      preview: "An exploration of situational awareness in robotics and why rule-based systems struggle with real-world factory variability.",
      image: "src/assets/images/ravi.jpg",
      tags: ["DeepTech", "Industrial AI", "Arrobot"],
      // Use this link for the external redirection
      externalLink: "https://neosciencehub.com/intelligence-means-reducing-fragility-replacing-humans-is-not-the-goal/"
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      {/* Background Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        {/* HEADER BLOCK */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 md:mb-16 2xl:mb-24">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px] 2xl:text-xs">
                Our Published Intelligence
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              The Editorial <span className="text-brand-blue">Dossier.</span>
            </h2>
          </div>
        </div>

        {/* JOURNAL LIST */}
        <div className="grid grid-cols-1 gap-8 2xl:gap-12">
          {journals.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleLinkClick(entry.externalLink)}
              className="group relative border border-white/10 rounded-sm cursor-pointer hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row min-h-fit overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)",
              }}
            >
              {/* IMAGE SECTION */}
              <div className="w-full md:w-1/3 lg:w-1/4 2xl:w-1/3 relative min-h-[220px] sm:min-h-[280px] md:min-h-full overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 opacity-90 group-hover:opacity-60 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CONTENT SECTION */}
              <div className="w-full md:w-2/3 lg:w-3/4 2xl:w-2/3 p-8 md:p-10 lg:p-12 2xl:p-20 flex flex-col justify-between relative overflow-hidden">
                <div className="mb-8 2xl:mb-12">
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono">
                      <p className="text-blue-300 text-[10px] md:text-[11px] 2xl:text-sm font-bold tracking-[0.2em]">
                        {entry.vol}
                      </p>
                      <p className="text-white/30 text-[9px] 2xl:text-xs uppercase tracking-widest">
                        {entry.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                    {entry.title}
                  </h3>

                  <p className="text-blue-100/60 text-base md:text-lg 2xl:text-2xl leading-relaxed italic border-l-2 border-brand-blue/40 pl-6">
                    {entry.preview}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <p className="text-[10px] 2xl:text-xs font-mono text-blue-300/60 uppercase tracking-widest">
                      Authored by{" "}
                      <span className="text-white font-bold">
                        {entry.author.name}
                      </span>
                    </p>
                  </div>
                </div>

                {/* TAGS & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-8 2xl:pt-12 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {entry.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] 2xl:text-xs font-bold text-white/40 border border-white/10 px-3 py-1 rounded-sm uppercase tracking-tighter bg-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold text-[10px] 2xl:text-sm uppercase tracking-[0.4em] group-hover:text-blue-300 group-hover:gap-6 transition-all duration-300">
                    <span>Full Intelligence</span>
                    <TbArrowRight className="text-lg 2xl:text-2xl" />
                  </div>
                </div>

                {/* Decorative Top Glowing Line */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-blue group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(0,71,171,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyJournal;