import React from "react";

const Quote = () => {
  const quote = [
    "In the art of simplicity, each piece of jewelry tells a story of timeless elegance and subtle beauty.",
    "Minimalist jewelry reflects the inner grace, where every detail is a testament to refined craftsmanship and elegance.",
    "Jewelry is a silent language each piece speaks of understated luxury and sophisticated style.",
    "Elegance lies in simplicity; our jewelry enhances your natural beauty without overpowering it.",
    "Wear pieces that define you—simple, elegant, and undeniably exquisite.",
    "Our designs celebrate minimalism, proving that true beauty doesn't need to shout to be heard.",
    "Each piece is a reflection of pure craftsmanship, designed to be as unique as the one who wears it.",
    "Simplicity in form, profound in impact—jewelry that complements your essence with timeless grace.",
    "Discover the beauty in subtlety, where every piece is a work of art crafted for the discerning eye.",
    "In minimalism, we find the balance of elegance and expression, creating jewelry that speaks volumes in whispers.",
  ];
  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  return (
    <div className="text-center px-40 my-28">
      <div className="underline decoration-[#E4CCC0] ">QUOTE OF THE HOUR</div>
      <div className="text-3xl px-32 my-5">{quote[getRandomNumber()]}</div>
      <div className="flex flex-row justify-center my-10 ">
        <h1 className="mx-10 text-xl text-[#A8A8A8]">CHANEL</h1>
        <h1 className="mx-10 text-xl text-[#A8A8A8]">DIOR</h1>
        <h1 className="mx-10 text-3xl font-semibold">MIRAKI</h1>
        <h1 className="mx-10 text-xl text-[#A8A8A8]">ZARA</h1>
        <h1 className="mx-10 text-xl text-[#A8A8A8]">VOGUE</h1>
      </div>
    </div>
  );
};

export default Quote;
