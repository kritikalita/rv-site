import React from "react";
import { TbUserPlus, TbBriefcase, TbTimeline } from "react-icons/tb";

const JobManagementView = ({ jobs, applicants = [], onToggle, onSubmit }) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    {/* FORM SECTION: Initialize New Role */}
    <div className="lg:col-span-4 space-y-6">
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
        <h2 className="text-xl font-black text-brand-dark uppercase tracking-tighter mb-6">
          Initialize New Role
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="jobId"
            required
            className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0"
            placeholder="REQ_ID (e.g., REQ-01)"
          />
          <input
            name="title"
            required
            className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0"
            placeholder="Job Title"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="department"
              required
              className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0"
              placeholder="Department"
            />
            <input
              name="location"
              required
              className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0"
              placeholder="Location"
            />
          </div>

          <input
            name="experience"
            required
            className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0"
            placeholder="Experience (e.g., 5-8 YRS)"
          />

          <textarea
            name="briefing"
            required
            className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0 h-20"
            placeholder="Short Briefing (visible on cards)"
          />

          <textarea
            name="requirements"
            required
            className="w-full bg-slate-50 p-4 rounded-2xl text-sm outline-none border-0 h-24"
            placeholder="Full Requirements (comma separated)"
          />

          <button
            type="submit"
            className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-brand-dark transition-all"
          >
            Push to Production
          </button>
        </form>
      </div>
    </div>

    {/* REGISTRY SECTION: Active Roles and Lead Tracking */}
    <div className="lg:col-span-8">
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-50">
        <div className="bg-slate-50/50 px-8 py-5 font-black text-brand-blue uppercase text-[10px] tracking-widest flex justify-between items-center">
          <span>Active Registry</span>
          <span className="text-slate-400 font-mono text-[9px]">
            Total Systems: {jobs.length}
          </span>
        </div>

        {jobs.map((job) => {
  // CROSS-REFERENCE LOGIC: Checks both naming conventions and ensures string comparison
  const applicantCount = applicants.filter(app => {
    const appRef = String(app.jobId || app.job_id || "").trim();
    const jobRef = String(job.jobId || "").trim();
    return appRef === jobRef && appRef !== "";
  }).length;

          return (
            <div
      key={job.id}
      className="p-6 flex justify-between items-center group hover:bg-slate-50/30 transition-all"
    >
              <div className="space-y-1">
        <div className="flex items-center gap-3">
          {/* Numeric Job ID */}
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
            {job.jobId}
          </span>

                  {/* TOTAL APPLICANTS BADGE */}
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md transition-all ${
            applicantCount > 0 
              ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20 animate-pulse' 
              : 'bg-slate-100 text-slate-400 border border-transparent'
          }`}>
            <TbUserPlus size={10} />
            <span className="text-[9px] font-black uppercase tracking-tighter">
              {applicantCount} {applicantCount === 1 ? 'Applicant' : 'Applicants'}
            </span>
          </div>

                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            | {job.location}
          </span>
        </div>

        <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-brand-blue transition-colors">
          {job.title}
        </h4>
        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">{job.department}</p>
          <span className="text-slate-300">•</span>
          <p className="text-xs text-brand-blue font-bold uppercase tracking-tighter">{job.experience}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onToggle(job.id)}
          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${
            job.active
              ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
              : "bg-brand-blue text-white shadow-lg shadow-brand-blue/20 hover:bg-brand-dark"
          }`}
        >
          {job.active ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
})}
      </div>
    </div>
  </div>
);

export default JobManagementView;