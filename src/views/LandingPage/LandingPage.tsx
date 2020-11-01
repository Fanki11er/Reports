import React from "react";
import styled from "styled-components";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import TopWrapper from "../../components/TopWrapper/TopWrapper";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.mainBackground};
`;

const LandingPage = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <LanguageSwitch />
      </TopWrapper>
      <HeaderSection />
    </Wrapper>
  );
};

export default LandingPage;
