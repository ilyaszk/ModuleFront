import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";
const Menu = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
          >
            RECETTES
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/blog"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            BLOG
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
