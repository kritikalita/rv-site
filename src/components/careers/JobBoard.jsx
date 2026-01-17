import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiX, HiCheckCircle } from 'react-icons/hi';
import { 
  TbBriefcase, TbMapPin, TbFileText, TbUserPlus, 
  TbCircleCheck, TbClipboardList, TbDatabase, TbUpload 
} from "react-icons/tb";

const JobBoard = () => {
  const [liveJobs, setLiveJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  // FETCH LIVE JOBS FROM BACKEND
  useEffect(() => {
    fetch('http://localhost:8080/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        setLiveJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Database_Link_Error:", err);
        setLoading(false);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName("");
    }
  };

  const handleClose = () => {
    setActiveJob(null);
    setStep(1);
    setSelectedFileName("");
    setUploading(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // IMPROVEMENT: Set uploading to true IMMEDIATELY to stop cursor lag
    setUploading(true);

    const form = e.target;
    const resumeFile = form.elements.resume.files[0];
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    // Validation
    if (resumeFile && resumeFile.size > MAX_FILE_SIZE) {
      alert("File Too Large: The dossier must be smaller than 5MB.");
      setUploading(false);
      return; 
    }

    try {
      const formData = new FormData();
      const applicantObj = {
        fullName: form.elements.fullName.value,
        email: form.elements.email.value,
        experience: form.elements.experience.value,
        jobId: activeJob.jobId
      };

      // Construct Multipart Request
      formData.append("applicant", JSON.stringify(applicantObj));
      formData.append("resume", resumeFile);

      const res = await fetch('http://localhost:8080/api/applicants', {
        method: 'POST',
        body: formData 
      });
      
      if (res.ok) {
        setStep(3);
      } else {
        alert("Transmission Error: System rejected the file format.");
        setUploading(false);
      }
    } catch (err) {
      console.error("Upload_Failure", err);
      alert("System Error: Could not connect to server.");
      setUploading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-brand-border">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0047AB 1px, transparent 1px), linear-gradient(90deg, #0047AB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-brand-blue shadow-[0_0_10px_#0047AB]" />
              <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-[10px]">Talent Pipeline</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tighter leading-tight">
              Current <span className="text-brand-blue">Opportunities.</span>
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveJobs.map((job, index) => {
              const isGradient = index % 2 !== 0;
              return (
                <motion.div key={job.id} onClick={() => setActiveJob(job)} whileHover={{ y: -5 }}
                  className={`group relative p-6 flex flex-col justify-between h-[220px] border border-white/10 transition-all duration-500 overflow-hidden cursor-pointer ${isGradient ? 'bg-gradient-to-br from-brand-blue via-[#003380] to-[#001a40]' : 'bg-[#000d1a] hover:bg-brand-dark'}`}>
                  <div>
                    <div className="flex justify-between items-start mb-3 relative z-10">
                      <TbBriefcase className={isGradient ? "text-blue-200" : "text-brand-blue"} size={18} />
                      <span className="font-mono text-[8px] font-bold tracking-widest text-white/40 uppercase">// {job.jobId}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">{job.title}</h3>
                    <div className="flex items-center gap-4 text-[9px] font-mono text-white/50 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><TbMapPin className="text-brand-blue" /> {job.location}</span>
                      <span>•</span><span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
                    <span className="text-[9px] font-mono font-bold text-brand-blue uppercase tracking-widest">{job.department}</span>
                    <div className="text-white group-hover:text-brand-blue flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest transition-all">View Details <HiArrowRight className="group-hover:translate-x-1 transition-transform" /></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-white border border-brand-border shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto">
              
              <div className="w-full md:w-1/3 bg-[#010816] p-8 md:p-12 text-white border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-8"><div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" /><span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-brand-blue">Active_Requirement</span></div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none mb-4">{activeJob.title}</h3>
                  <div className="space-y-4 opacity-60">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><TbDatabase className="text-brand-blue" /> {activeJob.jobId}</div>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest"><TbMapPin className="text-brand-blue" /> {activeJob.location}</div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto bg-white custom-industrial-scroll">
                <button onClick={handleClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full text-slate-400 focus:outline-none"><HiX size={24} /></button>
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 border-l-4 border-brand-blue pl-8">"{activeJob.briefing}"</p>
                    <ul className="grid grid-cols-1 gap-4 mb-12">
                      {activeJob.requirements?.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-500 bg-slate-50 p-4 border-l-2 border-slate-200"><HiCheckCircle className="text-brand-blue shrink-0 mt-0.5" /> {req}</li>
                      ))}
                    </ul>
                    <button onClick={() => setStep(2)} className="w-full bg-[#020617] text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all flex items-center justify-center gap-4 group">Initialize Enrollment <HiArrowRight className="group-hover:translate-x-2 transition-transform" /></button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <form onSubmit={handleFormSubmit} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
                          <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Full Name</label>
                          <input required name="fullName" type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                        <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
                          <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Corporate Email</label>
                          <input required name="email" type="email" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" />
                        </div>
                      </div>
                      <div className="group border-b border-slate-200 pb-2 focus-within:border-brand-blue transition-all">
                        <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Industrial Experience</label>
                        <input required name="experience" type="text" className="w-full bg-transparent outline-none text-brand-dark font-bold text-sm" placeholder="e.g., 5 Years" />
                      </div>

                      {/* IMPROVEMENT: Wrapped in label for instant click response */}
                      <div className="group border-b border-slate-200 pb-4 focus-within:border-brand-blue transition-all">
                        <label className="text-[9px] font-black text-brand-blue uppercase tracking-widest block mb-2 opacity-60">Dossier / Resume (PDF Only)</label>
                        <label className="relative block cursor-pointer">
                          <input 
                            required 
                            name="resume" 
                            type="file" 
                            accept=".pdf" 
                            onChange={handleFileChange}
                            className="sr-only" 
                          />
                          <div className="flex items-center gap-3 bg-slate-50 border border-dashed border-slate-300 rounded-lg p-4 hover:bg-slate-100 transition-all">
                            <TbUpload className="text-brand-blue" size={20} />
                            <span className={`text-xs font-bold uppercase tracking-wider ${selectedFileName ? 'text-brand-dark' : 'text-slate-500'}`}>
                              {selectedFileName || "Select PDF File"}
                            </span>
                            {selectedFileName && (
                              <div className="ml-auto bg-brand-blue/10 text-brand-blue text-[8px] px-2 py-1 rounded animate-pulse">READY</div>
                            )}
                          </div>
                        </label>
                      </div>

                      <button 
                        type="submit" 
                        disabled={uploading}
                        className={`w-full ${uploading ? 'bg-slate-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-brand-dark'} text-white py-5 font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl transition-all flex justify-center items-center gap-3`}
                      >
                        {uploading ? 'Transmitting...' : 'Submit Application'}
                        {!uploading && <HiArrowRight />}
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <TbCircleCheck className="mx-auto text-brand-blue mb-8" size={56} />
                    <h3 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-4">Transmission Successful</h3>
                    <button onClick={handleClose} className="block w-full bg-brand-dark text-white py-4 font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-blue transition-all">Close Terminal</button>
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