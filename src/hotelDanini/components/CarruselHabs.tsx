import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imgs: string[];
  thumbs: boolean;
}

export const CarruselHabs: FC<Props> = ({ imgs = [], thumbs = true }) => {
  return (
    <>
      <Carousel
        ariaLabel="Platillos"
        autoFocus
        axis="horizontal"
        autoPlay
        emulateTouch
        infiniteLoop
        interval={3000}
        swipeable
        showThumbs={thumbs}
        showStatus={false}
      >
        {imgs.map((im, i) => (
          <div key={i}>
            <img src={im} alt={`Slide ${i}`} />
          </div>
        ))}
      </Carousel>
    </>
  );
};
