import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navbar;
