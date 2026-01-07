import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Ethos from '../components/about/Ethos';
import Timeline from '../components/about/Timeline';
import Accreditations from '../components/about/Accreditations'; // Import New Section
import Awards from '../components/about/Awards';
import Leadership from '../components/about/Leadership';

const About = () => {
  return (
    <main>
      <AboutHero />
      <Ethos />
      <Timeline />
      <Accreditations /> {/* Added here: Clean White Section */}
      <Awards />         {/* Followed by: Dark Premium Section */}
      <Leadership />
    </main>
  );
};

export default About;