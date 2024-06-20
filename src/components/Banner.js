import React from "react";
import "./Banner.css";
import { TelephoneFill, Envelope, ExclamationTriangle } from "react-bootstrap-icons";

export function Banner() {
  return (
    <div className="banner">
      <div className="banner-contactinfo">
        <span>
          <ExclamationTriangle style={{ color: "red" }} />
        </span>
        <span>
          <ExclamationTriangle style={{ color: "red" }} />
        </span>
        <span style={{ marginRight: "10px" }}>
          The Website is Under Construction!!
        </span>
        <span style={{ marginRight: "10px" }}>Phone:</span>{" "}
        <span style={{ marginRight: "10px" }}>
          <TelephoneFill />
        </span>{" "}
        9843713458
        <span style={{ marginLeft: "10px", marginRight: "10px" }}>
          Email:
        </span>{" "}
        <span style={{ marginRight: "10px" }}>
          <Envelope />
        </span>{" "}
        <span style={{ marginRight: "10px" }}>taxdoctor63@gmail.com</span>{" "}
        <span style={{ marginRight: "10px" }}>
          <ExclamationTriangle style={{ color: "red" }} />
        </span>
        <span>
          <ExclamationTriangle style={{ color: "red" }} />
        </span>
        <span style={{ marginRight: "10px" }}>
          The Website is Under Construction!!
        </span>
      </div>
    </div>
  );
}
