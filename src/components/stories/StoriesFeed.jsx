// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { TbArrowRight, TbCalendar, TbTag, TbCircleFilled } from "react-icons/tb";
// // import FeaturedStoryModal from './FeaturedStoryModal';

// // const categories = ["ALL", "TECHNOLOGY", "MANUFACTURING", "PRESS RELEASES"];

// // const blogPosts = [
// //   { 
// //     id: "STR-01", 
// //     category: "TECHNOLOGY", 
// //     date: "DEC 2025", 
// //     title: "Propulsion Systems: Achieving 0.01mm Tolerance in Turbine Blades.", 
// //     image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
// //     fullDescription: "An exploration into the advanced cooling geometries and metallurgical constraints required to achieve 0.01mm tolerances in next-generation turbine blades for high-bypass turbofans."
// //   },
// //   { 
// //     id: "STR-02", 
// //     category: "TECHNOLOGY", 
// //     date: "NOV 2025", 
// //     title: "Integration of 5-Axis Autonomous Machining Cells at Adibatla HQ.", 
// //     image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1974&auto=format&fit=crop",
// //     fullDescription: "Details on the operational deployment of our newest 5-axis cells, featuring active vibration damping and AI-optimized toolpaths."
// //   },
// //   { 
// //     id: "STR-03", 
// //     category: "MANUFACTURING", 
// //     date: "OCT 2025", 
// //     title: "Raghu Vamsi Achieves 100% Export Compliance for EU Corridors.", 
// //     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
// //     fullDescription: "A strategic overview of our logistics pipeline and regulatory alignment with European aerospace standards."
// //   },
// //   { 
// //     id: "STR-04", 
// //     category: "PRESS RELEASES", 
// //     date: "SEP 2025", 
// //     title: "Strategic Partnership Formed with Global Defense OEM.", 
// //     image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
// //     fullDescription: "Raghu Vamsi enters a long-term agreement for the production of critical structural components for next-generation defense platforms."
// //   },
// //   { 
// //     id: "STR-05", 
// //     category: "MANUFACTURING", 
// //     date: "AUG 2025", 
// //     title: "Scaling Aerospace Production: The Impact of Industry 4.0 Digitization.", 
// //     image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
// //     fullDescription: "How digital twin technology and IoT sensors are streamlining our shop floor operations and enhancing quality control."
// //   }
// // ];

// // const StoriesFeed = ({ onModalToggle }) => {
// //   const [activeTab, setActiveTab] = useState("ALL");
// //   const [visibleCount, setVisibleCount] = useState(3);
// //   const [selectedPost, setSelectedPost] = useState(null);

// //   const filteredPosts = activeTab === "ALL" 
// //     ? blogPosts 
// //     : blogPosts.filter(post => post.category === activeTab);

// //   const hasMore = visibleCount < filteredPosts.length;
// //   const isExpanded = visibleCount > 3;

// //   const loadMore = () => setVisibleCount(prev => prev + 3);
// //   const showLess = () => setVisibleCount(3);

// //   const handleCloseModal = () => {
// //     setSelectedPost(null);
// //     onModalToggle(false);
// //   };

// //   return (
// //     <section className="py-24 bg-white overflow-hidden relative">
// //       {/* Background Grid Pattern */}
// //       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
// //            style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

// //       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
// //         {/* HEADER & FILTERS */}
// //         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
// //           <div className="max-w-2xl">
// //             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
// //               <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
// //               <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Knowledge Archive</span>
// //             </motion.div>
// //             <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
// //               Latest <span className="text-brand-blue">Transmissions.</span>
// //             </h2>
// //           </div>

// //           <div className="flex flex-wrap gap-2 lg:gap-3 bg-slate-50 p-1.5 rounded-sm border border-slate-200">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => { setActiveTab(cat); setVisibleCount(3); }}
// //                 className={`px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
// //                   activeTab === cat 
// //                   ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
// //                   : 'text-slate-400 hover:text-brand-blue hover:bg-white'
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* BLOG GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           <AnimatePresence mode='popLayout'>
// //             {filteredPosts.slice(0, visibleCount).map((post) => (
// //               <motion.div
// //                 key={post.id}
// //                 layout
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.95 }}
// //                 transition={{ duration: 0.4, ease: "circOut" }}
// //                 onClick={() => {
// //                     setSelectedPost(post);
// //                     onModalToggle(true);
// //                 }}
// //                 className="group relative flex flex-col h-[480px] border border-white/10 rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(0,71,171,0.3)] transition-all duration-500 cursor-pointer"
// //                 style={{
// //                   background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 70%)'
// //                 }}
// //               >
// //                 <div className="absolute top-4 left-4 z-20">
// //                   <span className="bg-brand-blue text-white text-[8px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">{post.id}</span>
// //                 </div>

// //                 <div className="h-[45%] overflow-hidden relative">
// //                   <img 
// //                     src={post.image} 
// //                     alt={post.title} 
// //                     className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-70" 
// //                   />
// //                   <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
// //                 </div>

// //                 <div className="h-[55%] p-8 flex flex-col justify-between bg-transparent relative">
// //                   <div>
// //                     <div className="flex items-center gap-2 text-blue-400 font-bold text-[9px] uppercase tracking-widest mb-4">
// //                       <TbTag className="text-xs" /> {post.category}
// //                     </div>
// //                     <h3 className="text-xl font-bold text-white leading-tight group-hover:text-brand-blue transition-colors duration-300">
// //                       {post.title}
// //                     </h3>
// //                   </div>
                  
// //                   <div className="flex justify-between items-center pt-6 border-t border-white/10">
// //                     <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 font-bold tracking-tighter">
// //                       <TbCalendar className="text-brand-blue text-xs" /> {post.date}
// //                     </div>
// //                     <div className="flex items-center gap-2 text-white font-bold text-[9px] uppercase tracking-widest group/link group-hover:text-brand-blue transition-colors">
// //                       <span>Expand Intel</span>
// //                       <TbArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

//     //     {/* --- DYNAMIC TOGGLE SECTION --- */}
//     //     <div className="mt-24 relative flex flex-col items-center">
          
//     //       <div className="flex gap-8 relative z-10">
//     //         {hasMore && (
//     //           <button 
//     //             onClick={loadMore}
//     //             className="group flex flex-col items-center gap-3 px-6 py-3 border border-white/10 rounded-sm shadow-2xl transition-all duration-500 hover:border-brand-blue/50"
//     //             style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)' }}
//     //           >
//     //             <div className="flex items-center gap-3">
//     //               <div className="relative flex h-2 w-2">
//     //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
//     //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
//     //               </div>
//     //               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-brand-blue transition-colors">
//     //                 Load More  
//     //               </span>
//     //             </div>
//     //             {/* Animated accent bar */}
//     //             <div className="h-[1px] w-24 bg-white/10 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
//     //           </button>
//     //         )}

//     //         {isExpanded && (
//     //           <button 
//     //             onClick={showLess}
//     //             className="group flex flex-col items-center gap-3 px-6 py-3 border border-white/10 rounded-sm shadow-2xl transition-all duration-500 hover:border-brand-blue/50"
//     //             style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)' }}
//     //           >
//     //             <div className="flex items-center gap-3">
//     //               {/* Pulsing indicator added to match Load More */}
//     //               <div className="relative flex h-2 w-2">
//     //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
//     //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
//     //               </div>
//     //               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-brand-blue transition-colors">
//     //                 Collapse Segment
//     //               </span>
//     //             </div>
//     //             {/* Animated accent bar changed to brand-blue hover */}
//     //             <div className="h-[1px] w-24 bg-white/10 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
//     //           </button>
//     //         )}
//     //       </div>

//     //       {/* Technical logging text at bottom */}
//     //       <p className="mt-6 font-mono text-[8px] text-slate-400 uppercase tracking-widest">
//     //         {isExpanded ? "Visualizing Full Archive" : `Showing ${visibleCount} more stories...`}
//     //       </p>
//     //     </div>
//     //   </div>

//     //   <FeaturedStoryModal 
//     //     isOpen={!!selectedPost} 
//     //     onClose={handleCloseModal} 
//     //     storyData={selectedPost} 
//     //   />
//     // </section>
// //   );
// // };

// // export default StoriesFeed;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { TbArrowRight, TbCalendar, TbTag } from "react-icons/tb";
// import FeaturedStoryModal from './FeaturedStoryModal';

// const categories = ["ALL", "TECHNOLOGY", "MANUFACTURING", "PRESS RELEASES"];

// const StoriesFeed = ({ onModalToggle }) => {
//   const [transmissions, setTransmissions] = useState([]);
//   const [activeTab, setActiveTab] = useState("ALL");
//   const [visibleCount, setVisibleCount] = useState(3); // Start with 3 cards
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Sync with Spring Boot Transmission Archive
//   useEffect(() => {
//     fetch('http://localhost:8080/api/transmissions')
//       .then(res => res.json())
//       .then(data => {
//         setTransmissions(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Archive_Sync_Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const filteredPosts = activeTab === "ALL" 
//     ? transmissions 
//     : transmissions.filter(post => post.category === activeTab);

//   // LOGIC FOR TOGGLE SECTION
//   const hasMore = visibleCount < filteredPosts.length;
//   const isExpanded = visibleCount > 3;

//   const loadMore = () => setVisibleCount(prev => prev + 3);
//   const showLess = () => setVisibleCount(3);

//   const handleCloseModal = () => {
//     setSelectedPost(null);
//     onModalToggle(false);
//   };

//   if (loading) return <div className="py-24 text-center font-mono text-brand-blue animate-pulse">Synchronizing Archive...</div>;

//   return (
//     <section className="py-24 bg-white overflow-hidden relative">
//       {/* Background Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* HEADER & FILTERS */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
//           <div className="max-w-2xl">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
//               <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
//               <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Knowledge Archive</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
//               Latest <span className="text-brand-blue">Transmissions.</span>
//             </h2>
//           </div>

//           <div className="flex flex-wrap gap-2 lg:gap-3 bg-slate-50 p-1.5 rounded-sm border border-slate-200">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => { setActiveTab(cat); setVisibleCount(3); }}
//                 className={`px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
//                   activeTab === cat 
//                   ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
//                   : 'text-slate-400 hover:text-brand-blue hover:bg-white'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* BLOG GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence mode='popLayout'>
//             {filteredPosts.slice(0, visibleCount).map((post) => {
//               const displayImage = post.imageUrl ? `http://localhost:8080${post.imageUrl}` : "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070";
              
//               return (
//                 <motion.div
//                   key={post.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   transition={{ duration: 0.4, ease: "circOut" }}
//                   onClick={() => {
//                       setSelectedPost({
//                           ...post,
//                           image: displayImage,
//                           date: new Date(post.timestamp).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
//                           content: post.content, // Summary
//                           fullContent: post.fullContent // Full Editorial
//                       });
//                       onModalToggle(true);
//                   }}
//                   className="group relative flex flex-col h-[480px] border border-white/10 rounded-sm overflow-hidden hover:shadow-[0_0_40px_rgba(0,71,171,0.3)] transition-all duration-500 cursor-pointer"
//                   style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 70%)' }}
//                 >
//                   <div className="absolute top-4 left-4 z-20">
//                     <span className="bg-brand-blue text-white text-[8px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">TX-{post.id}</span>
//                   </div>

//                   <div className="h-[45%] overflow-hidden relative">
//                     <img src={displayImage} alt={post.title} className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-70" />
//                     <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
//                   </div>

//                   <div className="h-[55%] p-8 flex flex-col justify-between bg-transparent relative">
//                     <div>
//                       <div className="flex items-center gap-2 text-blue-400 font-bold text-[9px] uppercase tracking-widest mb-4">
//                         <TbTag className="text-xs" /> {post.category || "GENERAL"}
//                       </div>
//                       <h3 className="text-xl font-bold text-white leading-tight group-hover:text-brand-blue transition-colors duration-300">
//                         {post.title}
//                       </h3>
//                     </div>
                    
//                     <div className="flex justify-between items-center pt-6 border-t border-white/10">
//                       <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 font-bold tracking-tighter uppercase">
//                         <TbCalendar className="text-brand-blue text-xs" /> {new Date(post.timestamp).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                       </div>
//                       <div className="flex items-center gap-2 text-white font-bold text-[9px] uppercase tracking-widest group-hover:text-brand-blue transition-colors">
//                         <span>Expand Intel</span>
//                         <TbArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>

//         {/* --- DYNAMIC TOGGLE SECTION --- */}
//         <div className="mt-24 relative flex flex-col items-center">
//           <div className="flex gap-8 relative z-10">
//             {hasMore && (
//               <button 
//                 onClick={loadMore}
//                 className="group flex flex-col items-center gap-3 px-6 py-3 border border-white/10 rounded-sm shadow-2xl transition-all duration-500 hover:border-brand-blue/50"
//                 style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)' }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
//                   </div>
//                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-brand-blue transition-colors">
//                     Load More  
//                   </span>
//                 </div>
//                 <div className="h-[1px] w-24 bg-white/10 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
//               </button>
//             )}

//             {isExpanded && (
//               <button 
//                 onClick={showLess}
//                 className="group flex flex-col items-center gap-3 px-6 py-3 border border-white/10 rounded-sm shadow-2xl transition-all duration-500 hover:border-brand-blue/50"
//                 style={{ background: 'radial-gradient(circle at top right, #1e40af 0%, #020617 100%)' }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
//                   </div>
//                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-brand-blue transition-colors">
//                     Collapse Segment
//                   </span>
//                 </div>
//                 <div className="h-[1px] w-24 bg-white/10 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
//               </button>
//             )}
//           </div>

//           <p className="mt-6 font-mono text-[8px] text-slate-400 uppercase tracking-widest">
//             {isExpanded && !hasMore ? "Visualizing Full Archive" : `Showing ${Math.min(visibleCount, filteredPosts.length)} stories...`}
//           </p>
//         </div>
//       </div>

//       <FeaturedStoryModal 
//         isOpen={!!selectedPost} 
//         onClose={handleCloseModal} 
//         storyData={selectedPost} 
//       />
//     </section>
//   );
// };

// export default StoriesFeed;






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbArrowRight, TbCalendar, TbTag } from "react-icons/tb";
import FeaturedStoryModal from './FeaturedStoryModal';

const categories = ["ALL", "TECHNOLOGY", "MANUFACTURING", "PRESS RELEASES"];

// DATA DEFINITION: Ensure this is defined BEFORE the component
const blogPosts = [
  { 
    id: "01", 
    category: "TECHNOLOGY", 
    date: "22 JAN 2026", 
    readingTime: "3 Min Read",
    title: "Diplomatic Strategic Review: Israeli Embassy Delegation Visits Raghu Vamsi Deep-Tech Hub", 
    image: "src/assets/images/news2.jpeg",
    fullDescription: "A high-level engagement focused on strategic alignment, evaluating the convergence of indigenous system-level engineering and production readiness for global defense requirements.",
    content: [
      "We had the privilege of hosting a senior delegation from the Embassy of Israel at Raghu Vamsi Aerospace Group, marking a significant milestone in our international strategic engagement.",
      "The visit included detailed technical walkthroughs of our deep-tech platforms, missile and UAV propulsion systems, and aero-engine components, demonstrating our integrated manufacturing capabilities across Arrobot and Comprotech.",
      "Discussions centered on our engineering depth and production readiness, specifically how indigenous Indian capability can scale rapidly to meet the evolving operational requirements of modern global defense.",
      "The engagement reinforced the strong strategic alignment between India and Israel in aerospace—identifying meaningful opportunities for collaboration where complementary strengths in technology and deployment can support both ecosystems.",
      "By bringing together system-level engineering and execution depth, this visit paves the way for long-term capability building and localized manufacturing excellence."
    ]
},
  { 
    id: "02", 
    category: "MANUFACTURING", 
    date: "27 SEPT 2026", 
    readingTime: "4 Min Briefing",
    title: "Industrial Commissioning: Raghu Vamsi Unveils NADCAP-Certified Special Processes Facility", 
    image: "src/assets/images/news3.jpeg",
    fullDescription: "A strategic expansion of onsite chemical processing and non-destructive testing capabilities, establishing a vertically integrated 'one-stop shop' for high-critical aerospace assemblies.",
    content: [
      "We are proud to announce the formal inauguration of Raghu Vamsi’s Special Processes Facility at Hardware Park, Hyderabad. This milestone marks a significant leap in our commitment to precision and global quality standards in aerospace manufacturing.",
      "The ceremony was led by Chief Guest Mr. Maurice Yeh (Sr. Director - Global Strategic Sourcing, Collins Aerospace, USA), celebrating the successful completion of our NADCAP audit. The event was attended by leadership from Collins Aerospace and the Raghu Vamsi executive board.",
      "The new onsite facility introduces critical capabilities including Non-Destructive Testing (FPI & MPI), Passivation, Anodising, and Cadmium/Zinc Nickel Plating. These additions allow us to manage the complete lifecycle of high-critical precision parts under one roof.",
      "By integrating these special processes with our existing 5-axis CNC machining, sheet metal fabrication, and composites lines, we are effectively streamlining the supply chain for our global partners. This integration ensures faster lead times and enhanced traceability.",
      "This expansion reinforces our promise to provide reliable, end-to-end solutions. We remain dedicated to delivering operational excellence and maintaining the highest global standards of compliance for the aerospace and defense sectors."
    ]
},
  { 
    id: "03", 
    category: "PRESS RELEASES", 
    date: "13 NOV 2025", 
    readingTime: "2 Min Briefing",
    title: "Performance Excellence: Raghu Vamsi Receives Outstanding Supplier Award from RTX", 
    image: "src/assets/images/news4.jpeg",
    fullDescription: "A prestigious recognition of business excellence and uncompromising quality, awarded during the RTX Supplier Conference featuring global leaders Collins Aerospace, Pratt & Whitney, and Raytheon.",
    content: [
      "We are honored to announce that Raghu Vamsi has been awarded the 'Outstanding Supplier Performance Award' at the prestigious RTX Supplier Conference held at The Taj, Bangalore. This accolade is a testament to our ongoing commitment to business excellence and uncompromising quality.",
      "The conference was one of RTX’s largest gatherings, bringing together industry giants including Collins Aerospace, Pratt & Whitney, and Raytheon, alongside more than 300 global supplier partners. This environment of innovation underscores the strategic value we contribute to the aerospace ecosystem.",
      "Customer awards reflect the relentless, year-long effort of every team member to deliver consistency and precision. This recognition validates the dedication and collaborative spirit that define our organizational culture.",
      "We extend our sincere gratitude to Collins Aerospace for their continued trust and for recognizing our contributions. Their support motivates us to scale our operations further, delivering reliability and value in every mission-critical engagement.",
      "A heartfelt thank you to our entire team for their resilience and pursuit of excellence. This achievement belongs to every innovator at Raghu Vamsi who strives to set new benchmarks in aerospace manufacturing."
    ]
},
  { 
    id: "04", 
    category: "TECHNOLOGY", 
    date: "19 JUN 2025", 
    readingTime: "5 Min Briefing",
    title: "Strategic Defense Integration: Indigenous Propulsion Launch & Global Acquisition", 
    image: "src/assets/images/news5.jpeg",
    fullDescription: "Multi-tier advancements in defense autonomy featuring the test-firing of an in-house 40 Kgf turbojet engine, first flight of a jet-powered Kamikaze UAV, and the strategic acquisition of WMT Precision LLC (USA).",
    content: [
      "At the Paris Air Show, Raghu Vamsi Group announced groundbreaking developments set to transform the indigenous defense landscape. Highlighting our propulsion roadmap, we successfully test-fired our fully in-house developed 40 Kgf turbojet engine at our Hardware Park Facility. This high-performance system is optimized for UAVs, target drones, and cruise missiles.",
      "In the domain of autonomous systems, we unveiled our Next-Gen Kamikaze Fixed Wing UAV. Capable of achieving speeds up to 450 km/h with an operational range of 200 km, this jet-powered platform has successfully completed its initial test flights and is currently undergoing combat-readiness certification.",
      "Expanding our global footprint, we formally announced the acquisition of WMT Precision LLC, based in Syracuse, USA. With over 40 years of expertise in manufacturing critical fuel nozzles for aero engines, WMT brings specialized Nadcap-approved capabilities in Vacuum Brazing, EDM, and Heat Treatment to our portfolio.",
      "These integrated developments signify a new era for Raghu Vamsi, bridging the gap between component manufacturing and system-level defense innovation. The Hardware Park Facility now features a specialized firing test area specifically designed for these high-thrust propulsion programs.",
      "Together, these milestones reinforce our commitment to building a self-reliant Indian defense ecosystem. By combining indigenous R&D with strategic global acquisitions, we are positioning Raghu Vamsi as a primary provider of flight-critical hardware and autonomous solutions worldwide."
    ]
},
  { 
    id: "05", 
    category: "MANUFACTURING", 
    date: "13 NOV 2024", 
    readingTime: "4 Min Briefing",
    title: "Global Portfolio Expansion: Raghu Vamsi Group Completes 100% Acquisition of UK-based PMC Group", 
    image: "src/assets/images/news6.jpg",
    fullDescription: "A highly strategic cross-border milestone marking the group's entry into the European Oil & Gas markets through the acquisition of a renowned British precision manufacturing firm with a century-long legacy.",
    content: [
      "Hyderabad-based Raghu Vamsi Group has successfully completed the 100% acquisition of PMC Group, a leading UK-based precision machining specialist for the Oil & Gas industry. This move significantly enhances our global footprint and moves the group further up the value chain in providing high-precision solutions for critical global industries.",
      "The acquisition combines Raghu Vamsi’s state-of-the-art Hyderabad manufacturing facilities with PMC’s 35+ years of expertise in safety-critical subsea and surface flow control. PMC is world-renowned for producing choke valve components and complex parts in exotic alloys such as Inconel and Monel, with the capability to manufacture assemblies up to 6 meters in length.",
      "This merger creates immediate operational synergies, diversifying our portfolio beyond Aerospace & Defense to include the global Oil & Gas sector. With PMC’s established blue-chip customer base—including SLB, Baker Hughes, and Halliburton—the energy sector is projected to immediately account for approximately 25% of the group’s total revenue.",
      "The strategic milestone was celebrated at an event attended by key stakeholders, including the Deputy High Commissioner of the UK to India, Gareth Wynn Owen, and Telangana IT Special Chief Secretary Jayesh Ranjan. The partnership highlights a historic moment of an Indian MSME transforming into a multinational corporation through the acquisition of a 100-year-old British heritage brand.",
      "By leveraging the combined strengths of our Indian and UK facilities, Raghu Vamsi Group is now positioned to provide highly cost-efficient and precision-engineered solutions for a $1 billion addressable market, ensuring uncompromised quality and innovation for our partners worldwide."
    ]
}
];

const StoriesFeed = ({ onModalToggle }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter Logic
  const filteredPosts = activeTab === "ALL" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  const hasMore = visibleCount < filteredPosts.length;
  const isExpanded = visibleCount > 3;

  const loadMore = () => setVisibleCount(prev => prev + 3);
  const showLess = () => setVisibleCount(3);

  const handleCloseModal = () => {
    setSelectedPost(null);
    onModalToggle(false);
  };

  return (
    <section className="py-16 md:py-24 2xl:py-32 bg-white overflow-hidden relative border-t border-brand-border">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px] 2xl:text-xs">Knowledge Archive</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
              Latest <span className="text-brand-blue">Transmissions.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-3 bg-blue-50 p-1.5 rounded-sm border border-blue-100 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setVisibleCount(3); }}
                className={`flex-1 lg:flex-none px-4 md:px-6 py-2 font-mono text-[9px] md:text-[10px] 2xl:text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
                  activeTab === cat 
                  ? 'bg-brand-blue text-white shadow-lg' 
                  : 'text-brand-dark/50 hover:text-brand-blue hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredPosts.slice(0, visibleCount).map((post, i) => {
              const isSkyBlue = i % 2 !== 0; 
              return (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  onClick={() => {
                      setSelectedPost(post);
                      onModalToggle(true);
                  }}
                  className={`group relative flex flex-col h-[480px] 2xl:h-[600px] border ${isSkyBlue ? 'border-blue-100' : 'border-white/10'} rounded-sm overflow-hidden transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl`}
                  style={{
                    background: isSkyBlue 
                      ? '#E0F2FE' 
                      : 'linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)'
                  }}
                >
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-blue text-white text-[8px] 2xl:text-xs font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">{post.id}</span>
                  </div>

                  <div className="h-[45%] overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-100 group-hover:opacity-90" 
                    />
                  </div>

                  <div className="h-[55%] p-8 2xl:p-12 flex flex-col justify-between bg-transparent relative">
                    <div>
                      <div className={`flex items-center gap-2 font-bold text-[9px] 2xl:text-xs uppercase tracking-widest mb-4 ${isSkyBlue ? 'text-brand-blue' : 'text-blue-300'}`}>
                        <TbTag className="text-xs" /> {post.category}
                      </div>
                      <h3 className={`text-xl 2xl:text-3xl font-bold leading-tight transition-colors duration-300 ${isSkyBlue ? 'text-brand-dark group-hover:text-brand-blue' : 'text-white group-hover:text-blue-300'}`}>
                        {post.title}
                      </h3>
                    </div>
                    
                    <div className={`flex justify-between items-center pt-6 border-t ${isSkyBlue ? 'border-brand-blue/10' : 'border-white/10'}`}>
                      <div className={`flex items-center gap-1.5 text-[9px] 2xl:text-xs font-mono font-bold tracking-tighter ${isSkyBlue ? 'text-brand-dark/50' : 'text-blue-100/40'}`}>
                        <TbCalendar className={isSkyBlue ? 'text-brand-blue' : 'text-blue-300'} /> {post.date}
                      </div>
                      <div className={`flex items-center gap-2 font-bold text-[9px] 2xl:text-sm uppercase tracking-widest group/link transition-colors ${isSkyBlue ? 'text-brand-dark hover:text-brand-blue' : 'text-white hover:text-blue-300'}`}>
                        <span>Expand Intel</span>
                        <TbArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-20 md:mt-24 relative flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 relative z-10 w-full sm:w-auto">
            {hasMore && (
              <button 
                onClick={loadMore}
                className="group flex flex-col items-center gap-3 px-10 py-4 2xl:px-16 2xl:py-8 border border-white/10 rounded-sm transition-all duration-500 hover:border-brand-blue/50 shadow-xl"
                style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                  </div>
                  <span className="text-[10px] 2xl:text-sm font-black uppercase tracking-[0.4em] text-white">Load More Transmissions</span>
                </div>
                <div className="h-[1px] w-24 bg-brand-blue/30 group-hover:bg-brand-blue group-hover:w-32 transition-all" />
              </button>
            )}

            {isExpanded && (
              <button 
                onClick={showLess}
                className="group flex flex-col items-center gap-3 px-10 py-4 2xl:px-16 2xl:py-8 border border-slate-200 rounded-sm bg-white shadow-xl hover:border-brand-blue transition-all"
              >
                <span className="text-[10px] 2xl:text-sm font-black uppercase tracking-[0.4em] text-brand-dark">Collapse Segment</span>
                <div className="h-[1px] w-24 bg-slate-100 group-hover:bg-brand-blue transition-all" />
              </button>
            )}
          </div>
          <p className="mt-6 font-mono text-[8px] 2xl:text-xs text-brand-dark/40 uppercase tracking-widest font-bold">
            {isExpanded ? "Visualizing Full Archive" : `Showing ${visibleCount} of ${filteredPosts.length} transmissions`}
          </p>
        </div>
      </div>

      <FeaturedStoryModal isOpen={!!selectedPost} onClose={handleCloseModal} storyData={selectedPost} />
    </section>
  );
};

export default StoriesFeed;