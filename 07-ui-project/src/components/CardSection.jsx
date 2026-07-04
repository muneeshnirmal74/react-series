import React from "react";
import Section1 from "../components/Section1.jsx";
import Section2 from "../components/Section2.jsx";

function CardSection(props) {
  return (
    <>
      <div className="cardsection flex gap-10">
        <Section1  />
        <Section2 username={props.username} />
      </div>
    </>
  );
}

export default CardSection;
