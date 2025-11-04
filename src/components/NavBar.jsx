import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons (install via: npm i lucide-react)

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/" },
    { name: "Mission", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F5132]/90 backdrop-blur-md z-50 border-b border-[#D4AF37]/40 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/Logo.jpg"
            alt="ISWPL logo"
            className="w-10 h-10 rounded"
          />
          <div>
            <h1 className="text-lg font-bold text-[#D4AF37]">ISWPL</h1>
            <p className="text-xs text-gray-300">
              Indian Single Wicket Premier League
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`cursor-pointer hover:text-[#D4AF37] transition-all hover:scale-105 ${
                location.pathname === item.path ? "text-[#D4AF37]" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
          target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSflfWpeDkdXvWiQS4JYEhQfFdD0Qags4FP9yNK60PBlkjO6JQ/viewform"
            className="px-5 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-black font-semibold shadow-md hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D4AF37] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-4 bg-[#0F5132]/95 text-white text-sm font-medium py-4 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`cursor-pointer hover:text-[#D4AF37] transition-all ${
              location.pathname === item.path ? "text-[#D4AF37]" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        <a
          href="/#contact"
          onClick={() => setIsMenuOpen(false)}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-400 text-black font-semibold shadow-md hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
