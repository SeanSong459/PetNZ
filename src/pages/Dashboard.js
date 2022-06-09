import React from "react";
import DashBoard from "../Components/DashBoard/DashBoard";
import SideMenu from "../Components/DashBoard/SideMenu";
import Navbar from "../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CustomizedAccordions from "../Components/DashBoard/Accordion";
import Footer from "../Components/Footer/Footer";
// import PetSlide from "../Components/DashBoard/PetSlide";
import MypetSection from "../Components/DashBoard/MypetSection";
import SlideHistory from "../Components/Slide/SlideHistory";
import Items from "../Components/Slide/Items";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="dashboardwrapper"
        style={{ width: "85%", margin: "auto" }}
      >
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <SideMenu />
          </Grid>
          <Grid item lg={8.5}>
            <DashBoard />
            <CustomizedAccordions />
            <MypetSection />
          </Grid>
        </Grid>
      </motion.div>
      <SlideHistory title="Current Specials" arr={Items} />

      <Footer />
    </>
  );
};

export default Dashboard;
