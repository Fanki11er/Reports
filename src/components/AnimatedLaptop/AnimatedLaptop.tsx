import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ReactComponent as Laptop } from "../../assets/svg/LandingAnimation.svg";

const Animation = styled(Laptop)`
  position: absolute;
  right: -10px;
  top: 10px;
  width: 700px;
  height: 700px;
`;

const AnimatedLaptop = () => {
  return <Animation />;
};

export default AnimatedLaptop;
