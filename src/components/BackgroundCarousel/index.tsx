"use client";

import { useEffect, useState } from "react";
import { Background } from "./styles";
import Image from "next/image";

export const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/carousel/foto4.JPG",
    "/carousel/foto5.JPG",
    "/carousel/foto6.JPG",
    "/carousel/foto7.JPG",
    "/carousel/foto8.JPG",
    "/carousel/foto9.JPG",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Background
    //   style={{
    //     backgroundImage: `${
    //       pathname === "/home"
    //         ? `url(${images[currentIndex]})`
    //         : "url(/carousel/IMG_2514.JPG)"
    //     } `,
    //   }}
    //   className={isFading ? "fade-out" : ""}
    >
      {images.map((src, index) => (
        <Image
          layout="fill"
          objectFit="cover"
          priority
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          className={index === currentIndex ? "fade-in" : "fade-out"}
        />
      ))}
    </Background>
  );
};
