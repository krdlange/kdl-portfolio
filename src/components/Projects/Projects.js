import React from "react";
import lineImg from "./line.png";
import styled from "styled-components";

export default function Projects() {
  const Container = styled.div`
    width: 100%;
    margin: auto;
    height: 100vh;
  `;

  const Section = styled.div`
    width: 80%;
    margin: auto;
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
  }`;

  const ProjectContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
  `;

  const Role = styled.div`
    margin: 16px;
    width: 20%;
  `;

  const Project = styled.div`
  margin: 16px;
  width: 80%;
  `;

  return (
    <div>
      <Container>
        <Section>
          <h2>Projects</h2>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Section>

        <ProjectContainer>
          <Role>
            <h4>Front-end & Back-end</h4>
          </Role>

          <Project>
            <h2>Arcadia</h2>
            <p>
              A web application that helps gamers find & discover new games,
              save them to their personal collection, and track their progress
              and ratings within the app.
            </p>
            <a href="https://github.com/krdlange/arcadia">View on GitHub</a>
          </Project>
        </ProjectContainer>
        <Section>
          <Img></Img>
        </Section>

        <ProjectContainer>
          <Role>
            <h4>Front-end & Back-end</h4>
          </Role>

          <Project>
            <h2>Recipe Haul</h2>
            <p>
            An e-commerce web application that integrates recipe search with grocery shopping.
            </p>
            <a href="https://github.com/CodeOp-tech/FSPT12-final-project">View on GitHub</a>
          </Project>
        </ProjectContainer>
        <Section>
          <Img></Img>
        </Section>
        
      </Container>
    </div>
  );
}
