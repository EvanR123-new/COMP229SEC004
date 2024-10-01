// ContactMe.js
// Student Name: Evan Ratnani
// Student ID: 301428392
// Date: September 28, 2024

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for your message! We will get back to you shortly.");
    window.location.href = "/";
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-info">
        <h3>My Contact Information</h3>
        <p><strong>Email:</strong> evnratnani.er.er@gmail.com</p>
        <p><strong>Phone:</strong> 437-299-6438</p>
        <p><strong>Address:</strong> 4 Antelope Dr</p>
      </div>
      
      <form onSubmit={handleSubmit} id="contact-form">
        <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
        <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} />
        <textarea name="message" placeholder="Your Message" onChange={handleInputChange}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
