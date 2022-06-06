import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Slide from "../Components/Slide/Slide";

const Home = () => {
  return (
    <>
      <div className="home" style={{ overflow: "hidden" }}>
        <Navbar />
        <Hero />
        <Slide />
      </div>
    </>
  );
};

export default Home;
