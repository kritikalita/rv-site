import React from 'react';
import { motion } from 'framer-motion';
import { TbQuote, TbCircleFilled } from "react-icons/tb";

const testimonials = [
  /* Data remains exactly as provided */
  {
    "name": "Udayasree Gandla",
    "role": "Senior Methods Engineer",
    "image": "src/assets/images/testimon2.png",
    "quote": "Optimizing complex workflows requires a meticulous balance of logic and innovation. At Raghu Vamsi, we don't just engineer processes; we build the reliability required for flight-critical hardware.",
    "dept": "Engineering",
    "id": "EMP-RV-215"
},
  {
    name: "Nihal Judge",
    role: "Executive Assistant Intern, MD Office",
    image: "src/assets/images/testimon1.jpg",
    "quote": "Supporting leadership at the intersection of strategy and manufacturing has shown me that precision isn't just an engineering standard—it's the group’s core philosophy for global scale.",
    dept: "Office of MD",
    id: "EMP-RV-102"
  },
];

const Testimonials = () => {
  return (
    /* py-16 (Mobile) -> md:py-24 (Laptop) -> 2xl:py-32 (Big Screen) */
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      
      {/* BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        
        {/* HEADER SECTION: Responsive stacking and alignment */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 2xl:mb-24 gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px] 2xl:text-xs">
                Our Shared Journey
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              People <span className="text-brand-blue">Behind the Progress.</span>
            </h2>
          </div>

          <div className="max-w-sm 2xl:max-w-md lg:border-l-2 lg:border-brand-blue lg:pl-8">
            <p className="text-slate-500 text-sm 2xl:text-xl italic leading-relaxed tracking-tight font-medium">
              "Join our mission to define the future of manufacturing through uncompromised precision."
            </p>
          </div>
        </div>

        {/* TESTIMONIAL CARDS GRID 
            Mobile: 1 Column
            Laptop+: 2 Columns (lg:grid-cols-2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              /* flex-col (Mobile) -> md:flex-row (iPad/Laptop) */
              className="group relative border border-white/10 flex flex-col md:flex-row h-auto md:h-[380px] 2xl:h-[500px] overflow-hidden hover:shadow-[0_0_50px_rgba(0,71,171,0.2)] transition-all duration-500 cursor-default"
              style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}
            >
              {/* PORTRAIT SECTION 
                  Height: 72 (Mobile) -> Full (iPad/Laptop)
              */}
              <div className="w-full md:w-2/5 h-72 sm:h-80 md:h-full relative overflow-hidden bg-[#010816]">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover opacity-90 grayscale-0 group-hover:grayscale group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" 
                  alt={item.name} 
                />

                <div className="absolute bottom-4 left-4 z-20">
                   <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] 2xl:text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                      {item.dept}
                   </span>
                </div>
                {/* Visual gradient blend hidden on mobile stacking to keep portrait clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#022049] hidden md:block" />
              </div>

              {/* CONTENT AREA 
                  Padding scales: p-8 (Mobile) -> p-10 (Laptop) -> p-14 (2xl)
              */}
              <div className="w-full md:w-3/5 p-8 md:p-10 2xl:p-14 flex flex-col justify-between relative">
                <TbQuote className="text-white/5 absolute top-6 right-8 w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <TbCircleFilled className="text-[6px] 2xl:text-[8px] text-brand-blue animate-pulse" />
                    <span className="text-[9px] 2xl:text-xs font-black text-brand-blue uppercase tracking-[0.3em]">Our Talent</span>
                  </div>
                  
                  <h3 className="text-2xl 2xl:text-4xl font-bold text-white mb-1 tracking-tight">{item.name}</h3>
                  <p className="text-blue-100/60 font-bold text-[10px] 2xl:text-sm uppercase tracking-widest mb-6 md:mb-8">
                    {item.role}
                  </p>
                  
                  <p className="text-white/80 text-[14px] sm:text-[15px] 2xl:text-2xl leading-relaxed italic pr-4 tracking-tight border-l-2 border-brand-blue pl-6">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* HUD Interaction Bracket */}
              <div className="absolute bottom-0 right-0 w-8 h-8 2xl:w-12 2xl:h-12 border-b border-r border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;