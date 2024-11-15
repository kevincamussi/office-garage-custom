import { Colors } from "@/styles/global";
import styled from "styled-components";

export const CardStyle = styled.div<{ cardwidth: number; cardheight: number }>`
  border-radius: 8px;
  overflow: hidden;
  width: ${({ cardwidth }) => `${cardwidth}px`};
  height: ${({ cardheight }) => `${cardheight}px`};
  cursor: pointer;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${Colors.gray};
    opacity: 0;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .icon {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 2;
  }

  &:hover .icon {
    opacity: 1;
  }

  &:hover .background {
    opacity: 0.7;
  }
`;

// &:hover .overlay {
//   background-color: ${Colors.gray};
//   opacity: 0.7;
// }
