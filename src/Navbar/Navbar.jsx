import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="w-full  shadow-md fixed top-0 left-0 z-50">
      <div className=" bg-green mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h3 className="text-pink-800 font-bold bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 via-cyan-300 to-blue-400">Akshya</h3>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 font-medium bg-clip-text text-transparent bg-gradient-to-b from-emerald-200 via-cyan-300 to-blue-400">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;