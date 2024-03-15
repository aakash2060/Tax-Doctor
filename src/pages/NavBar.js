import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { TelephoneFill } from "react-bootstrap-icons";
import { Tab } from "react-bootstrap";
export function NavBar() {
  return (
    <div className="navbar">
      <div className="navcompanyname">Tax-Doctor Nepal</div>
      <div className="contactinfo">
        <TelephoneFill /> Contact Us Now!
        <div className="phone">9494994949</div>
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
        <Link to="/aboutus" style={{ fontSize: "20px" }}>
          {"   "}
          About Us
        </Link>
      </div>
    </div>
  );
}
