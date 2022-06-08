import React from "react";
import { Icon } from "@iconify/react";
import "./SearchCards.css";

const SearchCards = ({ img, name, price, oldprice }) => {
  return (
    <div>
      <div className="SearchItemContainer">
        <div className="SearchItemImg">
          <img src={img} alt="#"></img>
        </div>
        {/* <div className="SearchItemInfoWrapper"> */}
        <div className="SearchProductName">{name}</div>
        <div className="SearchProductPrice">
          {price}
          <span className="SearchProductOldprice">(was {oldprice})</span>
        </div>
        <button className="SearchShoppingCartButton">
          <Icon
            className="round-add-shopping-cart"
            icon="ic:round-add-shopping-cart"
            color="white"
            width="30"
            height="30"
          />
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SearchCards;
