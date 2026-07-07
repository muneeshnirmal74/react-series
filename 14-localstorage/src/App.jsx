import React from "react";

function App() {
  // localStorage.clear();
  // localStorage.setItem("Mukesh", "kam nhi kr raha");

  // const userName = localStorage.getItem("Mukesh");
  // console.log(userName);

  // localStorage.removeItem("Mukesh");

  // obj ke bhejne ke liye json.s

  const user = {
    name: "Muneesh",
    age: 29,
    location: "Vile parle",
  };

  // localStorage.setItem("user", JSON.stringify(user));

  // const data = localStorage.getItem(user);
  // const updatedData = JSON.stringify(user);
  // console.log(updatedData);

  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);

  return <div>Hello </div>;
}

export default App;
