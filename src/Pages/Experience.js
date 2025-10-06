import React from 'react';
import { motion } from 'framer-motion';
// import './Experience.css';


function Experience() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 px-6 py-12 text-gray-800">
        <motion.h1 className='text-4xl font-bold text-center mb-10'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h1>

        <motion.div className='bg-white rounded-xl shadow-lg p-6 mb-10 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}>

          <h2 className='text-2xl font-semibold text-blue-700'> Dreamwings Solutions Pvt. Ltd., Jaysingpur</h2>
          <p className='text-sm text-gray-500 mb-2'>Full-Stack Developer | Oct 2024 - Present</p>
          {/* hoppu */}
          <div className='mb-4'>
            <h3 className='font-bold text-lg'>Hoppu (formerly known as MS Card)</h3>
            <ul className='list-disc list-inside text-gray-700 mt-1'>
              <li>Designed and tested backend APIs using <span className='font-medium'>.NET Web API</span> and <span className='font-medium'>.NET MVC</span>.</li>
              <li>Used <span className='font-medium'>SQL Server </span>for database design and operations.</li>
              <li>Tested APIs using <span className='font-medium'>Swagger </span>for testing or debugging.</li>
            </ul>
          </div>

          {/* school mgt */}
          <div>
            <h3 className='font-bold text-lg'>School Management System</h3>
            <ul className='list-disc list-inside text-gray-700 mt-1'>
              <li>Built using <span className='font-medium'>HTML, CSS, JavaScript, AJAX, CakePHP, Bootstrap </span>and <span className='font-medium'>MySQL </span> as a database.</li>
              <li>Later transitioned to <span className='font-medium'>.NET Web API </span>with <span className='font-medium'>SQL Server </span>and <span className='font-medium'>Swagger</span>.</li>
              <li>Integrated <span className='font-medium'>React.js </span>for dynamic, responsive front-end development.</li>
              <li>Implemented <span className='font-medium'>Clean Architecture </span>and <span className='font-medium'>SOLID </span>principles for scalability and maintainability.</li>
              <li>Led the team in project execution, client communication, and deployment.</li>
            </ul>
          </div>
        </motion.div>

        {/* Quantbit */}
        <motion.div className='bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className='text-2xl font-semibold text-blue-700'>Quantbit Technologies Pvt. Ltd., Sangli</h2>
          <p className='text-sm text-gray-500 mb-2'>Web Developer Intern | Aug 2022 - Sep 2023</p>
          <h3 className='font-bold text-lg'>Change Management System</h3>
          <ul className='list-disc list-inside text-gray-700 mt-1'>
            <li>Developed using the <span className='font-medium'>Frappe framework.</span></li>
            <li>Contributed to improving system functionality and user experience in web projects.</li>
            <li>Also Contributed in <span className="font-medium">website development</span>.</li>

          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Experience;
