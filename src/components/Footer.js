import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
  CopyrightText
} from "./FooterStyles";

export const Footer = () => {
  return (
    <Box>
      <div>
        <h1
          style={{
            color: "#fbbf24", 
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "60px",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"
          }}
        >
          Your Destination for Financial Consultation and Services!
        </h1>
      </div>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#about">Aim</FooterLink>
            <FooterLink href="#about">Vision</FooterLink>
            <FooterLink href="#about">Our Story</FooterLink>
            <FooterLink href="#about">Our Team</FooterLink>
          </Column>
          
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#contact">
              <MapPin className="footer-icon" />
              <span>Mhepi Samakhusi</span>
            </FooterLink>
            <FooterLink href="#contact">
              <MapPin className="footer-icon" />
              <span>NayaBazaar Chowk</span>
            </FooterLink>
            <FooterLink href="tel:+9779843713458">
              <Phone className="footer-icon" />
              <span>+977 9843713458</span>
            </FooterLink>
            <FooterLink href="mailto:taxdoctor63@gmail.com">
              <Mail className="footer-icon" />
              <span>taxdoctor63@gmail.com</span>
            </FooterLink>
          </Column>
          
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink 
              href="https://www.facebook.com/p/Tax-Doctor-100082973576706/?paipv=0&eav=AfbG01zafw8NJBCB_jtiIg_bl0-RQUT6falN31ytOf8yvYbMxhnJm9yTeaQao84TOco&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="footer-icon" />
              <span>Facebook</span>
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="footer-icon" />
              <span>Instagram</span>
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="footer-icon" />
              <span>Twitter</span>
            </FooterLink>
            <FooterLink href="#" target="_blank" rel="noopener noreferrer">
              <Youtube className="footer-icon" />
              <span>YouTube</span>
            </FooterLink>
          </Column>
        </Row>
        <Row>
          <CopyrightText>
            &copy; 2024 Tax Doctor. All rights reserved.
          </CopyrightText>
        </Row>
      </FooterContainer>
    </Box>
  );
};

export default Footer;