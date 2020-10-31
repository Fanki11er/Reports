import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
}

html {
    width: 100vw;
    min-height: 100vh;
    font-family: "Montserrat";
    overflow-x: hidden;
}
body: {
  
}
`;

export default GlobalStyle;
