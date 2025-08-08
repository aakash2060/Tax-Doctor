import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import img1 from "../assets/img1.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import WhatsApp from "../assets/whatsapp.png";
import "./Home.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: img1, alt: "Tax Doctor Services" },
    { src: img3, alt: "Financial Consulting" }, 
    { src: img4, alt: "Professional Tax Solutions" },
    { src: img5, alt: "Business Advisory" },
    { src: img6, alt: "Expert Financial Services" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="revamped-home">
      {/* Hero Carousel Section */}
      <section id="home" className="hero-section">
        <div className="carousel-container">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
            </div>
          ))}
          
          {/* Hero Content Overlay */}
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Tax<span className="highlight">Doctor</span>
              </h1>
              <p className="hero-subtitle">
                Your trusted financial consulting firm specializing in comprehensive tax solutions and business advisory services.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Consultation</button>
                <button className="btn-secondary" onClick={scrollToAboutUs}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button onClick={prevSlide} className="carousel-btn carousel-prev">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="carousel-btn carousel-next">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Tax Returns</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* About Content */}
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">
                  About <span className="highlight">Tax Doctor</span>
                </h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="about-text">
                <p>
                  Welcome to Tax Doctor, your trusted financial consulting firm. We specialize in a wide array of services tailored to meet your financial needs. Our offerings include accounting services, preparation of financial statements, projected and provisional financial statements, loan file documentation, D1, D2, D3 return filing, VAT and TDS return filing, obtaining tax clearance certificates, and handling all tax-related activities with precision and expertise.
                </p>
                
                <p>
                  At Tax Doctor, we understand the complexities of business operations, which is why we also offer services such as company registration and renewal, updates of company addresses, objectives, and capital, as well as assistance in obtaining share lagat and managing purchase and sales of shares.
                </p>
                
                <p>
                  Our expertise extends to PAN, VAT, and ward registrations, Banijya and Gharelu registration and renewal, and internal control management. With a focus on excellence and attention to detail, Tax Doctor ensures efficient fixed assets and inventory management, providing you with comprehensive financial solutions.
                </p>
              </div>

              {/* Key Features */}
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Expert Tax Preparation</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Business Registration</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Financial Planning</span>
                </div>
                <div className="feature-item">
                  <div className="feature-dot"></div>
                  <span>Compliance Management</span>
                </div>
              </div>
            </div>

            {/* Locations Section */}
            <div className="locations-section">
              <div className="section-header">
                <h3 className="section-title">Our Locations</h3>
                <div className="title-underline small"></div>
              </div>
              
              {/* Samakhusi Location */}
              <div className="location-card">
                <div className="location-header">
                  <h4 className="location-title">
                    <MapPin className="location-icon" />
                    Samakhusi Office
                  </h4>
                  <p className="location-address">Mhepi Samakhusi, Kathmandu</p>
                  <button className="location-link">
                    View on Map <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28253.262590248167!2d85.29002883476562!3d27.72784930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19004f48dedb%3A0x40e866e18e0bfab8!2sTax%20Doctor!5e0!3m2!1sen!2sus!4v1711590439177!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Samakhusi Location"
                  ></iframe>
                </div>
              </div>

              {/* Banasthali Location */}
              <div className="location-card">
                <div className="location-header">
                  <h4 className="location-title">
                    <MapPin className="location-icon" />
                    Banasthali Office
                  </h4>
                  <p className="location-address">NayaBazaar Chowk, Kathmandu</p>
                  <button className="location-link">
                    View on Map <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113019.22316900724!2d85.21062965816533!3d27.72189490011074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb190036e08e43%3A0x91bb8f65134fd735!2sKathmandu%2044600%2C%20Nepal!3m2!1d27.7219193!2d85.2930311!5e0!3m2!1sen!2sus!4v1714307841700!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Banasthali Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-content">
            <h2 className="section-title centered">Our Philosophy</h2>
            <div className="title-underline centered"></div>
            <p className="philosophy-intro">
              We operate on the same philosophy and goals set up by our founders to serve our clients honestly with high concern for their best interests.
            </p>

            <div className="philosophy-card">
              <div className="philosophy-text">
                <p>
                  This fact is epitomized by large level retention of old customers apart from addition of many a new domestic and global players, every month. Tax Doctor is a firm with "One Stop Solution" policy for its clients, where we are delivering a wide range of business advisory services.
                </p>
                <p>
                  We assist our clients and their businesses, organizations with tax strategy, planning and compliance. We help Organizations work smarter and grow faster, reach out to us to build effective organizations, reduce costs, manage risk and regulations and leverage talent.
                </p>
                <p>
                  At Tax Doctor we strongly believe in establishing long term relationship with the clients. To us every client is equally important and when they repose their trust in us, it becomes our bounden duty to serve them with utmost care and the highest level of professional competence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <img
          src={WhatsApp}
          className="whatsapp-icon"
          width={65}
          alt="WhatsApp"
          onClick={() => {
            window.open(
              "https://wa.me/+9779843713458?text=Hello%2C%20Namaste%21%20I%20have%20some%20questions%3F",
              "_blank"
            );
          }}
        />
      </div>
    </div>
  );
};

export default Home;