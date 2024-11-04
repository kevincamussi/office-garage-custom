import styled from "styled-components";

import { ButtonProps } from ".";
import { Colors } from "@/styles/global";

export const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${({ bg }) => bg};
  font-family: "Inria Sans", sans-serif;
  font-weight: bold;
  border-radius: 16px;
  padding: ${({ padding }) => padding};
  text-align: center;
  transition: 500ms;

  width: ${({ width }) => width};

  &:hover {
    background-color: ${({ hover }) => hover};
    color: ${({ hover }) =>
      hover === Colors.black ? Colors.white : Colors.black};
    transition: 500ms;
  }
`;
