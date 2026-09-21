import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1, 
      title: 'Devtron', 
      tagline: 'AI-Native DevOps Ecosystem',
      image: '/devtron.jpg', 
      pdfLink: '/devtron.pdf'
    },
    {
      id: 2, 
      title: 'Uber', 
      tagline: 'Marketplace Equilibrium',
      image: '/uber.jpg',
      pdfLink: '/uber.pdf'
    },
    {
      id: 3, 
      title: 'DocuSign', 
      tagline: 'Enterprise Workflow Automation',
      image: '/docusign.jpg',
      pdfLink: '/docusign.pdf'
    },
    {
      id: 4, 
      title: 'Tinder', 
      tagline: 'Match Quality & Monetization',
      image: '/tinder.jpg',
      pdfLink: '/tinder.pdf'
    }
  ];

  return (
    <section id="projects" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-lightBlue pl-4">Case Studies</h2>
        
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.pdfLink}
                target="_blank"
                rel="noreferrer"
                /* Set a fixed height (h-64) and made the card a relative container */
                className="relative block h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-700/50 hover:border-lightBlue hover:shadow-[0_0_15px_rgba(125,211,252,0.3)] transition-all no-underline"
              >
                {/* Image takes up the full width and height of the box */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Dark gradient overlay so the white text is readable on top of the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent group-hover:via-gray-900/60 transition-colors duration-500"></div>
                
                {/* Text Content pinned to the bottom of the box using z-index */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lightBlue transition-colors flex items-center flex-wrap gap-2">
                    {project.title} 
                    <span className="text-sm font-normal text-gray-300 border-l border-gray-500 pl-2">{project.tagline}</span>
                  </h3>
                  
                  <div className="mt-2 pt-3 border-t border-gray-500/50 text-lightBlue text-sm font-semibold flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
                    Read Full Case Study <span className="ml-2">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}