import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { TbCircleFilled } from "react-icons/tb";

const history = [

{

year: "1992",

title: "Founder: Mr. G. Thrimurthulu",

desc: "After starting 'Subha Industries' in 1984, the founder’s vision for precision engineering culminated in 1992. Hailing from humble agricultural roots, he transformed a career that began as a supervisor into a precision manufacturing legacy in Hyderabad.",

image: "src/assets/images/1992.webp"

},

{

year: "2002",

title: "A Dream Starts - Raghu Vamsi",

desc: "Driven by a vision to establish a global aerospace presence, the founder initiated the 'Raghu Vamsi' journey at IDA Gandhi Nagar. Leveraging modest savings and bank support, he began building the facility while initiating strategic technical discussions with HAL.",

image: "src/assets/images/2002.webp"

},

{

year: "2004",

title: "A Legacy Continued",

desc: "Following the untimely passing of the founder, Mr. G. Vamsi Vikas took the helm at age 22. Pausing his Executive MBA at IIM-C, he stepped in to fulfill his father's vision, incorporating Raghu Vamsi Machine Tools and beginning a new chapter of global ambition.",

image: "src/assets/images/2004.png"

},

{

year: "2005",

title: "Process-Driven Evolution",

desc: "To achieve global excellence, the group transformed into a process-driven organization, preparing for ISO 9001 Certification. This rigorous focus on quality systems and controls enabled the commencement of manufacturing critical components for HAL, Bangalore.",

image: "src/assets/images/2005.webp"

},

{

year: "2006",

title: "National Recognition",

desc: "Recognized as a rapidly growing MSME, the Managing Director was honored with the prestigious 'Bharat Gourav Award' by the Government of India in Delhi. This award celebrated visionary leadership and excellence in the burgeoning defense manufacturing sector.",

image: "src/assets/images/2006.png"

},

{

year: "2007",

title: "Global Footprint Expansion",

desc: "Raghu Vamsi entered the international arena, commencing exports to the USA and Germany. This global journey began by supplying mission-critical Oil & Gas components to Halliburton (USA) and high-precision gauge instrumentation to WIKA (Germany).",

image: "src/assets/images/2007.png"

},

{

year: "2008",

title: "Aerospace Gold Standard",

desc: "Achieving AS 9100 Certification marked a pivotal leap, making Raghu Vamsi a pioneer in the region. This aerospace-specific quality management system established the stringent controls required to supply critical flight components to the world's leading aviation OEMs.",

image: "src/assets/images/2008.webp"

},

{

year: "2010",

title: "Excellence in Performance",

desc: "Raghu Vamsi reached new heights in operational reliability, earning the 'Best Vendor Award' from HAL. This period of excellence was further recognized by the Government of India with the Bharat Vikas Ratan Award, honoring the group's contribution to national manufacturing.",

image: "src/assets/images/2010.png"

},

{

year: "2011",

title: "Aero Engine Joint Venture",

desc: "Raghu Vamsi was selected as the strategic Indian partner for ITP Aero (a Rolls-Royce subsidiary) for their Tubes and Ducts Value Stream. This landmark JV was built on a proven track record of quality, bolstered by our new NADCAP Certification in Special Processes.",

image: "src/assets/images/2011.png"

},

{

year: "2012",

title: "Global Tier-1 Integration",

desc: "Leveraging our JV expertise, Raghu Vamsi achieved Tier-1 supplier status with global giants. This began with approval from Rockwell Collins (USA) and rapidly expanded to strategic partnerships with GE Aviation and UTC Aerospace, solidifying our presence in the international arena.",

image: "src/assets/images/2012.png"

},

{

year: "2014",

title: "Systems & Defense Innovation",

desc: "Raghu Vamsi transitioned into complex systems integration by partnering with DRDO to indigenously develop 'Critical Thrust Vector Control' sub-systems. This successful project marked our evolution from a component manufacturer to a provider of mission-critical defense sub-assemblies.",

image: "src/assets/images/2014.png"

},

{

year: "2015",

title: "GE Aviation Best Vendor Award",

desc: "Raghu Vamsi’s commitment to a 'Zero Error' culture was globally validated when the team received the Best Vendor Award from GE Aviation. This prestigious recognition from a world-leading OEM served as a catalyst for our next phase of large-scale infrastructure expansion.",

image: "src/assets/images/2015.png"

},

{

year: "2016",

title: "Sheet Metal Facility Inception",

desc: "Responding to customer demand for engine brackets, we launched our specialized Sheet Metal facility. In its inaugural year, the plant achieved AS and NADCAP certifications, successfully delivering over 100 critical components to global giants like Rolls-Royce and Pratt & Whitney.",

image: "src/assets/images/2016.png"

},

{

year: "2018",

title: "Advanced Composites & Comprotech",

desc: "Raghu Vamsi diversified into advanced materials through the acquisition of a neighboring specialist firm, leading to the birth of 'Comprotech.' This strategic move added carbon and glass fiber manufacturing to our portfolio, expanding our reach into lightweight structural aerospace parts.",

image: "src/assets/images/2018.png"

},

{

year: "2019",

title: "Global Acquisition: WMT USA",

desc: "Raghu Vamsi expanded its global footprint by acquiring WMT in Syracuse, USA. By reviving the facility, we established a strategic hub for high-end aero-engine fuel nozzles, utilizing advanced Vacuum Brazing and EDM technologies for partners like Collins Aerospace and Parker.",

image: "src/assets/images/2019.png"

},

{

year: "2020",

title: "TISA Aerospace & UAV Innovation",

desc: "Born from pandemic resilience, Raghu Vamsi partnered with IIT-Kanpur to launch TISA Aerospace. This move into indigenous defense technology led to the successful development of Kamikaze drones with a 60km range, marking our entry into the future of autonomous military solutions.",

image: "src/assets/images/2020.webp"

},

{

year: "2021",

title: "Precision Aerospace Fasteners",

desc: "At the request of Boeing, Raghu Vamsi launched a dedicated Aerospace Fasteners division. This expansion addressed the critical global demand for high-strength hardware, establishing a specialized facility for the manufacturing of flight-critical fasteners to international standards.",

image: "src/assets/images/2021.png"

},

{

year: "2022",

title: "Skanda: High-Precision Gear JV",

desc: "Raghu Vamsi partnered with US-based Rave Gears to form 'Skanda,' a specialized venture for high-end aerospace gearing. This collaboration combines US technical expertise with our execution excellence to produce flight-critical Spiral Bevel, Helical, and Curvic coupling gears.",

image: "src/assets/images/2022.png"

},

{

year: "2023",

title: "ARROBOT: Robotics & AI Division",

desc: "Raghu Vamsi launched ARROBOT, a cutting-edge startup dedicated to AI-driven automation and robotics. Combining engineering expertise with innovation, ARROBOT focuses on redefining industrial efficiency and sustainability through autonomous ground vehicles and intelligent robotic solutions.",

image: "src/assets/images/2023.png"

},

];

const Timeline = () => {
  const scrollContainer = useRef(null);

  return (
    <section className="relative py-24 bg-white border-t border-b border-brand-border overflow-hidden">
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Legacy Transmission</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Historical <span className="text-brand-blue">Milestones.</span>
            </h2>
          </div>

          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[180px] leading-relaxed">
              Temporal Archive<br />
              <span className="text-brand-blue font-mono">Our Evolution</span>
            </p>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainer}
        className="flex overflow-x-auto pb-4 gap-8 no-scrollbar relative z-10 w-full 
                   pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)]" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {history.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="shrink-0 w-[80vw] md:w-[340px] h-[420px] relative group rounded-sm overflow-hidden border border-white/10 shadow-xl transition-all duration-500"
            /* UPDATED: Background uses new signature blue gradient */
            style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}
          >
            <div className="absolute top-4 left-4 z-30">
               <span className="bg-brand-blue text-white text-[9px] font-mono px-2 py-1 tracking-widest uppercase rounded-sm shadow-md">
                  {item.year}
               </span>
            </div>

            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-30" 
              />
              {/* UPDATED: Gradient overlay updated to blend with deep blue instead of black */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#022049] via-transparent to-transparent opacity-90 z-10" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 z-30 w-full">
              <h3 className="text-xl font-bold text-white mb-3 leading-tight transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
                {item.title}
              </h3>
              
              <p className="text-blue-100/70 text-xs leading-relaxed border-l-2 border-brand-blue/40 pl-4 group-hover:text-white transition-colors italic">
                "{item.desc}"
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
          </motion.div>
        ))}
        <div className="min-w-[50px] md:min-w-[calc((100vw-80rem)/2+1.5rem)] shrink-0" />
      </div>
    </section>
  );
};

export default Timeline;