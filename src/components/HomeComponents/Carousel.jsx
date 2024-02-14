import React from "react";
import "../../css/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };
  return (
    <>
      <div className="carousel-container">
        <h1>Services</h1>
      </div>
      <div className="main-carousel">
        <div className="carousel">
          <Slider {...settings}>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?business
                    "
                alt="1"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?office"
                alt=" 2"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?work"
                alt=" 3"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?professional"
                alt=" 4"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?startup"
                alt=" 5"
              />
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/600x500?presentation"
                alt=" 6"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Carousel;
