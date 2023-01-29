import React from "react";
import styled from "styled-components";
// import sparkImg from "./assets/sparks.png";
// import Button from "../Button";

export default function Intro() {

  const Introduction = styled.div`
    text-align: center;
  `;

  //   const ImgContainer = styled.div`
  //     // border: 1px solid red;
  //     max-width: 100%;
  //     position: sticky;
  //     top: 100px;
  //     justify-content: right;
  //     display: flex;
  //     z-index: 2;
  //     float: right;
  //   `;

  //   const Img = styled.img.attrs({
  //     src: `${sparkImg}`,
  //   })`
  //   height: auto;
  //   max-width: 20%;
  //   margin-right: 144px;
  // }`;

  return (
    <div>
      {/* <ImgContainer>
            <Img/>
      </ImgContainer> */}

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
