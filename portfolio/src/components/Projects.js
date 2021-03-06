import React, { useState } from 'react'


import recipeImage from "../assets/img/recipe.png";
import shoppingImage from "../assets/img/shopping.png";
import ticTacToeImage from "../assets/img/game.png";

import { info } from "../constants/project-info"; 

const Projects = () => {

   const {titleOne,titleTwo,titleThree,descOne,descTwo,descThree,liveLinkOne,liveLinkTwo,liveLinkThree,gitHubOne,gitHubTwo,gitHubThree,html,css,js,react} = info;

   const [title, setTitle] = useState(titleOne);
   const [description, setDescription] = useState(descOne);
   const [stackOne, setStackOne] = useState(react);
   const [stackTwo, setStackTwo] = useState(css);
   const [stackThree, setStackThree] = useState(js);
   const [projectImg, setProjectImg] = useState(recipeImage);
   const [liveLink, setLiveLink] = useState(liveLinkOne);
   const [gitHubLink, setGitHubLink] = useState(gitHubOne);

   const handleProjectOne = () => {
      setTitle(titleOne);
      setDescription(descOne);
      setStackOne(react);
      setStackTwo(css);
      setStackThree(js);
      setProjectImg(recipeImage);
      setLiveLink(liveLinkOne);
      setGitHubLink(gitHubOne);
   }

   const handleProjectTwo = () => {
      setTitle(titleTwo);
      setDescription(descTwo);
      setStackOne(html);
      setStackTwo(css);
      setStackThree(js);
      setProjectImg(shoppingImage);
      setLiveLink(liveLinkTwo);
      setGitHubLink(gitHubTwo);
   }
   const handleProjectThree = () => {
      setTitle(titleThree);
      setDescription(descThree);
      setStackOne(html);
      setStackTwo(css);
      setStackThree(js);
      setProjectImg(ticTacToeImage);
      setLiveLink(liveLinkThree);
      setGitHubLink(gitHubThree);
   }

   return (
      <main className="projects" id="projects">
         <h1>Projects</h1>
         <div className="project-choice">
            <button onClick={handleProjectOne}>{titleOne}</button>
            <button onClick={handleProjectTwo}>{titleTwo}</button>
            <button onClick={handleProjectThree}>{titleThree}</button>
         </div>
         <section className="project-container">
            <div className="project-text-area">
               <h2>{title}</h2>
               <h3>{description}</h3>
               <div className="project-info">
                  <div className="project-learned">
                     <h3>What I learned</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem provident cumque assumenda sit consequatur eligendi modi architecto iste quidem eum ab nostrum dolore asperiores, fugit quam, inventore quibusdam soluta nulla?</p>
                  </div>
                     <div className="project-stack">
                        <h3>Stacks used</h3>
                        <ul>
                           <li>{stackOne}</li>
                           <li>{stackTwo}</li>
                           <li>{stackThree}</li>
                        </ul>
                     </div>
               </div>
               <div className="project-buttons">
                  <a target="_blank" rel="external" href={liveLink}>View Live</a>
                  <a target="_blank" rel="external" href={gitHubLink}>View Code</a>
               </div>
            </div>
            <div className="project-img-area">
               <img className="project-img" src={projectImg} alt="project image"/>
            </div>
         </section>
      </main>
   )
}

export default Projects
