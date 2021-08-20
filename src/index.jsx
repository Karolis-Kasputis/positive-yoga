import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
html {
  width:100%;
  box-sizing: border-box;
}
body {
  width:100%;
  box-sizing: border-box;
  margin: 0;
}
div {
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
