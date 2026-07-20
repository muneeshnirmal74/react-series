import React from "react";
import Men from "./Men";
import Women from "./Women";
import Kid from "./Kid";
import { Link, Outlet } from "react-router";

function Product() {
  return (
    <div>
      <ul className="flex gap-5 text-white text-2xl items-center justify-center mt-5 ">
        <Link to="./Men">Men</Link>
        <Link to="./Women">Women</Link>
        <Link to="./Kid">Kid</Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default Product;
