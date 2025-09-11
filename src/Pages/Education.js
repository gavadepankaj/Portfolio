import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 px-6 py-12 text-gray-800">

      {/* Page Title */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* MCA */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-700">
            Master of Computer Application (MCA) – <span className="text-gray-800 font-medium">CGPA: 8.34 / 10</span>
          </h2>
          <p className="text-gray-700">VP Institute of Management Studies and Research, Sangli</p>
          <p className="text-sm text-gray-500 mt-1">Nov 2022 - May 2024</p>
        </motion.div>

        {/* BCS */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-700">
            Bachelor of Computer Science (BCS) – <span className="text-gray-800 font-medium">CGPA: 8.53 / 10</span>
          </h2>
          <p className="text-gray-700">Jaysingpur College, Jaysingpur</p>
          <p className="text-sm text-gray-500 mt-1">July 2019 - Feb 2022</p>
        </motion.div>

        {/* HSC */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-700">
            HSC – <span className="text-gray-800 font-medium">54.15%</span>
          </h2>
          <p className="text-gray-700">Shri. Padmaraje Jr College, Shirol</p>
          <p className="text-sm text-gray-500 mt-1">2019</p>
        </motion.div>

        {/* SSC */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-blue-700">
            SSC – <span className="text-gray-800 font-medium">75.00%</span>
          </h2>
          <p className="text-gray-700">Janata HighSchool and Junior College, Shirol</p>
          <p className="text-sm text-gray-500 mt-1">2017</p>
        </motion.div>

      </div>
    </div>
  );
}

export default Education;
