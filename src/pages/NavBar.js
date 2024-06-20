import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  // Function to handle scrolling to the "About Us" section
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us"); // Updated ID here
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Adjusted options for smooth scroll
    }
  };

  return (
    <div className="navbar">
      <div className="navcompanyname"><Link to="/" style={{ fontSize: "40px" }}>
          {"   "}
          TaxDoctor
        </Link></div>
      <div className="components">
        <Link to="/" style={{ fontSize: "20px" }}>
          {"   "}
          Home
        </Link>
        <Link to="/newsletter" style={{ fontSize: "20px" }}>
          {"   "}
          Newsletter
        </Link>
        <Link to="" style={{ fontSize: "20px" }} onClick={scrollToAboutUs}>
          {"   "}
          About Us
        </Link>
      </div>
    </div>
  );
}
