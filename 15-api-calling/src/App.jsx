import React from "react";
import axios from "axios";

function App() {
  // async function btnClick() {
  //   const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await responce.json();
  //   console.log(data);
  // }

  const getData = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list");
    console.log(responce.data);
  };

  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
}

export default App;
