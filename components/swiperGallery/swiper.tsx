import React from "react";
import Swiper from "react-id-swiper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const SliderIReact = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    // loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    renderPrevButton: () => <Button className="swiper-button-prev">Prev</Button>,
    renderNextButton: () => <Button className="swiper-button-next">Next</Button>

  };
  return (
    <Swiper {...params} >
         <div className="tb-color-bg--amber-300 tb-width--full">
            <p>slide1</p>
          </div>
          <div className="tb-color-bg--amber-300">
            <p>slide2</p>
          </div>
    </Swiper>

  );
};
export default SliderIReact;
