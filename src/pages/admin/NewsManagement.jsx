import React from "react";
import NewsView from "../../components/admin/NewsView";

const NewsManagement = ({ transmissions, onDelete, onRefresh }) => {
  
  // Logic to pin a story to the Hero section
  const handlePin = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/transmissions/${id}/pin`, {
        method: "PATCH",
      });
      if (response.ok) {
        onRefresh(); // Refresh the list to show the new 'featured' status
      }
    } catch (err) {
      console.error("Pinning_Failed:", err);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <NewsView 
        transmissions={transmissions} 
        onDelete={onDelete} 
        onRefresh={onRefresh} 
        onPin={handlePin} // New handler passed to UI
      />
    </div>
  );
};

export default NewsManagement;