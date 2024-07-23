import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send form data to server)
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact-us">
      <div className="banner">
        <h2>Contact Us</h2>
        {/* Add banner images or content here */}
      </div>
      <div className="contact-form">
        <h3>Enquiry Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="map">
        <h3>Find Us Here</h3>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3406596703184!2d-122.41941568468128!3d37.77492977975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4c3402e9%3A0x8d6f6e8d3a87e8!2sSan%20Francisco%2C%20CA%209418!5e0!3m2!1sen!2sus!4v1632432361563!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
