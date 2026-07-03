import React from "react";
import Nav from "./Nav";
import CardSection from "../components/CardSection";

function Parent() {
  return (
    <>
      <div className="parent bg-white width-full p-20 br-10 rounded-[10px] w-[90%] mx-auto">
        <Nav />
        <CardSection />
      </div>
    </>
  );
}

export default Parent;
