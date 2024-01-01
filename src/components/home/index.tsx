"use client";
import React from "react";
import Carousel from "../shared/carousel";
import PlacesInfo from "../sections/placesInfoSection";
import CalenderSection from "../sections/calenderSection";
import CompanyInfoSection from "../sections/companyInfoSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";
import AssociatesSection from "../sections/associatesSection";
const slidesData = [
  {
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/954/896/909/aeroplane-hd-wallpaper-preview.jpg",
  },
  {
    imageUrl:
      "https://www.siliconrepublic.com/wp-content/uploads/2022/11/AdobeStock_20136083-718x523.jpeg",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <div style={{ height: "500px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        {/* places info section */}
        <PlacesInfo />
        {/* Flifgt calender section */}
        <CalenderSection />
        {/* Company Info section */}
        <CompanyInfoSection />
        {/* map Section */}
        <MapSection />
        {/* Offer section */}
        <OfferSection />
        {/* Popular cities */}
        <PopularCitiesSection />
        {/* Associates Section */}
        <AssociatesSection />
        <div style={{ height: "480px" }}>
          <Carousel slidesData={slidesData} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
