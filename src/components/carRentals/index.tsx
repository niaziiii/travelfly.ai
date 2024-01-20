import React from "react";
import Carousel from "../shared/carousel";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import MainSection from "./list/mainSection";
import AmazingDestination from "./list/amazingDestination";
import HeroSection from "../sections/heroSection";
import TaxiSearch from "./list/carSearch";

const imageUrl =
  "https://www.ecorentacar.com/wp-content/uploads/2019/03/Luxury-Fleet-Banner.jpg";

const CarRentalPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection imageUrl={imageUrl}>
          <TaxiSearch />
        </HeroSection>
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
