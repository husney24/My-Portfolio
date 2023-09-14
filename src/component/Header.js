import React, { useState } from 'react';
import './Header.css';
import Computer1 from './images/Computer1.png'
import me from './images/me.png'
import h from './icons/h.png'
import './Home.css';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
    <header className="header">
      <div className="logo"> <a href="./"><img className='logo' src={h} alt="logo" /></a></div>
      <nav className= {`navbar ${isNavOpen ? 'open' : ''}`}>
        <div className="toggle-icon" onClick={handleToggleNav}>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#mywork">My Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <div className="home-container" id='home'>
      <div className="background-image"></div>
      <section className="content">
        <div className="content-image">
          <img src={me} alt="Contact" />
        </div>
        <div className="content-2">
          <h2>Welcome to My Website</h2>
          <p>
          Hi there! I'm Husney Mobarak, a passionate web developer with expertise in front-end technologies such as HTML, CSS, and JavaScript. I have a strong knack for crafting responsive and user-friendly web applications that offer exceptional user experiences.
        </p>
        <p>
          With a keen eye for design and meticulous attention to detail, I strive to create visually appealing websites that leave a lasting impression on users. My goal is to bring together aesthetics and functionality to deliver seamless digital experiences.
        </p>
        <p>
          When I'm not immersed in code, you can find me exploring the latest technologies, reading up on tech blogs, or enjoying my favorite video games. Feel free to explore my portfolio and discover the projects that showcase my dedication and passion for web development.
        </p>
         <div className="hover-buttons">
           <button className="button-primary">Learn More</button>
           <button className="button-secondary" href="#contact">Contact Me</button>
         </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Header;
