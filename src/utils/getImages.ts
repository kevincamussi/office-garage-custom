import fs from "fs";
import path from "path";

export const getImages = (): string[] => {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const fileNames = fs.readdirSync(imagesDirectory);

  return fileNames.map((fileName) => `/images/${fileName}`);
};
