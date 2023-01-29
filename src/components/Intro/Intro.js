import React from "react";
import styled from "styled-components";
import sparkImg from "./assets/sparks.png";

export default function Intro() {

  const Introduction = styled.div`
    text-align: center;
  `;

    const ImgContainer = styled.div`
    position: relative;
    // height: 100vh;
    width: 100%;
    background-color: #eee;
    `;

    const Img = styled.img.attrs({
      src: `${sparkImg}`,
    })`
    position: absolute;
    top: -20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }`;

  return (
    <div>
      <ImgContainer>
            <Img/>
      </ImgContainer>

        <Introduction>
          <h5>Hi, welcome to my little space in the internet!</h5>
          <h1>
            I‘m Kriska and I’m a Front-end developer with experience in UX, UI
            design and marketing
          </h1>
        </Introduction>
    </div>
  );
}
