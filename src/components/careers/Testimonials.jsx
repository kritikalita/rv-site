import React from 'react';
import { motion } from 'framer-motion';
import { TbQuote, TbAward, TbCircleCheck, TbCircleFilled } from "react-icons/tb";

const testimonials = [
  {
    name: "Dr. Anirudh Sharma",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974",
    quote: "The precision engineering culture at Raghu Vamsi is unmatched. We aren't just making parts; we're defining aerospace benchmarks for the next generation of flight.",
    dept: "R&D Propulsion",
    id: "EMP-RV-102"
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Quality Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
    quote: "Integrity is built into every micron. Working here means being part of a team that never compromises on safety, ensuring every component meets mission-critical standards.",
    dept: "Quality AS9100",
    id: "EMP-RV-215"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      {/* 1. UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. UNIFORM HEADER */}
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
                Voices of Excellence
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Our <span className="text-brand-blue">Innovators.</span>
            </h2>
          </div>

          <div className="max-w-sm lg:border-l-2 lg:border-brand-blue lg:pl-8">
            <p className="text-slate-500 text-sm italic leading-relaxed tracking-tight font-medium">
              "Join our mission to define the future of flight through uncompromised precision."
            </p>
          </div>
        </div>

        {/* 3. TESTIMONIAL CARDS: Updated with Signature Gradient */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 flex flex-col md:flex-row h-auto md:h-[380px] overflow-hidden hover:shadow-[0_0_50px_rgba(0,71,171,0.2)] transition-all duration-500 cursor-default"
              style={{
                background: 'linear-gradient(135deg, #022049 0%, #063677 100%)'
              }}
            >
              {/* LEFT SIDE: Portrait */}
              <div className="w-full md:w-2/5 h-72 md:h-full relative overflow-hidden bg-[#010816]">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover opacity-90 grayscale-0 group-hover:grayscale group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" 
                  alt={item.name} 
                />

                <div className="absolute bottom-4 left-4 z-20">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                      {item.dept}
                   </span>
                </div>
                {/* Updated Portrait Gradient to blend with deep blue instead of black */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#022049] hidden md:block" />
              </div>

              {/* RIGHT SIDE: Technical Content Area */}
              <div className="w-full md:w-3/5 p-10 flex flex-col justify-between relative">
                <TbQuote className="text-white/5 absolute top-6 right-8" size={80} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TbCircleFilled className="text-[6px] text-brand-blue animate-pulse" />
                    <span className="text-[9px] font-black text-brand-blue uppercase tracking-[0.3em]">Verified Talent</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{item.name}</h3>
                  <p className="text-blue-100/60 font-bold text-[10px] uppercase tracking-widest mb-8">
                    {item.role}
                  </p>
                  
                  <p className="text-white/80 text-[15px] leading-relaxed italic pr-4 tracking-tight border-l-2 border-brand-blue pl-6">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Interaction Corner Brackets */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;