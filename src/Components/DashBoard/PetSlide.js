import React from "react";
import { Icon } from "@iconify/react";
import "../Slide/Slide.css";
// import SlideItem from "./SlideItem";
import { useRef, useState } from "react";
import PetCard from "./PetCard";

const PetSlide = ({ arr }) => {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    // setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 35;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${0 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-0 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <>
      <div className="PetSlideWrapper">
        <Icon
          className="SlideArrow left"
          icon="ic:sharp-expand-circle-down"
          color="#ec1c24"
          rotate={1}
          onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />
        <div className="PetSlideContainer" ref={listRef}>
          {arr.map((item) => {
            return (
              <PetCard
                key={item.id}
                img={item.img}
                name={item.name}
                type={item.type}
              />
            );
          })}
        </div>
        <div className="icon-wrapper">
          <Icon
            className="PetSlideArrow right"
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

export default PetSlide;
