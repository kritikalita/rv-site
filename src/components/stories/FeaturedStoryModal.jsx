// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TbX, TbDatabase, TbSettingsAutomation, TbCpu, TbTimeline, TbActivity } from "react-icons/tb";

// const FeaturedStoryModal = ({ isOpen, onClose, storyData }) => {
//   if (!storyData) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[110] flex items-end justify-center overflow-hidden">
//           {/* Backdrop */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
//           />

//           {/* Modal Content */}
//           <motion.div 
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{ type: "spring", damping: 30, stiffness: 200 }}
//             /* FIX: data-lenis-prevent tells the Lenis library to ignore 
//                scroll events inside this specific container.
//             */
//             data-lenis-prevent 
//             className="relative w-full h-[95vh] bg-white rounded-t-3xl overflow-y-auto shadow-2xl no-scrollbar"
//             style={{ 
//               overscrollBehavior: 'contain', // Prevents background scroll chaining
//               WebkitOverflowScrolling: 'touch' // Smooth touch scrolling for iOS
//             }}
//           >
//             {/* 1. STICKY HUD HEADER */}
//             <div className="sticky top-0 z-[70] bg-white/90 backdrop-blur-md border-b border-brand-border px-6 md:px-12 py-4 flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
//                   <TbSettingsAutomation className="text-brand-blue animate-spin-slow" size={14} />
//                   <span className="text-brand-blue font-mono text-[9px] font-bold tracking-widest uppercase">
//                     STORY_ACCESS // GRANTED
//                   </span>
//                 </div>
//                 <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest hidden sm:block">
//                   Ref_ID: {storyData.id}
//                 </span>
//               </div>
//               <button 
//                 onClick={onClose}
//                 className="p-2 hover:bg-brand-gray rounded-full transition-colors text-brand-dark"
//               >
//                 <TbX size={24} />
//               </button>
//             </div>

//             {/* 2. DYNAMIC HERO SECTION */}
//             <div className="relative h-[45vh] md:h-[50vh] bg-brand-dark overflow-hidden">
//               <img 
//                 src={storyData.image} 
//                 className="w-full h-full object-cover opacity-60"
//                 alt={storyData.title}
//               />
//               {/* Deep white gradient to blend into the content area */}
//               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              
//               <div className="absolute bottom-6 left-0 w-full px-6 md:px-16">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <span className="bg-brand-blue text-white font-mono text-[9px] px-3 py-1 tracking-widest uppercase mb-3 inline-block shadow-lg">
//                     {storyData.category}
//                   </span>
//                   <h2 className="text-4xl md:text-7xl font-bold text-brand-dark tracking-tighter leading-[0.9] max-w-4xl">
//                     {storyData.title}
//                   </h2>
//                 </motion.div>
//               </div>
//             </div>

//             {/* 3. EDITORIAL GRID */}
//             <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
//               {/* Left Column: Content */}
//               <div className="lg:col-span-8 space-y-10">
//                 <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-medium border-l-4 border-brand-blue pl-6 md:pl-10">
//                   {storyData.fullDescription}
//                 </p>
                
//                 <div className="text-slate-600 space-y-6 text-base md:text-lg leading-relaxed">
//                   <p>
//                     The integration of the 5-axis synchronous movement cell represents a paradigm shift in our Adibatla facility. By pairing active AI toolpathing with real-time laser metrology, we ensure that the "Digital Twin" of every component is matched with 100% fidelity.
//                   </p>
                  
//                   {/* Technical Parameters Box */}
//                   <div className="bg-brand-gray p-6 md:p-10 border border-brand-border rounded-sm">
//                     <h4 className="text-brand-dark font-bold mb-8 flex items-center gap-2 text-sm md:text-base tracking-tight">
//                        <TbCpu className="text-brand-blue" /> ARCHITECTURAL PARAMETERS
//                     </h4>
//                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 font-mono text-[11px] md:text-xs">
//                       <li className="flex justify-between border-b border-brand-border pb-3">
//                         <span className="text-slate-400 uppercase tracking-wider">Tolerance Range</span>
//                         <span className="font-bold text-brand-blue">±0.003mm</span>
//                       </li>
//                       <li className="flex justify-between border-b border-brand-border pb-3">
//                         <span className="text-slate-400 uppercase tracking-wider">Base Material</span>
//                         <span className="font-bold text-brand-dark">Ti-6Al-4V</span>
//                       </li>
//                       <li className="flex justify-between border-b border-brand-border pb-3">
//                         <span className="text-slate-400 uppercase tracking-wider">Output Rating</span>
//                         <span className="font-bold text-brand-blue">Tier-1 Class</span>
//                       </li>
//                       <li className="flex justify-between border-b border-brand-border pb-3">
//                         <span className="text-slate-400 uppercase tracking-wider">Verification</span>
//                         <span className="font-bold text-brand-dark">Nadcap Spec</span>
//                       </li>
//                     </ul>
//                   </div>

//                   <p>
//                     This milestone cements Raghu Vamsi’s position as a global leader in high-technology product manufacturing, providing uncompromised precision for the world's most demanding aerospace OEMs.
//                   </p>
//                 </div>
//               </div>

//               {/* Right Column: Sidebar */}
//               <div className="lg:col-span-4">
//                 <div className="sticky top-32 space-y-8">
//                   <div className="p-6 md:p-8 border border-brand-border bg-brand-gray/30">
//                     <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
//                       <TbDatabase size={14} /> System_Log // RV_2025
//                     </h4>
//                     <div className="space-y-8">
//                       <div className="flex flex-col">
//                           <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Issue Date</span>
//                           <div className="flex items-center gap-3">
//                               <TbTimeline className="text-slate-400" />
//                               <span className="text-brand-dark font-bold text-sm">December 2025</span>
//                           </div>
//                       </div>
//                       <div className="flex flex-col">
//                           <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Operational Status</span>
//                           <div className="flex items-center gap-3">
//                               <TbActivity className="text-slate-400" />
//                               <span className="text-brand-dark font-bold text-sm">Deployment Active</span>
//                           </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 4. MODAL FOOTER */}
//             <div className="bg-brand-dark py-16 px-8 flex flex-col items-center">
//                <div className="h-px w-24 bg-brand-blue/30 mb-8" />
//                <p className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">
//                  End of Log Transmission // Raghu Vamsi Intelligence
//                </p>
//             </div>

//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FeaturedStoryModal;



import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbX, TbDatabase, TbSettingsAutomation, TbTimeline, TbActivity } from "react-icons/tb";

const FeaturedStoryModal = ({ isOpen, onClose, storyData }) => {
  if (!storyData) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-end justify-center overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />

          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 200 }}
            data-lenis-prevent className="relative w-full h-[95vh] bg-white rounded-t-3xl overflow-y-auto shadow-2xl no-scrollbar"
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
            
            {/* STICKY HUD HEADER */}
            <div className="sticky top-0 z-[70] bg-white/90 backdrop-blur-md border-b border-brand-border px-6 md:px-12 py-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
                  <TbSettingsAutomation className="text-brand-blue animate-spin-slow" size={14} />
                  <span className="text-brand-blue font-mono text-[9px] font-bold tracking-widest uppercase">STORY_ACCESS // GRANTED</span>
                </div>
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-widest hidden sm:block">Ref_ID: TX-{storyData.id}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-brand-gray rounded-full transition-colors text-brand-dark"><TbX size={24} /></button>
            </div>

            {/* HERO SECTION */}
            <div className="relative h-[45vh] md:h-[50vh] bg-brand-dark overflow-hidden">
              <img src={storyData.image} className="w-full h-full object-cover opacity-60" alt={storyData.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              <div className="absolute bottom-6 left-0 w-full px-6 md:px-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <span className="bg-brand-blue text-white font-mono text-[9px] px-3 py-1 tracking-widest uppercase mb-3 inline-block shadow-lg">{storyData.category}</span>
                  <h2 className="text-4xl md:text-7xl font-bold text-brand-dark tracking-tighter leading-[0.9] max-w-4xl">{storyData.title}</h2>
                </motion.div>
              </div>
            </div>

            {/* DYNAMIC EDITORIAL CONTENT AREA */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-8 space-y-10">
                
                {/* 1. Card Summary: Visible here as requested */}
                <p className="text-xl md:text-2xl text-brand-text leading-relaxed font-medium border-l-4 border-brand-blue pl-6 md:pl-10 italic">
                  {storyData.content}
                </p>
                
                {/* 2. Detailed Editorial: Visible here as requested */}
                <div className="text-slate-600 space-y-6 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
                  {storyData.fullContent}
                </div>
              </div>

              {/* SIDEBAR: System Metadata */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                  <div className="p-6 md:p-8 border border-brand-border bg-brand-gray/30">
                    <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                      <TbDatabase size={14} /> System_Log // RV_ARCHIVE
                    </h4>
                    <div className="space-y-8">
                      <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Transmission Date</span>
                          <div className="flex items-center gap-3">
                              <TbTimeline className="text-slate-400" />
                              <span className="text-brand-dark font-bold text-sm">{storyData.date}</span>
                          </div>
                      </div>
                      <div className="flex flex-col">
                          <span className="text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-2">Operational Status</span>
                          <div className="flex items-center gap-3">
                              <TbActivity className="text-slate-400" />
                              <span className="text-brand-dark font-bold text-sm">Broadcast Finalized</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="bg-brand-dark py-16 px-8 flex flex-col items-center">
               <div className="h-px w-24 bg-brand-blue/30 mb-8" />
               <p className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">End of Transmission // Raghu Vamsi Group</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeaturedStoryModal;