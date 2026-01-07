import React from 'react';

// Import your local assets
import boeing from '../../assets/logos/boeing.png';
import ge from '../../assets/logos/ge.png';
import honeywell from '../../assets/logos/honeywell.png';
import rollsroyce from '../../assets/logos/rolls-royce.png';
import isro from '../../assets/logos/isro.png';
import drdo from '../../assets/logos/drdo.png';
import GE_HealthCare from '../../assets/logos/GE_HealthCare.png';
import bdl from '../../assets/logos/bdl.png';
import safran from '../../assets/logos/safran.png';
import schlum from '../../assets/logos/schulm.png';
import defence from '../../assets/logos/defence.svg';
import cytiva from '../../assets/logos/cytiva.svg'; 
import halliburton from '../../assets/logos/halliburton.png';

const TrustBar = () => {
  const clients = [
    { name: "Boeing", logo: boeing },
    { name: "GE Aviation", logo: ge },
    { name: "Honeywell", logo: honeywell },
    { name: "Rolls-Royce", logo: rollsroyce },
    { name: "ISRO", logo: isro },
    { name: "DRDO", logo: drdo },
    { name: "GE HealthCare", logo: GE_HealthCare },
    { name: "BDL", logo: bdl },
    { name: "Safran", logo: safran },
    { name: "Schlumberger", logo: schlum }, 
    { name: "Defence", logo: defence },
    { name: "Cytiva", logo: cytiva },
    { name: "Halliburton", logo: halliburton },
  ];

  return (
    <section className="py-12 bg-white border-b border-brand-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">
          Trusted by Global Aerospace Leaders
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Side Gradients for fading effect */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10" />

        {/* The Scrolling Track */}
        {/* We map 3 times (Triple) to ensure the track is always long enough for the -50% trick */}
        <div className="animate-marquee flex whitespace-nowrap items-center">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="mx-8 md:mx-16 w-32 h-16 flex items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                // Removed grayscale per your previous request
                className="max-w-full max-h-full object-contain hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;