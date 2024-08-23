import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <Link to="https://github.com/LoicTramis/fruit-salad-project" target="_blank">
            GitHub
          </Link>
        </li>
        <li>&bull;</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
