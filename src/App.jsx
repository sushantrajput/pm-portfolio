import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education'; // Added Education import

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans selection:bg-lightBlue selection:text-white">
      <Navbar />
      {/* Expanded max-width from 5xl to 7xl to reduce empty space on the sides */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Education />
      </main>
    </div>
  );
}