import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06283D] text-white mt-16 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #632EE3, transparent)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #9F62F2, transparent)",
          transform: "translate(40%, 40%)",
        }}
      />

      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <MdOutlineRocketLaunch className="text-purple-400" size={28} />
              Ready to build something amazing?
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              Join millions of users who trust HERO.IO for their productivity
              needs.
            </p>
          </div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #632EE3, #9F62F2)" }}
          >
            Get Started Free
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <img src={logo} alt="Hero.io" className="h-9 w-auto" />
              <span className="text-lg font-bold tracking-wide">HERO.IO</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting innovative apps that make everyday life simpler, smarter,
              and more exciting.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              {[
                {
                  icon: <FaTwitter size={15} />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  icon: <FaLinkedin size={15} />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub size={15} />,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: <FaDiscord size={15} />,
                  href: "https://discord.com",
                  label: "Discord",
                },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-purple-300 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                "Trending Apps",
                "New Releases",
                "Top Rated",
                "Editor's Choice",
                "Free Apps",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/apps"
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-purple-300 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {[
                { label: "About Us", to: "/" },
                { label: "Careers", to: "/" },
                { label: "Blog", to: "/" },
                { label: "Press Kit", to: "/" },
                { label: "Installation", to: "/installation" },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-purple-300 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest app releases and news delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #632EE3, #9F62F2)",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {currentYear} HERO.IO — All rights reserved.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
