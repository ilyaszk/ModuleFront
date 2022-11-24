import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/menu.css";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="nav-link" to="/">
            RECETTES
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/blog">
            BLOG
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
