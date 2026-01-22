import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Intro from '../components/home/Intro';
import DivisionPreview from '../components/home/DivisionPreview';
import Industries from '../components/home/Industries'; // Import the new component
import GlobalReach from '../components/home/GlobalReach';

const Home = () => {
  return (
    <main className="w-full bg-white">
      <Hero />
      <TrustBar />
      <Intro />
      <DivisionPreview />
      <Industries /> {/* Add it here */}
<GlobalReach />
    </main>
  );
};

export default Home;