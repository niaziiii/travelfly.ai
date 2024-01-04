"use client";
import React from "react";
import Carousel from "../shared/carousel";
import CalenderSection from "../sections/calenderSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import TaxiSearchSection from "./list/taxiSearchSection";

const slidesData = [
  {
    imageUrl:
      "https://www.wien.info/resource/image/310870/19x10/1200/630/e93154b2abfe063448494c5c1c02029f/24FD80255D998FD5B520793F866F6217/taxi-schilder.jpg",
  },
];

const TaxiPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "600px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        <TaxiSearchSection />
        {/* Offer section */}
        <OfferSection />
        {/* tour and activity */}
        <TourAndActivitySecion />
      </div>
    </>
  );
};

export default TaxiPage;
