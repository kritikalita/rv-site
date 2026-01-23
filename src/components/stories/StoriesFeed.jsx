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
import { TbArrowRight, TbCalendar, TbTag, TbCircleFilled } from "react-icons/tb";
import FeaturedStoryModal from './FeaturedStoryModal';

const categories = ["ALL", "TECHNOLOGY", "MANUFACTURING", "PRESS RELEASES"];

const blogPosts = [
  { 
    id: "STR-01", 
    category: "TECHNOLOGY", 
    date: "DEC 2025", 
    title: "Propulsion Systems: Achieving 0.01mm Tolerance in Turbine Blades.", 
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "An exploration into the advanced cooling geometries and metallurgical constraints required to achieve 0.01mm tolerances in next-generation turbine blades for high-bypass turbofans."
  },
  { 
    id: "STR-02", 
    category: "TECHNOLOGY", 
    date: "NOV 2025", 
    title: "Integration of 5-Axis Autonomous Machining Cells at Adibatla HQ.", 
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1974&auto=format&fit=crop",
    fullDescription: "Details on the operational deployment of our newest 5-axis cells, featuring active vibration damping and AI-optimized toolpaths."
  },
  { 
    id: "STR-03", 
    category: "MANUFACTURING", 
    date: "OCT 2025", 
    title: "Raghu Vamsi Achieves 100% Export Compliance for EU Corridors.", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "A strategic overview of our logistics pipeline and regulatory alignment with European aerospace standards."
  },
  { 
    id: "STR-04", 
    category: "PRESS RELEASES", 
    date: "SEP 2025", 
    title: "Strategic Partnership Formed with Global Defense OEM.", 
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    fullDescription: "Raghu Vamsi enters a long-term agreement for the production of critical structural components for next-generation defense platforms."
  },
  { 
    id: "STR-05", 
    category: "MANUFACTURING", 
    date: "AUG 2025", 
    title: "Scaling Aerospace Production: The Impact of Industry 4.0 Digitization.", 
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    fullDescription: "How digital twin technology and IoT sensors are streamlining our shop floor operations and enhancing quality control."
  }
];

const StoriesFeed = ({ onModalToggle }) => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedPost, setSelectedPost] = useState(null);

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
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER & FILTERS */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Knowledge Archive</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Latest <span className="text-brand-blue">Transmissions.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-3 bg-blue-50 p-1.5 rounded-sm border border-blue-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setVisibleCount(3); }}
                className={`px-6 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-sm ${
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

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredPosts.slice(0, visibleCount).map((post) => (
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
                /* REMOVED: hover:shadow-[0_0_40px_rgba(0,71,171,0.3)] */
                className="group relative flex flex-col h-[480px] border border-white/10 rounded-sm overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)'
                }}
              >
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-blue text-white text-[8px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">{post.id}</span>
                </div>

                <div className="h-[45%] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-70" 
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#022049] via-transparent to-transparent opacity-80" />
                </div>

                <div className="h-[55%] p-8 flex flex-col justify-between bg-transparent relative">
                  <div>
                    <div className="flex items-center gap-2 text-blue-300 font-bold text-[9px] uppercase tracking-widest mb-4">
                      <TbTag className="text-xs" /> {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-blue-100/40 font-bold tracking-tighter">
                      <TbCalendar className="text-blue-300 text-xs" /> {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-white font-bold text-[9px] uppercase tracking-widest group/link group-hover:text-blue-300 transition-colors">
                      <span>Expand Intel</span>
                      <TbArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- DYNAMIC TOGGLE SECTION --- */}
        <div className="mt-24 relative flex flex-col items-center">
          
          <div className="flex gap-8 relative z-10">
            {hasMore && (
              <button 
                onClick={loadMore}
                /* REMOVED: shadow-2xl */
                className="group flex flex-col items-center gap-3 px-10 py-4 border border-white/10 rounded-sm transition-all duration-500 hover:border-brand-blue/50"
                style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-white transition-colors">
                    Load More  
                  </span>
                </div>
                <div className="h-[1px] w-24 bg-brand-blue/30 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
              </button>
            )}

            {isExpanded && (
              <button 
                onClick={showLess}
                /* REMOVED: shadow-2xl */
                className="group flex flex-col items-center gap-3 px-10 py-4 border border-white/10 rounded-sm transition-all duration-500 hover:border-brand-blue/50"
                style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90 group-hover:text-white transition-colors">
                    Collapse Segment
                  </span>
                </div>
                <div className="h-[1px] w-24 bg-brand-blue/30 group-hover:bg-brand-blue group-hover:w-32 transition-all duration-700" />
              </button>
            )}
          </div>

          <p className="mt-6 font-mono text-[8px] text-brand-dark/40 uppercase tracking-widest font-bold">
            {isExpanded ? "Visualizing Full Archive" : `Showing ${visibleCount} of ${filteredPosts.length} transmissions`}
          </p>
        </div>
      </div>

      <FeaturedStoryModal 
        isOpen={!!selectedPost} 
        onClose={handleCloseModal} 
        storyData={selectedPost} 
      />
    </section>
  );
};

export default StoriesFeed;