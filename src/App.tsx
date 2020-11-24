import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalTheme from "./themes/GlobalTheme";
import theme from "./themes/MainTheme";

import ImportItemsModal from "./components/ImportItemsModal/ImportItemsModal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <ImportItemsModal />
    </ThemeProvider>
  );
}

export default App;
