"use client";
import React from "react";
import Carousel from "../shared/carousel";
import CalenderSection from "../sections/calenderSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import MainSection from "./list/mainSection";
import AmazingDestination from "./list/amazingDestination";

const slidesData = [
  {
    imageUrl:
      "https://www.ecorentacar.com/wp-content/uploads/2019/03/Luxury-Fleet-Banner.jpg",
  },
];

const CarRentalPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "500px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        {/* main section  */}
        <MainSection />
        {/* amazing destination Section  */}
        <AmazingDestination />
        {/* Offer section */}
        <OfferSection />
        {/* tour and activity */}
        <TourAndActivitySecion />
      </div>
    </>
  );
};

export default CarRentalPage;
