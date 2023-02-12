import React from "react";
import styled from "styled-components";

const Button = ({ type, title, onClick }) => {
  return (
    <div>
      <ButtonComponent type={type} onClick={onClick}>{title}</ButtonComponent>
    </div>
  );
};

const ButtonComponent = styled.button`
  font-size: 1em;
  margin: 0.4em;
  padding: 0.6em 2em;
  border: 0;
  border-radius: 50px;
  color: #d1e64b;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 600;
  width: 160px;
  cursor: pointer;
  background-color: ${({ type }) => backgroundColors[type]};
  :hover {
    background-color: ${({ type }) => hoverBgColors[type]};
  }
`;

const backgroundColors = {
  primary: "#1D1D1D",
  warning: "#E10D30",
  default: "#155EC2",
  success: "#12AC3F",
};

const hoverBgColors = {
  primary: "#393933",
  warning: "#900B21",
  default: "#0C3875",
  success: "#0B6F29",
};

export default Button;
