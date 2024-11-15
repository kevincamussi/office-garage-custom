"use client";

import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(3px);
  overflow: hidden;

  .fade-in {
    opacity: 1;
    transition: opacity 3s ease-in-out;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 3s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    pointer-events: none;
  }
`;
