import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faFrown } from '@fortawesome/free-regular-svg-icons';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xwkwgenq"
        method="POST"
        className="form-container"
      >
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
        {status === "SUCCESS" ? <p>Thanks, I'll get back to you! <FontAwesomeIcon icon={faSmileBeam}/></p> : <button>Send</button>}
        {status === "ERROR" && <p>Ooops! There was an error <FontAwesomeIcon icon={faFrown}/> <br/> Check that your email is valid</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}