import React, { Ref, useRef } from "react";
import styled from "styled-components";
import { JoinButton as ConvertButton, CancelButton } from "../Buttons/Buttons";

const Header = styled.h2`
  width: 100%;
  margin: 0 auto 40px auto;
  color: ${({ theme }) => theme.borderBlue};
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  user-select: none;
`;
const TextArea = styled.textarea`
  width: 85%;
  height: 250px;
  border: 1px solid ${({ theme }) => theme.borderBlue};
  background-color: ${({ theme }) => theme.textAreaBackground};
  border-radius: 15px;
  outline: none;
  :focus,
  :hover {
    border: 1px solid ${({ theme }) => theme.borderBlue};
    box-shadow: 0px 0px 6px ${({ theme }) => theme.borderBlue};
  }

  ::placeholder {
    text-align: center;
    padding-top: calc(25% - ${({ theme }) => theme.fontSizes.medium});
    font-size: ${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.turquoise};
    font-weight: bold;
  }
`;

const ModalWrapper = styled.div`
  top: 100px;
  left: calc((100vw - 600px) / 2);
  position: absolute;
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  background-color: ${({ theme }) => theme.modalBlue};
  border-radius: 30px;
  padding: 50px 0;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 12%;
  justify-content: space-around;
  margin: 45px 0 0 0;
`;

const ImportItemsModal = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const convert = (
    ref: React.RefObject<HTMLTextAreaElement>,
    newTab: Array<string[]>
  ) => {
    getLines(ref).forEach((line) => {
      newTab.push(line.split("\t"));
    });
    console.log(newTab);
  };

  const newTab: Array<string[]> = [];

  const getLines = (ref: React.RefObject<HTMLTextAreaElement>) => {
    const value = ref.current?.value;
    const lines = value?.split("\n");
    return lines?.length ? lines : [];
  };

  /*const splitToCells = (lines: string[]) => {
    let cells;
    if (lines?.length) {
        lines.forEach(line => {
           cells.push( line.split("\t"));
        })
    }
    console.log(cells);
  }*/
  return (
    <ModalWrapper>
      <Header>Import items</Header>
      <TextArea ref={textAreaRef} placeholder={"Paste tables from excel"} />
      <ButtonsWrapper>
        <ConvertButton>Convert</ConvertButton>
        <CancelButton>Cancel</CancelButton>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default ImportItemsModal;
/*<Button onClick={() => convert(textAreaRef, newTab)}>Convert</Button> */
