"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TabComponent from "../home/lists/tabs";
import SearchBar from "./searchBar";
export default function Carousel({ slidesData }: any) {
  // Array of slide data
  const tabs = ["Flights", "Hotels", "Trips.com"];

  return (
    <>
      <div className="w-full h-full relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10  text-white">
          <h1 className="font-extrabold text-6xl font-serif space-x-1 drop-shadow-xl">
            Relax & Enjoy
            <br /> the World
          </h1>
          <p className="text-lg drop-shadow-xl">
            We believe that there are a huge best and beautiful cities
            destinations in the world. Every city perhaps will become closer to
            you. Just simply search and compare the best hotels and flights
            price with our travel finder.
          </p>
          <SearchBar />
          <TabComponent tabs={tabs} />
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
