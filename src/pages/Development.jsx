import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function Development() {
  const [selectedApp, setSelectedApp] = useState(null);

  const apps = [
    {
      id: 1, 
      title: 'LabMate', 
      tagline: 'Smart Medical Scheduling Platform',
      image: '/labmate.png', 
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Razorpay', 'Stripe'],
      why: 'I built LabMate to streamline fragmented clinic operations and simplify the patient booking experience. By engineering a secure, multi-tenant MERN architecture with integrated payment gateways, I wanted to demonstrate how technical solutions can directly solve administrative bottlenecks in healthcare and improve the patient-doctor ecosystem.',
      github: 'https://github.com/sushantrajput/labmate',
      live: 'https://lab-mate-amber.vercel.app/'
    },
    {
      id: 2, 
      title: 'Weather VertoFX', 
      tagline: 'Real-Time Weather, Visually Reimagined',
      image: '/weather.png', 
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      why: 'I developed Weather VertoFX to transform dense, raw meteorological API data into an elegant, highly intuitive user dashboard. The core focus was mastering modern front-end state management, asynchronous data fetching, and delivering a flawless, responsive user experience that immediately answers the user\'s primary intent.',
      github: 'https://github.com/sushantrajput/weather-vertofx',
      live: 'https://weather-vertofx.vercel.app/'
    }
  ];

  return (
    <section id="development" className="py-16 flex flex-col justify-center border-t border-gray-800">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-lightBlue pl-4">Engineering Projects</h2>
        
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className="relative block h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-700/50 hover:border-lightBlue hover:shadow-[0_0_15px_rgba(125,211,252,0.3)] transition-all"
              >
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-gray-900" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent group-hover:via-gray-900/60 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lightBlue transition-colors flex items-center flex-wrap gap-2">
                    {app.title} 
                    <span className="text-sm font-normal text-gray-300 border-l border-gray-500 pl-2">{app.tagline}</span>
                  </h3>
                  
                  <div className="mt-2 pt-3 border-t border-gray-500/50 text-lightBlue text-sm font-semibold flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
                    View Project Details <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedApp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 border border-gray-600 p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl custom-scrollbar"
              >
                <button 
                  onClick={() => setSelectedApp(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-gray-700 hover:bg-gray-600 p-2 rounded-full shadow-lg"
                >
                  <X size={20} />
                </button>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 pr-12">{selectedApp.title}</h3>
                <h4 className="text-lg text-lightBlue mb-6 font-semibold">{selectedApp.tagline}</h4>
                
                <div className="mb-8">
                  <h5 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-3">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-900 border border-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-3">Why I Built It</h5>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedApp.why}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                  <a 
                    href={selectedApp.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-lightBlue hover:bg-blue-400 text-gray-900 px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <ExternalLink size={20} /> Live Preview
                  </a>
                  <a 
                    href={selectedApp.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-900 border border-gray-600 hover:border-lightBlue text-white px-6 py-3 rounded-lg font-bold transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Source Code
                  </a>
                </div>
                
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}