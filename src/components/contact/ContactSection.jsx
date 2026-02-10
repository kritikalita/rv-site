import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { TbMail, TbMapPin, TbArrowRight, TbBuildingFactory } from "react-icons/tb";
import Globe from "./Globe";
import SuccessModal from "./SuccessModal";

const ContactSection = () => {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedSubsidiary, setSelectedSubsidiary] = useState("");

  const subsidiaries = [
    "Raghu Vamsi Machine Tools",
    "PMC Group (UK)",
    "WMT Precision LLC (USA)",
    "Raghu Vamsi Advanced Systems",
    "Raghu Vamsi Engines",
    "Comprotech",
    "ARROBOT"
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    const data = new FormData(form.current);
    setSelectedSubsidiary(data.get("subsidiary"));

    const SERVICE_ID = "service_wkyynqh"; 
    const PUBLIC_KEY = "TEpmXn7oEVRJsRfbR";
    const INTERNAL_TEMPLATE = "template_c3f83bo"; 
    const AUTO_REPLY_TEMPLATE = "template_ala64ji";

    emailjs.sendForm(SERVICE_ID, INTERNAL_TEMPLATE, form.current, PUBLIC_KEY)
      .then(() => new Promise(resolve => setTimeout(resolve, 500)))
      .then(() => emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE, form.current, PUBLIC_KEY))
      .then(() => {
        setShowSuccess(true);
        setIsSending(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Mail_Error:", error);
        setIsSending(false);
        alert("System busy. Please try again in a few seconds.");
      });
  };

  return (
    <section className="relative min-h-screen bg-white flex flex-col lg:flex-row border-t border-brand-border overflow-x-hidden">
      {/* 1. LEFT PANEL: 48% WIDTH ON DESKTOP */}
      <div className="w-full lg:w-[48%] px-6 py-12 md:p-16 lg:p-20 2xl:p-32 relative bg-white border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-center z-20">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="w-full max-w-full sm:max-w-[600px] 2xl:max-w-[900px] mx-auto relative z-10">
          <div className="mb-8 md:mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-8xl font-bold text-brand-dark tracking-tighter leading-[0.95] md:leading-[0.9]">
              Precision <br />
              <span className="text-brand-blue">Partnerships.</span>
            </h1>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-8 md:space-y-10 lg:space-y-12">
            {/* SUBSIDIARY */}
            <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
              <label className="text-[10px] md:text-[12px] 2xl:text-xl font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80 flex items-center gap-2">
               Target Subsidiary
              </label>
              <select required name="subsidiary" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm md:text-base 2xl:text-3xl tracking-tight cursor-pointer appearance-none">
                <option value="" disabled selected>Select Company Unit</option>
                {subsidiaries.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>

            {/* INPUT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
                <label className="text-[10px] md:text-[12px] 2xl:text-xl font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">
                  Authorized Signatory
                </label>
                <input required name="from_name" type="text" placeholder="Full Name" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm md:text-base 2xl:text-3xl tracking-tight" />
              </div>
              <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
                <label className="text-[10px] md:text-[12px] 2xl:text-xl font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">
                  Corporate Domain
                </label>
                <input required name="from_email" type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm md:text-base 2xl:text-3xl tracking-tight" />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="group border-b border-brand-border pb-2 focus-within:border-brand-blue transition-all">
              <label className="text-[10px] md:text-[12px] 2xl:text-xl font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-80">
                Technical Specifications
              </label>
              <textarea required name="message" rows="2" placeholder="Scope of work or RFQ details..." className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm md:text-base 2xl:text-3xl resize-none tracking-tight" />
            </div>

            <button type="submit" disabled={isSending} className={`w-full sm:w-auto group relative flex items-center justify-center gap-6 bg-[#020617] text-white px-8 md:px-10 py-4 md:py-5 2xl:px-16 2xl:py-10 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] 2xl:text-lg hover:bg-brand-blue transition-all shadow-2xl overflow-hidden ${isSending ? 'opacity-50' : ''}`}>
              <span className="relative z-10 flex items-center gap-3">
                {isSending ? "Syncing..." : "Send Queries"}
                <TbArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 shadow-[0_0_20px_white]" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. RIGHT PANEL: 52% WIDTH ON DESKTOP */}
      <div className="w-full lg:w-[52%] relative flex flex-col justify-between overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-screen" style={{ background: "linear-gradient(135deg, #022049 0%, #042b61 50%, #063677 100%)" }}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* GLOBE CONTAINER - HIDDEN ON VERY SMALL SCREENS OR REDUCED SCALE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none translate-y-[-5%] sm:translate-y-0 scale-[0.8] sm:scale-90 lg:scale-100 xl:scale-110 opacity-30 lg:opacity-100">
          <div className="w-full h-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
            <Globe />
          </div>
        </div>

        {/* HEADER INDICATORS */}
        <div className="p-6 md:p-8 lg:p-12 pt-12 sm:pt-16 lg:pt-32 relative z-20 flex flex-col sm:flex-row justify-between items-start gap-6 w-full">
          <div className="border-l border-brand-blue pl-4 md:pl-6">
            <h3 className="text-white text-[9px] md:text-[10px] 2xl:text-sm font-black uppercase tracking-[0.3em] mb-1">Global Manufacturing Hub</h3>
            <span className="text-blue-300/60 text-[7px] md:text-[8px] 2xl:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-mono">AS9100D Certified</span>
          </div>
          <div className="flex items-center gap-3 text-white bg-white/5 py-2 px-4 md:px-5 rounded-sm border border-white/10 backdrop-blur-md">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-brand-blue"></span>
            </div>
            <span className="font-mono text-[7px] md:text-[8px] 2xl:text-xs font-black tracking-widest uppercase">Reach Out Anytime</span>
          </div>
        </div>

        {/* ADDRESS HUD - RESPONSIVE FLEX (Stack on mobile, row on tablet/desktop) */}
        <div className="relative z-20 w-full border-t border-brand-blue/30 flex flex-col sm:flex-row bg-[#010816] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />

          <a href="https://maps.app.goo.gl/KdGzHobohXLUiiDQ6" className="flex-1 p-6 md:p-10 border-b sm:border-b-0 sm:border-r border-white/10 group hover:bg-white/[0.02] transition-all relative overflow-hidden">
            <TbMapPin className="text-blue-400 mb-4 md:mb-6 w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12" />
            <h4 className="text-white font-black text-[10px] md:text-xs 2xl:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4">Unit Office</h4>
            <p className="text-blue-100/70 text-xs md:text-sm 2xl:text-xl leading-relaxed tracking-tight max-w-[280px] font-medium mb-4 md:mb-6">
              Plot No. 26/A, Hardware Park, Kurmalguda, Hyderabad, India
            </p>
            <div className="flex items-center gap-2 py-1 px-3 bg-white/5 border border-white/10 w-fit group-hover:border-brand-blue">
              <span className="text-[7px] md:text-[9px] font-mono font-black text-brand-blue uppercase tracking-[0.2em]">View on Map</span>
              <TbArrowRight className="text-brand-blue" size={12} />
            </div>
          </a>

          <div className="flex-1 p-6 md:p-10 group hover:bg-white/5 transition-all relative flex flex-col justify-start">
            <TbMail className="text-blue-400 mb-4 md:mb-6 w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12" />
            <h4 className="text-white font-black text-[10px] md:text-xs 2xl:text-base uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4">Contact Details</h4>
            <div className="flex flex-col gap-1 md:gap-2">
              <a href="mailto:info@raghuvamsiaerospace.com" className="text-white text-xs md:text-sm 2xl:text-xl leading-relaxed font-black tracking-tight hover:text-brand-blue transition-colors">info@raghuvamsiaerospace.com</a>
              <a href="tel:+914012345678" className="text-blue-100/60 text-xs md:text-sm 2xl:text-xl font-medium hover:text-white transition-colors">+91 40 1234 5678</a>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} subsidiary={selectedSubsidiary} />
    </section>
  );
};

export default ContactSection;