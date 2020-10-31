import React from "react";
import styled from "styled-components";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import TopWrapper from "../../components/TopWrapper/TopWrapper";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <TopWrapper></TopWrapper>
      <HeaderSection />
    </Wrapper>
  );
};

export default LandingPage;
