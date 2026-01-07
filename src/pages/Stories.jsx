import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StoriesHero from '../components/stories/StoriesHero';
import StoriesFeed from '../components/stories/StoriesFeed';
import MonthlyJournal from '../components/stories/MonthlyJournal';

const Stories = () => {
  // Global state to track if ANY modal on this page is open
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    if (isAnyModalOpen) {
      // Add class to stop Lenis and standard scrolling
      document.documentElement.classList.add('lenis-stopped');
      document.body.style.overflow = 'hidden';
    } else {
      // Remove class to resume scrolling
      document.documentElement.classList.remove('lenis-stopped');
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount to prevent stuck scrollbars
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
      {/* Pass the setter function to children so they can 
          signal when they open or close a modal 
      */}
      <StoriesHero onModalToggle={setIsAnyModalOpen} />
      <StoriesFeed onModalToggle={setIsAnyModalOpen} />
      
      <MonthlyJournal />
    </motion.main>
  );
};

export default Stories;