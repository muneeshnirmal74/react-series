import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex gap-5 justify-between items-center  py-5 bg-cyan-900 px-8 ">
      <h2 className="text-2xl text-white">Logo</h2>
      <ul className="flex gap-5 text-white text-2xl">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Products</Link>
        <Link to="/Courses/">Courses</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
    </div>
  );
}

export default Navbar;
