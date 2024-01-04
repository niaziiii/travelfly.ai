import React from "react";
import Carousel from "../shared/carousel";
import CalenderSection from "../sections/calenderSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";

const slidesData = [
  {
    imageUrl:
      "https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-6c48e5a6aff547d2703693450c4805978de47435-s1100-c50.jpg",
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
        {/* slider */}
        <div style={{ height: "500px" }}>
          <Carousel slidesData={slidesData} />
        </div>
        {/* Offer section */}
        <OfferSection />
      </div>
    </>
  );
};

export default FlightsPage;
