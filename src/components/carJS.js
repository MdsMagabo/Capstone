// Carjs.js
import React, { useEffect } from "react";
import { tns } from "tiny-slider/src/tiny-slider";

const Carjs = () => {
  useEffect(() => {
    const carSlider = tns({
      container: "#car-slider",
      slideBy: 1,
      speed: 400,
      nav: false,
      autoplay: true,
      controls: false,
      autoplayButtonOutput: false,
      responsive: {
        1600: {
          items: 4,
          gutter: 20,
        },
        1024: {
          items: 3,
          gutter: 20,
        },
        768: {
          items: 2,
          gutter: 20,
        },
        480: {
          items: 1,
          gutter: 20,
        },
      },
    });

    // Return a cleanup function to destroy the slider when the component unmounts
    return () => {
      carSlider.destroy();
    };
  }, []);

  // This component doesn't need to render anything, so you can return null or an empty fragment.
  return null;
};

export default Carjs;
