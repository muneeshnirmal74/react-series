import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";

// Child to Parent Data Transfes
function App() {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
