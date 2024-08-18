import React from "react";
import { jewel } from "../../db/db";

const page = () => {
  return (
    <div className=" flex flex-row my-20">
      <div className="filter w-1/5 border-r-2 border-black">
        {/** this is first section  */}
        <div className="mx-10 my-5">
          <h1 className="font-bold my-2">Category</h1>
          <div className="flex flex-row">
            <input type="checkbox" />
            <h1 className="mx-2">Diamond ring</h1>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" />
            <h1 className="mx-2">Gold bracelet </h1>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" />
            <h1 className="mx-2">Gold pendants ring</h1>
          </div>
          <div className="flex flex-row">
            <input type="checkbox" />
            <h1 className="mx-2">Gold node pins ring</h1>
          </div>
        </div>

        <hr />
        {/** this is second section  */}
        <div className="mx-10 my-5">
          <h1>Price</h1>
        </div>
      </div>
      <div className="w-4/5">
        <div className="flex flex-wrap">
          {jewel.map((e, index) => {
            return (
              <img
                src={e.image_url}
                key={index}
                className="bg-black object-contain w-40"
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
