import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    console.log("Form Sumit");
    console.log(name);
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Name"
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default App;
