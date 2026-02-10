import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCircleCheck, TbArrowRight, TbDatabase } from "react-icons/tb";

const SuccessModal = ({ isOpen, onClose, subsidiary }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
            className="absolute inset-0 bg-[#010816]/90 backdrop-blur-md" />

          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg 2xl:max-w-2xl bg-white overflow-hidden shadow-2xl border border-white/10 rounded-sm"
          >
            <div className="h-1.5 w-full bg-slate-100">
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.8 }} className="h-full bg-[#0047AB]" />
            </div>

            <div className="p-6 sm:p-8 md:p-12 2xl:p-20">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 2xl:w-24 2xl:h-24 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
                  <TbCircleCheck className="w-6 h-6 md:w-10 md:h-10 2xl:w-14 2xl:h-14" />
                </div>
                <div>
                  <span className="text-[9px] md:text-[10px] 2xl:text-base font-mono font-bold text-[#0047AB] uppercase tracking-[0.3em] block mb-1">Successfully Sent</span>
                  {/* Simplified Title */}
                  <h3 className="text-xl md:text-2xl 2xl:text-5xl font-bold text-brand-dark tracking-tight">Inquiry Received.</h3>
                </div>
              </div>

              <div className="border border-white/10 p-5 md:p-6 2xl:p-10 mb-6 md:mb-8 font-mono shadow-inner" style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}>
                <ul className="space-y-2 text-[10px] md:text-[11px] 2xl:text-lg">
                  <li className="text-blue-100/80">Our team has been notified. We will review your requirements and respond shortly.</li>
                </ul>
              </div>
              <button onClick={onClose} className="group relative w-full py-4 md:py-5 bg-[#010816] text-white font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] 2xl:text-base overflow-hidden transition-all">
                <span className="relative z-10 flex items-center justify-center gap-2">Close <TbArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#022049] to-[#063677] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;