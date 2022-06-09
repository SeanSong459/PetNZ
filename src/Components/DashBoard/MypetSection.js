import React from "react";
import Pets from "./Petsdata";
import PetSlide from "./PetSlide";
import "./MypetSection.css";

const MypetSection = () => {
  return (
    <div className="petsection-wrapper">
      <div className="petsection-title-wrapper">
        <div className="petsection-title">My pets</div>
        <button className="petsection-button">VIEW ALL</button>
      </div>

      <div className="petsection-card-slider">
        <PetSlide arr={Pets} />
      </div>
    </div>
  );
};

export default MypetSection;
