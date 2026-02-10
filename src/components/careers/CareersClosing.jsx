import React from 'react';
import { motion } from 'framer-motion';
import { TbArrowUpRight, TbCircleFilled } from "react-icons/tb";
// Replace with your actual image path (e.g., a high-precision lab or team photo)


const CareersClosing = () => {
  return (
    <section className="w-full bg-white py-24 md:py-32 border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* IMAGE BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative group"
          >
            <div className="relative overflow-hidden aspect-[16/10] lg:aspect-[4/3] rounded-sm bg-slate-100 shadow-2xl">
              <img 
                src="src/assets/images/careerClose.png"
                alt="Raghu Vamsi Engineering Excellence" 
                className="w-full h-full object-cover"
              />
              {/* Subtle tech overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Visual Brackets */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brand-blue/20 group-hover:border-brand-blue transition-colors duration-500" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brand-blue/20 group-hover:border-brand-blue transition-colors duration-500" />
          </motion.div>

          {/* CONTENT BLOCK */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <TbCircleFilled className="text-brand-blue animate-pulse text-[8px]" />
                <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Your Next Mission</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Be part of the <br /> 
                <span className="text-brand-blue">Manufacturing Revolution.</span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Join a legacy of high-precision manufacturing. We are looking for 
                innovative minds to help us build the future of national manufacturing
                and global aerospace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-brand-blue text-white font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-3 group">
                  Apply Now <TbArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all duration-300">
                  Join Talent Pool
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersClosing;