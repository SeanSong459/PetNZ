import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Slide from "../Components/Slide/Slide";
import SectionInfo from "../Components/SectionInfo/SectionInfo";
import FoodSlider from "../Components/FoodSlider/FoodSlider";
import Footer from "../Components/Footer/Footer";
// import SliderSection from "../Components/FoodSlider/SliderSection";

const Home = () => {
  return (
    <>
      <div className="home" style={{ overflow: "hidden" }}>
        <Navbar />
        <Hero />
        <Slide
          title="Current specials"
          subtitle="Sale ends on July 1 - don't miss out!"
        />
        <SectionInfo />
        <FoodSlider />
        {/* <SliderSection /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
