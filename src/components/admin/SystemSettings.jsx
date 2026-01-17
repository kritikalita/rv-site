import React, { useState } from 'react';
import { TbMail, TbCloudUpload, TbShieldCheck, TbSettingsAutomation } from "react-icons/tb";

const SystemSettings = ({ currentEmail, onUpdateEmail }) => {
  const [email, setEmail] = useState(currentEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateEmail(email);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-500">
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-brand-blue/10 rounded-2xl text-brand-blue">
            <TbSettingsAutomation size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Global Parameters</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">System-wide recruitment configuration</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-brand-blue uppercase tracking-widest flex items-center gap-2">
              <TbMail size={14} /> Primary Recruitment Contact
            </label>
            <div className="flex gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recruitment@raghuvamsi.com"
                className="flex-1 bg-slate-50 border-0 p-4 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-brand-blue/10 transition-all font-bold text-slate-700"
              />
              <button 
                type="submit" 
                className="bg-brand-blue text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20"
              >
                Update Uplink
              </button>
            </div>
            <p className="text-[10px] text-slate-400 font-medium italic">
              * This email address will receive all system-generated notifications for new job applications.
            </p>
          </div>
        </form>
      </div>

      {/* System Integrity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
            <TbShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-sm">Database Sync</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase">PostgreSQL Online</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex items-center gap-6">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-blue">
            <TbCloudUpload size={24} />
          </div>
          <div>
            <h4 className="font-bold text-brand-dark text-sm">Storage Uplink</h4>
            <p className="text-[10px] text-slate-400 font-bold uppercase">Filesystem Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;