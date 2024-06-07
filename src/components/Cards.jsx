import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 items-center px-32 flex gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-4 mt-9 py-1 text-sm rounded-full border left-5 bottom-7">
            &copy; 2023-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer relative flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="   https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-4 mt-9 py-1 text-sm rounded-full border left-5 bottom-7">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 mt-7 py-1 text-sm rounded-full border left-5 bottom-7">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
