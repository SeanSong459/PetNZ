import React from "react";
import DashBoard from "../Components/DashBoard/DashBoard";
import SideMenu from "../Components/DashBoard/SideMenu";
import Navbar from "../Components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import CustomizedAccordions from "../Components/DashBoard/Accordion";
import Footer from "../Components/Footer/Footer";
import "../Components/DashBoard/OrderHistory.css";

const OrderHistory = () => {
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
            <div className="order-history-wrapper">Order history</div>

            <CustomizedAccordions />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
};

export default OrderHistory;
