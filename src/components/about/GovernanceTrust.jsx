import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TbArrowRight } from "react-icons/tb";

const GovernanceTrust = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100 flex justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* mx-auto and max-w-4xl ensure the content is centered as a block */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          // Adding mx-auto here centers the text block itself within the 1800px container
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Upholding trust
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg lg:text-xl font-light leading-relaxed">
            We believe that sustainable growth is only possible through transparency. 
            Our corporate identity is shaped by governance practices that exceed industry benchmarks. 
            The Board operates within a strictly defined {' '}
            <Link 
              to="/disclosures" 
              className="text-brand-blue border-b border-brand-blue/20 hover:border-brand-blue transition-all cursor-pointer inline-flex items-center gap-1 group font-medium"
            >
              governance framework
              <TbArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>, 
            ensuring that ethical fairness and fiduciary responsibility remain the driving forces behind our organizational evolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernanceTrust;