import React from "react";
import { motion } from "framer-motion";
import { TbCircleFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

// Asset imports (Kept as provided)
import vamsiImg from "../../assets/images/vamsi.webp";
import manishImg from "../../assets/images/manish.webp";
import abhinayImg from "../../assets/images/abhinay.webp";
import deepakImg from "../../assets/images/deepak.webp";
import vinodImg from "../../assets/images/vinod.webp";
import praveenImg from "../../assets/images/praveen.webp";
import raoImg from "../../assets/images/rao.webp";
import harshaImg from "../../assets/images/harsha.webp";
import mohGImg from "../../assets/images/mohG.webp";
import abhishekImg from "../../assets/images/abhishek.webp";
import ramaswamyImg from "../../assets/images/ramaswamy.webp";
import mohanImg from "../../assets/images/mohan.webp";
import prabhakaranImg from "../../assets/images/prabhaa.webp";
import yadgiriImg from "../../assets/images/yadgiri.webp";
import rakeshImg from "../../assets/images/Rakesh.webp";
import venkataImg from "../../assets/images/venkata.webp";
import shaunImg from "../../assets/images/shaun.webp";
import markImg from "../../assets/images/mark.webp";
import naiduImg from "../../assets/images/naidu.webp";
import raviImg from "../../assets/images/ravi.webp";
import sivaImg from "../../assets/images/siva.webp";
import preetiImg from "../../assets/images/preeti.webp";
import jagdishImg from "../../assets/images/jagdish.webp";





const Leadership = () => {
  const coreLeadership = {
    groupHeads: [
      { name: "Vamsi Vikas", role: "Chairman & MD", image: vamsiImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/vamsi-vikas-ganesula-0150b72/" },
      { name: "Preeti Vamsi", role: "Group CEO & ED", image: preetiImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/preeti-pallepati-05bb701/" },
      { name: "Manish Matta", role: "ED", image: manishImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/manishmatta1979/" },
    ],
    precisionOEMManufacturing: [
      { name: "S. Siva Arvinth", role: "CEO", image: sivaImg, id: "OEM", linkedin: "https://www.linkedin.com/in/s-siva-arvinth-40b34218/" },
      { name: "Shaun Newby", role: "UK Head", image: shaunImg, id: "UK", linkedin: "https://www.linkedin.com/in/shaun-newby-a5508768/" },
      { name: "Mark Ingianni", role: "USA Head", image: markImg, id: "USA", linkedin: "https://www.linkedin.com/in/markingianni/" },
    ],
    missionSystemsAndPropulsion: [
      { name: "Ravindra Naidu", role: "CEO", image: naiduImg, id: "MISSION", linkedin: "https://www.linkedin.com/in/ravindra-b-naidu-9671a421/" },
      { name: "Jagdish", role: "Head Engines", image: jagdishImg, id: "MISSION", linkedin: "#" },
    ],
    deepTechAndAutonomousProducts: [
      { name: "Ravi Achanta", role: "Co-Founder & CEO", image: raviImg, id: "TECH", linkedin: "https://www.linkedin.com/in/ravi-achanta-30730621/" },
      { name: "Abhinay Bollam", role: "CTO", image: abhinayImg, id: "TECH", linkedin: "https://www.linkedin.com/in/abhinay-bollam/" },
      { name: "Deepak Jagnani", role: "Head BD", image: deepakImg, id: "TECH", linkedin: "https://www.linkedin.com/in/deepak-jagnani/" },
    ]
  };

  const functionalVPs = [
    { name: "Vinod Desai", role: "VP - Supply Chain", image: vinodImg, linkedin: "https://www.linkedin.com/in/vinodddesai/" },
    { name: "Praveen Munukutla", role: "VP - Finance", image: praveenImg, linkedin: "https://www.linkedin.com/in/ca-praveen-munukutla-b3254b1b/" },
    { name: "D Srinivasa Rao", role: "VP - Aerospace", image: raoImg, linkedin: "https://www.linkedin.com/in/srinivasa-rao-dangeti-dsr-8b89a9175/" },
    { name: "Harsha Vardhan J", role: "VP - Industrial", image: harshaImg, linkedin: "https://www.linkedin.com/in/harshavardhan-reddy-8bb0b7165/" },
    { name: "Mohith Garg", role: "VP - Engineering", image: mohGImg, linkedin: "https://www.linkedin.com/in/mohit-garg-71188757/" },
    { name: "Abhishek Garg", role: "VP - Strategy & Branding", image: abhishekImg, linkedin: "https://www.linkedin.com/in/abhgarg/" }, 
    { name: "Ramaswamy Dorairajan", role: "VP - Value Engineering", image: ramaswamyImg, linkedin: "https://www.linkedin.com/in/ramaswamy-dorairajan-aa937aaa/" },
    { name: "JS Mohan", role: "VP - BD & Power", image: mohanImg, linkedin: "#" },
    { name: "Prabhakaran Muthusamy", role: "VP - Quality Assurance", image: prabhakaranImg, linkedin: "https://www.linkedin.com/in/prabhakaran-muthusamy-8b850636/" },
    { name: "Yadagiri Gaddam", role: "AVP - Production", image: yadgiriImg, linkedin: "https://www.linkedin.com/in/yadagiri-gaddam-27b70b57/" },
    { name: "Rakesh Rai", role: "AVP - HR", image: rakeshImg, linkedin: "https://www.linkedin.com/in/rakesh-rai-79b91843/" },
    { name: "Venkat Prasad", role: "AVP - Industrial Engineering", image: venkataImg, linkedin: "https://www.linkedin.com/in/venkata-prasad-k-71b36511a/" },
  ];

  const ProfileCard = ({ leader, size = "md" }) => {
    const widthClass = size === "lg" 
      ? "w-[85vw] sm:w-[280px] md:w-[300px] 2xl:w-[400px]" 
      : size === "md" 
      ? "w-[75vw] sm:w-[200px] md:w-[220px] 2xl:w-[320px]" 
      : "w-[42vw] sm:w-[160px] md:w-[180px] 2xl:w-[240px]";

    return (
      <div
        className={`group relative border border-white/10 overflow-hidden flex flex-col rounded-sm ${widthClass} shrink-0 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-brand-blue/30`}
        style={{ 
          background: "linear-gradient(135deg, #022049 0%, #063677 100%)",
          isolation: 'isolate', // Prevents backdrop-filter/transparency flickering
          transform: 'translateZ(0)', // Force GPU layer
          backfaceVisibility: 'hidden'
        }}
      >
        <div className={`relative w-full overflow-hidden bg-[#010816] ${size === "lg" ? "aspect-[4/5] md:h-80 2xl:h-[480px]" : "aspect-[4/5] md:h-56 2xl:h-80"}`}>
          <img
            src={leader.image || "https://via.placeholder.com/400x500/022049/ffffff?text=Image+Pending"}
            alt={leader.name}
            loading="eager" // Pre-load to stop 'refresh' effect on scroll
            decoding="sync"  // Force immediate decode
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 transform-gpu"
          />
          {leader.id && (
            <div className="absolute top-3 left-3 2xl:top-5 2xl:left-5 bg-brand-blue text-white text-[7px] md:text-[8px] 2xl:text-xs font-mono px-2 py-1 tracking-widest uppercase z-20 shadow-sm">
              {leader.id}
            </div>
          )}
          <a 
            href={leader.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute bottom-3 right-3 2xl:bottom-5 2xl:right-5 w-8 h-8 2xl:w-12 2xl:h-12 bg-brand-blue text-white flex items-center justify-center rounded-sm shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-30"
          >
            <FaLinkedinIn size={14} className="2xl:scale-125" />
          </a>
        </div>

        <div className="p-4 2xl:p-8 flex-grow flex flex-col justify-center border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1 h-1 rounded-full bg-brand-blue" />
            <span className={`${size === "lg" ? "text-[8px] md:text-[9px] 2xl:text-xs" : "text-[7px] md:text-[8px] 2xl:text-[10px]"} font-black text-blue-300 uppercase tracking-widest`}>
              {leader.role}
            </span>
          </div>
          <h4 className={`${size === "lg" ? "text-base md:text-lg 2xl:text-3xl" : "text-xs md:text-sm 2xl:text-xl"} font-bold text-white leading-tight tracking-tight`}>
            {leader.name}
          </h4>
        </div>
      </div>
    );
  };

  const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-4 mb-8 2xl:mb-12">
      <div className="flex flex-col">
        <h4 className="whitespace-nowrap text-[9px] md:text-[10px] 2xl:text-sm font-mono font-black uppercase tracking-[0.4em] text-slate-400">
          {title.replace(/([A-Z])/g, ' $1').trim()}
        </h4>
      </div>
      <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 to-transparent" />
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 2xl:py-32 bg-white overflow-hidden border-t border-brand-border">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)", backgroundSize: "40px 40px" }} 
      />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center mb-16 2xl:mb-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-brand-blue/40" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Governance & Strategy</span>
            <div className="h-[1px] w-6 bg-brand-blue/40" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight">
            Group <span className="text-brand-blue">Core Leadership.</span>
          </h2>
        </div>

        <div className="mb-16 2xl:mb-24">
          <SectionHeader title="Group Heads" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 2xl:gap-16">
            {coreLeadership.groupHeads.map((leader, i) => (
              <ProfileCard key={i} leader={leader} size="lg" />
            ))}
          </div>
        </div>

        <div className="relative py-12 md:py-16 2xl:py-24 px-4 md:px-10 bg-slate-50/60 border-y border-slate-200 mb-16 2xl:mb-24 rounded-md">
          <div className="flex flex-col gap-12 md:gap-20 2xl:gap-32">
            {['precisionOEMManufacturing', 'deepTechAndAutonomousProducts', 'missionSystemsAndPropulsion'].map((unit) => (
              <div key={unit}>
                <SectionHeader title={unit} />
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 2xl:gap-16">
                  {coreLeadership[unit].map((leader, i) => (
                    <ProfileCard key={i} leader={leader} size="md" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <SectionHeader title="Leadership" />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 2xl:gap-10">
            {functionalVPs.map((leader, i) => (
              <ProfileCard key={i} leader={leader} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;