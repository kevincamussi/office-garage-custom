"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

.container {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}
`;

export const Colors = {
  black: "#000000",
  white: "#fff",
};
