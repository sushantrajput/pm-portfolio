import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Case Studies', path: '#projects' },
    { name: 'Engineering', path: '#development' }, // Added new link
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-lightBlue">Sushant.</a>
        
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className="font-semibold text-gray-300 hover:text-lightBlue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700 shadow-xl absolute w-full left-0 top-full">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="font-semibold text-gray-300 hover:text-lightBlue transition-colors text-lg"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}