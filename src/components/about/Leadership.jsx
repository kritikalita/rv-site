// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedinIn } from 'react-icons/fa';
// import { TbCircleFilled } from 'react-icons/tb';

// // Import local assets
// import vamsiImg from '../../assets/images/vamsi.png';
// import preetiImg from '../../assets/images/preeti.png';
// import manishImg from '../../assets/images/manish.webp';

// const leaders = [
//   { name: "Vamsi Vikas", role: "Managing Director", image: vamsiImg, bio: "20+ years steering strategic growth in global aerospace sectors.", id: "01" },
//   { name: "Preeti Vamsi", role: "Executive Director", image: preetiImg, bio: "Driving operational excellence and maintaining zero-defect culture.", id: "02" },
//   { name: "Manish Matta", role: "Executive Director", image: manishImg, bio: "Industry expert in advanced 5-axis CNC technologies and tooling.", id: "03" }
// ];

// const Leadership = () => {
//   return (
//     <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      
//       {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
//            style={{ 
//              backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
//              backgroundSize: '40px 40px' 
//            }} 
//       />

//       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
//         {/* UNIFORM HEADER: Standardized Scale and Metadata */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <div className="max-w-2xl">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-3 mb-4"
//             >
//               <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
//               <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Governance</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
//               Meet the <span className="text-brand-blue">Leadership.</span>
//             </h2>
//           </div>

//           <div className="hidden lg:block border-l border-slate-200 pl-8">
//             <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
//               Personnel<br />
//               <span className="text-brand-blue font-mono text-[9px]">Strategic Growth Steering</span>
//             </p>
//           </div>
//         </div>

//         {/* REGISTRY GRID: Midnight-Navy Duo-Tone Theme */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {leaders.map((leader, index) => {
//             const isGradient = index % 2 !== 0;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`group relative flex flex-col border border-white/5 transition-all duration-500 overflow-hidden shadow-2xl
//                   ${isGradient 
//                     ? 'bg-gradient-to-br from-[#020617] via-[#010b1a] to-[#001a40]' 
//                     : 'bg-[#010816] hover:bg-[#020d1f]'
//                   }`}
//               >
//                 {/* HUD Scanning Glow */}
//                 <div className="absolute -right-2 -top-2 w-24 h-24 bg-brand-blue/5 blur-[40px] group-hover:bg-brand-blue/15 transition-all duration-700" />

//                 {/* ID Tag Overlay */}
//                 <div className="absolute top-4 left-4 z-20">
//                    <span className="bg-brand-blue text-white text-[8px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">
//                       {leader.id}
//                    </span>
//                 </div>

//                 {/* Portrait with Reversed Grayscale */}
//                 <div className="relative h-[320px] w-full overflow-hidden bg-brand-dark">
//                   <img 
//                     src={leader.image} 
//                     alt={leader.name} 
//                     className="w-full h-full object-cover grayscale-0 group-hover:grayscale group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#010816] via-transparent to-transparent opacity-80" />
                  
//                   <a 
//                     href="#" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="absolute bottom-4 right-4 w-10 h-10 bg-brand-blue text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-30"
//                   >
//                     <FaLinkedinIn size={16} />
//                   </a>
//                 </div>
                
//                 {/* HUD Technical Content */}
//                 <div className="p-8 relative z-10 flex-grow">
//                   <div className="flex items-center gap-2 mb-3">
//                     <TbCircleFilled className="text-[4px] animate-pulse text-brand-blue" />
//                     <span className="text-[9px] font-black text-brand-blue uppercase tracking-[0.3em]">
//                       {leader.role}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-white tracking-tight mb-4">
//                     {leader.name}
//                   </h3>
                  
//                   <p className={`text-[11px] leading-relaxed font-medium border-l pl-4 transition-colors
//                     ${isGradient ? "text-blue-100/60 border-white/20" : "text-slate-400 border-brand-blue/40"}`}>
//                     {leader.bio}
//                   </p>
//                 </div>

//                 {/* HUD Bracket Styling */}
//                 <div className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-700 w-0 group-hover:w-full bg-brand-blue" />
//                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leadership;

















import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCircleFilled, TbPlus, TbX } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

// Asset imports
import vamsiImg from "../../assets/images/vamsi.png";
import preetiImg from "../../assets/images/preeti.png";
import manishImg from "../../assets/images/manish.webp";

const Leadership = () => {
  const [activeLeader, setActiveLeader] = useState(null);

  // Added 'fullBio' to data objects
  const apex = [
    {
      name: "Vamsi Vikas",
      role: "Chairman & Managing Director",
      image: vamsiImg,
      bio: "Steering global strategy with 20+ years of aerospace expertise.",
      fullBio: "Steering global strategy with 20+ years of aerospace expertise. Under his leadership, Raghu Vamsi has transitioned into a Tier-1 partner for global OEMs, focusing on complex manufacturing and strategic international joint ventures.",
      id: "CMD",
      linkedin: "https://linkedin.com/in/vamsivikas"
    },
    {
      name: "Preeti Vamsi",
      role: "CEO & Executive Director",
      image: preetiImg,
      bio: "Directing operational integrity and high-precision manufacturing culture.",
      fullBio: "Directing operational integrity and high-precision manufacturing culture. She spearheads the group's commitment to AS9100 quality standards and leads the internal governance protocols to maintain a zero-defect manufacturing ecosystem.",
      id: "CEO",
      linkedin: "https://linkedin.com/in/preetivamsi"
    },
  ];

  const directors = [
    {
      name: "Manish Matta",
      role: "Executive Director",
      image: manishImg,
      bio: "Expert in 5-axis CNC technologies and complex tooling.",
      fullBio: "Expert in 5-axis CNC technologies and complex tooling. He leads the technical innovation labs, ensuring that the latest computational manufacturing techniques are integrated into the shop floor operations.",
      id: "ED",
      linkedin: "#"
    },
    {
      name: "Mark",
      role: "WMT - US",
      image: "/path-to-mark.jpg",
      bio: "Leading North American operations and Tier-1 OEM partnerships.",
      fullBio: "Leading North American operations and Tier-1 OEM partnerships. Mark bridges the gap between Indian manufacturing cost-efficiencies and the stringent regulatory requirements of the US Defense and Aerospace sectors.",
      id: "US",
      linkedin: "#"
    },
    {
      name: "Shaun",
      role: "PMC - UK",
      image: "/path-to-shaun.jpg",
      bio: "Directing UK & European aerospace manufacturing strategy.",
      fullBio: "Directing UK & European aerospace manufacturing strategy. Shaun focuses on business development and strategic compliance for the UK Ministry of Defence and European aerospace primes.",
      id: "UK",
      linkedin: "#"
    },
    {
      name: "Giridhar Reddy",
      role: "Chief Operating Officer",
      image: "/path-to-giridhar.jpg",
      bio: "Overseeing end-to-end industrial scale-up and SBU performance.",
      fullBio: "Overseeing end-to-end industrial scale-up and SBU performance. He manages the day-to-day operational cadence of all manufacturing units, ensuring on-time delivery and resource optimization.",
      id: "COO",
      linkedin: "#"
    },
  ];

  const functionalHeads = [
    {
      name: "Vinod Desai",
      role: "Head - SCM",
      image: "/path-to-vinod.jpg",
      bio: "Optimizing global supply chain and procurement cycles.",
      fullBio: "Optimizing global supply chain and procurement cycles for critical aerospace raw materials and special processes.",
      linkedin: "#"
    },
    {
      name: "Mohit Garg",
      role: "Head - Engg",
      image: "/path-to-mohit.jpg",
      bio: "Leading design-to-manufacture and technical innovation.",
      fullBio: "Leading design-to-manufacture and technical innovation, ensuring engineering drawings are translated into flawless tool-paths.",
      linkedin: "#"
    },
    {
      name: "D Srinivas Rao",
      role: "SBU 1 Head",
      image: "/path-to-srinivas.jpg",
      bio: "Directing core SBU-1 manufacturing excellence.",
      fullBio: "Directing core SBU-1 manufacturing excellence, specifically focusing on large-scale structural components.",
      linkedin: "#"
    },
    {
      name: "Harsha J",
      role: "SBU 2 Head",
      image: "/path-to-harsha.jpg",
      bio: "Driving performance and delivery for SBU-2 aerospace assets.",
      fullBio: "Driving performance and delivery for SBU-2 aerospace assets, specializing in engine components and critical fasteners.",
      linkedin: "#"
    },
  ];

  const ProfileCard = ({ leader, size = "md" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-white/10 overflow-hidden flex flex-col transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, #022049 0%, #063677 100%)",
      }}
    >
      <div className={`relative overflow-hidden ${size === "lg" ? "h-72" : size === "md" ? "h-56" : "h-48"}`}>
        <img
          src={leader.image || "https://via.placeholder.com/400x500/022049/ffffff?text=Image+Pending"}
          alt={leader.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022049] via-transparent to-transparent opacity-80" />
        {leader.id && (
          <div className="absolute top-3 left-3 bg-brand-blue text-white text-[7px] font-mono px-2 py-1 tracking-widest uppercase z-20">
            {leader.id}
          </div>
        )}
        <a 
          href={leader.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute bottom-3 right-3 w-8 h-8 bg-brand-blue text-white flex items-center justify-center rounded-sm shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-30"
        >
          <FaLinkedinIn size={14} />
        </a>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <TbCircleFilled className="text-[4px] text-blue-400" />
          <span className="text-[8px] font-black text-blue-300 uppercase tracking-widest">
            {leader.role}
          </span>
        </div>
        <h4 className={`${size === "lg" ? "text-lg" : "text-sm"} font-bold text-white mb-2`}>
          {leader.name}
        </h4>
        <p className="text-[10px] leading-relaxed text-blue-100/70 border-l border-white/10 pl-3 transition-colors group-hover:text-white">
          {leader.bio}
        </p>
        
        {/* Right-aligned Read More Button */}
        <div className="mt-auto pt-4 flex justify-end">
          <button 
            onClick={() => setActiveLeader(leader)}
            className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
          >
            Read More <TbPlus size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-brand-border">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Governance</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Meet the <span className="text-brand-blue">Leadership.</span>
            </h2>
          </div>
          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[200px] leading-relaxed">
              Personnel<br /><span className="text-brand-blue font-mono text-[9px]">Strategic Growth Steering</span>
            </p>
          </div>
        </div>

        {/* TIERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {apex.map((leader, i) => <ProfileCard key={i} leader={leader} size="lg" />)}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {directors.map((leader, i) => <ProfileCard key={i} leader={leader} size="md" />)}
        </div>
        <div className="pt-10 border-t border-slate-100">
          <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Operational Unit Intelligence</h4>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {functionalHeads.map((leader, i) => <ProfileCard key={i} leader={leader} size="sm" />)}
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {activeLeader && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-brand-dark/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#022049] to-[#063677] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Decorative Blueprint Corner */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              
              <button 
                onClick={() => setActiveLeader(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              >
                <TbX size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 border border-white/20">
                  <img src={activeLeader.image} alt={activeLeader.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-2">{activeLeader.role}</span>
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{activeLeader.name}</h3>
                  <p className="text-blue-50/80 text-sm leading-relaxed italic border-l-2 border-blue-400 pl-6">
                    {activeLeader.fullBio}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Leadership;