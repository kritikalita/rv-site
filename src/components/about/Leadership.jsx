import React from "react";
import { motion } from "framer-motion";
import { TbCircleFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

// Asset imports (Kept as provided)
import vamsiImg from "../../assets/images/vamsi.png";
import preetiImg from "../../assets/images/preeti.png";
import manishImg from "../../assets/images/manish.webp";

const Leadership = () => {
  const coreLeadership = {
    groupHeads: [
      { name: "Vamsi Vikas", role: "Chairman & MD", image: vamsiImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/vamsi-vikas-ganesula-0150b72/" },
      { name: "Preet Vikas", role: "CEO & ED", image: preetiImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/preeti-pallepati-05bb701/" },
      { name: "Manish Matta", role: "ED", image: manishImg, id: "GROUP", linkedin: "https://www.linkedin.com/in/manishmatta1979/" },
    ],
    precisionOEMManufacturing: [
      { name: "Preeti Vikas", role: "CEO & ED", image: preetiImg, id: "OEM", linkedin: "https://www.linkedin.com/in/preeti-pallepati-05bb701/" },
      { name: "Giridhar", role: "COO", image: "src/assets/images/giridhar.png", id: "OEM", linkedin: "https://www.linkedin.com/in/giridhar-reddy-s-17510816/" },
      { name: "Shaun", role: "UK Head", image: "src/assets/images/shaun.jpeg", id: "UK", linkedin: "https://www.linkedin.com/in/shaun-newby-a5508768/" },
      { name: "Mark", role: "USA Head", image: "src/assets/images/mark.jpeg", id: "USA", linkedin: "https://www.linkedin.com/in/markingianni/" },
    ],
    missionSystemsAndPropulsion: [
      { name: "Ravindra Naidu", role: "CEO", image: "src/assets/images/naidu.jpg", id: "MISSION", linkedin: "https://www.linkedin.com/in/ravindra-b-naidu-9671a421/" },
      { name: "Jagdish", role: "Head Engines", image: "src/assets/images/jagdish.jpg", id: "MISSION", linkedin: "#" },
      { name: "Anirudh", role: "Head Composites", image: "src/assets/images/Anirudh.jpg", id: "MISSION", linkedin: "#" },
    ],
    deepTechAndAutonomousProducts: [
      { name: "Ravi", role: "Co-Founder & CEO", image: "src/assets/images/ravi.jpg", id: "TECH", linkedin: "https://www.linkedin.com/in/ravi-achanta-30730621/" },
      { name: "Abhinay", role: "CTO", image: "src/assets/images/abhinay.jpg", id: "TECH", linkedin: "#" },
      { name: "Deepak", role: "Head BD", image: "src/assets/images/deepak.jpg", id: "TECH", linkedin: "#" },
    ]
  };

  const functionalVPs = [
    { name: "Vinod Desai", role: "VP - Supply Chain", image: "src/assets/images/vinod.jpg", linkedin: "https://www.linkedin.com/in/vinodddesai/" },
    { name: "Ankem Sriprasad", role: "VP - Finance", image: "src/assets/images/ankem.jpg", linkedin: "https://www.linkedin.com/in/ankemsriprasadmohan/" },
    { name: "D Srinivasa Rao", role: "VP - Aerospace", image: "src/assets/images/rao.jpg", linkedin: "https://www.linkedin.com/in/srinivasa-rao-dangeti-dsr-8b89a9175/" },
    { name: "Harsha Vardhan J", role: "VP - Industrial", image: "src/assets/images/harsha.jpg", linkedin: "#" },
    { name: "Mani PRS", role: "VP - Compliance", image: "src/assets/images/mani.png", linkedin: "https://www.linkedin.com/in/mani-padagalingam-48009213/" },
    { name: "Mohith Garg", role: "VP - Engineering", image: "src/assets/images/mohith.png", linkedin: "#" },
    { name: "Ramaswamy D", role: "VP - Value Engineering", image: "src/assets/images/ramaswamy.jpg", linkedin: "https://www.linkedin.com/in/ramaswamy-dorairajan-aa937aaa/" },
    { name: "Mohan", role: "VP - Power & BD", image: "src/assets/images/mohan.jpg", linkedin: "#" },
    { name: "Yadagiri G", role: "AVP - Production", image: "src/assets/images/yadgiri.jpg", linkedin: "https://www.linkedin.com/in/yadagiri-gaddam-27b70b57/" },
    { name: "Rakesh Rai", role: "AVP - HR", image: "src/assets/images/Rakesh.jpg", linkedin: "https://www.linkedin.com/in/rakesh-rai-79b91843/" },
    { name: "Venkat Prasad", role: "AVP - Industrialization", image: "src/assets/images/venkata.jpg", linkedin: "https://www.linkedin.com/in/venkata-prasad-k-71b36511a/" },
    { name: "Prabhakaran", role: "AVP - Quality Assurance", image: "src/assets/images/prabhaa.png", linkedin: "#" },
  ];

  const ProfileCard = ({ leader, size = "md" }) => {
    const widthClass = size === "lg" 
      ? "w-[85vw] sm:w-[280px] md:w-[300px] 2xl:w-[400px]" 
      : size === "md" 
      ? "w-[75vw] sm:w-[200px] md:w-[220px] 2xl:w-[320px]" 
      : "w-[42vw] sm:w-[160px] md:w-[180px] 2xl:w-[240px]";

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`group relative border border-white/10 overflow-hidden flex flex-col transition-all duration-500 rounded-sm ${widthClass} shrink-0 shadow-lg hover:shadow-2xl hover:border-brand-blue/30`}
        style={{ background: "linear-gradient(135deg, #022049 0%, #063677 100%)" }}
      >
        <div className={`relative w-full overflow-hidden bg-brand-dark/50 ${size === "lg" ? "aspect-[4/5] md:h-80 2xl:h-[480px]" : "aspect-[4/5] md:h-56 2xl:h-80"}`}>
          <img
            src={leader.image || "https://via.placeholder.com/400x500/022049/ffffff?text=Image+Pending"}
            alt={leader.name}
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {leader.id && (
            <div className="absolute top-3 left-3 2xl:top-5 2xl:left-5 bg-brand-blue text-white text-[7px] md:text-[8px] 2xl:text-xs font-mono px-2 py-1 tracking-widest uppercase z-20 shadow-sm">
              {leader.id}
            </div>
          )}
          <a href={leader.linkedin} className="absolute bottom-3 right-3 2xl:bottom-5 2xl:right-5 w-8 h-8 2xl:w-12 2xl:h-12 bg-brand-blue text-white flex items-center justify-center rounded-sm shadow-lg hover:bg-white hover:text-brand-blue transition-all duration-300 z-30">
            <FaLinkedinIn size={14} className="2xl:scale-125" />
          </a>
        </div>

        <div className="p-4 2xl:p-8 flex-grow flex flex-col justify-center border-t border-white/5 bg-black/10">
          <div className="flex items-center gap-2 mb-1">
            <TbCircleFilled className="text-[4px] text-brand-blue animate-pulse" />
            <span className={`${size === "lg" ? "text-[8px] md:text-[9px] 2xl:text-xs" : "text-[7px] md:text-[8px] 2xl:text-[10px]"} font-black text-blue-300 uppercase tracking-widest`}>{leader.role}</span>
          </div>
          <h4 className={`${size === "lg" ? "text-base md:text-lg 2xl:text-3xl" : "text-xs md:text-sm 2xl:text-xl"} font-bold text-white leading-tight tracking-tight`}>{leader.name}</h4>
        </div>
      </motion.div>
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
          <motion.div initial={{ opacity: 0, y: -5 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-6 bg-brand-blue/40" />
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] 2xl:text-xs">Governance & Strategy</span>
            <div className="h-[1px] w-6 bg-brand-blue/40" />
          </motion.div>
          {/* REFINED HEADER: Strictly font-bold with tiered scaling */}
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
            {['precisionOEMManufacturing', 'missionSystemsAndPropulsion', 'deepTechAndAutonomousProducts'].map((unit) => (
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