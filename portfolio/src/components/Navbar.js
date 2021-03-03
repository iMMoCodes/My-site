import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
   return (
      <nav>
         <div className="logo-container">
            <a target="_blank" rel="github-link" href="https://github.com/iMMoCodes"><FontAwesomeIcon className="github-icon" icon={ faGithub }/></a>
            <h1>Github</h1>
         </div>
         <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
         <FontAwesomeIcon className="nav-button" icon={faBars} />
      </nav>
   )
}

export default Navbar
