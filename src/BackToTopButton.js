import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  }, []);

  const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #333;
    padding: 10px 15px;
    display: none;
    font-size: .8em;
    margin: 0.4em;
    padding: 0.6em 2em;
    border: 0;
    border-radius: 50px;
    color: #d1e64b;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: 600;
    width: 100px;
  `;

  return (
    <Button
      id="back-to-top-btn"
      style={{ display: showButton ? "block" : "none" }}
    >
      Back to top ⬆︎
    </Button>
  );
};

export default BackToTopButton;
