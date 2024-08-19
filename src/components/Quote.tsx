"use client";
import React, { useState, useEffect } from "react";
import TextReveal from "@/components/magicui/text-reveal";

const Quote = () => {
  const quotes = [
    "In the art of simplicity, each piece of jewelry tells a story of timeless elegance and subtle beauty.",
    "Minimalist jewelry reflects the inner grace, where every detail is a testament to refined craftsmanship and elegance.",
    "Jewelry is a silent language each piece speaks of understated luxury and sophisticated style.",
    "Elegance lies in simplicity our jewelry enhances your natural beauty without overpowering it.",
    "Wear pieces that define you—simple, elegant, and undeniably exquisite.",
    "Our designs celebrate minimalism, proving that true beauty doesn't need to shout to be heard.",
    "Each piece is a reflection of pure craftsmanship, designed to be as unique as the one who wears it.",
    "Simplicity in form, profound in impact—jewelry that complements your essence with timeless grace.",
    "Discover the beauty in subtlety, where every piece is a work of art crafted for the discerning eye.",
    "In minimalism, we find the balance of elegance and expression, creating jewelry that speaks volumes in whispers.",
  ];

  const [scaled, setScaled] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const scaleInterval = setInterval(() => {
      setScaled((scaled) => !scaled);
    }, 1000); // Change every 2 seconds

    return () => clearInterval(scaleInterval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (isMounted) {
      const quoteInterval = setInterval(() => {
        setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 100000); // Change quote every 1000 seconds

      return () => clearInterval(quoteInterval); // Cleanup interval on component unmount
    }
  }, [isMounted, quotes.length]);

  return (
    <div className="text-center px-5 md:px-40 my-5 md:my-28">
      <div className="underline decoration-[#E4CCC0]">QUOTE OF THE HOUR</div>
      <div className="text-3xl px-5s md:px-32 my-5 ">
        {isMounted ? quotes[quoteIndex] : quotes[0]}
      </div>
      <div className="flex flex-col md:flex-row justify-center my-5 md:my-10">
        <h1 className="mx-4 md:mx-10 my-2 text-xl text-[#A8A8A8]">CHANEL</h1>

        <h1 className="mx-4 md:mx-10 my-2 text-xl text-[#A8A8A8]">DIOR</h1>
        <h1
          className={`mx-4 md:mx-10 my-2 text-3xl font-semibold transition transform duration-500 ${
            scaled ? "scale-150" : "scale-100"
          } ${scaled ? "text-black" : " text-[#A8A8A8]"} `}
        >
          MERAKI
        </h1>
        <h1 className="mx-4 md:mx-10 my-2 text-xl text-[#A8A8A8]">ZARA</h1>
        <h1 className="mx-4 md:mx-10 my-2 text-xl text-[#A8A8A8]">VOGUE</h1>
      </div>
    </div>
  );
};

export default Quote;
