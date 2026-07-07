import React from "react";
import "./app.css";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  // Example 1
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);

  // useEffect(() => {
  //   console.log("Effect Start Hua");
  // }, [first]);

  // function btnClick() {
  //   setFirst(first + 1);
  // }
  // function secondBtnClick() {
  //   setSecond(second + 5);
  // }

  // Example 2
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A Is Changeing");
  }
  function bChanging() {
    console.log("B Is Changeing");
  }

  useEffect(() => {
    bChanging();
  }, [b]);

  return (
    <div>
      {
        // Example 1
        /* <h1>{first}</h1>
      <button className="btn" onClick={btnClick}>
        Click
      </button>
      <h1>{second}</h1>
      <button className="btn" onClick={secondBtnClick}>
        Click
      </button> */
      }

      {/* Example 2 */}
      <h1>{a}</h1>
      <button
        className="btn"
        onClick={() => {
          setA(a + 1);
        }}
      >
        Click
      </button>
      <h1>{b}</h1>
      <button
        className="btn"
        onClick={() => {
          setB(b - 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default App;
