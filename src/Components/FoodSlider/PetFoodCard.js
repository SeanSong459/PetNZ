import React from "react";
import "./PetFoodCard.css";

export const PetFoodCatd = ({ img, name }) => {
  return (
    <>
      <div className="PetFoodCardContainer">
        <div className="PetFoodImgContainer">
          <img className="PetFoodImg" src={img} alt="#"></img>
        </div>
        <div className="PetFoodName">{name}</div>
      </div>
    </>
  );
};
