import { Link } from "@/navigation";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="p-4 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src="https://travelfly.ai/wp-content/uploads/2023/12/TravelFly-1-1536x459.png"
                className="mx-3 my-6 h-28 max-w-screen-sm"
                alt="travelfly Logo"
              />
            </a>
          </div>
          <div className="w-full md:w-auto md:ml-14">
            <h6 className="text-2xl font-bold">Welcome To Travelfly.ai</h6>
            <p className="text-md mt-2">
              Travelfly.ai Is A Travel Meta Search Site That Finds And Compares
              The Best Offers And Special Deals On Hotels, Flights, Cruises, Car
              Rentals, Taxis, Transfers, Tours, Bike/Motorcycle Rentals,
              Activities, Concerts, Sports, And Theater Tickets. Travelfly.ai
              Welcomes You, And We Hope You Enjoy Our Service.
            </p>
            <ul className="text-gray-600 flex flex-wrap mt-4">
              <li className="mx-2 my-1">
                <Link href="/travel-blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li className="mx-2 my-1">
                <a href="/" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mx-2 my-1">
                <a href="/" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mx-2 my-1">
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mx-2 my-1">
                <a href="/" className="hover:underline">
                  Affiliate Disclaimer
                </a>
              </li>
              <li className="mx-2 my-1">
                <a href="/" className="hover:underline">
                  Terms And Condition
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />
        <div className="flex justify-center py-4 text-white bg-red-600">
          <span className="text-sm sm:text-center">
            © 2023 All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
