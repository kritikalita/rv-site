import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { TbCertificate, TbShieldCheck } from "react-icons/tb";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-10 pb-6 border-t-4 border-brand-blue relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP ROW: Brand & Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-white/10 pb-8 mb-8">
          
          {/* Brand Identity */}
          <div className="max-w-md">
            {/* REPLACED TEXT WITH LOGO */}
            <Link to="/" className="inline-block mb-6 group/f-logo">
              <img 
                src="/logos/logo.png" 
                alt="Raghu Vamsi" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert transition-all duration-500 group-hover/f-logo:scale-110 group-hover/f-logo:brightness-125" 
              />
            </Link>
            
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              A Tier-1 Aerospace & Defence Manufacturer delivering precision engineering solutions to the world's leading OEMs since 2005.
            </p>
            <div className="flex gap-3">
              <SocialLink icon={FaLinkedinIn} href="#" />
              <SocialLink icon={FaTwitter} href="#" />
              <SocialLink icon={FaYoutube} href="#" />
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="w-full lg:w-auto bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
            <h3 className="text-sm font-bold mb-1">Stay Updated</h3>
            <p className="text-[10px] text-gray-400 mb-3">Get the latest aerospace insights and company news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-brand-dark border border-white/20 px-3 py-2 text-xs text-white focus:border-brand-blue focus:outline-none w-full md:w-56"
              />
              <button className="bg-brand-blue text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* MAIN GRID: Links & Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-brand-blue">Corporate</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/leadership">Leadership</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/stories">Newsroom</FooterLink>
              <FooterLink to="/sustainability">Sustainability</FooterLink>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-brand-blue">Capabilities</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <FooterLink to="/capabilities">Precision Machining</FooterLink>
              <FooterLink to="/capabilities">Aerospace Assembly</FooterLink>
              <FooterLink to="/capabilities">Engineering Services</FooterLink>
              <FooterLink to="/capabilities">Special Processes</FooterLink>
              <FooterLink to="/capabilities">Quality Assurance</FooterLink>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-4 text-brand-blue">Contact</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-brand-blue text-sm mt-0.5 shrink-0" />
                <span>
                  Aerospace Park, Adibatla,<br/>
                  Hyderabad, Telangana 501510
                </span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone className="text-brand-blue text-sm shrink-0" />
                <span>+91 40 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail className="text-brand-blue text-sm shrink-0" />
                <span>contact@raghuvamsi.com</span>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2 bg-brand-blue/10 p-5 border border-brand-blue/20 rounded-sm">
            <h4 className="font-bold uppercase tracking-widest text-[10px] mb-3 text-white">Accreditations</h4>
            <p className="text-[10px] text-gray-400 mb-4 leading-relaxed">
              We adhere to the strictest global standards for quality and safety.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <CertBadge icon={TbShieldCheck} label="AS9100 Rev D" />
              <CertBadge icon={TbCertificate} label="NADCAP" />
              <CertBadge icon={TbCertificate} label="ISO 14001" />
              <CertBadge icon={TbCertificate} label="CEMILAC" />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500">
          <div className="flex flex-wrap justify-center gap-6">
            <span>© {currentYear} Raghu Vamsi Machine Tools Pvt Ltd.</span>
            <span className="hidden md:inline">|</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 font-bold uppercase tracking-widest text-white hover:text-brand-blue transition-colors group"
          >
            Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-brand-blue hover:translate-x-1 transition-all inline-block">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ icon: Icon, href }) => (
  <a href={href} className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center text-white hover:bg-brand-blue transition-colors text-xs">
    <Icon />
  </a>
);

const CertBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 text-gray-300">
    <Icon className="text-brand-blue" size={16} />
    <span className="text-[10px] font-bold">{label}</span>
  </div>
);

export default Footer;