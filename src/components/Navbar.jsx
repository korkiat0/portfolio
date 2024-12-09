import { useState } from "react";
//import DropDown from "./DropDown";
import logo from "../img/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="mb-6 lg:mb-20 flex items-center justify-between py-6 px-4 bg-gray-900 text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-20 h-auto mx-2" src={logo} alt="logo" />
      </div>

      {/* Links & Social Icons */}
      <div className="flex items-center justify-between gap-4 text-2xl lg:gap-8">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-700 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
