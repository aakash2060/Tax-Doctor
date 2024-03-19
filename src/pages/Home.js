import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/our service.jpg";
import "../pages/Home.css";
import WhatsApp from "../assets/WhatsAppButtonGreenSmall.png";
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
  const third = {
    width: "100%",
    height: "79vh",
    objectFit: "contain",
  };

  const chatIcon = {
    position: "fixed",
    bottom: "5%", // Adjusted bottom position
    left: "85%", // Adjusted left position
    transform: "translateX(-50%)", // Center horizontally
    zIndex: "1000",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    animation: "shake 0.3s infinite", // Start shaking all the time
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
            <img className="pic3" style={third} src={img3} alt="Third slide" />
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
            width={170}
            alt="aaa"
            className={isShaking ? "shake" : ""}
            onClick={openWhatsApp}
          />
        </div>
      </div>
      <div className="GMaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d637.6788341646064!2d85.3105670063962!3d27.727796716941445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1710813014217!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};
