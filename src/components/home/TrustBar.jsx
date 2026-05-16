import React from 'react';

// Import your local assets
import boeing from '../../assets/logos/boeing.png';
import honeywell from '../../assets/logos/honeywell.png';
import rollsroyce from '../../assets/logos/rolls-royce.png';
import isro from '../../assets/logos/isro.png';
import drdo from '../../assets/logos/drdo.webp';
import GE_HealthCare from '../../assets/logos/GE_HealthCare.png';
import safran from '../../assets/logos/safran.png';
import defence from '../../assets/logos/defence.svg'; 
import halliburton from '../../assets/logos/halliburton.png';
import geAerospace from '../../assets/logos/geAerospace.png';
import collins from '../../assets/logos/collins.webp';
import slb from '../../assets/logos/slb.png';
import pT from '../../assets/logos/pT.png';
import baker from '../../assets/logos/baker.webp';

const TrustBar = () => {
  const clients = [
    { name: "GE Aerospace", logo: geAerospace },
    { name: "Collins Aerospace", logo: collins },
    { name: "Honeywell", logo: honeywell },
    { name: "Safran", logo: safran },
    { name: "Boeing", logo: boeing },
    { name: "Rolls-Royce", logo: rollsroyce },
    { name: "PT", logo: pT },
    { name: "ISRO", logo: isro },
    { name: "DRDO", logo: drdo },
    { name: "Defence", logo: defence },
    { name: "Baker Hughes", logo: baker },
    { name: "Halliburton", logo: halliburton },
    { name: "SLB", logo: slb },
    { name: "GE HealthCare", logo: GE_HealthCare },
  ];

  return (
    /* Optimized Padding:
       Mobile: py-8
       Tablet/Laptop: md:py-12
       High-res/Ultrawide: 2xl:py-20 
    */
    <section className="py-8 md:py-12 2xl:py-20 bg-white border-b border-brand-border overflow-hidden relative">
      
      {/* Header Container:
          Expands max-width to 1800px for large screens.
          Adjusts margin bottom (mb) and font-size based on device.
      */}
      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 mb-6 md:mb-10 2xl:mb-16 text-center">
        <p className="text-gray-400 text-[10px] md:text-xs 2xl:text-sm font-bold tracking-[0.2em] uppercase">
          Trusted by Global Aerospace Leaders
        </p>
      </div>

      <div className="relative flex items-center overflow-x-hidden group">
        {/* Optimized Side Gradients:
            We use wider "feathers" on larger screens to prevent harsh edges 
            w-16 (Mobile) -> w-40 (Laptop) -> w-64 (2xl)
        */}
        <div className="absolute top-0 left-0 w-16 md:w-40 2xl:w-64 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-40 2xl:w-64 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* The Scrolling Track */}
        <div className="animate-marquee flex whitespace-nowrap items-center py-2">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              /* RESPONSIVE LOGO SPACING & DIMENSIONS:
                 Horizontal Margin: mx-8 (Mob) -> mx-16 (Laptop) -> mx-24 (2xl)
                 Width: w-24 (Mob) -> w-32 (Laptop) -> w-48 (2xl)
                 Height: h-10 (Mob) -> h-16 (Laptop) -> h-24 (2xl)
              */
              className="mx-8 md:mx-16 2xl:mx-24 w-24 md:w-32 2xl:w-48 h-10 md:h-16 2xl:h-24 flex items-center justify-center cursor-pointer transition-all duration-300 flex-shrink-0"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                /* Higher scale factor for 2xl to emphasize detail on big screens */
                className="max-w-full max-h-full object-contain hover:scale-110 2xl:hover:scale-125 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;