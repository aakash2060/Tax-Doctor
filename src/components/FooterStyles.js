import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 2.5%;
  background: black;
  position: relative;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 33.33%;

  @media (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between icon and text */

  &:hover {
    color: #fbbf24;
    background: rgba(248, 180, 203, 0.1);
    transform: translateY(-2px);
    text-decoration: none;
  }

  &:visited {
    color: #fff;
  }

  &:visited:hover {
    color: #fbbf24;
  }

  /* Lucide icon styling */
  .footer-icon {
    width: 18px;
    height: 18px;
    color: #fbbf24;
    transition: all 300ms ease;
  }

  &:hover .footer-icon {
    color: #fbbf24;
    transform: scale(1.1);
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    
    .footer-icon {
      width: 16px;
      height: 16px;
    }
    
    span {
      font-size: 14px;
    }
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: white;
  margin-bottom: 40px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 16px;
  margin: 30px 0 0 0;
  padding-top: 20px;
  border-top: 1px solid #333;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;