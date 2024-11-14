"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const images = [
  "/carousel/foto4.JPG",
  "/carousel/foto5.JPG",
  "/carousel/foto6.JPG",
  "/carousel/foto7.JPG",
  "/carousel/foto8.JPG",
  "/carousel/foto9.JPG",
];

const Background = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  transition: background-image 1s ease-in-out;
  filter: blur(3px);

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

export const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background style={{ backgroundImage: `url(${images[currentIndex]})` }} />
  );
};
