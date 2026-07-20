import React, { useContext } from "react";
import { PostDataContext } from "../context/ContextData";

function Buttton() {
  const [theme, setTheme] = useContext(PostDataContext);
  console.log(theme);
  return (
    <div>
      <button
        onClick={() => {
          setTheme("dark");
        }}
      >
        Change {theme}
      </button>
    </div>
  );
}

export default Buttton;
