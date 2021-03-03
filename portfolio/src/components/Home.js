import React from 'react'

import backgroundVideo from "../assets/video/background.mp4";
import backgroundPoster from "../assets/img/poster.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
   return (
      <main className="home" id="home">
         <section className="home-container">
            <video autoPlay poster={backgroundPoster} loop muted className="video-bg">
               {/* <source src={backgroundVideo} type="video/mp4" /> */}
            </video>
            <div classname="my-info">
               <h1>Matti Mäkelä</h1>
               <h2>Web Developer</h2>
            </div>
            <div className="hand-icon-container">
               <a href="#about"><FontAwesomeIcon className="hand-icon" icon={faHandPointDown} /></a>
            </div>
         </section>
      </main>
   )
}

export default Home
