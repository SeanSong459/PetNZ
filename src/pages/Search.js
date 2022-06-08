import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";

import FilterPanel from "../Components/FilterPanel/FilterPanel";
import SearchResult from "../Components/SearchResult/SearchResult";
import ScrollToTop from "../Components/ScrollToTop";

const Search = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Grid container spacing={2}>
        <Grid item lg={3.5}>
          <FilterPanel />
          {/* <SearchResult /> */}
        </Grid>
        <Grid item lg={7.5}>
          <SearchResult />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Search;
