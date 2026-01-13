import React from "react";
import { Link } from "react-router-dom";
import { 
  TbArrowUpRight, 
  TbMail, 
  TbMapPin, 
  TbPhone, 
  TbBrandLinkedin, 
  TbBrandTwitter, 
  TbMinus 
} from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Ethos", path: "/about#ethos" },
      { name: "Leadership", path: "/about#leadership" },
      { name: "Careers", path: "/careers" },
    ],
    Capabilities: [
      { name: "Engineering", path: "/capabilities" },
      { name: "Precision Machining", path: "/capabilities" },
      { name: "Surface Treatment", path: "/capabilities" },
      { name: "Sector Intelligence", path: "/capabilities#sector-intelligence" },
    ],
    Resources: [
      { name: "Latest News", path: "/stories" },
      { name: "Accreditations", path: "/about#accreditations" },
      { name: "Supplier Portal", path: "#" },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND SECTION */}
<div className="lg:col-span-4">
  <Link to="/" className="inline-block mb-8 group">
    {/* Container for the Logo 
        h-12 is a standard height, adjust as per your logo's aspect ratio 
    */}
    <img 
      src="public/logos/logo.png" 
      alt="Raghu Vamsi Group Logo" 
      className="h-12 w-auto object-contain brightness-100 transition-transform duration-500 group-hover:scale-105"
    />
  </Link>

  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
    An AS9100D certified leader in high-precision aerospace manufacturing, 
    delivering mission-critical components for the next era of global autonomy.
  </p>
  
  <div className="flex gap-4">
    {[TbBrandLinkedin, TbBrandTwitter].map((Icon, idx) => (
      <a 
        key={idx} 
        href="#" 
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 group"
      >
        <Icon size={18} className="text-slate-300 group-hover:text-white" />
      </a>
    ))}
  </div>
</div>

          {/* SITEMAP SECTION */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.name}
                        <TbArrowUpRight className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-brand-blue" size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CONTACT/CTA SECTION */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-6">
              Global Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <TbMapPin className="text-brand-blue shrink-0" size={20} />
                <p className="text-slate-400 text-sm">
                  Adibatla Aerospace Park,<br /> 
                  Hyderabad, TS 501510, India
                </p>
              </div>
              <div className="flex gap-4">
                <TbMail className="text-brand-blue shrink-0" size={20} />
                <p className="text-slate-400 text-sm">info@raghuvamsi.com</p>
              </div>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-white text-brand-dark px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all"
                >
                  Request a Quote <TbArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>© {currentYear} Raghuvamsi Group</span>
            <TbMinus />
            <span>All Rights Reserved</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;