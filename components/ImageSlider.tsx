"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true, // Allow infinite scrolling
    speed: 1000, // Speed of transition between slides (in milliseconds)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Delay between slide transitions (in milliseconds)
    pauseOnHover: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="http://picsum.photos/400/200"
            alt=""
            className="rounded-full"
          />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" alt="" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" alt="" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" alt="" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" alt="" />
        </div>
      </Slider>
    </div>
  );
};
