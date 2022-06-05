import React from "react";
import { Slide } from "react-slideshow-image";
import "./SliderSection.css";

const SliderSection = () => {
  return (
    <div className="slide-show-container">
      <Slide easing="ease">
        <div className="each-slide">
          <div>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default SliderSection;
