import React from "react";
import "./Project.css";
const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website built using React",
        image: process.env.PUBLIC_URL+"/images/portfolio.png",
        link: "https://gavadepankaj.github.io/Portfolio",
    },
    {
        id: 2,
        title: "E-Commerce Website",
        description: "An online shopping platform using React and Node.js.",
        image: "https://via.placeholder.com/150",
        link: "https://yourshop.com",
    },
    {
        id: 3,
        title: "Task Manager",
        description: "A task management app built with React and Firebase.",
        image: "https://via.placeholder.com/150",
        link: "https://yourtasks.com",
    },
];

function Projects() {

    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-container">
                {projects.map((project)=>(
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title}/>
                        <h3> {project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferre">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;