import Card from "@/components/Card";
import { getImages } from "@/utils/getImages";

const images = getImages();

const Portfolio = () => {
  return (
    <div className=" gap-10 container flex flex-wrap justify-around mt-4 bg-white p-12 rounded-2xl">
      {images.map((image) => (
        <Card cardwidth={500} cardheight={300} key={image} images={[image]} />
      ))}
    </div>
  );
};

export default Portfolio;
