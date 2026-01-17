import React, { useState } from 'react';
import { 
  TbPlus, 
  TbTrash, 
  TbX, 
  TbPhoto, 
  TbBroadcast, 
  TbEdit, 
  TbCircleFilled, 
  TbPinnedFilled 
} from "react-icons/tb";

const NewsView = ({ transmissions, onDelete, onRefresh, onPin }) => {
  const [showModal, setShowModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Trigger modal in Edit Mode
  const openEditModal = (item) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleBroadcast = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    const formDataObj = new FormData();
    const transmissionData = {
      title: e.target.newsTitle.value,
      category: e.target.newsCategory.value,
      content: e.target.newsContent.value,
      fullContent: e.target.newsFullContent.value
    };

    formDataObj.append("transmission", JSON.stringify(transmissionData));
    
    // Image is only required for new posts; optional for edits
    if (e.target.newsImage.files[0]) {
      formDataObj.append("image", e.target.newsImage.files[0]);
    }

    try {
      const url = editingItem 
        ? `http://localhost:8080/api/transmissions/${editingItem.id}` 
        : "http://localhost:8080/api/transmissions";
      
      const response = await fetch(url, { 
        method: editingItem ? "PUT" : "POST", 
        body: formDataObj 
      });

      if (response.ok) {
        setShowModal(false);
        setEditingItem(null);
        onRefresh(); // Sync UI with PostgreSQL
      }
    } catch (err) {
      console.error("Transmission_Sync_Error:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* HUB HEADER */}
      <div className="flex justify-between items-center bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-black text-brand-dark tracking-tighter uppercase">Editorial Journal</h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Live Transmission Archive</p>
        </div>
        <button 
          onClick={() => { setEditingItem(null); setShowModal(true); }} 
          className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20"
        >
          <TbPlus size={18}/> Initialize Transmission
        </button>
      </div>

      {/* RECENT BROADCASTS LIST */}
      <div className="grid grid-cols-1 gap-4">
        {transmissions.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-[1.5rem] border border-slate-100 flex items-center justify-between group hover:border-brand-blue/30 transition-all hover:shadow-md">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-50 shrink-0 relative">
                <img src={`http://localhost:8080${item.imageUrl}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
                {item.featured && (
                  <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-[2px] flex items-center justify-center">
                    <TbPinnedFilled className="text-brand-blue animate-pulse" size={24} />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[9px] font-black text-brand-blue uppercase px-2 py-0.5 bg-blue-50 rounded-md tracking-wider">{item.category}</span>
                  {item.featured && (
                    <span className="text-[9px] font-black text-white uppercase px-2 py-0.5 bg-brand-blue rounded-md tracking-wider flex items-center gap-1 shadow-sm">
                      <TbPinnedFilled size={10} /> Hero Featured
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-slate-800 tracking-tight">{item.title}</h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => onPin(item.id)}
                className={`p-3 rounded-xl transition-all border ${item.featured ? 'text-brand-blue bg-blue-50 border-brand-blue/20' : 'text-slate-300 hover:text-brand-blue hover:bg-slate-50 border-transparent'}`}
                title="Pin to Hero"
              >
                <TbCircleFilled size={20} />
              </button>

              <button 
                onClick={() => openEditModal(item)}
                className="p-3 text-slate-300 hover:text-brand-blue hover:bg-blue-50 rounded-xl transition-all border border-transparent"
                title="Edit Transmission"
              >
                <TbEdit size={20} />
              </button>

              <button 
                onClick={() => onDelete(item.id)} 
                className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent"
              >
                <TbTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* UPLOAD / EDIT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/90 backdrop-blur-xl p-6">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
            <button onClick={() => { setShowModal(false); setEditingItem(null); }} className="absolute top-8 right-8 p-2 text-slate-400 hover:text-brand-dark">
              <TbX size={24}/>
            </button>
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter mb-8 flex items-center gap-3">
              <TbBroadcast className="text-brand-blue" /> {editingItem ? "Refine Transmission" : "Initialize Broadcast"}
            </h3>
            <form onSubmit={handleBroadcast} className="grid grid-cols-2 gap-4">
              <input name="newsTitle" defaultValue={editingItem?.title} required className="col-span-2 bg-slate-50 border-0 p-4 rounded-2xl text-sm outline-none" placeholder="Headline Title" />
              <select name="newsCategory" defaultValue={editingItem?.category} className="col-span-2 bg-slate-50 border-0 p-4 rounded-2xl text-sm">
                <option value="TECHNOLOGY">Technology</option>
                <option value="MANUFACTURING">Manufacturing</option>
                <option value="PRESS RELEASES">Press Release</option>
              </select>
              <textarea name="newsContent" defaultValue={editingItem?.content} required className="col-span-2 bg-slate-50 border-0 p-4 rounded-2xl text-sm h-20" placeholder="Card Summary..." />
              <textarea name="newsFullContent" defaultValue={editingItem?.fullContent} required className="col-span-2 bg-slate-50 border-0 p-4 rounded-2xl text-sm h-32" placeholder="Detailed editorial content..." />
              
              <div className="col-span-2 border-2 border-dashed border-slate-100 rounded-2xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer">
                <label className="text-xs font-bold text-slate-400 flex flex-col items-center gap-2 cursor-pointer">
                  <TbPhoto size={32} className="text-brand-blue opacity-40"/> 
                  {editingItem ? "Replace Visual Asset (Optional)" : "Upload Visual Asset (JPEG/PNG)"}
                  <input name="newsImage" type="file" accept="image/*" required={!editingItem} className="hidden" />
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isUploading}
                className="col-span-2 bg-brand-blue text-white py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest mt-4 hover:bg-brand-dark transition-all disabled:opacity-50"
              >
                {isUploading ? "Executing Uplink..." : editingItem ? "Confirm Updates" : "Launch Transmission"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsView;