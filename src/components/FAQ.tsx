"use client";
import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ ",
  rows: [
    {
      title: "How do I place an order",
      content:
        "Pick your preferred pieces of jewellery and dm us with what would you like to order",
    },
    {
      title: "Shipping Policy",
      content:
        "We strive to offer fast and reliable shipping options within India. Orders are typically delivered within 4-7 days.",
    },
    {
      title: "Payment Options ?",
      content: "We are currently accepting payments via GPAY",
    },
    {
      title: "Returns and Exchange policy?",
      content:
        "We do not accept returns or exchanges. For any missing items  or damages, complaints will be accepted via a video.",
    },
    {
      title: "Do you offer jewelery care tips ?",
      content:
        "Yes, we provide simple care instructions to help maintain the beauty and longevity of your jewelery. This include avoiding ontact with water, chemicals, and storing your pieces in a dry, cool places when not in use. ",
    },
    {
      title: "Can I wear MERAKI everyday ?",
      content:
        "Absolutely! Our minimilist jewelery is designed to be versatile and sustainable for everyday wear. Just remember to follow our care tips to keep your pieces looking their best. ",
    },
  ],
};

const styles = {
  bgColor: "#F8F9FA",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "red",
};

const FAQ = () => {
  return (
    <div className=" px-5 md:px-40 py-16 bg-[#F8F9FA]">
      <Faq data={data} styles={styles} />
    </div>
  );
};

export default FAQ;
