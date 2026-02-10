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
      icon: <TbTarget className="w-6 h-6 2xl:w-10 2xl:h-10" />,
      desc: "To be one of the top high technology product manufacturing organisations in the world.",
      bgIcon: <TbTarget className="w-32 h-32 md:w-40 md:h-40 2xl:w-64 2xl:h-64" />
    },
    {
      title: "Mission",
      icon: <TbBulb className="w-6 h-6 2xl:w-10 2xl:h-10" />,
      desc: "To manufacture high technology products efficiently by practising operational excellence with high-performance culture and team.",
      bgIcon: <TbBulb className="w-32 h-32 md:w-40 md:h-40 2xl:w-64 2xl:h-64" />
    },
    {
      title: "DNA Structure",
      icon: <TbDna className="w-6 h-6 2xl:w-10 2xl:h-10" />,
      isDna: true,
      bgIcon: <TbDna className="w-32 h-32 md:w-40 md:h-40 2xl:w-64 2xl:h-64" />
    },
    {
      title: "RISE Protocol",
      icon: <TbHeartHandshake className="w-6 h-6 2xl:w-10 2xl:h-10" />,
      isValues: true,
      bgIcon: <TbHeartHandshake className="w-32 h-32 md:w-40 md:h-40 2xl:w-64 2xl:h-64" />
    }
  ];

  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      
      {/* UNIFORM BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
        
        {/* UNIFORM HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 2xl:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">
                Our Foundation
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Driven by Purpose, <br />
              Defined by <span className="text-brand-blue">Our Ethos.</span>
            </h2>
          </div>
        </div>

        {/* BOX GRID 
            Mobile: 1 Column
            Tablet: 2 Columns
            Laptops+: 4 Columns
        */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 2xl:gap-10"
        >
          {ethosData.map((item, index) => {
            /* Responsive Gradient Pattern logic:
               On mobile (1 col), every other card is blue.
               On tablets (2 col), we want a checkerboard pattern.
            */
            const isSignatureGradient = index % 2 !== 0; 

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group relative p-6 md:p-8 2xl:p-12 flex flex-col min-h-[340px] md:min-h-[380px] 2xl:min-h-[500px] border border-white/10 transition-all duration-500 overflow-hidden shadow-2xl
                  ${isSignatureGradient 
                    ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                  }`}
              >
                {/* Subtle Technical Glow */}
                <div className="absolute -right-2 -top-2 w-16 h-16 2xl:w-32 2xl:h-32 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />

                <div className={`mb-6 2xl:mb-10 p-3 2xl:p-4 w-fit rounded-sm relative z-10
                   ${isSignatureGradient ? "bg-white/10 text-white" : "bg-brand-blue text-white"}`}>
                  {item.icon}
                </div>
                
                <h3 className={`text-lg md:text-xl 2xl:text-3xl font-bold mb-4 2xl:mb-6 tracking-tight relative z-10 
                  ${isSignatureGradient ? "text-white" : "text-brand-dark"}`}>
                  {item.title}
                </h3>

                {item.desc && (
                  <p className={`leading-relaxed text-[12px] md:text-[13px] 2xl:text-lg font-medium border-l pl-4 relative z-10 transition-colors
                    ${isSignatureGradient 
                      ? "text-blue-100/80 border-white/40" 
                      : "text-slate-600 border-brand-blue/40"}`}>
                    {item.desc}
                  </p>
                )}

                {item.isDna && (
                  <div className="space-y-3 md:space-y-4 2xl:space-y-6 flex-grow relative z-10">
                    <DnaItem english="Learn" sanskrit="Adhyaya" isGradient={isSignatureGradient} />
                    <DnaItem english="Grow" sanskrit="Anuruh" isGradient={isSignatureGradient} />
                    <DnaItem english="Excel" sanskrit="Atirikta" isGradient={isSignatureGradient} />
                    <DnaItem english="Joy" sanskrit="Anandha" isGradient={isSignatureGradient} />
                  </div>
                )}

                {item.isValues && (
                  <ul className="space-y-3 md:space-y-4 2xl:space-y-6 relative z-10">
                    <ValueItem letter="R" text="eliability" isGradient={isSignatureGradient} />
                    <ValueItem letter="I" text="ntegrity" isGradient={isSignatureGradient} />
                    <ValueItem letter="S" text="ocial Responsibility" isGradient={isSignatureGradient} />
                    <ValueItem letter="E" text="mpathy" isGradient={isSignatureGradient} />
                  </ul>
                )}

                {/* Background Decor Icon - Fully Responsive Scaling */}
                <div className={`absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 opacity-[0.03] group-hover:opacity-10 transition-all duration-700
                   ${isSignatureGradient ? "text-white" : "text-brand-blue"}`}>
                   {item.bgIcon}
                </div>

                <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 w-0 group-hover:w-full
                  ${isSignatureGradient ? "bg-white" : "bg-brand-blue"}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

/* Sub-components updated for 2xl scaling */

const DnaItem = ({ english, sanskrit, isGradient }) => (
  <div className={`flex justify-between items-center border-b pb-2 2xl:pb-4 group/item transition-colors
    ${isGradient ? "border-white/10" : "border-blue-200"}`}>
    <div className="flex items-center gap-2">
      <TbCircleFilled className={`text-[4px] 2xl:text-[6px] animate-pulse ${isGradient ? "text-blue-200" : "text-brand-blue"}`} />
      <span className={`font-bold text-[11px] md:text-xs 2xl:text-lg tracking-tight group-hover/item:text-brand-blue transition-colors
        ${isGradient ? "text-white" : "text-brand-dark"}`}>{english}</span>
    </div>
    <span className={`text-[8px] md:text-[9px] 2xl:text-xs font-mono uppercase tracking-widest font-black 
      ${isGradient ? "text-blue-200" : "text-brand-blue"}`}>
      {sanskrit}
    </span>
  </div>
);

const ValueItem = ({ letter, text, isGradient }) => (
  <li className="flex items-center text-[11px] md:text-xs 2xl:text-lg font-semibold group/item">
    <span className={`font-black text-base md:text-lg 2xl:text-2xl w-5 md:w-6 2xl:w-10 group-hover/item:scale-110 transition-transform origin-left
       ${isGradient ? "text-blue-200" : "text-brand-blue"}`}>
      {letter}
    </span>
    <span className={`tracking-tight transition-colors
      ${isGradient ? "text-blue-100/60 group-hover/item:text-white" : "text-slate-600 group-hover/item:text-brand-dark"}`}>
      {text}
    </span>
  </li>
);

export default Ethos;