import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
`;

function Footer() {
  return <FooterContainer>Copyright 2022. Soobin</FooterContainer>;
}

export default Footer;
