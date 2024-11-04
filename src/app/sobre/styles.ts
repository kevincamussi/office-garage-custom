import { Colors } from "@/styles/global";
import styled from "styled-components";

export const AboutCard = styled.div`
  padding: 250px 300px;
  background-color: ${Colors.gray};
`;

export const AboutDiv = styled.div`
  font-family: "Inria Sans", sans-serif;

  h2 {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }
`;
