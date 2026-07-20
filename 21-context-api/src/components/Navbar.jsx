import Nav2 from "./Nav2";
import React, { useContext } from "react";
import { PostDataContext } from "../context/ContextData";

function Navbar() {
  const [theme, setTheme] = useContext(PostDataContext);
  return (
    <div className={`${theme} nav`}>
      <h1>Logo</h1>
      <Nav2 />
    </div>
  );
}

export default Navbar;
