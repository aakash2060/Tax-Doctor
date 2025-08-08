import React from "react";
import "./Banner.css";
import { Phone, Mail, AlertTriangle } from "lucide-react";

export function Banner() {
  return (
    <div className="banner">
      <div className="banner-contactinfo">
        <span>
          <AlertTriangle className="warning-icon" />
        </span>
        <span>
          <AlertTriangle className="warning-icon" />
        </span>
        <span className="warning-text">
          The Website is Under Construction!!
        </span>
        <span className="contact-label">Phone:</span>
        <span className="contact-icon">
          <Phone />
        </span>
        <span className="contact-info">9843713458</span>
        <span className="contact-label">Email:</span>
        <span className="contact-icon">
          <Mail />
        </span>
        <span className="contact-info">taxdoctor63@gmail.com</span>
        <span>
          <AlertTriangle className="warning-icon" />
        </span>
        <span>
          <AlertTriangle className="warning-icon" />
        </span>
        <span className="warning-text">
          The Website is Under Construction!!
        </span>
      </div>
    </div>
  );
}