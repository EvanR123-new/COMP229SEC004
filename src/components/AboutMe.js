
// AboutMe.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024
import React from 'react';
import photo from './photo.jpg';
import resume from './Resume.pdf'; 
function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <img src={photo} alt="photo" style={{ width: '200px', height: '200px' }} />
      <p>Hello, I'm Evan Ratnani, a passionate web developer with experience in building dynamic websites and applications.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">Download my Resume</a>
    </div>
  );
}

export default AboutMe;
