import React from "react";
import 'remixicon/fonts/remixicon.css'

function Section1() {
  return (
    <>
      <div className="section1 flex-1 flex flex-col justify-between  gap-5 ">
        <div className="section1-caption">
          <h2 className="text-5xl font-bold">Lorem ipsum is the standard</h2>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum is the standarplaceholder Lorem ipsum is the standard
            placeholder Lorem ipsum is the standard d placeholder
          </p>
        </div>
        <div className="icon text-5xl"><i className="ri-arrow-right-up-line"></i></div>
      </div>
    </>
  );
}

export default Section1;
