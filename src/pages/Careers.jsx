// src/pages/Careers.jsx
import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import MissionStory from '../components/careers/MissionStory'; // New
import DivisionStories from '../components/careers/DivisionStories'; // New
import CultureVideo from '../components/careers/CultureVideo';
import Testimonials from '../components/careers/Testimonials';
import CategoryGrid from '../components/careers/CategoryGrid';
import CareersClosing from '../components/careers/CareersClosing'; // New: Highlighting Employee Talents and Passions

const Careers = () => {
  return (
    <main className="min-h-screen bg-white">
      <CareersHero />
      <MissionStory /> { /* SpaceX Inspired Storytelling */ }
      <DivisionStories /> { /* RTX Inspired Division Navigation */ }
      <CultureVideo />
      <Testimonials />
      <CategoryGrid />
      <CareersClosing /> { /* New: Highlighting Employee Talents and Passions */ }
    </main>
  );
};

export default Careers;