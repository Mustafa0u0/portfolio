import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 px-4">
      <nav className="mb-4">
        <ul className="flex justify-center gap-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-center">Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
