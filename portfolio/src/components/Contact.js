import React from 'react'

import backgroundVideo from "../assets/video/background.mp4";
import backgroundPoster from "../assets/img/poster.jpg"

const Contact = () => {
   return (
      <main className="contact" id="contact">
         <section className="contact-left">
            <h1>Contact</h1>
            <form className="form-container">
               {/* Name */}
               <div className="form">
                  <input type="text" name="name" autoComplete="off" required/>
                  <label className="contact-label">
                     <span className="contact-span">Name</span>
                  </label>
               </div>
               {/* Email */}
               <div className="form">
                  <input type="name" name="email" autoComplete="off" required/>
                  <label className="contact-label">
                     <span className="contact-span">Email</span>
                  </label>
               </div>
               {/* Message */}
               <div className="form-message">
                  <textarea type="text" name="message" autoComplete="off" required rows="8" cols="30"/>
                  <label className="contact-message">
                     <span className="contact-message-span">Message</span>
                  </label>
               </div>
               {/* Submit Button */}
               <button>Send</button>
            </form>
         </section>
      </main>
   )
}

export default Contact

