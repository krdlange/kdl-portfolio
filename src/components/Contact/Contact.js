import React from "react";
import styled from "styled-components";
import lineImg from "./line.png";
import Button from "../Button.js";

export default function Contact() {
  const Container = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 50px;
  `;

  const Divider = styled.div`
    width: 80%;
    margin: 4px auto;
  `;

  const ImgContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
  `;

  const Img = styled.img.attrs({
    src: `${lineImg}`,
  })`
    height: auto;
    max-width: 100%;
  `;

  const TitleContainer = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    // width: 60%;
    margin: 100px auto 16px auto;
    // text-align: center;
  `;

  const BtnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 8px auto 140px auto;
  `;

  const Footer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px auto;
  `;

  return (
    <div>
      <Container>
        <Divider>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>
        <TitleContainer>
          <h2>Contact</h2>
        </TitleContainer>
        <BtnContainer>
          <a
            href="mailto:kriska.delange@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" title="Email"></Button>
          </a>
          <a
            href="https://www.linkedin.com/in/kriskadl/"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="primary" title="LinkedIn"></Button>
          </a>
        </BtnContainer>

        <Divider>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>
        <Footer>
          <p>Designed and developed by yours truly.</p>
        </Footer>
      </Container>
    </div>
  );
}
