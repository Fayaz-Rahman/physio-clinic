import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, navigateTo }) => {
  const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-placeholder">
          <div className="logo-image">DR</div>
          <span className="logo-text">Dr. Rahman's Clinic</span>
        </div>
      </div>
      <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {sections.map((section) => (
          <li key={section} className="nav-item">
            <button 
              onClick={() => {
                navigateTo(section);
                setIsMobileMenuOpen(false);
              }} 
              className={`nav-button ${activeSection === section ? 'active' : ''}`}
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <button 
        className="mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;