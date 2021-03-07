import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';

const Joke = () => {
   // States
   const [questionText,setQuestionText] = useState("Click to get a joke to brighten your day");
   const [progJoke,setProgJoke] = useState("");
   const [jokePartOne,setJokePartOne] = useState("");
   const [jokePartTwo,setJokePartTwo] = useState("");
   // Handle Click
   const handleJoke = () => {
      getJoke();
      setQuestionText("Get me an another one !");
   }
   // Fetch Joke
   const getJoke = async () => {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit");
      const data = await response.json();
      if(data.type === "twopart") {
         setJokePartOne(data.setup);
         setJokePartTwo(data.delivery);
         setProgJoke("");
      } else {
      setProgJoke(data.joke)
      setJokePartOne("");
      setJokePartTwo("");
      }
   }

   return (
      <div className="joke">
         <div className="joke-button">
         <button onClick={handleJoke}>{questionText} <FontAwesomeIcon icon={faSmileBeam}/></button>
         </div>
         <p>{progJoke}</p>
         <p>{jokePartOne}</p>
         <p>{jokePartTwo}</p>
      </div>
   )
}

export default Joke