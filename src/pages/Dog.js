import React from "react";
import HeroDog from "../Components/Hero/Hero-dog";
import Navbar from "../Components/Navbar/Navbar";
import Slide from "../Components/Slide/Slide";
import Footer from "../Components/Footer/Footer";
import SlideHistory from "../Components/Slide/SlideHistory";
const Dog = () => {
  return (
    <>
      <Navbar />
      <HeroDog />
      <div className="dogpage-title-wrapper">
        <div className="dogpage-title">THE DOG HOUSE </div>
      </div>
      <Slide
        title="Current specials"
        subtitle="Sale ends on July 1 - don't miss out!"
      />
      <Slide
        title="Customer favourites"
        subtitle="A selection of products loved by our customers over the past 7 days:"
      />
      <div className="SlideHistoryWrapper" style={{ marginTop: "80px" }}>
        <SlideHistory title="From your order history" />
      </div>

      <Footer />
    </>
  );
};

export default Dog;
