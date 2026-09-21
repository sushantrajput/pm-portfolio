import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-2 text-white">
            Hi, I'm <span className="text-lightBlue">Sushant</span>
          </h1>
          <h2 className="text-3xl text-gray-400 mb-4 font-semibold">
            Technical Product Manager
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Translating complex technical constraints into actionable product roadmaps. Specializing in data-centric B2B SaaS solutions and Generative AI workflows.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="mailto:skrajsushant698@gmail.com" className="flex items-center gap-2 bg-lightBlue hover:bg-blue-400 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors">
              <Mail size={20} /> Email Me
            </a>
            <a href="https://linkedin.com/in/sushant9692" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
              <FileText size={20} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-lightBlue overflow-hidden bg-gray-800 shadow-[0_0_40px_rgba(125,211,252,0.3)]">
            <img src="/profile.jpg" alt="Sushant Kumar" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}