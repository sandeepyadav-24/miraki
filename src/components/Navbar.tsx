import React from "react";
import HyperText from "@/components/magicui/hyper-text";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-5 md:px-20 py-2 bg-white">
      <div className="logo flex justify-center md:justify-start ">
        <Link href={"/"}>
          <HyperText
            text="MERAKI"
            className="text-2xl font-bold text-black dark:text-white"
          />
        </Link>
      </div>
      <div className="">
        <ul className="flex flex-col md:flex-row">
          <li className="mx-3 py-2 font-semibold">
            <Link href={"/collection"}>Collection</Link>
          </li>
          <li className="mx-3 py-2 font-semibold">
            {" "}
            <Link href={"/about"}>About us</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row">
          <li className="mx-3 py-2 font-semibold">
            <h1>Account</h1>
            {/**<div className="flex flex-row">
              <img
                src="https://img.icons8.com/?size=100&id=Fx70T4fgtNmt&format=png&color=000000"
                alt=""
                className="w-7 mx-1"
              />
              
            </div> */}
          </li>

          <li className="mx-3 py-2 font-semibold">
            <h1>Cart</h1>
            {/**<div className="flex flex-row">
              <img
                src="https://img.icons8.com/?size=100&id=TdZUZUq3XNh6&format=png&color=000000"
                alt=""
                className="w-7 mx-1"
              />
              
            </div> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
