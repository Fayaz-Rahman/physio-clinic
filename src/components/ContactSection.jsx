import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you, ${formData.name}! We'll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Clinic Information</h3>
          <p>
            Dr. R.B. Ijaj Rahman, B.P.T., (MPT) Neurology<br />
            Consultant Physiotherapist<br />
            Phone: 63829 27750<br />
            Timing: Evening: 5:30 PM to 9:30 PM, Sunday: 10:00 AM to 1:00 PM
          </p>
          <button 
            onClick={() => window.location.href = 'tel:6382927750'} 
            className="cta-button"
          >
            Call Now
          </button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;