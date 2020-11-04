import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Providers/LanguageProvider/LanguageProvider";
import { Languages } from "../../typescript/types";

const LanguageSelect = styled.select`
  width: 70px;
  height: 30px;
  color: ${({ theme }) => theme.veryDarkBlue};
  font-weight: bold;
  background-color: ${({ theme }) => theme.secondBackground};
  padding: 0 0 0 15px;
  border-radius: 15px;
  border: none;
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
