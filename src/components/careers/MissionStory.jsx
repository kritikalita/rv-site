import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const impactMissions = [
  {
    title: "MAKE AN IMPACT",
    description: "At Raghu Vamsi, our team solves high-stakes engineering challenges that define the future of national defense and global aviation. From manufacturing flight-critical engine components for global OEMs to indigenizing high-precision aerospace hardware, our work empowers the next era of flight.",
    image: "src/assets/images/carLast.png" 
  },
  {
    title: "AUTONOMOUS FRONTIER",
    description: "Through ARROBOT, we are engineering the future of autonomy. We develop indigenous Unmanned Ground Vehicles (UGVs) and AI-driven robotic solutions designed to redefine industrial efficiency and enhance strategic defense capabilities on the modern battlefield.",
    image: "src/assets/images/impact1.png" 
  },
  {
    title: "PROPULSION MASTERY",
    description: "Our propulsion division is pushing the boundaries of indigenous technology with the development of high-thrust micro turbojet engines. Engineered for high-performance UAVs and target drones, these systems represent a major leap in Indian aerospace self-reliance.",
    image: "src/assets/images/imp.png"
  },
  {
    title: "GLOBAL ENERGY SOLUTIONS",
    description: "With our acquisition of the UK-based PMC Group, we provide high-precision surface and subsea flow control components for the world's leading oil and gas partners. Our exotic alloy machining ensures reliability in the most extreme environments on Earth.",
    image: "src/assets/images/impact6.png"
  }
];

const MissionStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === impactMissions.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? impactMissions.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-start pt-[20vh]">
      {/* 1. DYNAMIC BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundColor: '#010816' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={impactMissions[currentSlide].image}
            loading="eager"
            className="w-full h-screen object-cover"
            alt={impactMissions[currentSlide].title}
          />
          
          {/* LAYER A: Uniform Subtle Tint */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* LAYER B: Text-Specific Gradient (Right-anchored to protect right-aligned text) */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* 2. TEXT PLACEMENT */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 flex justify-end">
        <div className="max-w-xl lg:max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              /* Optional: Add a subtle text shadow for extra punch on very bright images */
              className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase mb-6">
                {impactMissions[currentSlide].title}
              </h2>
              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed font-light opacity-95">
                {impactMissions[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. NAVIGATION HUD */}
      <div className="absolute bottom-10 w-full px-6 md:px-12 lg:px-20 flex justify-between items-center z-20">
        <button 
          onClick={prevSlide}
          className="text-white/40 hover:text-white transition-all transform hover:scale-110 active:scale-90"
        >
          <TbChevronLeft size={30} strokeWidth={1.5} />
        </button>

        <div className="flex gap-2">
          {impactMissions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-white' : 'bg-white/20'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="text-white/40 hover:text-white transition-all transform hover:scale-110 active:scale-90"
        >
          <TbChevronRight size={30} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default MissionStory;