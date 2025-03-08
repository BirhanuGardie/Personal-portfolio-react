import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.SVG";
import location_icon from "../../assets/location_icon.SVG";
import call_icon from "../../assets/call_icon.SVG";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce82fbfd-743a-4ceb-9692-87faa31b2834");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };



  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>let's talk</h1>
          <p>
            I'm available to take on new projects. so feel free to speak with me
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>birie16@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+251-910185606</p>
            </div>
            <div className="contact-detail">
               <img src={location_icon} alt="" /> <p>Southwest Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=""> Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write Your Message Here!</label>
          <textarea name="message" rows="8" placeholder="Enter your message here" ></textarea>
          <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
