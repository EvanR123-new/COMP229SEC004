// App.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Services from './components/Services';
import ContactMe from './components/ContactMe';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: '200px', height: '200px' }} />
            </Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
