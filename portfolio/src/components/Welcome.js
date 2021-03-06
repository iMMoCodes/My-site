import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';

const Welcome = () => {
   return (
      <main className="welcome" id="welcome">
         <div className="animation-area">
            <div className="welcome-one animate-one">
               <span>M</span>
               <span>a</span>
               <span>t</span>
               <span>t</span>
               <span>i</span>
               <span>M</span>
               <span>ä</span>
               <span>k</span>
               <span>e</span>
               <span>l</span>
               <span>ä</span>
            </div>
            <div className="welcome-two animate-two">
               <span>W</span>
               <span>e</span>
               <span>b</span>
               <span>D</span>
               <span>e</span>
               <span>v</span>
               <span>e</span>
               <span>l</span>
               <span>o</span>
               <span>p</span>
               <span>e</span>
               <span>r</span>
            </div>
            <a href="#about"><FontAwesomeIcon className="hand-icon" icon={faHandPointDown} /></a>
         </div>
      </main>
   )
}

export default Welcome
