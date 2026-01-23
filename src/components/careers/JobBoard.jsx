// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { HiArrowRight, HiX, HiCheckCircle } from 'react-icons/hi';
// import { 
//   TbBriefcase, TbMapPin, TbFileText, TbUserPlus, 
//   TbCircleCheck, TbClipboardList, TbDatabase, TbUpload 
// } from "react-icons/tb";

// const JobBoard = () => {
//   const [liveJobs, setLiveJobs] = useState([]);
//   const [activeJob, setActiveJob] = useState(null);
//   const [step, setStep] = useState(1); 
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [selectedFileName, setSelectedFileName] = useState("");

//   // FETCH LIVE JOBS FROM BACKEND
//   useEffect(() => {
//     fetch('http://localhost:8080/api/jobs')
//       .then((res) => res.json())
//       .then((data) => {
//         setLiveJobs(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Database_Link_Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFileName(file.name);
//     } else {
//       setSelectedFileName("");
//     }
//   };

//   const handleClose = () => {
//     setActiveJob(null);
//     setStep(1);
//     setSelectedFileName("");
//     setUploading(false);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
    
//     // IMPROVEMENT: Set uploading to true IMMEDIATELY to stop cursor lag
//     setUploading(true);

//     const form = e.target;
//     const resumeFile = form.elements.resume.files[0];
//     const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

//     // Validation
//     if (resumeFile && resumeFile.size > MAX_FILE_SIZE) {
//       alert("File Too Large: The dossier must be smaller than 5MB.");
//       setUploading(false);
//       return; 
//     }

//     try {
//       const formData = new FormData();
//       const applicantObj = {
//         fullName: form.elements.fullName.value,
//         email: form.elements.email.value,
//         experience: form.elements.experience.value,
//         jobId: activeJob.jobId
//       };

//       // Construct Multipart Request
//       formData.append("applicant", JSON.stringify(applicantObj));
//       formData.append("resume", resumeFile);

//       const res = await fetch('http://localhost:8080/api/applicants', {
//         method: 'POST',
//         body: formData 
//       });
      
//       if (res.ok) {
//         setStep(3);
//       } else {
//         alert("Transmission Error: System rejected the file format.");
//         setUploading(false);
//       }
//     } catch (err) {
//       console.error("Upload_Failure", err);
//       alert("System Error: Could not connect to server.");
//       setUploading(false);
//     }
//   };

//   return (
//     <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
//           <div className="max-w-xl">
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
//               <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
//               <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Talent Pipeline</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
//               Current <span className="text-brand-blue">Opportunities.</span>
//             </h2>
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" /></div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {liveJobs.map((job, index) => {
//               const isGradient = index % 2 !== 0;
//               return (
//                 <motion.div key={job.id} onClick={() => setActiveJob(job)} whileHover={{ y: -5 }}
//                   className={`group relative p-6 flex flex-col justify-between h-[220px] border border-white/10 transition-all duration-500 overflow-hidden cursor-pointer ${isGradient ? 'bg-gradient-to-br from-brand-blue via-[#003380] to-[#001a40]' : 'bg-[#000d1a] hover:bg-brand-dark'}`}>
//                   <div>
//                     <div className="flex justify-between items-start mb-3 relative z-10">
//                       <TbBriefcase className={isGradient ? "text-blue-200" : "text-brand-blue"} size={18} />
//                       <span className="font-mono text-[8px] font-bold tracking-widest text-white/40 uppercase">// {job.jobId}</span>
//                     </div>
//                     <h3 className="text-xl font-bold text-white mb-2 leading-tight">{job.title}</h3>
//                     <div className="flex items-center gap-4 text-[9px] font-mono text-white/50 uppercase tracking-widest">
//                       <span className="flex items-center gap-1"><TbMapPin className="text-brand-blue" /> {job.location}</span>
//                       <span>•</span><span>{job.experience}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
//                     <span className="text-[9px] font-mono font-bold text-brand-blue uppercase tracking-widest">{job.department}</span>
//                     <div className="text-white group-hover:text-brand-blue flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all">View Details <HiArrowRight className="group-hover:translate-x-1 transition-transform" /></div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       <AnimatePresence>
//         {activeJob && (
//           <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />
//             <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
//               className="relative w-full max-w-4xl bg-white border border-brand-border shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto">
              
//               <div className="w-full md:w-1/3 bg-[#010816] p-8 md:p-12 text-white border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center gap-2 mb-8"><div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" /><span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-brand-blue">Active_Requirement</span></div>
//                   <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-4">{activeJob.title}</h3>
//                   <div className="space-y-4 opacity-60">
//                     <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><TbDatabase className="text-brand-blue" /> {activeJob.jobId}</div>
//                     <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><TbMapPin className="text-brand-blue" /> {activeJob.location}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto bg-white custom-industrial-scroll">
//                 <button onClick={handleClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full text-slate-400 focus:outline-none"><HiX size={24} /></button>
                
//                 {step === 1 && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//                     <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 border-l-4 border-brand-blue pl-8">"{activeJob.briefing}"</p>
//                     <ul className="grid grid-cols-1 gap-4 mb-12">
//                       {activeJob.requirements?.map((req, i) => (
//                         <li key={i} className="flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 border-l-2 border-slate-200"><HiCheckCircle className="text-brand-blue shrink-0 mt-0.5" /> {req}</li>
//                       ))}
//                     </ul>
//                     <button onClick={() => setStep(2)} className="w-full bg-[#020617] text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all flex items-center justify-center gap-4 group">Initialize Enrollment <HiArrowRight className="group-hover:translate-x-2 transition-transform" /></button>
//                   </motion.div>
//                 )}

//                 {step === 2 && (
//                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
//                     <form onSubmit={handleFormSubmit} className="space-y-8">
//                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
//                           <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Full Name</label>
//                           <input required name="fullName" type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
//                         </div>
//                         <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
//                           <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Corporate Email</label>
//                           <input required name="email" type="email" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
//                         </div>
//                       </div>
//                       <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
//                         <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Industrial Experience</label>
//                         <input required name="experience" type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" placeholder="e.g., 5 Years" />
//                       </div>

//                       {/* IMPROVEMENT: Wrapped in label for instant click response */}
//                       <div className="group border-b border-slate-200 pb-4 focus-within:border-brand-blue transition-all">
//                         <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Dossier / Resume (PDF Only)</label>
//                         <label className="relative block cursor-pointer">
//                           <input 
//                             required 
//                             name="resume" 
//                             type="file" 
//                             accept=".pdf" 
//                             onChange={handleFileChange}
//                             className="sr-only" 
//                           />
//                           <div className="flex items-center gap-3 bg-slate-50 border border-dashed border-slate-300 rounded-lg p-4 hover:bg-slate-100 transition-all">
//                             <TbUpload className="text-brand-blue" size={20} />
//                             <span className={`text-xs font-bold uppercase tracking-wider ${selectedFileName ? 'text-brand-dark' : 'text-slate-500'}`}>
//                               {selectedFileName || "Select PDF File"}
//                             </span>
//                             {selectedFileName && (
//                               <div className="ml-auto bg-brand-blue/10 text-brand-blue text-[8px] px-2 py-1 rounded animate-pulse">READY</div>
//                             )}
//                           </div>
//                         </label>
//                       </div>

//                       <button 
//                         type="submit" 
//                         disabled={uploading}
//                         className={`w-full ${uploading ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-brand-dark'} text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl transition-all flex justify-center items-center gap-3`}
//                       >
//                         {uploading ? 'Transmitting...' : 'Submit Application'}
//                         {!uploading && <HiArrowRight />}
//                       </button>
//                     </form>
//                   </motion.div>
//                 )}

//                 {step === 3 && (
//                   <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
//                     <TbCircleCheck className="mx-auto text-brand-blue mb-8" size={56} />
//                     <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-4">Transmission Successful</h3>
//                     <button onClick={handleClose} className="block w-full bg-brand-dark text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all">Close Terminal</button>
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default JobBoard;





import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiX, HiCheckCircle } from 'react-icons/hi';
import { 
  TbBriefcase, TbMapPin, TbDatabase, TbUpload, 
  TbCircleCheck, TbFilter, TbSearchOff 
} from "react-icons/tb";

const JobBoard = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [step, setStep] = useState(1); 
  const [uploading, setUploading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  const departments = ["All", "Manufacturing", "Engineering", "Quality Assurance", "Avionics", "Operations", "R&D"];

  const jobs = [
    { id: "REQ-2025-01", title: "Senior CNC Programmer", dept: "Manufacturing", loc: "Hyderabad, IN", briefing: "Lead high-precision machining operations for aerospace engine components.", requirements: ["10+ Years CNC Experience", "Mastery of 5-Axis Programming", "AS9100 Quality Standard Knowledge"] },
    { id: "REQ-2025-02", title: "Avionics Systems Engineer", dept: "Avionics", loc: "Hyderabad, IN", briefing: "Integrate electronic flight control systems for next-gen UAV platforms.", requirements: ["B.Tech Electronics", "Experience with Embedded C", "Knowledge of DO-178C Standards"] },
    { id: "REQ-2025-03", title: "Mechanical Design Intern", dept: "R&D", loc: "Remote / Hybrid", briefing: "Assist in the design and simulation of UAV turbojet components.", requirements: ["Enrolled in Final Year B.Tech", "SolidWorks/CATIA Proficiency", "Strong Fundamental Mechanics"] },
    { id: "REQ-2025-04", title: "Supply Chain Manager", dept: "Operations", loc: "Hyderabad, IN", briefing: "Coordinate global logistics for raw Ti-6Al-4V and superalloys.", requirements: ["Supply Chain Degree", "Aerospace Vendor Management Exp", "Strategic Sourcing Skills"] },
    { id: "REQ-2025-06", title: "Aerospace Analyst", dept: "Engineering", loc: "Hyderabad, IN", briefing: "Synthesize operational data to optimize manufacturing throughput.", requirements: ["Data Analytics Experience", "Industrial Engineering Background", "Six Sigma Certification"] },
  ];

  const filteredJobs = activeFilter === "All" ? jobs : jobs.filter(j => j.dept === activeFilter);

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
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Talent Pipeline</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Current <span className="text-brand-blue">Opportunities.</span>
            </h2>
          </div>
          <div className="hidden lg:block border-l border-slate-200 pl-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest max-w-[220px] leading-relaxed">
              Global Scale<br />
              <span className="text-brand-blue font-mono">Precision Human Capital</span>
            </p>
          </div>
        </div>

        {/* FILTER HUD */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 mr-4 text-slate-400 font-mono text-[9px] font-black uppercase tracking-widest">
            <TbFilter size={14} className="text-brand-blue" /> Filter By:
          </div>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-5 py-2 text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 border rounded-sm
                ${activeFilter === dept 
                  ? 'text-white border-transparent shadow-lg' 
                  : 'text-slate-500 border-blue-100 bg-blue-50/30 hover:bg-blue-50'}`}
              style={activeFilter === dept ? { background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' } : {}}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="min-h-[400px]">
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, index) => {
                  const isSignatureGradient = index % 2 !== 0; 
                  return (
                    <motion.div
                      key={job.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      onClick={() => setActiveJob(job)}
                      whileHover={{ y: -5 }}
                      className={`group relative p-8 flex flex-col justify-between h-[240px] border border-white/10 transition-all duration-500 overflow-hidden shadow-2xl cursor-pointer
                        ${isSignatureGradient 
                          ? 'bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677]' 
                          : 'bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200'
                        }`}
                    >
                      <div className="absolute -right-2 -top-2 w-16 h-16 bg-white/5 blur-[30px] group-hover:bg-brand-blue/20 transition-all duration-700" />
                      <div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                          <div className={`p-2 rounded-sm ${isSignatureGradient ? "bg-white/10 text-white" : "bg-brand-blue text-white"}`}>
                            <TbBriefcase size={18} />
                          </div>
                          <span className={`font-mono text-[9px] font-bold tracking-widest uppercase ${isSignatureGradient ? "text-blue-200/40" : "text-slate-400"}`}>
                            {job.id}
                          </span>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 tracking-tight relative z-10 leading-tight
                          ${isSignatureGradient ? "text-white" : "text-brand-dark"}`}>
                          {job.title}
                        </h3>
                        <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-mono relative z-10
                          ${isSignatureGradient ? "text-blue-100/60" : "text-slate-500"}`}>
                          <TbMapPin className={isSignatureGradient ? "text-blue-300" : "text-brand-blue"} size={14} /> {job.loc}
                        </div>
                      </div>
                      <div className={`flex items-center justify-between border-t pt-4 relative z-10 
                        ${isSignatureGradient ? "border-white/10" : "border-brand-blue/20"}`}>
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-widest
                          ${isSignatureGradient ? "text-blue-300/50" : "text-slate-400"}`}>
                          {job.dept}
                        </span>
                        <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all 
                          ${isSignatureGradient ? "text-white group-hover:text-blue-200" : "text-brand-blue group-hover:gap-4"}`}>
                          Details <HiArrowRight />
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 w-0 group-hover:w-full
                        ${isSignatureGradient ? "bg-white" : "bg-brand-blue"}`} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            /* EMPTY STATE MESSAGE */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-100 bg-slate-50/50 rounded-sm"
            >
              <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center mb-6 text-slate-300">
                <TbSearchOff size={32} />
              </div>
              <h4 className="text-[10px] font-mono font-black text-brand-blue uppercase tracking-[0.4em] mb-3 text-center">
               No Openings Found
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-8 text-center max-w-md px-4">
                We currently have no active requirements in <span className="text-brand-dark font-bold underline decoration-brand-blue">{activeFilter}</span>. 
                However, our talent pipeline is always open for elite professionals.
              </p>
              <button 
                onClick={() => setActiveJob({ title: "General Expression of Interest", dept: activeFilter, loc: "Hyderabad, IN", id: "GEN-REQ", briefing: "Submit your resume for future opportunities at Raghu Vamsi." })}
                className="bg-brand-dark text-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-blue transition-all"
              >
                Submit General Application
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* ENROLLMENT MODAL TERMINAL - UPDATED COLORS */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-white border border-brand-border shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto rounded-sm">
              
              {/* SIDEBAR: Signature Gradient */}
              <div className="w-full md:w-1/3 p-8 md:p-12 text-white border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between"
                   style={{ background: 'linear-gradient(135deg, #022049 0%, #063677 100%)' }}>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-300">Requirement</span>
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-4">{activeJob.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-200/70"><TbDatabase className="text-blue-400" /> {activeJob.id}</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-blue-200/70"><TbMapPin className="text-blue-400" /> {activeJob.loc}</div>
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -bottom-10 -left-10 opacity-10 pointer-events-none">
                  <TbBriefcase size={200} className="text-white" />
                </div>
              </div>

              {/* CONTENT AREA: Sky Color used in Ethos */}
              <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto bg-white relative">
                <button onClick={handleClose} className="absolute top-6 right-6 p-2 hover:bg-blue-50 rounded-full text-slate-400 transition-colors"><HiX size={24} /></button>
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 border-l-4 border-brand-blue pl-8">"{activeJob.briefing}"</p>
                    <ul className="grid grid-cols-1 gap-3 mb-12">
                      {activeJob.requirements?.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 border-l-2 border-slate-200"><HiCheckCircle className="text-brand-blue shrink-0 mt-0.5" /> {req}</li>
                      ))}
                    </ul>
                    <button onClick={() => setStep(2)} className="w-full bg-[#020617] text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all flex items-center justify-center gap-4 group">
                      Initialize Enrollment <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group border-b border-blue-100 pb-2 focus-within:border-brand-blue transition-all">
                          <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Full Name</label>
                          <input required name="fullName" type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                        <div className="group border-b border-blue-100 pb-2 focus-within:border-brand-blue transition-all">
                          <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Email Address</label>
                          <input required name="email" type="email" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                      </div>
                      <div className="group border-b border-blue-100 pb-4 focus-within:border-brand-blue transition-all">
                        <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Upload Resume</label>
                        <label className="relative block cursor-pointer">
                          <input required name="resume" type="file" accept=".pdf" onChange={handleFileChange} className="sr-only" />
                          <div className="flex items-center gap-3 bg-blue-50/50 border border-dashed border-blue-200 rounded-sm p-4 hover:bg-blue-50 transition-all">
                            <TbUpload className="text-brand-blue" size={20} />
                            <span className={`text-xs font-bold uppercase tracking-wider ${selectedFileName ? 'text-brand-dark' : 'text-slate-400'}`}>
                              {selectedFileName || "Select PDF"}
                            </span>
                          </div>
                        </label>
                      </div>
                      <button type="submit" disabled={uploading} className="w-full bg-brand-blue hover:bg-brand-dark text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] transition-all shadow-[0_0_20px_rgba(0,71,171,0.2)]">
                        {uploading ? 'Submitting Data...' : 'Confirm Application'}
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                       <TbCircleCheck className="text-brand-blue" size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-4">Application Submitted</h3>
                    <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-10">Your application will be reviewed shortly.</p>
                    <button onClick={handleClose} className="block w-full bg-brand-dark text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all shadow-xl">Close</button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JobBoard;