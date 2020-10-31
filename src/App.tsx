import React from "react";
import GlobalStyle from "./themes/GlobalTheme";
import { ThemeProvider } from "styled-components";
import theme from "./themes/MainTheme";
import LandingPage from "./views/LandingPage/LandingPage";
import LanguageProvider from "./Providers/LanguageProvider/LanguageProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <LandingPage />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
