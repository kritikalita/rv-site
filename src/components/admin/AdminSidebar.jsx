import React from 'react';
import { 
  TbBriefcase, 
  TbUsers, 
  TbLogout, 
  TbLayoutDashboard, 
  TbSettings, 
  TbBroadcast 
} from "react-icons/tb";

const AdminSidebar = ({ activeTab, setActiveTab, onLogout }) => {
  // Navigation Menu Configuration
  const menuItems = [
    { id: 'jobs', label: 'Job Postings', icon: <TbBriefcase size={20} /> },
    { id: 'applicants', label: 'Applicant Registry', icon: <TbUsers size={20} /> },
    { id: 'news', label: 'News Feed', icon: <TbBroadcast size={20} /> }, // For TransmissionController
    { id: 'settings', label: 'System Settings', icon: <TbSettings size={20} /> }, // For SettingsController
  ];

  return (
    <div className="w-64 bg-brand-dark min-h-screen flex flex-col border-r border-white/10 sticky top-0 shrink-0">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="bg-brand-blue p-2 rounded-lg text-white shadow-lg shadow-brand-blue/20">
          <TbLayoutDashboard size={20} />
        </div>
        <div>
          <h2 className="text-white font-bold text-sm tracking-tight uppercase">RV_Control</h2>
          <p className="text-[9px] text-slate-500 uppercase font-black">Admin Panel v4.2</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300
              ${activeTab === item.id 
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white/5">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-400/60 hover:text-red-400 hover:bg-red-500/5 rounded-xl text-xs font-bold uppercase transition-all duration-300 border border-transparent hover:border-red-500/10"
        >
          <TbLogout size={20} />
          Terminate Session
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;