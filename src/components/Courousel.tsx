import React from "react";
import Link from "next/link";

const Courousel = () => {
  return (
    <div className="bg-[#F2E0D3] flex flex-col md:flex-row">
      <div className="mx-5 md:mx-40 my-10 md:w-1/2">
        <h1 className="text-5xl md:text-8xl font-bold my-5 font-serif">
          Freshen Collection{" "}
        </h1>
        <h3>
          Authentic vintage collection{" "}
          <span className="font-semibold underline">starts from Rs 149</span>
        </h3>
        <button className="bg-black text-white px-5 py-2 my-10">
          <Link href={"/collection"}>Shop collection</Link>
        </button>
      </div>
      <div className=" flex flex-end  md:w-[600px]">
        <img src="p-5.png" className="md:h-[550px]" />
      </div>
    </div>
  );
};

export default Courousel;
