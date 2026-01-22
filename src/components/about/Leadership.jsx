import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbCircleFilled } from 'react-icons/tb';

// Import local assets
import vamsiImg from '../../assets/images/vamsi.png';
import preetiImg from '../../assets/images/preeti.png';
import manishImg from '../../assets/images/manish.webp';

const leaders = [
  { name: "Vamsi Vikas", role: "Managing Director", image: vamsiImg, bio: "20+ years steering strategic growth in global aerospace sectors.", id: "01" },
  { name: "Preeti Vamsi", role: "Executive Director", image: preetiImg, bio: "Driving operational excellence and maintaining zero-defect culture.", id: "02" },
  { name: "Manish Matta", role: "Executive Director", image: manishImg, bio: "Industry expert in advanced 5-axis CNC technologies and tooling.", id: "03" }
];

const Leadership = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* UNIFORM HEADER: Standardized Scale and Metadata */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Governance</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Meet the <span className="text-brand-blue">Leadership.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Personnel<br />
              <span className="text-brand-blue font-mono text-[9px]">Strategic Growth Steering</span>
            </p>
          </div>
        </div>

        {/* REGISTRY GRID: Midnight-Navy Duo-Tone Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => {
            const isGradient = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative flex flex-col border border-white/5 transition-all duration-500 overflow-hidden shadow-2xl
                  ${isGradient 
                    ? 'bg-gradient-to-br from-[#020617] via-[#010b1a] to-[#001a40]' 
                    : 'bg-[#010816] hover:bg-[#020d1f]'
                  }`}
              >
                {/* HUD Scanning Glow */}
                <div className="absolute -right-2 -top-2 w-24 h-24 bg-brand-blue/5 blur-[40px] group-hover:bg-brand-blue/15 transition-all duration-700" />

                {/* ID Tag Overlay */}
                <div className="absolute top-4 left-4 z-20">
                   <span className="bg-brand-blue text-white text-[8px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">
                      {leader.id}
                   </span>
                </div>

                {/* Portrait with Reversed Grayscale */}
                <div className="relative h-[320px] w-full overflow-hidden bg-brand-dark">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-transparent to-transparent opacity-80" />
                  
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute bottom-4 right-4 w-10 h-10 bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-30"
                  >
                    <FaLinkedinIn size={16} />
                  </a>
                </div>
                
                {/* HUD Technical Content */}
                <div className="p-8 relative z-10 flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
                    <span className="text-[9px] font-black text-brand-blue uppercase tracking-[0.3em]">
                      {leader.role}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                    {leader.name}
                  </h3>
                  
                  <p className={`text-[11px] leading-relaxed font-medium border-l pl-4 transition-colors
                    ${isGradient ? "text-blue-100/60 border-white/20" : "text-slate-400 border-brand-blue/40"}`}>
                    {leader.bio}
                  </p>
                </div>

                {/* HUD Bracket Styling */}
                <div className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-700 w-0 group-hover:w-full bg-brand-blue" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;