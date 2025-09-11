import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 px-6 py-12 text-gray-800">

      {/* Page Heading */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">

        {/* Frontend Skills */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Frontend</h2>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="bg-blue-100 px-4 py-2 rounded-full">HTML</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">CSS</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">TailwindCSS</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">Bootstrap</span>
            <span className="bg-blue-100 px-4 py-2 rounded-full">JavaScript</span>
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Backend</h2>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="bg-green-100 px-4 py-2 rounded-full">.NET Web API</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">.NET MVC</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">PHP</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">CakePHP</span>
            <span className="bg-green-100 px-4 py-2 rounded-full">Java</span>
          </div>
        </motion.div>

        {/* Database Skills */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Databases</h2>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="bg-purple-100 px-4 py-2 rounded-full">MySQL</span>
            <span className="bg-purple-100 px-4 py-2 rounded-full">SQL Server</span>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Other Skills</h2>
          <div className="flex flex-wrap gap-3 text-gray-700">
            <span className="bg-pink-100 px-4 py-2 rounded-full">Quick Learner</span>
            <span className="bg-pink-100 px-4 py-2 rounded-full">Problem Solving</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default Skills;
