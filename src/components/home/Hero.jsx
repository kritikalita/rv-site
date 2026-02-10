import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="src/assets/images/homeHero.mp4" type="video/mp4" />
          <img src="src/assets/images/homeHero.png" alt="Advanced Manufacturing Fallback" />
        </video>
        
        {/* Responsive Gradient: Vertical on mobile (b), Horizontal on desktop (r) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent z-10" />
      </div>

      {/* 2. Content Container */}
      {/* max-w-[1440px] for standard laptops, 2xl:max-w-[1800px] for big screens */}
      <div className="relative z-20 h-full max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <div className="max-w-full md:max-w-3xl lg:max-w-4xl 2xl:max-w-6xl">
          
          {/* Animated Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            {/* You can add a small line/badge here if needed later */}
          </motion.div>

          {/* Main Title */}
          {/* text-4xl: Mobile
            sm:text-5xl: Tablet
            md:text-7xl: iPad Pro / Laptop
            lg:text-8xl: Large Desktop
            2xl:text-9xl: Ultrawide / Big Screens
          */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10rem] font-bold text-white tracking-tight leading-[1.05] mb-6 md:mb-8"
          >
            Creating value<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white/80">
              {" "}with precision.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-xl lg:max-w-2xl 2xl:max-w-4xl leading-relaxed mb-8 md:mb-10 border-l-2 border-brand-blue pl-4 md:pl-6 mx-auto md:mx-0"
          >
           {/* Text content injected here */}
          </motion.p>

          {/* Buttons Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full sm:w-auto"
          >
            {/* Buttons go here */}
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;