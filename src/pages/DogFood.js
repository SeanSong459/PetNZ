import React from "react";
import FilterPanel from "../Components/FilterPanel/FilterPanel";
import Footer from "../Components/Footer/Footer";
import HeroDogFood from "../Components/Hero/HeroDogFood";
import Navbar from "../Components/Navbar/Navbar";
import SlideHistory from "../Components/Slide/SlideHistory";
import Grid from "@mui/material/Grid";
import Slide from "../Components/Slide/Slide";
// import Items from "../Components/Slide/Items";
import Toys from "../Components/Slide/Toys";
import Items from "../Components/Slide/Items";
import Itemsfood from "../Components/Slide/Itemsfood";
import { motion } from "framer-motion";

const DogFood = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0.7, transition: { duration: 0.5 } }}
      >
        <HeroDogFood />
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <FilterPanel />
          </Grid>
          <Grid item lg={8.5}>
            {/* <div >Dog food specials</div> */}
            <Slide
              title="Dog food specials"
              subtitle="Sale ends on July 1 - don't miss out!"
              arr={Items}
            />
            <Slide
              title="Customer Favourites"
              subtitle="A selection of products loved by our customers over the past 7 days:"
              arr={Itemsfood}
            />
          </Grid>
        </Grid>
        <SlideHistory title="From your order history" arr={Toys} />
        <Footer />
      </motion.div>
    </>
  );
};

export default DogFood;
