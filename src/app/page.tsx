import Image from "next/image";
import Navbar from "@/components/Navbar";
import Courousel from "@/components/Courousel";
import CategoryBanner from "@/components/CategoryBanner";
import Marque from "@/components/Marque";
import Quote from "@/components/Quote";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Courousel />
      <div className="flex flex-col md:flex-row justify-center px-5 md:px-20 py-10 border-b-2 ">
        <div className="mx-5 my-5 md:mx-10 flex flex-row">
          <img
            src="https://img.icons8.com/?size=100&id=4722&format=png&color=000000"
            alt=""
            className="w-10 mx-2"
          />
          <div>
            <h1>Nominal Shipping Charges</h1>
            <h1 className="text-[#9A9A9A]">Pan India Shipping</h1>
          </div>
        </div>
        <div className="mx-5 my-5 md:mx-10 flex flex-row">
          <img
            src="https://img.icons8.com/?size=100&id=82766&format=png&color=000000"
            alt=""
            className="w-10 mx-2"
          />
          <div>
            {" "}
            <h1>Special discounts</h1>
            <h1 className="text-[#9A9A9A]">Guaranteed saving</h1>
          </div>
        </div>
        <div className="mx-5 my-5 md:mx-10 flex flex-row">
          <img
            src="https://img.icons8.com/?size=100&id=Xhj6nS1DPOPn&format=png&color=000000"
            alt=""
            className="w-10 mx-2"
          />
          <div>
            {" "}
            <h1>Buyer protection</h1>
            <h1 className="text-[#9A9A9A]">secure payments</h1>
          </div>
        </div>
        <div className="mx-5 my-2 md:mx-10 flex flex-row">
          <img
            src="https://img.icons8.com/?size=100&id=30379&format=png&color=000000"
            alt=""
            className="w-10 mx-2"
          />
          <div>
            <h1>Custom service</h1>
            <h1 className="text-[#9A9A9A]">Give us feedback</h1>
          </div>
        </div>
      </div>
      <CategoryBanner />
      <Marque />
      <Quote />
      <FAQ />
      <Instagram />
    </main>
  );
}
