import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Slide from "../Components/Slide/Slide";
import SectionInfo from "../Components/SectionInfo/SectionInfo";
import FoodSlider from "../Components/FoodSlider/FoodSlider";
// import SliderSection from "../Components/FoodSlider/SliderSection";

const Home = () => {
  return (
    <>
      <div className="home" style={{ overflow: "hidden" }}>
        <Navbar />
        <Hero />
        <Slide />
        <SectionInfo />
        <FoodSlider />
        {/* <SliderSection /> */}
      </div>
    </>
  );
};

export default Home;
