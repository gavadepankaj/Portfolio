import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <ul className="flex justify-center space-x-6">
                <li><Link to="/" className="hover:text-yellow-400 font-medium">Home</Link></li>
                <li><Link to="/experience" className="hover:text-yellow-400 font-medium">Experience</Link></li>
                <li><Link to="/skills" className="hover:text-yellow-400 font-medium">Skills</Link></li>

                {/* <li><Link to="/projects" className="hover:text-yellow-400 font-medium">Projects</Link></li> */}
                <li><Link to="/education" className="hover:text-yellow-400 font-medium">Education</Link></li>
                <li><Link to="/about" className="hover:text-yellow-400 font-medium">Abouts</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-400 font-medium">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;