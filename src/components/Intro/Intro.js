import React from "react";
import styled from "styled-components";
// import sparkImg from "./assets/sparks.png";
import Button from "./Button";
import { device } from "../Device";

export default function Intro() {
  const Container = styled.div`
    margin: auto;
    height: 100vh;
  `;

  const Introduction = styled.div`
    width: 60%;
    margin: 240px auto 40px auto;
    text-align: center;
  `;

  const Navigation = styled.div`
    display: flex;
    justify-content: center;

    @media ${(device.mobileS, device.mobileM, device.mobileL)} {
      flex-wrap: wrap;
    }
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

      <Container>
        <Introduction>
          <h5>Hi, welcome to my little space in the internet!</h5>
          <h1>
            I‘m Kriska and I’m a Front-end developer with experience in UX, UI
            design and marketing
          </h1>
        </Introduction>
        <Navigation>
          <Button type="primary" title="Projects"></Button>
          <Button type="primary" title="About Me"></Button>
          <Button type="primary" title="Contact"></Button>
        </Navigation>
      </Container>
    </div>
  );
}
