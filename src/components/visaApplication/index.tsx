"use client";
import React from "react";
import Carousel from "../shared/carousel";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";

const slidesData = [
  {
    imageUrl:
      "https://cdn.insuremytrip.com/resources/2894/schengen-travel-visa.jpg",
  },
];

const VisaApplicationPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "600px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        {/* Offer Section  */}
        <OfferSection />
        <TourAndActivitySecion />
      </div>
    </>
  );
};

export default VisaApplicationPage;
