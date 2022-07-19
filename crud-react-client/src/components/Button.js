import React from "react";
import styled from "styled-components";

function Button(props) {
  const ButtonStyle = styled.button`
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 5%;
    width: 5rem;
    height: 3rem;
    transition-duration: 0.4s;
    margin: 0 1rem;
    font-size: 1.1rem;

    &:hover {
      background-color: black;
      color: white;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  `;

  return (
    <ButtonStyle
      onClick={() => {
        props.onClick();
      }}
    >
      {props.text}
    </ButtonStyle>
  );
}

export default Button;
