import './Navbar.css';

const Navbar = ({ activeSection, navigateTo }) => {
  const sections = ['home', 'about', 'services', 'testimonials', 'contact'];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo-placeholder">
          <div className="logo-image">DR</div>
          <span className="logo-text">Dr. Rahman's Clinic</span>
        </div>
      </div>
      <ul className="nav-list">
        {sections.map((section) => (
          <li key={section} className="nav-item">
            <button 
              onClick={() => navigateTo(section)} 
              className={`nav-button ${activeSection === section ? 'active' : ''}`}
              aria-label={`Navigate to ${section} section`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="mobile-menu-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;