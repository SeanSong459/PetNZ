import React from "react";
import FilterPanel from "../Components/FilterPanel/FilterPanel";
import Footer from "../Components/Footer/Footer";
import HeroDogFood from "../Components/Hero/HeroDogFood";
import Navbar from "../Components/Navbar/Navbar";
import SlideHistory from "../Components/Slide/SlideHistory";
import Grid from "@mui/material/Grid";
import Slide from "../Components/Slide/Slide";

const DogFood = () => {
  return (
    <>
      <Navbar />
      <HeroDogFood />
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <FilterPanel />
        </Grid>
        <Grid item lg={8.5}>
          {/* <div >Dog food specials</div> */}
          <Slide
          // title="Dog food specials"
          // subtitle="Sale ends on July 1 - don't miss out!"
          />
          <Slide
          // title="Customer Favourites"
          // subtitle="A selection of products loved by our customers over the past 7 days:"
          />
        </Grid>
      </Grid>

      <SlideHistory title="From your order history" />
      <Footer />
    </>
  );
};

export default DogFood;
