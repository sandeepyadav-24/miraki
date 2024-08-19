"use client";
import React from "react";
import { jewel } from "../../db/db";
import { useState } from "react";
import Link from "next/link";

interface HoverImageProps {
  images: string[]; // Define that 'images' is an array of strings
  name: string; // Define that 'name' is a string
}

const HoverImage: React.FC<HoverImageProps> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleMouseEnter = () => {
    if (images[1]) {
      setCurrentImage(images[1]);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[0]);
  };

  return (
    <div className="">
      <img
        src={currentImage}
        alt={name}
        className="bg-[#EFEAE6] object-contain w-80 h-80 transition duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

const page = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredJewels = selectedCategories.length
    ? jewel.filter((e) => selectedCategories.includes(e.category))
    : jewel;

  const totalPages = Math.ceil(filteredJewels.length / itemsPerPage);

  const displayedJewels = filteredJewels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  return (
    <div className=" flex flex-col md:flex-row my-20">
      <div className="filter md:w-1/5 border-r-2 border-black">
        <hr />
        {/** this is first section  */}
        <div className="mx-10 my-5">
          <h1 className="font-bold my-2">Category</h1>
          {["Rings", "Bracelets", "Earrings", "Necklaces"].map((category) => (
            <div key={category} className="flex flex-row">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <h1 className="mx-2">{category}</h1>
            </div>
          ))}
        </div>

        <hr />
        {/** this is second section  */}
        <div className="mx-10 my-5">
          <h1>Price</h1>
        </div>
        <hr />
      </div>
      <div className="w-4/5 px-8">
        <div className="flex flex-wrap">
          {displayedJewels.map(
            (e, index) =>
              e.display_image_url && (
                <div key={e.id || index} className="m-5">
                  <Link href={`/jewels/${e.id}`}>
                    <HoverImage images={e.display_image_url} name={e.name} />
                    <div className="flex flex-row justify-between">
                      <div className="w-3/4">{e.name}</div>
                      <div className="w-1/4 text-[#707A76]">{e.price}</div>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
