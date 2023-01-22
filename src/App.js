import "./App.css";
import styled from "styled-components";
import Intro from "./components/Intro/Intro.js";
import Projects from "./components/Projects/Projects.js";
import Aboutme from "./components/About Me/Aboutme";
import Contact from "./components/Contact/Contact";

function App() {  
  
  const Container = styled.div`
    display: flex;
  `;

  const Background = styled.div`
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
    width: 100%;
    height: 100%;
      `;

  const Row = styled.div`
    height: 100vh;
  `;

  return (
    <div>
      <Container>
        <Background>
          <Row>
            <Intro></Intro>
          </Row>
          <Row>
            <Projects></Projects>
          </Row>
          <Row>
            <Aboutme></Aboutme>
          </Row>
          <Row>
            <Contact></Contact>
          </Row>
        </Background>
      </Container>
    </div>
  );
}

export default App;
