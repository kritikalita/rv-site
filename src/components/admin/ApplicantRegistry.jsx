import React, { useState } from 'react';
import { TbUserSearch, TbFileDownload, TbArchive, TbDatabase, TbTimeline } from "react-icons/tb";

const ApplicantRegistry = ({ applicants, onToggleArchive, onUpdateStatus }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // FILTER LOGIC: Search by Candidate Name or Job Reference ID
  const filteredApplicants = applicants.filter(app => 
    !app.archived && (
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.jobId.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* SEARCH BAR & DATABASE STATUS */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl w-full md:w-96 border border-slate-100 focus-within:border-brand-blue transition-all">
          <TbUserSearch className="text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search name or REQ_ID..." 
            className="bg-transparent outline-none text-sm font-bold w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
           <div className="text-right">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Archive Registry</p>
             <p className="text-xs font-bold text-brand-dark uppercase">Synced with PGSQL</p>
           </div>
           <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
              <TbDatabase size={20} />
           </div>
        </div>
      </div>

      {/* REGISTRY TABLE */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
          <h2 className="text-xl font-black text-brand-dark uppercase tracking-tighter">Candidate Dossiers</h2>
          <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-black uppercase">
            Active Leads: {filteredApplicants.length}
          </span>
        </div>

        <table className="w-full text-left">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Candidate</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Reference</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Submission Date</th>
              <th className="px-10 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              <th className="px-10 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredApplicants.map(app => (
              <tr key={app.id} className="hover:bg-slate-50/30 transition-colors group">
                <td className="px-10 py-6">
                  <span className="font-bold text-slate-800 text-base block">{app.fullName}</span>
                  <span className="text-xs text-slate-400">{app.email}</span>
                </td>
                <td className="px-10 py-6">
                  <span className="font-mono text-[10px] font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded">{app.jobId}</span>
                </td>
                
                {/* DYNAMIC TIMESTAMP CELL */}
                <td className="px-10 py-6">
                  <div className="flex items-center gap-2">
                    <TbTimeline className="text-slate-300" size={16} />
                    <span className="font-mono text-[11px] font-bold text-slate-600">
                      {app.submissionTime ? new Date(app.submissionTime).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      }).toUpperCase() : 'PENDING'}
                    </span>
                  </div>
                </td>

                <td className="px-10 py-6">
                  {/* Connects to handleUpdateStatus in AdminDashboard */}
                  <select 
                    value={app.status || "NEW"} 
                    onChange={(e) => onUpdateStatus(app.id, e.target.value)}
                    className="bg-slate-100 text-slate-600 text-[10px] font-black uppercase px-4 py-2 rounded-xl border-none outline-none cursor-pointer hover:ring-2 hover:ring-brand-blue/10 transition-all"
                  >
                    <option value="NEW">New</option>
                    <option value="INTERVIEW">Interview</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="HIRED">Hired</option>
                  </select>
                </td>
                <td className="px-10 py-6 text-right space-x-3">
                  <a 
                    href={`http://localhost:8080${app.resumeUrl}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-brand-blue/5 text-brand-blue rounded-xl hover:bg-brand-blue hover:text-white inline-block transition-all"
                    title="Download Dossier"
                  >
                    <TbFileDownload size={20} />
                  </a>
                  <button 
                    onClick={() => onToggleArchive(app.id)}
                    className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all border border-slate-100"
                    title="Archive Candidate"
                  >
                    <TbArchive size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredApplicants.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 font-medium italic">No dossiers match current search parameters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantRegistry;