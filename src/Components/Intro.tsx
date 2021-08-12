import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

import mobx from "../Images/mobx.png";
import aws from "../Images/aws.png";

interface mediaType {
  tablet: boolean;
}

const Intro: React.FC = observer(() => {
  const isTablet = useMediaQuery({ maxWidth: 768 });

  return (
    <IntroFrame tablet={isTablet}>
      <Introduce>
        <h2 className="bigTitle"> Frontend Developer</h2>
        <p>
          1년차 프론트엔드 개발자 이지윤입니다. 초기 스타트업의 첫번째
          프론트엔드 개발자로서 ReactJS와 AWS, Git을 이용하여 프로젝트의
          설계부터 배포, 운영까지 경험했으며, 원활한 커뮤니케이션과 일정 조율을
          위해 데이터사이언티스트, 백엔드 개발자와 웹 개발 타임라인을 구성하여
          업무 효율을 높였습니다. 지속 가능한 코드를 쓰기 위해 노력하고, 새로운
          기술을 익히는 것을 좋아해 TypeScript와 React Native 공부를
          시작했습니다.
        </p>
      </Introduce>

      <Skills>
        <h2 className="bigTitle">Skills</h2>
        <SkillImage>
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#e55125" }}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "#0a73b8" }}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#61DAFB" }}
            size="2x"
          />
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ color: "#E5A228" }}
            size="2x"
          />
          <FontAwesomeIcon icon={faGit} size="2x" />
          <img src={mobx} alt="mobx" />
          <img src={aws} alt="aws" />
        </SkillImage>
        <p>React.js, HTML, CSS(SCSS)로 웹을 개발합니다.</p>
        <p>Styled-Component를 이용하며, 반응형 웹을 만들 수 있습니다.</p>
        <p>상태 관리 도구로 React Hooks와 MobX를 이용합니다.</p>
        <p>Git으로 코드를 관리합니다.</p>
        <p>AWS를 이용하여 서비스를 배포합니다.</p>
        <p>Slack, Notion, Zeplin 등 협업 도구를 이용합니다.</p>
      </Skills>
    </IntroFrame>
  );
});

export default Intro;

const IntroFrame = styled.div<mediaType>`
  display: ${({ tablet }) => (tablet ? "block" : "grid")};
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ tablet }) => (tablet ? "0" : "30px")};
  padding: 0 20px;
`;

const SkillImage = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 28px;
  }

  svg,
  img {
    margin: 0 15px 10px 0;
  }
`;
const Introduce = styled.div``;
const Skills = styled.div``;
