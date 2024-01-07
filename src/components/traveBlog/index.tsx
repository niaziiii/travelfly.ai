"use client";
import React from "react";
import Carousel from "../shared/carousel";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import BlogCard from "./list/blogCard";

const imageUrl =
  "https://images.ctfassets.net/0wjmk6wgfops/2S36YEBZQpXvo5gythmoZ1/6fd70e9033f37552796396adfc4edc4f/farshad_rezvanian_Eelegt4hFNc_unsplash_fefcd04d-c9b3-4956-8c4f-b1da3e5d4d09.jpg";
const TraveBlogPage = () => {
  return (
    <>
      {/* head section  */}
      <div className="w-full h-full">
        <div
          className="bg-cover bg-center min-h-72  flex justify-center items-center text-white overflow-hidden"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <div className="text-center">
            <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-shadow-lg">
              Blog
            </h1>
          </div>
        </div>
      </div>
      {/* content section
       */}
      <div className=" my-6 p-6 flex flex-wrap justify-around items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      {/* pagination  */}
      <nav aria-label="Page navigation example" className="mx-14">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a
              href="#"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 rounded-l-lg hover:bg-red-500 hover:text-gray-100 "
            >
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 hover:bg-red-500 hover:text-gray-100 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 hover:bg-red-500 hover:text-gray-100 "
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 hover:bg-red-500 hover:text-gray-100 "
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 hover:bg-red-500 hover:text-gray-100 "
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center mx-1 px-4 h-10 leading-tight text-gray-500 bg-white hober:border hover:border-red-600 rounded-e-lg hover:bg-red-500 hover:text-gray-100 "
            >
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TraveBlogPage;
