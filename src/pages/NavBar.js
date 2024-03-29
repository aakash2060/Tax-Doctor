import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { TelephoneFill, Envelope } from "react-bootstrap-icons";

export function NavBar() {
  const scrollToAboutUs=()=>{
    document.querySelector(".AboutUSSection").scrollIntoView({
      behavior: "smooth",
      block:"start",
    });
  };
  return (
    <div className="navbar">
      <div className="navcompanyname">TaxDoctor</div>
      <div className="contactinfo">
      <div className="phone"><TelephoneFill /> 9843713458</div>
        <div className="email"><Envelope/> taxdoctor63@gmail.com</div>
        </div>
      <div className="components">
        <Link to="/" style={{ fontSize: "20px" }}>
          {"   "}
          Home
        </Link>
        <Link to="/login" style={{ fontSize: "20px" }}>
          {"   "}
          Login
        </Link>
        <Link to="/aboutus" style={{ fontSize: "20px" }} onClick={scrollToAboutUs}>
          {"   "}
          About Us
        </Link>
      </div>
    </div>
  );
}
