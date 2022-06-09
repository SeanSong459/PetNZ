import React from "react";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import "./FoodSlider.css";
import stepper1 from "../../Assets/images/Stepper1.png";
import stepper2 from "../../Assets/images/Stepper2.png";
import stepper3 from "../../Assets/images/Stepper3.png";
import PetData from "./PetData";
import { PetCatds } from "./PetCatds";
import PetFoodData from "./PetFoodData";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FoodSlider = () => {
  const [isMoved, setIsMoved] = useState(false);

  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 45;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${1760 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-1760 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <>
      <div className="FoodSliderTitle">Find your pet's favourite food!</div>
      <div className="FoodSliderSubtitle">
        Use our Food Finder below to search for your pet's favourite food!
      </div>
      <div className="FoodSlideWrapper">
        <div
          className="LeftArrowWrapper"
          style={{ display: !isMoved && "none" }}
        >
          <Icon
            className="FoodSlideArrow left"
            icon="ic:sharp-expand-circle-down"
            color="#ec1c24"
            rotate={1}
            onClick={() => handleClick("left")}
          />
        </div>

        <div className="FoodSlideContainer" ref={listRef}>
          <div className="FoodSlider1">
            <div className="SlideInner1">
              <div className="Stepper1Container">
                <div className="StepperWrapper">
                  <img className="Stepper1" src={stepper1} alt="" />
                </div>
                <div className="FoodFinderTitle">
                  What type of pet do you have?
                </div>
                <div className="FoodFinderSubtitle">Select one:</div>
                <div className="PetContainer">
                  {PetData.map((item) => {
                    if (item.id < 4) {
                      return (
                        <PetCatds
                          key={item.id}
                          img={item.img}
                          name={item.name}
                        />
                      );
                    }
                  })}
                </div>
                <div className="PetContainer">
                  {PetData.map((item) => {
                    if (item.id > 3 && item.id < 9) {
                      return (
                        <PetCatds
                          key={item.id}
                          img={item.img}
                          name={item.name}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>

          {/*-------------------- FoodSlider2 -----------------*/}
          <div className="FoodSlider2">
            <div className="SlideInner2">
              <div className="Stepper2Container">
                <div className="StepperWrapper">
                  <img className="Stepper1" src={stepper2} alt="" />
                </div>
                <div className="FoodFinderTitle">
                  What kind of dog food are you looking for?
                </div>
                <div className="FoodFinderSubtitle">Select one or more:</div>
                <div className="PetFoodContainer">
                  {PetFoodData.map((item) => {
                    return (
                      <PetCatds key={item.id} img={item.img} name={item.name} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/*-------------------- FoodSlider3 -----------------*/}

          <div className="FoodSlider3">
            <div className="SlideInner3">
              <div className="Stepper3Container">
                <div className="StepperWrapper">
                  <img className="Stepper1" src={stepper3} alt="" />
                </div>
                <div className="FoodFinderTitle">Any other details?</div>
                <div className="FoodFinderSubtitle">
                  All of these fields are optional.
                </div>
                {/* ---------------------------- */}
                <div className="PetFood-moreinfo-wrapper">
                  <div className="filter-option">
                    <Box sx={{ minWidth: 330 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Life stage
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={LifeStage}
                          label="Life stage"
                        >
                          <MenuItem value={"Puppy"}>Puppy</MenuItem>
                          <MenuItem value={"Adult"}>Adult</MenuItem>
                          <MenuItem value={"Senior"}>Senior</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  {/*--------------- filter-option2 ----------------*/}

                  <div className="filter-option">
                    <Box sx={{ minWidth: 330 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Brand
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={Brand}
                          label="Brand"
                          // onChange={handleBrandChange}
                        >
                          <MenuItem value={"Eukanuba"}>Eukanuba</MenuItem>
                          <MenuItem value={"BlackHawk"}>BlackHawk</MenuItem>
                          <MenuItem value={"Royal Canin"}>Royal Canin</MenuItem>
                          <MenuItem value={"Pro Plan"}>Pro Plan</MenuItem>
                          <MenuItem value={"Orijen"}>Orijen</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  {/*--------------- filter-option3 ----------------*/}

                  <div className="filter-option">
                    <Box sx={{ minWidth: 330 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Price
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={Price}
                          label="Price"
                          // onChange={handlePriceChange}
                        >
                          <MenuItem value={10}>$10.00-$19.99</MenuItem>
                          <MenuItem value={20}>$20.00-$29.99</MenuItem>
                          <MenuItem value={30}>$30.00-$39.99</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>

                  <div className="petfood-onsale-checkbox">
                    <FormGroup>
                      <FormControlLabel
                        sx={{ transform: "scale(1.5)" }}
                        control={<Checkbox />}
                        label="Yes, only show products on sale"
                      />
                    </FormGroup>
                  </div>
                </div>

                {/* ---------------------------------- */}
              </div>
              <div className="petfood-search-button-wrapper">
                <button className="petfood-search-button">
                  SEARCH PET FOOD
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-wrapper">
          <Icon
            className="FoodSlideArrow right"
            icon="ic:sharp-expand-circle-down"
            color="#ec1c24"
            rotate={3}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </>
  );
};

export default FoodSlider;
