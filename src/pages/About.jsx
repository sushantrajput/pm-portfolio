import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-lightBlue pl-4">About Me</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl">
          I am a results-driven Technical Product Manager with a strong foundation in software engineering. 
          I excel at bridging the gap between cross-functional engineering teams and enterprise client needs, 
          ensuring scalable architecture meets actionable business objectives.
        </p>
        
        <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lightBlue transition-colors">
            <h4 className="text-xl text-lightBlue font-bold mb-4">Product & Data</h4>
            <p className="text-gray-300 leading-relaxed">Jira, Confluence, PRDs, Agile/Scrum, Business Rules Formulation, B2B Roadmapping, Data Quality Monitoring</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lightBlue transition-colors">
            <h4 className="text-xl text-lightBlue font-bold mb-4">Engineering & AI</h4>
            <p className="text-gray-300 leading-relaxed">PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Generative AI (ChatGPT, Perplexity), React.js, Python</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}