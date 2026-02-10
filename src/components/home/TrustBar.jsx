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
    /* Responsive vertical padding: py-8 (Mobile) -> md:py-12 (Laptop/Original) -> 2xl:py-20 (Big Screens) */
    <section className="py-8 md:py-12 2xl:py-20 bg-white border-b border-brand-border overflow-hidden relative">
      
      {/* Container max-width expands on very large screens to maintain proportion */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 mb-6 md:mb-10 2xl:mb-14 text-center">
        <p className="text-gray-400 text-[10px] md:text-xs 2xl:text-sm font-bold tracking-[0.2em] uppercase">
          Trusted by Global Aerospace Leaders
        </p>
      </div>

      <div className="relative flex items-center overflow-x-hidden group">
        {/* Side Gradients: w-12 (Mobile) -> md:w-40 (Original) -> 2xl:w-64 (Big Screens) */}
        <div className="absolute top-0 left-0 w-12 md:w-40 2xl:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 md:w-40 2xl:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* The Scrolling Track */}
        <div className="animate-marquee flex whitespace-nowrap items-center py-2">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              /* Spacing: mx-6 (Mobile) -> md:mx-16 (Laptop) -> 2xl:mx-24 (Big Screen)
                 Logo Dimensions: w-24/h-10 (Mobile) -> w-32/h-16 (Laptop) -> w-48/h-24 (Big Screen) */
              className="mx-6 md:mx-16 2xl:mx-24 w-24 md:w-32 2xl:w-48 h-10 md:h-16 2xl:h-24 flex items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-full object-contain hover:scale-110 2xl:hover:scale-125 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;