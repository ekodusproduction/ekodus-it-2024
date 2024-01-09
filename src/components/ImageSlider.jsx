import React, { useRef } from "react";
import "../components/ImageSlider.css";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

export const ImageSlider = () => {
  const splideOptions = {
    // Splide options go here{
    type: "loop",
    perPage: 1,
    focus: "center",
    gap: "4rem",
    padding: '7rem',
    drag: "free",
    snap: true,
    // autoplay   : true,
    // interval: 5000,
    pauseOnHover: true,
  };

  const splideRef = useRef();

  // const togglePlayPause = () => {
  //   const splide = splideRef.current.splide;
  //   if (splide.is( 'playing' )) {
  //     splide.pause();
  //   } else {
  //     splide.play();
  //   }
  // };

  return (
    <div className="slider__wrapper">
      <Splide
        options={splideOptions}
        ref={splideRef}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className="content">
            <div className="overlay"></div>
            <div className="content-header">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button type="button">Know More</button>
            </div>
            <div className="image-container">
            <img
              src="https://s7ap1.scene7.com/is/image/TCSCOMprod/the-future-operations:Large?wid=1260&hei=768&dpr=off"
              alt="Image 1"
            />
            </div>
            <div className="progress-bar"></div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="content">
            <div className="overlay"></div>
            <div className="content-header">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button type="button">Know More</button>
            </div>
            <div className="image-container">
            <img
              src="https://s7ap1.scene7.com/is/image/TCSCOMprod/collaboration-new:Large?wid=1260&hei=768&dpr=off"
              alt="Image 2"
            />
            </div>
            <div className="progress-bar"></div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="content">
            <div className="overlay"></div>
            <div className="content-header">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <button type="button">Know More</button>
            </div>
            <div className="image-container">
            <img
              src="https://s7ap1.scene7.com/is/image/TCSCOMprod/banking-beyond-boundaries-new:Large?wid=1260&hei=768&dpr=off"
              alt="Image 2"
            />
            </div>
            <div className="progress-bar"></div>
          </div>
        </SplideSlide>
      </Splide>
      {/* <button class="splide__toggle" type="button" onClick={togglePlayPause}>
	         <span class="splide__toggle__play">Play</span>
	        <span class="splide__toggle__pause">Pause</span>
      </button> */}
    </div>
  );
};
