import React from "react";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react";
import styled from "styled-components";
import { briefInfo } from "../data.json";
import UnderLine from "../CommonComponents/UnderLine";
import profile from "../Images/profile.jpeg";

interface mediaType {
  mobile: boolean;
  tablet: boolean;
}

const AboutMe: React.FC = observer(() => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const goToPage = (addr: string, idx: number) => {
    idx !== 0 && window.open(addr, "_blank");
  };

  return (
    <AboutMeFrame mobile={isMobile} tablet={isTablet}>
      <img className="profile" alt="profile" src={profile} />
      <Text mobile={isMobile} tablet={isTablet}>
        <h2 className="name">
          이지윤 <UnderLine />
        </h2>
        {briefInfo.map((el, idx) => {
          return (
            <Category mobile={isMobile} tablet={isTablet} key={idx}>
              <p className="button">{el.category}</p>
              <p className="address" onClick={() => goToPage(el.address, idx)}>
                {el.address}
              </p>
            </Category>
          );
        })}
      </Text>
    </AboutMeFrame>
  );
});

export default AboutMe;

const AboutMeFrame = styled.div<mediaType>`
  display: ${({ tablet }) => (tablet ? "block" : "flex")};
  align-items: center;
  grid-gap: 30px;
  width: 60%;
  min-width: ${({ tablet }) => (tablet ? "300px" : "600px")};
  max-width: ${({ tablet }) => (tablet ? "300px" : "600px")};
  margin: 0 auto 80px;

  .profile {
    display: block;
    margin: 0 auto;
    width: 160px;
    border-radius: 60px;
  }
`;

const Text = styled.div<mediaType>`
  .name {
    position: relative;
    display: block;
    margin: ${({ tablet }) => (tablet ? "20px auto 10px" : "0 0 10px 0")};
    width: fit-content;
    font-size: ${({ mobile }) => (mobile ? "28px" : "36px")};
    line-height: ${({ mobile }) => (mobile ? "36px" : "48px")};
    text-align: center;
  }
`;

const Category = styled.div<mediaType>`
  display: ${({ tablet }) => (tablet ? "block" : "flex")};
  align-items: center;
  height: ${({ tablet }) => (tablet ? "55px" : "30px")};
  font-size: 20px;
  max-width: ${({ tablet }) => (tablet ? "300px" : "")};

  .button {
    margin: ${({ tablet }) => (tablet ? "0 auto" : "0 15px 0 0")};
    width: 60px;
    height: 20px;
    background: #9acd324f;
    color: darkgreen;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
  }

  .address {
    margin: ${({ tablet }) => tablet && "0 auto"};
    text-align: center;
    &:hover {
      color: yellowgreen;
    }
    cursor: pointer;
  }
`;
