"use client;";

import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "@/styles/global";

export const AboutCard = styled(motion.div)`
  padding: 250px 300px;
  background-color: ${Colors.gray};
`;

export const AboutDiv = styled(motion.div)`
  font-family: "Inria Sans", sans-serif;

  h2 {
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }
`;
