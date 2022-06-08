import React from "react";
import "./SlideItem.css";
import { Icon } from "@iconify/react";
// import "./SlideItem.css";

const SlideItem = ({ img, name, price, oldprice }) => {
  return (
    <div className="slideItemContainer">
      <div className="ItemImg">
        <img src={img} alt="#"></img>
      </div>
      <div className="ItemInfoWrapper">
        <div className="ProductName">{name}</div>
        <div className="ProductPrice">
          {price}
          <span className="ProductOldprice">(was {oldprice})</span>
        </div>
        <button className="ShoppingCartButton">
          <Icon
            className="round-add-shopping-cart"
            icon="ic:round-add-shopping-cart"
            color="white"
            width="30"
            height="30"
          />
        </button>
      </div>
    </div>
  );
};

export default SlideItem;
