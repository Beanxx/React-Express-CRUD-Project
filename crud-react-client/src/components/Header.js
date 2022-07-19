import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  height: 130px;
`;

const LogoTitle = styled.h1`
  text-align: center;
  font-style: italic;
  font-weight: 900;
  font-size: 3rem;
`;

const LogoSubitle = styled.div`
  text-align: center;
  font-style: italic;
  font-weight: 500;
  font-size: 1.5rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoTitle>Shh!cret Feeling</LogoTitle>
      <LogoSubitle>How do you feel? 🙂😐🙁</LogoSubitle>
    </HeaderContainer>
  );
}

export default Header;
