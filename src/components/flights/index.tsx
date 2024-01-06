import React from "react";
import Carousel from "../shared/carousel";
import CalenderSection from "../sections/calenderSection";
import MapSection from "../sections/mapSection";
import OfferSection from "../sections/offerSection";
import PopularCitiesSection from "../sections/popularCitiesSection";
import HeroSection from "../sections/heroSection";
import FlightSearch from "../shared/flightSearch";
import Trip from "../shared/tripSearch";

const imageUrl =
  "https://media.npr.org/assets/img/2021/10/06/gettyimages-1302813215_wide-6c48e5a6aff547d2703693450c4805978de47435-s1100-c50.jpg";
const description =
  "Travel the world wisely and on your schedule. Plan Ahead With Our Premium Offers. More Options, Greater Flexibility, Better Flights. Save Up to 20% on Fares. Extra Baggage, Super Wi-Fi and More await you.";
const FlightsPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection
          imageUrl={imageUrl}
          heading="Search & Book Flights"
          description={description}
        >
          <Trip />
        </HeroSection>
        {/* Popular cities */}
        <PopularCitiesSection />
        {/* Flifgt calender section */}
        <CalenderSection />
        {/* map Section */}
        <MapSection />
        {/* slider */}
        <HeroSection imageUrl={imageUrl} />
        {/* Offer section */}
        <OfferSection />
      </div>
    </>
  );
};

export default FlightsPage;
