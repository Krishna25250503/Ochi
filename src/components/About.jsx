import React from "react";

function About() {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tr-2-3xl rounded-tl-2-3xl text-black">
      <h1 className="font-['Neue_Montereal'] text-6xl leading-[3.6vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds,sell products,explain complex ideas, and hire great
        people
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-2 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our Approach:</h1>
          <button className=" flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[80vh] rounded-3xl ">
          <img
            className="rounded-xl h-[70vh] w-[40vw] mt-8"
            src=" https://images.unsplash.com/photo-1542323327795-3bbabea38cc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmQlMjBzY2FwZSUyMDRrfGVufDB8fDB8fHww  "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
