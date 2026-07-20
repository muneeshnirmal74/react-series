import React, { useContext } from "react";
import { PostDataContext } from "../context/ContextData";

function Nav2(props) {
  const [theme, setTheme] = useContext(PostDataContext);

  return (
    <div className="list">
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Services</a>
      <a href="#">Contact Us</a>
      <a href="#">{theme}</a>
    </div>
  );
}

export default Nav2;
