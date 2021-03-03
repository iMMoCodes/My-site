import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
   return (
      <nav>
         <div className="logo-container">
            <a target="_blank" href="https://github.com/iMMoCodes"><FontAwesomeIcon className="github-icon" icon={ faGithub }/></a>
            <h1>Github</h1>
         </div>
         <div className="nav-list-container">
            <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a>Projects</a></li>
               <li><a>Contact</a></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar
