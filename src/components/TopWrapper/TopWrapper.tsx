import React from "react";
import styled from "styled-components";
import LogoSvg from "../../assets/svg/Logo.svg";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import Navigation from "../Navigation/Navigation";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 0 50px;
  position: relative;
`;

const Logo = styled.img`
  width: 150px;
`;

const TopWrapper = (props: React.ComponentProps<any>) => {
  const { children } = props;

  return (
    <Wrapper>
      <Logo src={LogoSvg} />
      {children}
      <Navigation />
      <LanguageSwitch />
    </Wrapper>
  );
};

export default TopWrapper;
