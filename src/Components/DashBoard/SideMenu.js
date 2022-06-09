import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="sidemenu-wrapper">
      <div className="sidemenu-inner">
        <Link className="sidemenu-title" to="/dashboard">
          DASHBOARD
        </Link>
        <Link className="sidemenu-item" to="">
          Profile
        </Link>
        <Link className="sidemenu-item" to="/dashboard/orderhistory">
          Order History
        </Link>
        <Link className="sidemenu-item" to="">
          Pets
        </Link>
        <Link className="sidemenu-item" to="">
          Payment Methods
        </Link>
        <Link className="sidemenu-item" to="">
          Notifications & Reminders
        </Link>
        <Link className="sidemenu-item" to="">
          Reviews & Recommendations
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
