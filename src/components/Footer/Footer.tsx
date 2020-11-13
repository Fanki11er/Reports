import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/svg/MyLogo.svg";

const FooterWrapper = styled.footer`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 80px;
  background-color: transparent;
  padding: 0 30px;
  bottom: 0;
  left: 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100%;
  align-items: center;
`;

const AppVersion = styled.span`
  color: ${({ theme }) => theme.myLogoBlue};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
`;

const Logo = styled.img`
  margin: 5px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoWrapper>
        <Logo src={LogoImg} alt={"MyLogo"} />
        <AppVersion>ver 0.0.1</AppVersion>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
