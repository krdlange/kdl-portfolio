import React from "react";
import lineImg from "./line.png";
import styled from "styled-components";

export default function Projects() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-top: 50px;
  `;

  const Divider = styled.div`
    width: 80%;
    margin: auto;
  `;

  const ImgContainer = styled.div`
    max-width: 100%;
    justify-content: center;
    display: flex;
    margin: 0 0px 4px 0px;
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

  const GitLink = styled.a`
    text-decoration: underline;
  `;

  return (
    <div className="col-12">
      <Container>
        <Divider>
          <h2>Projects</h2>
          <ImgContainer>
            <Img></Img>
          </ImgContainer>
        </Divider>

        <ProjectContainer>
          <Role>
            <h4>Front-end & Back-end</h4>
          </Role>

          <Project>
            <h3>Arcadia</h3>
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
          <Img></Img>
        </Divider>

        <ProjectContainer>
          <Role>
            <h4>Front-end & Back-end</h4>
          </Role>

          <Project>
            <h3>Recipe Haul</h3>
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
          <Img></Img>
        </Divider>
      </Container>
    </div>
  );
}
