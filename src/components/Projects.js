// Projects.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024

import React from 'react';
import image1 from './image1.png';
import image2 from './image2.png';



function Projects() {
  const projects = [
    {
      title: 'Project 1',
      image: {image1},
      description: 'E-commerce clothing website',
    },
    {
      title: 'Project 2',
      image: {image2},
      description: 'Smart Home Management System',
    },
    {
      title: 'Project 3',
      image: 'path-to-image3.jpg',
      description: '',
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
