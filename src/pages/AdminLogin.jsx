import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TbShieldLock, TbLock, TbArrowRight, TbLayoutDashboard } from "react-icons/tb";

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Verification of the hardcoded key for the portal gatekeeper
    if (password === 'RV_ADMIN_2026') {
      localStorage.setItem('rv_admin_auth', 'true');
      navigate('/admin-control-hq');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Background Pattern to maintain brand continuity */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Brand Identity Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-brand-dark p-3 rounded-2xl shadow-xl mb-6">
            <TbLayoutDashboard className="text-brand-blue" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Management Login</h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">Internal Administrative Access Only</p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 relative">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block ml-1">
                System Access Key
              </label>
              <div className={`flex items-center gap-3 bg-slate-50 border ${error ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3.5 transition-all focus-within:ring-4 focus-within:ring-brand-blue/10 focus-within:border-brand-blue`}>
                <TbLock className="text-slate-400" size={20} />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-800 font-semibold placeholder:text-slate-300"
                  placeholder="Enter secure key..."
                />
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-xs text-red-500 font-bold text-center flex items-center justify-center gap-2"
              >
                <TbShieldLock /> Authentication Failed
              </motion.p>
            )}

            <button 
              type="submit" 
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-brand-blue/30 hover:bg-brand-dark transition-all flex items-center justify-center gap-2 group"
            >
              Verify & Enter Portal
              <TbArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
             Authorized by Raghu Vamsi Group IT Operations
           </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;