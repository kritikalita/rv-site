import React from "react";
import { Link } from "react-router-dom";
import {
  TbArrowUpRight,
  TbMail,
  TbMapPin,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbMinus,
  TbShieldCheck,
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
      { name: "Machining", path: "/capabilities" },
      { name: "Sector Intelligence", path: "/capabilities#sector-intelligence" },
    ],
    // ADDED SUBSIDIARIES SECTION
    Subsidiaries: [
      { name: "Arrobot", path: "https://www.arrobot.co/", isExternal: true },
      { name: "Comprotech", path: "https://comprotechengineering.com/", isExternal: true },
      { name: "WMT Precision", path: "https://wmtprecision.com/", isExternal: true },
    ],
    Resources: [
      { name: "Latest News", path: "/stories" },
      { name: "Accreditations", path: "/about#accreditations" },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <footer className="relative pt-16 md:pt-24 2xl:pt-32 pb-10 overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] z-0" />

      <div className="max-w-7xl 2xl:max-w-[1800px] mx-auto px-6 relative z-10 text-white">
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 2xl:gap-16 mb-16 items-start text-center md:text-left">
          
          {/* 1. BRAND SECTION */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start relative">
            <Link to="/" className="inline-block mb-6 md:mb-4 group lg:-mt-10">
              <img
                src="/logo.png"
                alt="Raghu Vamsi Group Logo"
                className="h-24 md:h-32 2xl:h-48 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="flex gap-4 mt-2">
              {[
                { Icon: TbBrandLinkedin, link: "https://www.linkedin.com/company/raghu-vamsi-group/posts/?feedView=all" },
                { Icon: TbBrandYoutube, link: "https://www.youtube.com/@Raghu_Vamsi_Group" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-10 md:h-10 2xl:w-14 2xl:h-14 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 text-white/80 hover:text-white"
                >
                  <social.Icon className="w-5 h-5 md:w-[18px] md:h-[18px] 2xl:w-7 2xl:h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. SITEMAP SECTION 
              Grid adjusted to grid-cols-2 (mobile) and grid-cols-4 (desktop) to fit the new column
          */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-4 w-full">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col items-center md:items-start">
                <h4 className="text-[9px] md:text-[10px] 2xl:text-sm font-mono font-black uppercase tracking-[0.3em] text-blue-400 mb-6 2xl:mb-10">
                  {category}
                </h4>
                <ul className="space-y-4 md:space-y-3.5 2xl:space-y-6">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.isExternal ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 text-[11px] md:text-[12px] 2xl:text-lg font-bold hover:text-white transition-all flex items-center justify-center md:justify-start gap-1 group"
                        >
                          <TbMinus className="w-0 group-hover:w-3 transition-all text-blue-400 hidden md:block" />
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-white/60 text-[11px] md:text-[12px] 2xl:text-lg font-bold hover:text-white transition-all flex items-center justify-center md:justify-start gap-1 group"
                        >
                          <TbMinus className="w-0 group-hover:w-3 transition-all text-blue-400 hidden md:block" />
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. CONTACT SECTION */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start w-full">
            <h4 className="text-[9px] md:text-[10px] 2xl:text-sm font-mono font-black uppercase tracking-[0.3em] text-blue-400 mb-6 2xl:mb-10">
              Connect
            </h4>
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center md:items-start">
                <TbMapPin className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <p className="text-white/70 text-[11px] md:text-[12px] 2xl:text-lg leading-relaxed font-medium">
                   Plot No. 26/A, Hardware Park,
                  <br className="hidden md:block" />
                  Hyderabad, Telangana-501510, India
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center">
                <TbMail className="text-blue-400 shrink-0" size={20} />
                <p className="text-white/70 text-[11px] md:text-[12px] 2xl:text-lg font-medium underline underline-offset-4 decoration-white/10">
                  info@raghuvamsiaerospace.com
                </p>
              </div>
              <div className="pt-4 md:pt-2 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#022049] px-8 md:px-6 py-4 2xl:px-10 2xl:py-6 text-[9px] md:text-[10px] 2xl:text-sm font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all shadow-xl w-full sm:w-auto rounded-sm"
                >
                  Contact Us<TbArrowUpRight className="2xl:w-5 2xl:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Legal and Compliance */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-[9px] md:text-[10px] 2xl:text-xs font-mono text-white/30 uppercase tracking-[0.2em] text-center">
            <span>© {currentYear} Raghu Vamsi Group</span>
            <div className="h-3 w-[1px] bg-white/10 hidden md:block" />
            <span className="flex items-center gap-2">
              <TbShieldCheck className="text-blue-400/50" />
              All Rights Reserved
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {["Privacy", "Terms", "Export Control"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[8px] md:text-[9px] 2xl:text-xs font-mono font-bold text-white/20 hover:text-blue-400 uppercase tracking-widest transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;