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

body {
 
}

.container {
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

html {
  height: 100%;
}


`;

// body {
//   background-image: url("/moto.jfif");
//   background-size: 100%;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   position: relative;
//   z-index: 1;

//   ::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.05);
//     z-index: -1;
//   }
// }
