import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import CultureVideo from '../components/careers/CultureVideo';
import Testimonials from '../components/careers/Testimonials';
import JobBoard from '../components/careers/JobBoard';

const Careers = () => {
  return (
    <main className="min-h-screen bg-white">
      <CareersHero />
      <CultureVideo />
      {/* Moving the DNA Grid here creates a better story flow */}
      <Testimonials />
      <JobBoard />
    </main>
  );
};

export default Careers;