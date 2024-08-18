import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] px-40 py-20">
      {/** First Lane  */}
      <div className="flex flex-row ">
        <div className="flex flex-row w-3/4 mb-5">
          {/** Categories 1  */}
          <div className="Categories_1 mx-10">
            <h1 className="font-semibold my-2">Categories</h1>
            <ul className="text-[#A5A5A5]">
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Diamond rings</li>
            </ul>
          </div>
          {/** Categories 2  */}
          <div className="Categories_1 mx-10">
            <h1 className="font-semibold my-2">Quick links</h1>
            <ul className="text-[#A5A5A5]">
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Diamond rings</li>
            </ul>
          </div>

          {/** Categories 3  */}
          <div className="Categories_1 mx-10">
            <h1 className="font-semibold my-2">Information</h1>
            <ul className="text-[#A5A5A5]">
              <li>Earrings</li>
              <li>Necklaces</li>
              <li>Bracelets</li>
              <li>Diamond rings</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h1>Follow Us </h1>
            <div>
              <img
                src="https://img.icons8.com/?size=100&id=119026&format=png&color=000000"
                alt=""
                className="w-10 h-10"
              />
            </div>
          </div>
          <hr />
          <div>
            <h1>Payment Option</h1>
            <img
              src="https://img.icons8.com/?size=100&id=w0MU3YDSYG7T&format=png&color=000000"
              alt=""
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
      {/** Second LAne */}
      <hr />
      <div className="my-7 flex flex-row ">
        <div className="mx-5">MERAKI</div>
        <div className="border-l-2 border-black h-5"></div>
        <div className="mx-2 flex flex-row">
          <img
            src="https://img.icons8.com/?size=100&id=KTptnojMW8nz&format=png&color=000000"
            alt=""
            className="h-5 w-5"
          />
          <h1>2024 MERAKI BY SIMRAN. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
