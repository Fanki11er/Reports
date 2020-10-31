import React from "react";
import styled from "styled-components";
import LogoSvg from "../../assets/svg/Logo.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: transparent;
  padding: 0 50px;
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
    </Wrapper>
  );
};

export default TopWrapper;
