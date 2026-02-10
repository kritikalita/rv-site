// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   TbArrowRight,
// //   TbDatabase,
// //   TbBroadcast,
// //   TbActivity,
// //   TbExternalLink,
// // } from "react-icons/tb";
// // import FeaturedStoryModal from "./FeaturedStoryModal";

// // const StoriesHero = ({ onModalToggle }) => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Data for the Featured Story
// //   const featuredStory = {
// //     id: "STR-2025-01",
// //     category: "Technology // Milestone",
// //     title: "The Next Era of Autonomy.",
// //     fullDescription:
// //       "Raghu Vamsi officially commissions the first fully autonomous 5-axis machining cell for titanium wing spars at our Adibatla facility. This system integrates real-time laser metrology with AI-driven toolpath optimization, reducing cycle times by 40% while maintaining sub-micron repeatability across mission-critical aerospace sub-assemblies.",
// //     image:
// //       "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070",
// //   };

// //   return (
// //     <>
// //       {/* 1. BACKGROUND CHANGED TO bg-brand-dark (or bg-slate-950) */}
// //       <section className="relative min-h-[90vh] bg-brand-dark pt-32 pb-20 overflow-hidden flex items-center">
// //         {/* 2. ARCHITECTURAL BACKGROUND ELEMENTS ADJUSTED FOR DARK THEME */}
// //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
// //           <motion.h2
// //             initial={{ opacity: 0, x: 100 }}
// //             animate={{ opacity: 0.05, x: 0 }} // Increased opacity slightly for dark background
// //             transition={{ duration: 1.5 }}
// //             className="absolute -top-10 -right-20 text-[25vw] font-black uppercase leading-none tracking-tighter select-none text-white"
// //           >
// //             IN NEWS
// //           </motion.h2>

// //           <div
// //             className="absolute inset-0 opacity-[0.05]" // Increased contrast of grid
// //             style={{
// //               backgroundImage:
// //                 "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
// //               backgroundSize: "40px 40px",
// //             }}
// //           />
// //         </div>

// //         <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
// //             {/* LEFT: FEATURED STORY CONTENT */}
// //             <div className="lg:col-span-7">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 className="flex items-center gap-4 mb-8"
// //               >
// //                 <div className="flex items-center gap-2 bg-brand-blue/20 px-3 py-1 rounded-sm border border-brand-blue/30">
// //                   <span className="text-brand-blue font-mono font-bold tracking-[0.3em] text-[10px] uppercase">
// //                     2025 Featured Announcement
// //                   </span>
// //                 </div>
// //               </motion.div>

// //               {/* Text color changed to white */}
// //               <motion.h1
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.2 }}
// //                 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] mb-10 tracking-tighter"
// //               >
// //                 The Next Era of <br />
// //                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
// //                   Autonomy.
// //                 </span>
// //               </motion.h1>

// //               <motion.div
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ delay: 0.4 }}
// //                 className="max-w-xl border-l-4 border-brand-blue pl-8 mb-12"
// //               >
// //                 {/* Text color changed to white/slate-300 */}
// //                 <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">
// //                   Wing-Spar Production Cell v2.0
// //                 </h4>
// //                 <p className="text-slate-300 text-lg leading-relaxed font-medium">
// //                   {featuredStory.fullDescription.substring(0, 160)}...
// //                 </p>
// //               </motion.div>

// //               <div className="flex flex-wrap gap-6">
// //                 {/* Button adjusted to contrast against black */}
// //                 <button
// //                   onClick={() => {
// //                     setIsModalOpen(true);
// //                     onModalToggle(true);
// //                   }}
// //                   className="bg-white text-brand-dark px-10 py-5 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 group transition-all hover:bg-brand-blue hover:text-white relative overflow-hidden shadow-2xl"
// //                 >
// //                   <span className="relative z-10 flex items-center gap-2">
// //                     Read Full Story{" "}
// //                     <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
// //                   </span>
// //                   <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-dark group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
// //                 </button>

// //                 {/* Info box adjusted for dark theme */}
// //                 <div className="flex items-center gap-4 px-6 border border-white/10 bg-white/5 backdrop-blur-sm group cursor-help">
// //                   <div className="text-right">
// //                     <p className="text-[8px] font-mono text-slate-400 font-bold uppercase">
// //                       Impact Score
// //                     </p>
// //                     <p className="text-xs font-bold text-white group-hover:text-brand-blue transition-colors">
// //                       Tier-1 Achievement
// //                     </p>
// //                   </div>
// //                   <div className="w-px h-8 bg-white/20" />
// //                   <TbActivity className="text-brand-blue" size={20} />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* RIGHT: THE "HUD" IMAGE SYSTEM */}
// //             <div className="lg:col-span-5 relative">
// //               <motion.div
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 transition={{ duration: 0.8 }}
// //                 className="relative aspect-square"
// //               >
// //                 {/* Decorative Brackets adjusted for visibility */}
// //                 <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-blue z-20" />
// //                 <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-blue z-20" />

// //                 {/* Image Container - Glow effect refined */}
// //                 <div
// //                   onClick={() => setIsModalOpen(true)}
// //                   className="w-full h-full relative overflow-hidden bg-brand-dark rounded-sm shadow-[0_0_60px_rgba(0,71,171,0.4)] group cursor-crosshair border border-white/10"
// //                 >
// //                   <img
// //                     src={featuredStory.image}
// //                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale group-hover:opacity-50 group-hover:contrast-125"
// //                     alt="Autonomous Manufacturing Cell"
// //                   />

// //                   {/* Animated Scanning Line */}
// //                   <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/50 shadow-[0_0_15px_#0047AB] animate-scan z-30" />

// //                   {/* Live Data Badge */}
// //                   <div className="absolute top-8 right-8 z-30 bg-brand-blue text-white px-3 py-1 flex items-center gap-2 rounded-sm shadow-xl">
// //                     <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
// //                     <span className="font-mono text-[9px] font-bold tracking-[0.2em]">
// //                       IN NEWS
// //                     </span>
// //                   </div>
// //                 </div>

// //                 {/* Technical Bottom Label visibility adjusted */}
// //                 <div className="absolute -bottom-8 left-0 w-full flex justify-between items-center px-2">
// //                   <div className="flex gap-1">
// //                     {[...Array(5)].map((_, i) => (
// //                       <div
// //                         key={i}
// //                         className={`w-1 h-1 rounded-full ${
// //                           i < 4 ? "bg-brand-blue" : "bg-white/20"
// //                         }`}
// //                       />
// //                     ))}
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* MODAL TRIGGER */}
// //       <FeaturedStoryModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         storyData={featuredStory}
// //       />
// //     </>
// //   );
// // };

// // export default StoriesHero;



// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { TbArrowRight, TbActivity } from "react-icons/tb";
// import FeaturedStoryModal from "./FeaturedStoryModal";

// const StoriesHero = ({ onModalToggle }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [featuredStory, setFeaturedStory] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Sync with Spring Boot Pinned Story
//   useEffect(() => {
//     fetch('http://localhost:8080/api/transmissions/featured')
//       .then(res => res.status === 200 ? res.json() : null)
//       .then(data => {
//         if (data) {
//           setFeaturedStory({
//             ...data,
//             image: `http://localhost:8080${data.imageUrl}`,
//             // Mapping content for the italicized briefing area
//             description: data.content || "Accessing transmission details..."
//           });
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Hero_Sync_Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   // Use min-h-screen for the loading state to prevent jumps
//   if (loading || !featuredStory) return <div className="min-h-screen bg-brand-dark" />;

//   // Logic to split the title for the dual-tone effect
//   const titleWords = featuredStory.title.split(' ');
//   const mainTitle = titleWords.slice(0, -1).join(' ');
//   const lastWord = titleWords[titleWords.length - 1];

//   return (
//     <>
//       <section className="relative min-h-screen bg-brand-dark pt-20 pb-10 overflow-hidden flex items-center">
        
//         {/* ARCHITECTURAL BACKGROUND ELEMENTS */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//           <motion.h2
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 0.05, x: 0 }}
//             transition={{ duration: 1.5 }}
//             className="absolute -top-10 -right-20 text-[25vw] font-black uppercase leading-none tracking-tighter select-none text-white"
//           >
//             IN NEWS
//           </motion.h2>

//           <div
//             className="absolute inset-0 opacity-[0.05]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* LEFT: FEATURED STORY CONTENT */}
//             <div className="lg:col-span-7">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="flex items-center gap-4 mb-6"
//               >
//                 <div className="flex items-center gap-2 bg-brand-blue/20 px-3 py-1 rounded-sm border border-brand-blue/30">
//                   <span className="text-brand-blue font-mono font-bold tracking-[0.3em] text-[10px] uppercase">
//                     Featured Announcement
//                   </span>
//                 </div>
//               </motion.div>

//               {/* DYNAMIC DUAL-TONE TITLE */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.85] mb-8 tracking-tighter"
//               >
//                 {mainTitle} <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">
//                   {lastWord}
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="max-w-xl border-l-4 border-brand-blue pl-8 mb-10"
//               >
//                 <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tight">
//                   Transmission Briefing
//                 </h4>
//                 <p className="text-slate-300 text-lg leading-relaxed font-medium">
//                   {featuredStory.description.substring(0, 160)}...
//                 </p>
//               </motion.div>

//               <div className="flex flex-wrap gap-6">
//                 <button
//                   onClick={() => {
//                     setIsModalOpen(true);
//                     onModalToggle(true);
//                   }}
//                   className="bg-white text-brand-dark px-10 py-5 font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 group transition-all hover:bg-brand-blue hover:text-white relative overflow-hidden shadow-2xl"
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Read Full Story{" "}
//                     <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
//                   </span>
//                   <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-dark group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
//                 </button>

//                 <div className="flex items-center gap-4 px-6 border border-white/10 bg-white/5 backdrop-blur-sm group cursor-help">
//                   <div className="text-right">
//                     <p className="text-[8px] font-mono text-slate-400 font-bold uppercase">
//                       Operational Date
//                     </p>
//                     <p className="text-xs font-bold text-white group-hover:text-brand-blue transition-colors uppercase">
//                       {new Date(featuredStory.timestamp).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                     </p>
//                   </div>
//                   <div className="w-px h-8 bg-white/20" />
//                   <TbActivity className="text-brand-blue" size={20} />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT: THE "HUD" IMAGE SYSTEM */}
//             <div className="lg:col-span-5 relative">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative aspect-square"
//               >
//                 <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-blue z-20" />
//                 <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-blue z-20" />

//                 <div
//                   onClick={() => setIsModalOpen(true)}
//                   className="w-full h-full relative overflow-hidden bg-brand-dark rounded-sm shadow-[0_0_60px_rgba(0,71,171,0.4)] group cursor-crosshair border border-white/10"
//                 >
//                   <img
//                     src={featuredStory.image}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale group-hover:opacity-50 group-hover:contrast-125"
//                     alt={featuredStory.title}
//                   />

//                   <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-blue/50 shadow-[0_0_15px_#0047AB] animate-scan z-30" />

//                   <div className="absolute top-8 right-8 z-30 bg-brand-blue text-white px-3 py-1 flex items-center gap-2 rounded-sm shadow-xl">
//                     <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
//                     <span className="font-mono text-[9px] font-bold tracking-[0.2em]">
//                       IN NEWS
//                     </span>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-8 left-0 w-full flex justify-between items-center px-2">
//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <div
//                         key={i}
//                         className={`w-1 h-1 rounded-full ${
//                           i < 4 ? "bg-brand-blue" : "bg-white/20"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <FeaturedStoryModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         storyData={featuredStory}
//       />
//     </>
//   );
// };

// export default StoriesHero;







import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbArrowRight, TbActivity } from "react-icons/tb";
import FeaturedStoryModal from "./FeaturedStoryModal";

const StoriesHero = ({ onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredStory = {
  id: "STR-2025-01",
  category: "MAJOR MILESTONE",
  date: "15 DEC 2025",
  readingTime: "4 Min Briefing", // Calculated for technical depth
  title: "Unveiling the Citadel: Raghu Vamsi Launches ₹100 Cr DeepTech Facility & Arrobot Brand",
  fullDescription: "A landmark expansion into autonomous systems, marking the formal inauguration of our 25,000 sq. ft. design-to-assembly hub and the unveiling of six indigenous UAV platforms.",
  image: "src/assets/images/news1.jpg",
  content: [
    "We are proud to share that the Raghu Vamsi Aerospace Group has formally inaugurated our ₹100 crore DeepTech facility at the Citadel Campus in Hardware Park, conveniently located near Hyderabad International Airport. This 25,000 sq. ft. state-of-the-art campus is purpose-built to support our end-to-end design, production, and systems integration operations, with a primary focus on advancing UAV platforms and next-generation propulsion technologies.",
    "In coordination with this landmark launch, we unveiled six fully indigenous autonomous defense products developed entirely in India under our new subsidiary and DeepTech brand, Arrobot. Unveiled in the presence of distinguished senior military and scientific leaders, our new portfolio features jet-powered loitering munitions, air-based missile launchers, and tethered surveillance drones. These systems, which also include micro turbojet engines, are engineered for high-performance missions with operational ranges exceeding 300 km and speeds reaching up to 650 kmph.",
    "To further accelerate our indigenous technology development and support India's strategic self-reliance, we have formalized four key Memoranda of Understanding (MoUs). These strategic partnerships include a collaboration with the Indian Army’s 515 Army Base Workshop for co-designing advanced drone platforms, a co-development agreement with Bharat Dynamics (BDL) for 200 kgf thrust-class engines, an AI-focused initiative with IIIT Hyderabad, and a materials research pact with the International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI).",
    "Currently, we operate 10 manufacturing sites across three countries and employ a dedicated workforce of over 1,000 professionals. Looking ahead, we are expanding our industrial footprint with an additional ₹300 crore manufacturing complex spanning 2.5 lakh sq. ft.. Scheduled to be operational by late 2025 or early 2026, this eight-acre facility is expected to create high-skill employment for over 2,000 people within its first three years.",
    "Fueled by the growing demand for our indigenous systems, our founder and managing director, Vamsi Vikas, has confirmed an order book of approximately ₹1,500 crore for the next three years. Driven by our commitment to technological sovereignty, we project our group-level revenues to exceed ₹500 crore within the current financial year."
  ]
};

  return (
    <>
      <section className="relative min-h-[90vh] bg-slate-50 pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden flex items-center">
        {/* BACKGROUND ACCENTS: Scaled for big screens */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.03, x: 0 }} 
            transition={{ duration: 1.5 }}
            /* 25vw on laptop -> 30vw on ultra-wide */
            className="absolute -top-10 -right-20 text-[25vw] 2xl:text-[30vw] font-black uppercase leading-none tracking-tighter select-none text-slate-900"
          >
            IN NEWS
          </motion.h2>

          <div className="absolute inset-0 opacity-[0.08]" 
            style={{ backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
        </div>

        <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 2xl:gap-16 items-center">
            
            {/* LEFT: CONTENT - Stays centered on mobile, left-aligned on desktop */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-brand-blue/10 px-3 py-1 rounded-sm border border-brand-blue/20">
                  <span className="text-brand-blue font-mono font-bold tracking-[0.3em] text-[10px] 2xl:text-xs uppercase">
                    2025 Featured Announcement
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                /* text-5xl (Mobile) -> 8xl (Laptop) -> 10rem (2xl) */
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] font-bold text-slate-900 leading-[0.9] md:leading-[0.85] mb-8 md:mb-10 tracking-tighter"
              >
                Defining India’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-600">Autonomous Might.</span>
              </motion.h1>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="max-w-xl 2xl:max-w-3xl border-l-4 border-brand-blue pl-6 md:pl-8 mb-10 md:mb-12"
              >
                <h4 className="text-slate-900 font-bold text-lg 2xl:text-2xl mb-2 uppercase tracking-tight">Citadel DeepTech: Spar Fabrication Line</h4>
                <p className="text-slate-600 text-base md:text-lg 2xl:text-2xl leading-relaxed font-medium">
                  {featuredStory.fullDescription.substring(0, 160)}...
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 w-full">
                <button
                  onClick={() => { setIsModalOpen(true); onModalToggle(true); }}
                  className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 2xl:px-16 2xl:py-8 font-bold uppercase tracking-[0.3em] text-[10px] 2xl:text-sm flex items-center justify-center gap-4 group transition-all hover:bg-brand-blue relative overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Read Full Story <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>

                <div className="flex items-center gap-4 px-6 py-4 md:py-0 border border-slate-200 bg-white shadow-sm group cursor-help w-full sm:w-auto justify-center">
                  <div className="text-right">
                    <p className="text-[8px] 2xl:text-[10px] font-mono text-slate-400 font-bold uppercase">Impact Score</p>
                    <p className="text-xs 2xl:text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">Tier-1 Achievement</p>
                  </div>
                  <div className="w-px h-8 bg-slate-200" />
                  <TbActivity className="text-brand-blue w-5 h-5 2xl:w-8 2xl:h-8" />
                </div>
              </div>
            </div>

            {/* RIGHT: HUD IMAGE SYSTEM */}
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                className="relative w-full max-w-[450px] lg:max-w-none aspect-square"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-brand-blue/40 z-20" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-brand-blue/40 z-20" />

                <div onClick={() => setIsModalOpen(true)}
                  className="w-full h-full relative overflow-hidden bg-white rounded-sm shadow-2xl group cursor-crosshair border border-slate-200"
                >
                  <img src={featuredStory.image} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale group-hover:opacity-60 grayscale-0 opacity-100" alt="Autonomous Cell" />
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30 bg-brand-blue text-white px-3 py-1 flex items-center gap-2 rounded-sm shadow-xl">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="font-mono text-[9px] 2xl:text-xs font-bold tracking-[0.2em]">IN NEWS</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedStoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} storyData={featuredStory} />
    </>
  );
};

export default StoriesHero;