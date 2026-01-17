import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StoriesHero from '../components/stories/StoriesHero';
import StoriesFeed from '../components/stories/StoriesFeed';
import MonthlyJournal from '../components/stories/MonthlyJournal';

const Stories = () => {
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    if (isAnyModalOpen) {
      document.documentElement.classList.add('lenis-stopped');
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = 'unset';
    };
  }, [isAnyModalOpen]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen"
    >
      {/* 1. The Hero handles the top featured story */}
      <StoriesHero onModalToggle={setIsAnyModalOpen} />
      
      {/* 2. THE FEED: Only call this ONCE. It handles the "Latest Transmissions" 
          header and the dynamic grid loop */}
      <StoriesFeed onModalToggle={setIsAnyModalOpen} />
      
      {/* 3. The Journal handles the bottom Editorial Dossier */}
      <MonthlyJournal onModalToggle={setIsAnyModalOpen} />
    </motion.main>
  );
};

export default Stories;