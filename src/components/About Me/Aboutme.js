import React from "react";
import styled from "styled-components";
import lineImg from "./line.png";
import profileImg from "./profilepic.png";
import Button from "../Button";
import { device } from "../Device";

export default function Aboutme() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 50px;
  `;

  const Section = styled.div`
    width: 80%;
    margin: auto;
  `;

  const ImgContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
  `;

  const Img = styled.img.attrs({
    src: `${lineImg}`,
  })`
    height: auto;
    max-width: 100%;
  `;

  const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 80%;
    margin: auto;

    @media ${device.laptop} {
      flex-direction: row;
    }
  `;

  const TextContainer = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;

    @media ${device.laptop} {
      margin: auto;
      width: 50%;
      text-align: left;
    }
  `;

  const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 40px auto 16px auto;
  `;

  const ProfileImgContainer = styled.div`
    margin: auto;
  `;

  const ProfileImg = styled.img.attrs({
    src: `${profileImg}`,
  })`
    width: 150px;

    @media ${device.laptop} {
      width: 200px;
    }
  `;

  return (
    <div>
      <Container>
        <Section>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Section>
        <AboutMeContainer>
          <TextContainer>
            <h2>About Me</h2>
            <span>Hi! I am Kriska.</span>
            <p>
            After years of experience in Education, Customer Support, Marketing, and UX and UI design, I have recently shifted my focus to front-end development. I honed my skills by completing a six-month full-stack web development program at codeOp, where I gained hands-on experience in modern front-end frameworks like React and Vue, as well as back-end technologies such as Node.js, Express.js, RestAPI, and MySQL. 
            <p>
            I am highly motivated and attentive to detail, with a passion for creating web applications that are both functional and user-friendly.
            </p>
            </p>
            <a
              href="https://drive.google.com/file/d/1WCBpxCFxjp-pgVqnz8uar7NLLM3WHzuc/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <BtnContainer>
                <Button type="primary" title="View Resume"></Button>
              </BtnContainer>
            </a>
          </TextContainer>
          <ProfileImgContainer>
            <ProfileImg></ProfileImg>
          </ProfileImgContainer>
        </AboutMeContainer>
        <Section>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Section>
      </Container>
    </div>
  );
}
