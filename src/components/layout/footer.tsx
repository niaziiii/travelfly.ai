import { Link } from "@/navigation";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50">
        <div className="p-6 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://travelfly.ai/wp-content/uploads/2023/12/TravelFly-1-1536x459.png"
                className="mx-3 xs:m-auto my-6 max-w-full h-auto" // Adjusted classes here
                alt="travelfly Logo"
              />
            </Link>
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
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mx-2 my-1">
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mx-2 my-1">
                <Link href="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mx-2 my-1">
                <Link href="/" className="hover:underline">
                  Affiliate Disclaimer
                </Link>
              </li>
              <li className="mx-2 my-1">
                <Link href="/" className="hover:underline">
                  Terms And Condition
                </Link>
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
