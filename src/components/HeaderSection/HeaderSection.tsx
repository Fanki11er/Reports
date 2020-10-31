import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../Providers/LanguageProvider/LanguageProvider";

const Wrapper = styled.section`
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 120px;
`;
const Span = styled.span`
  font-size: 80px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  margin: 0 20px 0 0;
`;
const PurpleSpan = styled(Span)`
  color: ${({ theme }) => theme.darkPurple};
`;

const GreenSpan = styled(Span)`
  color: ${({ theme }) => theme.lightGreen};
`;

const Line = styled.div`
  display: flex;
  margin-top: -5px;
`;

const DescriptionParagraph = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0 0 0;
`;

const HeaderSection = () => {
  const {
    lang: {
      strings: { landingPage },
    },
  } = useContext(LanguageContext);
  const {
    headerSection: {
      firstSpan,
      secondSpan,
      thirdSpan,
      forthSpan,
      descriptionParagraph,
    },
  } = landingPage;
  console.log(descriptionParagraph);
  return (
    <Wrapper>
      <Line>
        <Span>{firstSpan}</Span>
      </Line>
      <Line>
        <Span>{secondSpan}</Span>
        <PurpleSpan>{thirdSpan}</PurpleSpan>
      </Line>
      <Line>
        <GreenSpan>{forthSpan}</GreenSpan>
      </Line>
      <DescriptionParagraph>{descriptionParagraph}</DescriptionParagraph>
    </Wrapper>
  );
};

export default HeaderSection;
