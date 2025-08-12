import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo">
          <div className="logo-image">DR</div>
          <span className="logo-text">Dr. Rahman's Clinic</span>
          <p className="logo-description">Empowering wellness through expert physiotherapy care.</p>
        </div>
        <div className="footer-section footer-links">
          <h3 className="section-title">Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section footer-contact">
          <h3 className="section-title">Contact Info</h3>
          <p>Phone: <a href="tel:6382927750">63829 27750</a></p>
          <p>Email: <a href="mailto:info@rahmanphysio.com">info@rahmanphysio.com</a></p>
          <p>Timing: Evening: 5:30 PM - 9:30 PM, Sunday: 10:00 AM - 1:00 PM</p>
        </div>
        <div className="footer-section footer-social">
          <h3 className="section-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dr. Rahman's Physiotherapy Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;