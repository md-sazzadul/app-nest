import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-medium underline underline-offset-4 decoration-2"
      : "text-gray-700 hover:text-primary transition-colors";

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-14 flex items-center relative">
        {/* LEFT — Logo */}
        <div className="flex-1 flex items-center">
          <NavLink to="/" className="flex items-center gap-1.5">
            <img
              src={logo}
              alt="Hero.io Logo"
              className="h-7 w-auto object-contain"
            />
            <span className="text-sm font-bold text-primary tracking-wider">
              HERO.IO
            </span>
          </NavLink>
        </div>

        {/* CENTER — Nav links, absolutely centered */}
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

        {/* RIGHT — Contribute button */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://github.com/md-sazzadul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <FaGithub size={15} />
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
