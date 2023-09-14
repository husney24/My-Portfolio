import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
    <a href="https://github.com/husney24" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='icons' icon={faGithub} />
  </a>
  <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='icons' icon={faFacebook} />
  </a>
  <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='icons' icon={faTwitter} />
  </a>
  <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className='icons' icon={faInstagram} />
  </a>
      </div>
      <a href="./"><FontAwesomeIcon icon={faHome} /></a>
      <p className="footer-text">&copy; {new Date().getFullYear()} Husney Mobarak. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
