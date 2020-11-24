import React, { Ref, useRef } from "react";
import styled from "styled-components";

const Header = styled.h2`
  width: 100%;
  margin: 20px auto 20px auto;
  color: ${({ theme }) => theme.borderBlue};
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
`;
const TextArea = styled.textarea`
  width: 85%;
  height: 250px;
  border: 1px solid ${({ theme }) => theme.borderBlue};
  background-color: ${({ theme }) => theme.textAreaBackground};
  border-radius: 15px;
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
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  width: 120px;
  height: 50px;
  border-radius: 15px;
  color: lightblue;
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
      <TextArea ref={textAreaRef} />
      <ButtonsWrapper>
        <Button onClick={() => convert(textAreaRef, newTab)}>Convert</Button>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

export default ImportItemsModal;
