import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Providers/LanguageProvider/LanguageProvider";
import { Languages } from "../../typescript/types";

const LanguageSelect = styled.select`
  position: absolute;
  right: 60px;
  top: 20px;
  width: 70px;
  height: 30px;
  color: ${({ theme }) => theme.veryDarkBlue};
  font-weight: bold;
  background-color: ${({ theme }) => theme.secondBackground};
  padding: 0 0 0 15px;
  border-radius: 12px;
  border: none;
  transition: box-shadow 0.2s, border 0.2s;

  &:hover {
    box-shadow: 0px 0px 4px ${({ theme }) => theme.veryDarkBlue};
    border: 1px solid ${({ theme }) => theme.veryDarkBlue};
  }
`;

const LanguageSwitch = () => {
  const { selectLanguage } = useContext(LanguageContext);
  const handleSwitch = (e: ChangeEvent<HTMLSelectElement>) => {
    const selection = e.target.value as Languages;
    selectLanguage(selection);
  };
  return (
    <LanguageSelect onChange={(e) => handleSwitch(e)}>
      <option selected={true} value={"EN"}>
        EN
      </option>
      <option value={"PL"}>PL</option>
    </LanguageSelect>
  );
};

export default LanguageSwitch;
