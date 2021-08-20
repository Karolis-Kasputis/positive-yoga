import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: --apple-system,  BlinkMacSystemFont, system-ui  , ui-sans-serif,  "Segoe UI", Roboto;
}
html {
  width:100%;
  font-size: 16px;
}
body {
  width:100%;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
