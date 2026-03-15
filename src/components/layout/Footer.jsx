import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#06283D] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hero.io" className="h-10 w-auto" />
            <span className="text-lg font-semibold tracking-wide">HERO.IO</span>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-sm mb-3 text-gray-300">Social Links</p>

            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-primary transition p-2 rounded-full"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-primary transition p-2 rounded-full"
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-primary transition p-2 rounded-full"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-300">
          Copyright © {new Date().getFullYear()} — All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
