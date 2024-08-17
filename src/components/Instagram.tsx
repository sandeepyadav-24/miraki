import React from "react";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="flex flex-col my-20 bg-[#F7ECE4] mx-20 rounded-md py-10">
      <div className="text-center text-3xl my-8">Follow us in @instagram</div>
      <div className="flex flex-row mx-48">
        <div className="bg-blue-200 w-40 h-40 mx-5 rounded-md px-10 py-10">
          {" "}
          Instagram Post
        </div>
        <div className="bg-blue-200 w-40 h-40 mx-5 rounded-md  px-10 py-10">
          {" "}
          Instagram Post
        </div>
        <div className="bg-blue-200 w-40 h-40 mx-5 rounded-md  px-10 py-10">
          {" "}
          Instagram Post
        </div>
        <div className="bg-blue-200 w-40 h-40 mx-5 rounded-md  px-10 py-10">
          {" "}
          Instagram Post
        </div>
        <div className="bg-blue-200 w-40 h-40 mx-5 rounded-md  px-10 py-10">
          {" "}
          Instagram Post
        </div>
      </div>
      <div className="text-[#ACA9AA] text-center my-10">
        Shop your favourite styles from Instagram:{" "}
        <span className="text-black">
          <Link href="https://www.instagram.com/meraki.bysimran_/">
            meraki.bysimran_
          </Link>
        </span>{" "}
      </div>
    </div>
  );
};

export default Instagram;
