"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="absolute top-10 left-14 z-10">
          <h1
            className="font-extrabold text-6xl text-white font-serif "
            style={{ letterSpacing: -6, lineHeight: 1.1 }}
          >
            Relax & Enjoy
            <br /> the World
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000, // Adjust the delay time in milliseconds
            disableOnInteraction: false, // Allow manual navigation even during autoplay
          }}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/954/896/909/aeroplane-hd-wallpaper-preview.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img
              src="https://www.siliconrepublic.com/wp-content/uploads/2022/11/AdobeStock_20136083-718x523.jpeg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
