import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Devtron Inc',
      role: 'Technical Product Intern',
      date: 'March 2026 - Present',
      location: 'Gurugram, India',
      type: 'Internship',
      logo: '/devtron-logo.png' // Place this image in your public folder
    },
    {
      id: 2,
      company: 'Synapse Technologies',
      role: 'Software Development Engineer Intern',
      date: 'July 2024 - Dec 2024',
      location: 'Indore, India',
      type: 'Internship',
      logo: '/synapse-logo.png' // Place this image in your public folder
    }
  ];

  return (
    <section id="experience" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-lightBlue pl-4">Work Experience</h2>
        
        <div className="bg-gray-800 rounded-2xl border border-gray-700/50 shadow-lg p-6 md:p-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`flex gap-5 md:gap-6 ${index !== experiences.length - 1 ? 'border-b border-gray-700/50 pb-8 mb-8' : ''}`}>
              
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-600 p-1">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <h4 className="text-base text-gray-300 font-medium mb-1">{exp.company}</h4>
                <div className="text-sm text-gray-400">
                  {exp.date}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">
                  {exp.location} • {exp.type}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}