import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import "../pages/Home.css";

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
      </div>
    </>
  );
};
