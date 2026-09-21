import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1, 
      title: 'Devtron', 
      tagline: 'AI-Native DevOps Ecosystem & MCP Orchestration',
      image: '/devtron.jpg', 
      pdfLink: '/devtron.pdf'
    },
    {
      id: 2, 
      title: 'Uber', 
      tagline: 'Marketplace Equilibrium & Surge Pricing Analysis',
      image: '/uber.jpg',
      pdfLink: '/uber.pdf'
    },
    {
      id: 3, 
      title: 'DocuSign', 
      tagline: 'Enterprise Workflow Automation & Generative AI',
      image: '/docusign.jpg',
      pdfLink: '/docusign.pdf'
    },
    {
      id: 4, 
      title: 'Tinder', 
      tagline: 'Algorithmic Match Quality & Monetization',
      image: '/tinder.jpg',
      pdfLink: '/tinder.pdf'
    }
  ];

  return (
    <section id="projects" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-lightBlue pl-4">Case Studies</h2>
        
        {/* Added max-w-5xl to prevent the cards from stretching too wide on large screens */}
        <div className="max-w-5xl mx-auto w-full">
          {/* Reduced gap from gap-8 to gap-6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.pdfLink}
                target="_blank"
                rel="noreferrer"
                /* Changed bg-cardBg to bg-gray-800 and reduced padding from p-5 to p-4 */
                className="bg-gray-800 p-4 rounded-2xl border border-gray-700/50 shadow-lg flex flex-col cursor-pointer hover:border-lightBlue hover:shadow-[0_0_15px_rgba(125,211,252,0.15)] transition-all group block no-underline"
              >
                {/* Reduced image height from h-48 to h-40 */}
                <div className="w-full h-40 bg-gray-900 rounded-lg mb-4 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-lightBlue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-2 flex-grow">{project.tagline}</p>
                
                <div className="mt-3 pt-3 border-t border-gray-700/50 text-lightBlue text-sm font-semibold flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
                  Read Full Case Study <span className="ml-2">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}