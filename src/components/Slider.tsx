import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
      <div className="px-5 text-white text-center">
        <img className="mb-[20px] rounded-2xl" src="https://images.squarespace-cdn.com/content/v1/6519fa1e206aa63ad494ce69/7aa8e1c9-58b7-4009-bb64-7e29cb897909/Screenshot+2025-01-16+at+1.28.46%E2%80%AFPM.jpg?format=1000w" alt="" />
        <h4 className="text-xl mb-3 font-bold">Fortunato Management</h4>
        <p>Property Management Company</p>
      </div>
    </Slider>
  );
}