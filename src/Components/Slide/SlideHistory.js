import React from "react";
import { Icon } from "@iconify/react";
import "./SlideHistory.css";
import SlideItem from "./SlideItem";
import { useRef, useState } from "react";
import Items from "./Items";

const SlideHistory = ({ title, subtitle }) => {
  // const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    // setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 35;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${520 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-520 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <div
      className="Slider-history-container"
      style={{ backgroundColor: "#f4673459" }}
    >
      <div className="SlideTxtContainer-history">
        <div className="SlideTitle-history">{title}</div>
        <div className="SlideSubtitle">{subtitle}</div>
      </div>

      <div className="SlideWrapper">
        <Icon
          className="SlideArrow left"
          icon="ic:sharp-expand-circle-down"
          color="#ec1c24"
          rotate={1}
          onClick={() => handleClick("left")}
          // style={{ display: !isMoved && "none" }}
        />
        <div className="SlideContainer-history" ref={listRef}>
          {Items.map((item) => {
            return (
              <SlideItem
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                oldprice={item.oldprice}
              />
            );
          })}

          {/* <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem />
          <SlideItem /> */}
        </div>
        <div className="icon-wrapper">
          <Icon
            className="SlideArrow right"
            icon="ic:sharp-expand-circle-down"
            color="#ec1c24"
            rotate={3}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default SlideHistory;
