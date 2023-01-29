import React from "react";
import styled from "styled-components";
import lineImg from "./line.png";
import profileImg from "./profilepic.png";
import Button from "../Button";
import { device } from "../Device";

export default function Aboutme() {
  // const Container = styled.div`
  //   width: 100%;
  //   margin: auto;
  //   height: 100vh;
  // `;

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

    // @media ${device.laptop} {
    //   margin: auto;
    // }
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
            <p>
              Hi! My name is Kriska. I was born in a small town in the
              Philippines then I moved to Thailand at 16 and lived there for 10
              years. Currently, I live in Amsterdam, married to a Dutchie.
              Having gained experiences from multicultural and multilingual
              environments turned me to become an adaptable, well-rounded
              individual. Currently, I work at Jungle Gym as a Digital Marketer
              with a specialization in UX and UI design. I use design thinking
              methodologies to improve our shopping experience. I facilitate in
              conceptualizing, shaping ideas, prototyping, and testing
              interaction strategies. I am dedicated to learning and
              understanding both user and business needs to come up with a
              balanced solution to complex problems.
              <p>
                I'm inspired by films, music, fashion, and video games. In my
                free time, I enjoy learning new skills, and currently, that’s
                coding in Javascript.
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
