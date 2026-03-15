import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold border-b-2 border-primary pb-1"
      : "text-gray-600 hover:text-primary transition";

  return (
    <div className="navbar bg-base-100 shadow-sm px-6 lg:px-12">
      {/* Left Side - Logo */}
      <div className="flex-1">
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Hero.io Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-bold text-primary">HERO.IO</span>
        </NavLink>
      </div>

      {/* Center - Navigation */}
      <div className="hidden md:flex gap-8">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        <NavLink to="/apps" className={navLinkClass}>
          Apps
        </NavLink>

        <NavLink to="/installation" className={navLinkClass}>
          Installation
        </NavLink>
      </div>

      {/* Right Side - Contribute Button */}
      <div>
        <a
          href="https://github.com/md-sazzadul"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm flex items-center gap-2"
        >
          <FaGithub size={16} />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Header;
