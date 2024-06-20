import React from "react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading, CopyrightText
} from "./FooterStyles";

export const Footer = () => {
  return (
    <Box>
      <div>
        <h1
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          Your Destination for Financial Consultation and Services!
        </h1>
      </div>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Mhepi Samakhusi</FooterLink>
            <FooterLink href="#">NayaBazaar Chowk</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/p/Tax-Doctor-100082973576706/?paipv=0&eav=AfbG01zafw8NJBCB_jtiIg_bl0-RQUT6falN31ytOf8yvYbMxhnJm9yTeaQao84TOco&_rdr">
              <i className="fab fa-facebook-f">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
        <Row>
          <CopyrightText>&copy; All rights reserved Aakash P</CopyrightText>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
