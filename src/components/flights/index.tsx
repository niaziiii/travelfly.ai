"use client";
import React from "react";
import Carousel from "../shared/carousel";
import CalenderSection from "../sections/calenderSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";

const slidesData = [
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/sunset-view-airplane-on-airport-600nw-1889546404.jpg",
  },
];

const FlightsPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "500px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        {/* Popular cities */}
        <PopularCitiesSection />
        {/* Flifgt calender section */}
        <CalenderSection />
        {/* map Section */}
        <MapSection />
        {/* Offer section */}
        <OfferSection />
      </div>
    </>
  );
};

export default FlightsPage;
