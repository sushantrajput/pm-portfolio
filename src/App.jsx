import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Development from './pages/Development'; // New import
import Experience from './pages/Experience';
import Education from './pages/Education';

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans selection:bg-lightBlue selection:text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        <Home />
        <About />
        <Projects />
        <Development /> {/* New section added here */}
        <Experience />
        <Education />
      </main>
    </div>
  );
}