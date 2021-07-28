import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import AboutMe from "./Components/AboutMe";
import Intro from "./Components/Intro";
import styled from "styled-components";
import History from "./Components/History";
import { education, experience, projects } from "./data.json";

interface mediaType {
  tablet: boolean;
}

const Main: React.FC = observer(() => {
  const isTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <MainFrame tablet={isTablet}>
      <h1>{"{ JiYun Lee }"}</h1>
      <AboutMe />
      <Intro />
      <History data={projects} title="Projects" />
      <History data={experience} title="Experience" />
      <History data={education} title="Education" />
    </MainFrame>
  );
});

export default Main;

const MainFrame = styled.div<mediaType>`
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
  padding: 0 20px;
  max-width: 960px;

  h1 {
    margin: 150px auto;
    width: 320px;
    font-family: "GongGothicBold";
    font-size: ${({ tablet }) => (tablet ? "36px" : "48px")};
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
  }
  h1:hover {
    text-align: center;

    background: linear-gradient(
      to right,
      #000 20%,
      yellowgreen 40%,
      yellowgreen 60%,
      #000 80%
    );
    background-size: 200% auto;

    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shine 3s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }

  .bigTitle {
    margin: 25px 0 10px;
    font-size: 36px;
  }
`;
