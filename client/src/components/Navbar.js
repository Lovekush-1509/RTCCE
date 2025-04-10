import React from "react";
import projectlogo from "../media/Images/RC.webp";

import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>
          {" "}
          <h1 style={{fontSize:'15px'}} className="nuxt-title">&lt;<strong style={{fontSize:'20px'}}>RTC</strong>code_EDITOR /&gt;</h1>
          {/* <strong style={{ fontSize: "30px" }}>RC</strong>
          <strong style={{ color: "tomato" }}>code_EDITOR</strong> */}
        </span>
      </div>

      <div className="nav-link-btn-div">
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <NavLink to="/editor">
          <button className="navbar-button">start coding</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
