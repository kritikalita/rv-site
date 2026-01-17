import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

// Feature Pages (src/pages/admin/)
import JobPostings from "./admin/JobPostings";
import NewsManagement from "./admin/NewsManagement";

// Reusable UI Modules (src/components/admin/)
import ApplicantRegistry from "../components/admin/ApplicantRegistry";
import SystemSettings from "../components/admin/SystemSettings";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [emailSetting, setEmailSetting] = useState("");
  const [loading, setLoading] = useState(true); // Added loading state for better UX
  const navigate = useNavigate();

  // Centralized Data Uplink synchronized with Promise.all
  const fetchData = async () => {
    try {
      const [jobsRes, appsRes, newsRes, settingsRes] = await Promise.all([
        fetch("http://localhost:8080/api/jobs/all"),
        fetch("http://localhost:8080/api/applicants"),
        fetch("http://localhost:8080/api/transmissions"),
        fetch("http://localhost:8080/api/settings/RECRUITMENT_EMAIL")
      ]);

      const jobsData = await jobsRes.json();
      const appsData = await appsRes.json();
      const newsData = await newsRes.json();
      const emailData = await settingsRes.text();

      setJobs(jobsData);
      setApplicants(appsData);
      setTransmissions(newsData);
      setEmailSetting(emailData);
      setLoading(false);
    } catch (err) {
      console.error("Uplink_Sync_Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => { 
    fetchData(); 
  }, []);

  // --- RECRUITMENT HANDLERS ---
  
  const toggleJobStatus = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/jobs/${id}/toggle-status`, { method: "PATCH" });
      fetchData(); // Sync UI with database
    } catch (err) { 
      console.error("Toggle_Failed:", err); 
    }
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobData = {
      jobId: formData.get("jobId"),
      title: formData.get("title"),
      department: formData.get("department"),
      location: formData.get("location"),
      experience: formData.get("experience"),
      briefing: formData.get("briefing"),
      requirements: formData.get("requirements").split(",").map(r => r.trim())
    };

    try {
      await fetch("http://localhost:8080/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData)
      });
      e.target.reset();
      fetchData(); // Refresh list
    } catch (err) {
      console.error("Job_Submission_Error:", err);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await fetch(`http://localhost:8080/api/applicants/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newStatus)
      });
      fetchData(); // Sync stage update
    } catch (err) {
      console.error("Status_Update_Error:", err);
    }
  };

  // --- SYSTEM HANDLERS ---

  const handleUpdateSetting = async (newValue) => {
    try {
      await fetch("http://localhost:8080/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settingKey: "RECRUITMENT_EMAIL", settingValue: newValue })
      });
      fetchData(); // Sync system config
    } catch (err) {
      console.error("Settings_Update_Error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("rv_admin_auth"); // Terminate local session
    navigate("/admin-login");
  };

  const renderActivePage = () => {
    // Shared props for JobPostings to avoid duplication in default case
    const jobProps = {
      jobs: jobs,
      applicants: applicants,
      onToggle: toggleJobStatus,
      onSubmit: handleJobSubmit
    };

    switch (activeTab) {
      case "jobs":
        return <JobPostings {...jobProps} />;
      case "applicants":
        return <ApplicantRegistry applicants={applicants} onUpdateStatus={handleUpdateStatus} onToggleArchive={fetchData} />;
      case "news":
        return <NewsManagement transmissions={transmissions} onDelete={fetchData} onRefresh={fetchData} />;
      case "settings":
        return <SystemSettings currentEmail={emailSetting} onUpdateEmail={handleUpdateSetting} />;
      default:
        return <JobPostings {...jobProps} />; // Corrected to include applicants in default
    }
  };

  return (
    <div className="flex bg-[#F8FAFC] h-screen w-full overflow-hidden">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-12 py-6 shrink-0 z-20">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">
              {activeTab} DASHBOARD
            </h1>
            {loading && (
              <div className="flex items-center gap-2 text-[10px] font-mono text-brand-blue font-bold animate-pulse">
                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full" />
                SYNCING_DATABASE...
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-12 custom-industrial-scroll">
          <div className="max-w-7xl mx-auto">
            {renderActivePage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;