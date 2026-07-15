import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);

  async function getData() {
    // const responce = await axios.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   { user: "Muneesh", age: 29 },
    // );

    const responce = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`,
    );

    setProduct(responce.data);
    setFilterProduct(responce.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = "Loading....";

  if (product.length > 0) {
    printUserData = product.map((val, key) => {
      return (
        <div key={key} className="text-white">
          <img
            src={val.download_url}
            className="h-100 w-full object-cover rounded-2xl"
          />
          <h3>{val.id}</h3>
          <h3>{val.author}</h3>
        </div>
      );
    });
  }

  function inputchnaging(e) {
    e.priventDefault();
    const Data = e.target.value.toLowerCase();
    setText(Data);
  }

  return (
    <div className="bg-black p-7.5 h-full h-100% text-white ">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full p-3 mb-5 border-2 border-amber-300 rounded-1"
        value={text}
        onChange={inputchnaging}
      />
      {/* <button
        className="bg-green-600 py-2 px-5  cursor-pointer rounded active:scale-95 "
        onClick={getData}
      >
        Get Data
      </button> */}

      {/* {first.map((val, key) => {
        return <div key={key}>"Hello"</div>;
      })} */}

      <div className="grid grid-cols-4 gap-5">{printUserData}</div>

      <div className="button-navigation flex justify-center gap-3  items-center  mt-15">
        <button
          className="py-3.5 px-7.5 bg-amber-300 rounded-2xl text-black cursor-pointer "
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h1>Page Number {index}</h1>
        <button
          className="py-3.5 px-7.5 bg-amber-300 rounded-2xl text-black cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
