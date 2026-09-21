import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      id: 1,
      institution: 'Vellore Institute of Technology',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      date: '2022 - 2026',
      location: 'Vellore, India',
      details: 'CGPA: 8.13',
      logo: '/vit-logo.png' // Place this image in your public folder
    }
  ];

  return (
    <section id="education" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-lightBlue pl-4">Education</h2>
        
        <div className="bg-gray-800 rounded-2xl border border-gray-700/50 shadow-lg p-6 md:p-10">
          {education.map((edu, index) => (
            <div key={edu.id} className="flex gap-5 md:gap-6">
              
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-600 p-1">
                  <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <h4 className="text-base text-gray-300 font-medium mb-1">{edu.institution}</h4>
                <div className="text-sm text-gray-400">
                  {edu.date}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">
                  {edu.location} • {edu.details}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}