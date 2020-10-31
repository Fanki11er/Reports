import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
}

html {
    width: 100%;
}
body: {
    width: 100%;
    min-height: 100%;
}
`;

export default GlobalStyle;
