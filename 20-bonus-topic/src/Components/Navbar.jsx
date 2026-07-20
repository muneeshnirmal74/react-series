import React from "react";

function Navbar(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setTheme("Dark");
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Navbar;
