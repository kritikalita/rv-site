import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categories = [
  "Aftermarket & Service", "Communications", "Digital Technology",
  "Engineering", "Finance", "General Management", 
  "Human Resources", "Legal", "Operations",
  "Quality", "Supply Chain", "Other"
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/careers/search?q=${category}`);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#111111] overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1100px] mx-auto px-6 w-full relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-8 text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight"
          >
            Ready to solve the hardest problems in manufacturing and automation?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm md:text-base"
          >
            Explore opportunities to connect and innovate with us.
          </motion.p>
        </div>

        {/* DIRECTORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              onClick={() => handleCategoryClick(cat)}
              // Hover: background transitions to brand blue
              className="group relative bg-white h-20 md:h-24 flex items-center px-8 cursor-pointer transition-all duration-300 hover:bg-[#0047AB]"
            >
              {/* Text: Blue initially, White on hover */}
              <span className="text-sm md:text-base font-bold text-[#0047AB] uppercase tracking-wider transition-colors duration-300 group-hover:text-white">
                {cat}
              </span>

              {/* Subtle inner border that fades out on hover */}
              <div className="absolute inset-0 border border-gray-100 group-hover:border-transparent transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;