"use client";

import Image from "next/image";

import { CardStyle } from "./styles";
import { motion } from "framer-motion";

export type CardProps = {
  cardwidth: number;
  cardheight: number;
  images?: string[];
};

const Card = ({ cardwidth, cardheight, images }: CardProps) => {
  const image = images && images.length > 0 ? images[0] : "/images/FOTO1.JPG";
  const zoomImage = "/zoom.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <CardStyle cardwidth={cardwidth} cardheight={cardheight}>
        {images ? (
          <Image
            width={cardwidth}
            height={cardheight}
            src={image}
            alt={`Image index + 1}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        ) : (
          <div></div>
        )}
        <div className="overlay">
          <div className="background" />
          <Image
            src={zoomImage}
            width={80}
            height={80}
            alt="Zoom"
            className="icon"
          />
        </div>
      </CardStyle>
    </motion.div>
  );
};

export default Card;
