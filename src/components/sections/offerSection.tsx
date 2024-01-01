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
        <div className=" flex flex-wrap justify-between align-middle my-3">
          <OfferCard />
          <OfferCard />
          <OfferCard />
          <OfferCard />
        </div>
        <div className="w-full text-center my-8">
          <Link
            href={
              "https://www.klook.com/en-US/city/131-abu-dhabi-things-to-do/?aid=48171&_currency=USD&aff_adid=782508&aff_klick_id=55284354358-48171-782508-db012f3c-1c0a-4ef8-844b-8052fe864f73&aff_kepler_id=10da2094-48d3-4238-9fcf-facc4a7576d3&aff_exp_id=&aff_group_id=&spm=Widget.DynamicWidget_TTD_ViewMore&clickId=faa8673019&aff_label1=abu&aff_label2=&aff_label3=&aff_pid=&aff_sid=&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=48171&utm_term=&utm_content="
            }
          >
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-red-600 hover:bg-red-700 hover:text-white focus:z-10  "
            >
              View more
            </button>
          </Link>
          <p className="text-sm">Powered by KLOOK</p>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
