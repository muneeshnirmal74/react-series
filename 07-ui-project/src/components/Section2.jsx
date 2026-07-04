import React from "react";
import Card from "./Card";

function Section2(props) {
  // console.log(props.username)
  return (
    <div className="section2 flex-3 flex gap-5 overflow-x-auto ">
      {
        props.username.map((val, num)=>{
          return <Card 
          key={num}  
          num={num+1}
          img={val.img} 
          intro={val.intro}  
          color={val.color} 
          tag={val.tag} />
        })
      }
    </div>
  );
}

export default Section2;