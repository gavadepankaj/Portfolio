import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 px-6 py-12 text-gray-800">
      
      {/* Heading */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 space-y-4"
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            Send
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center space-y-6"
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700">Follow Me</h2>
          <div className="flex space-x-6 text-3xl text-gray-600">
            <a href="https://github.com/gavadepankaj" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pankaj-gavade-ab4bb425b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@CodeAndBeyondYT" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;



