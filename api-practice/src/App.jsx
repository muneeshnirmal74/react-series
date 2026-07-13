import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pname, setPname] = useState([]);
  const [pnameFiltter, setPnameFiltter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");

        // Axios ke saath use nahi hota h
        // if (!res.ok) {
        //   throw new Error("Failed To Fetch");
        // }

        const newData = res.data;
        setPname(newData);
        setPnameFiltter(newData);
      } catch (error) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  function inputChange(e) {
    const inputvalue = e.target.value.toLowerCase();

    setPnameFiltter(
      pname.filter(
        (product) =>
          product.title.toLowerCase().includes(inputvalue) ||
          product.description.toLowerCase().includes(inputvalue) ||
          product.price.toString().includes(inputvalue),
      ),
    );
  }

  if (loading) {
    return <h2>Products are loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <input type="text" placeholder="Search Product" onChange={inputChange} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 30,
        }}
      >
        {pnameFiltter.length > 0 ? (
          pnameFiltter.map((val) => {
            return (
              <div
                key={val.id}
                style={{ flex: "1", background: "#e2e2e2", padding: "30px" }}
              >
                <h4>{val.category}</h4>
                <img src={val.image} style={{ width: "100%" }} />
                <h1>{val.title}</h1>
                <h3>{val.price}</h3>
                <p>{val.description}</p>
                <p>
                  <span>{val.rating.rate}</span>
                  <span>{val.rating.count}</span>
                </p>
              </div>
            );
          })
        ) : (
          <h1>Product Not Found</h1>
        )}
      </div>
    </>
  );
}

export default App;
