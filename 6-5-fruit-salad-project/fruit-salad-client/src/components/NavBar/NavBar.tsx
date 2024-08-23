import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">
            <h1>Fruitrient</h1>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/fruits">Fruits</NavLink>
        </li>
        <li>
          <NavLink to="/nutrients">Nutrients</NavLink>
        </li>
        <li>
          <NavLink to="/my-salad/0">My Salad</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
