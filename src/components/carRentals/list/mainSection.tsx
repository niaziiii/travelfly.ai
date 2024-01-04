import Link from "next/link";
import React from "react";
const MainSection = () => {
  return (
    <>
      <div className="mx-auto my-10 max-w-screen-lg flex justify-between align-baseline">
        <div className="flex w-full items-center">
          <div className="mb-2 w-1/2">
            <h2 className="  text-2xl text-red-700 font-yes">Choose your</h2>
            <h2 className=" font-extrabold text-7xl text-black font-serif">
              Best Car Rental Deals
            </h2>
            <p className="mt-4 mr-2">
              When you need a car to hire, we provide you with a range of car
              listings filled with the lowest and most affordable prices. As a
              reputed car rental broker firm, we support car rental suppliers
              offering a variety of car brands including Chevrolet, Fiat and
              Ford, as well as exclusive benefits for our customers like
              collision damage waivers, unlimited kilometers, finest locations
              offices, and theft protection.
            </p>
            <Link
              href={
                "https://www.klook.com/en-US/city/131-abu-dhabi-things-to-do/?aid=48171&_currency=USD&aff_adid=782508&aff_klick_id=55284354358-48171-782508-db012f3c-1c0a-4ef8-844b-8052fe864f73&aff_kepler_id=10da2094-48d3-4238-9fcf-facc4a7576d3&aff_exp_id=&aff_group_id=&spm=Widget.DynamicWidget_TTD_ViewMore&clickId=faa8673019&aff_label1=abu&aff_label2=&aff_label3=&aff_pid=&aff_sid=&utm_medium=affiliate-alwayson&utm_source=non-network&utm_campaign=48171&utm_term=&utm_content="
              }
            >
              <button
                type="button"
                className="py-2.5 px-5 mt-4 text-sm font-medium text-white focus:outline-none bg-red-700 rounded-lg border border-red-600 hover:bg-red-500 hover:text-white focus:z-10  "
              >
                Book Now
              </button>
            </Link>
          </div>
          <img
            className="w-1/2 rounded-t-lg h-full md:rounded-lg"
            src="https://travelfly.ai/wp-content/uploads/2023/12/vinayak-sharma-vgv19wm8yQ4-unsplash-scaled-1-1024x683.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MainSection;
