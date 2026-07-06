import React from "react";
import "./index.css";

function submitHandler(e) {
  e.preventDefault();
  console.log("Form Submit");
}

function App() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter Name" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
