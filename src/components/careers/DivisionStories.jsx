import React from "react";
import { motion } from "framer-motion";

const divisions = [
  {
    title: "Autonomous Systems",
    desc: "Developing the future of autonomous ground and air systems for the modern manufacturing landscape.",
    image: "src/assets/images/car6.png",
    link: "https://arrobot.co" // Updated to external link
  },
  {
    title: "Mission Systems",
    desc: "Engineering the propulsion systems that power next-generation defense platforms.",
    image: "src/assets/images/carDiv2.png",
    link: "https://comprotechengineering.com/" // Updated to external link
  }
];

const DivisionStories = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION TITLE */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[2px] w-12 bg-brand-blue" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">
              Our Ecosystem
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Specialized divisions, <span className="text-brand-blue">one pioneering spirit.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((div, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-sm overflow-hidden shadow-xl border border-slate-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={div.image} className="w-full h-full object-cover" alt={div.title} />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{div.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{div.desc}</p>
                
                {/* REDIRECTION: Using <a> for external websites */}
                <a 
                  href={div.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-brand-blue font-bold uppercase tracking-widest text-xs border-b-2 border-brand-blue/20 pb-1 hover:border-brand-blue transition-all"
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionStories;