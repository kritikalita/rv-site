import React from 'react';
import { TbTarget, TbDna, TbHeartHandshake, TbBulb, TbCircleFilled } from "react-icons/tb";
import { motion } from 'framer-motion';

const Ethos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const ethosData = [
    {
      title: "Vision",
      icon: <TbTarget size={24} />,
      desc: "To be one of the top high technology product manufacturing organisations in the world.",
      bgIcon: <TbTarget size={160} />
    },
    {
      title: "Mission",
      icon: <TbBulb size={24} />,
      desc: "To manufacture high technology products efficiently by practising operational excellence with high-performance culture and team.",
      bgIcon: <TbBulb size={160} />
    },
    {
      title: "DNA Structure",
      icon: <TbDna size={24} />,
      isDna: true,
      bgIcon: <TbDna size={160} />
    },
    {
      title: "RISE Protocol",
      icon: <TbHeartHandshake size={24} />,
      isValues: true,
      bgIcon: <TbHeartHandshake size={160} />
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* UNIFORM HEADER */}
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
                Our Foundation
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Driven by Purpose, <br />
              Defined by <span className="text-brand-blue">Our Ethos.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[220px] leading-relaxed">
              Culture Core<br />
              <span className="text-brand-blue font-mono">Precision Value Engineering</span>
            </p>
          </div>
        </div>

        {/* BOX GRID: Now utilizing the signature gradient theme */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {ethosData.map((item, index) => {
            const isGradient = index % 2 !== 0; 

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group relative p-8 flex flex-col min-h-[380px] border border-white/10 transition-all duration-500 overflow-hidden shadow-2xl
                  ${isGradient 
                    ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                    : 'bg-[#010816] hover:bg-[#020d1f]'
                  }`}
              >
                {/* Subtle Technical Glow */}
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

                <div className={`mb-6 p-3 w-fit rounded-sm shadow-[0_0_15px_rgba(0,71,171,0.5)] relative z-10
                   ${isGradient ? "bg-white/10 text-white" : "bg-brand-blue text-white"}`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight relative z-10">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className={`leading-relaxed text-[13px] font-medium border-l pl-4 relative z-10 transition-colors
                    ${isGradient ? "text-blue-100/80 border-white/40" : "text-slate-300 border-brand-blue"}`}>
                    {item.desc}
                  </p>
                )}

                {item.isDna && (
                  <div className="space-y-4 flex-grow relative z-10">
                    <DnaItem english="Learn" sanskrit="Adhyaya" isGradient={isGradient} />
                    <DnaItem english="Grow" sanskrit="Anuruh" isGradient={isGradient} />
                    <DnaItem english="Excel" sanskrit="Atirikta" isGradient={isGradient} />
                    <DnaItem english="Joy" sanskrit="Anandha" isGradient={isGradient} />
                  </div>
                )}

                {item.isValues && (
                  <ul className="space-y-4 relative z-10">
                    <ValueItem letter="R" text="eliability" isGradient={isGradient} />
                    <ValueItem letter="I" text="ntegrity" isGradient={isGradient} />
                    <ValueItem letter="S" text="ocial Responsibility" isGradient={isGradient} />
                    <ValueItem letter="E" text="mpathy" isGradient={isGradient} />
                  </ul>
                )}

                {/* Background Decor Icon */}
                <div className="absolute -bottom-10 -right-10 text-white opacity-[0.03] group-hover:opacity-10 transition-all duration-700">
                   {item.bgIcon}
                </div>

                {/* Signature HUD Brackets/Line */}
                <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 w-0 group-hover:w-full
                  ${isGradient ? "bg-white" : "bg-brand-blue"}`} />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

/* --- Helper Components --- */

const DnaItem = ({ english, sanskrit, isGradient }) => (
  <div className={`flex justify-between items-center border-b pb-2 group/item transition-colors
    ${isGradient ? "border-white/10" : "border-white/5"}`}>
    <div className="flex items-center gap-2">
      <TbCircleFilled className={`text-[4px] animate-pulse ${isGradient ? "text-blue-200" : "text-brand-blue"}`} />
      <span className="font-bold text-xs text-white tracking-tight group-hover/item:text-brand-blue transition-colors">{english}</span>
    </div>
    <span className={`text-[9px] font-mono uppercase tracking-widest font-black 
      ${isGradient ? "text-blue-200" : "text-brand-blue"}`}>
      {sanskrit}
    </span>
  </div>
);

const ValueItem = ({ letter, text, isGradient }) => (
  <li className="flex items-center text-xs font-semibold group/item">
    <span className={`font-black text-lg w-6 group-hover/item:scale-110 transition-transform origin-left
       ${isGradient ? "text-blue-200" : "text-brand-blue"}`}>
      {letter}
    </span>
    <span className={`tracking-tight group-hover/item:text-white transition-colors
      ${isGradient ? "text-blue-100/60" : "text-slate-300"}`}>
      {text}
    </span>
  </li>
);

export default Ethos;