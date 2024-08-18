"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Instagram = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure this code runs only on the client side
  useEffect(() => {
    setIsClient(true);

    // Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  // Only render the blockquote on the client side
  if (!isClient) {
    return null; // Prevent server-side rendering
  }
  return (
    <div className="flex flex-col my-20 bg-[#F7ECE4] mx-20 rounded-md py-10">
      <div className="text-center text-3xl my-8">Follow us in @instagram</div>
      <div className="flex flex-row mx-32">
        <img
          src="p-1.png"
          className="w-44 mx-3 rounded-md hover:scale-150   hover:shadow-2xl"
          alt=""
        />
        <img
          src="p-2.png"
          className="w-44 mx-3 rounded-md hover:scale-150   hover:shadow-2xl"
          alt=""
        />
        <img
          src="p-5.png"
          className="w-44 mx-3 rounded-md hover:scale-150   hover:shadow-2xl"
          alt=""
        />
        <img
          src="p-4.png"
          className="w-44 mx-3 rounded-md hover:scale-150   hover:shadow-2xl"
          alt=""
        />
        <img
          src="p-3.png"
          className="w-44 mx-3 rounded-md hover:scale-150   hover:shadow-2xl"
          alt=""
        />
      </div>
      <div className="text-[#ACA9AA] text-center my-10">
        Shop your favourite styles from Instagram:{" "}
        <span className="text-black font-semibold">
          <Link href="https://www.instagram.com/meraki.bysimran_/">
            meraki.bysimran_
          </Link>
        </span>{" "}
      </div>
    </div>
  );
};

export default Instagram;
