import React from "react";
import "./PetCard.css";

const PetCard = ({ img, name, type }) => {
  return (
    <div className="petcard-wrapper">
      <div className="petcard-image">
        <img src={img} alt="#"></img>
      </div>
      <div className="petcard-text-wrapper">
        <div className="petcard-name">{name}</div>
        <div className="petcard-type"> {type}</div>
      </div>
    </div>
  );
};

export default PetCard;
