import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faHtml5, faCss3, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

const About = () => {
   return (
      <main className="about" id="about">
         <section className="my-info-container">
            {/* About */}
            <h1>About Me</h1>
            <div className="about-area">
               <div className="about-left">
                  <h2>Who</h2>
                  <h2>What</h2>
                  <h2>When</h2>
                  <h2>Where</h2>
                  <h2>Why</h2>
               </div>
               <div className="about-middle">
                  <h2> // </h2>
                  <h2> // </h2>
                  <h2> // </h2>
                  <h2> // </h2>
                  <h2> // </h2>
               </div>
               <div className="about-right">
                  <h2>Matti Mäkelä</h2>
                  <h2>Web Developer</h2>
                  <h2>August 2020 -</h2>
                  <h2>Tampere</h2>
                  <h2><FontAwesomeIcon icon={faHeart}/></h2>
               </div>
            </div>
            <div className="white-line"></div>
         </section>
         <section className="my-skills-container">
            {/* Languages */}
            <h1>Languages</h1>
            <div className="about-area">
               <div className="about-left">
                  <h2>HTML 5</h2>
                  <h2>CSS 3</h2>
                  <h2>JS</h2>
                  <h2>React</h2>
                  <h2>Node.js</h2>
               </div>
               <div className="about-middle">
                  <h2> <FontAwesomeIcon style={{color: "#e34c26"}} icon={faHtml5}/> </h2>
                  <h2> <FontAwesomeIcon style={{color: "#264de4"}} icon={faCss3}/> </h2>
                  <h2> <FontAwesomeIcon style={{color: "#f0db4f"}} icon={faJsSquare}/> </h2>
                  <h2> <FontAwesomeIcon style={{color: "#61DBFB"}} icon={faReact}/> </h2>
                  <h2> <FontAwesomeIcon style={{color: "#68A063"}} icon={faNodeJs}/> </h2>
               </div>
               <div className="about-right">
                  <h2><FontAwesomeIcon icon={faThumbsUp}/></h2>
                  <h2><FontAwesomeIcon icon={faThumbsUp}/></h2>
                  <h2><FontAwesomeIcon icon={faThumbsUp}/></h2>
                  <h2><FontAwesomeIcon icon={faBookReader}/></h2>
                  <h2><FontAwesomeIcon icon={faBookReader}/></h2>
               </div>
            </div>
            <div className="white-line"></div>
         </section>
         <section className="my-personal-container">
            {/* Personal */}
            <h1>Personal</h1>
            <div className="personal-area">
               <p className="about-text">I'm 28 years old.</p>
               <p className="about-text">I love music, sports, games and challenges.</p>
               <p className="about-text">My native language is Finnish.</p>
               <p className="about-text">I'm really competitive person and constantly try to improve myself in everything I do. That said I'm still always friendly, positive and don't take things too seriously.</p>
               <p className="about-text">I have good communication skills and I work well by myself but also as a member of a team. As an example of good team working skills I have won four Finnish championship medals in team sport.</p>
            </div>
            <div className="white-line"></div>
         </section>
         <section className="my-summary-container">
            <h1>Why Coding?</h1>
            <div className="summary-area">
               <p className="summary-text">I love challenges, problem solving and I'm always eager to learn new things and to improve. I think these are big reasons why I enjoy coding so much. I started my coding career at freeCodeCamp in August from scratch and really fell in love with it. I started from HTML and things escalated pretty quickly from there. After I understood the theory parts of language I started to write code by following youtube tutorials. I always wrote all of the code myself and made sure I understood what things did so that I could apply them in my own projects in the future.</p>
            </div>
            <div className="white-line"></div>
         </section>
      </main>
   )
}

export default About
