import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Welcom to My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/contact">Contact</Link> |
                <Link to="/experience">Experience</Link> |
                <Link to="/projects">Projects</Link>
            </nav>
        </div>
    );
}

export default Home;