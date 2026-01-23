import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            /* UPDATED: Dark background synced to brand navy */
            className="absolute inset-0 bg-[#010816]/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Top Progress Line */}
            <div className="h-1.5 w-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                /* UPDATED: Uses the brighter industrial blue for the progress bar */
                className="h-full bg-[#0047AB]"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                {/* UPDATED: Circle background uses soft brand blue tint */}
                <div className="w-16 h-16 bg-[#0047AB]/10 rounded-full flex items-center justify-center text-[#0047AB]">
                  <TbCircleCheck size={40} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0047AB] uppercase tracking-[0.3em] block mb-1">
                    Status // Success
                  </span>
                  <h3 className="text-2xl font-bold text-brand-dark tracking-tight">
                    Transmission Received.
                  </h3>
                </div>
              </div>

              {/* Technical Details Box - Updated with Signature Gradient */}
              <div
                className="border border-white/10 p-6 mb-8 font-mono shadow-inner"
                style={{
                  background:
                    "linear-gradient(135deg, #022049 0%, #063677 100%)",
                }}
              >
                <div className="flex items-center gap-2 mb-4 text-[10px] font-bold text-blue-300/50 uppercase tracking-widest border-b border-white/10 pb-2">
                  <TbDatabase className="text-blue-400" /> Log_Report_082
                </div>
                <ul className="space-y-2">
                  <li className="text-[11px] text-blue-100/80">
                    <span className="text-white font-bold">TIMESTAMP:</span>{" "}
                    {new Date().toLocaleTimeString()} IST
                  </li>
                  <li className="text-[11px] text-blue-100/80">
                    <span className="text-white font-bold">DESTINATION:</span>{" "}
                    HQ_Transmission_Server
                  </li>
                  <li className="text-[11px] text-blue-100/80">
                    <span className="text-white font-bold">ENCRYPTION:</span>{" "}
                    AS9100D_Standard
                  </li>
                </ul>
              </div>
              <p className="text-slate-500 text-sm italic leading-relaxed mb-8 border-l-2 border-[#0047AB] pl-4">
                "Our technical team has been notified. Expect a formal response
                within 24 business hours."
              </p>

              {/* UPDATED: Button uses signature gradient as base or hover */}
              <button
                onClick={onClose}
                className="group relative w-full py-4 bg-[#010816] text-white font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,71,171,0.3)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Return to Terminal{" "}
                  <TbArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                {/* Hover Overlay: Signature Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#022049] to-[#063677] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-700 z-20" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
