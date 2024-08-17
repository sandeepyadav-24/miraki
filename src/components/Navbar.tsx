import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-2 bg-white">
      <div className="logo ">
        <h1 className="text-2xl font-semibold">Meraki</h1>
      </div>
      <div className="">
        <ul className="flex flex-row">
          <li className="mx-3">Shop</li>
          <li className="mx-3">About us</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-row">
          <li className="mx-3">Account</li>
          <li className="mx-3">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
