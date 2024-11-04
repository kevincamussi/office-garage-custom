"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
  max-width: 100px;
  width: 100%;
}
`;

export const Colors = {
  black: "#000",
  white: "#fff",
};
