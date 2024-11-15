import Card from "@/components/Card";
import { getImages } from "@/utils/getImages";

const images = getImages();

const Portfolio = () => {
  return (
    <div className="pb-12">
      <div className="gap-10 container flex flex-wrap justify-around  bg-white p-12 rounded-2xl">
        {images.map((image) => (
          <Card cardwidth={500} cardheight={300} key={image} images={[image]} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
