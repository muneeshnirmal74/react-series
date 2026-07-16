import React from "react";
import { useNavigate } from "react-router";

function Breadcrumb() {
  let navigate = useNavigate();

  return (
    <div className="flex items-center content-center gap-5 bg-gray-500 py-3 px-5">
      <button
        onClick={() => {
          return navigate("/");
        }}
        className="bg-amber-400 py-2 px-5 text-black rounded cursor-pointer"
      >
        Back To Home
      </button>
      <button
        onClick={() => {
          return navigate(-1);
        }}
        className="bg-amber-400 py-2 px-5 text-black rounded cursor-pointer"
      >
        Prev
      </button>
      <button
        onClick={() => {
          return navigate(+1);
        }}
        className="bg-amber-400 py-2 px-5 text-black rounded cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Breadcrumb;
