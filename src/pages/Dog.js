import React from "react";
import HeroDog from "../Components/Hero/Hero-dog";
import Navbar from "../Components/Navbar/Navbar";
import Slide from "../Components/Slide/Slide";
import Footer from "../Components/Footer/Footer";
import SlideHistory from "../Components/Slide/SlideHistory";
import Items from "../Components/Slide/Items";
import Toys from "../Components/Slide/Toys";
import Itemsmix from "../Components/Slide/Itemsmix";
import { motion } from "framer-motion";
const Dog = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0.7, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <HeroDog />
      <div className="dogpage-title-wrapper">
        <div className="dogpage-title">THE DOG HOUSE </div>
      </div>
      <Slide
        title="Current specials"
        subtitle="Sale ends on July 1 - don't miss out!"
        arr={Items}
      />
      <Slide
        title="Customer favourites"
        subtitle="A selection of products loved by our customers over the past 7 days:"
        arr={Itemsmix}
      />
      <div className="SlideHistoryWrapper" style={{ marginTop: "80px" }}>
        <SlideHistory title="From your order history" arr={Toys} />
      </div>

      <Footer />
    </motion.div>
  );
};

export default Dog;
