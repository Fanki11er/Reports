import React from "react";
import styled from "styled-components";
//import gsap from "gsap";
import { ReactComponent as Laptop } from "../../assets/svg/LandingAnimation.svg";

const Animation = styled(Laptop)`
  position: absolute;
  right: -10px;
  top: 10px;
  width: 700px;
  height: 700px;

  @media screen and (max-width: 1024px) {
    width: 620px;
    height: 620px;
  }

  @media screen and (max-width: 960px) {
    width: 540px;
    height: 540px;
  }
  @media screen and (max-width: 800px) {
    width: 420px;
    height: 420px;
    top: 60px;
    right: 5px;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    width: 70%;
    height: 70%;
    min-width: 360px;
    min-height: 360px;
    /*left: min((100vw - 70%) / 2, (100vw - 360px) / 2);
    top: calc(25% - 30px);*/
    top: -50vh;
  }
`;

const AnimatedLaptop = () => {
  return <Animation />;
};

export default AnimatedLaptop;
