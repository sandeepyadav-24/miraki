import React from "react";
import Link from "next/link";

const CategoryBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center px-10 py-20 bg-white">
      <div className="w-60 mx-5">
        <h1 className="underline decoration-[#E4CCC0]">COLLECTION</h1>
        <h1 className="text-6xl my-3 font-serif ">Shop by category</h1>
      </div>
      <div className="flex flex-col md:justify-between md:flex-row">
        <div className="bg-[#F0F0F0] mx-5 py-3 hover:scale-150   hover:shadow-2xl rounded-xl text-center">
          <img
            src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BICM0339R06_YAA18DIG6XXXXXXXX_ABCD00-PICS-00001-1024-68695.png"
            width={200}
          />
          <h1 className="py-2 font-semibold ">Rings</h1>
        </div>
        <div className=" mx-5 py-3 hover:scale-150 bg-[#F0F0F0] rounded-xl   hover:shadow-2xl  text-center">
          <img
            src="https://kinclimg9.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIIP0635V38_YAA18XXXXXXXXXXXX_ABCD00-PICS-00000-1024-47124.png"
            width={200}
            className=" "
          />
          <h1 className="py-2 font-semibold">Bracelets </h1>
        </div>
        <div className="bg-[#F0F0F0] mx-5 py-3 hover:scale-150  hover:shadow-2xl  rounded-xl text-center">
          <img
            src="https://kinclimg8.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIRS0009P08_YAA18XXXXXXXXXXXX_ABCD00-PICS-00004-1024-34385.png"
            width={200}
          />
          <h1 className="py-2 font-semibold">Gold pendants</h1>
        </div>
        <div className="bg-[#F0F0F0] mx-5 py-3 hover:scale-150 hover:shadow-2xl rounded-xl text-center">
          <img
            src="https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIIP0622J13_YAA22XXXXXXXXXXXX_ABCD00-PICS-00004-1024-47494.png"
            width={200}
          />
          <h1 className="py-2 font-semibold">Gold nose pins </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
