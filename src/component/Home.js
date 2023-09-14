import React from 'react';
import './Home.css';
import Computer1 from './images/Computer1.png'


const Home = () => {
    return (
        <div className="home-container" id='home'>
      <div className="background-image"></div>
      <section className="content">
        <div className="content-image">
          <img src={Computer1} alt="Contact" />
        </div>
        <div className="content-2">
          <h2>Welcome to My Website</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius justo ac elit
          faucibus, eget consectetur magna vestibulum. Sed tincidunt purus a nisl fermentum
          scelerisque.
          </p>
         <div className="hover-buttons">
           <button className="button-primary">Learn More</button>
           <button className="button-secondary"  >Contact Me</button>
         </div>
        </div>
      </section>
      </div>
    );
  };
  


export default Home;
