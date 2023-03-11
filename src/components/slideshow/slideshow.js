import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { slides } from "../../utils/data";

import "./slideshow.css";
import SideBar from "../sideBar/sidebar";
import Autocarosel from "../caorosel/carosel-slider";
const Slider = ({ showMobileNav }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = slides.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <React.Fragment>
      {showMobileNav && <SideBar width="100%" />}

      {/* <div className="slider">
        <div className="slide">
          <Autocarosel />
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Slider;
