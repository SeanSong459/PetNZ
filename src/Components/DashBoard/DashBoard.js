import React from "react";
import "./DashBoard.css";
import wave from "../../Assets/images/Wave.png";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title-wrapper">
        <div className="dashboard-title">
          Welcome Papa Bear{" "}
          <span>
            <img src={wave} />
          </span>
        </div>
        <div className="dashboard-subtitle">
          You have
          <span className="dashboard-reminder">1 flea and worm reminder </span>
          due in 2 days
          <span> . </span>
          <span className="dashboard-subtitle">
            Add only $10.55 more to your cart for free shipping!
          </span>
        </div>
      </div>

      {/*--------------------- dashboard-history-section -------------------*/}
      <div className="dashboard-history-wrapper">
        <div className="dashboard-history-title-wrapper">
          <div className="dashboard-history-title">Order history</div>
          <div className="dashboard-history-subtitle">Latest orders:</div>
        </div>
        <button className="dashboard-history-button">VIEW ALL</button>
      </div>

      <div className="dashboard-accordian-wrapper"></div>
      {/*--------------------- dashboard-my pets-section -------------------*/}

      {/*--------------------- dashboard-Current Specials-section -------------------*/}
    </div>
  );
};

export default DashBoard;
