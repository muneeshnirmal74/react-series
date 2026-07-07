import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [first, setfirst] = useState([]);

  async function getData() {
    // const responce = await axios.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   { user: "Muneesh", age: 29 },
    // );

    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15",
    );

    setfirst(responce.data);
  }

  let printUserData = "Data Is Not Available";

  if (first.length > 0) {
    printUserData = first.map((val, key) => {
      return (
        <div key={key} className="text-white">
          <img src={val.download_url} />
          <h3>{val.id}</h3>
          <h3>{val.author}</h3>
        </div>
      );
    });
  }

  return (
    <div className="bg-black  h-screen text-white ">
      <button
        className="bg-green-600 py-2 px-5  cursor-pointer rounded active:scale-95 "
        onClick={getData}
      >
        Get Data
      </button>

      {/* {first.map((val, key) => {
        return <div key={key}>"Hello"</div>;
      })} */}

      <div className="grid grid-cols-4 gap-5">{printUserData}</div>
    </div>
  );
}

export default App;
