"use client";
import React from "react";
import Carousel from "../shared/carousel";
import TourSection from "./list/tourSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import CityViseSection from "./list/cityViseTourSection";
import HeroSection from "../sections/heroSection";
const imageUrl =
  "https://avada.website/tour-operator/wp-content/uploads/sites/169/2022/06/tour-operator-hero-1.jpg";

const TourPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection imageUrl={imageUrl} />
        {/* Tour Section  */}
        <TourSection />
        <TourAndActivitySecion />
        <CityViseSection city={"Istanbul"} />
        <CityViseSection city={"Tokyo"} />
        <CityViseSection city={"Greece"} />
        <CityViseSection city={"Houston"} />
      </div>
    </>
  );
};

export default TourPage;
