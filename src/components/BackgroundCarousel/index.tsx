"use client";

import { useEffect, useState } from "react";
import { Background } from "./styles";
import Image from "next/image";

export const BackgroundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/carousel/FOTO1.JPG",
    "/carousel/FOTO2.JPG",
    "/carousel/FOTO3.JPG",
    "/carousel/FOTO4.JPG",
    "/carousel/FOTO5.JPG",
    "/carousel/FOTO6.JPG",
    "/carousel/FOTO7.JPG",
    "/carousel/FOTO8.JPG",
    "/carousel/FOTO9.JPG",
    "/carousel/FOTO10.JPG",
    "/carousel/FOTO11.JPG",
    "/carousel/FOTO12.JPG",
    "/carousel/FOTO13.JPG",
    "/carousel/FOTO14.JPG",
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
          priority={index === 0}
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          className={index === currentIndex ? "fade-in" : "fade-out"}
        />
      ))}
    </Background>
  );
};
