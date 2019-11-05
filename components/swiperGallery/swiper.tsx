import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function DemoCarousel() {
  const theme = useTheme();
  const ltSm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  return (
      <Carousel dynamicHeight={true} autoPlay infiniteLoop>
        {_mFeatureItems}
      </Carousel>
  );
}

let carouselItems = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.png"
];

const _mFeatureItems = carouselItems.map((item, index) => (
  <div key={index}>
    <img className="tb-image" src={item} />
  </div>
));
