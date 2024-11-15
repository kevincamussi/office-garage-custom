"use client";

import { createGlobalStyle } from "styled-components";

export const Colors = {
  black: "#000000",
  white: "#fff",
  gray: "#D9D9D9",
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

.container {
  max-width: 1700px;
  width: 100%;
  margin: 0 auto;
}

html {
  height: 100%;
}


`;
