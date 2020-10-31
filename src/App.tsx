import React from "react";
import GlobalStyle from "./themes/GlobalTheme";
import { ThemeProvider } from "styled-components";
import theme from "./themes/MainTheme";
import LandingPage from "./views/LandingPage/LandingPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </>
  );
}

export default App;
