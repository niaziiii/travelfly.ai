import React from "react";
import Link from "next/link";
import OfferCard from "../home/lists/offerCard";
const OfferSection = () => {
  return (
    <>
      {" "}
      <div className="mx-auto my-8 max-w-screen-lg">
        <div className="mb-2">
          <h2 className="  text-2xl text-red-700 font-yes">Our trending</h2>
          <h2 className=" font-extrabold text-7xl text-black font-serif">
            Best Offers
          </h2>
        </div>
        <div className=" flex flex-wrap justify-between align-middle w-full my-3">
          <iframe
            className="w-full"
            style={{ minHeight: "120vh" }}
            scrolling="no"
            src="https://affiliate.klook.com/widget/render?adid=782480&lang=en&currency=USD&cardh=126&padding=92&lgh=470&edgevalue=655&cid=106&tid=1&amount=5&prod=dynamic_widget&uid=1"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
