import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pname, setPname] = useState([]);
  const [pnameFiltter, setPnameFiltter] = useState([]);
  const [search, setsearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const newData = res.data;
        setPname(newData);
        setPnameFiltter(newData);
      } catch (error) {
        setError("API Not Fetched");
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  function inputfunction(e) {
    const inputValue = e.target.value.toLowerCase();
    setsearch(inputValue);

    setPnameFiltter(
      pname.filter(
        (product) =>
          product.title.toLowerCase().includes(inputValue) ||
          product.price.toString().includes(inputValue),
      ),
    );
  }

  if (loading) {
    return <h1>Product Is Loading......</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <input value={search} onChange={inputfunction} />
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
                <img src={val.image} style={{ width: "100%" }} />
                <h1>{val.title}</h1>
                <h3>{val.price}</h3>
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
