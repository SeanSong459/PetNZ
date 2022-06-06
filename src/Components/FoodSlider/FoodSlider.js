import React from "react";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import "./FoodSlider.css";
import stepper1 from "../../Assets/images/Stepper1.png";

const FoodSlider = () => {
  const [isMoved, setIsMoved] = useState(false);

  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 45;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${1760 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-1760 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <>
      <div className="FoodSliderTitle">Find your pet's favourite food!</div>
      <div className="FoodSliderSubtitle">
        Use our Food Finder below to search for your pet's favourite food!
      </div>
      <div className="FoodSlideWrapper">
        <div
          className="LeftArrowWrapper"
          style={{ display: !isMoved && "none" }}
        >
          <Icon
            className="FoodSlideArrow left"
            icon="ic:sharp-expand-circle-down"
            color="#ec1c24"
            rotate={1}
            onClick={() => handleClick("left")}
          />
        </div>

        <div className="FoodSlideContainer" ref={listRef}>
          <div className="FoodSlider1">
            <div className="SlideInner1">
              <div className="Stepper1Container">
                <img src={stepper1} alt="" />
                <div className="FoodFinderTitle">
                  What type of pet do you have?
                </div>
                <div className="FoodFinderSubtitle">Select one:</div>
              </div>
            </div>
          </div>
          <div className="FoodSlider2">
            <div className="SlideInner2">22222</div>
          </div>
          <div className="FoodSlider3">
            <div className="SlideInner3">3333333</div>
          </div>
        </div>
        <div className="icon-wrapper">
          <Icon
            className="FoodSlideArrow right"
            icon="ic:sharp-expand-circle-down"
            color="#ec1c24"
            rotate={3}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default FoodSlider;
