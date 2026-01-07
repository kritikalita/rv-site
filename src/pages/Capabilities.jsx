import React from 'react';
import { motion } from 'framer-motion';

// Component Imports
import CapabilitiesHero from '../components/capabilities/CapabilitiesHero';
import CapabilitiesGrid from '../components/capabilities/CapabilitiesGrid';
import SectorIntelligence from '../components/capabilities/SectorIntelligence';

const Capabilities = () => {
  return (
    <motion.main 
      className="bg-white min-h-screen"
      // Add a simple fade-in so the user doesn't see the "snap" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Giving these containers a standard height prevents the page 
          from being "short" during the initial render */}
      <div className="min-h-[70vh]"><CapabilitiesHero /></div>
      <div className="min-h-[100vh]"><CapabilitiesGrid /></div>
      <SectorIntelligence />
    </motion.main>
  );
};

export default Capabilities;