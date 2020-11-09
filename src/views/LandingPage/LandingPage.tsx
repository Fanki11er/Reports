import React from "react";
import styled from "styled-components";
import AnimatedLaptop from "../../components/AnimatedLaptop/AnimatedLaptop";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import TopWrapper from "../../components/TopWrapper/TopWrapper";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <TopWrapper></TopWrapper>
      <HeaderSection />
      <AnimatedLaptop />
    </Wrapper>
  );
};

export default LandingPage;
