import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Home() {


  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-sky-100 to-white'>
        <motion.h1 className='text-4xl md:text-6xl font-bold mb-4 text-gray-800'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          Hi, I'm Pankaj Gavade
        </motion.h1>
        <motion.h2 className='text-xl md:text-2xl text-gray-600 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          A Passionate Fullstack Developer
        </motion.h2>
        <motion.p className='max-w-xl text-gray-500 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}>

          I build modern, responsive web apps with React, Tailwind, and other awesome tools. Let's bring your ideas to life.
        </motion.p>

        <motion.div className='flex gap-4 mb-6'
                              initial={{opacity:0}}
                              animate={{opacity:1}}
                              transition={{delay:0.8, duration:0.6}}>
          <a href='https://github.com/gavadepankaj' target='_blank' rel='noreferrer'>
            <FaGithub size={30} className='text-gray-800 hover:text-black'/>
          </a>

          <a href='https://www.linkedin.com/in/pankaj-gavade-ab4bb425b/' target='_blank' rel='noreferrer'>
            <FaLinkedin size={30} className='text-blue-600 hover:text-blue-800'/>
          </a>
         
          <a href='https://www.youtube.com/@CodeAndBeyondYT' target='_blank' rel='noreferrer'>
            <FaYoutube size={30} className='text-red-600 hover:text-red-800' />
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
