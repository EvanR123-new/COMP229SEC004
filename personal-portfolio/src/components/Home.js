// Home.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Mission Statement: Creating innovative solutions to complex problems through coding and design.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;
