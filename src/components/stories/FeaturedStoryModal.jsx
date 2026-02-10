import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbX,
  TbSettingsAutomation,
  TbTimeline,
  TbClock,
} from "react-icons/tb";

const FeaturedStoryModal = ({ isOpen, onClose, storyData }) => {
  if (!storyData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center overflow-hidden">
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
          />

          {/* Modal Content Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            data-lenis-prevent
            className="relative w-full h-[95vh] md:h-[90vh] bg-white rounded-t-3xl overflow-y-auto shadow-2xl no-scrollbar"
            style={{
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* STICKY HEADER */}
            <div className="sticky top-0 z-[70] bg-white/90 backdrop-blur-md border-b border-blue-50 px-6 md:px-12 py-3 md:py-4 flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2 px-2 md:px-3 py-1 bg-blue-50 border border-blue-100 rounded-sm">
                  <TbSettingsAutomation
                    className="text-brand-blue animate-spin-slow"
                    size={14}
                  />
                  <span className="text-brand-blue font-mono text-[8px] md:text-[10px] font-bold tracking-widest uppercase">
                    Transmission Detail
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-blue-50 rounded-full text-brand-dark transition-colors"
              >
                <TbX size={24} />
              </button>
            </div>

            {/* DYNAMIC HERO SECTION */}
            <div className="relative h-[35vh] sm:h-[45vh] md:h-[50vh] bg-[#022049] overflow-hidden">
              <img
                src={storyData.image}
                className="w-full h-full object-cover opacity-60"
                alt={storyData.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              <div className="absolute bottom-6 left-0 w-full px-6 md:px-16 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="bg-brand-blue text-white font-mono text-[9px] 2xl:text-xs px-3 py-1 tracking-widest uppercase mb-3 inline-block shadow-lg">
                    {storyData.category}
                  </span>
                  <h2 className="text-3xl sm:text-5xl md:text-7xl 2xl:text-9xl font-bold text-brand-dark tracking-tighter leading-[0.95] max-w-5xl">
                    {storyData.title}
                  </h2>
                </motion.div>
              </div>
            </div>

            {/* EDITORIAL GRID */}
            <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-16 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-8 space-y-10 md:order-1 order-2">
                
                {/* 1. Impact Summary */}
                <p className="text-lg md:text-2xl 2xl:text-4xl text-slate-700 leading-relaxed font-medium border-l-4 border-brand-blue pl-6 md:pl-10 italic">
                  {storyData.fullDescription}
                </p>

                {/* 2. Structured Content Body */}
                <div className="text-slate-600 space-y-8 text-base md:text-lg 2xl:text-2xl leading-relaxed">
                  {storyData.content && storyData.content.length > 0 ? (
                    storyData.content.map((block, index) => {
                      if (block.type === "heading") {
                        return (
                          <h3 key={index} className="text-brand-dark font-bold text-xl md:text-3xl 2xl:text-5xl pt-6 first:pt-0">
                            {block.text}
                          </h3>
                        );
                      }
                      if (block.type === "paragraph") {
                        return <p key={index}>{block.text}</p>;
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={index} className="space-y-6 my-6 ml-2 md:ml-4">
                            {block.items.map((item, i) => (
                              <li key={i} className="flex gap-4 items-start">
                                <span className="text-brand-blue font-bold text-xl">•</span>
                                <span>
                                  <strong className="text-brand-dark font-bold">{item.bold}:</strong> {item.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={index}>{block}</p>;
                    })
                  ) : (
                    <p className="opacity-60">
                      Technical documentation for this transmission is pending synchronization.
                    </p>
                  )}
                </div>
              </div>

              {/* SIDEBAR: Metadata & Author */}
              <div className="lg:col-span-4 md:order-2 order-1">
                <div className="sticky top-32 space-y-8">
                  <div className="p-6 md:p-8 2xl:p-12 border border-blue-100 bg-blue-50/50 rounded-sm shadow-sm">
                    
                    {/* AUTHOR CARD */}
                    {storyData.author && (
                      <div className="mb-10 pb-10 border-b border-blue-100/50">
                        <span className="text-[9px] 2xl:text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-6 block">
                          Intelligence Lead
                        </span>
                        <div className="flex items-center gap-4">
                          <img 
                            src={storyData.author.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Vamsi"} 
                            className="w-12 h-12 2xl:w-20 2xl:h-20 rounded-full bg-blue-50 border border-brand-blue/10 object-cover" 
                            alt={storyData.author.name} 
                          />
                          <div>
                            <p className="text-brand-dark font-bold text-base md:text-lg 2xl:text-2xl leading-tight">
                              {storyData.author.name}
                            </p>
                            <p className="text-slate-500 text-[10px] 2xl:text-base font-medium mt-1">
                              {storyData.author.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* METADATA */}
                    <div className="space-y-6 md:space-y-10">
                      {[
                        {
                          label: "Date",
                          value: storyData.date || "Q1 2026",
                          icon: TbTimeline,
                        },
                        {
                          label: "Reading Time",
                          value: storyData.readingTime || "2 Min Read",
                          icon: TbClock,
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[9px] 2xl:text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-3">
                            {item.label}
                          </span>
                          <div className="flex items-center gap-3">
                            <item.icon className="text-slate-400" size={20} />
                            <span className="text-brand-dark font-bold text-sm md:text-base 2xl:text-2xl">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="py-20 px-8 flex flex-col items-center bg-gradient-to-b from-[#022049] to-[#010816]">
              <div className="h-px w-24 bg-brand-blue/30 mb-8" />
              <p className="text-blue-300/40 font-mono text-[10px] 2xl:text-sm tracking-[0.5em] uppercase text-center">
                End of Transmission - Raghu Vamsi Group
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeaturedStoryModal;




// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TbX, TbDatabase, TbSettingsAutomation, TbTimeline, TbActivity } from "react-icons/tb";

// const FeaturedStoryModal = ({ isOpen, onClose, storyData }) => {
//   if (!storyData) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[110] flex items-end justify-center overflow-hidden">
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
//             className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />

//           <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 200 }}
//             data-lenis-prevent className="relative w-full h-[95vh] bg-white rounded-t-3xl overflow-y-auto shadow-2xl no-scrollbar"
//             style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>

//             {/* STICKY HUD HEADER */}
//             <div className="sticky top-0 z-[70] bg-white/90 backdrop-blur-md border-b border-brand-border px-6 md:px-12 py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
//                   <TbSettingsAutomation className="text-brand-blue animate-spin-slow" size={14} />
//                   <span className="text-brand-blue font-mono text-[9px] font-bold tracking-widest uppercase">STORY_ACCESS // GRANTED</span>
//                 </div>
//                 <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest hidden sm:block">Ref_ID: TX-{storyData.id}</span>
//               </div>
//               <button onClick={onClose} className="p-2 hover:bg-brand-gray rounded-full transition-colors text-brand-dark"><TbX size={24} /></button>
//             </div>

//             {/* HERO SECTION */}
//             <div className="relative h-[45vh] md:h-[50vh] bg-brand-dark overflow-hidden">
//               <img src={storyData.image} className="w-full h-full object-cover opacity-60" alt={storyData.title} />
//               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
//               <div className="absolute bottom-6 left-0 w-full px-6 md:px-16">
//                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
//                   <span className="bg-brand-blue text-white font-mono text-[9px] px-3 py-1 tracking-widest uppercase mb-3 inline-block shadow-lg">{storyData.category}</span>
//                   <h2 className="text-4xl md:text-7xl font-bold text-brand-dark tracking-tighter leading-[0.9] max-w-4xl">{storyData.title}</h2>
//                 </motion.div>
//               </div>
//             </div>

//             {/* DYNAMIC EDITORIAL CONTENT AREA */}
//             <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
//               <div className="lg:col-span-8 space-y-10">

//                 {/* 1. Card Summary: Visible here as requested */}
//                 <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-medium border-l-4 border-brand-blue pl-6 md:pl-10 italic">
//                   {storyData.content}
//                 </p>

//                 {/* 2. Detailed Editorial: Visible here as requested */}
//                 <div className="text-slate-600 space-y-6 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
//                   {storyData.fullContent}
//                 </div>
//               </div>

//               {/* SIDEBAR: System Metadata */}
//               <div className="lg:col-span-4">
//                 <div className="sticky top-32 space-y-8">
//                   <div className="p-6 md:p-8 border border-brand-border bg-brand-gray/30">
//                     <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
//                       <TbDatabase size={14} /> System_Log // RV_ARCHIVE
//                     </h4>
//                     <div className="space-y-8">
//                       <div className="flex flex-col">
//                           <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Transmission Date</span>
//                           <div className="flex items-center gap-3">
//                               <TbTimeline className="text-slate-400" />
//                               <span className="text-brand-dark font-bold text-sm">{storyData.date}</span>
//                           </div>
//                       </div>
//                       <div className="flex flex-col">
//                           <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Operational Status</span>
//                           <div className="flex items-center gap-3">
//                               <TbActivity className="text-slate-400" />
//                               <span className="text-brand-dark font-bold text-sm">Broadcast Finalized</span>
//                           </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* MODAL FOOTER */}
//             <div className="bg-brand-dark py-16 px-8 flex flex-col items-center">
//                <div className="h-px w-24 bg-brand-blue/30 mb-8" />
//                <p className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">End of Transmission // Raghu Vamsi Group</p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FeaturedStoryModal;
