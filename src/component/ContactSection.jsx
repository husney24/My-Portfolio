// ContactSection.js
import React from 'react';
import './ContactSection.css'; 
import img1 from './images/img1.png'


const ContactSection = () => {
  return (
    <section className="contact-section" id='contact'>
      <div className="contact-image">
        <img src={img1} alt="Contact" />
      </div>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
        Feel free to reach out to me for any inquiries or collaborations. I'm always excited to connect with fellow developers, clients, and anyone interested in the world of technology and web development.
        </p>
        {/* <p>Email: contact@example.com</p>
        <p>Phone: +1 123-456-7890</p> */}
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input placeholder='Full Name' type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input placeholder='E-mail' type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea placeholder='Send Message' id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
