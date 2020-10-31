import React from "react";
import styled from "styled-components";
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
    </Wrapper>
  );
};

export default LandingPage;
