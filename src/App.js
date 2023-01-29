import "./App.css";
import styled from "styled-components";
import Intro from "./components/Intro/Intro.js";
import Projects from "./components/Projects/Projects.js";
import Aboutme from "./components/About Me/Aboutme";
import Contact from "./components/Contact/Contact";
import Button from "./components/Button";
import { useRef } from "react";
import BackToTopButton from "./BackToTopButton";

function App() {
  const mainRefSection = useRef(null);
  const projectRefSection = useRef(null);
  const aboutRefSection = useRef(null);
  const contactRefSection = useRef(null);

  const handleClick = (sectionRef) => {
    sectionRef.current.scrollIntoView();
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    background-image: linear-gradient(
      125deg,
      hsl(68deg 52% 80%) 1%,
      hsl(29deg 55% 82%) 71%,
      hsl(38deg 59% 82%) 88%,
      hsl(50deg 54% 80%) 95%,
      hsl(22deg 44% 83%) 100%
    );
    background-size: cover;
    background-position: center;
  `;

  const Section = styled.div`
    height: 100%;
  `;

  const IntroSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    width: 70%;
  `;

  const Navigation = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  `;

  return (
    <Container>
      <IntroSection ref={mainRefSection} id="main">
        <Intro></Intro>
        <Navigation>
          <a href="#projects">
            <Button
              onClick={() => handleClick(projectRefSection)}
              type="primary"
              title="Projects"
            ></Button>
          </a>
          <a href="#about">
            <Button
              onClick={() => handleClick(aboutRefSection)}
              type="primary"
              title="About Me"
            ></Button>
          </a>
          <a href="#contact">
            <Button
              onClick={() => handleClick(contactRefSection)}
              type="primary"
              title="Contact"
            ></Button>
          </a>
        </Navigation>
      </IntroSection>

      <Section ref={projectRefSection} id="projects">
        <Projects></Projects>
      </Section>
      <Section ref={aboutRefSection} id="about">
        <Aboutme></Aboutme>
      </Section>
      <Section ref={contactRefSection} id="contact">
        <Contact></Contact>
      </Section>
      <a href="#main">
        <BackToTopButton onClick={() => handleClick(projectRefSection)} />
      </a>
    </Container>
  );
}

export default App;
