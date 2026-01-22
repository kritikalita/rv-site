import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { TbRocket, TbComponents, TbTir, TbCircleFilled, TbSettingsAutomation} from "react-icons/tb";

const services = [
  {
    id: 1,
    title: "Precision Machining",
    subtitle: "Micron-Level Tolerance",
    description: "State-of-the-art 5-axis CNC machining for complex aerospace components.",
    image: "src/assets/images/capPres.webp",
    icon: TbSettingsAutomation,
    tag: "CAPABILITY_01"
  },
  {
     id: 2,
    title: "Engineering Services",
    subtitle: "Design to Prototype",
    description: "End-to-end CAD/CAM design, prototyping, and process engineering solutions.",
    image: "src/assets/images/capEng.webp",
    icon: TbRocket,
    tag: "CAPABILITY_02"
  },
  {
    id: 3,
    title: "Electro-Mechanical Assembly",
    subtitle: "Precision Systems Integration",
    description: "Expert integration of complex wiring harnesses, control panels, and electronic components into mechanical housings for mission-critical applications.",
    image: "src/assets/images/capEM.webp",
    icon: TbComponents,
    tag: "CAPABILITY_03"
  },
  {
    id: 4,
    title: "Assembly and weld",
    subtitle: "Zero-Defect Delivery",
    description: "AS9100D certified inspection processes ensuring zero-defect delivery.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    icon: TbTir,
    tag: "CAPABILITY_04"
  },
];

const ServicesPreview = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        
        {/* UNIFORM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue"/>
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Core Capabilities</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Our <span className="text-brand-blue">Solutions.</span>
            </h2>
          </div>

           <div className="hidden lg:block border-l border-slate-200 pl-8">
             {/* Link replaced the Button to handle redirection */}
             <Link 
              to="/capabilities#services-grid" 
              className="group relative flex items-center gap-6 bg-[#020617] text-white px-8 py-4 font-black uppercase tracking-[0.4em] text-[9px] hover:bg-brand-blue transition-all shadow-2xl overflow-hidden"
             >
              <span className="relative z-10 flex items-center gap-3">
                View All Services <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
            </Link>
          </div>
        </div>
      </div>

      {/* ACCORDION TRACK */}
      <div className="max-w-7xl mx-auto px-6 h-[500px] flex flex-col md:flex-row gap-4 relative z-10">
        {services.map((service) => {
          const isActive = activeId === service.id;
          
          return (
            <motion.div
              key={service.id}
              layout
              onClick={() => setActiveId(service.id)}
              onHoverStart={() => setActiveId(service.id)} 
              className={`relative rounded-sm overflow-hidden cursor-pointer transition-all duration-700 border border-white/5 shadow-2xl
                ${isActive ? 'flex-[4]' : 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] flex-[0.6] hover:brightness-110'}
              `}
            >
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-10">
                  <span className="text-brand-blue font-mono text-xs font-bold opacity-40">0{service.id}</span>
                  <div className="rotate-[-90deg] whitespace-nowrap">
                    <h3 className="text-[10px] font-black text-slate-200 uppercase tracking-[0.4em]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-brand-blue opacity-50">
                    <service.icon size={20} />
                  </div>
                </div>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    {/* Background set to new gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]" />
                    
                    {/* Image without mix-blend or heavy opacity reduction */}
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover opacity-40"
                    />
                    
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-blue/30 shadow-[0_0_15px_#0047AB] z-20 animate-scan" />
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="p-3 bg-brand-blue text-white rounded-sm shadow-[0_0_15px_rgba(0,71,171,0.5)]">
                           <service.icon size={24} />
                        </div>
                        <div className="text-right">
                          <span className="block text-brand-blue font-mono text-[9px] font-black tracking-widest uppercase mb-1">//{service.tag}</span>
                          <span className="text-white/20 font-black text-5xl leading-none">0{service.id}</span>
                        </div>
                      </div>

                      <div className="max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                          <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
                          <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                            {service.title}
                          </h3>
                        </div>
                        
                        <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-4">
                          {service.subtitle}
                        </p>
                        
                        <p className="text-slate-200 text-[13px] leading-relaxed mb-8 border-l border-brand-blue/40 pl-6 italic">
                          "{service.description}"
                        </p>

                        <button className="group flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[9px] hover:text-brand-blue transition-colors">
                          Know More <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-brand-blue/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesPreview;