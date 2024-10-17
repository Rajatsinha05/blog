import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBluetooth, FaHome, FaWpforms } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="parent">
      <div className="nav">
        <Link to="/" className="link">
          <FaHome className="icon" /> Home
        </Link>
        <Link to="/form" className="link">
        <FaWpforms className="icon"/>Form 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
