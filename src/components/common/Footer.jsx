import React from "react";
import { Link } from "react-router-dom";
import { 
  TbArrowUpRight, 
  TbMail, 
  TbMapPin, 
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
    <footer className="relative pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* NEW GRADIENT BACKGROUND: Signature Blue Palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] z-0" />
      
      {/* UNIFORM BACKGROUND: Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Subtle Technical Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND SECTION */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8 group">
              <img 
                src="public/logos/logo.png" 
                alt="Raghu Vamsi Group Logo" 
                className="h-12 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-blue-100/60 text-sm leading-relaxed mb-8 max-w-sm italic border-l border-white/20 pl-4">
              "An AS9100D certified leader in high-precision aerospace manufacturing, 
              delivering mission-critical components for the next era of global autonomy."
            </p>
            
            <div className="flex gap-4">
              {[TbBrandLinkedin, TbBrandTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white hover:text-[#022049] transition-all duration-300 group"
                >
                  <Icon size={18} className="transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* SITEMAP SECTION */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-300 mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path} 
                        className="text-blue-100/50 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.name}
                        <TbArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-300" size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CONTACT/CTA SECTION */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-300 mb-6">
              Global Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <TbMapPin className="text-blue-300 shrink-0" size={20} />
                <p className="text-blue-100/60 text-sm">
                  Adibatla Aerospace Park,<br /> 
                  Hyderabad, TS 501510, India
                </p>
              </div>
              <div className="flex gap-4">
                <TbMail className="text-blue-300 shrink-0" size={20} />
                <p className="text-blue-100/60 text-sm">info@raghuvamsi.com</p>
              </div>
              <div className="pt-4">
                <Link 
                  to="/contact" 
                  className="group relative flex items-center gap-3 bg-white text-[#022049] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-300 transition-all shadow-xl"
                >
                  Request a Quote <TbArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-mono text-blue-100/30 uppercase tracking-[0.2em]">
            <span>© {currentYear} Raghuvamsi Group</span>
            <TbMinus />
            <span>Industrial Intelligence Transmitted</span>
          </div>
          
          <div className="flex gap-8 text-[10px] font-mono text-blue-100/30 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;