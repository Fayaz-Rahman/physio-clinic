import './ServicesSection.css';
import { serviceCategories } from '../data/services';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-categories">
        {serviceCategories.map((category, index) => (
          <div key={index} className="service-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.category}</h3>
            </div>
            <ul className="service-list">
              {category.services.map((service, i) => (
                <li key={i} className="service-item">
                  <div className="service-bullet"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;