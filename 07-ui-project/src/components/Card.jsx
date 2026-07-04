import React from "react";

function Card(props) {
  return (
    <>
      <div className="card flex-1 relative rounded-[10px] min-w-75">
        <img
          src={props.img}
          alt={props.tag} className="rounded-[20px]"
        />
        <div className="card-caption absolute top-0 w-full h-full flex flex-col justify-between p-6 text-white">
          <div className="card-number w-7.5 h-7.5 bg-white inline-flex justify-center items-center text-black rounded-2xl">{props.num}</div>
          <div className="card-discription">
            <p className="w-[90%]">{props.tag}</p>
            <button className="flex align-center items-center gap-5 mt-5 cursor-pointer ">
              <div style={{backgroundColor:props.color}} className="button-text   py-1.5 px-5 rounded-2xl ">View More</div>
              <div style={{backgroundColor:props.color}} className={`button-icon ${props.username?.[0]?.color} py-1.5 w-9 h-9 rounded-2xl`}><i className="ri-arrow-right-line"></i></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
