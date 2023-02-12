import React from "react";
import lineImg from "./line.png";
import styled from "styled-components";
import { device } from "../Device";

export default function Projects() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 50px;
  `;

  const Divider = styled.div`
    width: 80%;
    margin: 8px auto;
  `;

  const ImgContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
  `;

  const TitleContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
  `;

  const Img = styled.img.attrs({
    src: `${lineImg}`,
  })`
    height: auto;
    max-width: 100%;
  }`;

  const ProjectContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
    width: 60%;
    margin: 8px auto;
    flex-direction: column;
  `;

  const Role = styled.div`
    margin: 16px;
    width: 100%;
  `;

  const Project = styled.div`
    margin: 16px;
    width: 100%;
  `;

  const GitLink = styled.a`
    text-decoration: underline;
    width: 100%;
  `;

  return (
    <div>
      <Container>
        <TitleContainer>
          <h2>Projects</h2>
        </TitleContainer>

        <Divider>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>

        <ProjectContainer>
          <Project>
            <h3>Arcadia</h3>
            <h5>Front-end & Back-end</h5>
            <p>
              A web application that helps gamers find & discover new games,
              save them to their personal collection, and track their progress
              and ratings within the app.
            </p>
            <GitLink>
              <a
                href="https://github.com/krdlange/arcadia"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </GitLink>
          </Project>
        </ProjectContainer>

        <Divider>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>

        <ProjectContainer>
          <Project>
            <h3>Recipe Haul</h3>
            <h5>Front-end & Back-end</h5>
            <p>
              An e-commerce web application that integrates recipe search with
              grocery shopping.
            </p>
            <GitLink>
              <a
                href="https://github.com/CodeOp-tech/FSPT12-final-project"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </GitLink>
          </Project>
        </ProjectContainer>

        <Divider>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>
      </Container>
    </div>
  );
}
