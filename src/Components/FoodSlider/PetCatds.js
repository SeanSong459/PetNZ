import React from "react";
import "./PetCards.css";

export const PetCatds = ({ img, name }) => {
  return (
    <>
      <div className="PetCardContainer">
        <div className="PetImgContainer">
          <img className="PetImg" src={img} alt=""></img>
        </div>
        <div className="PetName">{name}</div>
      </div>
    </>
  );
};
