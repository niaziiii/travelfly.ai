import React from "react";
import Carousel from "../shared/carousel";
import OfferSection from "../sections/offerSection";
import TourAndActivitySecion from "../sections/tourAndActivSection";
import HeroSection from "../sections/heroSection";
import TNSearchWidget from "./list/ticketSearch";

const imageUrl =
  "https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ";

const EventsPage = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* slider */}
        <HeroSection imageUrl={imageUrl}>
          <TNSearchWidget />
        </HeroSection>
        {/* Offer Section  */}
        <OfferSection />
        <TourAndActivitySecion />
      </div>
    </>
  );
};

export default EventsPage;
