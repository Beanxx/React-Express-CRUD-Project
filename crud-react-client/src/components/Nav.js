import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.div`
  display: flex;
  background-color: #5d5d5d;
  text-align: center;
  width: 280px;
  height: 550px;
  margin-top: 190px;
  padding: 1rem;
`;

const Li = styled.li`
  list-style: none;
  margin: 2rem;
`;

const NavStyle = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-style: italic;
  font-weight: 700;
  font-size: 1.6rem;

  /* &:focus,
  &:hover,
  &:visited,
  &:link, */
  &:active,
  &:focus {
    text-decoration: none;
    color: #ed2d50;
  }
`;

function Nav() {
  return (
    <NavContainer>
      <ul>
        <Li>
          <NavStyle to="/">Memo ✍️</NavStyle>
        </Li>
        <Li>
          <NavStyle to="/list">Diary List 📜</NavStyle>
        </Li>
        <Li>
          <NavStyle to="/">Calendar 📆</NavStyle>
        </Li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
