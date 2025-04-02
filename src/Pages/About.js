import React  from "react";
import './About.css';

function About(){
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src="my-profile.jpg" alt="Pankaj Gavade" className="profile-pic"/>
            <p>Hello! I am <strong>Pankaj Gavade </strong>, a passionate web developer.</p>
            <p>I specialize in React.js, Javascript, and frontend Development.</p>
            <p>Feel free to check out my projects and contact me!</p>
        </div>
    );
}

export default About;