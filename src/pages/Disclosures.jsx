import React from 'react';
import { TbFileText, TbMapPin, TbPhone, TbMail, TbBuilding } from "react-icons/tb";
import Navbar from '../components/common/Navbar'; 

const disclosures = [
  {
    category: "General Information",
    items: [
      { label: "Company Name", value: "Raghu Vamsi Machine Tools Private Limited", icon: TbBuilding },
      { label: "CIN No.", value: "U28299TG1992PTC013990", icon: TbFileText },
      { label: "Registered Office", value: "MIG-116, Bharat Nagar Colony, K.V. Rangareddy, Balanagar, Telangana, India, 500018", icon: TbMapPin },
    ]
  },
  {
    category: "Contact & Grievances",
    items: [
      { label: "Contact Person", value: "Tanmayee", icon: TbFileText },
      { label: "Official Email", value: "info@raghuvamsi.com", icon: TbMail },
      { label: "Official Phone", value: "+91 9876543210", icon: TbPhone },
    ]
  }
];

const policies = [
  { title: "CSR Policy", path: "public/RVMT_CSR Policy.pdf" },
  { title: "POSH Policy", path: "/files/POSH_Policy.pdf" },
  { title: "Annual Return FY 24-25", path: "24-25.pdf" },
  { title: "Annual Return FY 23-24", path: "23-24.pdf" },
  { title: "Annual Return FY 22-23", path: "22-23.pdf" },
  { title: "AGM Notice FY 24-25", path: "/files/AGM_Notice_24.pdf" },
];

const Disclosures = () => {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden">
        
        {/* 1. BLUEPRINT GRID BACKGROUND */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />

        {/* 2. SUBTLE RADIAL VIGNETTE (Prevents the grid from being overwhelming) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10">
          <header className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs">Statutory Registry</span>
            </div>
            <div className="mb-8 md:mb-10 w-full">
                 <h2 className="text-3xl md:text-6xl 2xl:text-7xl font-bold text-brand-dark tracking-tighter leading-tight text-center md:text-left">
                  Corporate <br className="hidden sm:block" />
                  <span className="text-brand-blue">Governance.</span>
                </h2>
              </div>
          </header>
          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: General Info HUD */}
            <div className="lg:col-span-7 space-y-12">
              {disclosures.map((section, idx) => (
                <div key={idx} className="border-l-2 border-brand-blue/20 pl-8">
                  <h3 className="text-brand-blue font-mono font-bold text-xs uppercase tracking-widest mb-8">{section.category}</h3>
                  <div className="space-y-8">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <item.icon className="text-brand-blue mt-1 shrink-0" size={20} />
                        <div>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="text-lg font-bold text-brand-dark leading-tight">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Policy Downloads Terminal */}
            <div className="lg:col-span-5">
              <div className="bg-[#010816] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl" />
                 <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-3">
                    <TbFileText className="text-brand-blue" /> Statutory Documents
                 </h3>
                 <div className="space-y-3">
                    {policies.map((policy, i) => (
                      <a 
                        key={i} 
                        href={policy.path} 
                        target="_blank" 
                        className="flex items-center justify-between p-4 border border-white/10 hover:border-brand-blue hover:bg-brand-blue/5 transition-all group"
                      >
                        <span className="text-white/70 text-sm font-bold group-hover:text-white">{policy.title}</span>
                        <span className="text-[10px] font-mono text-brand-blue uppercase font-black">Download PDF</span>
                      </a>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Disclosures;