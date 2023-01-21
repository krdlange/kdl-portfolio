import "./App.css";
import background from "./images/bg-img.jpg";
import styled from "styled-components";
import Intro from "./components/Intro/Intro.js";
import Projects from "./components/Projects/Projects.js";
import Aboutme from "./components/About Me/Aboutme";

function App() {
  const BackgroundImage = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom right, left, right;
  `;

  const Container = styled.section`
    display: flex;
    width: 100%;
    margin: 0 auto;
  `;

  // const IntroButtonsContainer = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   flex-wrap: wrap;
  //   margin-bottom: 314px;
  // `

  return (
    <div>
      <Container>
        <BackgroundImage>
          <Intro></Intro>
          <Projects></Projects>
          <Aboutme></Aboutme>
        </BackgroundImage>
      </Container>
    </div>
  );
}

export default App;
