import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.SVG";
import mail_icon from "../../assets/mail_icon.SVG";
import location_icon from "../../assets/location_icon.SVG";
import call_icon from "../../assets/call_icon.SVG";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
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
        <form className="contact-right">
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
