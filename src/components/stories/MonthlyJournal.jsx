import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbBook, TbActivity, TbArrowRight, TbDownload, TbDatabase } from "react-icons/tb";
import FeaturedStoryModal from './FeaturedStoryModal';

const MonthlyJournal = ({ onModalToggle }) => {
  const [selectedJournal, setSelectedJournal] = useState(null);

  const journals = [
    {
      id: "JRNL-12",
      vol: "VOL // 012",
      date: "DEC 2025",
      category: "Technical Journal",
      title: "The Physics of Stealth: Machining Radar-Absorbent Structures",
      preview: "Engineering tolerances required to minimize electromagnetic scattering through precision milling and advanced edge-diffraction control.",
      fullDescription: "An in-depth analysis of how ultra-precise surface finishes and edge-diffraction control contribute to low-observable technology in modern defense aviation.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=2070",
      tags: ["Stealth Tech", "Materials"]
    },
    {
      id: "JRNL-11",
      vol: "VOL // 011",
      date: "NOV 2025",
      category: "Technical Journal",
      title: "Autonomous Systems in 5-Axis Environments",
      preview: "Integration of AI-driven toolpath optimization and its impact on material waste reduction in titanium alloys for next-gen aerospace.",
      fullDescription: "The transition from manual toolpathing to AI-driven synchronous movement allows for dynamic compensation of tool wear, ensuring sub-micron accuracy.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1974",
      tags: ["Automation", "AI"]
    }
  ];

  const handleOpen = (entry) => {
    setSelectedJournal(entry);
    onModalToggle(true);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
      {/* Subtle Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Monthly Intelligence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              The Editorial <span className="text-brand-blue">Dossier.</span>
            </h2>
          </div>
          {/* UPDATED: Sky Blue Accent for the quote border */}
          <div className="max-w-xs lg:border-l-2 lg:border-brand-blue/30 lg:pl-8">
            <p className="text-slate-500 text-sm md:text-base italic leading-relaxed tracking-tight font-medium">
              "Engineering the future through human precision and uncompromised quality standards."
            </p>
          </div>
        </div>

        {/* COMPACT CAREERS-STYLE GRID */}
        <div className="grid grid-cols-1 gap-8">
          {journals.map((entry) => (
            <motion.div 
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => handleOpen(entry)}
              className="group relative border border-white/10 rounded-sm cursor-pointer hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row min-h-fit overflow-hidden"
              style={{
                /* UPDATED: Using signature Midnight to Cobalt gradient */
                background: 'linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)'
              }}
            >
              {/* IMAGE SECTION - REVERSED GRAYSCALE */}
              <div className="md:w-1/3 relative min-h-[250px] md:min-h-full overflow-hidden">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 opacity-90 group-hover:opacity-60"
                />
                {/* Sky blue blend on hover */}
                <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CONTENT SECTION */}
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-mono">
                      <p className="text-blue-300 text-[11px] font-bold tracking-[0.2em]">{entry.vol}</p>
                      <p className="text-white/30 text-[9px] uppercase tracking-widest">{entry.date}</p>
                    </div>
                    <TbDownload className="text-white/20 group-hover:text-blue-300 transition-colors" size={20} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-blue-300 transition-colors duration-300">
                    {entry.title}
                  </h3>

                  <p className="text-blue-100/60 text-base leading-relaxed italic border-l-2 border-brand-blue/40 pl-6">
                    {entry.preview}
                  </p>
                </div>

                {/* TAGS & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-white/5">
                   <div className="flex flex-wrap gap-2">
                      {entry.tags?.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-white/40 border border-white/10 px-3 py-1 rounded-sm uppercase tracking-tighter bg-white/5">
                          #{tag}
                        </span>
                      ))}
                   </div>
                   <div className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.4em] group-hover:text-blue-300 group-hover:gap-6 transition-all duration-300">
                      <span>Full Intelligence</span>
                      <TbArrowRight className="text-lg" />
                   </div>
                </div>

                {/* Decorative Top Glowing Line */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-blue group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(0,71,171,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FeaturedStoryModal 
        isOpen={!!selectedJournal} 
        onClose={() => {
          setSelectedJournal(null);
          onModalToggle(false);
        }} 
        storyData={selectedJournal} 
      />
    </section>
  );
};

export default MonthlyJournal;