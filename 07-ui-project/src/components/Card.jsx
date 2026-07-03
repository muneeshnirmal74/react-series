import React from "react";

function Card() {
  return (
    <>
      <div className="card flex-1 relative">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
          alt="Placeholder Image"
        />
        <div className="card-caption absolute top-0 w-full h-full flex flex-col justify-between p-6 text-white">
          <div className="card-number">1</div>
          <div className="card-discription">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>
              <div className="button-text">View More</div>
              <div className="button-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
