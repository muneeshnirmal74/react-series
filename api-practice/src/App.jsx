import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pname, setPname] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get("https://fakestoreapi.com/products");
      const newData = res.data;
      setPname(newData);
      console.log(newData);
    }

    getData();
  }, []);
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 30 }}
    >
      {pname.map((val) => {
        return (
          <div
            key={val.id}
            style={{ flex: "1", background: "#e2e2e2", padding: "30px" }}
          >
            <img src={val.image} style={{ width: "100%" }} />
            <h1>{val.title}</h1>
            <h3>{val.price}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
