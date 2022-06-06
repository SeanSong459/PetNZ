import React from "react";
import DashBoard from "../Components/DashBoard/DashBoard";
import SideMenu from "../Components/DashBoard/SideMenu";
import Navbar from "../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CustomizedAccordions from "../Components/DashBoard/Accordion";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div
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
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
