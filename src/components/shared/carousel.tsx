"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TabComponent from "../home/lists/tabs";
import SearchBar from "./searchBar";
export default function Carousel({ slidesData, headContent, navContent }: any) {
  // Array of slide data
  const tabs = [
    { name: navContent?.home, link: "/" },
    { name: navContent?.flights, link: "/flights" },
    { name: navContent?.hotels, link: "/hotels" },
    { name: navContent?.carRentals, link: "/car-rentals" },
    { name: navContent?.taxi, link: "/taxi" },
    { name: navContent.tours, link: "/tours" },
    { name: navContent.eventsTickets, link: "/events" },
    { name: navContent.visaApplications, link: "/visa-applications" },
  ];

  return (
    <>
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-3 max-w-screen-lg  z-10  text-white">
          {/* <h1 className="font-extrabold text-4xl font-serif space-x-1 drop-shadow-xl">
            Relax & Enjoy
            <br /> the World
          </h1> */}
          <h1 className="font-extrabold text-5xl font-serif space-x-1 drop-shadow-xl">
            {headContent?.title1}
          </h1>
          <h1 className="font-extrabold text-xl font-serif space-x-1 drop-shadow-xl">
            {headContent?.title2}
          </h1>
          <div className="">
            <SearchBar />
          </div>
          <div className="lg:block hidden">
            <TabComponent tabs={tabs} />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {/* Use map function to dynamically generate SwiperSlide components */}
          {slidesData?.map((slide: any, index: any) => (
            <SwiperSlide key={index} className="swiper-slide">
              <img src={slide.imageUrl} alt="slide image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
