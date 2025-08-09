import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./NavBar.css";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById("newsletter");
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            Tax<span style={{ color: '#fbbf24' }}>Doctor</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <button onClick={scrollToNewsletter} className="nav-link nav-button">
            Newsletter
          </button>
          <button onClick={scrollToAboutUs} className="nav-link nav-button">
            About 
          </button>
          <button onClick={scrollToContact} className="nav-link nav-button">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <button onClick={scrollToNewsletter} className="mobile-nav-link mobile-nav-button">
              Newsletter
            </button>
            <button onClick={scrollToAboutUs} className="mobile-nav-link mobile-nav-button">
              About 
            </button>
            <button onClick={scrollToContact} className="mobile-nav-link mobile-nav-button">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}