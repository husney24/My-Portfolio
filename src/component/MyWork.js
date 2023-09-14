import React from 'react';
import './MyWork.css';
import webdesign from './images/webdesign.jpg';
import frontend from './images/frontend.jpg';
import backend from './images/backend.jpg';
import Database from './images/database.jpg';

const MyWork = () => {
  const projects = [
    {
      title: 'Web Development',
      image:  webdesign,
      details:
      "Crafting responsive web applications using HTML, CSS, and React.js for exceptional user experiences.",
    },
    {
      title: 'Front-End Development',
      image: frontend,
      details:
      "Transforming designs into engaging realities using HTML, CSS, and React.js to create seamless user interactions.",
    },
    {
      title: 'Back-End Development',
      image: backend,
      details:
        'I develop back-end systems using Node.js, Express.js, and other technologies, providing a solid foundation for web applications.',
    },
    {
      title: 'Database',
      image:Database,
      details:
        'I create modern and eye-catching web designs that focus on user experience and aesthetics, ensuring a visually appealing website.',
    },

  ];

  return (
    <div>
      <div className="work-heading" id='mywork'>
        <h2>My Work</h2>
        <p>Check out some of my projects and designs</p>
      </div>
      <div className="my-work">
        {projects.map((project, index) => (
          <div key={index} className="category-card">
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
