import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbMail, TbMapPin, TbArrowRight, TbSettingsAutomation } from "react-icons/tb";
import Globe from './Globe';
import SuccessModal from './SuccessModal';

const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row border-t border-brand-border">
      
      {/* 1. LEFT PANEL: INQUIRY REGISTRY - Width adjusted to 45% */}
      <div className="w-full lg:w-[45%] p-8 md:p-16 lg:p-24 pt-24 lg:pt-32 relative bg-white border-r border-brand-border flex flex-col justify-center z-20">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="w-full max-w-[500px] mx-auto relative z-10">
          <div className="mb-14">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Industrial Engagement</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tighter leading-[0.9]">
              Precision <br />
              <span className="text-brand-blue">Partnerships.</span>
            </h1>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setShowSuccess(true); }} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
                <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">Authorized Signatory</label>
                <input required type="text" placeholder="Full Name" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm tracking-tight" />
              </div>
              <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
                <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">Corporate Domain</label>
                <input required type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm tracking-tight" />
              </div>
            </div>
            <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
              <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">Technical Specifications</label>
              <textarea required rows="2" placeholder="Scope of work or RFQ details..." className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm resize-none tracking-tight" />
            </div>
            
            <button type="submit" className="group relative flex items-center gap-6 bg-[#020617] text-white px-10 py-5 font-black uppercase tracking-[0.4em] text-[9px] hover:bg-brand-blue transition-all shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Request Quotation <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. RIGHT PANEL: SIGNATURE GRADIENT COMMAND TERMINAL - Width stretched to 55% */}
      <div className="w-full lg:w-[55%] relative flex flex-col justify-between overflow-hidden min-h-[600px] lg:min-h-screen"
           style={{ background: 'linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)' }}>
        
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Globe now has more horizontal breathing room */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Globe />
        </div>

        <div className="p-8 lg:p-12 pt-24 lg:pt-32 relative z-20 flex justify-between items-start w-full">
           <div className="border-l border-brand-blue pl-6">
             <h3 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-1">Global Manufacturing Hub</h3>
             <span className="text-blue-300/60 text-[8px] uppercase tracking-[0.4em] font-mono">AS9100D Certified</span>
           </div>
           <div className="flex items-center gap-3 text-white bg-white/5 py-2 px-5 rounded-sm border border-white/10 backdrop-blur-md">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </div>
              <span className="font-mono text-[8px] font-black tracking-widest uppercase">Reach Us Out</span>
           </div>
        </div>

        <div className="relative z-20 w-full border-t border-white/5 flex flex-col md:flex-row bg-black/20 backdrop-blur-2xl">
            {/* HQ TAB */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 p-10 border-r border-white/5 group hover:bg-white/5 transition-all relative cursor-pointer"
            >
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
                <TbMapPin className="text-blue-400 relative z-10 group-hover:scale-110 transition-transform" size={24} />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-3 group-hover:text-blue-300 transition-colors">
                    Corporate Office
                  </h4>
                  <p className="text-blue-100/60 text-[10px] leading-relaxed tracking-tight max-w-[220px] font-medium mb-4">
                    Hardware Park, Adibatla, <br/>Hyderabad, TS 501510, India
                  </p>
                  
                  <div className="flex items-center gap-2 py-1 px-3 bg-white/5 border border-white/10 w-fit group-hover:border-brand-blue transition-colors">
                    <span className="text-[9px] font-mono font-black text-brand-blue uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                      View on Map
                    </span>
                    <TbArrowRight className="text-brand-blue group-hover:text-white group-hover:translate-x-1 transition-all" size={14} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-blue group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#0047AB]" />
            </a>

            {/* CONTACT TAB */}
            <div className="flex-1 p-10 group hover:bg-white/5 transition-all relative">
              <TbMail className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-3">Contact Details</h4>
              <p className="text-white text-[11px] leading-relaxed font-black tracking-tight">
                rfq@raghuvamsi.com<br/>
                <span className="text-blue-100/60 font-medium">+91 40 1234 5678</span>
              </p>
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-blue group-hover:w-full transition-all duration-700 shadow-[0_0_15px_#0047AB]" />
            </div>
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default ContactSection;