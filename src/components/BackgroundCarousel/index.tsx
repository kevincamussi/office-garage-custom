"use client";

import React, { useEffect, useState } from "react";
import { Background } from "./styles";
import Image from "next/image";

type CarouselType = {
  images: string[];
};

const BackgroundCarousel = ({ images }: CarouselType) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Background>
      {images.map((src, index) => (
        <Image
          layout="fill"
          objectFit="cover"
          key={index}
          priority={index === 0}
          src={src}
          alt={`Background ${index + 1}`}
          className={index === currentIndex ? "fade-in" : "fade-out"}
        />
      ))}
    </Background>
  );
};

export default BackgroundCarousel;
