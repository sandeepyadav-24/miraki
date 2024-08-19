"use client";
import React from "react";
import { jewel } from "../../db/db";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

interface HoverImageProps {
  images: string[];
  name: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleMouseEnter = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt={name}
        className="bg-[#EFEAE6] object-contain w-80 h-80 transition duration-300 ease-in-out"
      />
      <div className="flex mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name}-${index}`}
            className="w-20 h-20 object-cover mx-2 cursor-pointer"
            onMouseEnter={() => handleMouseEnter(image)}
          />
        ))}
      </div>
    </div>
  );
};

const JewelDetails = () => {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  const [selectedJewel, setSelectedJewel] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const jewelData = jewel.find((j) => j.id === id);
      setSelectedJewel(jewelData);
    }
  }, [id]);

  if (!selectedJewel) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <HoverImage
            images={selectedJewel.image_url}
            name={selectedJewel.name}
          />
        </div>
        <div className="md:w-1/2 px-8">
          <h1 className="text-2xl font-bold">{selectedJewel.name}</h1>
          <p className="text-lg text-[#707A76] mt-2">
            Price: ${selectedJewel.price}
          </p>
          <button className="bg-black text-white px-6 py-3 mt-6">
            Add to Cart
          </button>
          <p className="mt-6">{selectedJewel.description}</p>
        </div>
      </div>
    </div>
  );
};
export default JewelDetails;
