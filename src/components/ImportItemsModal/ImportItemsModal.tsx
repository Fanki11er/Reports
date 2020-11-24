import React, { Ref, useRef } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 400px;
  height: 350px;
  border: 2px solid blue;
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid black;
  margin: 50px auto 0 auto;
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
      <TextArea ref={textAreaRef} />
      <Button onClick={() => convert(textAreaRef, newTab)}>Convert</Button>
    </ModalWrapper>
  );
};

export default ImportItemsModal;
