import React from "react";
import Nav from "./Nav";
import CardSection from "../components/CardSection";

function Parent(props) {
  return (
    <>
      <div className="parent bg-white w-full p-20 br-10 rounded-[10px]  mx-auto">
        <Nav />
        <CardSection username={props.username}  />
      </div>
    </>
  );
}

export default Parent;
