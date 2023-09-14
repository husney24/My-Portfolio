import React from 'react';
import './About.css'; 
import profile from './images/profile.png'
import me from './images/me.png'

const About = () => {
  return (
    <div className="about-container" id='about'>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi there! I'm a passionate web developer with expertise in front-end technologies like
          HTML, CSS, and JavaScript. I love creating responsive and user-friendly web applications
          that provide great user experiences.
        </p>
        <p>
          With a keen eye for design and attention to detail, I also enjoy crafting visually
          appealing websites that leave a lasting impression on users.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, reading tech blogs, or
          playing my favorite video games.
        </p>
      </div>
      <div className="about-image">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default About;
