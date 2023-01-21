import React from "react";
import styled from "styled-components";
import lineImg from "./line.png";
import profileImg from "./profilepic.jpg";
import Button from "../Intro/Button";
import { device } from "../Device";

export default function Aboutme() {
  const Container = styled.div`
    width: 100%;
    margin: auto;
    height: 100vh;
  `;

  const Section = styled.div`
    width: 80%;
    margin: 240px auto auto auto;
  `;

  const ImgContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
    margin: -36px 0px 4px 0px;
  `;

  const Img = styled.img.attrs({
    src: `${lineImg}`,
  })`
    height: auto;
    max-width: 100%;
  `;

  const AboutMeContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: row;


    @media ${(device.laptop, device.laptopL, device.desktop, device.desktopL)} {
      }

    @media ${(device.mobileS, device.mobileM, device.mobileL)} {
        flex-wrap: wrap;
      }
  `;

  const TextContainer = styled.div`
  `;

  const ProfileImgContainer = styled.div`

  `;

  const ProfileImg = styled.img.attrs({
    src: `${profileImg}`,
  })`

  }`;

  return (
    <div>
      <Container>
        <Section>
          <h2>About Me</h2>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Section>
        <AboutMeContainer>
          <TextContainer>
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
              balanced solution to complex problems. I'm inspired by films,
              music, fashion, and video games. In my free time, I enjoy learning
              new skills, and currently, that’s coding in Javascript.
            </p>
            <Button type="primary" title="View Resume"></Button>
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
