import React from "react";
import "./InfoCard.css";

const InfoCard = ({ Title, Text, Button }) => {
  return (
    <div className="InfoCardContainer">
      <div className="InfoCardTitle">{Title}</div>
      <div className="InfoCardText">{Text}</div>
      <button className="InfoCardButton">{Button}</button>
    </div>
  );
};

export default InfoCard;
