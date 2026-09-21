import React from 'react';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Case Studies', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      {/* Expanded max-width here as well */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-lightBlue">Sushant.</a>
        <div className="flex gap-6">
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
      </div>
    </nav>
  );
}