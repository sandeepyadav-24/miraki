import React from "react";
import Link from "next/link";

const Courousel = () => {
  return (
    <div className="bg-[#F2E0D3] flex flex-row">
      <div className="mx-40 my-10 w-1/2">
        <h1 className="text-8xl font-bold my-5 font-serif">
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
      <div className="w-1/2">
        <img
          src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/07/01101000/Minimal-Jewellery-HI-1600x900.jpeg"
          alt=""
          className="h-[460px]"
        />
      </div>
    </div>
  );
};

export default Courousel;
