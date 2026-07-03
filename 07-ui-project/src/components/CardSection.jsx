import React from "react";
import Section1 from "./section1";
import Section2 from "./Section2";

function CardSection() {
  return (
    <>
      <div className="cardsection flex gap-10">
        <Section1 />
        <Section2 />
      </div>
    </>
  );
}

export default CardSection;
