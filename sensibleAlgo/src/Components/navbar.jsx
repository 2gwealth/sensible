import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Sensible Algo
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-x-10">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
            
          </div>

          {/* Login Button */}
          <div className="hidden md:block gap-x-2">
            <a 
              href="/get-started" 
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
           
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Pricing</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>About</a>
            <a 
              href="/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={toggleMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
