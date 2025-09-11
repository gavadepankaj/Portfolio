import React from "react"; 
import {motion} from 'framer-motion';

function About(){
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen       bg-gradient-to-br from-white to-sky-100 px-6 text-center">
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-sky-100 px-6 text-center"> */}

            <motion.h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                                initial={{opacity:0,y:-20}}
                                animate={{opacity:1,y:0}}
                                transition={{duration:0.6}}
                                >
                About Me
            </motion.h1>
            <motion.h2 className="text-xl text-gray-600 mb-6"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{delay:0.3,duration:0.6}} >
                Passion. Purpose. Progress.
            </motion.h2>

            <motion.p className="max-w-4xl text-gray-700 leading-relaxed mb-8"
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{delay:0.5, duration:0.6}} >
                Hello! I'm Pankaj Gavade, a Full Stack Developer with a strong technical foundation.
                I’m passionate about learning new technologies, building scalable applications, and enhancing user experiences. 
                Currently, I’m working with DreamWings Solutions on a school management system, where I handle both front-end and back-end development, utilizing technologies like React.js, CakePHP, and .NET Web API.
            </motion.p>

            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-6xl"
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{delay:0.7, duration:0.6}} >
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold">Hobbies</h3>
                    <p className="text-gray-600">In my free time, I enjoy learning new technologies, experimenting with creative coding challenges, and working on personal projects.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold">Personal Achievements</h3>
                    <p className="text-gray-600">I’ve earned certification in Core Java from Fuel Institute, Pune. I continuously strive to improve my skills through self-learning and professional development.</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-lg font-semibold">Future Goals</h3>
                    <p className="text-gray-600">My goal is to grow in the tech industry, focusing on full-stack development, contributing to open-source projects, and exploring new ways to innovate and solve problems in tech.</p>
                </div>
            </motion.div>

        </div>
        </>
    );
}

export default About;
