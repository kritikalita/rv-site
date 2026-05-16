import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Ethos from '../components/about/Ethos';
import Timeline from '../components/about/Timeline';
import Accreditations from '../components/about/Accreditations'; // Import New Section
import Awards from '../components/about/Awards';
import Leadership from '../components/about/Leadership';
import GovernanceTrust from '../components/about/GovernanceTrust';

const About = () => {
  return (
    <main>
      <AboutHero />
      <Ethos />
      <Timeline />
      <Accreditations />
      <GovernanceTrust /> 
      <Awards />        
      <Leadership />
    </main>
  );
};

export default About;