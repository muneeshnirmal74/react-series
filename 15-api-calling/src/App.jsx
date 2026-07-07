import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  // async function btnClick() {
  //   const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await responce.json();
  //   console.log(data);
  // }

  const [data, setData] = useState([]);

  const getData = async () => {
    const responce = await axios.get("https://picsum.photos/v2/list");

    setData(responce.data);
    console.log(data);
  };

  return (
    <div>
      <button onClick={getData}>Click</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {data.map((val, key) => {
          return (
            <div key={key}>
              <h2>{val.author}</h2>

              <img src={val.download_url} style={{ width: "100%" }} />
              <p>Id :{val.id}</p>
              <a href={val.url}>Url</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
