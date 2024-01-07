"use client";
import React from "react";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import TaxiSearchSection from "./list/taxiSearchSection";
import HeroSection from "../sections/heroSection";

const imageUrl =
  "https://www.wien.info/resource/image/310870/19x10/1200/630/e93154b2abfe063448494c5c1c02029f/24FD80255D998FD5B520793F866F6217/taxi-schilder.jpg";
const description =
  "Traveling The World By Car? Plan Ahead With Our Premium Car Rentals. More Options, Less Stress, Discounted Rates.";

const TaxiPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection
          imageUrl={imageUrl}
          heading="Travel Satisfaction Guaranteed"
          description={description}
        >
          <iframe
            className="w-screen px-10"
            style={{ minHeight: 220 }}
            src="https://widget.kiwitaxi.com/search_form-en-6.html#refparam=tpo&refid=4194fa3d9db94335bb6cc575d-507485&refparam2=tpo_bid&refid2=c15407d4&country=0&placefrom=&placeto=&language=en&currency=USD"
          ></iframe>
        </HeroSection>
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
