import styled from "styled-components";

import { Colors } from "@/styles/global";
import { hexToRgb } from "@/utils/colorUtils";

export const HeaderStyle = styled.header`
  background-color: rgba(${hexToRgb(Colors.black)}, 0.9);
  padding: 24px 0;
  z-index: 1;
  // position: relative;
  font-family: "Inria Sans", sans-serif;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  color: ${Colors.white};

  ul {
    display: flex;

    li {
      margin-left: 60px;
    }
  }
`;