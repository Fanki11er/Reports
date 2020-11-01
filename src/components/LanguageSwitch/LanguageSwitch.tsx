import { EventType } from "@testing-library/react";
import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { InputType } from "zlib";
import { LanguageContext } from "../../Providers/LanguageProvider/LanguageProvider";

const SwitchWrapper = styled.div`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: white;
  position: relative;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: blue;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
  }
`;

const Checkbox = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const LanguageSwitch = () => {
  const { selectLanguage } = useContext(LanguageContext);
  const handleSwitch = (e: ChangeEvent<HTMLInputElement>) => {
    const selection = e.target.checked;
    selectLanguage(selection);
  };
  return (
    <SwitchWrapper>
      <Checkbox type={"checkbox"} onChange={(e) => handleSwitch(e)} />
    </SwitchWrapper>
  );
};

export default LanguageSwitch;
