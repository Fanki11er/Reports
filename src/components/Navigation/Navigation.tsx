import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Providers/LanguageProvider/LanguageProvider";
import { SignInButton, JoinButton } from "../Buttons/Buttons";

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 100%;
  background-color: transparent;
`;

const Navigation = () => {
  const {
    lang: {
      strings: { navigation },
    },
  } = useContext(LanguageContext);

  const { signInButton, joinButton } = navigation;
  return (
    <Wrapper>
      <SignInButton>{signInButton}</SignInButton>
      <JoinButton>{joinButton}</JoinButton>
    </Wrapper>
  );
};

export default Navigation;
