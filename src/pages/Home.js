import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import "../pages/Home.css";
import WhatsApp from "../assets/WhatsAppButtonGreenLarge.png";
import { useState } from "react";
export const Home = () => {
  const carousel = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    height: "79vh",
    objectFit: "cover",
  };

  const chatIcon = {
    position: "absolute",
    bottom: "60px",
    left: "1700px",
    zIndex: "1000",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  };
  const openWhatsApp = () => {
    const whatsappURL =
      "https://wa.me/+9779843713458?text=Hello%2C%20Namaste%21%20I%20have%20some%20questions%3F";
    window.open(whatsappURL, "_blank");
  };
  const [isShaking, setIsShaking] = useState(false);

  const handleMouseEnter = () => {
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setIsShaking(false);
  };
  return (
    <>
      <div className="carousel" style={carousel}>
        <Carousel interval={2000} pause="hover">
          <Carousel.Item>
            <img
              className="pic"
              style={imgStyle}
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="pic2"
              style={imgStyle}
              src={img2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="pic3"
              style={imgStyle}
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div
          className="fixed-bottom right -100 p-3"
          style={chatIcon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <img
              src={WhatsApp}
              width={300}
              alt="aaa"
              className={isShaking ? "shake" : ""}
              onClick={openWhatsApp}
            />

        </div>
      </div>
    </>
  );
};
