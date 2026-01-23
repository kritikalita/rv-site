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
      {
        name: "Sector Intelligence",
        path: "/capabilities#sector-intelligence",
      },
    ],
    Resources: [
      { name: "Latest News", path: "/stories" },
      { name: "Accreditations", path: "/about#accreditations" },
      { name: "Contact", path: "/contact" },
    ],
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* BACKGROUND: Sticking strictly to your Signature Blue Palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022049] via-[#042b61] to-[#063677] z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* BRAND SECTION */}
          <div className="lg:col-span-4 flex flex-col items-start relative">
            <Link to="/" className="inline-block mb-2 group lg:-mt-10">
              <img
                src="/logo.png"
                alt="Raghu Vamsi Group Logo"
                className="h-24 md:h-32 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="text-white/70 text-[13px] leading-relaxed mb-8 border-l border-blue-400/30 pl-5 max-w-sm font-medium">
              Tier-1 aerospace manufacturing delivering mission-critical
              components for global defense and autonomous systems.
            </p>

            {/* UPDATED SOCIAL LINKS SECTION */}
            <div className="flex gap-4">
              {[
                {
                  Icon: TbBrandLinkedin,
                  link: "https://www.linkedin.com/company/raghu-vamsi-group/posts/?feedView=all",
                },
                {
                  Icon: TbBrandYoutube,
                  link: "https://www.youtube.com/@Raghu_Vamsi_Group",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 text-white/80 hover:text-white"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* SITEMAP SECTION */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-400 mb-6">
                  {category}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-white/60 text-[12px] font-bold hover:text-white transition-all flex items-center gap-1 group"
                      >
                        <TbMinus className="w-0 group-hover:w-3 transition-all text-blue-400" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CONTACT SECTION */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-blue-400 mb-6">
              Connect
            </h4>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <TbMapPin className="text-blue-400 shrink-0 mt-0.5" size={20} />
                <p className="text-white/70 text-[12px] leading-relaxed font-medium">
                  Adibatla Aerospace Park,
                  <br />
                  Hyderabad, TS, India
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <TbMail className="text-blue-400 shrink-0" size={20} />
                <p className="text-white/70 text-[12px] font-medium">
                  info@raghuvamsi.com
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#022049] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all shadow-xl"
                >
                  Request Quotation <TbArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              © {currentYear} Raghu Vamsi Group
            </span>
            <div className="h-3 w-[1px] bg-white/10 hidden md:block" />
            <span className="flex items-center gap-2">
              <TbShieldCheck className="text-blue-400/50" />
              Operational Integrity Verified
            </span>
          </div>

          <div className="flex gap-8">
            {["Privacy", "Terms", "Export Control"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[9px] font-mono font-bold text-white/20 hover:text-blue-400 uppercase tracking-widest transition-colors"
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
