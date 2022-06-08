import React from "react";
import Logo from "../../Assets/images/Logo.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Dropdown from "./Dropdown";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="NavbarContainer">
        <div className="NavbarWrapper">
          <div className="NavbarLeft">
            <Link className="Logo" to="/">
              <img src={Logo} alt="petNZ logo" style={{ width: 180 }}></img>
            </Link>
            <div className="LogoText">SPOIL YOUR PET!</div>
          </div>
          <div className="NavbarCenter">
            <div className="NavCenterWrapper">
              <NavLink
                className="NavLink"
                // className={({ isActive }) =>
                //   isActive ? "NavLink Red" : "NavLink"
                // }
                to="/dog"
                onClick={(e) => setIsActive(!isActive)}
                // style={({ isActive }) =>
                //   isActive
                //     ? {
                //         color: "#FFFFFF",
                //         cursor: "pointer",
                //         background: "#EC1C24",
                //         transition: "0.3s ease-in-out",
                //       }
                //     : { color: "black", background: "#FAFAFA" }
                // }
              >
                Dogs
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
                <div className="DropdownContainer">
                  {isActive && (
                    <div className="dropdown-menu">
                      <NavLink className="DropdownLink" to="/dogfood">
                        Food
                      </NavLink>
                      <NavLink className="DropdownLink" to="/">
                        Training
                      </NavLink>
                      <NavLink className="DropdownLink" to="/">
                        Health & Grooming
                      </NavLink>
                      <NavLink className="DropdownLink" to="/">
                        Accessories
                      </NavLink>
                    </div>
                  )}
                </div>
              </NavLink>

              <NavLink className="NavLink" to="/">
                Cats
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
              <NavLink className="NavLink" to="/">
                Fish
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
              <NavLink className="NavLink" to="/">
                Rabbits
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
              <NavLink className="NavLink" to="/">
                Birds
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
              <NavLink className="NavLink" to="/">
                Reptiles
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
              <NavLink className="NavLink" to="/">
                Horses
                <Icon className="down-arrow-icon" icon="ep:arrow-down" />
              </NavLink>
            </div>
          </div>
          <div className="NavbarRight">
            <div className="NavInfoWrapper">
              <NavLink to="/signin" className="NavInfoText">
                LOG IN
              </NavLink>
              <span className="bar">|</span>
              <NavLink to="/" className="NavInfoText">
                SIGN UP
              </NavLink>
              <span className="bar">|</span>
              <NavLink to="/" className="NavInfoText">
                <div className="PriceWrapper">
                  {/* <MdOutlineShoppingCart /> */}
                  <Icon
                    className="shopping-cart-icon"
                    icon="ic:outline-shopping-cart"
                    width="30px"
                    height="30px"
                  />
                  {/* $28.45 */}
                </div>
              </NavLink>
              {/* <span className="NavInfoText">LOG IN</span>
              <span>|</span>
              <span className="NavInfoText">SIGN UP</span>
              <span>|</span>
              <span className="NavInfoText">
                <div className="PriceWrapper">
                  <MdOutlineShoppingCart />
                  $28.45
                </div>
              </span> */}
            </div>
            <div className="NavSearchContainer">
              <input
                placeholder="Search pet.co.nz..."
                style={{ border: "none", height: "100%" }}
              ></input>
              <AiOutlineSearch />
            </div>
            {/* <form action="" className="form-search-container">
              <input className="navbar-search-input" type="text" />
              <Icon icon="ep:search" className="navbar-search-icon" />
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
