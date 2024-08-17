import Image from "next/image";
import Navbar from "@/components/Navbar";
import Courousel from "@/components/Courousel";
import CategoryBanner from "@/components/CategoryBanner";
import Marque from "@/components/Marque";
import Quote from "@/components/Quote";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Courousel />
      <div className="flex flex-row mx-40 my-20 ">
        <div className="mx-10">
          <h1>Free Shipping</h1>
          <h1 className="text-[#9A9A9A]">Standard Shipping</h1>
        </div>
        <div className="mx-10">
          <h1>Special discounts</h1>
          <h1 className="text-[#9A9A9A]">Guaranteed saving</h1>
        </div>
        <div className="mx-10">
          <h1>Buyer protection</h1>
          <h1 className="text-[#9A9A9A]">secure payments</h1>
        </div>
        <div className="mx-10">
          <h1>Custom service</h1>
          <h1 className="text-[#9A9A9A]">Give us feedback</h1>
        </div>
      </div>
      <CategoryBanner />
      <Marque />
      <Quote />
      <Instagram />
      <Footer />
    </main>
  );
}
