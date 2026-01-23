import React from 'react';
import ContactSection from '../components/contact/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // pt-20 on mobile to ensure the form starts below the Navbar
      className="bg-white min-h-screen pt-20 lg:pt-0"
    >
      <ContactSection />
    </motion.main>
  );
};

export default Contact;


