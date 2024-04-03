import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


export function NavBar() {
  // Function to handle scrolling to the "About Us" section
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("About Us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navcompanyname">TaxDoctor</div>
      <div className="components">
        <Link to="/" style={{ fontSize: "20px" }}>
          {"   "}
          Home
        </Link>
        <Link to="/login" style={{ fontSize: "20px" }}>
          {"   "}
          Login
        </Link>
        <Link style={{ fontSize: "20px" }} onClick={scrollToAboutUs}>
          {"   "}
          About Us
        </Link>
      </div>
    </div>
  );
}
