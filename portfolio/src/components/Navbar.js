import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {

   const handleMenu = () => {
      const smallMenuList = document.getElementById("menu-button");
      if(smallMenuList.style.display === "none") {
         smallMenuList.style.display = "flex";
      } else {
         smallMenuList.style.display = "none";
      }
   }

   return (
      <>
      <nav>
         <div className="logo-container">
            <a target="_blank" rel="github-link" href="https://github.com/iMMoCodes"><FontAwesomeIcon className="github-icon" icon={ faGithub }/></a>
            <h1>Github</h1>
         </div>
         <ul>
            <li><a href="#welcome">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
         </ul>
         <FontAwesomeIcon className="nav-button" onClick={handleMenu} icon={faBars} />
      </nav>
      <div className="nav-button-container">
         <ul className="nav-button-list" id="menu-button">
            <li><a onClick={handleMenu} href="#welcome">Home</a></li>
            <li><a onClick={handleMenu} href="#about">About</a></li>
            <li><a onClick={handleMenu} href="#projects">Projects</a></li>
            <li><a onClick={handleMenu} href="#contact">Contact</a></li>
         </ul>
         </div>
      </>
   )
}

export default Navbar
