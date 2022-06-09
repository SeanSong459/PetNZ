import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";

import FilterPanel from "../Components/FilterPanel/FilterPanel";
import SearchResult from "../Components/SearchResult/SearchResult";
import { useState } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import SlideHistory from "../Components/Slide/SlideHistory";
import Itemsmix from "../Components/Slide/Itemsmix";
import { motion } from "framer-motion";

const Search = () => {
  const [products, setProducts] = useState([]);
  const arr = Itemsmix;

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ScrollToTop />
      <Navbar />
      <Grid container spacing={2}>
        <Grid item lg={3.5}>
          <FilterPanel setProducts={setProducts} />
          {/* <SearchResult /> */}
        </Grid>
        <Grid item lg={7.5}>
          <SearchResult products={products} />
        </Grid>
      </Grid>
      <SlideHistory title="Have you tried these other brands?" arr={arr} />
      <Footer />
    </motion.div>
  );
};

export default Search;
