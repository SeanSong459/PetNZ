import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordion.css";
// import { colors } from "@mui/material";
import SlideItem from "../Slide/SlideItem";
import product1 from "../../Assets/images/toy1.jpeg";
import product2 from "../../Assets/images/toy2.jpeg";
import product3 from "../../Assets/images/toy3.jpeg";
import product4 from "../../Assets/images/toy4.jpeg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    //   borderLeft: 0,
    //   borderRight: 0,
  },
  "&": {
    // borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    // backgroundColor: theme.palette.background.paper,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#BF2121" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, .03)"
      : "rgba(255, 255, 255, .05)",
  // theme.palette.mode === "dark"
  //   ? "rgba(255, 255, 255, .05)"
  //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  //   borderRight: "0px",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="AccordionContainer">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          {/* <Typography>Collapsible Group Item #1</Typography> */}
          <div className="accordion-itemwrapper">
            <div className="accordion-itemleft">
              <div className="accordion-itemtext">Oct 12, 2021</div>
              <div className="accordion-itemtext accordion-title-long">
                Grey Lynn branch
              </div>
            </div>
            <div className="accordion-itemright">
              <div className="accordion-itemtext">2 items</div>
              <div className="accordion-itemtext">$26.98</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-product-container">
            <div className="accordion-product-wrapper">
              <SlideItem
                img={product1}
                name="Multipet Lamb Chop Dog Toy"
                price="$12.99"
                oldprice="$15.99"
                className="accordion-product"
                //   style={{ height: "50px" }}
              />
            </div>

            <div className="accordion-product-price">$12.99</div>
          </div>
          <div className="accordion-product-container">
            <div className="accordion-product-wrapper">
              <SlideItem
                img={product2}
                name="Rogz Flossy Grinz Dog Toy"
                price="$13.99"
                oldprice="$15.99"
                className="accordion-product"
                //   style={{ height: "50px" }}
              />
            </div>

            <div className="accordion-product-price">$13.99</div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* -------------------Second Accordion----------------- */}

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="accordion-itemwrapper">
            <div className="accordion-itemleft">
              <div className="accordion-itemtext">Sep 8, 2021</div>
              <div className="accordion-itemtext accordion-title-short">
                Online
              </div>
            </div>
            <div className="accordion-itemright">
              <div className="accordion-itemtext">4 items</div>
              <div className="accordion-itemtext">$98.14</div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-product-container">
            <div className="accordion-product-wrapper">
              <SlideItem
                img={product3}
                name="ChuckIt Medium Ultra Ball 2 Pack Dog Toy"
                price="$28.99"
                oldprice="$33.99"
                className="accordion-product"
                //   style={{ height: "50px" }}
              />
            </div>

            <div className="accordion-product-price">$28.99</div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* -------------------third Accordion----------------- */}

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="accordion-itemwrapper">
            <div className="accordion-itemleft">
              <div className="accordion-itemtext">Sep 2, 2021</div>
              <div className="accordion-itemtext">Manukau branch</div>
            </div>
            <div className="accordion-itemright">
              <div className="accordion-itemtext">3 items</div>
              <div className="accordion-itemtext">$44.97</div>
            </div>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <div className="accordion-product-container">
            <div className="accordion-product-wrapper">
              <SlideItem
                img={product4}
                name="Nylabone Dental Chew Dog Toy"
                price="$14.99"
                oldprice="$19.99"
                className="accordion-product"
              />
            </div>

            <div className="accordion-product-price">$14.99</div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
