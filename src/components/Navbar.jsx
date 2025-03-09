import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-around items-center h-[17vh]">
        <div className="text-2xl font-bold">John Doe</div>
        <ul className="flex gap-8 text-xl">
          <li>
            <a href="#about" className="hover:text-gray-500 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-500 hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-500 hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Hamburger Navigation */}
      <nav className="flex lg:hidden justify-between items-center p-4">
        <div className="text-2xl font-bold">John Doe</div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between h-6 w-8"
          >
            <span
              className={`block h-0.5 bg-black transition-transform ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black transition-opacity ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-black transition-transform ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
          <ul
            className={`absolute right-0 bg-white transition-all overflow-hidden ${
              menuOpen ? 'max-h-60' : 'max-h-0'
            }`}
          >
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block p-2 text-xl"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="block p-2 text-xl"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block p-2 text-xl"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block p-2 text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
