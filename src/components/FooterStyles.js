import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 2.5%;
  background: black;
  position: position;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center; /* Center align all text in the container */

  @media (max-width: 480px) {
    align-items: center; /* Center align items on smaller screens */
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%; /* Each column takes 25% of the container width */

  @media (max-width: 1000px) {
    width: 100%; /* Full width for smaller screens */
    margin-bottom: 20px; /* Add margin between columns */
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between; /* Spread out elements evenly */
  margin-bottom: 100px; /* Add margin between rows */

  @media (max-width: 1000px) {
    flex-direction: column; /* Adjust layout for smaller screens */
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: gold;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const CopyrightText = styled.p`
  text-align: center;
  color: #fff;
  font-size: 28px;
  @media (max-width: 480px) {
    font: 16px;
  }
`;
