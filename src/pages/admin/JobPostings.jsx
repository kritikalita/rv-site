// src/pages/admin/JobPostings.jsx
import React from 'react';
import JobManagementView from '../../components/admin/JobManagementView';

const JobPostings = ({ jobs, onToggle, onSubmit }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <JobManagementView jobs={jobs} onToggle={onToggle} onSubmit={onSubmit} />
    </div>
  );
};
export default JobPostings;