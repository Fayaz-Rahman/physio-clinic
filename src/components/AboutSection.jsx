import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="doctor-about-photo"></div>
        <div className="about-text-content">
          <h2 className="section-title">About Dr. Rahman</h2>
          <p className="about-text">
            Dr. R.B. Ijaj Rahman, B.P.T., (MPT) Neurology, is a dedicated consultant physiotherapist with extensive expertise in treating neurological and musculoskeletal conditions. With a patient-centered approach, Dr. Rahman provides personalized care to help patients regain mobility and improve their quality of life.
          </p>
          <p className="about-text">
            Our clinic is committed to delivering exceptional physiotherapy services in a compassionate and professional environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;