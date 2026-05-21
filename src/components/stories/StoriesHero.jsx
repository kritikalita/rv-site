import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbArrowRight, TbActivity } from "react-icons/tb";
import FeaturedStoryModal from "./FeaturedStoryModal";
import newsImage from "../../assets/images/news1.jpg";

const StoriesHero = ({ onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredStory = {
  id: "STR-2025-01",
  category: "MAJOR MILESTONE",
  date: "15 DEC 2025",
  readingTime: "4 Min Briefing", // Calculated for technical depth
  title: "Unveiling the Citadel: Raghu Vamsi Launches ₹100 Cr DeepTech Facility & Arrobot Brand",
  fullDescription: "A landmark expansion into autonomous systems, marking the formal inauguration of our 25,000 sq. ft. design-to-assembly hub and the unveiling of six indigenous UAV platforms.",
  image: newsImage,
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