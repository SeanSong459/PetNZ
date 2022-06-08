import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./FilterPanel.css";
import { Link } from "react-router-dom";

const FilterPanel = () => {
  const [LifeStage, setLifeStage] = React.useState("");
  const [Breed, setBreed] = React.useState("");
  const [Brand, setBrand] = React.useState("");
  const [Price, setPrice] = React.useState("");
  const [Foodtype, setFoodtype] = React.useState("");

  const handleLifeStageChange = (event) => {
    setLifeStage(event.target.value);
  };
  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleFoodtypeChange = (event) => {
    setFoodtype(event.target.value);
  };
  const handleClear = (event) => {
    setLifeStage("");
    setBreed("");
    setBrand("");
    setPrice("");
    setFoodtype("");
  };

  console.log(LifeStage, Breed, Brand, Price, Foodtype);
  return (
    <>
      <div className="panel-wrapper">
        <div className="filter-title">FILTERS </div>
        <div className="filter-option">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Life stage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={LifeStage}
                label="Life stage"
                onChange={handleLifeStageChange}
              >
                <MenuItem value={"Puppy"}>Puppy</MenuItem>
                <MenuItem value={"Juvenile"}>Juvenile</MenuItem>
                <MenuItem value={"Adulthood"}>Adulthood</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/*--------------- filter-option2 ----------------*/}
        <div className="filter-option">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Breed</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Breed}
                label="Breed"
                onChange={handleBreedChange}
              >
                <MenuItem value={"Labrador"}>Labrador</MenuItem>
                <MenuItem value={"Bulldog"}>Bulldog</MenuItem>
                <MenuItem value={"Golden Retriever"}>Golden Retriever</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/*--------------- filter-option3 ----------------*/}

        <div className="filter-option">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Brand}
                label="Brand"
                onChange={handleBrandChange}
              >
                <MenuItem value={"Eukanuba"}>Eukanuba</MenuItem>
                <MenuItem value={"BlackHawk"}>BlackHawk</MenuItem>
                <MenuItem value={"Royal Canin"}>Royal Canin</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/*--------------- filter-option4 ----------------*/}

        <div className="filter-option">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Price</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Price}
                label="Price"
                onChange={handlePriceChange}
              >
                <MenuItem value={10}>$10.00-$19.99</MenuItem>
                <MenuItem value={20}>$20.00-$29.99</MenuItem>
                <MenuItem value={30}>$30.00-$39.99</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/*--------------- filter-option5 ----------------*/}

        <div className="filter-option">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Food type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Foodtype}
                label="Food type"
                onChange={handleFoodtypeChange}
              >
                <MenuItem value={"Dry food"}>Dry food</MenuItem>
                <MenuItem value={"Wet food"}>Wet food</MenuItem>
                <MenuItem value={"Raw food"}>Raw food</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <Link to="/search" className="search-button-wrapper">
          <div className="search-button">SEARCH</div>
        </Link>
        <div className="clear-filter-text" onClick={handleClear}>
          CLEAR FILTERS
        </div>
      </div>
    </>
  );
};

export default FilterPanel;
