import React from "react";
import GlobalStyle from "./themes/GlobalTheme";
import { ThemeProvider } from "styled-components";
import theme from "./themes/MainTheme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
