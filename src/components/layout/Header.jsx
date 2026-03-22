import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-medium underline underline-offset-4 decoration-2"
      : "text-gray-700 hover:text-primary transition-colors";

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-1.5 shrink-0">
          <img
            src={logo}
            alt="Hero.io Logo"
            className="h-7 w-auto object-contain"
          />
          <span className="text-sm font-bold text-primary tracking-wider">
            HERO.IO
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/apps" className={navLinkClass}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={navLinkClass}>
            Installation
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/md-sazzadul"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <FaGithub size={15} />
            Contribute
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-1.5 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-md">
          <NavLink
            to="/"
            className={navLinkClass}
            end
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Installation
          </NavLink>
          <a
            href="https://github.com/md-sazzadul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium px-4 py-2 rounded-lg w-fit"
          >
            <FaGithub size={15} />
            Contribute
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
