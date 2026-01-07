import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCircleCheck, TbArrowRight, TbDatabase } from "react-icons/tb";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop with heavy blur to maintain "Architectural" focus */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl border border-brand-border"
          >
            {/* Top Progress Line */}
            <div className="h-1 w-full bg-brand-gray">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8 }}
                className="h-full bg-brand-blue" 
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                  <TbCircleCheck size={40} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-[0.3em] block mb-1">
                    Status // Success
                  </span>
                  <h3 className="text-2xl font-bold text-brand-dark tracking-tight">Transmission Received.</h3>
                </div>
              </div>

              {/* Technical Details Box */}
              <div className="bg-brand-gray border border-brand-border p-6 mb-8 font-mono">
                <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">
                  <TbDatabase /> Log_Report_082
                </div>
                <ul className="space-y-2">
                  <li className="text-[11px] text-slate-500">
                    <span className="text-brand-blue">TIMESTAMP:</span> {new Date().toLocaleTimeString()} IST
                  </li>
                  <li className="text-[11px] text-slate-500">
                    <span className="text-brand-blue">DESTINATION:</span> HQ_Transmission_Server
                  </li>
                  <li className="text-[11px] text-slate-500">
                    <span className="text-brand-blue">ENCRYPTION:</span> AS9100D_Standard
                  </li>
                </ul>
              </div>

              <p className="text-slate-500 text-sm italic leading-relaxed mb-8 border-l-2 border-brand-blue pl-4">
                "Our technical team has been notified. Expect a formal response within 24 business hours."
              </p>

              <button 
                onClick={onClose}
                className="group relative w-full py-4 bg-brand-dark text-white font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-brand-blue"
              >
                 <span className="relative z-10 flex items-center justify-center gap-2">
                   Return to Terminal <TbArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                 </span>
                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;