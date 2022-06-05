import React from "react";
import InfoCard from "./InfoCard";
import "./SectionInfo.css";
import Img from "../../Assets/images/still-life-pet-toys 1.png";
import brand1 from "../../Assets/images/brand1.png";
import brand2 from "../../Assets/images/brand2.png";
import brand3 from "../../Assets/images/brand3.png";

const SectionInfo = () => {
  return (
    <div className="SectionInfoContainer">
      <div className="SectionInfoTop">
        <div className="SectionInfoTopLeft">
          <InfoCard
            className="InfoCard"
            Title="Top brands"
            Text="From Acana to Addiction, and WellnessCORE to Ziwi Peak, we've got you covered with the biggest brands."
            Button="VIEW TOP BRANDS"
          />
        </div>
        <div className="SectionInfoTopRight">
          <div className="BrandContainer">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
          </div>
        </div>
      </div>
      <div className="SectionInfoBottom">
        <div className="SectionInfoBottomLeft">
          <img src={Img} alt="" style={{ maxWidth: "960px" }} />
        </div>
        <div className="SectionInfoBottomRight">
          <InfoCard
            className="InfoCard"
            Title="Customer favourites"
            Text={`See all the toys, food, and accessories loved by our customers. \n- and their pets!`}
            Button="VIEW CUSTOMER FAVOURITES"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
