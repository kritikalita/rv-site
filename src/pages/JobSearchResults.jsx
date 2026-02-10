import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiChevronDown, HiX, HiCheckCircle } from 'react-icons/hi';
import { 
  TbBriefcase, TbMapPin, TbFilter, TbSearchOff, TbSearch, 
  TbDatabase, TbUpload, TbCircleCheck 
} from "react-icons/tb";

const JobSearchResults = () => {
  // --- STATE MANAGEMENT ---
  const [activeJob, setActiveJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [step, setStep] = useState(1); 
  const [uploading, setUploading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  const departments = ["All", "Manufacturing", "Engineering", "Quality Assurance", "Avionics", "Operations", "R&D"];

  // --- JOB DATA ---
  const jobs = [
    { 
      id: "REQ-01801950", 
      title: "Quality Assurance Inspector", 
      dept: "Quality Assurance", 
      loc: "Hardware Park, Hyderabad, India", 
      desc: "Lead high-precision inspection for aerospace engine components using AS9100 standards.",
      briefing: "Ensuring uncompromised quality for critical aerospace hardware through advanced metrology.",
      requirements: ["AS9100 Rev D experience", "CMM Programming", "GD&T Expertise"]
    },
    { 
      id: "REQ-2025-01", 
      title: "Senior CNC Programmer", 
      dept: "Manufacturing", 
      loc: "Hyderabad, IN", 
      desc: "Lead high-precision machining operations for aerospace engine components.",
      briefing: "Transforming engineering blueprints into high-performance metal hardware.",
      requirements: ["5-Axis Mastercam", "Siemens NX proficiency", "Aerospace alloy experience"]
    },
    { 
      id: "REQ-2025-02", 
      title: "Avionics Systems Engineer", 
      dept: "Avionics", 
      loc: "Hyderabad, IN", 
      desc: "Integrate electronic flight control systems for next-gen UAV platforms.",
      briefing: "Developing the digital nervous system for autonomous aerospace platforms.",
      requirements: ["Embedded C/C++", "RTOS knowledge", "Flight Control Algorithms"]
    },
    { 
      id: "REQ-2025-04", 
      title: "Supply Chain Manager", 
      dept: "Operations", 
      loc: "Hyderabad, IN", 
      desc: "Coordinate global logistics for raw Ti-6Al-4V and superalloys.",
      briefing: "Optimizing the global flow of materials for high-stakes aerospace manufacturing.",
      requirements: ["B.Tech/MBA Supply Chain", "7+ Years Aerospace Exp", "Strategic Sourcing Mastery"]
    }
  ];

  // --- LOGIC HANDLERS ---
  const filteredJobs = jobs.filter(job => 
    (activeFilter === "All" || job.dept === activeFilter) &&
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.loc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFileName(file.name);
  };

  const handleClose = () => {
    setActiveJob(null);
    setStep(1);
    setSelectedFileName("");
    setUploading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      setStep(3);
      setUploading(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 relative overflow-hidden">
      {/* 1. BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10">
        
        {/* 2. SEARCH HUD */}
        <div className="mb-12">
          <div className="flex bg-white border border-slate-200 shadow-2xl rounded-sm group focus-within:border-brand-blue transition-all">
            <div className="px-6 flex items-center border-r border-slate-100">
              <TbSearch className="text-slate-400 group-focus-within:text-brand-blue transition-colors" size={24} />
            </div>
            <input 
              type="text" 
              placeholder="Search by job title..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-6 py-5 outline-none text-slate-700 font-medium placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 3. SIDEBAR FILTERS */}
          <aside className="lg:col-span-3 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6 text-brand-blue font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                <TbFilter size={16} /> Filter by Dept
              </div>
              <div className="flex flex-col gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveFilter(dept)}
                    className={`px-4 py-3 text-left text-[10px] 2xl:text-xs font-black uppercase tracking-[0.2em] transition-all border rounded-sm flex justify-between items-center
                      ${activeFilter === dept 
                        ? 'text-white border-transparent shadow-xl bg-gradient-to-r from-[#022049] to-[#063677]' 
                        : 'text-slate-500 border-slate-100 bg-slate-50/50 hover:bg-slate-100'}`}
                  >
                    {dept}
                    {activeFilter === dept && <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />}
                  </button>
                ))}
              </div>
            </div>

             <div className="p-6 bg-slate-50 rounded-sm border border-slate-100">
              <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-3">General Application</h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Don't see a job that fits? Submit your data to our talent pool.</p>
              
              {/* FUNCTIONAL BUTTON: Triggers the Modal with General Data */}
              <button 
                onClick={() => setActiveJob({
                  id: "GEN-RVG-2026",
                  title: "General Expression of Interest",
                  dept: "Talent Pool",
                  loc: "Global / Hybrid",
                  briefing: "Join our elite talent pipeline for future aerospace and defense missions. We are always looking for innovators.",
                  requirements: ["Passion for DeepTech", "Industry Excellence", "Commitment to Precision"]
                })}
                className="w-full py-3 bg-brand-dark text-white font-black text-[9px] uppercase tracking-widest hover:bg-brand-blue transition-all"
              >
                Join Pipeline
              </button>
            </div>
          </aside>

          {/* 4. RESULTS GRID */}
          <div className="lg:col-span-9">
            <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-brand-dark tabular-nums">{filteredJobs.length}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Available Opportunities</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? filteredJobs.map((job, index) => {
                  const isSignatureGradient = index % 2 !== 0; 
                  return (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setActiveJob(job)}
                      whileHover={{ y: -5 }}
                      className={`group relative p-8 flex flex-col justify-between min-h-[300px] border border-white/10 transition-all duration-500 shadow-2xl cursor-pointer
                        ${isSignatureGradient 
                          ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                          : 'bg-gradient-to-br from-blue-50 to-blue-100 border-slate-100 hover:from-blue-100 hover:to-blue-200'
                        }`}
                    >
                      <div className="absolute -right-2 -top-2 w-24 h-24 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />
                      <div>
                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className={`p-2 rounded-sm ${isSignatureGradient ? "bg-white/10 text-white" : "bg-brand-blue text-white"}`}>
                            <TbBriefcase className="w-5 h-5" />
                          </div>
                          <span className={`font-mono text-[10px] font-bold tracking-widest uppercase ${isSignatureGradient ? "text-blue-200/40" : "text-slate-400"}`}>
                            {job.id}
                          </span>
                        </div>
                        <h3 className={`text-xl 2xl:text-2xl font-bold mb-3 tracking-tight leading-tight relative z-10
                          ${isSignatureGradient ? "text-white" : "text-brand-dark"}`}>
                          {job.title}
                        </h3>
                        <p className={`text-xs leading-relaxed mb-6 line-clamp-2 relative z-10
                          ${isSignatureGradient ? "text-blue-100/60" : "text-slate-500"}`}>
                          {job.desc}
                        </p>
                      </div>

                      <div className={`flex items-center justify-between border-t pt-4 relative z-10
                        ${isSignatureGradient ? "border-white/10" : "border-brand-blue/20"}`}>
                        <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-mono
                          ${isSignatureGradient ? "text-blue-200" : "text-slate-400"}`}>
                          <TbMapPin size={14} className={isSignatureGradient ? "text-blue-400" : "text-brand-blue"} /> {job.loc}
                        </div>
                        <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${isSignatureGradient ? "text-white" : "text-brand-blue"}`}>
                          Details <HiArrowRight />
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 w-0 group-hover:w-full ${isSignatureGradient ? "bg-white" : "bg-brand-blue"}`} />
                    </motion.div>
                  );
                }) : (
                  <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-100 rounded-sm">
                    <TbSearchOff size={48} className="mx-auto text-slate-200 mb-6" />
                    <p className="text-slate-400 font-mono text-xs uppercase tracking-widest">No opportunities found</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* --- ENROLLMENT MODAL TERMINAL --- */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl 2xl:max-w-6xl bg-white border border-brand-border shadow-2xl overflow-hidden flex flex-col md:flex-row h-full md:h-auto md:min-h-[500px] rounded-none md:rounded-sm">
              
              <div className="w-full md:w-1/3 p-10 text-white flex flex-col justify-between relative overflow-hidden"
                   style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-300">Requirement</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4">{activeJob.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-200/70"><TbDatabase className="text-blue-400" /> {activeJob.id}</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-200/70"><TbMapPin className="text-blue-400" /> {activeJob.loc}</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 p-10 overflow-y-auto bg-white relative no-scrollbar">
                <button onClick={handleClose} className="absolute top-6 right-6 p-2 hover:bg-blue-50 rounded-full text-slate-400 transition-colors z-20"><HiX size={24} /></button>
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8 border-l-4 border-brand-blue pl-6 italic">"{activeJob.briefing}"</p>
                    <ul className="grid gap-3 mb-10">
                      {activeJob.requirements?.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 border-l-2 border-slate-200"><HiCheckCircle className="text-brand-blue shrink-0 mt-0.5" /> {req}</li>
                      ))}
                    </ul>
                    <button onClick={() => setStep(2)} className="w-full bg-[#020617] text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all flex items-center justify-center gap-4 group">
                      Initialize Enrollment <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                       <div className="grid md:grid-cols-2 gap-8">
                        <div className="border-b border-blue-100 pb-2">
                          <label className="text-[9px] font-black text-brand-blue uppercase mb-2 block opacity-60">Full Name</label>
                          <input required type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                        <div className="border-b border-blue-100 pb-2">
                          <label className="text-[9px] font-black text-brand-blue uppercase mb-2 block opacity-60">Email Address</label>
                          <input required type="email" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                      </div>
                      <div className="border-b border-blue-100 pb-4">
                        <label className="text-[9px] font-black text-brand-blue uppercase mb-2 block opacity-60">Upload Resume</label>
                        <input type="file" accept=".pdf" onChange={handleFileChange} className="w-full text-xs font-bold text-slate-400" />
                      </div>
                      <button type="submit" disabled={uploading} className="w-full bg-brand-blue text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-dark transition-all">
                        {uploading ? 'Submitting...' : 'Confirm Application'}
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <TbCircleCheck className="text-brand-blue w-20 h-20 mx-auto mb-8" />
                    <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-4">Application Submitted</h3>
                    <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest mb-10 px-4 text-center">Your data has been sent to our talent intelligence team.</p>
                    <button onClick={handleClose} className="w-full bg-brand-dark text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all">Close Terminal</button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default JobSearchResults;