import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center gap-8 ">
        {/* Logo */}
        <h1 className="text-2xl font-bold gap-10">
          <Link to="/">Brand</Link>
        </h1>

        {/* Menu Icon (Visible only on mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:gap-8 absolute md:static bg-gray-800 md:bg-transparent w-full left-0 transition-all duration-300 ${
            isOpen ? "top-16" : "top-[-400px]"
          } md:top-0 md:flex-row flex flex-col items-center gap-6 py-5 md:py-0 md:h-auto h-screen`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-400 text-xl">Home</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-yellow-400 text-xl">About</Link>
          </li>
          <li>
            <Link to="/Blogs" className="hover:text-yellow-400 text-xl">Blogs</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-yellow-400 text-xl">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
